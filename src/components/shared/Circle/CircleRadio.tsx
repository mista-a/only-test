import React, { useState, useEffect, useMemo, useCallback } from 'react'
import styles from './CircleRadio.module.sass'

interface CircleRadioProps {
  pointsCount?: number
  height?: number
  width?: number
  label?: string
  unactivePointSize?: number
  activePointSize?: number
  activePoint?: number
  startAngleOffset?: number
  onPointClick?: (index: number) => void
}

interface PointCustomCSSProperties extends React.CSSProperties {
  '--visual-scale'?: string | number
  '--rotate-normalize'?: string
}

const CircleRadio: React.FC<CircleRadioProps> = ({
  pointsCount = 6,
  height = 536,
  width = 530,
  unactivePointSize = 6,
  activePointSize = 50,
  activePoint,
  startAngleOffset = 30,
  onPointClick,
  label,
}) => {
  const [currentRotation, setCurrentRotation] = useState(0)
  const anglePerPoint = 360 / pointsCount
  const circleRadius = (width * 2) / (8 * height) + height / 2

  const calculateTargetRotation = (pointIndex: number) => {
    return -(pointIndex * anglePerPoint)
  }

  const getShortestRotation = (current: number, target: number): number => {
    let diff = target - current

    diff = (((diff % 360) + 540) % 360) - 180
    if (diff === -180) diff = 180

    return current + diff
  }

  const points = useMemo(() => {
    return Array.from({ length: pointsCount }).map((_, index) => {
      const angleInRadians = -Math.PI / 2 + (index * 2 * Math.PI) / pointsCount
      const x = circleRadius * Math.cos(angleInRadians)
      const y = circleRadius * Math.sin(angleInRadians)

      const style: PointCustomCSSProperties = {
        width: `${activePointSize}px`,
        height: `${activePointSize}px`,
        left: `calc(50% + ${x}px - ${activePointSize / 2}px)`,
        top: `calc(50% + ${y}px - ${activePointSize / 2}px)`,
        '--visual-scale': unactivePointSize / activePointSize,
        '--rotate-normalize': `${-startAngleOffset - currentRotation}deg`,
      }

      return {
        index,
        style,
      }
    })
  }, [pointsCount, circleRadius, activePointSize, unactivePointSize])

  useEffect(() => {
    if (activePoint) {
      const targetRotation = calculateTargetRotation(activePoint - 1)

      setCurrentRotation((prevRotation) =>
        getShortestRotation(prevRotation, targetRotation)
      )
    }
  }, [activePoint, anglePerPoint])

  const handlePointClick = useCallback(
    (index: number) => {
      onPointClick?.(index + 1)
    },
    [onPointClick]
  )

  return (
    <div
      className={styles.circleContainer}
      style={{
        width: circleRadius * 2,
        height: circleRadius * 2,
      }}
    >
      <div
        className={styles.circle}
        style={{
          width: circleRadius * 2,
          height: circleRadius * 2,
        }}
      />

      <div
        className={styles.pointsContainer}
        style={{
          transform: `rotate(${currentRotation + startAngleOffset}deg)`,
        }}
      >
        {points.map(({ index, style }) => {
          return (
            <button
              key={index}
              className={`${styles.point} ${
                index + 1 === activePoint ? styles.pointActive : ''
              }`}
              style={style}
              onClick={() => handlePointClick(index)}
            >
              <div
                className={styles.pointContent}
                style={{
                  transform: `rotate(${
                    -startAngleOffset - currentRotation
                  }deg)`,
                }}
              >
                <span
                  className={`${styles.pointNumber} ${
                    index + 1 === activePoint ? styles.pointNumberActive : ''
                  }`}
                >
                  {index + 1}
                </span>
                <span
                  className={`${styles.pointLabel} ${
                    index + 1 === activePoint ? styles.pointLabelActive : ''
                  }`}
                >
                  {label}
                </span>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default CircleRadio
