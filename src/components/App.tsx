import React from 'react'

import styles from './App.module.sass'
import '../styles/global.sass'

import { useTimePeriod } from '../hooks/useTimePeriod'
import EventsSlider from './EventSlider/EventSlider'
import HistoricalDates from './HistoricalDates/HistoricalDates'
import { TimePeriod } from '../types/TimePeriod'
import TimePeriodController from './TimePeriodController/TimePeriodController'
import Pagination from './shared/Pagination/Pagination'

const TIME_PERIODS: TimePeriod[] = [
  {
    title: 'Наука',
    from: 1992,
    to: 1997,
    events: [
      {
        year: 1992,
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque voluptates porro animi consequatur quasi optio, earum nobis est? Similique rem accusantium amet quod, vel distinctio est eius suscipit totam harum!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque voluptates porro animi consequatur quasi optio, earum nobis est? Similique rem accusantium amet quod, vel distinctio est eius suscipit totam harum!',
      },
      {
        year: 1994,
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque voluptates porro animi consequatur quasi optio, earum nobis est? Similique rem accusantium amet quod, vel distinctio est eius suscipit totam harum!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque voluptates porro animi consequatur quasi optio, earum nobis est? Similique rem accusantium amet quod, vel distinctio est eius suscipit totam harum!',
      },
      {
        year: 1995,
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque voluptates porro animi consequatur quasi optio, earum nobis est? Similique rem accusantium amet quod, vel distinctio est eius suscipit totam harum!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque voluptates porro animi consequatur quasi optio, earum nobis est? Similique rem accusantium amet quod, vel distinctio est eius suscipit totam harum!',
      },
      {
        year: 1995,
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque voluptates porro animi consequatur quasi optio, earum nobis est? Similique rem accusantium amet quod, vel distinctio est eius suscipit totam harum!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque voluptates porro animi consequatur quasi optio, earum nobis est? Similique rem accusantium amet quod, vel distinctio est eius suscipit totam harum!',
      },
    ],
  },
  {
    title: 'Кино',
    from: 1987,
    to: 1991,
    events: [
      {
        year: 1992,
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque voluptates porro animi consequatur quasi optio, earum nobis est? Similique rem accusantium amet quod, vel distinctio est eius suscipit totam harum!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque voluptates porro animi consequatur quasi optio, earum nobis est? Similique rem accusantium amet quod, vel distinctio est eius suscipit totam harum!',
      },
      {
        year: 1994,
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque voluptates porro animi consequatur quasi optio, earum nobis est? Similique rem accusantium amet quod, vel distinctio est eius suscipit totam harum!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque voluptates porro animi consequatur quasi optio, earum nobis est? Similique rem accusantium amet quod, vel distinctio est eius suscipit totam harum!',
      },
      {
        year: 1995,
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque voluptates porro animi consequatur quasi optio, earum nobis est? Similique rem accusantium amet quod, vel distinctio est eius suscipit totam harum!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque voluptates porro animi consequatur quasi optio, earum nobis est? Similique rem accusantium amet quod, vel distinctio est eius suscipit totam harum!',
      },
      {
        year: 1995,
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque voluptates porro animi consequatur quasi optio, earum nobis est? Similique rem accusantium amet quod, vel distinctio est eius suscipit totam harum!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque voluptates porro animi consequatur quasi optio, earum nobis est? Similique rem accusantium amet quod, vel distinctio est eius suscipit totam harum!',
      },
    ],
  },
  {
    title: 'Литература',
    from: 1953,
    to: 1959,
    events: [
      {
        year: 1992,
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque voluptates porro animi consequatur quasi optio, earum nobis est? Similique rem accusantium amet quod, vel distinctio est eius suscipit totam harum!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque voluptates porro animi consequatur quasi optio, earum nobis est? Similique rem accusantium amet quod, vel distinctio est eius suscipit totam harum!',
      },
      {
        year: 1994,
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque voluptates porro animi consequatur quasi optio, earum nobis est? Similique rem accusantium amet quod, vel distinctio est eius suscipit totam harum!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque voluptates porro animi consequatur quasi optio, earum nobis est? Similique rem accusantium amet quod, vel distinctio est eius suscipit totam harum!',
      },
      {
        year: 1995,
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque voluptates porro animi consequatur quasi optio, earum nobis est? Similique rem accusantium amet quod, vel distinctio est eius suscipit totam harum!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque voluptates porro animi consequatur quasi optio, earum nobis est? Similique rem accusantium amet quod, vel distinctio est eius suscipit totam harum!',
      },
      {
        year: 1995,
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque voluptates porro animi consequatur quasi optio, earum nobis est? Similique rem accusantium amet quod, vel distinctio est eius suscipit totam harum!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque voluptates porro animi consequatur quasi optio, earum nobis est? Similique rem accusantium amet quod, vel distinctio est eius suscipit totam harum!',
      },
    ],
  },
  {
    title: 'История',
    from: 1971,
    to: 1975,
    events: [
      {
        year: 1972,
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque voluptates porro animi consequatur quasi optio, earum nobis est? Similique rem accusantium amet quod, vel distinctio est eius suscipit totam harum!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque voluptates porro animi consequatur quasi optio, earum nobis est? Similique rem accusantium amet quod, vel distinctio est eius suscipit totam harum!',
      },
      {
        year: 1975,
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque voluptates porro animi consequatur quasi optio, earum nobis est? Similique rem accusantium amet quod, vel distinctio est eius suscipit totam harum!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque voluptates porro animi consequatur quasi optio, earum nobis est? Similique rem accusantium amet quod, vel distinctio est eius suscipit totam harum!',
      },
      {
        year: 1974,
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque voluptates porro animi consequatur quasi optio, earum nobis est? Similique rem accusantium amet quod, vel distinctio est eius suscipit totam harum!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque voluptates porro animi consequatur quasi optio, earum nobis est? Similique rem accusantium amet quod, vel distinctio est eius suscipit totam harum!',
      },
      {
        year: 1995,
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque voluptates porro animi consequatur quasi optio, earum nobis est? Similique rem accusantium amet quod, vel distinctio est eius suscipit totam harum!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque voluptates porro animi consequatur quasi optio, earum nobis est? Similique rem accusantium amet quod, vel distinctio est eius suscipit totam harum!',
      },
    ],
  },
  {
    title: 'Политика',
    from: 2000,
    to: 2010,
    events: [
      {
        year: 2000,
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque voluptates porro animi consequatur quasi optio, earum nobis est? Similique rem accusantium amet quod, vel distinctio est eius suscipit totam harum!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque voluptates porro animi consequatur quasi optio, earum nobis est? Similique rem accusantium amet quod, vel distinctio est eius suscipit totam harum!',
      },
      {
        year: 2001,
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque voluptates porro animi consequatur quasi optio, earum nobis est? Similique rem accusantium amet quod, vel distinctio est eius suscipit totam harum!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque voluptates porro animi consequatur quasi optio, earum nobis est? Similique rem accusantium amet quod, vel distinctio est eius suscipit totam harum!',
      },
      {
        year: 2003,
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque voluptates porro animi consequatur quasi optio, earum nobis est? Similique rem accusantium amet quod, vel distinctio est eius suscipit totam harum!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque voluptates porro animi consequatur quasi optio, earum nobis est? Similique rem accusantium amet quod, vel distinctio est eius suscipit totam harum!',
      },
      {
        year: 2005,
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque voluptates porro animi consequatur quasi optio, earum nobis est? Similique rem accusantium amet quod, vel distinctio est eius suscipit totam harum!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque voluptates porro animi consequatur quasi optio, earum nobis est? Similique rem accusantium amet quod, vel distinctio est eius suscipit totam harum!',
      },
    ],
  },
  {
    title: 'Литература',
    from: 1996,
    to: 1999,
    events: [
      {
        year: 1996,
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque voluptates porro animi consequatur quasi optio, earum nobis est? Similique rem accusantium amet quod, vel distinctio est eius suscipit totam harum!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque voluptates porro animi consequatur quasi optio, earum nobis est? Similique rem accusantium amet quod, vel distinctio est eius suscipit totam harum!',
      },
      {
        year: 1997,
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque voluptates porro animi consequatur quasi optio, earum nobis est? Similique rem accusantium amet quod, vel distinctio est eius suscipit totam harum!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque voluptates porro animi consequatur quasi optio, earum nobis est? Similique rem accusantium amet quod, vel distinctio est eius suscipit totam harum!',
      },
    ],
  },
]

const App: React.FC = () => {
  const {
    currentPeriod,
    previousPeriod,
    activePeriodIndex,
    changeTimePeriod,
    prevTimePeriod,
    nextTimePeriod,
  } = useTimePeriod(TIME_PERIODS)

  const totalCount = TIME_PERIODS.length

  return (
    <div className={styles.wrapper}>
      <HistoricalDates
        currentPeriod={currentPeriod}
        previousPeriod={previousPeriod}
        activePeriodIndex={activePeriodIndex}
        totalCount={totalCount}
        onPeriodChange={changeTimePeriod}
        onPrev={prevTimePeriod}
        onNext={nextTimePeriod}
      />
      <div className={styles.container}>
        <EventsSlider events={currentPeriod.events} />
      </div>
      <div className={styles.timePeriodController}>
        <TimePeriodController
          currentIndex={activePeriodIndex + 1}
          onNext={nextTimePeriod}
          onPrev={prevTimePeriod}
          totalCount={totalCount}
        />
        <div className={styles.pagination}>
          <Pagination
            currentIndex={activePeriodIndex}
            totalCount={totalCount}
            onClick={changeTimePeriod}
          />
        </div>
      </div>
    </div>
  )
}

export default App
