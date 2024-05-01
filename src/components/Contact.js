import React, { Component } from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaMailBulk, FaMedium } from 'react-icons/fa'
import { FaMapLocationDot } from 'react-icons/fa6'
import AOS from 'aos'
import 'aos/dist/aos.css'

class Contact extends Component {
  componentDidMount() {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-out'
    })
  }

  componentDidUpdate() {
    AOS.refresh()
  }

  render() {
    const contact = this.props.resumeBasicInfo
    console.log(contact)
    if (!contact) return null

    return (
      <div data-aos="fade-up" className="contact">
        <h1 className="section-title" style={{ color: 'black' }}>
          <span className="text-black" style={{ textAlign: 'center' }}>
            {contact.sectionTitle}
          </span>
        </h1>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 bgYellow">
              <div className="contact-item ">
                <FaMapLocationDot className="contact-icon" />
                <div className="contact-text">
                  <p className="contact-title">{contact.address.title}</p>
                  <p className="contact-description">{contact.address.content}</p>
                </div>
              </div>
              <div className="contact-item">
                <a href="mailto:erdemhho@gmail.com" target="blank" className="contact-link">
                  <FaMailBulk className="contact-icon" />
                  <div className="contact-text">
                    <p className="contact-title">{contact.email.title}</p>
                    <p className="contact-description">{contact.email.content}</p>
                  </div>
                </a>
              </div>
              <div className="contact-item">
                <a href={contact.linkedin.link} target="blank" className="contact-link">
                  <FaLinkedin className="contact-icon" />
                  <div className="contact-text">
                    <p className="contact-title">{contact.linkedin.title}</p>
                    <p className="contact-description">{contact.linkedin.content}</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-6 bgDark">
              <div className="contact-item">
                <a href={contact.github.link} target="blank" className="contact-link">
                  <FaGithub className="contact-icon" />
                  <div className="contact-text">
                    <p className="contact-title">{contact.github.title}</p>
                    <p className="contact-description">{contact.github.content}</p>
                  </div>
                </a>
              </div>
              <div className="contact-item">
                <a href={contact.medium.link} target="blank" className="contact-link">
                  <FaMedium className="contact-icon" />
                  <div className="contact-text">
                    <p className="contact-title">{contact.medium.title}</p>
                    <p className="contact-description">{contact.medium.content}</p>
                  </div>
                </a>
              </div>
              <div className="contact-item">
                <a href={contact.instagram.link} target="blank" className="contact-link">
                  <FaInstagram className="contact-icon" />
                  <div className="contact-text">
                    <p className="contact-title">{contact.instagram.title}</p>
                    <p className="contact-description">{contact.instagram.content}</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact
