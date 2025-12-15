import { schemas } from '@polar-sh/client'
import { BttrLogotype } from '../Brand/BttrLogotype'
import Login from './Login'

interface AuthModalProps {
  returnTo?: string
  returnParams?: Record<string, string>
  signup?: schemas['UserSignupAttribution']
}

export const AuthModal = ({
  returnTo,
  returnParams,
  signup,
}: AuthModalProps) => {
  const isSignup = signup !== undefined
  const title = isSignup ? 'Sign Up' : 'Log In'

  const copy = isSignup ? (
    <p className="dark:text-polar-500 text-xl text-gray-500">
      Access your project dashboard and collaborate with the Bttr. team.
    </p>
  ) : null

  return (
    <div className="overflow-y-auto p-12">
      <div className="flex flex-col justify-between gap-y-16">
        <BttrLogotype variant="logotype" size={120} />

        <div className="flex flex-col gap-y-4">
          <h1 className="text-3xl">{title}</h1>
          {copy}
        </div>

        <div className="flex flex-col gap-y-12">
          <Login
            returnTo={returnTo}
            returnParams={returnParams}
            signup={signup}
          />
        </div>
      </div>
    </div>
  )
}
