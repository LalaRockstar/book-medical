import React from "react";
import styles from "../Assets/css/Nav.module.css";

function Nav(props) {
  return <div className={styles.main__bar}>{props.children}</div>;
}

export default Nav;
