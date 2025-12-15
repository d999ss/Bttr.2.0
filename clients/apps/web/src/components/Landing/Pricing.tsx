import ArrowOutwardOutlined from '@mui/icons-material/ArrowOutwardOutlined'
import Check from '@mui/icons-material/Check'
import CheckOutlined from '@mui/icons-material/CheckOutlined'
import CloseOutlined from '@mui/icons-material/CloseOutlined'
import Button from '@polar-sh/ui/components/atoms/Button'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.05,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
}

export const Pricing = () => {
  return (
    <motion.div
      className={`dark:bg-polar-900 flex w-full flex-col overflow-hidden rounded-2xl bg-white md:flex-row md:rounded-4xl`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="flex flex-col justify-center gap-y-8 p-8 md:w-1/2 md:p-16">
        <div className="flex flex-col gap-y-8">
          <motion.h2
            className="text-2xl leading-normal! md:text-4xl"
            variants={itemVariants}
          >
            Engagement Models
          </motion.h2>
          <motion.p
            className="text-lg leading-relaxed text-pretty"
            variants={itemVariants}
          >
            We structure engagements around accountability, outcomes, and long term value.
          </motion.p>
          <ul className="flex flex-col gap-y-1">
            <motion.li
              className="flex flex-row items-center gap-x-2"
              variants={itemVariants}
            >
              <Check className="text-emerald-500" fontSize="small" />
              <p className="leading-relaxed text-pretty">
                Product and Platform Builds
              </p>
            </motion.li>
            <motion.li
              className="flex flex-row items-center gap-x-2"
              variants={itemVariants}
            >
              <Check className="text-emerald-500" fontSize="small" />
              <p className="leading-relaxed text-pretty">Strategic Design and Engineering Retainers</p>
            </motion.li>
            <motion.li
              className="flex flex-row items-center gap-x-2"
              variants={itemVariants}
            >
              <Check className="text-emerald-500" fontSize="small" />
              <p className="leading-relaxed text-pretty">
                Long Term Platform Ownership
              </p>
            </motion.li>
          </ul>
          <motion.span
            className="flex flex-row gap-x-4 text-sm text-gray-400"
            variants={itemVariants}
          >
            <Link href="/contact">
              <Button className="dark:hover:bg-polar-50 rounded-full border-none bg-black hover:bg-neutral-900 dark:bg-white dark:text-black">
                Start a Conversation
              </Button>
            </Link>
            <Link href="/resources/why">
              <Button variant="secondary" className="rounded-full">
                Why Bttr
                <ArrowOutwardOutlined fontSize="inherit" className="ml-2" />
              </Button>
            </Link>
          </motion.span>
        </div>
      </div>

      <div className="dark:bg-polar-800 relative flex flex-col items-center justify-center bg-gray-100 p-8 text-sm md:w-1/2 md:p-16">
        <Image
          className="absolute inset-0 h-full w-full object-cover"
          src="/assets/landing/abstract_07.jpg"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 75vw, 640px"
          loading="lazy"
          alt=""
        />
        <div className="dark:border-polar-700 dark:bg-polar-900 z-10 w-96 overflow-hidden rounded-xl border border-gray-200 bg-white">
          <table className="w-full">
            <thead className="dark:bg-polar-800 bg-gray-50">
              <tr className="dark:border-polar-700 border-b border-gray-200">
                <th className="dark:border-polar-700 border-r border-gray-200 p-4 text-left font-medium">
                  Feature
                </th>
                <th className="dark:border-polar-700 border-r border-gray-200 p-4 text-center font-medium">
                  Bttr
                </th>
                <th className="p-4 text-center font-medium">Agencies</th>
              </tr>
            </thead>
            <tbody className="dark:divide-polar-700 divide-y divide-gray-200">
              <tr>
                <td className="dark:border-polar-700 border-r border-gray-200 p-4">
                  Long Term Ownership
                </td>
                <td className="dark:border-polar-700 border-r border-gray-200 p-4 text-center">
                  <CheckOutlined className="text-green-600" fontSize="small" />
                </td>
                <td className="p-4 text-center">
                  <CloseOutlined className="text-red-600" fontSize="small" />
                </td>
              </tr>
              <tr>
                <td className="dark:border-polar-700 border-r border-gray-200 p-4">
                  Engineering Depth
                </td>
                <td className="dark:border-polar-700 border-r border-gray-200 p-4 text-center">
                  <CheckOutlined className="text-green-600" fontSize="small" />
                </td>
                <td className="p-4 text-center">
                  <CloseOutlined className="text-red-600" fontSize="small" />
                </td>
              </tr>
              <tr>
                <td className="dark:border-polar-700 border-r border-gray-200 p-4">
                  Accountability
                </td>
                <td className="dark:border-polar-700 border-r border-gray-200 p-4 text-center">
                  <CheckOutlined className="text-green-600" fontSize="small" />
                </td>
                <td className="p-4 text-center">
                  <CloseOutlined className="text-red-600" fontSize="small" />
                </td>
              </tr>
              <tr>
                <td className="dark:border-polar-700 border-r border-gray-200 p-4">
                  Senior Execution
                </td>
                <td className="dark:border-polar-700 border-r border-gray-200 p-4 text-center">
                  <CheckOutlined className="text-green-600" fontSize="small" />
                </td>
                <td className="p-4 text-center">
                  <CloseOutlined className="text-red-600" fontSize="small" />
                </td>
              </tr>
              <tr>
                <td className="dark:border-polar-700 border-r border-gray-200 p-4">
                  Regulatory Compliance
                </td>
                <td className="dark:border-polar-700 border-r border-gray-200 p-4 text-center">
                  <CheckOutlined className="text-green-600" fontSize="small" />
                </td>
                <td className="p-4 text-center">
                  <CloseOutlined className="text-red-600" fontSize="small" />
                </td>
              </tr>
              <tr>
                <td className="dark:border-polar-700 border-r border-gray-200 p-4">
                  Systems Delivery
                </td>
                <td className="dark:border-polar-700 border-r border-gray-200 p-4 text-center">
                  <CheckOutlined className="text-green-600" fontSize="small" />
                </td>
                <td className="p-4 text-center">
                  <CloseOutlined className="text-red-600" fontSize="small" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  )
}
