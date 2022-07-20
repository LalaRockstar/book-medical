import React from "react";
import Main from "../UI/Main";
import AdminBar from "./AdminBar";

import PatientList from "./PatientList";

function TodayAppointments() {
  return (
    <Main>
      <AdminBar>
        <li>Name</li>
        <li>Gender</li>
        <li>Phone</li>
        <li>Date</li>
        <li>Action</li>
      </AdminBar>
      <PatientList></PatientList>
    </Main>
  );
}

export default TodayAppointments;
