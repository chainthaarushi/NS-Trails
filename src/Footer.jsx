
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="main-footer" id="footer">
      <div className="container">
        <div className="row g-4">

          {/* Brand Information */}
          <div className="col-lg-4 col-md-6">
            <h2 className="footer-logo">
              NS <span>TRAILS</span>
            </h2>

            <p className="footer-about">
              Your Journey, Our Passion.
              Discover beautiful destinations and create
              unforgettable memories with NS TRAILS.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h4>Quick Links</h4>

            <ul>
              <li><Link to="/">Home</Link></li>
              <li><a href="/#destinations">Destinations</a></li>
              <li><a href="/#about">About Us</a></li>
              <li><a href="/#contact">Contact</a></li>
              <li><a href="/#custom-trip">Plan Your Trip</a></li>
            </ul>
          </div>

          {/* Destinations */}
          <div className="col-lg-3 col-md-6">
            <h4>Destinations</h4>

            <ul>
              <li><Link to="/destination/shimla">Shimla</Link></li>
              <li><Link to="/destination/kashmir">Kashmir</Link></li>
              <li><Link to="/destination/kullu-manali">Kullu Manali</Link></li>
              <li><Link to="/destination/ladakh">Ladakh</Link></li>
              <li><Link to="/destination/bali">Bali</Link></li>
              <li><Link to="/destination/kerala">Kerala</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="col-lg-3 col-md-6">
            <h4>Contact Us</h4>

            <p>📍 First Floor, Kotkhai, Shimla, Himachal Pradesh, India</p>

            <p>
              📞 <a href="tel:+919317955503">+91 93179 55503</a>
            </p>

            <p>
              ✉️ <a href="mailto:Nstrails77@gmail.com">
                Nstrails77@gmail.com
              </a>
            </p>

            <a
              className="footer-whatsapp"
              href="https://wa.me/919317955503"
              target="_blank"
              rel="noreferrer"
            >
              Chat on WhatsApp
            </a>

            <p>
              <a
                href="https://www.instagram.com/nstraills/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </p>

            <p>
              <a
                href="https://www.facebook.com/share/19tzHnojkz/?mibextid=wwXIfr"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </p>
          </div>

        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>© 2026 NS TRAILS. All Rights Reserved.</p>
          <p>Your Journey, Our Passion.</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
