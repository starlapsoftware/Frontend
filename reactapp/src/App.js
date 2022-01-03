<<<<<<< HEAD
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import Contenedor from "./pages/Contenedor";
import Login from "./pages/Login";
import Home from "./components/Home";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <PrivateRoute exact path="/" component={Home} isLogin={false} />
          <Route path="/login" component={Login} />
          <Redirect from="*" to="/" />
        </Switch>
      </HashRouter>
    </div>
=======
import { ThemeProvider } from "@mui/material/styles";
import theme from "./components/TemaConfig";
import Contenedor from "./components/Contenedor";
import Login from "./components/Login";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Login />
    </ThemeProvider>
>>>>>>> 5cf1b2edb9d6244667893627e80f009d2fc10e00
  );
}

export default App;
