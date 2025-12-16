#!/usr/bin/env node

/**
 * Image Optimization Script
 * Converts large JPG/PNG images to WebP format while maintaining quality
 *
 * Usage: node scripts/optimize-images.mjs
 *
 * Options:
 *   --dry-run    Show what would be converted without making changes
 *   --quality=N  Set WebP quality (default: 85, range: 0-100)
 *   --min-size=N Minimum file size in KB to convert (default: 500)
 */

import sharp from 'sharp'
import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const PUBLIC_DIR = path.join(__dirname, '../public/assets')

// Parse command line arguments
const args = process.argv.slice(2)
const dryRun = args.includes('--dry-run')
const qualityArg = args.find(a => a.startsWith('--quality='))
const minSizeArg = args.find(a => a.startsWith('--min-size='))

const QUALITY = qualityArg ? parseInt(qualityArg.split('=')[1]) : 85
const MIN_SIZE_KB = minSizeArg ? parseInt(minSizeArg.split('=')[1]) : 500
const MIN_SIZE_BYTES = MIN_SIZE_KB * 1024

// Stats
let totalOriginalSize = 0
let totalNewSize = 0
let convertedCount = 0
let skippedCount = 0
let errorCount = 0

async function findImages(dir) {
  const images = []

  async function scan(directory) {
    const entries = await fs.readdir(directory, { withFileTypes: true })

    for (const entry of entries) {
      const fullPath = path.join(directory, entry.name)

      if (entry.isDirectory()) {
        await scan(fullPath)
      } else if (entry.isFile()) {
        const ext = path.extname(entry.name).toLowerCase()
        if (['.jpg', '.jpeg', '.png'].includes(ext)) {
          const stats = await fs.stat(fullPath)
          if (stats.size >= MIN_SIZE_BYTES) {
            images.push({
              path: fullPath,
              size: stats.size,
              ext: ext
            })
          }
        }
      }
    }
  }

  await scan(dir)
  return images
}

async function convertToWebP(imagePath, originalSize) {
  const webpPath = imagePath.replace(/\.(jpg|jpeg|png)$/i, '.webp')

  try {
    const image = sharp(imagePath)
    const metadata = await image.metadata()

    // For very large images, resize to max 2400px width while maintaining aspect ratio
    let pipeline = image
    if (metadata.width > 2400) {
      pipeline = pipeline.resize(2400, null, {
        withoutEnlargement: true,
        fit: 'inside'
      })
    }

    // Convert to WebP with high quality
    await pipeline
      .webp({
        quality: QUALITY,
        effort: 6, // Higher effort = better compression, slower
      })
      .toFile(webpPath)

    const newStats = await fs.stat(webpPath)
    const savings = originalSize - newStats.size
    const savingsPercent = ((savings / originalSize) * 100).toFixed(1)

    return {
      success: true,
      webpPath,
      originalSize,
      newSize: newStats.size,
      savings,
      savingsPercent
    }
  } catch (error) {
    return {
      success: false,
      error: error.message
    }
  }
}

function formatSize(bytes) {
  if (bytes >= 1024 * 1024) {
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB'
  }
  return (bytes / 1024).toFixed(0) + ' KB'
}

async function main() {
  console.log('\n🖼️  Image Optimization Script')
  console.log('================================')
  console.log(`Quality: ${QUALITY}`)
  console.log(`Min size: ${MIN_SIZE_KB} KB`)
  console.log(`Mode: ${dryRun ? 'DRY RUN (no changes)' : 'LIVE'}`)
  console.log('')

  console.log('🔍 Scanning for images...')
  const images = await findImages(PUBLIC_DIR)
  console.log(`Found ${images.length} images over ${MIN_SIZE_KB}KB\n`)

  if (images.length === 0) {
    console.log('✅ No images need optimization!')
    return
  }

  // Sort by size descending
  images.sort((a, b) => b.size - a.size)

  for (const image of images) {
    const relativePath = path.relative(PUBLIC_DIR, image.path)
    const webpExists = await fs.access(image.path.replace(/\.(jpg|jpeg|png)$/i, '.webp'))
      .then(() => true)
      .catch(() => false)

    if (webpExists) {
      console.log(`⏭️  Skip (WebP exists): ${relativePath}`)
      skippedCount++
      continue
    }

    if (dryRun) {
      console.log(`📋 Would convert: ${relativePath} (${formatSize(image.size)})`)
      totalOriginalSize += image.size
      continue
    }

    process.stdout.write(`🔄 Converting: ${relativePath} (${formatSize(image.size)})...`)

    const result = await convertToWebP(image.path, image.size)

    if (result.success) {
      console.log(` ✅ ${formatSize(result.newSize)} (-${result.savingsPercent}%)`)
      totalOriginalSize += result.originalSize
      totalNewSize += result.newSize
      convertedCount++
    } else {
      console.log(` ❌ Error: ${result.error}`)
      errorCount++
    }
  }

  console.log('\n================================')
  console.log('📊 Summary')
  console.log('================================')

  if (dryRun) {
    console.log(`Would convert: ${images.length - skippedCount} images`)
    console.log(`Would skip: ${skippedCount} images (WebP exists)`)
    console.log(`Total size: ${formatSize(totalOriginalSize)}`)
    console.log('\nRun without --dry-run to convert images.')
  } else {
    console.log(`Converted: ${convertedCount} images`)
    console.log(`Skipped: ${skippedCount} images`)
    console.log(`Errors: ${errorCount} images`)
    console.log(`Original size: ${formatSize(totalOriginalSize)}`)
    console.log(`New size: ${formatSize(totalNewSize)}`)
    console.log(`Savings: ${formatSize(totalOriginalSize - totalNewSize)} (${((1 - totalNewSize/totalOriginalSize) * 100).toFixed(1)}%)`)

    if (convertedCount > 0) {
      console.log('\n⚠️  Next steps:')
      console.log('1. Update image references in code (.jpg/.png → .webp)')
      console.log('2. Test the site to ensure images load correctly')
      console.log('3. Optionally delete original files after verification')
    }
  }
}

main().catch(console.error)
