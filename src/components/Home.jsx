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

  const findValue = () => {
    try {
      // Replace 'x' with '*' for multiplication
      let expression = result.replace(/x/g, "*");

      // Check for division by zero
      if (expression.includes("/0")) {
        setResult("Cannot divide by zero");
        return;
      }

      // Evaluate the expression
      let res = Function("return " + expression)();

      // Handle Infinity and very large numbers
      if (!isFinite(res)) {
        setResult("Result too large");
        return;
      }

      // Format the result to avoid too many decimal places
      if (Number.isInteger(res)) {
        setResult(res.toString());
      } else {
        setResult(parseFloat(res.toFixed(8)).toString());
      }
    } catch (error) {
      setResult("Error");
    }
  };

  const handler = (value) => {
    if (
      ["Cannot divide by zero", "Error", "Result too large"].includes(result)
    ) {
      if (value === "C" || value === "DEL") {
        setResult("");
      }
      return;
    }

    if (value === "C") {
      setResult("");
    } else if (value === "DEL") {
      setResult(result.slice(0, -1));
    } else if (value === "=") {
      findValue();
    } else {
      setResult(result.concat(value));
    }
  };

  return (
    <div className={classes.home}>
      <div className={classes.homeContainer}>
        <div className={classes.result}>
          <div className={classes.resBox}>{result}</div>
        </div>
        <div className={classes.btns}>
          {buttons.map((button, index) => {
            return <Buttons key={index} value={button} handler={handler} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
