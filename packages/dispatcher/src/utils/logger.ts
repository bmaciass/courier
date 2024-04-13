import { pino } from 'pino'
import { LOGGER_DEBUG } from '~/config/constants'

const logger = pino({
  name: 'courier-ui',
  level: LOGGER_DEBUG ? 'debug' : 'info'
})

export { logger }