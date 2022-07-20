import React from "react";
import styles from "../Assets/css/Appointment.module.css";

function AppointmentForm() {
  return (
    <div className={styles.container}>
      <h3>BOOK APPOINTMENT</h3>
      <form>
        <div className={styles.form__box}>
          <div className={styles.form__group}>
            <label>Name</label>
            <input className={styles.form__control} type="text" />
          </div>
          <div className={styles.form__group}>
            <label>Date</label>
            <input className={styles.form__control} type="date" />
          </div>
          <div className={styles.form__group}>
            <label>Gender</label>

            <select className={styles.form__control} name="cars">
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className={styles.form__group}>
            <label>Phone</label>
            <input className={styles.form__control} type="number" />
          </div>
          <div>
            <button className={styles.btn}>Book</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AppointmentForm;
