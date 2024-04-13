'use client'

import { usePathname, useRouter } from "next/navigation"
import { useAuth } from "../components/context/AuthContext"
import { ReactNode, useEffect, useState } from "react"
import { logger } from "~/utils/logger"

export const withAuth = (component: ReactNode) => {
  const AuthComponent = () => {
    const [redirectTo, setRedirectTo] = useState<string | undefined>()
    const [isRedirectExecuted, setRedirectExecuted] = useState(false)
    const path = usePathname()
    const { authenticated, loading } = useAuth()
    const router = useRouter()

    // biome-ignore lint/correctness/useExhaustiveDependencies: router not required
    useEffect(() => {
      if (redirectTo) {
        router.replace(redirectTo)
        setRedirectTo(undefined)
      }
    }, [redirectTo])

    logger.debug({ loading, authenticated })

    if (loading) return null

    if (authenticated) {
      if (path === '/auth') {
        setRedirectTo('/')
      }
    } else {
      if (path === '/auth') {
        return component
      }
      if (!isRedirectExecuted) {
        setRedirectTo('/auth')
        setRedirectExecuted(true)
      }
    }

    return authenticated ? component : null
  }
  return AuthComponent
}