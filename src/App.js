import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';
import brandLogo from './images/brand-logo.jpg'; // Import your brand logo image
import './App.css'; // Import your CSS file

const App = () => (
  <Router>
    <Navbar bg="light" expand="lg">
      <LinkContainer to="/">
        <Navbar.Brand>
          <img
            src={brandLogo}
            width="45"
            height="45"
            className="d-inline-block align-top"
            alt="Brand Logo"
          />
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto"> {/* Center the nav links */}
          <LinkContainer to="/">
            <Nav.Link className="mx-3 custom-font">Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link className="mx-3 custom-font">About</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/projects">
            <Nav.Link className="mx-3 custom-font">Projects</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contact">
            <Nav.Link className="mx-3 custom-font">Contact</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
);

export default App;
