import get from 'lodash/get'
import * as React from 'react'
import { BusyContext } from '../redux/busy/context'
import { BUSY_ACTION_TYPES } from '../redux/busy/reducer'

const useBusy = () => {
  const { state, dispatch }: any = React.useContext(BusyContext)
  const busy = get(state, 'busy', {})

  const setBusy = React.useCallback(
    (value) => {
      dispatch({
        type: BUSY_ACTION_TYPES.SET_BUSY,
        value,
      })
    },
    [dispatch]
  )

  return { busy, state, dispatch, setBusy }
}

export default useBusy
