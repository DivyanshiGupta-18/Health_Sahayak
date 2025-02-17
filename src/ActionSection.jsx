import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ActionSection.css';

const CTASection = () => {
  const handleDownload = (e) => {
    e.preventDefault();
    console.log('Downloading emergency guide...');
  };

  return (
    <section className="cta-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h2 className="mb-4">Take Control of Your Health</h2>
            <div className="cta-buttons">
              <a 
                href="/register" 
                className="btn cta-btn me-3 mb-3 mb-md-0"
              >
                Sign Up for Health Benefits
              </a>
              <a 
                href="#" 
                className="btn cta-btn"
                onClick={handleDownload}
              >
                Download our Emergency Guide
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;