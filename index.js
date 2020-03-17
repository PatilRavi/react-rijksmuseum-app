import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HomePage from "./HomePage";
import EventsPage from "./EventsPage";
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Welcome to the Museum"
    };
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/events">
            <EventsPage />
          </Route>
          <Route exect path="/">
            <HomePage name={this.state.name} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

render(<App />, document.getElementById("root"));
