import { createBrowserHistory } from 'history'
import React from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import Alert from './components/alert'
import Body from './components/body'
import Sidebar from './components/sidebar'
import routes from './constants/routes'
import useLanguage from './hooks/useLanguage'
import useTheme from './hooks/useTheme'
import AddMember from './pages/add-member'
import EditMember from './pages/edit-member'
import Home from './pages/home'
import NotFound from './pages/not-found'
import Schedule from './pages/schedule'

const history = createBrowserHistory()

export const Routes = () => {
  return (
    <Router history={history}>
      <Sidebar />
      <Switch>
        <Route path={routes.root.path} component={Home} exact={true} />
        <Route path={routes.home.path} component={Home} exact={true} />
        <Route path={routes.schedule.path} component={Schedule} exact={true} />
        <Route
          path={routes.addMember.path}
          component={AddMember}
          exact={true}
        />
        <Route
          path={routes.editMember.path}
          component={EditMember}
          exact={true}
        />
        <Route path={routes.notFound.path} component={NotFound} />
      </Switch>
    </Router>
  )
}

const App = () => {
  useTheme()
  useLanguage()

  return (
    <Body>
      <Alert />
      <Routes />
    </Body>
  )
}
export default App
