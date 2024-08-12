import React, { useState, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css'; // Import the CSS file
import aboutButtonSVG from '../images/about-button.svg'; // Import your SVG file

const About = () => {
  const [showDetails, setShowDetails] = useState(false);
  const aboutContentRef = useRef(null); // Create a ref to the about content section

  const handleButtonClick = () => {
    setShowDetails(true);
    setTimeout(() => {
      aboutContentRef.current.scrollIntoView({ behavior: 'smooth' }); // Scroll to the about content section
    }, 300); // Delay to allow content to render before scrolling
  };

  return (
    <div>
      <div className="about-container">
        <Container fluid>
          <Row className="justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <Col md={8} lg={6} className="text-center">
              <h1 className="about-heading">ABOUT</h1>
              <button className="about-button" onClick={handleButtonClick}>
                <img src={aboutButtonSVG} alt="About Button" />
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      {showDetails && (
        <div className="about-content" ref={aboutContentRef}>
          <Container fluid>
            <Row className="justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
              <Col md={5} className="text-center">
                <p>
                  <strong>Background:</strong><br />
                  I am a 3rd-year college student pursuing a degree in Information Technology.<br />
                  I have a passion for technology and web development.<br />
                  I enjoy learning about new technologies and applying them to real-world projects.<br />
                </p>
              </Col>
              <Col md={5} className="text-center">
                <p>
                  <strong>Skills & Interests:</strong><br />
                  I specialize in creating user-friendly websites with a focus on usability.<br />
                  My skills include React, Bootstrap, HTML, CSS, and JavaScript.<br />
                  I am particularly interested in front-end development and UI/UX design.<br />
                  I enjoy collaborating on projects that solve real-world problems.<br />
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </div>
  );
};

export default About;
