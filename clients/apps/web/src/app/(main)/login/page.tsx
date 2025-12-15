import Login from '@/components/Auth/Login'
import { BttrLogotype } from '@/components/Brand/BttrLogotype'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Log in to Bttr.',
}

export default async function Page(props: {
  searchParams: Promise<{
    return_to?: string
  }>
}) {
  const searchParams = await props.searchParams

  const { return_to, ...rest } = searchParams

  return (
    <div className="flex h-screen w-full grow items-center justify-center">
      <div className="dark:bg-polar-900 flex w-full max-w-md flex-col justify-between gap-16 rounded-4xl bg-gray-50 p-12">
        <div className="flex flex-col gap-y-8">
          <BttrLogotype variant="icon" size={60} />
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl text-black dark:text-white">
              Welcome to Bttr
            </h2>
            <h2 className="dark:text-polar-400 text-lg text-gray-500">
              Mission-critical digital products
            </h2>
          </div>
        </div>
        <Login returnTo={return_to} returnParams={rest} />
      </div>
    </div>
  )
}
