import { configureStore } from '@reduxjs/toolkit'

import api from '../services/api'

import cartReducer from './reducers/cart'
import cardReducer from './reducers/card'
import payReducer from './reducers/pay'
import orderReducer from './reducers/order'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    card: cardReducer,
    pay: payReducer,
    order: orderReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
