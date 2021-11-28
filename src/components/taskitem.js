import React from "react";
import { ReactComponent as ViewSvg } from "../assets/icons/view.svg";
import { ReactComponent as TrashSvg } from "../assets/icons/trash.svg";
import { ReactComponent as AddmemberSvg } from "../assets/icons/addmember.svg";
import { ReactComponent as PenSvg } from "../assets/icons/pen.svg";
import { ReactComponent as TodoSvg } from "../assets/icons/todo.svg";
import { ReactComponent as InProgressSvg } from "../assets/icons/inprogress.svg";
import { ReactComponent as DoneSvg } from "../assets/icons/done.svg";
import { ReactComponent as DateSvg } from "../assets/icons/date.svg";
import { ReactComponent as CompleteSvg } from "../assets/icons/complete.svg";
import EditTask from "../components/modal/edittask";
import DeleteTask from "../components/modal/deletetask";
import InfoTask from "../components/modal/infotask";
import AddAssignee from "../components/modal/addassignee";
import CompleteTask from "../components/modal/completetask";
import "./base.css";

function HeaderIcon({ status }) {
  if (status === "TODO") {
    return <TodoSvg />;
  } else if (status === "INPROGRESS") {
    return <InProgressSvg />;
  } else if (status === "DONE") {
    return <DoneSvg />;
  }
}

function StatusTag({ status }) {
  if (status === "TODO") {
    return (
      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
        To DO
      </span>
    );
  } else if (status === "INPROGRESS") {
    return (
      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
        IN PROGRESS
      </span>
    );
  } else if (status === "DONE") {
    return (
      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
        SUCCESS
      </span>
    );
  }
}


function dateTranform(date) {
  if (!date) {
    return '-'
  }
  const newDate = new Date(date).toString().split(" ");
  const completeDate = newDate[2] + " " + newDate[1] + " " + newDate[3];
  return completeDate;
}

function TaskItem({ taskData }) {
  console.log("this is data", taskData);
  function changeStateEditModalFromChild(state) {
    setShowEditTaskModal(state);
  }
  function changeStateDeleteModalFromChild(state) {
    setShowDeleteTaskModal(state);
  }
  function changeStateInfoModalFromChild(state) {
    setShowInfoTaskModal(state);
  }
  function changeStateAddAssigneeModalFromChild(state) {
    setShowAddAssigneeModal(state);
  }
  function changeStateCompleteModalTaskFromChild(state) {
    setShowCompleteTaskModal(state);
  }
  const [showEditTaskModal, setShowEditTaskModal] = React.useState(false);
  const [showDeleteTaskModal, setShowDeleteTaskModal] = React.useState(false);
  const [showInfoTaskModal, setShowInfoTaskModal] = React.useState(false);
  const [showAddAssigneeModal, setShowAddAssigneeModal] = React.useState(false);
  const [showCompleteTaskModal, setShowCompleteTaskModal] = React.useState(false);

  return (
    <>
      {taskData ? (
        <>
          <div className="Tasks relative bg-gray-800 py-6 px-6 rounded-3xl w-72 my-4 shadow mt-9 m-auto cursor-move text-white hover:bg-gray-700">
            <HeaderIcon status={taskData.status} />
            <div className="mt-8 ">
              <button
                className=""
                onClick={() => {
                  setShowInfoTaskModal(true);
                }}
              >
                <p className="text-xl font-semibold my-2 cursor-pointer  ">
                  {taskData.taskName}
                </p>
              </button>
              <div className="flex space-x-2 text-gray-400 text-sm my-3">
                <DateSvg />
                <p>Date : {dateTranform(taskData.startDate)}</p>
              </div>
              <div className="flex space-x-2 text-gray-400 text-sm my-3">
                <DateSvg />
                <p>Due Date : {dateTranform(taskData.dueDate)}</p>
              </div>
              <td className="px-0 py-0 whitespace-nowrap">
                <StatusTag status={taskData.status} />
              </td>
              <td class="px-4 py-0 whitespace-nowrap text-center align-center">
                <div class="flex item-left justify-center">
                  <div class="w-4 mr-4 transform hover:text-purple-500 hover:scale-110">
                    <ViewSvg
                      className="cursor-pointer"
                      onClick={() => {
                        setShowInfoTaskModal(true);
                      }}
                    />
                  </div>
                  <div class="w-4 mr-4 transform hover:text-yellow-500 hover:scale-110">
                    <PenSvg
                      className="cursor-pointer"
                      onClick={() => {
                        setShowEditTaskModal(true);
                      }}
                    />
                  </div>
                  <div class="w-4 mr-4 transform hover:text-blue-500 hover:scale-110">
                    <AddmemberSvg
                      className="cursor-pointer"
                      onClick={() => {
                        setShowAddAssigneeModal(true);
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
                  <div className="w-4 mr-4 transform hover:text-green-500 hover:scale-110">
                <CompleteSvg
                  className="cursor-pointer"
                  onClick={() => {
                    setShowCompleteTaskModal(true);
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
          {showAddAssigneeModal ? (
            <>
              <AddAssignee
                setShowAddAssigneeModalFromParent={
                  changeStateAddAssigneeModalFromChild
                }
              />
            </>
          ) : null}
          {showInfoTaskModal ? (
            <InfoTask
              setShowInfoTaskModalFromParent={changeStateInfoModalFromChild}
            />
          ) : null}
        </>
      ) : null}
      {showCompleteTaskModal ? (
        <CompleteTask
          setShowCompleteTaskModalFromParent={changeStateCompleteModalTaskFromChild}
        />
      ) : null}
    </>
  );
}

export default TaskItem;
