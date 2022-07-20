import React from "react";
import { Link } from "react-router-dom";
import styles from "../Assets/css/SubBar.module.css";
function SubBar() {
  return (
    <div className={styles.sub__menu}>
      <div className={styles.logo}>
        <h3>LOGO</h3>
      </div>
      <div className={styles.lists}>
        {" "}
        <li className={styles.list}>
          <Link to="#">Home</Link>
        </li>
        <li className={styles.list}>
          <Link to="#">Services</Link>
        </li>
        <li className={styles.list}>
          <Link to="#">About Us</Link>
        </li>
        <li className={styles.list}>
          <Link to="#">Contact Us</Link>
        </li>
        <li className={styles.list}>
          <Link to="/admin">Login</Link>
        </li>
      </div>
    </div>
  );
}

export default SubBar;
