import React from 'react'
import ReactDOM from 'react-dom'
import { I18nextProvider } from 'react-i18next'
import App from './App'
import './index.scss'
import MembersContextProvider from './redux/members/context'
import i18n from './locales'

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <MembersContextProvider>
        <App />
      </MembersContextProvider>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
