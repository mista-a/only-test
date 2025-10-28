import { useCallback } from 'react'
import TimePeriodDisplay from '../TimePeriodDisplay/TimePeriodDisplay'
import CircleRadio from '../shared/Circle/CircleRadio'
import TimePeriodController from '../TimePeriodController/TimePeriodController'
import styles from './HistoricalDates.module.sass'
import { TimePeriod } from '../../types/TimePeriod'
import Pagination from '../shared/Pagination/Pagination'

interface HistoricalDatesProps {
  currentPeriod: TimePeriod
  previousPeriod: TimePeriod
  activePeriodIndex: number
  totalCount: number
  onPeriodChange: (index: number) => void
  onPrev: () => void
  onNext: () => void
}

const HistoricalDates: React.FC<HistoricalDatesProps> = ({
  activePeriodIndex,
  currentPeriod,
  onNext,
  onPeriodChange,
  onPrev,
  previousPeriod,
  totalCount,
}) => {
  const handlePointClick = useCallback(
    (index: number) => {
      onPeriodChange(index - 1)
    },
    [onPeriodChange]
  )

  return (
    <div className={styles.historicalDates}>
      <div className={styles.header}>
        <div className={styles.headerLine}></div>
        <div>
          <h1 className={styles.headerText}>Исторические даты</h1>
        </div>
      </div>
      <div>
        <div className={styles.timePeriodSwitherCenter}>
          <hr className={styles.centeredLine} />
          <div className={styles.timePeriodWrapper}>
            <TimePeriodDisplay
              startFrom={previousPeriod.from}
              endFrom={currentPeriod.from}
              startTo={previousPeriod.to}
              endTo={currentPeriod.to}
            />
          </div>
          <div className={styles.timePeriodRadio}>
            <CircleRadio
              onPointClick={handlePointClick}
              pointsCount={totalCount}
              activePoint={activePeriodIndex + 1}
              label={currentPeriod.title}
            />
          </div>
        </div>
      </div>
      <hr className={styles.mobileSeparatore} />
      <div className={styles.timePeriodController}>
        <TimePeriodController
          currentIndex={activePeriodIndex + 1}
          totalCount={totalCount}
          onPrev={onPrev}
          onNext={onNext}
        />
      </div>
    </div>
  )
}

export default HistoricalDates
