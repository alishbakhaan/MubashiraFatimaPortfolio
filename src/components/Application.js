import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

// App Development
// Calling
import Calling1 from "../assetss/App/Calling/e-com (1).jpeg"
import Calling2 from "../assetss/App/Calling/e-com (2).jpeg"
import Calling3 from "../assetss/App/Calling/e-com (3).jpeg"
import Calling4 from "../assetss/App/Calling/e-com (4).jpeg"

// Dating
import Dating1 from "../assetss/App/Dating/dating (1).jpeg"
import Dating2 from "../assetss/App/Dating/dating (2).jpeg"
import Dating3 from "../assetss/App/Dating/dating (3).jpeg"
import Dating4 from "../assetss/App/Dating/dating (4).jpeg"

// Photo
import Photo1 from "../assetss/App/Photo-Edit/edit (1).jpeg"
import Photo2 from "../assetss/App/Photo-Edit/edit (2).jpeg"
import Photo3 from "../assetss/App/Photo-Edit/edit (3).jpeg"
import Photo4 from "../assetss/App/Photo-Edit/edit (4).jpeg"

export const Application = () => {

// APP Development
 const Calling = [

  // calling
{
  title: "Calling App",
  imgUrl: Calling1,
},
{
  title: "Calling App",
  imgUrl: Calling2,
},
{
  title: "Calling App",
  imgUrl: Calling3,
},
{
  title: "Calling App",
  imgUrl: Calling4,
},
 ]
 const Dating = [
// Dating
{
  title: "Dating App",
  imgUrl: Dating1,
},
{
  title: "Dating App",
  imgUrl: Dating2,
},
{
  title: "Dating App",
  imgUrl: Dating3,
},
{
  title: "Dating App",
  imgUrl: Dating4,
},
 ]
 const Photo = [
// Photo
{
  title: "Photo-Editing App",
  imgUrl: Photo1,
},
{
  title: "Photo-Editing App",
  imgUrl: Photo2,
},
{
  title: "Photo-Editing App",
  imgUrl: Photo3,
},
{
  title: "Photo-Editing App",
  imgUrl: Photo4,
},
];


  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 className="mb-5">Mobile Application</h2>
                  {/* all NAV */}
                  <Tab.Container id="projects-tabs" defaultActiveKey="Calling">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Link eventKey="Calling">Calling App</Nav.Link>
                      <Nav.Link eventKey="Dating">Dating App</Nav.Link>
                      <Nav.Link eventKey="Photo">Photo Editing App</Nav.Link>
                    </Nav>

                    {/* Content */}
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>


                      {/* App Development */}

                      <Tab.Pane eventKey="Calling">
                        <Row>
                          {Calling.map((Calling, index) => (
                            <ProjectCard key={index} {...Calling} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Dating">
                        <Row>
                          {Dating.map((Dating, index) => (
                            <ProjectCard key={index} {...Dating} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Photo">
                        <Row>
                          {Photo.map((Photo, index) => (
                            <ProjectCard key={index} {...Photo} />
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

