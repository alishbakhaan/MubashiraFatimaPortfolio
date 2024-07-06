import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

// video editing
import video1 from "../assetss/img/ThreeSixty Final.webm"


export const Video = () => {

// video editing
const video = [
  {
    title: "Video Editing",
    description: "Design & Development",
    videoUrl: video1,
  },
]

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 className="mb-5">Video Editing</h2>
                  {/* all NAV */}
                  <Tab.Container id="projects-tabs" defaultActiveKey="video">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Link eventKey="video">Sample Videos</Nav.Link>
                      
                    </Nav>

                    {/* Content */}
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>


                      {/* Video Development */}

                      <Tab.Pane eventKey="video">
                        <Row>
                          {video.map((video, index) => (
                            <ProjectCard key={index} {...video} />
                          ))}
                        </Row>
                      </Tab.Pane>
                     
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}


