import { createSlice } from '@reduxjs/toolkit'
import get from 'lodash/get'
import { LANGUAGE, PERSIST } from '../../constants/settings'

export const languageSlice = createSlice({
  name: PERSIST.LANGUAGE,
  initialState: {
    currentLanguage: LANGUAGE.ENGLISH,
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.currentLanguage = get(action, 'payload', '')
    },
  },
})

export const selectLanguage = (state: any) =>
  get(state, `${PERSIST.LANGUAGE}.currentLanguage`, '')
export const { changeLanguage } = languageSlice.actions
export default languageSlice.reducer
