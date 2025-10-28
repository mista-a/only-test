import React from 'react'
import styles from './TimePeriodController.module.sass'
import LeftArrowSVG from '../../assets/images/left-arrow.svg'
import RightArrowSVG from '../../assets/images/right-arrow.svg'

interface TimePeriodControllerProps {
  currentIndex: number
  totalCount: number
  onPrev: () => void
  onNext: () => void
}

const TimePeriodController: React.FC<TimePeriodControllerProps> = ({
  currentIndex,
  totalCount,
  onPrev,
  onNext,
}) => {
  const isLastPeriod = currentIndex === totalCount
  const isFirstPeriod = currentIndex === 1

  const formatingCounter = (counter: number) => {
    if (counter > 9) return counter
    return `0${counter}`
  }

  const formatedCurrentIndex = formatingCounter(currentIndex)
  const formatedTotalCount = formatingCounter(totalCount)

  return (
    <div className={styles.timePeriodController}>
      <p className={styles.counter}>
        {formatedCurrentIndex}/{formatedTotalCount}
      </p>
      <div className={styles.timePeriodControllerButtons}>
        <button
          className={styles.timePeriodControllerButton}
          aria-label='Previous time period'
          disabled={isFirstPeriod}
          onClick={onPrev}
        >
          <img src={LeftArrowSVG} alt='Previous time period' />
        </button>
        <button
          className={styles.timePeriodControllerButton}
          aria-label='Next time period'
          disabled={isLastPeriod}
          onClick={onNext}
        >
          <img src={RightArrowSVG} alt='Next time period' />
        </button>
      </div>
    </div>
  )
}

export default TimePeriodController
