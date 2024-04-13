'use client'

import { PropsWithChildren, createContext, useContext, useMemo } from 'react'
import { CookiesProvider, useCookies } from 'react-cookie'
import { jwtVerify } from 'jose'
import { isJWTPayloadValid } from '~/helpers/validateJWT'
import { useVerifyTokens } from '../hooks/useVerifyTokens'

type NoAuthProps = {
  authenticated: false
  data?: undefined
}

type YesAuthProps = {
  authenticated: true
  data: {
    accessToken: string
    refreshToken: string
  }
}

type AuthProps = YesAuthProps | NoAuthProps

type AuthContextProps = { loading: boolean } & AuthProps

export const AuthContext = createContext<AuthContextProps>({ authenticated: false, loading: true })

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const [cookies] = useCookies<'accessToken' | 'refreshToken', { accessToken: string | undefined, refreshToken: string | undefined }>(['accessToken', 'refreshToken'])

  const { loading, valid } = useVerifyTokens({ ...cookies })

  const validOrInvalid: AuthProps | NoAuthProps = (valid && cookies.accessToken && cookies.refreshToken)
    ? { authenticated: true, data: { accessToken: cookies.accessToken, refreshToken: cookies.refreshToken } }
    : { authenticated: false }

  const value = useMemo<AuthContextProps>(() => {
    return {
      loading,
      ...validOrInvalid
    }
  }, [loading, validOrInvalid])

  return (
    <CookiesProvider>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </CookiesProvider>
  )
}

export const useAuth = () => useContext(AuthContext)