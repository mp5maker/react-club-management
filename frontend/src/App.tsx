import React from 'react'
import { createBrowserHistory } from 'history'
import { Route, Router, Switch } from 'react-router-dom'
import Body from './components/body'
import routes from './constants/routes'
import Home from './pages/home'
import Schedule from './pages/schedule'

const history = createBrowserHistory()

const App = () => {
  React.useEffect(() => {}, [])

  return (
    <Body>
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
