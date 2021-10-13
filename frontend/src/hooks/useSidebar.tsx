import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SIDEBAR } from '../constants/settings'
import {
  changeSidebar as _changeSidebar,
  selectSidebar,
} from '../redux/persist/sidebarReducer'

const useSidebar = () => {
  const sidebar = useSelector(selectSidebar)
  const dispatch = useDispatch()

  const changeSidebar = React.useCallback(
    (newSidebar: SIDEBAR) => {
      return dispatch(_changeSidebar(newSidebar))
    },
    [dispatch]
  )

  return { sidebar, changeSidebar }
}

export default useSidebar
