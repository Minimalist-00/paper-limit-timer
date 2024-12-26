const DEADLINE = new Date('2025-01-27T00:00:00+09:00')

export const getRemainingTime = () => {
  const now = new Date()
  const diff = DEADLINE.getTime() - now.getTime()

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))

  return { days, hours }
}