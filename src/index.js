import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MyProjects from './page/myprojects';
import Tasks from "./page/tasks";
import CreateProject from "./components/createproject";
import CreateTask from "./components/createtask";
import DeleteProject from "./components/deleteproject";
import DeleteTasks from "./components/deletetask";
import EditProject from "./components/editproject";
import EditTask from "./components/edittask";
import Navbar  from './components/navbar';
import { Router,Route,browserHistory } from 'react-router';
import './index.css';


ReactDOM.render(
  <>
  <Navbar />
  <Router history = {browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/myprojects" component={MyProjects}/>
    <Route path="/tasks" component={Tasks}/>
    <Route path="/createproject" component={CreateProject}/>
    <Route path="/createtask" component={CreateTask}/>
    <Route path="/deleteproject" component={DeleteProject}/>
    <Route path="/deletetasks" component={DeleteTasks}/>
    <Route path="/editproject" component={EditProject}/>
    <Route path="/edittask" component={EditTask}/>
  </Router>
  </>,document.getElementById('root')
);

