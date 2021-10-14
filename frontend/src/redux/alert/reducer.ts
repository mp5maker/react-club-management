import React from "react"
import { COLORS } from "../../constants/settings"
import get from 'lodash/get'

interface IInitState {
  alert: {
    color: COLORS,
    show: boolean,
    message: string | React.ReactNode
    duration: number
  }
}

export const initState: IInitState  = {
  alert: {
    color: COLORS.SUCCESS,
    show: false,
    message: '',
    duration: 3000
  }
}

export enum ALERT_ACTION_TYPES {
  SET_ALERT =  'SET_ALERT'
}

const reducer = (state = initState, action: { type: ALERT_ACTION_TYPES, value: any }) => {
  const { type, value } = action

  switch(type) {
    case ALERT_ACTION_TYPES.SET_ALERT:
      return {
        ...state,
        alert: {
          ...get(state, 'alert', {}),
          ...value
        }
      }
    default: return state
  }
}

export default reducer