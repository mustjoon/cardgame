import { Redirect, Route } from 'react-router-dom';
import React from 'react';

const PrivateRoute = ({ component: Component, authed, ...rest }) => {

  console.log("LOL?");
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
    />
  );
}

export default PrivateRoute;
