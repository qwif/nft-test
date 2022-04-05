import React from 'react'

import { IProduct } from 'lib/types/product'

export interface ProductListProps extends React.ComponentProps<'ul'> {
  data: IProduct[]
  isLoading: boolean
}
