// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch, faMapMarkerAlt, faPhone, faWhatsapp } from '@fortawesome/free-solid-svg-icons';

// const MaxHealthcarePage = () => {
//   return (
//     <div className="container-fluid p-0">
//       {/* Announcement Bar */}
//       <div className="bg-primary text-white text-center py-3">
//         <h5 className="m-0">Jaypee Hospital, Noida is now Max Super Speciality Hospital <span>&gt;</span></h5>
//       </div>

//       {/* Top Info Bar */}
//       <div className="bg-info text-white py-2">
//         <div className="container d-flex flex-wrap justify-content-between align-items-center">
//           <div className="d-flex flex-wrap">
//             <a href="#" className="text-white me-4">Find a Doctor</a>
//             <a href="#" className="text-white me-4">Blogs</a>
//             <a href="#" className="text-white me-4">My Reports</a>
//             <a href="#" className="text-white me-4">Investors</a>
//             <a href="#" className="text-white me-4">Research</a>
//             <a href="#" className="text-white me-4">CSR</a>
//             <a href="#" className="text-white me-4">Contact Us</a>
//           </div>
//           <div className="d-flex align-items-center">
//             <a href="#" className="text-white me-3">
//               <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp Us
//             </a>
//             <a href="tel:+919268880303" className="text-white">
//               <FontAwesomeIcon icon={faPhone} /> +91 926 888 0303 (24/7)
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Main Navbar */}
//       <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm">
//         <div className="container">
//           <a className="navbar-brand" href="#">
//             <img src="https://www.maxhealthcare.in/img/logo.png" alt="Max Healthcare" height="60" />
//           </a>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav ms-auto">
//               <li className="nav-item dropdown">
//                 <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
//                   Hospitals
//                 </a>
//               </li>
//               <li className="nav-item dropdown">
//                 <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
//                   Treatments
//                 </a>
//               </li>
//               <li className="nav-item dropdown">
//                 <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
//                   Services
//                 </a>
//               </li>
//               <li className="nav-item dropdown">
//                 <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
//                   Academics
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">International Patients</a>
//               </li>
//               <li className="nav-item dropdown">
//                 <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
//                   Quick Enquiry
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">
//                   <FontAwesomeIcon icon={faSearch} />
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>

//       {/* Emergency Button */}
//       <div className="position-fixed start-0 top-50 translate-middle-y">
//         <button className="btn btn-danger rounded-0 py-1 px-2 d-flex flex-column">
//           <span className="fw-bold">E</span>
//           <span className="fw-bold">M</span>
//           <span className="fw-bold">E</span>
//           <span className="fw-bold">R</span>
//           <span className="fw-bold">G</span>
//           <span className="fw-bold">E</span>
//           <span className="fw-bold">N</span>
//           <span className="fw-bold">C</span>
//           <span className="fw-bold">Y</span>
//         </button>
//       </div>

//       {/* Main Content - Book an Appointment */}
//       <div className="bg-primary text-white py-5">
//         <div className="container text-center py-4">
//           <h1 className="display-4 mb-5">Book an Appointment</h1>
          
//           <div className="row justify-content-center">
//             <div className="col-lg-10">
//               <div className="bg-white p-4 rounded shadow">
//                 <div className="row g-3">
//                   <div className="col-md-5">
//                     <div className="input-group">
//                       <span className="input-group-text bg-white border-end-0">
//                         <FontAwesomeIcon icon={faSearch} className="text-primary" />
//                       </span>
//                       <input type="text" className="form-control border-start-0" placeholder="Search for Doctor or Speciality" />
//                     </div>
//                   </div>
//                   <div className="col-md-5">
//                     <div className="input-group">
//                       <span className="input-group-text bg-white border-end-0">
//                         <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary" />
//                       </span>
//                       <select className="form-select border-start-0">
//                         <option selected>Select Location</option>
//                         <option>Delhi</option>
//                         <option>Noida</option>
//                         <option>Gurgaon</option>
//                         <option>Mumbai</option>
//                       </select>
//                     </div>
//                   </div>
//                   <div className="col-md-2">
//                     <button className="btn btn-primary w-100 py-2">Book an Appointment</button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="bg-dark text-white pt-5 pb-3">
//         <div className="container">
//           <div className="row g-4">
//             {/* Column 1 */}
//             <div className="col-lg-3 col-md-6">
//               <h5 className="mb-4">For Patients</h5>
//               <ul className="list-unstyled">
//                 <li className="mb-2"><a href="#" className="text-white-50">Find a Doctor</a></li>
//                 <li className="mb-2"><a href="#" className="text-white-50">Book an Appointment</a></li>
//                 <li className="mb-2"><a href="#" className="text-white-50">Video Consultation</a></li>
//                 <li className="mb-2"><a href="#" className="text-white-50">Health Checkup</a></li>
//                 <li className="mb-2"><a href="#" className="text-white-50">International Patients</a></li>
//               </ul>
//             </div>

