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
import reportWebVitals from './reportWebVitals';
import { Router,Route,browserHistory } from 'react-router';
import './index.css';


ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  // document.getElementById('root')
  <Router history = {browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/myProjects" component={MyProjects}/>
    <Route path="/tasks" component={Tasks}/>
    <Route path="/CreateProject" component={CreateProject}/>
    <Route path="/CreateTask" component={CreateTask}/>
    <Route path="/DeleteProject" component={DeleteProject}/>
    <Route path="/DeleteTasks" component={DeleteTasks}/>
    <Route path="/EditProject" component={EditProject}/>
    <Route path="/EditTask" component={EditTask}/>

    

  </Router>,document.getElementById('root')
);


    // "start": "react-scripts start",
    // "build": "react-scripts build",
    // "test": "react-scripts test",