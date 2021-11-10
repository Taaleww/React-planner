import { ReactComponent as CreateSvg } from "../../assets/icons/create.svg";

function CreateTasks({ setShowCreateTaskModalFromParent }) {
  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none">
      <div className="CreateTask font-mono">
        <div className="absolute bg-black opacity-80 inset-0 z-0 "></div>
        <div className="w-screen  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white mt-0">
          <div className="">
            <div className="text-center p-5 flex-auto justify-center">
              <CreateSvg />
              <h2 className="text-xl font-bold py-4 ">Create Task?</h2>
            </div>
            <div className="space-y-4">
              <label
                className="block text-gray-700 text-sm font-normal mb-2 "
                for="username border-gray-300 "
              >
                Task Name
              </label>
              <input
                type="text"
                placeholder="Task Name"
                className="block text-sm py-3 px-4 rounded-lg w-full border outline-none border-gray-300 "
              />
              <label
                className="block text-gray-700 text-sm font-normal mb-2 "
                for="username"
              >
                Start Date
              </label>
              <input
                type="date"
                placeholder="Start Date"
                className="block text-sm py-3 px-4 rounded-lg w-full border outline-none border-gray-300 "
              />
              <label
                className="block text-gray-700 text-sm font-normal mb-2 "
                for="username"
              >
                Due Date
              </label>
              <input
                type="date"
                placeholder="Due Date"
                className="block text-sm py-3 px-4 rounded-lg w-full border outline-none border-gray-300 "
              />
              <label
                className="block text-gray-700 text-sm font-normal mb-2 "
                for="username"
              >
                Descriptions
              </label>
              <input
                type="text"
                placeholder="Description"
                className="block text-sm py-3 px-4 rounded-lg w-full border outline-none border-gray-300 "
              />
            </div>

            <div className="p-3  mt-2 text-center space-x-4 md:block">
              <button
                className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
                onClick={() => setShowCreateTaskModalFromParent(false)}
              >
                Cancel
              </button>
              <button className="mb-2 md:mb-0 bg-green-400  px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500">
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTasks;
