import { createSlice } from '@reduxjs/toolkit'
import get from 'lodash/get'
import { PERSIST, SIDEBAR } from '../../constants/settings'

export const sidebarSlice = createSlice({
  name: PERSIST.SIDEBAR,
  initialState: {
    currentSidebar: SIDEBAR.CLOSE,
  },
  reducers: {
    changeSidebar: (state, action) => {
      state.currentSidebar = get(action, 'payload', '')
    },
  },
})

export const selectSidebar = (state: any) =>
  get(state, `${PERSIST.SIDEBAR}.currentSidebar`, '')
export const { changeSidebar } = sidebarSlice.actions
export default sidebarSlice.reducer
