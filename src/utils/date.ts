import { differenceInHours } from 'date-fns'
import { formatInTimeZone } from 'date-fns-tz'

const DEADLINE = new Date('2025-01-27T23:59:59+09:00')

export const getRemainingTime = () => {
  const now = new Date()
  const jstNow = new Date(formatInTimeZone(now, 'Asia/Tokyo', "yyyy-MM-dd'T'HH:mm:ssXXX"))

  const totalHours = differenceInHours(DEADLINE, jstNow)
  const days = Math.floor(totalHours / 24)
  const hours = totalHours % 24

  return { days, hours, totalHours }
}