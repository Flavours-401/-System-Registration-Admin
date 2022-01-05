import React, { useState, useEffect } from "react";
import axios from 'axios'

// components

import CardLineChart from "components/Cards/CardLineChart.js";
import StaffChart from "components/Cards/StaffAttendanceLeave.js";
import StudentChart from "components/Cards/StudentAttendanceLeave.js";
// import CardPageVisits from "components/Cards/CardPageVisits.js";
// import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";
import CardPieChart from "components/Cards/CardPieChart.js";
// import CardPieChart1 from "components/Cards/CardPieChart1.js";

// layout for page

import Admin from "layouts/Admin.js";

const baseUrl = 'http://127.0.0.1:8000/';
const staff_url = baseUrl + 'staff_list2/';
const student_url = baseUrl + 'student_list2/';
const course_url = baseUrl + 'course_list2/';
const subject_url = baseUrl + 'subject_list2/';
const attedance_url = baseUrl + 'attedance_report_list/';





export default function Dashboard() {
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




  const staff_labels = [
    'Staff',
    'Student',
  ]
  const datasets_staff = [{
    label: 'My First Dataset',
    data: [staff_num, student_num],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    // hoverOffset: 4
  }]

  const chartLabels_course = course_names
  const datasets_course = [{
    label: 'My First Dataset',
    data: unique_courses,
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    // hoverOffset: 4
  }]
  const chartLabels_subject = subject_names
  const datasets_subject = [{
    label: 'My First Dataset',
    data: unique_subjects,    
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    // hoverOffset: 4
  }]
  

  const pieChartId = "pie-chart-1"
  const pieChartId1 = "pie-chart-2"
  const pieChartId3 = "pie-chart-3"
  // const pieChartId4 = "pie-chart-4"
  const pieChartName1 = "Student VS Staff"
  const pieChartName2 = "Courses"
  const pieChartName3 = "Subjects"

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4 mb-12 xl:w-full xl:mb-0">
          <CardLineChart />
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full px-4 mb-12 xl:w-12/12 xl:mb-0">
          <CardPieChart
            chartName={pieChartName1}
            pieChartId={pieChartId3}
            chartLabels={staff_labels}
            datasets={datasets_staff}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full px-4 mb-12 xl:w-6/12 xl:mb-0">
          <CardPieChart
            chartName={pieChartName2}
            pieChartId={pieChartId}
            chartLabels={chartLabels_course}
            datasets={datasets_course}
          />
        </div>
        <div className="w-full px-4 xl:w-6/12">
          <CardPieChart
            chartName={pieChartName3}
            pieChartId={pieChartId1}
            chartLabels={chartLabels_subject}
            datasets={datasets_subject}
          />
        </div>
      </div>

      <div className="flex flex-wrap">
        <div className="w-full px-4 mb-12 xl:w-full xl:mb-0">
          <StaffChart
          attends={attends}
          leaves={leaves}
          />
        </div>
        {/* <div className="w-full px-4 xl:w-6/12">
          <StudentChart />
        </div> */}
      </div>

      {/* <div className="flex flex-wrap mt-4">    
        <div className="w-full px-4 mb-12 xl:w-8/12 xl:mb-0">
          <CardPageVisits />
        </div>
        <div className="w-full px-4 xl:w-4/12">
          <CardSocialTraffic />
        </div>

      </div> */}
    </>
  );
}

Dashboard.layout = Admin;
