import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import { FaLinkedin, FaMailBulk } from 'react-icons/fa'
import { FaMapLocationDot } from 'react-icons/fa6'

class Contact extends Component {
  render() {
    const contact = this.props.resumeBasicInfo
    console.log(contact)
    if (!contact) return null

    return (
      <div className="contact">
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
              <div className="contact-form">
                <Form className="p-2 mt-4">
                  <h1 className="contact-form-title text-white text-center">{contact.form.title}</h1>
                  <Form.Group className="p-2" controlId="formBasicName">
                    <Form.Label className="text-white" style={{ fontSize: '16px' }}>
                      {contact.form.name.title}
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={contact.form.name.placeholder}
                      style={{ fontSize: '16px' }}
                    />
                  </Form.Group>
                  <Form.Group className="p-2" controlId="formBasicSurname">
                    <Form.Label className="text-white" style={{ fontSize: '16px' }}>
                      {contact.form.surname.title}
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={contact.form.surname.placeholder}
                      style={{ fontSize: '16px' }}
                    />
                  </Form.Group>
                  <Form.Group className="p-2" controlId="formBasicEmail">
                    <Form.Label className="text-white" style={{ fontSize: '16px' }}>
                      {contact.form.email.title}
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder={contact.form.email.placeholder}
                      style={{ fontSize: '16px' }}
                    />
                  </Form.Group>
                  <Form.Group className="p-2" controlId="formBasicSubject">
                    <Form.Label className="text-white" style={{ fontSize: '16px' }}>
                      {contact.form.subject.title}
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={contact.form.subject.placeholder}
                      style={{ fontSize: '16px' }}
                    />
                  </Form.Group>
                  <Form.Group className="p-2" controlId="formBasicMessage">
                    <Form.Label className="text-white" style={{ fontSize: '16px' }}>
                      {contact.form.message.title}
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows="3"
                      placeholder={contact.form.message.placeholder}
                      style={{ fontSize: '16px' }}
                    />
                  </Form.Group>
                  <div className="d-grid gap-2 p-2">
                    <Button
                      variant="primary"
                      size="lg"
                      type="submit"
                      style={{
                        fontSize: '18px',
                        width: 'auto'
                      }}
                    >
                      {contact.form.submit}
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact
