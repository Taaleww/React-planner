import Proptypes from "prop-types";
import React, { useState } from "react";
import { ReactComponent as CreateSvg } from "../../assets/icons/create.svg";

function CreateProject({ setShowCreateProjectModalFromParent, addProject }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [description, setDescription] = useState("");
  const [rawMembers, setRawMembers] = useState("");

  function onChangeMembers(event) {
    setRawMembers(event.target.value);
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
  }
  function onChangeDate(event) {
    setDate(event.target.value);
  }
  function onChangeDueDate(event) {
    setDueDate(event.target.value);
  }
  function onChangeDescription(event) {
    setDescription(event.target.value);
  }

  function onSubmit(event) {
    event.preventDefault();
    const members = rawMembers.split(",");

    if (title && date && dueDate && description) {
      addProject(title, date, dueDate, description, members);
    }
  }

  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none">
      <div className="CreateProject font-mono">
        <div className="absolute bg-black opacity-80 inset-0 z-0 "></div>
        <div className="w-screen  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white mt-0 ">
          <div className="">
            <div className="text-center p-5 flex-auto justify-center">
              <CreateSvg />
              <h2 className="text-xl font-bold py-4 ">Create Project?</h2>
              <div className="space-y-4">
                <form>
                  <label className="block text-gray-700 text-sm font-normal mb-2 text-left ">
                    Name Project
                  </label>
                  <input
                    type="text"
                    placeholder="Name Project"
                    className="block text-sm py-3 px-4 rounded-lg w-full border outline-none border-gray-300"
                    value={title}
                    onChange={onChangeTitle}
                  />
                  <label className="block text-gray-700 text-sm font-normal mb-2 mt-2 text-left ">
                    Start Date
                  </label>
                  <input
                    type="date"
                    placeholder="Start Date"
                    className="block text-sm py-3 px-4 rounded-lg w-full border outline-none border-gray-300 "
                    value={date}
                    onChange={onChangeDate}
                  />
                  <label className="block text-gray-700 text-sm font-normal mb-2 mt-2 text-left ">
                    Due Date
                  </label>
                  <input
                    type="date"
                    placeholder="Due Date"
                    className="block text-sm py-3 px-4 rounded-lg w-full border outline-none border-gray-300 "
                    value={dueDate}
                    onChange={onChangeDueDate}
                  />
                  <label className="block text-gray-700 text-sm font-normal mb-2 mt-2 text-left ">
                    Description
                  </label>
                  <input
                    type="text"
                    placeholder="Description"
                    className="block text-sm py-3 px-4 rounded-lg w-full border outline-none border-gray-300 "
                    value={description}
                    onChange={onChangeDescription}
                  />
                  <label className="block text-gray-700 text-sm font-normal mb-2 mt-2 text-left ">
                    Members
                  </label>
                  <input
                    type="text"
                    placeholder="Members"
                    className="block text-sm py-3 px-4 rounded-lg w-full border outline-none border-gray-300 "
                    value={rawMembers}
                    onChange={onChangeMembers}
                  />
                  <small style={{ color: "grey" }}>
                    Use ',' to seperate the member email.
                  </small>
                  <div className="p-3  mt-2 text-center space-x-4 md:block">
                    <button
                      className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100 "
                      onClick={() => setShowCreateProjectModalFromParent(false)}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="mb-2 md:mb-0 bg-green-400  border  px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500"
                      onClick={onSubmit}
                    >
                      Create
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

CreateProject.propTypes = {
  addProject: Proptypes.func.isRequired,
};

export default CreateProject;
