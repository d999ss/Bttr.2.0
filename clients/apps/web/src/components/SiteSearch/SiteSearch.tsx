'use client'

import { getTypeLabel, searchSite, type SearchItem } from '@/data/searchIndex'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@polar-sh/ui/components/ui/command'
import * as Dialog from '@radix-ui/react-dialog'
import {
  Briefcase,
  Building2,
  Factory,
  FileText,
  Home,
  Search,
  User,
  X,
} from 'lucide-react'
import { useRouter } from 'next/navigation'
import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { twMerge } from 'tailwind-merge'

interface SiteSearchProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const typeIcons: Record<SearchItem['type'], ReactNode> = {
  page: <Home className="h-4 w-4" />,
  'case-study': <Briefcase className="h-4 w-4" />,
  resource: <FileText className="h-4 w-4" />,
  industry: <Factory className="h-4 w-4" />,
  team: <User className="h-4 w-4" />,
}

export function SiteSearch({ open, onOpenChange }: SiteSearchProps) {
  const router = useRouter()
  const [query, setQuery] = useState('')

  const results = useMemo(() => searchSite(query), [query])

  const groupedResults = useMemo(() => {
    const groups: Record<string, SearchItem[]> = {}
    for (const item of results) {
      if (!groups[item.type]) groups[item.type] = []
      groups[item.type].push(item)
    }
    return groups
  }, [results])

  const handleSelect = useCallback(
    (item: SearchItem) => {
      router.push(item.url)
      onOpenChange(false)
      setQuery('')
    },
    [router, onOpenChange],
  )

  // Reset query when dialog closes
  useEffect(() => {
    if (!open) setQuery('')
  }, [open])

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" />
        <Dialog.Content className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-top-2 data-[state=open]:slide-in-from-top-2 dark:bg-polar-950 dark:border-polar-800 fixed top-[15%] left-[50%] z-50 w-[95vw] max-w-2xl translate-x-[-50%] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl">
          <Dialog.Title className="sr-only">Search Bttr</Dialog.Title>

          <Command
            className="rounded-2xl border-none [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:tracking-wide [&_[cmdk-group-heading]]:text-gray-400 [&_[cmdk-group-heading]]:uppercase dark:[&_[cmdk-group-heading]]:text-polar-500"
            shouldFilter={false}
          >
            <div className="dark:border-polar-800 flex items-center border-b border-gray-100 px-4">
              <Search className="dark:text-polar-500 mr-3 h-5 w-5 shrink-0 text-gray-400" />
              <CommandInput
                placeholder="Search pages, work, team..."
                value={query}
                onValueChange={setQuery}
                wrapperClassName="border-none grow"
                className="dark:placeholder:text-polar-500 flex h-14 w-full grow border-0 bg-transparent text-base placeholder:text-gray-400 focus:outline-none focus:ring-0"
              />
              <button
                onClick={() => onOpenChange(false)}
                className="dark:text-polar-500 dark:hover:text-polar-300 ml-2 rounded-lg p-1.5 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-polar-800"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <CommandList className="max-h-[60vh] overflow-y-auto p-2">
              {query && results.length === 0 && (
                <CommandEmpty className="dark:text-polar-500 py-12 text-center text-sm text-gray-500">
                  No results found for "{query}"
                </CommandEmpty>
              )}

              {!query && (
                <div className="dark:text-polar-500 flex flex-col items-center justify-center py-12 text-gray-400">
                  <Search className="mb-3 h-8 w-8 opacity-40" />
                  <p className="text-sm">Start typing to search...</p>
                  <p className="mt-1 text-xs opacity-60">
                    Find pages, case studies, team members & more
                  </p>
                </div>
              )}

              {Object.entries(groupedResults).map(([type, items]) => (
                <CommandGroup
                  key={type}
                  heading={getTypeLabel(type as SearchItem['type'])}
                  className="px-1 py-2"
                >
                  {items.map((item) => (
                    <CommandItem
                      key={item.id}
                      value={item.id}
                      onSelect={() => handleSelect(item)}
                      className={twMerge(
                        'group dark:data-[selected=true]:bg-polar-800 cursor-pointer rounded-xl px-3 py-3',
                        'text-gray-700 data-[selected=true]:bg-gray-50 dark:text-white',
                        'transition-colors',
                      )}
                    >
                      <div className="flex items-start gap-3">
                        <div className="dark:bg-polar-800 dark:group-data-[selected=true]:bg-polar-700 mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-500 transition-colors group-data-[selected=true]:bg-[#D2A62C] group-data-[selected=true]:text-white dark:text-polar-400 dark:group-data-[selected=true]:text-white">
                          {typeIcons[item.type]}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{item.title}</span>
                            {item.highlight && (
                              <span className="rounded-full bg-[#D2A62C]/10 px-2 py-0.5 text-xs font-medium text-[#D2A62C]">
                                {item.highlight}
                              </span>
                            )}
                          </div>
                          <p className="dark:text-polar-500 mt-0.5 truncate text-sm text-gray-500">
                            {item.description}
                          </p>
                          {item.tags && item.tags.length > 0 && (
                            <div className="mt-1.5 flex flex-wrap gap-1">
                              {item.tags.slice(0, 3).map((tag) => (
                                <span
                                  key={tag}
                                  className="dark:bg-polar-800 dark:text-polar-400 rounded-md bg-gray-100 px-1.5 py-0.5 text-xs text-gray-500"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                        <div className="dark:text-polar-600 hidden shrink-0 text-xs text-gray-400 group-data-[selected=true]:block">
                          Press ↵
                        </div>
                      </div>
                    </CommandItem>
                  ))}
                </CommandGroup>
              ))}
            </CommandList>

            {query && results.length > 0 && (
              <div className="dark:border-polar-800 dark:text-polar-500 flex items-center justify-between border-t border-gray-100 px-4 py-2 text-xs text-gray-400">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <kbd className="dark:bg-polar-800 rounded bg-gray-100 px-1.5 py-0.5 font-mono">
                      ↑↓
                    </kbd>
                    Navigate
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="dark:bg-polar-800 rounded bg-gray-100 px-1.5 py-0.5 font-mono">
                      ↵
                    </kbd>
                    Open
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="dark:bg-polar-800 rounded bg-gray-100 px-1.5 py-0.5 font-mono">
                      esc
                    </kbd>
                    Close
                  </span>
                </div>
                <span>{results.length} results</span>
              </div>
            )}
          </Command>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

// Search trigger button component
export function SearchTrigger({
  onClick,
  className,
}: {
  onClick: () => void
  className?: string
}) {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        'dark:bg-polar-900 dark:border-polar-700 dark:text-polar-400 dark:hover:border-polar-600 dark:hover:text-polar-300 flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-3 py-1.5 text-sm text-gray-500 backdrop-blur-sm transition-all hover:border-gray-300 hover:text-gray-700',
        className,
      )}
    >
      <Search className="h-4 w-4" />
      <span className="hidden sm:inline">Search</span>
      <kbd className="dark:bg-polar-800 dark:text-polar-500 hidden rounded bg-gray-100 px-1.5 py-0.5 font-mono text-xs text-gray-400 sm:inline">
        ⌘K
      </kbd>
    </button>
  )
}
