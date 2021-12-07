import "./App.css";
import React from "react";

import MyProjects from "./page/myprojects";
import Tasks from "./page/tasks";
import Navbar from "./components/navbar";
import Login from "./page/loginform";
import Regis from "./page/regisform";
import InfoTask from "./components/modal/infotask";
import Footer from "./components/footer";
import NotFound from "./page/notfound";
import Profile from "./page/profile";
import ManageAccount from "./page/manageaccount";
import Home from "./page/home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { AuthProvider } from './context/auth'
import AuthRoute from "./util/GuestRoute";
import GuestRoute from "./util/GuestRoute";

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/login" component={ Login } />
          <Route path="/regis" component={ Regis } />
          <Route path="/myprojects" component={ MyProjects } />
          <Route path="/project/:projectId/tasks" component={ Tasks } />
          <Route path="/profile" component={ Profile } />
          <Route path="/manage_account" component={ ManageAccount } />
          <Route path="/infotask" component={ InfoTask } />
          {/* <GuestRoute path="/login" component={ Login } />
          <GuestRoute path="/regis" component={ Regis } />
          <AuthRoute exact path="/myprojects" component={ MyProjects } />
          <AuthRoute path="/project/:projectId/tasks" component={ Tasks } />
          <AuthRoute path="/profile" component={ Profile } />
          <AuthRoute path="/manage_account" component={ ManageAccount } />
          <AuthRoute path="/infotask" component={ InfoTask } />
          <Route path="*" component={ NotFound } /> */}
        </Switch>
      </Router>
      <Footer />
    </AuthProvider>
  );
}

export default App;
