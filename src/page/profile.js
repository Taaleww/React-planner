import { element } from "prop-types";
import React, {useState} from "react";
import DetailItem from "../components/detailitem";

function Profile(){
    //temp status variable
    const [status, setstatus] = useState("PROGRESS");
    const successSign = <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            width="24" height="24"
                            viewBox="0 0 24 24"
                            style={{fill:"#73EB95"}}>    
                            <path d="M12,2C6.477,2,2,6.477,2,12c0,5.523,4.477,10,10,10s10-4.477,10-10C22,6.477,17.523,2,12,2z M17.707,9.707l-7,7 C10.512,16.902,10.256,17,10,17s-0.512-0.098-0.707-0.293l-3-3c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0L10,14.586 l6.293-6.293c0.391-0.391,1.023-0.391,1.414,0S18.098,9.316,17.707,9.707z"></path>
                        </svg>
    const progresSign = <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            width="24" height="24"
                            viewBox="0 0 30 30"
                            style={{fill:"#F3DF95"}}>    
                            <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M16,16H7.995 C7.445,16,7,15.555,7,15.005v-0.011C7,14.445,7.445,14,7.995,14H14V5.995C14,5.445,14.445,5,14.995,5h0.011 C15.555,5,16,5.445,16,5.995V16z"></path>
                        </svg>
    const project = [
        {projectname:"Project System"},
        {projectname:"BaeBaeBoo System"}
    ]
    let sign;
    if (status === "SUCCESS") {
        sign = successSign;
    } else if (status === "PROGRESS") {
        sign = progresSign;
    }

    return (
        <div className="bg-gray-100 px-40">
            <div className="container mx-auto p-5">
                <div className="md:flex no-wrap md:-mx-2 ">
                    {/* Left Side */}
                    <div className="w-full md:w-3/12 md:mx-2">
                        {/* Profile image */}
                        <div>
                            <div className="image overflow-hidden rounded-2xl">
                                <img className="h-auto w-full mx-auto"
                                    src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                                    alt="" />
                            </div>
                            <h1 className="uppercase text-gray-800 text-center font-bold text-2xl leading-8 my-3">Fullname Lastname</h1>
                            <a className="block w-full my-3 p-2 text-center text-sm font-medium rounded-full text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500" href="/manage_account">Manage Your Account</a>
                        </div>
                        {/* End of profile image */}
                        {/* User infomation */}
                        <div className="bg-white p-3 shadow-sm font-medium text-sm text-gray-600 rounded-2xl p-5">
                            {/* About */}
                            <div className="space-y-6">
                                <p className="text-gray-700 font-semibold">ABOUT</p>
                                <DetailItem img="https://img.icons8.com/material-outlined/24/606B7D/briefcase.png" detail="Your Job Title"/>
                                <DetailItem img="https://img.icons8.com/material-outlined/24/606B7D/organization.png" detail="Your Department"/>
                                <DetailItem img="https://img.icons8.com/material-outlined/24/606B7D/organization-chart-people.png" detail="Your Organization"/>
                                <DetailItem img="https://img.icons8.com/material-outlined/24/606B7D/marker.png" detail="Your Location"/>
                            </div>
                            {/* Contract */}
                            <div className="mt-6 space-y-6">
                                <p className="text-gray-700 font-semibold">CONTRACT</p>
                                <DetailItem img="https://img.icons8.com/material-outlined/24/606B7D/new-post.png" detail="myemail@example.com"/>
                            </div>
                        </div>
                        {/* End of yser infomation */}
                    </div>
                    {/*  Right Side  */}
                    <div className="w-full md:w-9/12 mx-2 h-64">
                        {/* Worked on Section */}
                        <div className="bg-white p-3 shadow-sm rounded-2xl px-10 py-8">
                            <div className="font-semibold text-gray-700 leading-8">
                                <p className="text-gray-700 font-semibold">Worked On</p>
                            </div>
                            <div className="h-0.5 w-max sm:w-16 bg-yellow-200 mb-4"></div>
                            <div className="flex text-gray-700 text-sm mt-3 pl-4">
                                <span>
                                    {/* <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                        width="24" height="24"
                                        viewBox="0 0 24 24"
                                        style={{fill:"#73EB95"}}>    
                                        <path d="M12,2C6.477,2,2,6.477,2,12c0,5.523,4.477,10,10,10s10-4.477,10-10C22,6.477,17.523,2,12,2z M17.707,9.707l-7,7 C10.512,16.902,10.256,17,10,17s-0.512-0.098-0.707-0.293l-3-3c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0L10,14.586 l6.293-6.293c0.391-0.391,1.023-0.391,1.414,0S18.098,9.316,17.707,9.707z"></path>
                                    </svg> */}
                                    { sign }
                                </span>
                                <span className="pl-2"> PSS-9 Create Function</span>
                            </div>
                            {/* <div className="flex text-gray-700 text-sm mt-3 pl-4">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                        width="24" height="24"
                                        viewBox="0 0 30 30"
                                        style={{fill:"#F3DF95"}}>    
                                        <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M16,16H7.995 C7.445,16,7,15.555,7,15.005v-0.011C7,14.445,7.445,14,7.995,14H14V5.995C14,5.445,14.445,5,14.995,5h0.011 C15.555,5,16,5.445,16,5.995V16z"></path>
                                    </svg>
                                </span>
                                <span className="pl-2"> PSS-10 Create Pro</span>
                            </div> */}
                            <div className="text-xs text-gray-400 mt-4 text-right">
                                <a className="hover:text-gray-300 hover:underline " href="/">View Full</a>
                            </div>
                        </div>
                        <div className="bg-white p-3 shadow-sm rounded-2xl px-10 py-8 mt-3">
                            <div className="font-semibold text-gray-700 leading-8">
                                <p className="text-gray-700 font-semibold">Place Your Works</p>
                            </div>
                            <div className="h-0.5 w-max sm:w-16 bg-green-200 mb-4"></div>
                            <div className="flex text-gray-700 text-sm mt-3 pl-4">
                                {/* {project.map((element)=>{ */}
                                    <span>
                                        <img className="h-5 w-5"
                                            src="https://img.icons8.com/material/96/73EB95/brief--v1.png" />
                                    </span>
                                    <span className="pl-2"> </span>
                                {/* })} */}
                            </div>
                            <div className="text-xs text-gray-400 mt-4 text-right">
                                <a className="hover:text-gray-300 hover:underline " href="/">View Full</a>
                            </div>
                        </div>
                        <div className="bg-white p-3 shadow-sm rounded-2xl px-10 py-8 mt-3">
                            <div className="font-semibold text-gray-700 leading-8">
                                <p className="text-gray-700 font-semibold">Your Work With</p>
                            </div>
                            <div className="h-0.5 w-max sm:w-16 bg-yellow-200 mb-4"></div>
                            <div className="flex text-gray-700 text-sm mt-3 pl-4">
                                <span>
                                    <img className="h-5 w-5 rounded-full"
                                        src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                                        alt="" />
                                </span>
                                <span className="pl-2"> Fullname Lastname</span>
                            </div>
                            <div className="text-xs text-gray-400 mt-4 text-right">
                                <a className="hover:text-gray-300 hover:underline " href="/">View Full</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;