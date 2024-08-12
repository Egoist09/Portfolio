import React, { useState, useRef } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Projects.css'; // Import the CSS file
import projectsButtonSVG from '../images/projects-button.svg'; // Import your SVG file

const Projects = () => {
  const [showDetails, setShowDetails] = useState(false);
  const projectsContentRef = useRef(null); // Create a ref to the projects content section

  const handleButtonClick = () => {
    setShowDetails(true);
    setTimeout(() => {
      projectsContentRef.current.scrollIntoView({ behavior: 'smooth' }); // Scroll to the projects content section
    }, 300); // Delay to allow content to render before scrolling
  };

  return (
    <div>
      <div className="projects-container">
        <Container fluid>
          <Row className="justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <Col md={8} lg={6} className="text-center">
              <h1 className="projects-heading">PROJECTS</h1>
              <button className="projects-button" onClick={handleButtonClick}>
                <img src={projectsButtonSVG} alt="Projects Button" />
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* The content section revealed on button click */}
      {showDetails && (
        <div className="projects-content" ref={projectsContentRef}>
          <Container fluid>
            <Row>
              {/* First Card */}
              <Col md={4}>
                <Card className="project-card">
                  <Card.Img variant="top" src={require('../images/project1.png')} /> {/* Corrected image path */}
                  <Card.Body>
                    <Card.Title>Weather forecast - Mobile App</Card.Title>
                    <Card.Text>A weather forecast mobile app provides real-time weather updates, including current conditions, hourly and weekly forecasts, and severe weather alerts. It features an intuitive interface with customizable options for different locations.</Card.Text>
                    <Button variant="primary" href="https://dribbble.com/shots/20725172-Weather-forecast-Mobile-App" target="_blank" rel="noopener noreferrer">
                      View Project
                    </Button>
                  </Card.Body>
                </Card>
              </Col>

              {/* Second Card */}
              <Col md={4}>
                <Card className="project-card">
                  <Card.Img variant="top" src={require('../images/project2.png')} /> {/* Corrected image path */}
                  <Card.Body>
                    <Card.Title>Smart alarm - Mobile App</Card.Title>
                    <Card.Text>A smart alarm mobile app allows users to set personalized alarms with advanced features like sleep tracking, wake-up sounds, and gentle alarms that gradually increase in volume. It can also integrate with calendars and adjust wake-up times based on sleep patterns or schedules.</Card.Text>
                    <Button variant="primary" href="https://dribbble.com/shots/22973337-Smart-Alarm-App" target="_blank" rel="noopener noreferrer">
                      View Project
                    </Button>
                  </Card.Body>
                </Card>
              </Col>

              {/* Third Card */}
              <Col md={4}>
                <Card className="project-card">
                  <Card.Img variant="top" src={require('../images/project3.png')} /> {/* Corrected image path */}
                  <Card.Body>
                    <Card.Title>Heart rate Monitor - Mobile App</Card.Title>
                    <Card.Text>A heart rate monitor mobile app tracks your heart rate in real-time using your smartphone's sensors or connected devices. It helps monitor your heart health, analyze trends, and provide insights for workouts or daily activity.</Card.Text>
                    <Button variant="primary" href="https://dribbble.com/shots/19701193-HB-Heart-Rate-Monitor-App" target="_blank" rel="noopener noreferrer">
                      View Project
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </div>
  );
};

export default Projects;
