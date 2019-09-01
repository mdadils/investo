import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./index.css";
import App from "./decoratedApp";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import HomePage from "./templates/pages/Home";
import EditSection from "./templates/components/EditDetails";

import Store from "./sdk/store";

const ProvidedApp = (
  <Provider store={Store}>
    <Router>
      <Route path="/" exact component={HomePage} />
      <Route path="/connect-me-now" component={App} />
      <Route path="/test" component={EditSection} />
    </Router>
  </Provider>
);
ReactDOM.render(ProvidedApp, document.getElementById("root"));

serviceWorker.unregister();
