import { useState, useEffect } from "react";
import { ReactComponent as EditSvg } from "../../assets/icons/edit.svg";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import ApolloClient from "apollo-client";
import Select from "react-select";
import gql from "graphql-tag";

//! Set to query data
const currentUserId = 1; // currentUserId logged in

function EditTask({
  setShowEditTaskModalFromParent,
  taskData,
  editTask,
  members,
}) {
  console.log("ddd", taskData.taskId);
  const httpLink = createHttpLink({
    uri: "http://localhost:5000/graphql",
  });
  // set up apollo client
  const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });

  const [values, setValues] = useState(taskData);

  useEffect(() => {
    getUsers();
  }, []);

  const [selectedOption, setSelectedOption] = useState(
    members
      .map((item) => item.prop)
      .filter((item) => item.value !== currentUserId)
  );

  const [users, setUsers] = useState([]);

  const [errors, setErrors] = useState({});

  function handleMultiChange(option) {
    setSelectedOption(option);
  }
  // query all user in DB
  async function getUsers() {
    const userResponse = await client.query({
      query: gql`
        query users {
          users {
            userId
            email
          }
        }
      `,
    });
    const userOptions = userResponse.data.users.map((user) => {
      return {
        value: user.userId,
        label: user.email,
      };
    });

    const filteredOptions = userOptions.filter(
      (option) => option.value !== currentUserId
    );

    setUsers([...filteredOptions]);
  }
  // validation input data
  function ValidateCreateTaskInfo() {
    let errors = {};

    if (!values.taskName) {
      errors.taskName = "Please input Task name";
    } else if (/[^a-zA-Z0-9\s]/.test(values.taskName)) {
      errors.taskName = "Plese input only characters or number";
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

  async function onSubmit(event) {
    event.preventDefault();

    const members = [
      currentUserId.toString(),
      ...selectedOption.map((item) => {
        return item.value.toString();
      }),
    ];

    const errors = ValidateCreateTaskInfo();
    console.log("error",errors)
    if (Object.keys(errors).length === 0) {
      const editedTask = {
        id: taskData.taskId,
        taskName: values.taskName,
        startDate: values.startDate,
        dueDate: values.dueDate,
        description: values.description,
        // members: members,
      };
      editTask(editedTask);
      console.log("111", editedTask);
    }
  }

  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none">
      <div className="CreateProject font-mono">
        <div className="absolute bg-black opacity-80 inset-0 z-0 "></div>
        <div className="w-screen  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white mt-0 ">
          <div className="">
            <div className="text-center p-5 flex-auto justify-center ">
              <EditSvg />
              <h2 className="text-xl font-bold py-4  ">Edit Task</h2>
              <div className="space-y-4">
                <form>
                  <label className="block text-gray-700 text-sm font-normal mb-2 text-left ">
                    Name Tasak
                  </label>
                  <input
                    style={errors.taskName ? { borderColor: "red" } : null}
                    type="text"
                    name="taskName"
                    placeholder="Name Task"
                    className="block text-sm py-3 px-4 rounded-lg w-full border outline-none border-gray-300"
                    value={values.taskName}
                    onChange={handleChange}
                  />
                  <small>
                    {errors.taskName && (
                      <div className="block text-red-400 text-sm font-normal mt-2 mb-2 text-left ">
                        {errors.taskName}
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
                  {/* <Select
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
                  /> */}
                  <div className="p-3  mt-2 text-center space-x-4 md:block">
                    <button
                      className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100 "
                      onClick={() => setShowEditTaskModalFromParent(false)}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="mb-2 md:mb-0 bg-yellow-400  border  px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-yellow-500"
                      onClick={onSubmit}
                      
                    >
                      Edit
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

export default EditTask;
