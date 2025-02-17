import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  return (
    <div className="min-vh-100">
      {/* Header Section */}
      <header className="bg-primary text-white py-5 text-center mt-5">
        <h1 className="display-4 fw-bold">About Health Sahayak</h1>
        <p className="lead">Your Partner in Real-Time Health Care Services</p>
      </header>

      {/* Mission Section */}
      <section className="bg-white py-5">
        <div className="container">
          <h2 className="text-primary text-center mb-4">Our Mission</h2>
          <p className="text-center mx-auto" style={{ maxWidth: '800px' }}>
          At Health Sahayak, we're on a mission to revolutionize healthcare accessibility. By providing real-time information on hospital bed availability, emergency services, and blood bank updates, we bridge the gap between patients and healthcare providers, ensuring that quality care is just a click away.
          </p>
        </div>
      </section>

      {/* Founders Section */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-primary text-center mb-5">Meet Our Founders</h2>
          <div className="row justify-content-center">
            {/* Founder 1 */}
            <div className="col-md-5 mb-4">
              <div className="card h-100 shadow">
                <div className="text-center pt-4">
                  <img 
                    src="Divyanshi.jpeg"
                    alt="Divyanshi"
                    className="rounded-circle mb-3"
                    style={{ width: '128px', height: '128px', objectFit: 'cover' }}
                  />
                </div>
                <div className="card-body text-center">
                  <h3 className="card-title">Divyanshi Gupta</h3>
                  <p className="card-text">
                    Divyanshi Gupta contributed significantly to the development of the frontend of website by working collaboratively with the team to create an intuitive and engaging user experience.
                  </p>
                </div>
              </div>
            </div>

            {/* Founder 2 */}
            <div className="col-md-5 mb-4">
              <div className="card h-100 shadow">
                <div className="text-center pt-4">
                  <img 
                    src="Advay.jpeg"
                    alt="Advay"
                    className="rounded-circle mb-3"
                    style={{ width: '128px', height: '128px', objectFit: 'cover' }}
                  />
                </div>
                <div className="card-body text-center">
                  <h3 className="card-title">Advay Anand</h3>
                  <p className="card-text">
                  Advay Anand has shown exceptional dedication by developing a database that provides users with hospital details and by working on integrating APIs. His innovative solutions and technical skills have been pivotal to the development of our website.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="bg-white py-5">
        <div className="container">
          <h2 className="text-primary text-center mb-4">Your Feedback Matters</h2>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card shadow">
                <div className="card-body">
                  <form>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">Name</label>
                      <input type="text" className="form-control" id="name" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Rating</label>
                      <div className="d-flex gap-5 fs-4">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button 
                            key={star} 
                            type="button"
                            className="btn btn-link text-decoration-none p-0 text-warning"
                          >
                            ★
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="comments" className="form-label">Comments</label>
                      <textarea className="form-control" id="comments" rows="4"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                      Submit Feedback
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
};

export default About;



// import React, { useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './About.css';

// const About = () => {
//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('animate-in');
//         }
//       });
//     });

//     document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div className="min-vh-100">
//       {/* Header Section */}
//       <header className="bg-primary text-white py-5 text-center mt-5 animate-on-scroll fade-in">
//         <h1 className="display-4 fw-bold">About Health Sahayak</h1>
//         <p className="lead">Your Partner in Real-Time Health Care Services</p>
//       </header>

//       {/* Mission Section */}
//       <section className="bg-white py-5">
//         <div className="container animate-on-scroll slide-in-right">
//           <h2 className="text-primary text-center mb-4">Our Mission</h2>
//           <p className="text-center mx-auto" style={{ maxWidth: '800px' }}>
//             At Health Sahayak, we're on a mission to revolutionize healthcare accessibility. By
//             providing real-time information on hospital bed availability and emergency services,
//             we bridge the gap between patients and healthcare providers, ensuring that quality
//             care is just a click away.
//           </p>
//         </div>
//       </section>

//       {/* Founders Section */}
//       <section className="bg-light py-5">
//         <div className="container">
//           <h2 className="text-primary text-center mb-5 animate-on-scroll fade-in">Meet Our Founders</h2>
//           <div className="row justify-content-center">
//             {/* Founder 1 */}
//             <div className="col-md-3 mb-4">
//               <div className="founder-card card h-100 shadow">
//                 <div className="founder-content">
//                   <div className="founder-front text-center pt-4">
//                     <img 
//                       src="Divyanshi.jpeg"
//                       alt="Divyanshi"
//                       className="rounded-circle mb-3"
//                       style={{ width: '128px', height: '128px', objectFit: 'cover' }}
//                     />
//                     <h3 className="card-title">Divyanshi Gupta</h3>
//                   </div>
//                   <div className="founder-back">
//                     <p className="card-text">
//                       Divyanshi Gupta contributed significantly to the development of the frontend of website by working collaboratively with the team to create an intuitive and engaging user experience.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Founder 2 */}
//             <div className="col-md-3 mb-4">
//               <div className="founder-card card h-100 shadow">
//                 <div className="founder-content">
//                   <div className="founder-front text-center pt-4">
//                     <img 
//                       src="Advay.jpeg"
//                       alt="Advay"
//                       className="rounded-circle mb-3"
//                       style={{ width: '128px', height: '128px', objectFit: 'cover' }}
//                     />
//                     <h3 className="card-title">Advay Anand</h3>
//                   </div>
//                   <div className="founder-back">
//                     <p className="card-text">
//                       Advay Anand has shown exceptional dedication by developing a database that provides users with hospital details and by working on integrating APIs. His innovative solutions and technical skills have been pivotal to the development of our website.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Feedback Section */}
//       {/* Feedback Section */}
// <section className="bg-white py-5 feedback-section">
//   <div className="container">
//     <h2 className="text-primary text-center m-5 animate-on-scroll fade-in">Your Feedback Matters</h2>
//     <div className="row justify-content-center">
//       <div className="col-md-8">
//         <div className="card shadow animate-on-scroll slide-in-left">
//           <div className="card-body">
//             <form className="feedback-form">
//               <div className="mb-3 input-group-animation">
//                 <label htmlFor="name" className="form-label">Name</label>
//                 <input type="text" className="form-control" id="name" />
//               </div>
//               <div className="mb-3 input-group-animation">
//                 <label htmlFor="email" className="form-label">Email</label>
//                 <input type="email" className="form-control" id="email" />
//               </div>
//               <div className="mb-3">
//                 <label className="form-label">Rating</label>
//                 <div className="d-flex gap-5 fs-4">
//                   {[1, 2, 3, 4, 5].map((star) => (
//                     <button 
//                       key={star} 
//                       type="button"
//                       className="btn btn-link text-decoration-none p-0 text-warning star-button"
//                     >
//                       ★
//                     </button>
//                   ))}
//                 </div>
//               </div>
//               <div className="mb-3 input-group-animation">
//                 <label htmlFor="comments" className="form-label">Comments</label>
//                 <textarea className="form-control" id="comments" rows="4"></textarea>
//               </div>
//               <button type="submit" className="btn btn-primary w-100 submit-button">
//                 Submit Feedback
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>

//       {/* Footer */}
//       <footer className="bg-dark text-white py-5 mt-5">
//         <div className="container animate-on-scroll fade-in">
//           <div className="row justify-content-between mb-4">
//             <div className="col-md-3">
//               <div className="d-flex align-items-center mb-3">
//                 <img
//                   src="Untitled design.png"
//                   alt="HealthSahayak"
//                   className="logo-img me-2"
//                 />
//                 <p className="mb-0 fs-5">HealthSahayak</p>
//               </div>
//               <p>healthsahayak123@gmail.com</p>
//               <p>Panipat, Haryana</p>
//             </div>
//             <div className="col-md-2">
//               <h3 className="text-white">About Us</h3>
//               <ul className="list-unstyled">
//                 <li><a href="#" className="text-white text-decoration-none">Blog</a></li>
//                 <li><a href="#" className="text-white text-decoration-none">Facility</a></li>
//                 <li><a href="#" className="text-white text-decoration-none">Returns</a></li>
//                 <li><a href="#" className="text-white text-decoration-none">FAQs</a></li>
//                 <li><a href="#" className="text-white text-decoration-none">Privacy Policy</a></li>
//               </ul>
//             </div>
//             <div className="col-md-2">
//               <h3 className="text-white">Services</h3>
//               <ul className="list-unstyled">
//                 <li><a href="#" className="text-white text-decoration-none">Doctor Consultation</a></li>
//                 <li><a href="#" className="text-white text-decoration-none">Health Program</a></li>
//                 <li><a href="#" className="text-white text-decoration-none">Reversal Program</a></li>
//                 <li><a href="#" className="text-white text-decoration-none">More +</a></li>
//               </ul>
//             </div>
//             <div className="col-md-3">
//               <h4 className="text-white">Subscribe</h4>
//               <h4><a href="#" className="text-white text-decoration-none">for more updates</a></h4>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 className="form-control rounded-pill"
//                 style={{ height: '57px', width: '204px' }}
//                 required
//               />
//             </div>
//           </div>
//           <div className="text-center">
//             <span>
//               "Every life matters, Every moment counts."
//             </span>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default About;