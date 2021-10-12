interface IInitState {
  members: Array<{ [x: string]: string }>
}

export const initState: IInitState  = {
  members: []
}

export enum MEMBERS_ACTION_TYPES {
  GET_MEMBERS =  'GET_MEMBERS'
}

const reducer = (state = initState, action: { type: MEMBERS_ACTION_TYPES, value: any }) => {
  const { type, value } = action

  switch(type) {
    case MEMBERS_ACTION_TYPES.GET_MEMBERS:
      return {
        ...state,
        members: value
      }
    default: return state
  }
}

export default reducer