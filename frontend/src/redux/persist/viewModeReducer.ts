import { createSlice } from '@reduxjs/toolkit'
import get from 'lodash/get'
import { VIEW_MODE, PERSIST } from '../../constants/settings'

export const viewModeSlice = createSlice({
  name: PERSIST.VIEW_MODE,
  initialState: {
    viewMode: VIEW_MODE.CARD,
  },
  reducers: {
    changeViewMode: (state, action) => {
      state.viewMode = get(action, 'payload', '')
    },
  },
})

export const selectViewMode = (state: any) =>
  get(state, `${PERSIST.VIEW_MODE}.viewMode`, '')
export const { changeViewMode } = viewModeSlice.actions
export default viewModeSlice.reducer
