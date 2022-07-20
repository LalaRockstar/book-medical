import React from "react";
import { Link } from "react-router-dom";
import Insight from "../Components/Insight";
import TodayAppointments from "../Components/TodayAppointments";

import { Routes, Route } from "react-router-dom";
import Nav from "../UI/Nav";
import Sidebar from "../UI/Sidebar";
import SidebarData from "../UI/SidebarData";

import Report from "../Components/Report";
import Pescrption from "../Components/Pescrption";

function Admin() {
  return (
    <div className="admin__container">
      <Nav>
        <li>Logo</li>
        <li>
          <Link to="/">Logout</Link>
        </li>
      </Nav>

      <Sidebar>
        <SidebarData>
          <li className="list">
            <Link to="insight">Dashboard</Link>
          </li>
          <li className="list">
            <Link to="today-appointments">Appointments</Link>
          </li>
          <li className="list">
            <Link to="report">Report</Link>
          </li>
          <li className="list">
            <Link to="pescription">Pescription</Link>
          </li>
        </SidebarData>
      </Sidebar>

      <Routes>
        <Route index path="insight" element={<Insight />} />
        <Route path="today-appointments" element={<TodayAppointments />} />
        <Route path="report" element={<Report />} />
        <Route path="pescription" element={<Pescrption />} />
      </Routes>
    </div>
  );
}

export default Admin;
