import { createSlice } from '@reduxjs/toolkit'
import get from 'lodash/get'
import { PERSIST } from '../../constants/settings'

export const chosenDateSlice = createSlice({
  name: PERSIST.CHOSEN_DATE,
  initialState: {
    chosenDate: String(Date.now()),
  },
  reducers: {
    changeChosenDate: (state, action) => {
      state.chosenDate = get(action, 'payload', '')
    },
  },
})

export const selectChosenDate = (state: any) =>
  get(state, `${PERSIST.CHOSEN_DATE}.chosenDate`, '')
export const { changeChosenDate } = chosenDateSlice.actions
export default chosenDateSlice.reducer
