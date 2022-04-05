import React from 'react'

import { IProduct } from 'lib/types/product'

export interface ProductCardProps extends React.ComponentProps<'li'> {
  data: IProduct
}
