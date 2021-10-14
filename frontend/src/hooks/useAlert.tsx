import get from 'lodash/get'
import * as React from 'react'
import { AlertContext } from '../redux/alert/context'
import { ALERT_ACTION_TYPES } from '../redux/alert/reducer'

const useAlert = () => {
  const { state, dispatch }: any = React.useContext(AlertContext)
  const alert = get(state, 'alert', {})

  const setAlert = React.useCallback(
    (value) => {
      dispatch({
        type: ALERT_ACTION_TYPES.SET_ALERT,
        value,
      })
    },
    [dispatch]
  )

  return { alert, state, dispatch, setAlert }
}

export default useAlert
