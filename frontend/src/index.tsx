import React from 'react'
import ReactDOM from 'react-dom'
import { I18nextProvider } from 'react-i18next'
import { Provider } from 'react-redux'
import persistStore from 'redux-persist/es/persistStore'
import { PersistGate } from 'redux-persist/integration/react'
import App from './App'
import './index.scss'
import i18n from './locales'
import AlertContextProvider from './redux/alert/context'
import MembersContextProvider from './redux/members/context'
import store from './redux/persist/store'

const persistor = persistStore(store)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <I18nextProvider i18n={i18n}>
          <MembersContextProvider>
            <AlertContextProvider>
              <App />
            </AlertContextProvider>
          </MembersContextProvider>
        </I18nextProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
