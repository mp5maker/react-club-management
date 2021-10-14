interface IInitState {
  busy: boolean
}

export const initState: IInitState = {
  busy: false,
}

export enum BUSY_ACTION_TYPES {
  SET_BUSY = 'SET_BUSY',
}

const reducer = (
  state = initState,
  action: { type: BUSY_ACTION_TYPES; value: any }
) => {
  const { type, value } = action

  switch (type) {
    case BUSY_ACTION_TYPES.SET_BUSY:
      return {
        ...state,
        busy: value,
      }
    default:
      return state
  }
}

export default reducer
