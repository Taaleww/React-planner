function EditProject() {
  return (
    <div className="EditProject font-mono">
      <div class="absolute bg-black opacity-80 inset-0 z-0 "></div>
      <div class="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white mt-60">
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
            <button class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">
              Cancel
            </button>
            <button class="mb-2 md:mb-0 bg-yellow-500  px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-600">
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProject;
