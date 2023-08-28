import { useState } from "react";

const Imc = () => {
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();

  const [bmiResult, setBmiResult] = useState(null);

  const [status, setStatus] = useState("");

  function calculateBMI(e) {
    e.preventDefault();
    let bmi = Number(weight / (height * height)).toFixed(2);
    setBmiResult(bmi);

    let bmiStatus = getStatus(bmi);

    setStatus(bmiStatus);

    setHeight();
    setWeight();
  }

  return (
    <section className="container py-5 imc">
      <div className="containaer-fluid py-5 bg-white shadow">
        <div>
          <h2 className="text-center title fs-4">BMI Calculator</h2>
          <form onSubmit={calculateBMI}>
            <div className="d-flex align-items-center justify-content-center">
              <input
                type="number"
                id="Height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
                className="form-control mt-3 imc__input"
                placeholder="Height in meters"
              />
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <input
                type="number"
                id="Weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
                className="form-control mt-3 imc__input"
                placeholder="Weight in kg"
              />
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <button className="btn btn-primary mt-4" type="submit">
                Calculate BMI
              </button>
            </div>
            {bmiResult && (
              <div className="text-center mt-4">
                <p className="fs-5">Your BMI Result: {bmiResult} </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Imc;
