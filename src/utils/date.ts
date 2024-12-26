import { differenceInDays, differenceInHours } from 'date-fns'
import { formatInTimeZone } from 'date-fns-tz'

const DEADLINE = new Date('2025-01-27T23:59:59+09:00')

export const getRemainingTime = () => {
  const now = new Date()
  const jstNow = new Date(formatInTimeZone(now, 'Asia/Tokyo', "yyyy-MM-dd'T'HH:mm:ssXXX"))

  const days = differenceInDays(DEADLINE, jstNow)
  const hours = differenceInHours(DEADLINE, jstNow) % 24

  return { days, hours }
}