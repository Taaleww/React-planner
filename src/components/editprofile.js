import React from "react";

function EditProfile() {
    return (
        <div className="w-8/12 p-12 bg-white rounded-2xl">
            <h1 className="text-2xl font-bold text-center pb-8">Edit Profile</h1>
            <form>
                <div className="image overflow-hidden text-center">
                    <img className="h-auto w-3/12 mx-auto rounded-full"
                        src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                        alt=""
                    />
                    <h1 className="text-center mt-3">
                        <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer font-semibold text-indigo-600 hover:text-indigo-400 focus-within:outline-none">
                            <span>Upload a file</span>
                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                        </label>
                    </h1>
                </div>
                <div className="flex text-sm mt-6">
                    <div className="w-1/2 mr-5 space-y-2">
                        <label for="firstname" className="block text-base font-semibold">First name</label>
                        <div className="flex">
                            <input type="text" name="firstname" id="firstname"
                                className="w-full bg-gray-200 text-gray-700 px-4 py-3 rounded-md block w-full appearance-none border-0 " required
                                placeholder="John"
                            />
                        </div>
                    </div>
                    <div className="w-1/2 space-y-2">
                        <label for="lastname" className="block text-base font-semibold">Last name</label>
                        <div className="flex">
                            <input type="text" name="lastname" id="lastname"
                                className="w-full bg-gray-200 text-gray-700 px-4 py-3 rounded-md block w-full appearance-none border-0 " required
                                placeholder="Smith"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex text-sm mt-6">
                    <div className="w-1/2 mr-5 space-y-2">
                        <label for="job" className="block text-base font-semibold">Job Title</label>
                        <div className="flex">
                            <input type="text" name="job" id="job"
                                className="w-full bg-gray-200 text-gray-700 px-4 py-3 rounded-md block w-full appearance-none border-0 "
                                placeholder="Software Engineer"
                            />
                        </div>
                    </div>
                    <div className="w-1/2 space-y-2">
                        <label for="department" className="block text-base font-semibold">Department</label>
                        <div className="flex">
                            <input type="text" name="department" id="department"
                                className="w-full bg-gray-200 text-gray-700 px-4 py-3 rounded-md block w-full appearance-none border-0 "
                                placeholder="Your Department"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex text-sm mt-6">
                    <div className="w-1/2 mr-5 space-y-2">
                        <label for="organization" className="block text-base font-semibold">Organization</label>
                        <div className="flex">
                            <input type="text" name="organization" id="organization"
                                className="w-full bg-gray-200 text-gray-700 px-4 py-3 rounded-md block w-full appearance-none border-0 "
                                placeholder="Your Organization"
                            />
                        </div>
                    </div>
                    <div className="w-1/2 space-y-2">
                        <label for="address" className="block text-base font-semibold">Based In</label>
                        <div className="flex">
                            <input type="text" name="address" id="address"
                                className="w-full bg-gray-200 text-gray-700 px-4 py-3 rounded-md block w-full appearance-none border-0 "
                                placeholder="Your Address"
                            />
                        </div>
                    </div>
                </div>
                <button className="block w-full mt-7 p-2 text-center text-base font-medium rounded-full text-white bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-green-400 hover:to-blue-500">Save</button>
            </form>
        </div>
    );
}

export default EditProfile;