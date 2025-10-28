import React, { useCallback } from 'react'
import styles from './Pagination.module.sass'

interface PaginationProps {
  currentIndex: number
  totalCount: number
  onClick?: (index: number) => void
}

const Pagination: React.FC<PaginationProps> = ({
  currentIndex,
  totalCount,
  onClick,
}) => {
  const handlePointClick = useCallback(
    (index: number) => {
      onClick?.(index)
    },
    [onClick]
  )

  return (
    <div className={styles.pagination}>
      {Array.from({ length: totalCount }).map((_, index) => (
        <button
          key={index}
          className={`${styles.paginationPoint} ${
            currentIndex === index ? styles.paginationPointActive : ''
          }`}
          onClick={() => handlePointClick(index)}
        />
      ))}
    </div>
  )
}

export default Pagination
