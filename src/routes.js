import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Result from "./pages/Result";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/result" component={Result}></Route>
      </Switch>
    </BrowserRouter>
  );
}
