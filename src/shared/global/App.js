import React, { Component } from 'react'
import routes from './routes'
import { Route, Switch } from 'react-router-dom'
import Helmet from 'react-helmet'
import Nav from './Nav'
import NoMatch from './NoMatch'

export default class App extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
          <title>SS Weddings</title>
        </Helmet>
        <Nav />
        <Switch>
          {routes.map(({ path, exact, component: Component, ...rest }) => (
            <Route key={path} path={path} exact={exact} render={(props) => (
                <Component {...props} {...rest} />
            )} />
          ))}
          <Route render={(props) => <NoMatch {...props} />} />
        </Switch>
      </div>
    );
  }
}
