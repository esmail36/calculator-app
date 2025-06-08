import React, { useState } from "react";
import classes from "./Home.module.css";
import Buttons from "./Buttons";

function Home() {
  const [result, setResult] = useState("");
  const buttons = [
    "C",
    "DEL",
    "%",
    "/",
    "7",
    "8",
    "9",
    "x",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",
  ];
  return (
    <div className={classes.home}>
      <div className={classes.homeContainer}>
        <div className={classes.result}>
          <div className={classes.resBox}></div>
        </div>
        <div className={classes.btns}>
          {buttons.map((button, index) => {
            return <Buttons key={index} value={button} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
