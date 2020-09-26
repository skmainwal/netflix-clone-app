import React from "react";
import "./App.css";
import Row from "./component/Row";
import request from "./request";
import Banner from "./component/Banner";
import Nav from "./component/Nav";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import MovieList from "./component/MovieList";
import Tvshow from "./component/Tvshow";
import Newrow from "./component/Newrow";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />

        <Switch>
          <Route exact path="/home" component={Newrow} />
          <Route exact path="/movie" component={MovieList} />
          <Route exact path="/tvshow" component={Tvshow} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
