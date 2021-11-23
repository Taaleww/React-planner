import "./App.css";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory } from "react-router";
import MyProjects from "./page/myprojects";
import Tasks from "./page/tasks";
import Navbar from "./components/navbar";
import Login from "./page/loginform";
import Regis from "./page/regisform";
import InfoTask from "./components/modal/infotask";
import NotFound from "./page/notfound";
import Profile from "./page/profile";
import ManageAccount from "./page/manageaccount";
import Home from "./page/home"
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Navbar />
      <Router history={browserHistory}>
          <div className="App">
            <Route path="/" component={Home} />
          </div>
          <Route path="/myprojects" component={MyProjects} />
          <Route path="/tasks" component={Tasks} />
          <Route path="/login" component={Login} />
          <Route path="/regis" component={Regis} />
          <Route path="/profile" component={Profile} />
          <Route path="/manage_account" component={ManageAccount} />
          <Route path="/infotask" component={InfoTask} />
          <Route path="*" component={NotFound} />
      </Router>
      <Footer />
   </>
  );
}

export default App;
