function InfoTask({setShowInfoTaskModalFromParent}) {
  return (
    <>
      <div className="opacity-80 fixed inset-0 z-40 bg-black "></div>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div class="min-h-screen flex items-center justify-center px-4 ">
            <div class="max-w-4xl  bg-white w-full rounded-lg shadow-xl ">
              <div class="p-4 border-b">
                <h2 class="text-2xl ">Name Project</h2>
                <p class="text-sm text-gray-500">Project planner</p>
              </div>
              <div>
                <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                  <p class="text-gray-600">Task Name</p>
                  <p>Jane Doe</p>
                </div>
                <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                  <p class="text-gray-600">Date</p>
                  <p>Product Manager</p>
                </div>
                <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                  <p class="text-gray-600">Due Date</p>
                  <p>Janedoe@gmail.com</p>
                </div>
                <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                  <p class="text-gray-600">Status</p>
                  <p>$ 12000</p>
                </div>
                <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                  <p class="text-gray-600">Descriptions</p>
                  <p>
                    Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
                    incididunt cillum culpa consequat. Excepteur qui ipsum
                    aliquip consequat sint. Sit id mollit nulla mollit nostrud
                    in ea officia proident. Irure nostrud pariatur mollit ad
                    adipisicing reprehenderit deserunt qui eu.
                  </p>
                </div>
                <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4">
                  <p class="text-gray-600">Members</p>
                  {/* <div class="space-y-2">
              <div class="border-2 flex items-center p-2 rounded justify-between space-x-2">
                <div class="space-x-2 truncate">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="fill-current inline text-gray-500"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17 5v12c0 2.757-2.243 5-5 5s-5-2.243-5-5v-12c0-1.654 1.346-3 3-3s3 1.346 3 3v9c0 .551-.449 1-1 1s-1-.449-1-1v-8h-2v8c0 1.657 1.343 3 3 3s3-1.343 3-3v-9c0-2.761-2.239-5-5-5s-5 2.239-5 5v12c0 3.866 3.134 7 7 7s7-3.134 7-7v-12h-2z" />
                  </svg>
                  <span>resume_for_manager.pdf</span>
                </div>
                <a href="#" class="text-purple-700 hover:underline">
                  Download
                </a>
              </div>

              <div class="border-2 flex items-center p-2 rounded justify-between space-x-2">
                <div class="space-x-2 truncate">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="fill-current inline text-gray-500"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17 5v12c0 2.757-2.243 5-5 5s-5-2.243-5-5v-12c0-1.654 1.346-3 3-3s3 1.346 3 3v9c0 .551-.449 1-1 1s-1-.449-1-1v-8h-2v8c0 1.657 1.343 3 3 3s3-1.343 3-3v-9c0-2.761-2.239-5-5-5s-5 2.239-5 5v12c0 3.866 3.134 7 7 7s7-3.134 7-7v-12h-2z" />
                  </svg>
                  <span>resume_for_manager.pdf</span>
                </div>
                <a href="#" class="text-purple-700 hover:underline">
                  Download
                </a>
              </div>
            </div> */}
                </div>
                <div class="p-3  mt-2 text-center space-x-4 md:block">
                  <button class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100 "
                  onClick={() => setShowInfoTaskModalFromParent(false)}
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

export default InfoTask;
