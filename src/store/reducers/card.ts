import { createSlice } from '@reduxjs/toolkit'

type CardState = {
  isOpen: boolean
}

const initialState: CardState = {
  isOpen: false
}

const cardSlice = createSlice({
  name: 'card',
  initialState,

  reducers: {
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { open, close } = cardSlice.actions
export default cardSlice.reducer
