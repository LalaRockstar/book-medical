import React from "react";
import Main from "../UI/Main";
import styles from "../Assets/css/Admin.module.css";
import AdminBar from "./AdminBar";

function Report() {
  return (
    <Main>
      <AdminBar>Patient's reports shown below</AdminBar>
      <div className={styles.patient__appointment}>
        <h1>...Coming Soon...</h1>
      </div>
    </Main>
  );
}

export default Report;
