import Main from "../UI/Main";
import React from "react";

import AdminBar from "./AdminBar";
import AdminCom1 from "./AdminCom1";
import AdminCom2 from "./AdminCom2";
import AdminCom3 from "./AdminCom3";
import AdminCom4 from "./AdminCom4";
function Insight() {
  return (
    <Main>
      <AdminBar>
        <div className="">
          <span class="span__class">5000</span>
          <li>Total Patients</li>
        </div>
        <div className="">
          {" "}
          <span class="span__class">20</span>
          <li>Stuff</li>
        </div>
        <div className="">
          <span class="span__class">400</span>
          <li>Appointments</li>
        </div>
        <div className="">
          <span class="span__class">1000</span>
          <li>Average Cost</li>
        </div>
      </AdminBar>
      <AdminCom1 />
      <AdminCom2 />
      <AdminCom3 />
      <AdminCom4 />
    </Main>
  );
}

export default Insight;
