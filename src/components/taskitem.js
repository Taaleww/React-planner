import React from "react";
import { ReactComponent as TrashSvg } from "../assets/icons/trash.svg";
import { ReactComponent as PenSvg } from "../assets/icons/pen.svg";
import { ReactComponent as TodoSvg } from "../assets/icons/todo.svg";
import { ReactComponent as InProgressSvg } from "../assets/icons/inprogress.svg";
import { ReactComponent as DoneSvg } from "../assets/icons/done.svg";
import { ReactComponent as DateSvg } from "../assets/icons/date.svg";
import EditTask from "../components/modal/edittask";
import DeleteTask from "../components/modal/deletetask";
import InfoTask from "../components/modal/infotask";
import "./base.css";

function HeaderIcon({ status }) {
  if (status === "To do") {
    return <TodoSvg />;
  } else if (status === "In Progress") {
    return <InProgressSvg />;
  } else if (status === "Success") {
    return <DoneSvg />;
  }
}

function StatusTag({ status }) {
  if (status === "To do") {
    return (
      <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
        {status}
      </span>
    );
  } else if (status === "In Progress") {
    return (
      <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
        {status}
      </span>
    );
  } else if (status === "Success") {
    return (
      <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
        {status}
      </span>
    );
  }
}

function TaskItem({ taskData }) {
  function changeStateEditModalFromChild(state) {
    setShowEditTaskModal(state);
  }
  function changeStateDeleteModalFromChild(state) {
    setShowDeleteTaskModal(state);
  }
  function changeStateInfoModalFromChild(state) {
    setShowInfoTaskModal(state);
  }
  const [showEditTaskModal, setShowEditTaskModal] = React.useState(false);
  const [showDeleteTaskModal, setShowDeleteTaskModal] = React.useState(false);
  const [showInfoTaskModal, setShowInfoTaskModal] = React.useState(false);

  return (
    <>
      <div class="Tasks relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow mt-9 m-auto cursor-move">
        <HeaderIcon status={taskData.status} />
        <div class="mt-8 ">
          <button class="" onClick={() => {
                  setShowInfoTaskModal(true);
                }}>
            <p class="text-xl font-semibold my-2 cursor-pointer ">
              {taskData.title}
            </p>
          </button>
          <div class="flex space-x-2 text-gray-400 text-sm my-3">
            <DateSvg />
            <p>Date : 5 oct 2021</p>
          </div>
          <div class="flex space-x-2 text-gray-400 text-sm my-3">
            <DateSvg />
            <p>Due Date : 5 oct 2021</p>
          </div>
          {/* <div class="flex space-x-2 text-gray-400 text-sm my-3">
            <p> Description : {taskData.description}</p>
          </div> */}
          <td class="px-0 py-0 whitespace-nowrap">
            <StatusTag status={taskData.status} />
          </td>
          <br></br>
          <div class="border-t-2 "></div>

          <div class="flex justify-between">
            <div class="my-2">
              <p class="font-semibold text-base mb-2">Team Member</p>
              <div class="flex space-x-2">
                <img
                  src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  class="w-6 h-6 rounded-full"
                  alt=""
                />
              </div>
            </div>
          </div>
          <td class="px-16 py-0 whitespace-nowrap text-sm text-gray-500 align-center">
            <td class="w-5 mr-2 transform hover:text-purple-500 hover:scale-110 ">
              <PenSvg
                class="cursor-pointer"
                onClick={() => {
                  setShowEditTaskModal(true);
                }}
              />
            </td>
            <td class="px-2 py-0 whitespace-nowrap "></td>
            <td class="w-5 mr-2 transform hover:text-red-500 hover:scale-110">
              <TrashSvg
                class="cursor-pointer"
                onClick={() => {
                  setShowDeleteTaskModal(true);
                }}
              />
            </td>
          </td>
        </div>
      </div>

      {showEditTaskModal ? (
        <EditTask
          setShowEditTaskModalFromParent={changeStateEditModalFromChild}
        />
      ) : null}
      {showDeleteTaskModal ? (
        <DeleteTask
          setShowDeleteTaskModalFromParent={changeStateDeleteModalFromChild}
        />
      ) : null} 
      {showInfoTaskModal ? (
        <InfoTask
        setShowInfoTaskModalFromParent={changeStateInfoModalFromChild}
        />
      ) : null}
    </>
  );
}

export default TaskItem;
