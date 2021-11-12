import React from "react";

function Register(){
    return (
        <div className="bg-gray-50 min-w-full min-h-full flex items-center justify-center px-10">
                <div className="flex bg-white rounded-lg shadow-lg overflow-hidden m-8 w-full sm:max-w-md lg:max-w-5xl">
                    <div className="justify-center content-center bg-gray-800 w-full p-5 py-16 hidden lg:block lg:w-1/2 bg-cover"> 
                    <img
                        className="object-cover object-center"
                        src="img/regis.gif"
                        alt="planning"
                        />
                    </div>
                    <div className="w-full p-10 lg:w-1/2">
                        <h1 className="text-2xl font-bold text-center pb-8">Sign Up</h1>
                        <form novalidate="" action="" className="ng-untouched ng-pristine ng-valid">
                            <div className="flex text-sm">
                                <div className="w-1/2 mr-5 space-y-2">
                                    <label for="firstname" className="block text-base font-semibold">First name</label>
                                    <div className="flex">
                                        <input type="text" name="firstname" id="firstname" placeholder="John" className="w-full bg-gray-200 text-gray-700 px-4 py-3 rounded-md block w-full appearance-none border-0 " required />
                                    </div>
                                </div>
                                <div className="w-1/2 space-y-2">
                                    <label for="lastname" className="block text-base font-semibold">Last name</label>
                                    <div className="flex">
                                        <input type="text" name="lastname" id="lastname" placeholder="Smith" className="w-full bg-gray-200 text-gray-700 px-4 py-3 rounded-md block w-full appearance-none border-0 " required />
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-2 mt-6 text-sm">
                                <label for="username" className="block text-base font-semibold">E-mail</label>
                                <input type="email" name="email" id="email" placeholder="myemail@example.com" className="w-full bg-gray-200 text-gray-700 px-4 py-3 rounded-md block w-full appearance-none border-0 " required />
                            </div>
                            <div className="space-y-2 mt-6 text-sm">
                                <label for="password" className="block text-base font-semibold">Password</label>
                                <input type="password" name="password" id="password" placeholder = "*****************" className="w-full bg-gray-200 text-gray-700 px-4 py-3 rounded-md block w-full appearance-none border-0" required />
                            </div>
                            <div className="space-y-2 mt-6 text-sm3">
                                <label for="cfpassword" className="block text-base font-semibold">Comfirm Password</label>
                                <input type="password" name="cfpassword" id="cfpassword" placeholder = "*****************" className="w-full bg-gray-200 text-gray-700 px-4 py-3 rounded-md block w-full appearance-none border-0 " required />
                            </div>
                            <button className="block w-full mt-9 p-3 text-center font-semibold rounded-md text-white bg-gray-800 hover:bg-gray-600">Sign Up</button>
                        </form>
                    </div>
                </div>
        </div>
    );
}

export default Register;