import React from 'react'
import ReactDOM from 'react-dom/client'
import axios from 'axios'

import AppContext from 'lib/context'
import Page from 'layouts/Page'
import ProductList from 'components/ProductList'

import { IResponse, IProduct } from 'lib/types/product'

import 'styles/index.scss'

// App

const App: React.FC = () => {
  const [products, setProducts] = React.useState<IProduct[]>([])
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    async function fetchData() {
      const { data: response } = await axios.get<IResponse>('https://artisant.io/api/products')

      setProducts(response.data.products)
      setIsLoading(false)
    }

    fetchData()
  }, [])

  return (
    <AppContext.Provider value={{ products, isLoading }}>
      <Page title="Explore" description="Buy and sell digital fashion NFT art">
        <ProductList />
      </Page>
    </AppContext.Provider>
  )
}

// Root

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLFormElement)
root.render(<App />)
