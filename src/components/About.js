import  { React, useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../images/about3.gif";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const About = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };
  window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

  return (
    <section className="about" id="connect">
      <Container style={{height: '100vh', justifyContent: 'center', display: 'flex'}}>
        <Row className="align-items-center">

        <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img style={{height: isMobile ? '300px' : '1000px', objectFit: 'contain'}} className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>

          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                   <div className="about-text-box">
              <h1 className="section-heading">About Us</h1>
              <p className="section-text">
                We are a passionate team dedicated to creating amazing experiences. Our project
                focuses on delivering high-quality solutions that meet the needs of our users.
                With a strong emphasis on innovation and user satisfaction, we strive to push
                the boundaries of what's possible.
              </p>
              <p className="section-text">
                Our journey began with a simple idea and has grown into a dynamic and thriving
                project. We believe in the power of collaboration and the importance of listening
                to our community.
              </p>
            </div>
                </div>
              }
            </TrackVisibility>
          </Col>
          
        </Row>
      </Container>
    </section>
  );
};
