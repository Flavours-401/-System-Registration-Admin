import React,{useState , useEffect } from "react";
import axios from "axios";
// components

import CardAddSession from "components/Cards/CardAddSession";
// import CardProfile from "components/Cards/CardProfile.js";

// layout for page

import Admin from "layouts/Admin.js";

export default function Settings() {
  const baseUrl = 'http://127.0.0.1:8000/';
  const student_url = baseUrl + 'session_list/';
  const [LatestAnswer,setLatestAnswer] = useState({})
  
  const formHandler = async (e) => {
    e.preventDefault();
    console.log(baseUrl);

 
    let answer = {
      session_start_year : e.target.session_start_year.value,
      session_end_year : e.target.session_end_year.value,
        
    };
    console.log(answer)

    const tokenLocal = localStorage.getItem("token")
    const localTwo = JSON.parse(tokenLocal)
    
    setLatestAnswer(answer); 

    const config = {
      method: 'post',
      url: student_url,
      data: answer,
      headers:{"Authorization" : `Bearer ${localTwo.token.access}`},
    }
    console.log(config);
    const res = await axios(config)
    console.log(res);

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
  const formName = "Add Session"
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4 lg:w-8/12">
          <CardAddSession
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
