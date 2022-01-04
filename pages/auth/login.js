import React, { useState }  from "react";
// import Link from "next/link";

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
    <div className="flex flex-col items-center justify-center min-h-screen">
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
        </div>

      {/* <div className="flex flex-col justify-center p-6">
        <div className="flex flex-col mt-2">
          <label className="hidden">Text</label>
          <input type="text" name="username" id="username" placeholder="User Name" onChange={(e) => setUsername(e.target.value)}
          className="px-3 py-3 mt-2 font-semibold text-gray-800 bg-white border border-gray-400 rounded-lg w-100 dark:bg-gray-800 dark:border-gray-700 focus:border-indigo-500 focus:outline-none" />
        </div>

        <div className="flex flex-col mt-2">
          <label className="hidden">Email</label>
          <input type="Password" name="password" id="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}
          className="px-3 py-3 mt-2 font-semibold text-gray-800 bg-white border border-gray-400 rounded-lg w-100 dark:bg-gray-800 dark:border-gray-700 focus:border-indigo-500 focus:outline-none" />
        </div>

        <button type="submit" onClick={() => {test}} className="px-6 py-4 mt-12 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none get-started focus:outline-none bg-blueGray-400 active:bg-blueGray-500 hover:shadow-lg">
          Sign In
        </button>
      </div> */}
     
    </>
  );
}

Login.layout = Auth;
