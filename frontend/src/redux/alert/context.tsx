import * as React from 'react'
import reducer, { initState } from './reducer'

interface IAlertContext {
  state: { [x: string]: string }
  dispatch: React.Dispatch<any>
}

export const AlertContext = React.createContext<Partial<IAlertContext>>({})

interface IAlertContextProvider {}
const AlertContextProvider: React.FC<IAlertContextProvider> = ({
  children,
}) => {
  const [state, dispatch] = React.useReducer(reducer, initState)

  return (
    <AlertContext.Provider value={{ state, dispatch }}>
      <>{children}</>
    </AlertContext.Provider>
  )
}

export default AlertContextProvider
