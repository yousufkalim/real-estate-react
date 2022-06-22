// Init
import React from "react";
import { Route, Switch } from "react-router-dom";

// Routes
import Home from "../containers/Home.js";
import Terms from "../containers/Terms";
import Privacy from "../containers/Privacy";

const index = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/terms" component={Terms} />
      <Route exact path="/privacy" component={Privacy} />
    </Switch>
  );
};

export default index;
