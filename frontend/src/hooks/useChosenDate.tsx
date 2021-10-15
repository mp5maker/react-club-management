import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  changeChosenDate as _changeChosenDate,
  selectChosenDate,
} from '../redux/persist/chosenDateReducer'

const useChosenDate = () => {
  const chosenDate = useSelector(selectChosenDate)
  const dispatch = useDispatch()

  const changeChosenDate = React.useCallback(
    (newChosenDate: Date) => {
      return dispatch(_changeChosenDate(newChosenDate))
    },
    [dispatch]
  )

  return { chosenDate, changeChosenDate }
}

export default useChosenDate
