import { useState, useCallback, useMemo } from 'react'
import { usePrevious } from './usePrevious'
import { TimePeriod } from '../types/TimePeriod'

export const useTimePeriod = (periods: TimePeriod[]) => {
  const [activePeriodIndex, setActivePeriodIndex] = useState(0)

  const prevActiveIndex = usePrevious(activePeriodIndex)

  const currentPeriod = useMemo(
    () => periods[activePeriodIndex],
    [periods, activePeriodIndex]
  )

  const previousPeriod = useMemo(() => {
    const index = prevActiveIndex ?? activePeriodIndex
    return periods[index]
  }, [periods, prevActiveIndex, activePeriodIndex])

  const changeTimePeriod = useCallback(
    (index: number) => {
      if (index >= 0 && index < periods.length) {
        setActivePeriodIndex(index)
      }
    },
    [periods.length]
  )

  const prevTimePeriod = useCallback(() => {
    setActivePeriodIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : periods.length - 1
    )
  }, [periods.length])

  const nextTimePeriod = useCallback(() => {
    setActivePeriodIndex((prevIndex) =>
      prevIndex < periods.length - 1 ? prevIndex + 1 : 0
    )
  }, [periods.length])

  return {
    activePeriodIndex,
    currentPeriod,
    previousPeriod,
    changeTimePeriod,
    prevTimePeriod,
    nextTimePeriod,
  }
}
