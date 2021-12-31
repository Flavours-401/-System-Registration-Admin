import React from "react";

// components

import CardAddSubject from "components/Cards/CardAddSubject";
// import CardProfile from "components/Cards/CardProfile.js";

// layout for page

import Admin from "layouts/Admin.js";

export default function Settings() {
  const formName = "Add Subject"
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4 lg:w-8/12">
          <CardAddSubject
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
