import { FaFacebookSquare, FaInstagram } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './main.css'
const Footer = () => {
    return (
      <footer className="footer font-small text-white pt-4">
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <h5 className="fs-6">
                ©2023 FIT_INN-Health & Fitness Studio Management System. All
                rights reserved.
              </h5>
            </div>
            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="fs-6">Quick</h5>
              <ul className="list-unstyled">
                <li>
                  <Link to="/" className="footer-link">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="footer-link">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="footer-link">
                    Services
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 mb-md-0 mb-3 footer__icons">
              <a
                href="https://www.facebook.com/"
                rel="noreferrer"
                target="_blank"
                className="footer__icon"
              >
                <FaFacebookSquare />
              </a>
              <a
                href="https://www.instagram.com/"
                rel="noreferrer"
                target="_blank"
                className="footer__icon"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
}

export default Footer