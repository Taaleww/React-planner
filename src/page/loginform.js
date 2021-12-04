import React from "react";

function Login() {
    return (
        <div className="bg-gray-50 min-w-full min-h-full flex items-center justify-center px-10 py-14">
            <div className="flex items-center bg-gray-800 rounded-lg shadow-lg overflow-hidden m-11 w-full sm:max-w-md lg:max-w-4xl">
                {/* Right Side with image */}
                <div className="w-full min-h-full hidden lg:block lg:w-1/2">
                    <img
                        className="object-cover object-center"
                        src="img/login.gif"
                        alt="planning"
                    />
                </div>
                {/* Left Side with form for login */}
                <div className="w-full bg-white p-10 lg:w-1/2">
                    <h1 className="text-2xl font-bold text-center mt-7 pb-8">Login</h1>
                    <form novalidate="" action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                        {/* Input E-mail */}
                        <div className="space-y-1 text-sm">
                            <label for="email" className="block text-base font-semibold">E-mail</label>
                            <input type="email" name="email" id="email" autoComplete="email" placeholder="myemail@example.com" required className="w-full bg-gray-200 text-gray-700 px-4 py-3 rounded-md block w-full appearance-none border-0 " />
                        </div>
                        {/* Input Password */}
                        <div className="space-y-1 text-sm">
                            <label for="password" className="block text-base font-semibold">Password</label>
                            <input type="password" name="password" id="password" autoComplete="password" placeholder="*****************" required className="w-full bg-gray-200 text-gray-700 px-4 py-3 rounded-md block w-full appearance-none border-0" />
                        </div>
                        {/* Submit Button */}
                        <button className="block w-full p-3 text-center font-semibold rounded-md text-white bg-gray-800 hover:bg-gray-600">Sign in</button>
                    </form>
                    {/* Link to register */}
                    <p className="text-xs text-center mt-5 mb-8 sm:px-6 text-gray-400">Don't have an account?
                        <a href="/regis" className="underline text-indigo-500 hover:text-indigo-700"> Sign up</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;