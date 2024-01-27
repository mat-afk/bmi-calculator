import { data } from "./data/data.js";
import { useState } from "react";

import BMICalculator from "./components/BMICalculator";
import BMIResults from "./components/BMIResults";

import "./App.css";

function App() {
  const [bmi, setBmi] = useState("");
  const [classification, setClassification] = useState("");
  const [classificationClass, setClassificationClass] = useState("");

  const calculateBMI = (e, height, weight) => {
    e.preventDefault();

    if (!height || !weight) return;

    const heightValue = height.replace(",", ".");
    const weightValue = weight.replace(",", ".");

    setBmi((weightValue / (heightValue * heightValue)).toFixed(1));
  };

  return (
    <div className="container">
      {!bmi ? <BMICalculator calculateBMI={calculateBMI} /> : <BMIResults data={data} />}
    </div>
  );
}

export default App;
