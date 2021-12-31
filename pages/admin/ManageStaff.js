import React from "react";

// components

import CardManageStaff from "components/Cards/CardManageStaff.js";

// layout for page

import Admin from "layouts/Admin.js";

export default function Tables() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full px-4 mb-12">
          <CardManageStaff />
        </div>
        {/* <div className="w-full px-4 mb-12">
          <CardTable color="dark" />
        </div> */}
      </div>
    </>
  );
}

Tables.layout = Admin;
