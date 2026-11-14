
import './OfficeLocation.css'

function OfficeLocation() {
  return (
    <section className="office-location-section" id="location">
      <div className="container">

        <div className="location-heading">
          <p>FIND US HERE</p>
          <h2>Our Office Location</h2>
          <span>Visit us or get in touch with our team.</span>
        </div>

        <div className="row g-4 align-items-stretch">

          {/* Office Details */}
          <div className="col-lg-4">
            <div className="office-details">
              <h3>NS TRAILS</h3>

              <div className="office-item">
                <h5>📍 Office Address</h5>
                <p>
                  First Floor, Kotkhai,<br />
                  Shimla, Himachal Pradesh, India
                </p>
              </div>

              <div className="office-item">
                <h5>📞 Phone</h5>
                <p>
                  <a href="tel:+919317955503">
                    +91 93179 55503
                  </a>
                </p>
              </div>

              <div className="office-item">
                <h5>✉️ Email</h5>
                <p>
                  <a href="mailto:Nstrails77@gmail.com">
                    Nstrails77@gmail.com
                  </a>
                </p>
              </div>

              <div className="office-item">
                <h5>🌐 Follow Us</h5>
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

              <a
                href="https://www.google.com/maps/search/?api=1&query=First+Floor+Kotkhai+Shimla+Himachal+Pradesh"
                target="_blank"
                rel="noreferrer"
                className="map-direction-btn"
              >
                Get Directions →
              </a>
            </div>
          </div>

          {/* Google Map */}
          <div className="col-lg-8">
            <div className="office-map">
              <iframe
                title="NS TRAILS Office Location"
                src="https://www.google.com/maps?q=First+Floor+Kotkhai+Shimla+Himachal+Pradesh&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default OfficeLocation
