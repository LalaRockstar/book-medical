import React from "react";
import styles from "../Assets/css/SidebarData.module.css";
function SidebarData(props) {
  return <div className={styles.sidebar__data}>{props.children}</div>;
}

export default SidebarData;
