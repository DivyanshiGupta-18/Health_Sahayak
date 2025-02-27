import React from "react";
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { HospitalBed } from "./HospitalBed";
import { Bloodbank } from "./Bloodbank";
import { Appointment } from "./Appointment";
import { EmergencyServices } from "./EmergencyServices";

const FeaturesSection = () => {
  const features = [
    {
      title: "Real-time Hospital Bed Availability",
      description:
        "Get up-to-the-minute information on available beds in your area. Our system provides real-time updates from partner hospitals, ensuring you have the most current information when you need it most. Track availability across different departments and specialties.",
      image: "https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2020/08/07/Pictures/noida-covid-hospital_3fb50948-d8a4-11ea-a06f-e722baeaa470.jpg",
      icon: "🛏️",
      path: "/hospital-beds", // Add path for navigation
    },
    {
      title: "Quick Emergency Services Contact",
      description:
        "Connect with emergency services at the touch of a button. Our platform ensures rapid response times by directly connecting you with the nearest available emergency services. Get immediate assistance when every second counts.",
      image:
        "https://static.vecteezy.com/system/resources/previews/051/571/864/non_2x/medical-service-man-with-work-hat-and-red-jacket-and-side-promotion-campaign-standing-in-front-of-car-with-call-number-for-quick-response-call-vector.jpg",
      icon: "🚑",
      path: "/emergency-services", // Add path for navigation
    },
    {
      title: "Real-time Blood Bank Updates",
      description:
        "Get instant information on blood availability for different blood groups in your area. Stay informed about blood donation camps and emergency requirements. Our network connects multiple blood banks to ensure critical needs are met quickly.",
      image: "https://www.liveBloodbank.co.in/images/slider/slide%202.jpg",
      icon: "🩸",
      path: "/blood-bank", // Add path for navigation
    },
    {
      title: "Appointment Booking",
      description:
        "Schedule appointments with top healthcare providers effortlessly. Our smart booking system helps you find the right specialist and convenient time slots. Manage your appointments and get timely reminders for better healthcare management.",
      image: "https://mobisoftinfotech.com/resources/wp-content/uploads/2018/07/Banner-1.png",
      icon: "📅",
      path: "/appointment", // Add path for navigation
    },
  ];

  const navigate = useNavigate(); // Hook for navigation

  const imageHoverStyle = {
    transition: "transform 0.5s ease",
    transform: "scale(1)",
  };

  const imageHoveredStyle = {
    transform: "scale(1.1)",
  };

  const handleFeatureClick = (path) => {
    navigate(path); // Navigate to the specified path
  };

  return (
    <>
    <div className="py-5 py-md-8 mt-3">
      <div className="container">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`row align-items-center mb-5 ${
              index % 2 === 0 ? "" : "flex-row-reverse"
            }`}
          >
            <div className="col-12 col-lg-6 mb-4 mb-lg-0">
              <div
                className="position-relative rounded overflow-hidden shadow-sm cursor-pointer"
                style={{ height: "350px" }}
                onClick={() => handleFeatureClick(feature.path)}
              >
                <img
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  className="w-100 h-100"
                  style={{
                    objectFit: "cover",
                    ...imageHoverStyle,
                  }}
                />
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div
                className="d-flex align-items-center mb-3 cursor-pointer"
                onClick={() => handleFeatureClick(feature.path)}
              >
                <span className="fs-1 text-primary me-3">{feature.icon}</span>
                <h3 className="fs-3 align-item-center fw-bold text-primary mb-0">
                  {feature.title}
                </h3>
              </div>
              <p
                style={{
                  color: "#4b5563",
                  lineHeight: "1.8",
                  fontSize: "1.1rem",
                  marginTop: "1.5rem",
                }}
              >
                {feature.description}
              </p>
              <button
                className="btn btn-primary mt-3 px-4 py-2"
                onClick={() => handleFeatureClick(feature.path)}
                style={{
                  borderRadius: "25px",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "none";
                }}
              >
                Click Here →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>

    <Routes>
     <Route path="/hospital-beds" element={<HospitalBed />} />
     <Route path="/blood-bank" element={<Bloodbank />} />
     <Route path="/appointment" element={<Appointment />} />
     <Route path="/emergency-services" element={<EmergencyServices />} />
     </Routes>
            </>
  );
};

export default FeaturesSection;