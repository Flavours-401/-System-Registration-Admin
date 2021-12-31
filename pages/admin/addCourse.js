import React from "react";

// components

import CardAddCourse from "components/Cards/CardAddCourse";
// import CardProfile from "components/Cards/CardProfile.js";

// layout for page

import Admin from "layouts/Admin.js";

export default function Settings() {
  const formName = "Add Course"
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4 lg:w-8/12">
          <CardAddCourse 
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
