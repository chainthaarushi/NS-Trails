
import { Link } from 'react-router-dom'
import './PlaceDetails.css'

function PlaceDetails() {
  return (
    <section className="place-details">
      <div className="container text-center py-5">

        <p className="details-label">NS TRAILS</p>

        <h1>Page Not Available</h1>

        <p className="place-description">
          Individual place details are not available.
          Explore our destination packages to plan your journey.
        </p>

        <Link
          to="/destination/shimla"
          className="place-enquiry-btn"
        >
          Explore Shimla Package
        </Link>

        <div className="mt-3">
          <Link to="/" className="back-link">
            ← Back to Home
          </Link>
        </div>

      </div>
    </section>
  )
}

export default PlaceDetails
