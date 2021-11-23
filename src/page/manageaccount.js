import React from "react";
import { useState } from "react";
import EditProfile from "../components/editprofile";
import ChangePassword from "../components/changepassword";

function ManageAccount() {
    const user = {
            img:"https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg",
            firstname:"Thitiworada",
            lastname:"Amsa-ngaun",
            job:"Software Engineer",
            department:"Computer Engineering",
            organization:"KMUTT",
            address:"",
            password:"123456"
    };
    const [section, setSection] = useState("PROFILE");
    function handleProfileSection() {
        setSection("PROFILE");
    }
    function handlePasswordSection() {
        setSection("PASSWORD");
    }

    return (
        <div className="parent md:h-screen md:grid md:grid-cols-11">
            <section className="sidebar md:col-span-2 p-5 space-y-6 pt-10 text-sm" style={{ backgroundColor: "#25273A" }}>
                <button className="block w-full  p-2 text-center font-semibold rounded-full text-white hover:bg-yellow-200 hover:text-gray-700" onClick={handleProfileSection}>Edit Profile</button>
                <button className="block w-full  p-2 text-center font-semibold rounded-full text-white hover:bg-yellow-200 hover:text-gray-700" onClick={handlePasswordSection}>Change Password</button>
            </section>
            <main className="main md:col-span-9 p-8 flex justify-center" style={{ backgroundColor: "#E6E6E6" }}>
                { section === "PROFILE" ? <EditProfile infoUser={ user } /> : <ChangePassword infoUser={ user } />}
            </main>
        </div>
    );
}

export default ManageAccount;