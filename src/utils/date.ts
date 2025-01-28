import { differenceInHours } from 'date-fns'
import { formatInTimeZone } from 'date-fns-tz'

const DEADLINE = new Date('2025-02-05T12:00:00+09:00') // 期限日時 直書きw

export const getRemainingTime = () => {
  const now = new Date()
  const jstNow = new Date(formatInTimeZone(now, 'Asia/Tokyo', "yyyy-MM-dd'T'HH:mm:ssXXX"))

  const totalHours = differenceInHours(DEADLINE, jstNow)
  const days = Math.floor(totalHours / 24)
  const hours = totalHours % 24

  return { days, hours, totalHours }
}