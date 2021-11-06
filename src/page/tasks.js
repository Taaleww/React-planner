import "./tasks.css";
import React from "react";

function Tasks() {
  const [showCreateTaskModal, setShowCreateTaskModal] = React.useState(false);
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
            CREATE PROJECTS +
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
                        class="px-32 py-3 text-left text-xs font-medium text-white font-bold uppercase tracking-wider"
                      >
                        To Do
                      </th>
                      <th
                        scope="col"
                        class="px-32 py-3 text-left text-xs font-medium text-white font-bold uppercase tracking-wider"
                      >
                        In Process
                      </th>
                      <th
                        scope="col"
                        class="px-32 py-3  text-left text-xs font-medium text-white font-bold uppercase tracking-wider"
                      >
                        Success
                      </th>
                    </tr>
                  </thead>
                  <td>
                    <div class="Tasks relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow mt-9  ">
                      <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow bg-blue-500 left-4 -top-6">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-8 w-8"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                          />
                        </svg>
                      </div>
                      <div class="mt-8 ">
                        <p class="text-xl font-semibold my-2">Web Design</p>
                        <div class="flex space-x-2 text-gray-400 text-sm my-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          <p>3 Weeks Left</p>
                        </div>
                        <div class="flex space-x-2 text-gray-400 text-sm my-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          <p>3 Weeks Left</p>
                        </div>
                        <div class="flex space-x-2 text-gray-400 text-sm my-3">
                          <p> Description : hello every one</p>
                        </div>
                        <td class="px-0 py-0 whitespace-nowrap">
                          <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                            To Do
                          </span>
                        </td>
                        <br></br>
                        <div class="border-t-2 "></div>

                        <div class="flex justify-between">
                          <div class="my-2">
                            <p class="font-semibold text-base mb-2">
                              Team Member
                            </p>
                            <div class="flex space-x-2">
                              <img
                                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                class="w-6 h-6 rounded-full"
                              />
                            </div>
                          </div>
                        </div>
                        <td class="px-16 py-0 whitespace-nowrap text-sm text-gray-500 align-center">
                          <td class="w-5 mr-2 transform hover:text-purple-500 hover:scale-110 ">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                              />
                            </svg>
                          </td>
                          <td class="px-2 py-0 whitespace-nowrap "></td>
                          <td class="w-5 mr-2 transform hover:text-red-500 hover:scale-110">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </td>
                        </td>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div class="Tasks relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow mt-9">
                      <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow bg-yellow-500 left-4 -top-6">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-8 w-8"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                          />
                        </svg>
                      </div>
                      <div class="mt-8">
                        <p class="text-xl font-semibold my-2">Web Design</p>
                        <div class="flex space-x-2 text-gray-400 text-sm my-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          <p>3 Weeks Left</p>
                        </div>
                        <div class="flex space-x-2 text-gray-400 text-sm my-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          <p>3 Weeks Left</p>
                        </div>
                        <div class="flex space-x-2 text-gray-400 text-sm my-3">
                          <p> Description : hello every one</p>
                        </div>
                        <td class="px-0 py-0 whitespace-nowrap">
                          <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                            IN PROCESS
                          </span>
                        </td>
                        <br></br>
                        <div class="border-t-2 "></div>

                        <div class="flex justify-between">
                          <div class="my-2">
                            <p class="font-semibold text-base mb-2">
                              Team Member
                            </p>
                            <div class="flex space-x-2">
                              <img
                                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                class="w-6 h-6 rounded-full"
                              />
                            </div>
                          </div>
                        </div>
                        <td class="px-16 py-0 whitespace-nowrap text-sm text-gray-500 align-center">
                          <td class="w-5 mr-2 transform hover:text-purple-500 hover:scale-110 ">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                              />
                            </svg>
                          </td>
                          <td class="px-2 py-0 whitespace-nowrap "></td>
                          <td class="w-5 mr-2 transform hover:text-red-500 hover:scale-110">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </td>
                        </td>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div class="Tasks relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow  mt-9">
                      <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow  bg-green-500 left-4 -top-6">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-8 w-8"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div class="mt-8">
                        <p class="text-xl font-semibold my-2">Web Design</p>
                        <div class="flex space-x-2 text-gray-400 text-sm my-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          <p>3 Weeks Left</p>
                        </div>
                        <div class="flex space-x-2 text-gray-400 text-sm my-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          <p>3 Weeks Left</p>
                        </div>
                        <div class="flex space-x-2 text-gray-400 text-sm my-3">
                          <p> Description : hello every one</p>
                        </div>
                        <td class="px-0 py-0 whitespace-nowrap">
                          <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            SUCESS
                          </span>
                        </td>
                        <br></br>
                        <div class="border-t-2 "></div>

                        <div class="flex justify-between">
                          <div class="my-2">
                            <p class="font-semibold text-base mb-2">
                              Team Member
                            </p>
                            <div class="flex space-x-2">
                              <img
                                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                class="w-6 h-6 rounded-full"
                              />
                            </div>
                          </div>
                        </div>
                        <td class="px-16 py-0 whitespace-nowrap text-sm text-gray-500 align-center">
                          <td class="w-5 mr-2 transform hover:text-purple-500 hover:scale-110 ">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                              />
                            </svg>
                          </td>
                          <td class="px-2 py-0 whitespace-nowrap "></td>
                          <td class="w-5 mr-2 transform hover:text-red-500 hover:scale-110">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </td>
                        </td>
                      </div>
                    </div>
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
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none">
      <div className="CreateTask font-mono">
      <div class="absolute bg-black opacity-80 inset-0 z-0 "></div>
      <div class="w-screen  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white mt-0">
        <div class="">
          <div class="text-center p-5 flex-auto justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-16 w-16 flex items-center text-green-500   mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>

            <h2 class="text-xl font-bold py-4 ">Create Task?</h2>
          </div>
          <div class="space-y-4">
            <label
              class="block text-gray-700 text-sm font-normal mb-2 "
              for="username"
            >
              {" "}
              Task Name{" "}
            </label>
            <input
              type="text"
              placeholder="Task Name"
              class="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
            />
            <label
              class="block text-gray-700 text-sm font-normal mb-2 "
              for="username"
            >
              {" "}
              Start Date{" "}
            </label>
            <input
              type="date"
              placeholder="Start Date"
              class="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
            />
            <label
              class="block text-gray-700 text-sm font-normal mb-2 "
              for="username"
            >
              {" "}
              Due Date{" "}
            </label>
            <input
              type="date"
              placeholder="Due Date"
              class="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
            />
            <label
              class="block text-gray-700 text-sm font-normal mb-2 "
              for="username"
            >
              {" "}
              Descriptions{" "}
            </label>
            <input
              type="text"
              placeholder="Description"
              class="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
            />
          </div>

          <div class="p-3  mt-2 text-center space-x-4 md:block">
            <button class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
            onClick={() => setShowCreateTaskModal(false)}>
              Cancel
            </button>
            <button class="mb-2 md:mb-0 bg-green-500  px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-600">
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
      </div>
      
       
            
      </>
    ) : null}

</>
  );
}

export default Tasks ;
