import React from "react";
import styles from "../Assets/css/AdminUi.module.css";

function AdminUi(props) {
  return <div className={styles.admin__ui}>{props.children}</div>;
}

export default AdminUi;
