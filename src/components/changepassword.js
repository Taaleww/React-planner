import React from "react";

function ChangePassword({ infoUser }) {
    // Input of change password form
    const passwordForm = {
        inputs: [
            {
                label: "Current Password",
                name: "password",
                type: "password",
                placeholder: "Enter current password",
            },
            {
                label: "New Password",
                name: "newpassword",
                type: "password",
                placeholder: "Enter new password",
            },
        ],
    };
    return (
        <div className="w-8/12 p-20 bg-white rounded-2xl">
            <h1 className="text-2xl font-bold text-center pb-8">Change Password</h1>
            <form>
                {passwordForm.inputs.map((input) => {
                    //Input in form
                    return (
                        <div className="space-y-2 mt-6 text-sm"> 
                            <label for={input.name} className="block text-base font-semibold">{input.label}</label>
                            <input type={input.type} name={input.name} id={input.name}
                                className="w-full bg-gray-200 text-gray-700 px-4 py-3 rounded-md block w-full appearance-none border-0" required
                                placeholder={input.placeholder}
                            />
                        </div>
                    );
                })}
                {/* Submit button */}
                <button className="block w-full mt-10 p-2 text-center text-base font-medium rounded-full text-white bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-green-400 hover:to-blue-500">Save Changes</button>
            </form>
        </div>
    );
}

export default ChangePassword;