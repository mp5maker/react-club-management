import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { THEME } from '../constants/settings'
import {
  changeTheme as _changeTheme,
  selectTheme,
} from '../redux/persist/themeReducer'

const useTheme = () => {
  const theme = useSelector(selectTheme)
  const dispatch = useDispatch()

  const changeTheme = React.useCallback(
    (newTheme: THEME) => {
      return dispatch(_changeTheme(newTheme))
    },
    [dispatch]
  )

  React.useEffect(() => {
    const root = document.querySelector(':root')
    if (root) root.setAttribute('color-scheme', theme)
  }, [theme])

  return { theme, changeTheme }
}

export default useTheme
