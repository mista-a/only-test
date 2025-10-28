import React from 'react'
import styles from './TimePeriodDisplay.module.sass'
import AnimatedNumber from '../shared/AnimateNumbers/AnimatedNumber'

interface TimePeriodDisplayProps {
  startFrom: number
  endFrom: number
  startTo: number
  endTo: number
}

const TimePeriodDisplay: React.FC<TimePeriodDisplayProps> = ({
  startFrom,
  endFrom,
  startTo,
  endTo,
}) => (
  <h2 className={styles.timePeriod}>
    <span className={styles.timePeriodFrom}>
      <AnimatedNumber
        startValue={startFrom}
        endValue={endFrom}
        duration={300}
      />
    </span>
    <span className={styles.timePeriodTo}>
      <AnimatedNumber startValue={startTo} endValue={endTo} duration={300} />
    </span>
  </h2>
)

export default TimePeriodDisplay
