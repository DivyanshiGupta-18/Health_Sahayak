// import { useState, useEffect } from "react"

// export const HospitalBed = ({ isOpen, onClose }) => {
//   const [hospitals, setHospitals] = useState([])
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState(null)

//   useEffect(() => {
//     if (isOpen) {
//       fetchHospitals()
//     }
//   }, [isOpen])

//   async function fetchHospitals() {
//     try {
//       setLoading(true)
//       setError(null)
//       const response = await fetch("https://www.communitybenefitinsight.org/api/get_hospitals.php?state=NC")
//       //const response = await fetch("https://dshm.delhi.gov.in/mis/(S(tomuwz14idbkdztvl3saef4j))/Private/frmFreeBedMonitoringReport.aspx")

//       if (!response.ok) {
//         throw new Error("Failed to fetch hospital data")
//       }

//       const data = await response.json()
//       setHospitals(data)
//     } catch (err) {
//       setError(err.message || "Failed to fetch hospital data")
//     } finally {
//       setLoading(false)
//     }
//   }

//   if (!isOpen) return null

//   return (
//     <div className="mt-4 bg-light rounded p-4 shadow-sm">
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <h2 className="fs-3 fw-bold mb-0">Hospital Bed Availability</h2>
//         <button className="btn btn-close" onClick={onClose} aria-label="Close" />
//       </div>

//       {loading && (
//         <div className="text-center py-4">
//           <div className="spinner-border text-primary" role="status">
//             <span className="visually-hidden">Loading...</span>
//           </div>
//         </div>
//       )}

//       {error && (
//         <div className="alert alert-danger" role="alert">
//           {error}
//         </div>
//       )}

//       {!loading && !error && hospitals.length > 0 && (
//         <div className="table-responsive">
//           <table className="table table-hover">
//             <thead>
//               <tr>
//                 <th>Hospital Name</th>
//                 <th>Location</th>
//                 <th>Total Beds</th>
//                 <th>County</th>
//               </tr>
//             </thead>
//             <tbody>
//               {hospitals.map((hospital) => (
//                 <tr key={hospital.hospital_id}>
//                   <td>{hospital.name}</td>
//                   <td>{`${hospital.city}, ${hospital.state}`}</td>
//                   <td>{hospital.hospital_bed_count}</td>
//                   <td>{hospital.county}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   )
// }



import { useState, useEffect } from "react"
import "./HospitalBed.css"

const dummyHospitals = [
  {
    hospital_id: 2190,
    name: "Central Hospital",
    city: "New Delhi",
    state: "Delhi",
    hospital_bed_count: 250,
    zip_code: 110018,
    county: "India",
  },
  {
    hospital_id: 5120,
    name: "Mercy Medical Center",
    city: "Ghaziabad NCR Region",
    state: "Uttar Pradesh",
    hospital_bed_count: 280,
    zip_code: "201002",
    county: "India",
  },
  {
    hospital_id: 2510,
    name: "Yashoda Super Speciality Hospital",
    city: "Vasundhara Sector 15",
    state: "Uttar Pradesh",
    hospital_bed_count: 200,
    zip_code: "201002",
    county: "India",
  },
  {
    hospital_id: 1563,
    name: "Max Super Speciality Hospital",
    city: "Saket, New Delhi",
    state: "Delhi",
    hospital_bed_count: 350,
    zip_code: "110017",
    county: "India",
  },
  {
    hospital_id: 4651,
    name: "Yatharth Super Speciality Hospital",
    city: "Plot No. 1, Lotus Panache, Sector 110, Noida ",
    state: "Uttar Pradesh",
    hospital_bed_count: 120,
    zip_code: "201304",
    county: "India",
  },
  {
    hospital_id: 2195,
    name: "Shuddhi Hiims Ayurvedic Clinics and Hospitals",
    city: "Plot B-26, Rohtak Road,New Multan Nagar",
    state: "Delhi",
    hospital_bed_count: 302,
    zip_code: "110056",
    county: "India",
  },
  {
    hospital_id: 3124,
    name: "Shree Krishna Hospital",
    city: "62, near Police Chowki, Block B, Surya Vihar, Sector 4, Gurugram",
    state: "Haryana",
    hospital_bed_count: 254,
    zip_code: "122001",
    county: "India",
  },
  {
    hospital_id: 5468,
    name: "AROGAYA HOSPITAL",
    city: "SEC G-3, GREATER NOIDA WEST,, GAUTAM BUDH NAGAR, noida extension, Greater Noida",
    state: "Uttar Pradesh",
    hospital_bed_count: 442,
    zip_code: "201308",
    county: "India",
  },
  {
    hospital_id: 5342,
    name: "GMS Hospital",
    city: "Ravli Rd, near BSNL Telephone Exchange, Muradnagar, Sarna Murad Nagar",
    state: "Uttar Pradesh",
    hospital_bed_count: 531,
    zip_code: "201206",
    county: "India",
  },
  {
    hospital_id: 4665,
    name: "Prakash Hospital",
    city: "D-12, 12A,12B, next to ISKCON Mandir, Block D, Sector 33, Noida",
    state: "Uttar Pradesh",
    hospital_bed_count: 450,
    zip_code: "201301",
    county: "India",
  },
]

export const HospitalBed = ({ isOpen, onClose }) => {
  const [hospitals, setHospitals] = useState(dummyHospitals)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (isOpen) {
      fetchHospitals()
    }
  }, [isOpen])

  async function fetchHospitals() {
    // Simulating API call with dummy data
    setLoading(true)
    setError(null)

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setHospitals(dummyHospitals)
    } catch (err) {
      setError("Failed to fetch hospital data")
    } finally {
      setLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="hospital-bed">
      <div className="header">
        <h2>Hospital Bed Availability</h2>
        <button onClick={onClose} aria-label="Close">
          &times;
        </button>
      </div>

      {loading && (
        <div className="loading">
          <div className="spinner"></div>
          <span>Loading...</span>
        </div>
      )}

      {error && (
        <div className="error" role="alert">
          {error}
        </div>
      )}

      {!loading && !error && hospitals.length > 0 && (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Hospital Name</th>
                <th>Location</th>
                <th>Total Beds</th>
                <th>Zip Code</th>
                <th>County</th> 
              </tr>
            </thead>
            <tbody>
              {hospitals.map((hospital) => (
                <tr key={hospital.hospital_id}>
                  <td>{hospital.name}</td>
                  <td>{`${hospital.city}, ${hospital.state}`}</td>
                  <td>{hospital.hospital_bed_count}</td>
                  <td>{hospital.zip_code}</td>
                  <td>{hospital.county}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

