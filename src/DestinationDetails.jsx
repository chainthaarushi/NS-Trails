
import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import './DestinationDetails.css'

const destinationData = {
  shimla: {
    name: 'Shimla',
    location: 'Himachal Pradesh, India',
    description: 'Explore beautiful mountains, colonial architecture and peaceful hill views in Shimla.',
    places: ['Mall Road', 'Kufri', 'Jakhu Temple', 'Christ Church', 'Green Valley'],
    plans: [
      { duration: '3 Days / 2 Nights', price: 8999 },
      { duration: '4 Days / 3 Nights', price: 11999 },
      { duration: '5 Days / 4 Nights', price: 14999 }
    ]
  },

  kashmir: {
    name: 'Kashmir',
    location: 'Jammu & Kashmir, India',
    description: 'Discover beautiful valleys, lakes and unforgettable mountain experiences.',
    places: ['Srinagar', 'Dal Lake', 'Gulmarg', 'Pahalgam', 'Sonamarg'],
    plans: [
      { duration: '5 Days / 4 Nights', price: 18999 },
      { duration: '6 Days / 5 Nights', price: 23999 },
      { duration: '7 Days / 6 Nights', price: 28999 }
    ]
  },

  'kullu-manali': {
    name: 'Kullu Manali',
    location: 'Himachal Pradesh, India',
    description: 'Enjoy snow-covered mountains, adventure activities and beautiful nature.',
    places: ['Solang Valley', 'Hadimba Temple', 'Mall Road', 'Old Manali', 'Atal Tunnel'],
    plans: [
      { duration: '4 Days / 3 Nights', price: 12999 },
      { duration: '5 Days / 4 Nights', price: 16999 },
      { duration: '6 Days / 5 Nights', price: 19999 }
    ]
  },

  ladakh: {
    name: 'Ladakh',
    location: 'Ladakh, India',
    description: 'Experience high mountain passes, stunning lakes and adventurous roads.',
    places: ['Pangong Lake', 'Nubra Valley', 'Leh Palace', 'Magnetic Hill', 'Shanti Stupa'],
    plans: [
      { duration: '6 Days / 5 Nights', price: 29999 },
      { duration: '7 Days / 6 Nights', price: 36999 },
      { duration: '8 Days / 7 Nights', price: 42999 }
    ]
  },

  bali: {
    name: 'Bali',
    location: 'Indonesia',
    description: 'Discover tropical beaches, beautiful temples and relaxing island experiences.',
    places: ['Ubud', 'Kuta Beach', 'Tanah Lot', 'Nusa Penida', 'Uluwatu Temple'],
    plans: [
      { duration: '5 Days / 4 Nights', price: 49999 },
      { duration: '6 Days / 5 Nights', price: 59999 },
      { duration: '7 Days / 6 Nights', price: 69999 }
    ]
  },

  kerala: {
    name: 'Kerala',
    location: 'India',
    description: 'Enjoy peaceful backwaters, green hills and beautiful natural landscapes.',
    places: ['Munnar', 'Alleppey', 'Thekkady', 'Kochi', 'Wayanad'],
    plans: [
      { duration: '5 Days / 4 Nights', price: 16999 },
      { duration: '6 Days / 5 Nights', price: 21999 },
      { duration: '7 Days / 6 Nights', price: 26999 }
    ]
  }
}

function DestinationDetails() {
  const { destinationName } = useParams()
  const destination = destinationData[destinationName]

  const [selectedPlan, setSelectedPlan] = useState(0)

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    travellers: '2',
    message: ''
  })

  if (!destination) {
    return (
      <div className="container py-5">
        <h2>Destination not found.</h2>
        <Link to="/">Back to Home</Link>
      </div>
    )
  }

  const plan = destination.plans[selectedPlan]

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const message = `Hello NS TRAILS!

I want to enquire about a tour package.

Destination: ${destination.name}
Location: ${destination.location}
Package Duration: ${plan.duration}
Package Price: ₹${plan.price.toLocaleString('en-IN')} per person

Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Travel Date: ${form.date}
Travellers: ${form.travellers}
Message: ${form.message}`

    const whatsappURL = `https://wa.me/917651000109?text=${encodeURIComponent(message)}`

    window.open(whatsappURL, '_blank')
  }

  return (
    <div className="package-page">

      {/* Navbar */}
      <nav className="package-navbar">
        <div className="container">
          <Link to="/" className="package-logo">
            NS <span>TRAILS</span>
          </Link>

          <Link to="/" className="back-home">
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Package Header */}
      <section className="package-header">
        <div className="container">
          <p>
            HOME / DESTINATIONS / {destination.name.toUpperCase()}
          </p>

          <h1>{destination.name} Tour Package</h1>

          <p>{destination.location}</p>
        </div>
      </section>

      {/* Package Main Section */}
      <section className="container package-main">

        <div className="package-left">

          {/* Price Card */}
          <div className="package-price-card">
            <div>
              <p>Starting Price</p>

              <h2>
                ₹{plan.price.toLocaleString('en-IN')}
              </h2>

              <p>Per person · Sample package estimate</p>
            </div>
          </div>

          {/* Duration Options */}
          <h2>Choose Your Trip Duration</h2>

          <div className="duration-options">
            {destination.plans.map((item, index) => (
              <button
                key={item.duration}
                type="button"
                className={
                  selectedPlan === index
                    ? 'duration-option selected'
                    : 'duration-option'
                }
                onClick={() => setSelectedPlan(index)}
              >
                <strong>{item.duration}</strong>

                <span>
                  ₹{item.price.toLocaleString('en-IN')}
                </span>
              </button>
            ))}
          </div>

          {/* Places */}
          <h2>Popular Places to Visit</h2>

          <div className="package-places">
            {destination.places.map((place) => (
              <div key={place} className="package-place">
                <span>📍</span> {place}
              </div>
            ))}
          </div>

          {/* Inclusions */}
          <h2>What's Included</h2>

          <div className="package-inclusions">
            <p>✓ Comfortable accommodation</p>
            <p>✓ Local sightseeing</p>
            <p>✓ Travel assistance</p>
            <p>✓ Trip planning support</p>
            <p>✓ Customised travel options</p>
          </div>

          {/* Overview */}
          <h2>Package Overview</h2>

          <p className="package-overview">
            {destination.description}
          </p>

          {/* Route */}
          <h2>Destination Route</h2>

          <div className="package-route">
            {destination.places.map((place, index) => (
              <span key={place}>
                {place}
                {index !== destination.places.length - 1 ? ' → ' : ''}
              </span>
            ))}
          </div>

        </div>

        {/* Enquiry Form */}
        <aside className="package-enquiry">

          <h2>Enquire Now</h2>

          <p>Plan your next journey with NS TRAILS.</p>

          <form onSubmit={handleSubmit}>

            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter phone number"
              value={form.phone}
              onChange={handleChange}
              required
            />

            <label>Travel Date</label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              required
            />

            <label>Number of Travellers</label>
            <select
              name="travellers"
              value={form.travellers}
              onChange={handleChange}
            >
              <option value="1">1 Traveller</option>
              <option value="2">2 Travellers</option>
              <option value="3">3 Travellers</option>
              <option value="4">4 Travellers</option>
              <option value="5">5+ Travellers</option>
            </select>

            <label>Message</label>
            <textarea
              name="message"
              placeholder="Tell us about your trip"
              value={form.message}
              onChange={handleChange}
            ></textarea>

            <button type="submit">
              Send Enquiry on WhatsApp
            </button>

          </form>

        </aside>

      </section>
    </div>
  )
}

export default DestinationDetails
