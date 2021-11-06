import "./App.css";
import { Link } from 'react-router';
import CreateProject from "./components/createproject";
import CreateTask from "./components/createtask";
import DeleteProject from "./components/deleteproject";
import DeleteTasks from "./components/deletetask";
import EditProject from "./components/editproject";
import EditTask from "./components/edittask";
import MyProjects from "./page/myprojects";
import Tasks from "./page/tasks";

function App() {
  return (
    <div className="App">
      <MyProjects/>
      {/* <Tasks /> */}
      {/* <DeleteTasks/>
     <DeleteProject/> */}
      {/* <CreateProject/> */}
      {/* <CreateTask/> */}
      {/* <EditProject/> */}
      {/* <EditTask/> */}
    </div>
  );
}

export default App;
