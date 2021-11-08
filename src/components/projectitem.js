import { Link } from "react-router";
import React from "react";
import { ReactComponent as TrashSvg } from "../assets/icons/trash.svg";
import { ReactComponent as PenSvg } from "../assets/icons/pen.svg";
import EditProject from "../components/modal/editproject";
import DeleteProject from "../components/modal/deleteproject";



function StatusTag({ status }) {
     if (status === "In Progress") {
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

function ProjectItem({projectData}) {
  function changeStateEditModalFromChild(state) {
    setShowEditProjectModal(state);
  }
  function changeStateDeleteModalFromChild(state) {
    setShowDeleteProjectModal(state);
  }
  const [showEditProjectModal, setShowEditProjectModal] = React.useState(false);
  const [showDeleteProjectModal, setShowDeleteProjectModal] =
    React.useState(false);

  return (
    <>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr>
          <td class="px-6 py-4 whitespace-nowrap  ">
            <div class="text-sm text-gray-900 ">13 oct 2021</div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-900">
              <Link to="/tasks">{projectData.title}</Link>
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <StatusTag status={projectData.status} />
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

export default ProjectItem;
