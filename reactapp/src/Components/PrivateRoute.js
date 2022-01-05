import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, isAutenticate, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      /*   localStorage.getItem("user")  */
      isAutenticate ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />
);
export default PrivateRoute;
