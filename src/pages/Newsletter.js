import Button from "../components/Button";
import "./main.css";
import { FaCheckSquare } from "react-icons/fa";
const Newsletter = () => {
  return (
    <section className="container pb-5 newsletter">
      <div className="containaer-fluid rounded py-5 bg-white shadow px-5">
        <h3 className="display-5 title">About Fitness Gym</h3>
        <p className="about__description pt-1" style={{ color: "black" }}>
          We are a company that seeks to improve the quality of life of our
          clients, for this we have excellent teachers and dynamic classes to
          help you achieve your best physical condition. Fill your life with
          energy and motivation. Exceed your limits with training programs
          designed by professionals, according to your goals. We offer:
        </p>
        <ul className="text-white">
          <li className="pt-1" style={{ color: "black" }}>
            {" "}
            <FaCheckSquare className="me-1 about__icon" />
            How to support your immune system.
          </li>
          <li className="pt-1" style={{ color: "black" }}>
            {" "}
            <FaCheckSquare className="me-1 about__icon" />
            An exercise guide.
          </li>
          <li className="pt-1" style={{ color: "black" }}>
            {" "}
            <FaCheckSquare className="me-1 about__icon" />
            Drinks and meals with a large contribution of protein.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Newsletter;
