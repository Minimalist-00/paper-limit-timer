'use client'

import { getRemainingTime } from '@/utils/date'
import { useEffect, useState } from 'react'
import ColorButton from './ColorButton'

const DeadlineTimer = () => {
  const [remaining, setRemaining] = useState({ days: 0, hours: 0 })
  const [textColor, setTextColor] = useState('white')

  useEffect(() => {
    setRemaining(getRemainingTime())

    const timer = setInterval(() => {
      setRemaining(getRemainingTime())
    }, 60000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#383838]">
      <div className="text-center" style={{ color: textColor }}>
        <h1 className="text-4xl mb-4">Paper Dealine</h1>
        <p className="text-6xl">
          {remaining.days}<span className="text-4xl">day</span> {remaining.hours}<span className="text-4xl">h</span>
        </p>
      </div>
      <ColorButton setTextColor={setTextColor} />
    </div>
  )
}

export default DeadlineTimer