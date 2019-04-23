import React from "react";
import "./Display.css";

const CalculatorDisplay = props => {
  return (
    <div className="calc-display">
      <h1>{props.text}</h1>
    </div>
  );
};

export default CalculatorDisplay;
