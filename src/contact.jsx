
import { useState } from 'react'
import './contact.css'

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const message = `Hello NS TRAILS!

Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Subject: ${form.subject}
Message: ${form.message}`

    const whatsappURL = `https://wa.me/917651000109?text=${encodeURIComponent(message)}`

    window.open(whatsappURL, '_blank')
  }

  return (
    <>
      {/* Contact Hero */}
      <section className="contact-hero">
        <div className="container">
          <p>WE ARE HERE TO HELP</p>
          <h1>Contact Us</h1>
          <span>
            Let's plan your next unforgettable journey with NS TRAILS.
          </span>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <div className="container">
          <div className="row g-4">

            {/* Contact Information */}
            <div className="col-lg-5">
              <div className="contact-info">

                <p className="section-label">GET IN TOUCH</p>

                <h2>We'd Love to Hear From You</h2>

                <p>
                  Have a question or need help planning your trip?
                  Send us a message and our team will get back to you.
                </p>

                <div className="contact-detail">
                  <h5>📍 Our Office</h5>
                  <p>
                    First Floor, Kotkhai, Shimla,
                    Himachal Pradesh, India
                  </p>
                </div>

                <div className="contact-detail">
                  <h5>📞 Call / WhatsApp</h5>
                  <p>+91 76510 00109</p>

                  <a href="tel:+917651000109">
                    Call Now
                  </a>

                  <br />

                  <a
                    href="https://wa.me/917651000109"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Chat on WhatsApp
                  </a>
                </div>

                <div className="contact-detail">
                  <h5>✉️ Email Us</h5>

                  <a href="mailto:Solowander114@gmail.com">
                    Solowander114@gmail.com
                  </a>
                </div>

              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-7">
              <div className="contact-form">

                <h2>Send Us a Message</h2>

                <p>
                  Fill in the details below and we'll contact you.
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="row g-3">

                    <div className="col-md-6">
                      <label>Your Name</label>

                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Enter your name"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label>Email Address</label>

                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter your email"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label>Phone Number</label>

                      <input
                        type="tel"
                        name="phone"
                        className="form-control"
                        placeholder="Enter phone number"
                        value={form.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label>Subject</label>

                      <input
                        type="text"
                        name="subject"
                        className="form-control"
                        placeholder="How can we help?"
                        value={form.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-12">
                      <label>Your Message</label>

                      <textarea
                        name="message"
                        className="form-control"
                        rows="5"
                        placeholder="Write your message here"
                        value={form.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>

                    <div className="col-12">
                      <button
                        type="submit"
                        className="contact-submit"
                      >
                        Send Enquiry on WhatsApp
                      </button>
                    </div>

                  </div>
                </form>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
