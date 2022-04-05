import React from 'react'

import styles from './ProductCardSkeleton.module.scss'

const ProductCardSkeleton: React.FC = () => {
  return (
    <li className={styles.root}>
      <div className={styles.top}></div>
      <div className={styles.bottom}></div>
    </li>
  )
}

export default ProductCardSkeleton
