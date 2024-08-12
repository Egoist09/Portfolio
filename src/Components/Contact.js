import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap';
import './Contact.css'; // Import the CSS file

// Import social media icons and background image
import facebookIcon from '../images/facebook-icon.svg';
import instagramIcon from '../images/instagram-icon.svg';
import tiktokIcon from '../images/tiktok-icon.svg';
import contactPageImage from '../images/Contact_page.jpg'; // Import the image

const Contact = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    setShowModal(true); // Show the modal after form submission
  };

  const handleClose = () => setShowModal(false);

  const containerStyle = {
    backgroundImage: `url(${contactPageImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    minHeight: '100vh',
    padding: '20px',
  };

  return (
    <div className="contact-container" style={containerStyle}>
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <h1>Contact Me</h1>
            <Form className="contact-form" onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" required />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" required />
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Your message" required />
              </Form.Group>
              <Button variant="primary" type="submit" className="send-button">
                Send
              </Button>
            </Form>
            <div className="social-media-links">
              <a href="https://www.facebook.com/paul.cardeno.12/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <img src={facebookIcon} alt="Facebook" className="social-icon" />
              </a>
              <a href="https://www.instagram.com/polpewpew0/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <img src={instagramIcon} alt="Instagram" className="social-icon" />
              </a>
              <a href="https://www.tiktok.com/@yourprofile" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <img src={tiktokIcon} alt="TikTok" className="social-icon" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Notification</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your message has been sent.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Contact;
