function StatusTag({ status }) {
  if (status === "In Progress") {
    return (
      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
        In Progress
      </span>
    );
  } else if (status === "Success") {
    return (
      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
        Success
      </span>
    );
  } else {
    return (
      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
        Error
      </span>
    );
  }
}
function InfoProject({setShowInfoProjectModalFromParent,projectData}) {
  function dateTranform(date) {
    const newDate = new Date(date).toString().split(" ");
    const completeDate = newDate[2] + " " + newDate[1] + " " + newDate[3];
    return completeDate;
  }
    return (
      <>
        <div className="opacity-80 fixed inset-0 z-40 bg-black "></div>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div className="min-h-screen flex items-center justify-center px-0 ">
              <div className="max-w-4xl  bg-white w-full rounded-lg shadow-xl ">
                <div className="p-4 border-b">
                  <h2 className="text-2xl ">Information project</h2>
                </div>
                <div>
                  <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                    <p className="text-gray-600 mr-48">Project Name</p>
                    <p>{projectData.title}</p>
                  </div>
                  <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                    <p className="text-gray-600  mr-48">Date</p>
                    <p> {dateTranform(projectData.createDate)}</p>
                  </div>
                  <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                    <p className="text-gray-600  mr-48">Due Date</p>
                    <p>{dateTranform(projectData.dueDate)}</p>
                  </div>
                  <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                    <p className="text-gray-600  mr-48">Status</p>
                    <p> <StatusTag status={projectData.status} /></p>
                  </div>
                  <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                    <p className="text-gray-600  mr-48">Descriptions</p>
                    {/* <p>
                      Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
                      incididunt cillum culpa consequat. Excepteur qui ipsum
                      aliquip consequat sint. Sit id mollit nulla mollit nostrud
                      in ea officia proident. Irure nostrud pariatur mollit ad
                      adipisicing reprehenderit deserunt qui eu.
                   

                    </p> */}
                     <p>{projectData.description}</p>
                  </div>
                  <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4">
                    <p className="text-gray-600">Members</p>
                   
                    {/* <p> {(projectData ? " " : ", ") + projectData.members}</p> */}
                    
                    <p> {projectData.members.join(' , ')} </p>
                    {/* <div className="space-y-2">
                <div className="border-2 flex items-center p-2 rounded justify-between space-x-2">
                  <div className="space-x-2 truncate">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-current inline text-gray-500"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17 5v12c0 2.757-2.243 5-5 5s-5-2.243-5-5v-12c0-1.654 1.346-3 3-3s3 1.346 3 3v9c0 .551-.449 1-1 1s-1-.449-1-1v-8h-2v8c0 1.657 1.343 3 3 3s3-1.343 3-3v-9c0-2.761-2.239-5-5-5s-5 2.239-5 5v12c0 3.866 3.134 7 7 7s7-3.134 7-7v-12h-2z" />
                    </svg>
                    <span>resume_for_manager.pdf</span>
                  </div>
                  <a href="#" className="text-purple-700 hover:underline">
                    Download
                  </a>
                </div>
  
                <div className="border-2 flex items-center p-2 rounded justify-between space-x-2">
                  <div className="space-x-2 truncate">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-current inline text-gray-500"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17 5v12c0 2.757-2.243 5-5 5s-5-2.243-5-5v-12c0-1.654 1.346-3 3-3s3 1.346 3 3v9c0 .551-.449 1-1 1s-1-.449-1-1v-8h-2v8c0 1.657 1.343 3 3 3s3-1.343 3-3v-9c0-2.761-2.239-5-5-5s-5 2.239-5 5v12c0 3.866 3.134 7 7 7s7-3.134 7-7v-12h-2z" />
                    </svg>
                    <span>resume_for_manager.pdf</span>
                  </div>
                  <a href="#" className="text-purple-700 hover:underline">
                    Download
                  </a>
                </div>
              </div> */}
                  </div>
                  <div className="p-3  mt-2 text-center space-x-4 md:block">
                    <button className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100 "
                    onClick={() => setShowInfoProjectModalFromParent(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default InfoProject;
  