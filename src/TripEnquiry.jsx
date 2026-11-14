
import { useState } from 'react'
import './TripEnquiry.css'

function TripEnquiry() {
  const [trip, setTrip] = useState({
    destination: '',
    date: '',
    city: '',
    adults: '2',
    children: '0',
    infants: '0',
    name: '',
    phone: '',
    email: ''
  })

  // Today's date for date validation
  const today = new Date()
  const minDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`

  const handleChange = (e) => {
    setTrip({
      ...trip,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const message = `Hello NS TRAILS! I want to plan a trip.

Destination: ${trip.destination}
Travel Date: ${trip.date}
Departure City: ${trip.city}

Adults: ${trip.adults}
Children: ${trip.children}
Infants: ${trip.infants}

Name: ${trip.name}
Phone: ${trip.phone}
Email: ${trip.email}`

    window.open(
      `https://wa.me/917651000109?text=${encodeURIComponent(message)}`,
      '_blank'
    )
  }

  return (
    <section className="trip-enquiry-section" id="custom-trip">
      <div className="container">

        <div className="trip-heading">
          <p>CUSTOMIZE YOUR JOURNEY</p>
          <h2>Plan Your Dream Trip</h2>
          <span>
            Tell us your travel preferences and let us plan the rest.
          </span>
        </div>

        <form className="trip-form" onSubmit={handleSubmit}>
          <div className="row g-4">

            {/* Destination */}
            <div className="col-md-6">
              <label>Choose Destination</label>
              <select
                name="destination"
                className="form-control"
                value={trip.destination}
                onChange={handleChange}
                required
              >
                <option value="">Select Destination</option>
                <option value="Shimla">Shimla</option>
                <option value="Kashmir">Kashmir</option>
                <option value="Kullu Manali">Kullu Manali</option>
                <option value="Ladakh">Ladakh</option>
                <option value="Bali">Bali</option>
                <option value="Kerala">Kerala</option>
              </select>
            </div>

            {/* Travel Date */}
            <div className="col-md-6">
              <label>Departure Date</label>
              <input
                type="date"
                name="date"
                className="form-control"
                min={minDate}
                value={trip.date}
                onChange={handleChange}
                required
              />
            </div>

            {/* Departure City */}
            <div className="col-md-6">
              <label>Departure City</label>
              <input
                type="text"
                name="city"
                className="form-control"
                placeholder="Your city"
                value={trip.city}
                onChange={handleChange}
                required
              />
            </div>

            {/* Adults */}
            <div className="col-md-2">
              <label>Adults</label>
              <select
                name="adults"
                className="form-control"
                value={trip.adults}
                onChange={handleChange}
              >
                {[1, 2, 3, 4, 5, 6].map(n => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
            </div>

            {/* Children */}
            <div className="col-md-2">
              <label>Children</label>
              <select
                name="children"
                className="form-control"
                value={trip.children}
                onChange={handleChange}
              >
                {[0, 1, 2, 3, 4, 5].map(n => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
            </div>

            {/* Infants */}
            <div className="col-md-2">
              <label>Infants</label>
              <select
                name="infants"
                className="form-control"
                value={trip.infants}
                onChange={handleChange}
              >
                {[0, 1, 2, 3].map(n => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
            </div>

            {/* Name */}
            <div className="col-md-4">
              <label>Your Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter your name"
                value={trip.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Phone */}
            <div className="col-md-4">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                className="form-control"
                placeholder="Enter phone number"
                value={trip.phone}
                onChange={handleChange}
                pattern="[0-9+\-\s()]{10,15}"
                title="Enter a valid phone number"
                required
              />
            </div>

            {/* Email */}
            <div className="col-md-4">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter email"
                value={trip.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Submit */}
            <div className="col-12 text-center">
              <button type="submit" className="trip-submit">
                Submit Trip Enquiry
              </button>
            </div>

          </div>
        </form>
      </div>
    </section>
  )
}

export default TripEnquiry
