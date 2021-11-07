import "./myprojects.css";
import { Link } from "react-router";
import React from "react";
import { ReactComponent as TrashSvg } from "../assets/icons/trash.svg";
import { ReactComponent as PenSvg } from "../assets/icons/pen.svg";
import CreateProject from "../components/modal/createproject";
import EditProject from "../components/modal/editproject";
import DeleteProject from "../components/modal/deleteproject";

<link
  href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
  rel="stylesheet"
></link>;

function MyProjects() {
  function changeStateCreateModalFromChild(state) {
    setShowCreateProjectModal(state);
  }
  function changeStateEditModalFromChild(state) {
    setShowEditProjectModal(state);
  }
  function changeStateDeleteModalFromChild(state) {
    setShowDeleteProjectModal(state);
  }
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
                          <PenSvg
                            class="cursor-pointer"
                            onClick={() => {
                              setShowEditProjectModal(true);
                            }}
                          />
                        </td>
                        <td class="px-2 py-4 whitespace-nowrap "></td>
                        <td class="w-5 mr-2 transform hover:text-red-500 hover:scale-110">
                          <TrashSvg
                            class="cursor-pointer"
                            onClick={() => {
                              setShowDeleteProjectModal(true);
                            }}
                          />
                        </td>
                      </td>
                    </tr>
                  </tbody>
                  {/* ///// row 2 */}
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
                          <PenSvg />
                        </td>
                        <td class="px-2 py-4 whitespace-nowrap "></td>
                        <td class="w-5 mr-2 transform hover:text-red-500 hover:scale-110">
                          <TrashSvg />
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
        <CreateProject
          setShowCreateProjectModalFromParent={changeStateCreateModalFromChild}
        />
      ) : null}

      {showEditProjectModal ? (
        <EditProject
          setShowEditProjectModalFromParent={changeStateEditModalFromChild}
        />
      ) : null}

      {showDeleteProjectModal ? (
        <DeleteProject
          setShowDeleteProjectModalFromParent={changeStateDeleteModalFromChild}
        />
      ) : null}
    </>
  );
}

export default MyProjects;
