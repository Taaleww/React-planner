import React from "react";
import { ReactComponent as ViewSvg } from "../assets/icons/view.svg";
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
      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
        {status}
      </span>
    );
  } else if (status === "In Progress") {
    return (
      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
        {status}
      </span>
    );
  } else if (status === "Success") {
    return (
      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
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
      <div className="Tasks relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow mt-9 m-auto cursor-move">
        <HeaderIcon status={taskData.status} />
        <div className="mt-8 ">
          <button className="" onClick={() => {
                  setShowInfoTaskModal(true);
                }}>
            <p className="text-xl font-semibold my-2 cursor-pointer ">
              {taskData.title}
            </p>
          </button>
          <div className="flex space-x-2 text-gray-400 text-sm my-3">
            <DateSvg />
            <p>Date : 5 oct 2021</p>
          </div>
          <div className="flex space-x-2 text-gray-400 text-sm my-3">
            <DateSvg />
            <p>Due Date : 5 oct 2021</p>
          </div>
          <td className="px-0 py-0 whitespace-nowrap">
            <StatusTag status={taskData.status} />
          </td>
          <td class="px-8 py-0 whitespace-nowrap text-center align-center">
            <div class="flex item-left justify-center">
              <div class="w-4 mr-4 transform hover:text-purple-500 hover:scale-110">
                <ViewSvg className="cursor-pointer" 
                 onClick={() => {
                  setShowInfoTaskModal(true);
                }}/>
              </div>
              <div class="w-4 mr-4 transform hover:text-yellow-500 hover:scale-110">
                <PenSvg
                  className="cursor-pointer"
                  onClick={() => {
                    setShowEditTaskModal(true);
                  }}
                />
              </div>
              <div class="w-4 mr-4 transform hover:text-red-500 hover:scale-110">
                <TrashSvg
                  className="cursor-pointer"
                  onClick={() => {
                    setShowDeleteTaskModal(true);
                  }}
                />
              </div>
            </div>
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
