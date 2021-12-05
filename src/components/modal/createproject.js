import Proptypes from "prop-types";
import React, { useEffect, useState } from "react";
import { InMemoryCache } from "apollo-cache-inmemory";

import { createHttpLink } from "apollo-link-http";
import ApolloClient from "apollo-client";
import Select from "react-select";
import { ReactComponent as CreateSvg } from "../../assets/icons/create.svg";

import gql from "graphql-tag";

//! Set to query data
const currentUserId = 1;

function CreateProject({ setShowCreateProjectModalFromParent, addProject }) {
  useEffect(() => {
    getUsers();
  }, []);

  const httpLink = createHttpLink({
    uri: "http://localhost:5000/graphql",
  });
  //apollo client setup
  const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });
  // set value project data
  const [values, setValues] = useState({
    projectName: "",
    startDate: "",
    dueDate: "",
    description: "",
  });

  const [selectedOption, setSelectedOption] = useState([]);

  function handleMultiChange(option) {
    setSelectedOption(option);
  }

  const [users, setUsers] = useState([]);

  const [errors, setErrors] = useState({});
  // query All user in DB
  async function getUsers() {
    const { data } = await client.query({
      query: gql`
        query users {
          users {
            userId
            email
          }
        }
      `,
    });
    // select option user 
    const userOptions = data.users.map((user) => {
      return {
        value: user.userId,
        label: user.email,
      };
    });
    const filteredOptions = userOptions.filter(
      (option) => option.value !== currentUserId
    );

    setUsers(filteredOptions);
  }
  // validate form create projct info
  function ValidateCreateProjectInfo() {
    let errors = {};

    if (!values.projectName) {
      errors.projectName = "Please input project name";
    } else if (/[^a-zA-Z0-9\s]/.test(values.projectName)) {
      errors.projectName = "Plese input only characters or number";
    }

    if (!values.startDate) {
      errors.startDate = "Please input start date";
    } else if (/^\d{2}([./-])\d{2}\1\d{4}$/.test(values.startDate)) {
      errors.startDate = "Plese input only date format";
    }

    if (!values.dueDate) {
      errors.dueDate = "Please input due date";
    } else if (/^\d{2}([./-])\d{2}\1\d{4}$/.test(values.dueDate)) {
      errors.dueDate = "Plese input only date format";
    }

    if (!values.description) {
      errors.description = "Please input description";
    }
    setErrors(errors);
    return errors;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  // sent data to addProject function
  async function onSubmit(event) {
    event.preventDefault();

    const members = [
      currentUserId.toString(),
      ...selectedOption.map((item) => {
        return item.value.toString();
      }),
    ];

    const errors = ValidateCreateProjectInfo();
    if (Object.keys(errors).length === 0) {
      addProject(
        values.projectName,
        values.startDate,
        values.dueDate,
        values.description,
        members
      );
    }
  }

  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none">
      <div className="CreateProject font-mono">
        <div className="absolute bg-black opacity-80 inset-0 z-0 "></div>
        <div className="w-screen  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white mt-0 ">
          <div className="">
            <div className="text-center p-5 flex-auto justify-center ">
              <CreateSvg />
              <h2 className="text-xl font-bold py-4  ">Create Project</h2>
              <div className="space-y-4">
                <form>
                  <label className="block text-gray-700 text-sm font-normal mb-2 text-left ">
                    Name Project
                  </label>
                  <input
                    style={errors.projectName ? { borderColor: "red" } : null}
                    type="text"
                    name="projectName"
                    placeholder="Name Project"
                    className="block text-sm py-3 px-4 rounded-lg w-full border outline-none border-gray-300"
                    value={values.projectName}
                    onChange={handleChange}
                  />
                  <small>
                    {errors.projectName && (
                      <div className="block text-red-400 text-sm font-normal mt-2 mb-2 text-left ">
                        {errors.projectName}
                      </div>
                    )}
                  </small>
                  <label className="block text-gray-700 text-sm font-normal mb-2 mt-2 text-left ">
                    Start Date
                  </label>
                  <input
                    style={errors.startDate ? { borderColor: "red" } : null}
                    type="date"
                    name="startDate"
                    placeholder="Start Date"
                    className="block text-sm py-3 px-4 rounded-lg w-full border outline-none border-gray-300 "
                    value={values.startDate}
                    onChange={handleChange}
                  />
                  <small>
                    {errors.startDate && (
                      <div className="block text-red-400 text-sm font-normal mt-2 mb-2 text-left ">
                        {errors.startDate}
                      </div>
                    )}
                  </small>
                  <label className="block text-gray-700 text-sm font-normal mb-2 mt-2 text-left ">
                    Due Date
                  </label>
                  <input
                    style={errors.dueDate ? { borderColor: "red" } : null}
                    type="date"
                    name="dueDate"
                    placeholder="Due Date"
                    className="block text-sm py-3 px-4 rounded-lg w-full border outline-none border-gray-300 "
                    value={values.dueDate}
                    onChange={handleChange}
                  />
                  <small>
                    {errors.dueDate && (
                      <div className="block text-red-400 text-sm font-normal mt-2 mb-2 text-left ">
                        {errors.dueDate}
                      </div>
                    )}
                  </small>
                  <label className="block text-gray-700 text-sm font-normal mb-2 mt-2 text-left ">
                    Description
                  </label>
                  <input
                    style={errors.description ? { borderColor: "red" } : null}
                    type="text"
                    name="description"
                    placeholder="Description"
                    className="block text-sm py-3 px-4 rounded-lg w-full border outline-none border-gray-300 "
                    value={values.description}
                    onChange={handleChange}
                  />
                  <small>
                    {errors.description && (
                      <div className="block text-red-400 text-sm font-normal mt-2 mb-2 text-left ">
                        {errors.description}
                      </div>
                    )}
                  </small>
                  <label className="block text-gray-700 text-sm font-normal mb-2 mt-2 text-left ">
                    Members
                  </label>
                  <Select
                    placeholder="Members"
                    style={
                      errors.members
                        ? { borderColor: "red" }
                        : { borderColor: "red" }
                    }
                    defaultValue={selectedOption}
                    onChange={handleMultiChange}
                    options={users}
                    isMulti={true}
                  />
                  <div className="p-3  mt-2 text-center space-x-4 md:block">
                     {/* Cancle Button */}
                    <button
                      className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100 "
                      onClick={() => setShowCreateProjectModalFromParent(false)}
                    >
                      Cancel
                    </button>
                     {/* Submit Button */}
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
