import React from "react";
import classes from "./Buttons.module.css";

function Buttons({ value, handler }) {
  const getButtonClass = () => {
    if (value === "=") {
      return `${classes.calcButtons} ${classes.equal}`;
    } else if (value === "C" || value === "DEL") {
      return `${classes.calcButtons} ${classes.clear}`;
    } else if (["+", "-", "x", "/", "%"].includes(value)) {
      return `${classes.calcButtons} ${classes.operator}`;
    }
    return classes.calcButtons;
  };

  return (
    <button className={getButtonClass()} onClick={() => handler(value)}>
      {value}
    </button>
  );
}

export default Buttons;
