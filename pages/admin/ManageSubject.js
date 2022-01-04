import React,{useState , useEffect } from "react";
import axios from "axios";
// components

import CardManageSubject from "components/Cards/CardManageSubject.js";

// layout for page

import Admin from "layouts/Admin.js";

export default function Tables() {
  const [staff, setstaff] = useState([]);
  const baseUrl = 'http://127.0.0.1:8000/';
  const subjec_list = baseUrl + 'subject_list2/';

  // const [student, setstudent] = useState([]);
  // const [course, setcourse] = useState([]);
  useEffect(() => {
      const tokenLocal = localStorage.getItem("token")

      const localTwo = JSON.parse(tokenLocal)
     
      console.log("LS token: ",localTwo.token.access);
      const data = async()=>{
        const config = {
          headers: { "Authorization": `Bearer ${localTwo.token.access}` }
      }
      axios.get(subjec_list, config).then(res => {
          setstaff(res.data)
          console.log(res.data);
      });
      }


      data();
  }, [])
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full px-4 mb-12">
          <CardManageSubject 
          staff={staff}/>
        </div>
        {/* <div className="w-full px-4 mb-12">
          <CardTable color="dark" />
        </div> */}
      </div>
    </>
  );
}

Tables.layout = Admin;
