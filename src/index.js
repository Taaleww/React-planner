import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import MyProjects from "./page/myprojects";
import Tasks from "./page/tasks";
import Navbar from "./components/navbar";
import Login from "./page/loginform";
import Regis from "./page/regisform";
// import InfoTask from "./components/modal/infotask";
import NotFound from "./page/notfound";
import Profile from "./page/profile";
import { Router, Route, browserHistory } from "react-router";
import "./index.css";

ReactDOM.render(
  <>
    <Navbar />
    <Router history={browserHistory}>
        <Route path="/" component={App} />
        <Route path="/myprojects" component={MyProjects} />
        <Route path="/tasks" component={Tasks} />
        <Route path="/login" component={Login} />
        <Route path="/regis" component={Regis} />
        <Route path="/profile" component={Profile} />
        {/* <Route path="/infotask" component={InfoTask} /> */}
        <Route path="*" component={NotFound} />
    </Router>
  </>,
  document.getElementById("root")
);
