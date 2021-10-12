import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.scss'
import MembersContextProvider from './redux/members/context'

ReactDOM.render(
  <React.StrictMode>
    <MembersContextProvider>
      <App />
    </MembersContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
