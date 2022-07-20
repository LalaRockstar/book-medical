import React from "react";
import styles from "../Assets/css/Admin.module.css";
import { Link } from "react-router-dom";

function PatientList() {
  return (
    <div className={styles.patient__appointment}>
      <div className={styles.patient__app__list}>
        <span>1</span>
        <span>Ramen</span>
        <span>Male</span>
        <span>6003840878</span>
        <span>22/03/20022</span>
        <div>
          <button className={styles.report__btn}>
            <Link to="">Report</Link>
          </button>
        </div>
      </div>
      <div className={styles.patient__app__list}>
        <span>2</span>
        <span>Mina</span>
        <span>Female</span>
        <span>6003840878</span>
        <span>22/03/20022</span>
        <div>
          <button className={styles.report__btn}>
            <Link to="">Report</Link>
          </button>
        </div>
      </div>
      <div className={styles.patient__app__list}>
        <span>3</span>
        <span>Rima</span>
        <span>Female</span>
        <span>6003840878</span>
        <span>22/03/20022</span>
        <div>
          <button className={styles.report__btn}>
            <Link to="">Report</Link>
          </button>
        </div>
      </div>
      <div className={styles.patient__app__list}>
        <span>4</span>
        <span>Rima</span>
        <span>Female</span>
        <span>6003840878</span>
        <span>22/03/20022</span>
        <div>
          <button className={styles.report__btn}>
            <Link to="">Report</Link>
          </button>
        </div>
      </div>
      <div className={styles.patient__app__list}>
        <span>5</span>
        <span>Rima</span>
        <span>Female</span>
        <span>6003840878</span>
        <span>22/03/20022</span>
        <div>
          <button className={styles.report__btn}>
            <Link to="">Report</Link>
          </button>
        </div>
      </div>
      <div className={styles.patient__app__list}>
        <span>6</span>
        <span>Rima</span>
        <span>Female</span>
        <span>6003840878</span>
        <span>22/03/20022</span>
        <div>
          <button className={styles.report__btn}>
            <Link to="">Report</Link>
          </button>
        </div>
      </div>
      <div className={styles.patient__app__list}>
        <span>7</span>
        <span>Hari</span>
        <span>Female</span>
        <span>6003840878</span>
        <span>22/03/20022</span>
        <div>
          <button className={styles.report__btn}>
            <Link to="">Report</Link>
          </button>
        </div>
      </div>
      <div className={styles.patient__app__list}>
        <span>8</span>
        <span>Sanju</span>
        <span>Male</span>
        <span>6003840878</span>
        <span>22/03/20022</span>
        <div>
          <button className={styles.report__btn}>
            <Link to="">Report</Link>
          </button>
        </div>
      </div>
      <div className={styles.patient__app__list}>
        <span>9</span>
        <span>Kuldip</span>
        <span>Male</span>
        <span>6003840878</span>
        <span>22/03/20022</span>
        <div>
          <button className={styles.report__btn}>
            <Link to="">Report</Link>
          </button>
        </div>
      </div>
      <div className={styles.patient__app__list}>
        <span>10</span>
        <span>Sima</span>
        <span>Female</span>
        <span>6003840878</span>
        <span>22/03/20022</span>
        <div>
          <button className={styles.report__btn}>
            <Link to="">Report</Link>
          </button>
        </div>
      </div>
      <div className={styles.patient__app__list}>
        <span>11</span>
        <span>Pinky</span>
        <span>Female</span>
        <span>6003840878</span>
        <span>22/03/20022</span>
        <div>
          <button className={styles.report__btn}>
            <Link to="">Report</Link>
          </button>
        </div>
      </div>
      <div className={styles.patient__app__list}>
        <span>12</span>
        <span>Paban</span>
        <span>Female</span>
        <span>6003840878</span>
        <span>22/03/20022</span>
        <div>
          <button className={styles.report__btn}>
            <Link to="">Report</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PatientList;
