import { createSlice } from '@reduxjs/toolkit'

type PayState = {
  isOpen: boolean
}

const initialState: PayState = {
  isOpen: false
}

const cardSlice = createSlice({
  name: 'pay',
  initialState,

  reducers: {
    openPay: (state) => {
      state.isOpen = true
    },
    closePay: (state) => {
      state.isOpen = false
    }
  }
})

export const { openPay, closePay } = cardSlice.actions
export default cardSlice.reducer
