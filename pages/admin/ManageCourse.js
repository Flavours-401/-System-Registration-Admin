import React,{useState , useEffect } from "react";
import axios from "axios";
// components

import CardManageCourse from "components/Cards/CardManageCourse.js";

// layout for page

import Admin from "layouts/Admin.js";

export default function Tables() {
  const baseUrl = 'http://127.0.0.1:8000/';
  const student_url = baseUrl + 'course_list/';

  const [student, setstudent] = useState([]);
  // const [course, setcourse] = useState([]);
  useEffect(() => {
      const tokenLocal = localStorage.getItem("token")

      const localTwo = JSON.parse(tokenLocal)
     
      console.log("LS token: ",localTwo.token.access);
      const data = async()=>{
        const config = {
          headers: { "Authorization": `Bearer ${localTwo.token.access}` }
        }
      // axios.get(staff_url, config).then(res => {
      //     setstaff(res.data)
      //     console.log(res.data);
      // });
      // }

      axios.get(student_url, config).then(res => {
          setstudent(res.data)
          console.log(res.data);
      });}
      // axios.get(course_url, config).then(res => {
      //     setcourse(res.data)
      //     console.log(res.data);
      // });
      data()
  }, [])
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full px-4 mb-12">
          <CardManageCourse />
        </div>
        {/* <div className="w-full px-4 mb-12">
          <CardTable color="dark" />
        </div> */}
      </div>
    </>
  );
}

Tables.layout = Admin;
