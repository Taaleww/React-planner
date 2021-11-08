import "./tasks.css";
import React from "react";
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
  return (
    <>
      <div className="MyProjects font-bold md:container md:mx-auto bg-white font-mono ">
        <div class="flex flex-wrap items-center">
          <div class="relative w-full px-4 max-w-full flex-grow flex-1">
            <h3 class="font-semibold text-base text-blueGray-700">Tasks</h3>
          </div>
          <div class="relative w-full px-4 max-w-3 flex-grow flex-1 text-right">
            <button
              class="bg-gradient-to-r from-pink-400 to-purple-400 text-white hover:text-indigo-900 rounded-full  text-xs font-bold uppercase px-4 py-2 rounded outline-none focus:outline-none mr-3 mb-1 ease-linear"
              type="button"
              onClick={() => setShowAddMemberModal(true)}
            >
              + ADD MEMBERS
            </button>
            <button
              class="bg-gradient-to-r from-purple-400 to-blue-400 text-white hover:text-indigo-900 rounded-full  text-xs font-bold uppercase px-4 py-2 rounded outline-none focus:outline-none mr-3 mb-1 ease-linear"
              type="button"
            >
              SHARE LINK
            </button>
            <button
              class="bg-gradient-to-r from-green-300 to-blue-400 text-white hover:text-indigo-900 rounded-full  text-xs font-bold uppercase px-4 py-2 rounded outline-none focus:outline-none mr-3 mb-1 ease-linear"
              type="button"
              onClick={() => setShowCreateTaskModal(true)}
            >
              CREATE TASKS +
            </button>
          </div>
        </div>

        <div className="Titleasks font-mono font-bold">
          <div class="flex flex-col mb-6">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8 mt-6">
                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table class="min-w-full divide-x divide-gray-500 divide-opacity-50 divide-dashed">
                    <thead class="bg-gray-800">
                      <tr>
                        <th
                          scope="col"
                          class="px-32 py-3 text-center text-xs font-medium text-white font-bold uppercase tracking-wider"
                        >
                          To Do
                        </th>
                        <th
                          scope="col"
                          class="px-32 py-3 text-center text-xs font-medium text-white font-bold uppercase tracking-wider"
                        >
                          In Progress
                        </th>
                        <th
                          scope="col"
                          class="px-32 py-3  text-center text-xs font-medium text-white font-bold uppercase tracking-wider"
                        >
                          Success
                        </th>
                      </tr>
                    </thead>
                    {/* To do */}
                    <td>
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
