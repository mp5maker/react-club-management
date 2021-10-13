import { createBrowserHistory } from 'history'
import React from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import Body from './components/body'
import Sidebar from './components/sidebar'
import routes from './constants/routes'
import useLanguage from './hooks/useLanguage'
import useTheme from './hooks/useTheme'
import Home from './pages/home'
import Schedule from './pages/schedule'

const history = createBrowserHistory()

const App = () => {
  useTheme()
  useLanguage()

  return (
    <Body>
      <Sidebar />
      <Router history={history}>
        <Switch>
          <Route path={routes.root.path} component={Home} exact={true} />
          <Route path={routes.home.path} component={Home} exact={true} />
          <Route
            path={routes.schedule.path}
            component={Schedule}
            exact={true}
          />
        </Switch>
      </Router>
    </Body>
  )
}
export default App
