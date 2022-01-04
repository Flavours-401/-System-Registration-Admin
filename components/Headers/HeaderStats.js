import React, { useState, useEffect } from "react";
import axios from 'axios'

// components

import CardStats from "components/Cards/CardStats.js";


const baseUrl = 'http://127.0.0.1:8000/';
const staff_url = baseUrl + 'staff_list/';
const student_url = baseUrl + 'student_list/';
const course_url = baseUrl + 'course_list/';
const subject_url = baseUrl + 'subject_list/';
const attedance_url = baseUrl + 'attedance_report_list/';

export default function HeaderStats() {
  const [staff, setstaff] = useState([]);
  const [student, setstudent] = useState([]);
  const [course, setcourse] = useState([]);
  const [subject, setsubject] = useState([]);
  const [attedance, setattedance] = useState([]);




  useEffect(() => {
    const tokenLocal = localStorage.getItem("token")

    const localTwo = JSON.parse(tokenLocal)

    console.log("LS token: ", localTwo.token.access);
    const config = {
      headers: { "Authorization": `Bearer ${localTwo.token.access}` }
    }
    let callAxios = async () => {
      const result = await axios.get(staff_url, config)
      const user_orders = await axios.get(student_url, config)
      const user_details = await axios.get(course_url, config)
      const subjects_data = await axios.get(subject_url, config)
      const attedance_data = await axios.get(attedance_url, config)


      setstaff(result.data)
      setstudent(user_orders.data)
      setcourse(user_details.data)
      setsubject(subjects_data.data)
      setattedance(attedance_data.data)


    }
    callAxios()
  }, [])
  console.log(attedance);
  const staff_num = staff.length
  const student_num = student.length
  const course_num = course.length
  const subject_num = subject.length
  const courses_count = []
  const course_names = course.map(item => {
    return item.course_name
  })
  function countUnique(iterable) {
    return new Set(iterable).size;
  }
  const subject_names = subject.map(item => {
    return item.subject_name
  })

  console.log(countUnique(course_names));
  var unique_courses = new Array(countUnique(course_names)).fill(1)
  var unique_subjects = new Array(countUnique(subject_names)).fill(1)
  console.log(unique_subjects);

  const attends = attedance.filter(item => {
    
    if(item.status){
      return item
    }
  })

  const leaves = attedance.filter(item => {
    if(!item.status){
      return item
    }
    
  })
  console.log("attendance: ", attends)
  console.log("leaves: ", leaves)



  const total_student = 500
  const total_staff = 50
  const total_courses = 4
  const total_subjects = 8
  return (
    <>
      {/* Header */}
      <div className="relative pt-12 pb-32 bg-blueGray-800 md:pt-32">
        <div className="w-full px-4 mx-auto md:px-10">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full px-4 lg:w-6/12 xl:w-3/12">
                <CardStats
                  statSubtitle="Total Students"
                  statTitle={student_num}
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full px-4 lg:w-6/12 xl:w-3/12">
                <CardStats
                  statSubtitle="Total Staff"
                  statTitle={staff_num}
                  statIconName="fas fa-chart-pie"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full px-4 lg:w-6/12 xl:w-3/12">
                <CardStats
                  statSubtitle="Total Courses"
                  statTitle={course_num}
                  statIconName="fas fa-users"
                  statIconColor="bg-pink-500"
                />
              </div>
              <div className="w-full px-4 lg:w-6/12 xl:w-3/12">
                <CardStats
                  statSubtitle="Total Subjects"
                  statTitle={subject_num}
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
