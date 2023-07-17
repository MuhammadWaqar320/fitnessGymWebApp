import PropTypes from 'prop-types';
import { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../actions/alert';
import { register } from '../actions/auth';
import './main.css';


const Register = ({ setAlert, register, isAuthenticated }) => {

    const [formData, setFormData] = useState({
        name: '',
        lastname: '',
        email: '',
        phone: '',
        password: '',
        password2: ''
    });

    const { name, lastname, email, phone, password, password2 } = formData;

    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        if (password !== password2) {
            setAlert('Password do not match', 'danger');
        } else {
            register({ name, lastname, email, phone, password });
        }
    };

    if (isAuthenticated) {
        return <Redirect to='/profile' />;
    }


    return (
      <section className="container-fluid register py-4">
        <div className="container shadow p-5 register__form" style={{borderRadius:'20px'}}>
          <div className="text-center" >
            <Link to="/" className="register__logo">
            Well Come To  Fitness Gym
            </Link>
          </div>
          <h1
            className=" title my-4 text-center"
            style={{ fontFamily: "initial", fontWeight: "bold" }}
          >
            Registration
          </h1>
          <form className="row g-5" onSubmit={(e) => onSubmit(e)}>
            <div className="col-md-6">
              <label className="form-label fs-5" style={{ color: "black" }}>
                Name
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={name}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label fs-5" style={{ color: "black" }}>
                Surname
              </label>
              <input
                type="text"
                className="form-control"
                name="lastname"
                value={lastname}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label fs-5" style={{ color: "black" }}>
                Email
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={email}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label fs-5" style={{ color: "black" }}>
                Phone No.
              </label>
              <input
                type="tel"
                className="form-control"
                name="phone"
                value={phone}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label fs-5" style={{ color: "black" }}>
                Password
              </label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={password}
                onChange={(e) => onChange(e)}
                minlenght="6"
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label fs-5" style={{ color: "black" }}>
                Address
              </label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={password}
                onChange={(e) => onChange(e)}
                minlenght="6"
                required
              />
            </div>
            <div className="d-grid gap-2 col-4 mx-auto">
              <button type="submit" className="btn btn-primary">
                Register Now
              </button>
            </div>
          </form>
        </div>
      </section>
    );
};

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(
    mapStateToProps,
    { setAlert, register }
)(Register)