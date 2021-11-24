import React from "react";

function UserInfo({ info }) {
    return (
        <div className="bg-white p-3 shadow-sm font-medium text-sm text-gray-600 rounded-2xl p-5">
            {/* About */}
            <div className="space-y-6">
                <p className="text-gray-700 font-semibold">ABOUT</p>
                <p className="flex">
                    <span className="ml-2">
                        <img src="https://img.icons8.com/material-outlined/24/606B7D/briefcase.png" />
                    </span>
                    { info.job === "" ? <span className="ml-3 text-gray-400"> Your Job</span> : <span className="ml-3"> {info.job}</span>}
                </p>
                <p className="flex">
                    <span className="ml-2">
                        <img src="https://img.icons8.com/material-outlined/24/606B7D/organization.png" />
                    </span>
                    { info.department === "" ? <span className="ml-3 text-gray-400"> Your Department</span> : <span className="ml-3"> {info.department}</span>}
                </p>
                <p className="flex">
                    <span className="ml-2">
                        <img src="https://img.icons8.com/material-outlined/24/606B7D/organization-chart-people.png" />
                    </span>
                    { info.organization === "" ? <span className="ml-3 text-gray-400"> Your Organization</span> : <span className="ml-3"> {info.organization}</span>}
                </p>
                <p className="flex">
                    <span className="ml-2">
                        <img src="https://img.icons8.com/material-outlined/24/606B7D/marker.png" />
                    </span>
                    { info.address === "" ? <span className="ml-3 text-gray-400"> Your Address</span> : <span className="ml-3"> {info.address}</span>}
                </p>
            </div>
            {/* Contract */}
            <div className="mt-6 space-y-6">
                <p className="text-gray-700 font-semibold">CONTRACT</p>
                <p className="flex">
                    <span className="ml-2">
                        <img src="https://img.icons8.com/material-outlined/24/606B7D/new-post.png" />
                    </span>
                    { info.email === "" ? <span className="ml-3 text-gray-400"> myemail@example.com</span> : <span className="ml-3"> {info.email}</span>}
                </p>
            </div>
        </div>

  );
}

export default UserInfo;

