import React, { useState, useEffect, useRef } from 'react'

interface AnimatedNumberProps {
  startValue?: number
  endValue: number
  duration?: number
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  startValue = 0,
  endValue,
  duration = 300,
}) => {
  const [displayValue, setDisplayValue] = useState(startValue)

  const animationFrameRef = useRef<number | null>(null)

  useEffect(() => {
    const animationStartValue = displayValue
    let startTime: number | null = null

    const animate = (timestamp: number) => {
      if (startTime === null) {
        startTime = timestamp
      }

      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / duration, 1)

      const newDisplayValue =
        animationStartValue + (endValue - animationStartValue) * progress

      setDisplayValue(newDisplayValue)

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate)
      } else {
        setDisplayValue(endValue)
      }
    }

    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [endValue, duration])

  return <span>{Math.round(displayValue)}</span>
}

export default AnimatedNumber
