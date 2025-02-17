import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Ticker.css";

const Ticker = ({
  items = [
    "City Hospital: 5 beds available",
    "Central Medical Center: 3 beds available",
    "St. John's Hospital: 7 beds available",
    "Community Health Center: 2 beds available",
  ],
}) => {
  return (
    <>
      <section className="ticker-section">
        <div className="ticker-container">
          <div className="ticker-content">
            {[...items, ...items].map((item, index) => (
              <span key={index} className="ticker-item">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="container spaced pt-5">
      <div className="row">
        <div className="col-lg-4 d-flex align-items-stretch">
          <div className="content bg-primary text-white p-4 rounded">
            <h4>Why e-BloodBank?</h4>
            <p>
              <i className="fas fa-hand-point-right inline"></i> Workflow-based
              web-enabled service-centric comprehensive IT solution for
              managing processes and services of an individual Blood Bank or
              Blood Bank attached to a Hospital.
            </p>
            <div className="text-center">
              <a href="https://eblood.odisha.gov.in/users/about_us#:~:text=The%20system%20manages%20all%20the,component%20and%20aphaeresis%20blood%20products)." className="more-btn text-white">
                Learn More <i className="fas fa-chevron-right"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-8 d-flex align-items-stretch">
          <div className="icon-boxes d-flex flex-column justify-content-center">
            <div className="row">
              <div className="col-xl-4 d-flex align-items-stretch">
                <div className="icon-box mt-4 mt-xl-0 text-center bg-white p-3 rounded shadow">
                  <i className="fas fa-file-alt pb-1" style={{ fontSize: "30px", color: "#1663c7" }}></i>
                  <h4 className="mb-1">Standards</h4>
                  <p>Adheres to NACO, Drug &amp; Cosmetic Act &amp; NABH Guidelines.</p>
                </div>
              </div>
              <div className="col-xl-4 d-flex align-items-stretch">
                <div className="icon-box mt-4 mt-xl-0 text-center bg-white p-3 rounded shadow">
                  <i className="fas fa-desktop pb-1" style={{ fontSize: "30px", color: "#3080e8" }}></i>
                  <h4 className="mb-1">Dashboard</h4>
                  <p>Different types of dashboards for decision making.</p>
                </div>
              </div>
              <div className="col-xl-4 d-flex align-items-stretch">
                <div className="icon-box mt-4 mt-xl-0 text-center bg-white p-3 rounded shadow">
                  <i className="fas fa-tools pb-1" style={{ fontSize: "30px", color: "#3080e8" }}></i>
                  <h4 className="mb-1">Device Integration</h4>
                  <p>Biometric, Lab Analyzer, RFID.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
export default Ticker;
