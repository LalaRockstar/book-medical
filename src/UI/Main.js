import React from "react";
import style from "../Assets/css/Main.module.css";

function Main(props) {
  return (
    <>
      <div className={style.main}>{props.children}</div>
    </>
  );
}

export default Main;
