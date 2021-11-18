import React from "react";
import { Link } from "react-router";
import TaskItem from "../components/taskitem";
import CreateTasks from "../components/modal/createtask";
import AddMember from "../components/modal/addmember";

function Tasks() {
  function changeStateModalFromChild(state) {
    setShowCreateTaskModal(state);
  }

  function changeStateAddMemberModalFromChild(state) {
    setShowAddMemberModal(state);
  }
  const [showCreateTaskModal, setShowCreateTaskModal] = React.useState(false);
  const [showAddMemberModal, setShowAddMemberModal] = React.useState(false);
  const [todoData, setTodoData] = React.useState([
    {
      title: "Backend",
      createDate: new Date(),
      dueDate: new Date(),
      description: "hello everyone.",
      status: "To do",
      members: [1, 2, 3],
    },
    {
      title: "Web design",
      createDate: new Date(),
      dueDate: new Date(),
      description: "hello everyone2.",
      status: "To do",
      members: [1, 2, 3],
    },
    {
      title: "Frontend",
      createDate: new Date(),
      dueDate: new Date(),
      description: "hello everyone3.",
      status: "To do",
      members: [1, 2, 3],
    },
  ]);
  const [inProgressData, setInProgressData] = React.useState([
    {
      title: "Backend",
      createDate: new Date(),
      dueDate: new Date(),
      description: "hello everyone.",
      status: "In Progress",
      members: [1, 2, 3],
    },
    {
      title: "Web design",
      createDate: new Date(),
      dueDate: new Date(),
      description: "hello everyone2.",
      status: "In Progress",
      members: [1, 2, 3],
    },
    {
      title: "Frontend",
      createDate: new Date(),
      dueDate: new Date(),
      description: "hello everyone3.",
      status: "In Progress",
      members: [1, 2, 3],
    },
  ]);
  const [successData, setSuccessData] = React.useState([
    {
      title: "Backend",
      createDate: new Date(),
      dueDate: new Date(),
      description: "hello everyone.",
      status: "Success",
      members: [1, 2, 3],
    },
    {
      title: "Web design",
      createDate: new Date(),
      dueDate: new Date(),
      description: "hello everyone2.",
      status: "Success",
      members: [1, 2, 3],
    },
    {
      title: "Frontend",
      createDate: new Date(),
      dueDate: new Date(),
      description: "hello everyone3.",
      status: "Success",
      members: [1, 2, 3],
    },
  ]);
  // const entities = {
  //   columnOrder: [todoData.status, inProgressData.status,successData.status],
  //   columns: {
  //     [todoData.status]: Todo,
  //     [inProgressData.status]: InProgress,
  //     [successData.status]: Success
  //   },
  //   tasks: taskMap
  // }
  return (
    <>
    {/* title */}
      <div className="MyProjects font-bold md:container md:mx-auto  font-mono ">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full px-4 max-w-full flex-grow flex-1 flex flex-row ">
            
            <h3 className="font-semibold text-xl px-4 ">
              <Link to="/myprojects">My Projects</Link>
            </h3>
            <h3 className="font-semibold text-xl ">/ Tasks</h3>
          </div>
          <div className="relative w-full px-4 max-w-3 flex-grow flex-1 text-right">
            <button
              className="bg-gray-800  text-white hover:shadow-lg rounded-full  text-xs font-bold uppercase px-4 py-2 rounded outline-none focus:outline-none mr-3 mb-1 ease-linear"
              type="button"
              onClick={() => setShowAddMemberModal(true)}
            >
              + ADD MEMBERS
            </button>
            <button
              className="bg-gray-800  text-white hover:shadow-lg rounded-full  text-xs font-bold uppercase px-4 py-2 rounded outline-none focus:outline-none mr-3 mb-1 ease-linear"
              type="button"
              onClick={() => setShowCreateTaskModal(true)}
            >
              CREATE TASKS +
            </button>
          </div>
        </div>

        <div className="Titleasks font-mono font-bold px-4">
          <div className="flex flex-col mb-6">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8 mt-6">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-x divide-gray-500 divide-opacity-50 divide-dashed">
                    <thead className="bg-gray-800">
                      <tr>
                        <th
                          scope="col"
                          className="px-32 py-3 text-center text-xs font-medium text-white font-bold uppercase tracking-wider"
                        >
                         To do
                          
                          
                        </th>
                        
                        <th
                          scope="col"
                          className="px-32 py-3 text-center text-xs font-medium text-white font-bold uppercase tracking-wider"
                        >
                          In Progress
                        </th>
                        <th
                          scope="col"
                          className="px-32 py-3  text-center text-xs font-medium text-white font-bold uppercase tracking-wider"
                        >
                          Success
                        </th>
                      </tr>
                    </thead >
                    {/* content */}
                    {/* To do */}
                    <td >
                  
                      {todoData.map((data) => {
                        return <TaskItem taskData={data} />;
                      })}
                    </td>

                    {/* In progress */}
                    <td>
                      {inProgressData.map((data) => {
                        return <TaskItem taskData={data} />;
                      })}
                    </td>
                    {/* success */}
                    <td>
                      {successData.map((data) => {
                        return <TaskItem taskData={data} />;
                      })}
                    </td>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       {/* modal  */}
      {showCreateTaskModal ? (
        <>
          <CreateTasks
            setShowCreateTaskModalFromParent={changeStateModalFromChild}
          />
        </>
      ) : null}

      {showAddMemberModal ? (
        <>
          <AddMember
            setShowAddMemberModalFromParent={changeStateAddMemberModalFromChild}
          />
        </>
      ) : null}
    </>
  );
}

export default Tasks;
