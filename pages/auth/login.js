import React, { useState }  from "react";
import Link from "next/link";

// layout for page

import Auth from "layouts/Auth.js";

export default function Login({login,user}) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  // console.log(user);
  // console.log(username);
  // console.log(password);

  const test =()=>{
    login(username, password)
  }
  return ( 
    
    <>
     {/* <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
                    <div className="grid grid-rows-3 gap-4 bg-green-300 rounded-md">
                        <div className="m-4 flex-2">
                            <lable className="mr-3 font-semibold text-black-50" >Username </lable>
                            <input value={username} type="text" name='username' className="w-4/5 form-control" onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="m-4 flex-2">
                            <lable className="mr-3 font-semibold text-black-50"> Password </lable>
                            <input value={password} type="password" className="w-4/5 form-control" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="grid grid-rows-1 m-2">
                            <button onClick={() => login(username, password)} className="font-semibold bg-green-600 rounded-md form-control" >Login</button>
                        </div>
                    </div>
            </div>
        </div> */}

<div class="w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
  <div class="w-full sm:max-w-md p-5 mx-auto">
    <h2 class="mb-12 text-center text-5xl font-extrabold">Welcome to Students Registration System.</h2>
    
      <div class="mb-4">
        <label class="block mb-1" for="email">Email-Address</label>
        <input value={username} type="text" name='username' class="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
        onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div class="mb-4">
        <label class="block mb-1" for="password">Password</label>
        <input value={password} type="password" class="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
        onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div class="mt-6 flex items-center justify-between">
        <div class="flex items-center">
          <input id="remember_me" type="checkbox" class="border border-gray-300 text-red-600 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50" />
          <label for="remember_me" class="ml-2 block text-sm leading-5 text-gray-900"> Remember me </label>
        </div>
        <a href="#" class="text-sm"> Forgot your password? </a>
      </div>
      <div class="mt-6">
        <button onClick={() => login(username, password)} class="w-50px inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition">Sign In</button>
      </div>
      
  </div>
</div>


        </>
  );
}

Login.layout = Auth;

