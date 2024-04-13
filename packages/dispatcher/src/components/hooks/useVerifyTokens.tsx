import { useCallback, useEffect, useMemo, useState } from "react"
import { isJWTPayloadValid } from "~/helpers/validateJWT"
import { isNil } from 'lodash'

export const useVerifyTokens = ({ accessToken, refreshToken }: { refreshToken: string | undefined, accessToken: string | undefined }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isRefreshTokenValid, setIsRefreshTokenValid] = useState<boolean | undefined>()
  const [isAccessTokenValid, setIsAccessTokenValid] = useState<boolean | undefined>()

  const validateToken = async (token: string) => {
    const isValid = await isJWTPayloadValid(token)
    return isValid
  }

  const validateTokens = async () => {
    if (accessToken && refreshToken) {
      setIsRefreshTokenValid(await validateToken(refreshToken))
      setIsAccessTokenValid(await validateToken(accessToken))
    }
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: needed to be executed once
  useEffect(() => {
    validateTokens().finally(() => setIsLoading(false))
  }, [])


  const verification = useMemo<{ valid: boolean, loading: boolean }>(() => ({
    loading: isLoading,
    valid: !isNil(isRefreshTokenValid) && !isNil(isAccessTokenValid) ? isRefreshTokenValid && isAccessTokenValid : false,
  }), [isLoading, isRefreshTokenValid, isAccessTokenValid])

  return verification
}
