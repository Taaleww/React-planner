import "./myprojects.css";
import React from "react";
import CreateProject from "../components/modal/createproject";
import ProjectItem from "../components/projectitem";

//  <link
//   href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
//   rel="stylesheet"
//  ></link>; 



function MyProjects() {
  function changeStateCreateModalFromChild(state) {
    setShowCreateProjectModal(state);
  }
  const [myProjects, setData] = React.useState([
    {
      title: "Backend",
      createDate: new Date(),
      dueDate: new Date(),
      description: "hello everyone.",
      status: "Success",
      members: [1, 2, 3],
    },
    {
      title: "Web design",
      createDate: new Date(),
      dueDate: new Date(),
      description: "hello everyone2.",
      status: "Success",
      members: [1, 2, 3],
    },
    {
      title: "Frontend",
      createDate: new Date(),
      dueDate: new Date(),
      description: "hello everyone3.",
      status: "In Progress",
      members: [1, 2, 3],
    },
    {
      title: "Web design",
      createDate: new Date(),
      dueDate: new Date(),
      description: "hello everyone2.",
      status: "Success",
      members: [1, 2, 3],
    },
    {
      title: "Frontend",
      createDate: new Date(),
      dueDate: new Date(),
      description: "hello everyone3.",
      status: "In Progress",
      members: [1, 2, 3],
    },
  ]);

  const [showCreateProjectModal, setShowCreateProjectModal] =
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
                  {myProjects.map((data) => {
                        return <ProjectItem projectData={data} />;
                      })}
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
    </>
  );
}

export default MyProjects;
