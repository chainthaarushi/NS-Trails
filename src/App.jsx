
import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import DestinationDetails from './DestinationDetails.jsx'
import Contact from './contact.jsx'
import TripEnquiry from './TripEnquiry.jsx'
import OfficeLocation from './OfficeLocation.jsx'
import Footer from './Footer.jsx'
import WhatsAppButton from './WhatsAppButton.jsx'

const destinations = [
  {
    name: 'Shimla',
    slug: 'shimla',
    country: 'Himachal Pradesh, India',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=700',
    price: '₹8,999'
  },
  {
    name: 'Kashmir',
    slug: 'kashmir',
    country: 'Jammu & Kashmir, India',
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=700',
    price: '₹18,999'
  },
  {
    name: 'Kullu Manali',
    slug: 'kullu-manali',
    country: 'Himachal Pradesh, India',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=700',
    price: '₹12,999'
  },
  {
    name: 'Ladakh',
    slug: 'ladakh',
    country: 'Ladakh, India',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=700',
    price: '₹29,999'
  },
  {
    name: 'Bali',
    slug: 'bali',
    country: 'Indonesia',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=700',
    price: '₹49,999'
  },
  {
    name: 'Kerala',
    slug: 'kerala',
    country: 'India',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=700',
    price: '₹16,999'
  }
]

function HomePage() {
  const [search, setSearch] = useState('')
  const [date, setDate] = useState('')
  const [travellers, setTravellers] = useState('2')

  const filteredDestinations = destinations.filter((place) =>
    place.name.toLowerCase().includes(search.toLowerCase())
  )

  const handleSearch = () => {
    document.getElementById('destinations')?.scrollIntoView({
      behavior: 'smooth'
    })
  }

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
        <div className="container">

          <Link className="navbar-brand brand-logo" to="/">
            NS <span>TRAILS</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav ms-auto align-items-lg-center">

              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/#destinations">
                  Destinations
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/#about">
                  About Us
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/#contact">
                  Contact
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/#custom-trip">
                  Plan Your Trip
                </a>
              </li>

              <li className="nav-item ms-lg-3">
                <a className="btn nav-book-btn" href="/#destinations">
                  Explore Trips
                </a>
              </li>

            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="container hero-content">

            <p className="hero-small">
              DISCOVER THE BEAUTY OF THE WORLD
            </p>

            <h1>
              Your Journey,<br />
              Our <span>Passion.</span>
            </h1>

            <p className="hero-description">
              Explore beautiful destinations, discover new experiences
              and create memories that last forever.
            </p>

            <div className="search-box">

              <div className="search-field">
                <label>Where to?</label>
                <input
                  type="text"
                  placeholder="Search destination"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              <div className="search-field">
                <label>Travel Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>

              <div className="search-field">
                <label>Travellers</label>
                <select
                  value={travellers}
                  onChange={(e) => setTravellers(e.target.value)}
                >
                  <option value="1">1 Traveller</option>
                  <option value="2">2 Travellers</option>
                  <option value="3">3 Travellers</option>
                  <option value="4">4 Travellers</option>
                  <option value="5">5+ Travellers</option>
                </select>
              </div>

              <button
                className="search-button"
                onClick={handleSearch}
              >
                Search Trips
              </button>

            </div>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="destinations-section" id="destinations">
        <div className="container">

          <div className="section-heading">
            <p>EXPLORE THE WORLD</p>
            <h2>Popular Destinations</h2>
            <span>
              Find your perfect destination for your next journey.
            </span>
          </div>

          <div className="row g-4">
            {filteredDestinations.map((place) => (
              <div className="col-lg-4 col-md-6" key={place.name}>

                <div className="destination-card">
                  <img src={place.image} alt={place.name} />

                  <div className="destination-info">
                    <p>{place.country}</p>
                    <h3>{place.name}</h3>

                    <div className="destination-bottom">
                      <span>Starting from {place.price}</span>

                      <Link to={`/destination/${place.slug}`}>
                        Explore →
                      </Link>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {filteredDestinations.length === 0 && (
            <p className="no-results">
              No destinations found. Try another search.
            </p>
          )}

        </div>
      </section>

      {/* About Section */}
      <section className="about-section" id="about">
        <div className="container text-center">
          <p>WHY CHOOSE US</p>
          <h2>Travel More. Worry Less.</h2>
          <p>
            At NS TRAILS, we help you discover amazing places
            and make every journey special.
          </p>
        </div>
      </section>

      {/* Trip Enquiry */}
      <TripEnquiry />

      {/* Contact */}
      <Contact />

      {/* Office Location */}
      <OfficeLocation />

      {/* Footer */}
      <Footer />

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route
        path="/destination/:destinationName"
        element={<DestinationDetails />}
      />
    </Routes>
  )
}

export default App
