import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed-top ${isScrolled ? 'header-scrolled' : ''}`}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          {/* Logo */}
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img
              src="Untitled design.png"
              alt="HealthSahayak"
              className="logo-img me-2"
            />
            <span className="brand-text">HealthSahayak</span>
          </Link>

          {/* Mobile Toggle Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation Items */}
          <div className="collapse navbar-collapse justify-content-between" id="navbarContent">
            <ul className="navbar-nav me-auto mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/feature">
                  HealthCare Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blood-bank">
                  <i className="fa-solid fa-droplet" style={{color: '#d51010'}}></i> Available Blood Bank
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
            </ul>

            <div className="d-flex align-items-center">
              <Link to="/signin" className="btn btn-outline-primary">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;