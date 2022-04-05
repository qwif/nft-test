import { IProduct } from 'lib/types/product'

export interface IAppContext {
  products: IProduct[] | []
  isLoading: boolean
}
