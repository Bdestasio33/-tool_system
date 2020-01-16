import "../assets/css/App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "../components/HomePage";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/Home" component={HomePage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
