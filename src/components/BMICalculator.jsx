import "./BMICalculator.css";

const BMICalculator = () => {
  return (
    <div id="calculation-container">
      <h2>BMI calculator</h2>
      <form id="bmi-form">
        <div className="form-inputs">
          <div className="form-control">
            <label htmlFor="height">Height:</label>
            <input
              type="text"
              id="height"
              name="height"
              placeholder="e.g. 1.75"
            />
          </div>
          <div className="form-control">
            <label htmlFor="weight">Weight:</label>
            <input
              type="text"
              id="weight"
              name="weight"
              placeholder="e.g. 70.5"
            />
          </div>
        </div>
        <div className="action-control">
            <button>Calculate</button>
            <button>Reset</button>
        </div>
      </form>
    </div>
  );
};

export default BMICalculator;
