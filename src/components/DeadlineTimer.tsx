'use client'

import { getRemainingTime } from '@/utils/date'
import { useEffect, useState } from 'react'

const DeadlineTimer = () => {
  const [remaining, setRemaining] = useState({ days: 0, hours: 0 })

  useEffect(() => {
    const timer = setInterval(() => {
      setRemaining(getRemainingTime())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="text-white text-center">
      <h1 className="text-4xl mb-4">Paper Dealine</h1>
      <p className="text-6xl">
        {remaining.days}日 {remaining.hours}時間
      </p>
    </div>
  )
}

export default DeadlineTimer