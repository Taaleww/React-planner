import { ReactComponent as MemberSvg } from "../../assets/icons/member.svg";

function AddMember({ setShowAddMemberModalFromParent }) {
  return (
    <>
      <div className="opacity-80 fixed inset-0 z-40 bg-black "></div>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="w-screen  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white mt-0 font-mono">
            <div className="">
              <div className="text-center p-5 flex-auto justify-center">
                <MemberSvg />
                <h2 className="text-xl font-bold py-4 ">Add Members</h2>
              </div>
              <div className="space-y-4 ">
                <label className="block text-gray-700 text-sm font-normal mb-2 ">
                  Email
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  className="block text-sm py-3 px-4 rounded-lg w-full border outline-none border-gray-300"
                />
                <label className="block text-gray-700 text-sm font-normal mb-2 ">
                  Role
                </label>
                <div className="relative inline-flex">
                  <select className="border border-gray-300 rounded-lg text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none border outline-none ">
                    <option>Select Role</option>
                    <option>project member </option>
                  </select>
                </div>
              </div>

              <div className="p-3  mt-2 text-center space-x-4 md:block">
                <button
                  className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
                  onClick={() => setShowAddMemberModalFromParent(false)}
                >
                  Cancel
                </button>
                <button className="mb-2 md:mb-0 bg-blue-400  px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-blue-500">
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
