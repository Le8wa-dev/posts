import React from 'react'

import { Route, Switch, Redirect } from 'react-router-dom'
import { AuthContext } from '../context';
import { privateRoutes, publicRoutes } from '../router';
import { Loader } from './UI/Loader/Loader';

export const AppRouter = () => {

  const {isAuth, isLoading} = React.useContext(AuthContext)

  if(isLoading) {
    return <Loader/>
  }

  return (
    isAuth
      ? <Switch>
        {privateRoutes.map(route => (
          <Route
            key={route.path}
            path={route.path}
            component={route.component}
            exact={route.exact}
          />
        ))}
        <Redirect to="/posts" />
      </Switch>
      : <Switch>
        {publicRoutes.map(route => (
          <Route
            key={route.path}
            path={route.path}
            component={route.component}
            exact={route.exact}
          />
        ))}
        <Redirect to="/login" />
      </Switch>
  )
}
