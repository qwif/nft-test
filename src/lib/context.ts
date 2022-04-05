import React from 'react'

import { IAppContext } from 'lib/types/context'

const defaultState = {
  products: [],
  isLoading: true,
}

const AppContext = React.createContext<IAppContext>(defaultState)

export default AppContext