//             {/* Column 2 */}
//             <div className="col-lg-3 col-md-6">
//               <h5 className="mb-4">Academics</h5>
//               <ul className="list-unstyled">
//                 <li className="mb-2"><a href="#" className="text-white-50">Academics</a></li>
//                 <li className="mb-2"><a href="#" className="text-white-50">Academics - Doctors</a></li>
//                 <li className="mb-2"><a href="#" className="text-white-50">Academics - Nursing</a></li>
//                 <li className="mb-2"><a href="#" className="text-white-50">Academics - Allied</a></li>
//                 <li className="mb-2"><a href="#" className="text-white-50">Academics - Students</a></li>
//               </ul>
//             </div>

//             {/* Column 3 */}
//             <div className="col-lg-3 col-md-6">
//               <h5 className="mb-4">Centres of Excellence</h5>
//               <ul className="list-unstyled">
//                 <li className="mb-2"><a href="#" className="text-white-50">Cancer Care / Oncology</a></li>
//                 <li className="mb-2"><a href="#" className="text-white-50">Cardiac Sciences</a></li>
//                 <li className="mb-2"><a href="#" className="text-white-50">Neurosciences</a></li>
//                 <li className="mb-2"><a href="#" className="text-white-50">Orthopedics</a></li>
//                 <li className="mb-2"><a href="#" className="text-white-50">Transplants</a></li>
//               </ul>
//             </div>

//             {/* Column 4 */}
//             <div className="col-lg-3 col-md-6">
//               <h5 className="mb-4">Top Procedures</h5>
//               <ul className="list-unstyled">
//                 <li className="mb-2"><a href="#" className="text-white-50">CAR T-Cell Therapy</a></li>
//                 <li className="mb-2"><a href="#" className="text-white-50">Chemotherapy</a></li>
//                 <li className="mb-2"><a href="#" className="text-white-50">Kidney Transplant</a></li>
//                 <li className="mb-2"><a href="#" className="text-white-50">Liver Transplant</a></li>
//                 <li className="mb-2"><a href="#" className="text-white-50">Heart Transplant</a></li>
//               </ul>
//             </div>
//           </div>

//           <hr className="my-4 bg-secondary" />

//           <div className="row align-items-center">
//             <div className="col-md-6">
//               <p className="mb-0">&copy; 2025 Max Healthcare. All Rights Reserved.</p>
//             </div>
//             <div className="col-md-6 text-md-end">
//               <div className="d-flex justify-content-md-end">
//                 <a href="#" className="btn btn-outline-light me-2">
//                   <FontAwesomeIcon icon={faPhone} /> +91 926 888 0303
//                 </a>
//                 <a href="#" className="btn btn-outline-light me-2">About us</a>
//                 <a href="#" className="btn btn-outline-light">Leadership</a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default MaxHealthcarePage;


import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"

export const Appointment = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    speciality: "",
    preferredDate: "",
    preferredTime: "",
    message: ""
  })

  const [submitted, setSubmitted] = useState(false)

  const specialities = [
    "General Medicine",
    "Cardiology",
    "Neurology",
    "Orthopedics",
    "Pediatrics",
    "Gynecology",
    "Dermatology",
    "Ophthalmology",
    "ENT",
    "Psychiatry",
    "Dental",
    "Other"
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Appointment booked:", formData)
    setSubmitted(true)
    // In a real app, you would send this data to your backend here
  }

  const resetForm = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      speciality: "",
      preferredDate: "",
      preferredTime: "",
      message: ""
    })
    setSubmitted(false)
  }

  if (!isOpen) return null

  return (
    <div className="modal d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title">Book Your Appointment</h5>
            <button type="button" className="btn-close btn-close-white" onClick={onClose} aria-label="Close"></button>
          </div>
          <div className="modal-body p-4">
            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Full Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Phone Number</label>
                      <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        pattern="[0-9]{10}"
                        title="Please enter a valid 10-digit phone number"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Speciality</label>
                  <select
                    className="form-select"
                    name="speciality"
                    value={formData.speciality}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select speciality</option>
                    {specialities.map((spec, index) => (
                      <option key={index} value={spec}>{spec}</option>
                    ))}
                  </select>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Preferred Date</label>
                      <input
                        type="date"
                        className="form-control"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Preferred Time</label>
                      <select
                        className="form-select"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select preferred time</option>
                        <option value="Morning (9AM - 12PM)">Morning (9AM - 12PM)</option>
                        <option value="Afternoon (12PM - 3PM)">Afternoon (12PM - 3PM)</option>
                        <option value="Evening (3PM - 6PM)">Evening (3PM - 6PM)</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label">Additional Information (Optional)</label>
                  <textarea
                    className="form-control"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Enter any additional information about your appointment"
                  ></textarea>
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Book Appointment
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-4">
                <div className="mb-4">
                  <span className="text-success display-1">✓</span>
                </div>
                <h3 className="mb-3">Appointment Booked Successfully!</h3>
                <p className="mb-4">
                  Thank you for booking an appointment with us. We have sent a confirmation to your email and SMS with all the details.
                  Our team will contact you shortly to confirm your appointment time.
                </p>
                <button className="btn btn-primary" onClick={resetForm}>
                  Book Another Appointment
                </button>
              </div>
            )}
          </div>
          <div className="modal-footer border-0 pt-0">
            {!submitted && (
              <button type="button" className="btn btn-outline-secondary" onClick={onClose}>
                Cancel
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}