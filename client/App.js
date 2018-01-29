import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home, Saved } from "./routes";
import navbar from "./components/navbar";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <navbar>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="saved" component={Saved}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;