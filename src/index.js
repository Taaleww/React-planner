import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import MyProjects from "./page/myprojects";
import Tasks from "./page/tasks";
import Navbar from "./components/navbar";
import NotFound from "./page/notfound";
import { Router, Route, browserHistory } from "react-router";
import "./index.css";

ReactDOM.render(
  <>
    <Navbar />
    <Router history={browserHistory}>
        <Route path="/" component={App} />
        <Route path="/myprojects" component={MyProjects} />
        <Route path="/tasks" component={Tasks} />
        <Route path="*" component={NotFound} />
    </Router>
  </>,
  document.getElementById("root")
);
