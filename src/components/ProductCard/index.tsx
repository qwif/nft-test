import React from 'react'

import Image from 'components/Image'
import { ProductCardProps } from './ProductCard.props'

import styles from './ProductCard.module.scss'

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  return (
    <li className={styles.root}>
      <a href={`https://artisant.io/products/${data.product_id}`} target="_blank" rel="noreferrer">
        {/* .header */}
        <div className={styles.header}>
          <div className={styles.preview}>
            <Image
              src={`https://cdn.artisant.io/api/files/630x819/${data.additional_photos[0].compressed}`}
              alt={`Product – ${data.name}`}
              width={630}
              height={819}
            />
          </div>
          <div className={styles.info}>
            <p className={styles.author}>{data.created_by.display_name}</p>

            <h2 className={styles.title}>{data.name}</h2>
          </div>
        </div>

        {/* .footer */}
        <div className={styles.footer}>
          <span className={styles.available}>
            {data.quantity_available} of {data.quantity}
          </span>
          <span className={styles.price}>{data.initial_price} ETH</span>
        </div>
      </a>
    </li>
  )
}

export default ProductCard
