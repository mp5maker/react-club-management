import * as React from 'react'
import reducer, { initState } from './reducer'

interface IMembersContext {
  state: { [x: string]: string }
  dispatch: React.Dispatch<any>
}

export const MembersContext = React.createContext<Partial<IMembersContext>>({})

interface IMembersContextProvider {}
const MembersContextProvider: React.FC<IMembersContextProvider> = ({
  children,
}) => {
  const [state, dispatch] = React.useReducer(reducer, initState)

  return (
    <MembersContext.Provider value={{ state, dispatch }}>
      <>{children}</>
    </MembersContext.Provider>
  )
}

export default MembersContextProvider
