import React from "react";

function Login(){
    return (
        <div className="bg-gray-50 min-w-full min-h-full flex items-center justify-center px-10 py-14">
                <div className="flex bg-white rounded-lg shadow-lg overflow-hidden m-7 w-full sm:max-w-md lg:max-w-4xl">
                    <div className="content-center bg-gray-800 w-full hidden lg:block lg:w-1/2 bg-cover py-8"> 
                    <img
                        className="object-cover object-center"
                        src="img/login.gif"
                        alt="planning"
                        />
                    </div>
                    <div className="w-full mt-6 mb-6 p-10 lg:w-1/2">
                        <h1 className="text-2xl font-bold text-center pb-8">Login</h1>
                        <form novalidate="" action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                            <div className="space-y-1 text-sm">
                                <label for="email" className="block text-base font-semibold">E-mail</label>
                                <input type="email" name="email" id="email" autoComplete="email" placeholder="myemail@example.com" required className="w-full bg-gray-200 text-gray-700 px-4 py-3 rounded-md block w-full appearance-none border-0 " />
                            </div>
                            <div className="space-y-1 text-sm">
                                <label for="password" className="block text-base font-semibold">Password</label>
                                <input type="password" name="password" id="password" autoComplete="password" placeholder = "*****************" required className="w-full bg-gray-200 text-gray-700 px-4 py-3 rounded-md block w-full appearance-none border-0" />
                                <div className="flex justify-end text-xs text-gray-400 hover:text-gray-300 pt-3">
                                    <a href="/">Forgot Password?</a>
                                </div>
                            </div>
                            <button className="block w-full p-3 text-center font-semibold rounded-md text-white bg-gray-800 hover:bg-gray-600">Sign in</button>
                        </form>
                        {/* <div className="flex items-center pt-5 space-x-1">
                            <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                            <p className="px-3 text-sm text-gray-500">Login with social accounts</p>
                            <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                        </div>
                        <div className="flex justify-center space-x-4">
                            <button aria-label="Log in with Google" className="p-3 rounded-sm ">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fillCurrent">
                                    <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                                </svg>
                            </button>
                            <button aria-label="Log in with Facebook" className="p-3 rounded-sm ">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 50 50">    
                                    <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
                                </svg>
                            </button>
                        </div> */}
                        <p className="text-xs text-center mt-5 sm:px-6 text-gray-400">Don't have an account?
                            <a href="/" className="underline text-indigo-500 hover:text-indigo-700"> Sign up</a>
                        </p>
                    </div>
                </div>
        </div>
    );
}

export default Login;