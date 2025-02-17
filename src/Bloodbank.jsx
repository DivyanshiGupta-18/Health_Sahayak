import { useState, useEffect } from "react"

export const Bloodbank = ({ isOpen, onClose }) => {
  const [updates, setUpdates] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (isOpen) {
      fetchUpdates()
    }
  }, [isOpen])

  async function fetchUpdates() {
    try {
      setLoading(true)
      setError(null)
      const mockData = generateMockData()
      setUpdates(mockData)
    } catch (err) {
      setError(err.message || "Failed to fetch blood bank updates")
    } finally {
      setLoading(false)
    }
  }

  function generateMockData() {
    const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]
    const locations = ["Central Hospital", "City Medical Center", "Community Blood Bank", "Regional Health Center", "Yashoda Hospital & Research Center", "Vardan Multispecialty Hospital", "Maxwell multi-speciality hospital", "Fortis Hospital Noida"]
    return bloodTypes.map((bloodType) => ({
      bloodType,
      availability: ["Low", "Medium", "High"][Math.floor(Math.random() * 3)],
      lastUpdated: new Date().toISOString(),
      location: locations[Math.floor(Math.random() * locations.length)],
      urgentNeed: Math.random() < 0.2, // 20% chance of urgent need
    }))
  }

  if (!isOpen) return null

  return (
    <div className="mt-4 bg-light rounded p-4 shadow-sm">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fs-3 fw-bold mb-0">Blood Bank Updates</h2>
        <button className="btn btn-close" onClick={onClose} aria-label="Close" />
      </div>

      {loading && (
        <div className="text-center py-4">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      {!loading && !error && updates.length > 0 && (
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Blood Type</th>
                <th>Availability</th>
                <th>Location</th>
                <th>Last Updated</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {updates.map((update, index) => (
                <tr key={index}>
                  <td>{update.bloodType}</td>
                  <td>
                    <span
                      className={`badge bg-${update.availability === "Low" ? "danger" : update.availability === "Medium" ? "warning" : "success"}`}
                    >
                      {update.availability}
                    </span>
                  </td>
                  <td>{update.location}</td>
                  <td>{new Date(update.lastUpdated).toLocaleString()}</td>
                  <td>{update.urgentNeed && <span className="badge bg-danger">Urgent Need</span>}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
};

