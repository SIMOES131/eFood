import { createSlice } from '@reduxjs/toolkit'

type OrderState = {
  isOpen: boolean
}

const initialState: OrderState = {
  isOpen: false
}

const orderSlice = createSlice({
  name: 'order',
  initialState,

  reducers: {
    openOrder: (state) => {
      state.isOpen = true
    },
    closeOrder: (state) => {
      state.isOpen = false
    }
  }
})

export const { openOrder, closeOrder } = orderSlice.actions
export default orderSlice.reducer
