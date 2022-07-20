import React from "react";
import { Link } from "react-router-dom";
import AppointmentForm from "../Components/AppointmentForm";
import Main from "../UI/Main";
import Nav from "../UI/Nav";

import Sidebar from "../UI/Sidebar";
import SidebarData from "../UI/SidebarData";

import styles from "../Assets/css/Appointment.module.css";
import PatientList from "../Components/PatientList";

function Appointment() {
  return (
    <div className="admin__container">
      <Nav>
        <li>logo</li>
        <li>
          <Link to="/">Logout</Link>
        </li>
      </Nav>
      <Sidebar>
        <SidebarData>
          <li className="list">
            <Link to="#">Add Appointment</Link>
          </li>
          <li className="list">
            <Link to="#">Appointments</Link>
          </li>
          <li className="list">
            <Link to="#">Reports</Link>
          </li>
          <li className="list">
            <Link to="#">bill</Link>
          </li>
        </SidebarData>
      </Sidebar>
      <Main>
        <div className={styles.appointment__list}>
          <div className="">
            <PatientList></PatientList>
          </div>
        </div>
        <div className={styles.add__appointment}>
          <AppointmentForm />
        </div>
      </Main>
    </div>
  );
}

export default Appointment;
