import React, { useState }  from "react";
// import Link from "next/link";

// layout for page

import Auth from "layouts/Auth.js";

export default function Login({login,user}) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  return (
    <>

      <form className="flex flex-col justify-center p-6">
        <div className="flex flex-col mt-2">
          <label for="username" className="hidden">Text</label>
          <input type="text" name="username" id="username" placeholder="User Name" onChange={(e) => setUsername(e.target.value)}
          className="px-3 py-3 mt-2 font-semibold text-gray-800 bg-white border border-gray-400 rounded-lg w-100 dark:bg-gray-800 dark:border-gray-700 focus:border-indigo-500 focus:outline-none" />
        </div>

        <div className="flex flex-col mt-2">
          <label for="password" className="hidden">Email</label>
          <input type="Password" name="password" id="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}
          className="px-3 py-3 mt-2 font-semibold text-gray-800 bg-white border border-gray-400 rounded-lg w-100 dark:bg-gray-800 dark:border-gray-700 focus:border-indigo-500 focus:outline-none" />
        </div>

        

        <button type="submit" onClick={() => login(username, password)} className="px-6 py-4 mt-12 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none get-started focus:outline-none bg-blueGray-400 active:bg-blueGray-500 hover:shadow-lg">
          Sign In
        </button>
      </form>
     
    </>
  );
}

Login.layout = Auth;
