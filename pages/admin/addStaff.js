import React,{useState , useEffect } from "react";
import axios from "axios";

// components

import CardAddStaff from "components/Cards/CardAddStaff.js";
// import CardProfile from "components/Cards/CardProfile.js";

// layout for page


import Admin from "layouts/Admin.js";

export default function Settings() {

  const baseUrl = 'http://127.0.0.1:8000/';
  const student_url = baseUrl + 'staff_list2/';
  const [LatestAnswer,setLatestAnswer] = useState({})
  
  const formHandler = async (e) => {
    e.preventDefault();
    console.log(baseUrl);
    console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");

    let answer = {
        email:e.target.email,
        username:e.target.username,
        password:e.target.password,
        first_name:e.target.firstName,
        last_name:e.target.lastName,
        address:e.target.address,
        
    };

    const tokenLocal = localStorage.getItem("token")
    const localTwo = JSON.parse(tokenLocal)
    
    setLatestAnswer(answer); 
    const config={
        headers: {"Authorization" : `Bearer ${localTwo.token.access}`}, 
        body: answer,  
    }

     axios.post(student_url,config).then(response=>{
      // setLatestAnswer(...LatestAnswer, response.data);
      console.log("Response");
      console.log(response)
      console.log(response.data);
    });
    console.log(LatestAnswer);

}

  const [student, setstudent] = useState([]);
  useEffect(() => {
      const tokenLocal = localStorage.getItem("token")
      const localTwo = JSON.parse(tokenLocal)
     
      console.log("LS token: ",localTwo.token.access);
      
        const config = {
          headers: { "Authorization": `Bearer ${localTwo.token.access}` }
        }


      axios.get(student_url, config).then(res => {
          setstudent(res.data)
          console.log(res.data);
      });

  }, [LatestAnswer])

  const formName = "Add Staff"

  
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4 lg:w-8/12">
          <CardAddStaff 
          formHandler={formHandler}
          formName = {formName}
          />
        </div>
        {/* <div className="w-full px-4 lg:w-4/12">
          <CardProfile />
        </div> */}
      </div>
    </>
  );
}

Settings.layout = Admin;
