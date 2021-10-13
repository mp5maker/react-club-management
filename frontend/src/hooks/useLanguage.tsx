import React from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { LANGUAGE } from '../constants/settings'
import {
  changeLanguage as _changeLanguage,
  selectLanguage,
} from '../redux/persist/languageReducer'

const useTheme = () => {
  const { t, i18n } = useTranslation()
  const language = useSelector(selectLanguage)
  const dispatch = useDispatch()

  const changeLanguage = React.useCallback(
    (newLanguage: LANGUAGE) => {
      return dispatch(_changeLanguage(newLanguage))
    },
    [dispatch]
  )

  React.useEffect(() => {
    i18n.changeLanguage(language)
  }, [language, i18n])

  return { t, i18n, language, changeLanguage }
}

export default useTheme
