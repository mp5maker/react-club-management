import * as React from 'react'
import reducer, { initState } from './reducer'

interface IBusyContext {
  state: { [x: string]: string }
  dispatch: React.Dispatch<any>
}

export const BusyContext = React.createContext<Partial<IBusyContext>>({})

interface IBusyContextProvider {}
const BusyContextProvider: React.FC<IBusyContextProvider> = ({
  children,
}) => {
  const [state, dispatch] = React.useReducer(reducer, initState)

  return (
    <BusyContext.Provider value={{ state, dispatch }}>
      <>{children}</>
    </BusyContext.Provider>
  )
}

export default BusyContextProvider
