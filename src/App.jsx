import { data } from "./data/data.js";
import { useState } from "react";

import BMICalculator from "./components/BMICalculator";
import BMIResults from "./components/BMIResults";

import "./App.css";

function App() {
  const [bmi, setBmi] = useState("");
  const [classification, setClassification] = useState("");
  const [classificationClass, setClassificationClass] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();
    console.log("calculateBMI");
  };

  return (
    <div className="container">
      {!bmi ? (
        <BMICalculator calculateFunction={calculateBMI} />
      ) : (
        <BMIResults />
      )}
    </div>
  );
}

export default App;
