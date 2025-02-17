import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

export const EmergencyServices = ({ isOpen, onClose }) => {
  const emergencyContacts = [
    {
      name: "Ambulance Services",
      number: "102",
      description: "For medical emergencies requiring immediate transport",
      icon: "🚑"
    },
    {
      name: "National Emergency Helpline",
      number: "112",
      description: "Unified emergency response number for all emergencies",
      icon: "☎️"
    },
    {
      name: "Fire Emergency",
      number: "101",
      description: "For fire-related emergencies",
      icon: "🚒"
    },
    {
      name: "Police Helpline",
      number: "100",
      description: "For security and law enforcement emergencies",
      icon: "👮"
    },
    {
      name: "Women Helpline",
      number: "1091",
      description: "Emergency assistance for women in distress",
      icon: "👩"
    },
    {
      name: "Child Helpline",
      number: "1098",
      description: "Emergency assistance for children in need",
      icon: "👶"
    }
  ]

  const nearbyHospitals = [
    {
      name: "City General Hospital",
      address: "123 Health Avenue, City Center",
      contact: "+91 98765 43210",
      emergency: true,
      distance: "2.5 km"
    },
    {
      name: "Max Super Speciality Hospital",
      address: "45 Medical Street, Sector 19",
      contact: "+91 91234 56789",
      emergency: true,
      distance: "3.8 km"
    },
    {
      name: "Apollo Hospitals",
      address: "789 Care Road, Sector 28",
      contact: "+91 87654 32109",
      emergency: true,
      distance: "4.2 km"
    }
  ]

  const handleCallEmergency = (number) => {
    // In a real app, this would initiate a phone call
    console.log(`Calling emergency number: ${number}`)
    window.location.href = `tel:${number}`
  }

  if (!isOpen) return null

  return (
    <div className="modal d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header bg-danger text-white">
            <h5 className="modal-title">
              <span className="me-2">🚨</span>
              Emergency Services Contact
            </h5>
            <button type="button" className="btn-close btn-close-white" onClick={onClose} aria-label="Close"></button>
          </div>
          <div className="modal-body p-4">
            <div className="alert alert-danger mb-4" role="alert">
              <div className="d-flex align-items-center">
                <span className="fs-4 me-3">⚠️</span>
                <div>
                  <h5 className="alert-heading mb-1">Important Note</h5>
                  <p className="mb-0">
                    If you are experiencing a life-threatening emergency, please dial 102 for an ambulance
                    or go to your nearest emergency room immediately.
                  </p>
                </div>
              </div>
            </div>

            <h4 className="mb-3">Emergency Helplines</h4>
            <div className="row row-cols-1 row-cols-md-2 g-3 mb-4">
              {emergencyContacts.map((contact, index) => (
                <div className="col" key={index}>
                  <div className="card h-100 border-danger">
                    <div className="card-body">
                      <div className="d-flex align-items-center mb-3">
                        <span className="fs-1 me-3">{contact.icon}</span>
                        <div>
                          <h5 className="card-title mb-0">{contact.name}</h5>
                          <h3 className="text-danger mb-0">{contact.number}</h3>
                        </div>
                      </div>
                      <p className="card-text">{contact.description}</p>
                      <button 
                        className="btn btn-danger w-100"
                        onClick={() => handleCallEmergency(contact.number)}
                      >
                        Call Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h4 className="mb-3">Nearby Emergency Hospitals</h4>
            <ul className="list-group mb-4">
              {nearbyHospitals.map((hospital, index) => (
                <li key={index} className="list-group-item border-end-0 border-start-0">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h5 className="mb-1">{hospital.name} {hospital.emergency && <span className="badge bg-danger ms-2">24/7 Emergency</span>}</h5>
                      <p className="text-muted mb-1">{hospital.address}</p>
                      <small className="d-block mb-2">Distance: {hospital.distance}</small>
                    </div>
                    <button 
                      className="btn btn-outline-primary ms-3"
                      onClick={() => window.location.href = `tel:${hospital.contact.replace(/\s/g, '')}`}
                    >
                      📞 Call
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="card bg-light mb-0">
              <div className="card-body">
                <h5 className="card-title">Your Location</h5>
                <p className="card-text">We can help you find the nearest emergency services based on your location.</p>
                <button className="btn btn-primary">
                  📍 Share My Location
                </button>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}