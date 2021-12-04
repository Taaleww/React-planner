import React, { useState } from "react";

function EditProfile({ infoUser }) {

    //For upload and show image
    const [selectedImage, setSelectedImage] = useState(infoUser.img);
    const imageChange = (e) => {
        if(e.target.files && e.target.files.length > 0){
            //convert image to link url
            setSelectedImage(URL.createObjectURL(e.target.files[0]));
        }
    };

    return (
        <div className="w-8/12 p-12 bg-white rounded-2xl">
            <h1 className="text-2xl font-bold text-center pb-8">Edit Profile</h1>
            <form>
                <div className="image overflow-hidden text-center">
                     {/* Profile Image */}
                    <img className="h-auto w-3/12 mx-auto rounded-full"
                        src = {selectedImage}
                        alt=""
                    />
                    <h1 className="text-center mt-3">
                        {/* Upload image */}
                        <label
                            htmlFor="img"
                            className="relative cursor-pointer font-semibold text-indigo-600 hover:text-indigo-400 focus-within:outline-none">
                            <span>Upload a file</span>
                            <input id="img" name="img" accept="image/*" type="file" className="sr-only" onChange={imageChange} />
                        </label>
                    </h1>
                </div>
                {/* Edit user infomation */}
                <div className="flex text-sm mt-6">
                    <div className="w-1/2 mr-5 space-y-2">
                        <label for="firstname" className="block text-base font-semibold">First name</label>
                        <div className="flex">
                            <input type="text" name="firstname" id="firstname"
                                className="w-full bg-gray-200 text-gray-700 px-4 py-3 rounded-md block w-full appearance-none border-0 " required
                                placeholder="John" value={infoUser.firstname}
                            />
                        </div>
                    </div>
                    <div className="w-1/2 space-y-2">
                        <label for="lastname" className="block text-base font-semibold">Last name</label>
                        <div className="flex">
                            <input type="text" name="lastname" id="lastname"
                                className="w-full bg-gray-200 text-gray-700 px-4 py-3 rounded-md block w-full appearance-none border-0 " required
                                placeholder="Smith" value={infoUser.lastname}
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
                                placeholder="Software Engineer" value={infoUser.job}
                            />
                        </div>
                    </div>
                    <div className="w-1/2 space-y-2">
                        <label for="department" className="block text-base font-semibold">Department</label>
                        <div className="flex">
                            <input type="text" name="department" id="department"
                                className="w-full bg-gray-200 text-gray-700 px-4 py-3 rounded-md block w-full appearance-none border-0 "
                                placeholder="Your Department" value={infoUser.department}
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
                                placeholder="Your Organization" value={infoUser.organization}
                            />
                        </div>
                    </div>
                    <div className="w-1/2 space-y-2">
                        <label for="address" className="block text-base font-semibold">Based In</label>
                        <div className="flex">
                            <input type="text" name="address" id="address"
                                className="w-full bg-gray-200 text-gray-700 px-4 py-3 rounded-md block w-full appearance-none border-0 "
                                placeholder="Your Address" value={infoUser.address}
                            />
                        </div>
                    </div>
                </div>
                {/* Submit button */}
                <button className="block w-full mt-7 p-2 text-center text-base font-medium rounded-full text-white bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-green-400 hover:to-blue-500">Save</button>
            </form>
        </div>
    );
}

export default EditProfile;