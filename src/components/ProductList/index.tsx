import React from 'react'

import AppContext from 'lib/context'
import AvailableCheckbox from 'components/AvailableCheckbox'
import ProductCard from 'components/ProductCard'

import styles from './ProductList.module.scss'
import ProductCardSkeleton from 'components/ProductCardSkeleton'

const ProductList: React.FC = () => {
  const { isLoading } = React.useContext(AppContext)
  const { products } = React.useContext(AppContext)

  const [isAvailable, setIsAvailable] = React.useState(false)

  const handleChangeAvailable = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsAvailable(event.target.checked)
  }

  // reverse & only images
  const filteredProducts = products
    .sort((a, b) => a.product_id - b.product_id)
    .filter((product) => product.additional_photos[0]?.compressed?.endsWith('.webp'))

  // only available
  const availableProducts = filteredProducts.filter((product) => product.quantity_available > 0)

  return (
    <div className={styles.root}>
      {/* .filters */}
      <div className={styles.filters}>
        <span className={styles.quantity}>
          {!isAvailable ? filteredProducts.length : availableProducts.length} items
        </span>
        <div className={styles.available}>
          <AvailableCheckbox isChecked={isAvailable} onChange={handleChangeAvailable} />
        </div>
      </div>

      {/* .list */}
      <ul className={styles.list}>
        {/* Create empty array if IsLoading is true */}
        {isLoading
          ? [...Array(12)].map((item, index) => <ProductCardSkeleton key={index} />)
          : (!isAvailable ? filteredProducts : availableProducts).map((item) => (
              <ProductCard data={item} key={item.product_id} />
            ))}
      </ul>
    </div>
  )
}

export default ProductList
