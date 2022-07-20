import React from "react";

import styles from "../Assets/css/Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="container">
      <div className={styles.header}>
        <div className={styles.text__box}>
          <h1 className={styles.text__1}>Stay conscious about your health</h1>
          <span className={styles.text__2}>We are here to serve you</span>
          <div>
            <button className={styles.btn}>
              <Link to="/appointment">Book an appointment</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
