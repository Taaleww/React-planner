import { Link, useParams } from "react-router-dom";
import TaskItem from "../components/taskitem";
import CreateTasks from "../components/modal/createtask";
import gql from "graphql-tag";
import ApolloClient from "apollo-boost";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Tasks() {
  const client = new ApolloClient({
    uri: "http://localhost:5000/graphql",
  });

  const params = useParams();

  // Check value of Object
  let projectId = params?.projectId;

  const [showCreateTaskModal, setShowCreateTaskModal] = React.useState(false);

  const [todoData, setTodoData] = React.useState([]);
  const [inProgressData, setInProgressData] = React.useState([]);
  const [successData, setSuccessData] = React.useState([]);

  const [task, setTask] = useState([]);
  const [projectName, setProjectName] = useState("");

  function changeStateModalFromChild(state) {
    setShowCreateTaskModal(state);
  }

  async function addTask(
    projectId,
    taskName,
    startDate,
    dueDate,
    description,
    userId,
    reporter
  ) {
    const taskStatusId = 1;
    const newTask = {
      projectId: parseInt(projectId),
      taskName,
      startDate: new Date(startDate),
      dueDate: new Date(dueDate),
      description,
      taskStatusId,
      userId,
      reporter,
    };
    const { data } = await client.mutate({
      mutation: gql`
        mutation createTask($createTaskInput: CreateTaskInput!) {
          createTask(createTaskInput: $createTaskInput) {
            taskId
          }
        }
      `,
      variables: { createTaskInput: newTask },
    });
    console.log("created data: ", data);
    getMyTasks();
    setShowCreateTaskModal(false);
  }

  async function getMyTasks() {
    console.log("HERE", projectId);
    setTask([]);
    const { data } = await client.query({
      query: gql`
        query project {
          project(id: ${projectId}) {
            projectName
            task {
              taskId
              taskName
              taskStatusId{
                taskStatusId
              }
              description
              assign {
                id 
              }
            }
          }
        }
      `,
    });
    console.log("project", data);
    if (data) {
      await setProjectName(data.project.projectName);
      await setTask([...data.project.task, ...task]);
      // await setTodoData(task.filter((task) => task.status === "TODO"));
      // await setInProgressData(task.filter((task) => task.status === "INPROGRESS"));
      // await setSuccessData(task.filter((task) => task.status === "DONE"));
    }
  }

  async function addTask(
    projectId,
    taskName,
    startDate,
    dueDate,
    description,
    userId
  ) {
    const taskStatus = 1; // to do
    //! current userID wait for change
    const reporter = 1;
    const newTask = {
      projectId,
      taskName,
      startDate: new Date(startDate),
      dueDate: new Date(dueDate),
      description,
      taskStatus,
      userId,
      reporter,
    };
    console.log("new task",newTask);
    const { data } = await client.mutate({
      mutation: gql`
        mutation createTask($createTaskInput: CreateTaskInput!) {
          createTask(createTaskInput: $createTaskInput) {
            project {
              projectName
            }
            taskName
            startDate
            dueDate
            description
            assign {
              id
            }
          }
        }
      `,
      variables: { createTaskInput: newTask },
    });
    console.log("newtask", newTask);
    getMyTasks();
    setShowCreateTaskModal(false);
  }

  async function editTask(newData) {
    const { data } = await client.mutate({
      mutation: gql`
        mutation updateTask($updateTaskInput: UpdateTaskInput!) {
          updateTask(updateTaskInput: $updateTaskInput) {
            taskId
            taskName
            taskStatusId {
              taskStatusId
            }
            description
            assign {
              id
            }
          }
        }
      `,
      variables: { updateTaskInput: newData },
    });
    if (data?.updateTask) {
      setTask([
        ...task.filter((task) => task.taskId !== newData.id),
        data.updateTask,
      ]);
    }
  }

  async function deleteTask(target) {
    const { data } = await client.mutate({
      mutation: gql`
        mutation removeTask($id: Int!) {
          removeTask(id: $id)
        }
      `,
      variables: { id: target },
    });
    if (data.removeTask === "Delete Success") {
      setTask(task.filter((task) => task.taskId !== target));
    }
  }

  useEffect(() => {
    getMyTasks();
  }, []);

  return (
    <>
      {/* title */}
      <div className="MyProjects font-bold md:container md:mx-auto  font-mono ">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full px-4 max-w-full flex-grow flex-1 flex flex-row ">
            <h3 className="font-semibold text-base px-4 ">
              <Link to="/myprojects">My Projects</Link>
            </h3>
            <h3 className="font-semibold text-base ">/ Tasks</h3>
          </div>
          <div className="relative w-full px-4 max-w-3 flex-grow flex-1 text-right">
            <button
              className="bg-gray-800  text-white hover:shadow-lg rounded-full  text-xs font-bold uppercase px-4 py-2 rounded outline-none focus:outline-none mr-3 mb-1 ease-linear"
              type="button"
              onClick={() => setShowCreateTaskModal(true)}
            >
              CREATE TASKS +
            </button>
          </div>
        </div>

        <div className="Titletasks font-mono font-bold px-4">
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
                    </thead>
                    {/* content */}
                    <tr>
                      <td>
                        {task
                          .filter(
                            (task) => task.taskStatusId.taskStatusId === 1
                          )
                          .map((data) => {
                            return (
                              <TaskItem
                                taskData={data}
                                deleteTask={deleteTask}
                                editTask={editTask}
                                addTask={addTask}
                                projectId={projectId}
                              />
                            );
                          })}
                      </td>
                      <td>
                        {task
                          .filter(
                            (task) => task.taskStatusId.taskStatusId === 2
                          )
                          .map((data) => {
                            return (
                              <TaskItem
                                taskData={data}
                                deleteTask={deleteTask}
                                editTask={editTask}
                                addTask={addTask}
                                projectId={projectId}
                              />
                            );
                          })}
                      </td>
                      <td>
                        {task
                          .filter(
                            (task) => task.taskStatusId.taskStatusId === 3
                          )
                          .map((data) => {
                            return (
                              <TaskItem
                                taskData={data}
                                deleteTask={deleteTask}
                                editTask={editTask}
                                addTask={addTask}
                                projectId={projectId}
                              />
                            );
                          })}
                      </td>
                    </tr>
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
            addTask={addTask}
            projectId={projectId}
          />
        </>
      ) : null}
    </>
  );
}

export default Tasks;
