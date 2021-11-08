function EditProject({setShowEditProjectModalFromParent}){
    return(
      <>
      <div className="opacity-80 fixed inset-0 z-40 bg-black"></div>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
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
                  class="block text-sm py-3 px-4 rounded-lg w-full border outline-none border-gray-300 "
                />
                <label
                  class="block text-gray-700 text-sm font-normal mb-2 "
                  for="username"
                >
                  {" "}
                  Description{" "}
                </label>
                <input
                  type="text"
                  placeholder="Description"
                  class="block text-sm py-3 px-4 rounded-lg w-full border outline-none border-gray-300 "
                />
              </div>

              <div class="p-3  mt-2 text-center space-x-4 md:block">
                <button
                  class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
                  onClick={() => setShowEditProjectModalFromParent(false)}
                >
                  Cancel
                </button>
                <button class="mb-2 md:mb-0 bg-yellow-500  px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-yellow-600">
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    );
}

export default EditProject;