import { FaCheck, FaTimes } from "react-icons/fa";
import RModal from "../components/ModalCom";
import React, { useState } from "react";
const Plans = () => {
  const [show, setShow] = useState(false);
  return (
    <section className="container my-5 py-5">
      <div className="text-center mb-3">
        <span className="title">Choose A Plan</span>
        <h3 className="text-white">Find A Perfect Plan</h3>
      </div>
      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
        <div className="col">
          <div className="card mb-4 shadow-sm">
            <div className="card-header py-3">
              <h4 className="my-0 fw-normal">Plan Basic</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                50$<small className="text-muted fw-light">/month</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li className="d-flex align-items-center justify-content-center">
                  <FaCheck className="me-1 plans__icon" />
                  Personal trainer
                </li>
                <li className="d-flex align-items-center justify-content-center">
                  <FaCheck className="me-1 plans__icon" />
                  Classes per week
                </li>
                <li className="d-flex align-items-center justify-content-center">
                  <FaCheck className="me-1 plans__icon" />
                  Access to the gym
                </li>
                <li className="d-flex align-items-center justify-content-center">
                  <FaTimes className="me-1 plans__icon" />
                  Protein powder
                </li>
                <li className="d-flex align-items-center justify-content-center">
                  <FaTimes className="me-1 plans__icon" />
                  Personalized sessions
                </li>
              </ul>
              <button
                type="button"
                className="w-100 btn btn-lg btn-primary"
                onClick={() => setShow(true)}
              >
                More Info
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-4 shadow-sm">
            <div className="card-header py-3">
              <h4 className="my-0 fw-normal">Plan Premium</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                70$<small className="text-muted fw-light">/month</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li className="d-flex align-items-center justify-content-center">
                  <FaCheck className="me-1 plans__icon" />
                  Personal trainer
                </li>
                <li className="d-flex align-items-center justify-content-center">
                  <FaCheck className="me-1 plans__icon" />
                  Classes per week
                </li>
                <li className="d-flex align-items-center justify-content-center">
                  <FaCheck className="me-1 plans__icon" />
                  Access to the gym
                </li>
                <li className="d-flex align-items-center justify-content-center">
                  <FaCheck className="me-1 plans__icon" />
                  Protein powder
                </li>
                <li className="d-flex align-items-center justify-content-center">
                  <FaTimes className="me-1 plans__icon" />
                  Personalized sessions
                </li>
              </ul>
              <button
                type="button"
                className="w-100 btn btn-lg btn-primary"
                onClick={() => setShow(true)}
              >
                More Info
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-4 shadow-sm">
            <div className="card-header py-3">
              <h4 className="my-0 fw-normal">Plan Definitive</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                100$<small className="text-muted fw-light">/month</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li className="d-flex align-items-center justify-content-center">
                  <FaCheck className="me-1 plans__icon" />
                  Personal trainer
                </li>
                <li className="d-flex align-items-center justify-content-center">
                  <FaCheck className="me-1 plans__icon" />
                  Classes per week
                </li>
                <li className="d-flex align-items-center justify-content-center">
                  <FaCheck className="me-1 plans__icon" />
                  Access to the gym
                </li>
                <li className="d-flex align-items-center justify-content-center">
                  <FaCheck className="me-1 plans__icon" />
                  Protein powder
                </li>
                <li className="d-flex align-items-center justify-content-center">
                  <FaCheck className="me-1 plans__icon" />
                  Personalized sessions
                </li>
              </ul>
              <button
                type="button"
                className="w-100 btn btn-lg btn-primary"
                onClick={() => setShow(true)}
              >
                More Info
              </button>
            </div>
          </div>
        </div>
      </div>
      <RModal show={show} setShow={setShow} />
    </section>
  );
};

export default Plans;
