function AddMember({ setShowAddMemberModalFromParent }) {
  return (
    <>
      <div className="opacity-80 fixed inset-0 z-40 bg-black "></div>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div class="w-screen  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white mt-0 font-mono">
            <div class="">
              <div class="text-center p-5 flex-auto justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-16 w-16 tiem-center text-blue-500 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>

                <h2 class="text-xl font-bold py-4 ">Add Members?</h2>
              </div>
              <div class="space-y-4 ">
                <label
                  class="block text-gray-700 text-sm font-normal mb-2 "
                  for="username"
                >
                  {" "}
                  Email{" "}
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  class="block text-sm py-3 px-4 rounded-lg w-full border outline-none border-gray-300"
                />
                <label
                  class="block text-gray-700 text-sm font-normal mb-2 "
                  for="username"
                >
                  {" "}
                  Role{" "}
                </label>
                <div class="relative inline-flex">
                  <select class="border border-gray-300 rounded-lg text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none border outline-none ">
                    <option>Select Role</option>
                    <option>Red</option>
                    <option>Blue</option>
                    <option>Yellow</option>
                    <option>Black</option>
                    <option>Orange</option>
                    <option>Purple</option>
                    <option>Gray</option>
                    <option>White</option>
                  </select>
                </div>
              </div>

              <div class="p-3  mt-2 text-center space-x-4 md:block">
                <button
                  class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
                  onClick={() => setShowAddMemberModalFromParent(false)}
                >
                  Cancel
                </button>
                <button class="mb-2 md:mb-0 bg-blue-500  px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-yellow-600">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddMember;
