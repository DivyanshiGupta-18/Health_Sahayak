import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5 mt-5">
      <div className="container">
        <div className="row justify-content-between mb-4">
          <div className="col-md-3">
            <div className="d-flex align-items-center mb-3">
            <img
              src="Untitled design.png"
              alt="HealthSahayak"
              className="logo-img me-2"
            />
              {/* <i className="fa-solid fa-house-medical fs-1 me-2 text-white"></i> */}
              <p className="mb-0 fs-5">HealthSahayak</p>
            </div>
            <p>healthsahayak123@gmail.com</p>
            <p>Panipat, Haryana</p>
          </div>
          <div className="col-md-2">
            <h3 className="text-white">About Us</h3>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Blog</a></li>
              <li><a href="#" className="text-white text-decoration-none">Facility</a></li>
              <li><a href="#" className="text-white text-decoration-none">Returns</a></li>
              <li><a href="#" className="text-white text-decoration-none">FAQs</a></li>
              <li><a href="#" className="text-white text-decoration-none">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="col-md-2">
            <h3 className="text-white">Services</h3>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Doctor Consultation</a></li>
              <li><a href="#" className="text-white text-decoration-none">Health Program</a></li>
              <li><a href="#" className="text-white text-decoration-none">Reversal Program</a></li>
              <li><a href="#" className="text-white text-decoration-none">More +</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4 className="text-white">Subscribe</h4>
            <h4><a href="#" className="text-white text-decoration-none">for more updates</a></h4>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="form-control rounded-pill"
              style={{ height: '57px', width: '204px' }}
              required
            />
          </div>
        </div>
        <div className="text-center">
          <span>
          ""Every life matters , Every moment counts.""
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
