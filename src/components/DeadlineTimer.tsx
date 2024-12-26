'use client'

import { getRemainingTime } from '@/utils/date'
import { useEffect, useState } from 'react'

const DeadlineTimer = () => {
  const [remaining, setRemaining] = useState({ days: 0, hours: 0 })

  useEffect(() => {
    setRemaining(getRemainingTime()) // 初回レンダリング時に実行

    const timer = setInterval(() => {
      setRemaining(getRemainingTime())
    }, 60000)

    return () => clearInterval(timer)
  }, [])



  return (
    <div className="text-white text-center">
      <h1 className="text-4xl mb-4">Paper Dealine</h1>
      <p className="text-6xl">
        {remaining.days}day {remaining.hours}h
      </p>
    </div>
  )
}

export default DeadlineTimer