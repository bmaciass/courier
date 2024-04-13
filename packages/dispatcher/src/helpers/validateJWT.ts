import { decodeJwt, jwtVerify } from 'jose'
import { logger } from '~/utils/logger'

const secret = new TextEncoder().encode(
  'cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2',
)

export function getJWTPayload (token: string) {
  return decodeJwt(token)
}

export async function isJWTPayloadValid (token: string) {
  try {
    const payload = await jwtVerify(token, secret)
    logger.debug(payload)
    return true
  } catch (error) {
    logger.error(error)
    return false
  }
  // return r.payload //TODO: Add a proper validation
}