import React from "react";

function ChangePassword({ infoUser }) {
    return (
        <div className="w-8/12 p-20 bg-white rounded-2xl">
            <h1 className="text-2xl font-bold text-center pb-8">Change Password</h1>
            <form>
                <div className="space-y-2 mt-6 text-sm">
                    <label for="password" className="block text-base font-semibold">Current Password</label>
                    <input type="password" name="password" id="password"
                        className="w-full bg-gray-200 text-gray-700 px-4 py-3 rounded-md block w-full appearance-none border-0" required
                        placeholder="Enter current password"
                    />
                </div>
                <div className="space-y-2 mt-6 text-sm3">
                    <label for="newpassword" className="block text-base font-semibold">New Password</label>
                    <input type="password" name="newpassword" id="newpassword"
                        className="w-full bg-gray-200 text-gray-700 px-4 py-3 rounded-md block w-full appearance-none border-0 " required
                        placeholder="Enter new password"
                    />
                </div>
                <button className="block w-full mt-10 p-2 text-center text-base font-medium rounded-full text-white bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-green-400 hover:to-blue-500">Save Changes</button>
            </form>
        </div>
    );
}

export default ChangePassword;