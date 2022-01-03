import React from "react";
import ReactDOM from "react-dom";
<<<<<<< HEAD
import { Provider } from "react-redux";

import App from "./App";
import store from "./store";
=======
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
>>>>>>> 5cf1b2edb9d6244667893627e80f009d2fc10e00

ReactDOM.render(
  <Provider store={store}>
    <App />
<<<<<<< HEAD
  </Provider>,
=======
  </React.StrictMode>,
>>>>>>> 5cf1b2edb9d6244667893627e80f009d2fc10e00
  document.getElementById("root")
);
