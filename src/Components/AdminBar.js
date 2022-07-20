import React from "react";
import styles from "../Assets/css/Admin.module.css";
function AdminBar(props) {
  return <div className={styles.admin__bar}>{props.children}</div>;
}

export default AdminBar;
