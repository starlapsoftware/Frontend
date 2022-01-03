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
  );
}

export default App;
