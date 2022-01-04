import React,{useState , useEffect } from "react";
import axios from "axios";

// components

import CardAddStudents from "components/Cards/CardAddStudents";
// import CardProfile from "components/Cards/CardProfile.js";

// layout for page

import Admin from "layouts/Admin.js";

export default function Settings() {
  const baseUrl = 'http://127.0.0.1:8000/';
  const student_url = baseUrl + 'student_list2/';
  const [LatestAnswer,setLatestAnswer] = useState({})
  
  const formHandler = async (e) => {
    e.preventDefault();
    console.log(baseUrl);

    // id = models.AutoField(primary_key=True)
    // username = models.TextField(default="", null=True, blank=True)
    // password = models.TextField(default="", null=True, blank=True)
    // first_name = models.CharField(max_length=265)
    // last_name = models.CharField(max_length=265)
    // address = models.TextField(default="", null=True, blank=True)
    // email = models.EmailField(max_length=20)
    // session_year = models.DateField 
    // course = models.TextField(default="", null=True, blank=True)
    // gender = models.CharField(max_length=200, choices=gender_choices, default='male')
    // profile_pic=models.FileField(default=False)
    let answer = {
        username:e.target.username.value,
        password:e.target.password.value,
        first_name:e.target.first_name.value,
        last_name:e.target.last_name.value,
        address:e.target.address.value,
        email:e.target.email.value,
        session_year : e.target.session_year.value,
        gender : e.target.gender.value,
        // profile_pic : e.target.profile_pic.value
        
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

  const formName = "Add Student"
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4 lg:w-8/12">
          <CardAddStudents 
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
