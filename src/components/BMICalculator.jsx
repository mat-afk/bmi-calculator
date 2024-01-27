import { useState } from "react";

import Button from "./Button";

import "./BMICalculator.css";

const BMICalculator = ({ calculateFunction }) => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const resetForm = (e) => {
    e.preventDefault();
    setHeight("");
    setWeight("");
  };

  const replaceInvalidDigits = (input) => {
    return input.replace(/[^0-9.,]/g, "");
  };

  const handleInputChange = (e, setter) => {
    const validInput = replaceInvalidDigits(e.target.value);
    setter(validInput);
  };

  return (
    <div id="calculation-container">
      <h2>BMI Calculator</h2>
      <form id="bmi-form">
        <div className="form-inputs">
          <div className="form-control">
            <label htmlFor="height">Height:</label>
            <input
              type="text"
              id="height"
              name="height"
              placeholder="e.g. 1.75"
              onChange={(e) => handleInputChange(e, setHeight)}
              value={height}
            />
          </div>
          <div className="form-control">
            <label htmlFor="weight">Weight:</label>
            <input
              type="text"
              id="weight"
              name="weight"
              placeholder="e.g. 70.5"
              onChange={(e) => handleInputChange(e, setWeight)}
              value={weight}
            />
          </div>
        </div>
        <div className="action-control">
          <Button id="calculate-btn" text="Calculate" action={calculateFunction} />
          <Button id="reset-btn" text="Reset" action={resetForm} />
        </div>
      </form>
    </div>
  );
};

export default BMICalculator;
