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

    const bmiResult = (weightValue / (heightValue * heightValue)).toFixed(1);

    data.forEach((item) => {
      if (bmiResult >= item.min && bmiResult <= item.max) {
        setClassification(item.classification);
        setClassificationClass(item.classificationClass);
      }
    });

    setBmi(bmiResult);
  };

  return (
    <div className="container">
      {!bmi ? (
        <BMICalculator calculateBMI={calculateBMI} />
      ) : (
        <BMIResults
          data={data}
          bmi={bmi}
          classification={classification}
          classificationClass={classificationClass}
        />
      )}
    </div>
  );
}

export default App;
