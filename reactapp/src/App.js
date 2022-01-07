import React from "react";
import { Router, Route, Switch, Redirect, HashRouter } from "react-router-dom";

import { ThemeProvider } from "@mui/material/styles";
import theme from "./components/TemaConfig";
import Contenedor from "./components/Contenedor";
import Login from "./components/Login";
import { history } from "./helpers";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter history={history}>
        <Switch>
          <PrivateRoute exact path="/" component={Contenedor} />
          <Route exact path="/login" component={Login} />
          <Redirect from="*" to="/" />
        </Switch>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
