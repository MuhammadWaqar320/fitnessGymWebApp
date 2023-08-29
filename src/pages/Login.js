import PropTypes from "prop-types";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link, Redirect } from "react-router-dom";
import "./main.css";
import { auth } from "../firebaseConfig";
import Navbar from "../components/Navbar";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {
  getDocs,
  collection,
  doc,
  deleteDoc,
  addDoc,
} from "firebase/firestore";
import { db } from "../firebaseConfig";
const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [role, setRole] = useState("Admin");
  const { email, password } = formData;
  const history = useHistory();
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (role === "Admin") {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Handle successful sign-in
          const user = userCredential.user;
          if (user?.accessToken) {
            localStorage.setItem("token", user.accessToken);
            localStorage.setItem("email", user.email);
            history.push("/admin");
          }
        })
        .catch((error) => {
          // Handle sign-in error
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error("Sign-in error:", errorCode, errorMessage);
          window.alert("Invalid credentials");
        });
    } else if (role === "Trainer") {
      const trainerColllecitonRef = collection(db, "trainer");
      const data = await getDocs(trainerColllecitonRef);
      let filterData = [];
      data.docs.forEach((doc) => {
        if (doc.data().email === email && doc.data().password === password) {
          filterData.push({
            ...doc.data(),
            id: doc.id,
          });
        }
      });
      if (filterData.length > 0) {
        const user = filterData[0];
        localStorage.setItem(
          "token",
          "sldkfl45sl0sk2" + user.email + "sfljk4234kl234sl234kj"
        );
        localStorage.setItem("email", user.email);
        localStorage.setItem("id", user.id);
        history.push("/trainerpanel");
      } else {
        window.alert("Invalid credentials");
      }
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/profile" />;
  }
  console.log("role", role);
  return (
    <section style={{ background: "#1d0e15" }}>
      <Navbar />
      <div className="container w-75 my-5 shadow" style={{ padding: "40px" }}>
        <div className="row align-items-stretch">
          <div
            className="col bg-white"
            style={{
              borderRadius: "20px",
              paddingLeft: "20px",
              paddingRight: "20px",
            }}
          >
            <div
              className="text-center pt-3"
              style={{ fontFamily: "initial", fontWeight: "bold" }}
            >
              <Link to="/" className="login__logo">
                FIT_INN
              </Link>
            </div>
            <h1
              className="fs-4 title text-center py-4"
              style={{ fontFamily: "initial", fontWeight: "bold" }}
            >
              Log in
            </h1>
            <form onSubmit={(e) => onSubmit(e)}>
              <div className="mb-3 py-4">
                <label className="form-label fs-5 contact-label">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                  value={email}
                  onChange={(e) => onChange(e)}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label fs-5 contact-label">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="form-control"
                  id="exampleInputPassword1"
                  name="password"
                  value={password}
                  onChange={(e) => onChange(e)}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label fs-5 contact-label">
                  Login As
                </label>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios1"
                    value="Admin"
                    onChange={(e) => setRole(e.target.value)}
                    checked={role === "Admin"}
                  />
                  <label class="form-check-label" for="exampleRadios1">
                    A Admin
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios2"
                    value="Trainer"
                    checked={role === "Trainer"}
                    onChange={(e) => setRole(e.target.value)}
                  />
                  <label class="form-check-label" for="exampleRadios2">
                    A Trainer
                  </label>
                </div>
              </div>
              <div className="text-center d-grid gap-2 col-6 mx-auto py-3">
                <button type="submit" className="btn login__btn btn-primary">
                  Log In
                </button>
              </div>
            </form>
          </div>
          <div className="col login__bg d-none d-lg-block col-md-5 col-lg-5 col-xl-6 login"></div>
        </div>
      </div>
    </section>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default Login;
