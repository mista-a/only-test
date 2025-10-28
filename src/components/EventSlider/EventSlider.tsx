import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import 'swiper/swiper.css'

import styles from './EventSlider.module.sass'
import { Event } from '../../types/TimePeriod'
import RightArrowIcon from '../IconComponents/RightArrowIcon'
import LeftArrowIcon from '../IconComponents/LeftArrowIcon'

interface EventsSliderProps {
  events: Event[]
}

interface SliderCustomCSSProperties extends React.CSSProperties {
  '--transition-time'?: string
}

const EventsSlider: React.FC<EventsSliderProps> = ({ events }) => {
  const [isVisible, setIsVisible] = useState(true)
  const [displayedEvents, setDisplayedEvents] = useState(events)

  const TRANSITION_TIME = 0.3

  useEffect(() => {
    setIsVisible(false)

    const timer = setTimeout(() => {
      setDisplayedEvents(events)
      setIsVisible(true)
    }, TRANSITION_TIME * 1000)

    return () => clearTimeout(timer)
  }, [events])

  const sliderStyle: SliderCustomCSSProperties = {
    '--transition-time': `${TRANSITION_TIME}s`,
  }

  return (
    <div
      className={`${styles.slider} ${
        isVisible ? styles.sliderVisible : styles.sliderHidden
      }`}
      style={sliderStyle}
    >
      <button className={`${styles.sliderButton} ${styles.prevButton}`}>
        <LeftArrowIcon />
      </button>
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: `.${styles.prevButton}`,
          nextEl: `.${styles.nextButton}`,
        }}
        spaceBetween={80}
        breakpoints={{
          0: {
            spaceBetween: 25,
          },
          1024: {
            spaceBetween: 80,
          },
        }}
        slidesPerView='auto'
        grabCursor={true}
        className={styles.slidesWrapper}
        freeMode={true}
      >
        {displayedEvents.map((event, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <p className={styles.slideYear}>{event.year}</p>
            <p className={styles.slideText}>{event.text}</p>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className={`${styles.sliderButton} ${styles.nextButton}`}>
        <RightArrowIcon />
      </button>
    </div>
  )
}

export default EventsSlider
