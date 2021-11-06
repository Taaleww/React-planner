import "./myprojects.css";
import { Link } from "react-router";
import React from "react";

<link
  href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
  rel="stylesheet"
></link>;

function MyProjects() {
  const [showCreateProjectModal, setShowCreateProjectModal] =
    React.useState(false);
  const [showEditProjectModal, setShowEditProjectModal] = React.useState(false);
  const [showDeleteProjectModal, setShowDeleteProjectModal] =
    React.useState(false);

  return (
    <>
      <div className="MyProjects font-bold md:container md:mx-auto bg-white font-mono ">
        <div class="flex flex-wrap items-center">
          <div class="relative w-full px-4 max-w-full flex-grow flex-1">
            <h3 class="font-semibold text-base text-blueGray-700">
              My Projects
            </h3>
          </div>

          <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
            <button
              class="bg-gradient-to-r from-green-300 to-blue-400 text-white hover:text-indigo-900 rounded-full  text-xs font-bold uppercase px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear"
              type="button"
              onClick={() => setShowCreateProjectModal(true)}
            >
              CREATE PROJECTS +
            </button>
          </div>
        </div>

        <div class="flex flex-col mb-6">
          <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8 mt-6">
              <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table class="min-w-full divide-y divide-gray-200 ">
                  <thead class="bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-white font-bold uppercase tracking-wider"
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-white font-bold uppercase tracking-wider"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-white font-bold uppercase tracking-wider"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-white font-bold uppercase tracking-wider"
                      >
                        Due date
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-white font-bold uppercase tracking-wider"
                      >
                        Members
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-white font-bold uppercase tracking-wider"
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200">
                    <tr>
                      <td class="px-6 py-4 whitespace-nowrap  ">
                        <div class="text-sm text-gray-900 ">13 oct 2021</div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-sm text-gray-900">
                          <Link to="/tasks">Regional Paradigm Technician</Link>
                        </div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          SUCESS
                        </span>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap ">
                        <div class="text-sm text-gray-900">13 oct 2021</div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap ">
                        <td class="py-3 px-6 text-center">
                          <div class="flex items-center justify-center">
                            <img
                              class="w-6 h-6 rounded-full border-gray-200 border transform hover:scale-125"
                              src="https://randomuser.me/api/portraits/men/1.jpg"
                            />
                            <img
                              class="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125"
                              src="https://randomuser.me/api/portraits/women/2.jpg"
                            />
                            <img
                              class="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125"
                              src="https://randomuser.me/api/portraits/men/3.jpg"
                            />
                          </div>
                        </td>
                      </td>
                      <td class="px-10 py-4 whitespace-nowrap text-sm text-gray-500">
                        <td class="w-5 mr-2 transform hover:text-red-500 hover:scale-110 ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            style={{ cursor: "pointer" }}
                            onClick={() => setShowEditProjectModal(true)}
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                            />
                          </svg>
                        </td>
                        <td class="px-2 py-4 whitespace-nowrap "></td>
                        <td class="w-5 mr-2 transform hover:text-red-500 hover:scale-110">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            style={{ cursor: "pointer" }}
                            onClick={() => setShowDeleteProjectModal(true)}
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
                    </tr>
                  </tbody>
                  <tbody class="bg-white divide-y divide-gray-200">
                    <tr>
                      <td class="px-6 py-4 whitespace-nowrap ">
                        <div class="text-sm text-gray-900">13 oct 2021</div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-sm text-gray-900">
                          <Link to="/tasks">Regional Paradigm Technician</Link>
                        </div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                          IN PROCESS
                        </span>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap ">
                        <div class="text-sm text-gray-900">13 oct 2021</div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap ">
                        <td class="py-3 px-6 text-center">
                          <div class="flex items-center justify-center">
                            <img
                              class="w-6 h-6 rounded-full border-gray-200 border transform hover:scale-125"
                              src="https://randomuser.me/api/portraits/men/1.jpg"
                              alt=""
                            />
                            <img
                              class="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125"
                              src="https://randomuser.me/api/portraits/women/2.jpg"
                              alt=""
                            />
                            <img
                              class="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125"
                              src="https://randomuser.me/api/portraits/men/3.jpg"
                              alt=""
                            />
                          </div>
                        </td>
                      </td>
                      <td class="px-10 py-4 whitespace-nowrap text-sm text-gray-500">
                        <td class="w-5 mr-2 transform hover:text-purple-500 hover:scale-110 ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            style={{ cursor: "pointer" }}
                            onClick={() => setShowEditProjectModal(true)}
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                            />
                          </svg>
                        </td>
                        <td class="px-2 py-4 whitespace-nowrap "></td>
                        <td class="w-5 mr-2 transform hover:text-red-500 hover:scale-110">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            style={{ cursor: "pointer" }}
                            onClick={() => setShowDeleteProjectModal(true)}
                            
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
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* modal */}
      {showCreateProjectModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none">
            <div className="CreateProject font-mono">
              <div class="absolute bg-black opacity-80 inset-0 z-0 "></div>
              <div class="w-screen  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white mt-0 ">
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

                    <h2 class="text-xl font-bold py-4 ">Create Project?</h2>
                    <div class="space-y-4">
                      <input
                        type="text"
                        placeholder="Name Project"
                        class="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                      />
                      <input
                        type="text"
                        placeholder="Description"
                        class="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                      />
                    </div>
                  </div>

                  <div class="p-3  mt-2 text-center space-x-4 md:block">
                    <button
                      class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100 "
                      onClick={() => setShowCreateProjectModal(false)}
                    >
                      Cancel
                    </button>
                    <button class="mb-2 md:mb-0 bg-gradient-to-r from-green-300 to-blue-400 border  px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-600">
                      Create
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}

      {showEditProjectModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none">
            <div className="EditProject font-mono">
              <div class="absolute bg-black opacity-80 inset-0 z-0 "></div>
              <div class="w-screen  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white mt-0">
                <div class="">
                  <div class="text-center p-5 flex-auto justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-16 w-16 flex items-center text-yellow-500   mx-auto"
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

                    <h2 class="text-xl font-bold py-4 ">Edit Project?</h2>
                    <div class="space-y-4">
                      <input
                        type="text"
                        placeholder="Name Project"
                        class="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                      />
                      <input
                        type="text"
                        placeholder="Description"
                        class="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                      />
                    </div>
                  </div>

                  <div class="p-3  mt-2 text-center space-x-4 md:block">
                    <button
                      class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
                      onClick={() => setShowEditProjectModal(false)}
                    >
                      Cancel
                    </button>
                    <button class="mb-2 md:mb-0 bg-yellow-500  px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-600">
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    
    {showDeleteProjectModal ? (
      <>
       <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none">
       <div className="DeleteProject font-mono">
      <div class="absolute bg-black opacity-80 inset-0 z-0 "></div>
      <div class="w-screen  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white mt-0">
        <div class="">
          <div class="text-center p-5 flex-auto justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-16 h-16 flex items-center text-red-500 mx-auto"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clip-rule="evenodd"
              />
            </svg>
            <h2 class="text-xl font-bold py-4 ">Are you sure?</h2>
            <p class="text-sm text-gray-500 px-8">
              Do you really want to delete your project? This process cannot be
              undone
            </p>
          </div>
          <div class="p-3  mt-2 text-center space-x-4 md:block">
            <button class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
            onClick={() => setShowDeleteProjectModal(false)}>
              Cancel
            </button>
            <button class="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600">
              Delete
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

export default MyProjects;
