import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { VIEW_MODE } from '../constants/settings'
import {
  changeViewMode as _changeViewMode,
  selectViewMode,
} from '../redux/persist/viewModeReducer'

const useViewMode = () => {
  const viewMode = useSelector(selectViewMode)
  const dispatch = useDispatch()

  const changeViewMode = React.useCallback(
    (newViewMode: VIEW_MODE) => {
      return dispatch(_changeViewMode(newViewMode))
    },
    [dispatch]
  )

  return { viewMode, changeViewMode }
}

export default useViewMode
