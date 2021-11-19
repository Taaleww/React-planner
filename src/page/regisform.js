import React,{ useState } from "react";
import UseForm from "./useForm";
import validate from "./validateInfo";
/*import {
    Form,
    Input,
    InputNumber,
    Cascader,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
  } from 'antd';*/

function Register(){
    //const [form] = Form.useForm();
    // const [isSubmitted, setSubmitted] = useState(false);

    // function submitForm(){
    //     setSubmitted(true);
    // }

    //const onFinish = () => {};
    const { handleChange, values, handleSubmit, errors } = UseForm(validate); 

    return (
        <div className="bg-gray-50 min-w-full min-h-full flex justify-center items-center px-10">
                <div className="flex items-center bg-gray-800 rounded-lg shadow-lg overflow-hidden m-8 w-full sm:max-w-md lg:max-w-5xl">
                    <div className="w-full p-5 hidden lg:block lg:w-1/2 bg-cover"> 
                        <img
                            className="object-cover"
                            src="img/regis.gif"
                            alt="planning"
                        />
                    </div>
                    <div className="w-full bg-white p-10 lg:w-1/2">
                        <h1 className="text-2xl font-bold text-center pb-8">Sign Up</h1>
                        <form onSubmit={handleSubmit} noValidate>
                            <div className="flex text-sm">
                                <div className="w-1/2 mr-5 space-y-2">
                                    <label for="firstname" className="block text-base font-semibold">First name</label>
                                    <div className="flex">
                                        <input type="text" name="firstname" id="firstname" 
                                            className="w-full bg-gray-200 text-gray-700 px-4 py-3 rounded-md block w-full appearance-none border-0 " required 
                                            placeholder="John" value={values.firstname}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    {errors.firstname && <div className="text-xs text-red-400 mb-0">{errors.firstname}</div>}
                                </div>
                                <div className="w-1/2 space-y-2">
                                    <label for="lastname" className="block text-base font-semibold">Last name</label>
                                    <div className="flex">
                                        <input type="text" name="lastname" id="lastname" 
                                            className="w-full bg-gray-200 text-gray-700 px-4 py-3 rounded-md block w-full appearance-none border-0 " required 
                                            placeholder="Smith" value={values.lastname}                                          
                                            onChange={handleChange}
                                        />
                                    </div>
                                    {errors.lastname && <div className="text-xs text-red-400 mb-0">{errors.lastname}</div>}
                                </div>
                            </div>
                            <div className="space-y-2 mt-6 text-sm">
                                <label for="email" className="block text-base font-semibold">E-mail</label>
                                <input type="email" name="email" id="email" 
                                    className="w-full bg-gray-200 text-gray-700 px-4 py-3 rounded-md block w-full appearance-none border-0 " required 
                                    placeholder="myemail@example.com" value={values.email}
                                    onChange={handleChange}
                                />
                                {errors.email && <div className="text-xs text-red-400 mb-0">{errors.email}</div>}
                            </div>
                            <div className="space-y-2 mt-6 text-sm">
                                <label for="password" className="block text-base font-semibold">Password</label>
                                <input type="password" name="password" id="password" 
                                    className="w-full bg-gray-200 text-gray-700 px-4 py-3 rounded-md block w-full appearance-none border-0" required 
                                    placeholder = "*****************" value={values.password}
                                    onChange={handleChange}
                                    />
                                {errors.password && <div className="text-xs text-red-400 mb-0">{errors.password}</div>}
                            </div>
                            <div className="space-y-2 mt-6 text-sm3">
                                <label for="cfpassword" className="block text-base font-semibold">Comfirm Password</label>
                                <input type="password" name="cfpassword" id="cfpassword" 
                                    className="w-full bg-gray-200 text-gray-700 px-4 py-3 rounded-md block w-full appearance-none border-0 " required 
                                    placeholder = "*****************" value={values.cfpassword}
                                    onChange={handleChange}
                                />
                                {errors.cfpassword && <div className="text-xs text-red-400 mb-0">{errors.cfpassword}</div>}
                            </div>
                            <button className="block w-full mt-9 p-3 text-center font-semibold rounded-md text-white bg-gray-800 hover:bg-gray-600">Sign Up</button>
                        </form>
                        {/* <div className="flex justify-end items-center pt-5 space-x-1">
                            <div className="flex-1 h-px sm:w-16 bg-gray-700"></div> 
                            <p className="px-3 text-sm text-gray-200">Sign up with</p>
                            <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                            <button aria-label="Log in with Google" className="p-1 rounded-sm  hover:bg-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fillCurrent ">
                                    <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                                </svg>
                            </button>
                            <button aria-label="Log in with Facebook" className="p-1 rounded-sm hover:bg-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50">    
                                    <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
                                </svg>
                            </button>
                        </div> */}
                    </div>
                </div>
        </div>
    );
}

export default Register;                                