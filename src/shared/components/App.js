import React, { Component } from 'react'
import routes from '../routes'
import { Route, Switch } from 'react-router-dom'
import NoMatch from './NoMatch'

export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          {routes.map(({path, exact, component: C, ...rest}) => (
            <Route
              key={path}
              path={path}
              exact={exact}
              render={(props) => (
                <C {...props} {...rest} />
              )}
            />
          ))}
          <Route render={(props) => <NoMatch {...props} />} />
        </Switch>
      </div>
    );
  }
}
