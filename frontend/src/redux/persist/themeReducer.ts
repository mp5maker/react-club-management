import { createSlice } from '@reduxjs/toolkit'
import get from 'lodash/get'
import { PERSIST, THEME } from '../../constants/settings'

export const themeSlice = createSlice({
  name: PERSIST.THEME,
  initialState: {
    currentTheme: THEME.DARK,
  },
  reducers: {
    changeTheme: (state, action) => {
      state.currentTheme = get(action, 'payload', '')
    },
  },
})

export const selectTheme = (state: any) =>
  get(state, `${PERSIST.THEME}.currentTheme`, '')
export const { changeTheme } = themeSlice.actions
export default themeSlice.reducer
