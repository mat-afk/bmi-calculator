import "./BMIResults.css";
import Button from "./Button";

const BMIResults = ({ data }) => {
  return (
    <div id="results-container">
      <p id="bmi-number">
        Your BMI: <span></span>
      </p>
      <p id="bmi-classification">
        Current situation: <span></span>
      </p>
      <h3>Check out the table:</h3>
      <div id="bmi-table">
        <div className="table-header">
          <h4>BMI</h4>
          <h4>Classification</h4>
          <h4>Obesity</h4>
        </div>
        {data.map((item) => (
          <div className="table-data" key={item.classificationClass}>
            <p>{item.range}</p>
            <p>{item.classification}</p>
            <p>{item.obesityLevel}</p>
          </div>
        ))}
      </div>
      <Button id="back-btn" text="Back" action={handleBackAction} />
    </div>
  );
};

export default BMIResults;
