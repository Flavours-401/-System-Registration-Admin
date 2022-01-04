import React,{useState , useEffect } from "react";
import axios from "axios";

import { useAuth } from "contexts/auth";
import useResource from 'hooks/useResource'
// components

import CardManageStaff from "components/Cards/CardManageStaff.js";

// layout for page

import Admin from "layouts/Admin.js";

export default function Tables() {
  const { user, login, logout } = useAuth();
  const { resources, loading, createResource, deleteResource } = useResource();
  // console.log(user);
  
  const [staff, setstaff] = useState([]);
  const baseUrl = 'http://127.0.0.1:8000/';
  const staff_url = baseUrl + 'staff_list2/';

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
      axios.get(staff_url, config).then(res => {
          setstaff(res.data)
          console.log(res.data);
      });
      }

      data();
  }, [])

  console.log('staff id :',staff );
  // const staff2=staff;
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full px-4 mb-12">
          <CardManageStaff 
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
