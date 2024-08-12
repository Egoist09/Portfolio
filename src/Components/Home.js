import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import homePageImage from '../images/Home_page.jpg'; // Import the image
import './Home.css'; // Import the CSS file

const Home = () => {
  const navigate = useNavigate();

  const handleHireMeClick = () => {
    navigate('/contact'); // Navigate to the contact page
  };

  const containerStyle = {
    backgroundImage: `url(${homePageImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh', // Full viewport height
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    padding: '0 20px', // Add some padding for better readability
  };

  const textStyle = {
    textAlign: 'left', // Align text to the left
    maxWidth: '800px', // Optional: limit text width for readability
  };

  const headingStyle = {
    marginBottom: '20px', // Add some space below the heading
  };

  const paragraphStyle = {
    margin: '0 0 10px', // Adjust the bottom margin to reduce space between paragraphs
    fontFamily: 'Arial, sans-serif', // Set the font family
    fontSize: '16px', // Set the font size
    fontWeight: '400', // Set the font weight
  };

  const buttonStyle = {
    marginTop: '20px', // Add some space above the button
    color: 'black', // Set text color to black for better contrast
    backgroundColor: 'white', // Set the button background to white
    border: '1px solid black', // Add a border for better visibility
    fontFamily: 'Arial, sans-serif',
  };

  return (
    <div style={containerStyle}>
      <Container>
        <Row>
          <Col>
            <h1 style={headingStyle}>Hi, I am Paul Andre Cardeño</h1>
            <div style={textStyle}>
              <p style={paragraphStyle}>
                I'm a freelance Web Developer based in Kidapawan City, North Cotabato.<br />
                I specialize in creating responsive and user-friendly websites.<br />
              </p>
              <Button
                variant="primary"
                style={buttonStyle}
                onClick={handleHireMeClick}
                className="hire-me-button"
              >
                Hire Me
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
