import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import PageNotFound from "./PageNotFound";
import Privacy from "./RoutingPages/Privacy";
import Terms from "./RoutingPages/Terms";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AboutUs from "./RoutingPages/AboutUs";
import ProjectDesc from "./Search/ProjectDesc";
import SearchResult from "./Search/SearchResult";

const routing = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/privacy" component={Privacy} />
      <Route exact path="/terms" component={Terms} />
      <Route exact path="/about" component={AboutUs} />
      <Route exact path="/result" component={SearchResult} />
      <Route exact path="/desc" component={ProjectDesc} />

      <Route exact path="*" component={PageNotFound} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routing, document.getElementById("root"));
