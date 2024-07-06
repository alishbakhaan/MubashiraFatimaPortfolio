import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

// 2D
// 2D Animate
import Animate1 from "../assetss/2D/2D-Animate/animate (1).mp4"
import Animate2 from "../assetss/2D/2D-Animate/animate (2).mp4"
import Animate3 from "../assetss/2D/2D-Animate/animate (3).mp4"

// 2D Character
import Character1 from "../assetss/2D/2D-Charac/character1.jpg"
import Character3 from "../assetss/2D/2D-Charac/character3.jpg"
import Character4 from "../assetss/2D/2D-Charac/character4.jpg"

// 2D Cloth
import Cloth1 from "../assetss/2D/2D-Cloth/cloth.avif"
import Cloth2 from "../assetss/2D/2D-Cloth/cloth1.jpg"
import Cloth3 from "../assetss/2D/2D-Cloth/cloth2.jpg"
import Cloth4 from "../assetss/2D/2D-Cloth/cloth3.avif"
import Cloth5 from "../assetss/2D/2D-Cloth/cloth4.jpeg"

// 2D Env
import Env1 from "../assetss/2D/2D-Environ/env.jpg"
import Env2 from "../assetss/2D/2D-Environ/env2.avif"
import Env3 from "../assetss/2D/2D-Environ/env3.jpg"
import Env4 from "../assetss/2D/2D-Environ/env1.jpg"

export const TwoDesign = () => {
// 2D
const Animate = [
  // animate
  {
    title: "2D Animation",
    videoUrl: Animate1,
  },
  {
    title: "2D Animation",
    videoUrl: Animate2,
  },
  {
    title: "2D Animation",
    videoUrl: Animate3,
  },
]
const Character = [
  // character
  {
    title: "2D Character",
      imgUrl: Character1,
  },
  {
    title: "2D Character",
      imgUrl: Character3,
  },
  {
    title: "2D Character",
      imgUrl: Character4,
  },
]
const Cloth = [
  // Cloth
  {
    title: "2D Cloth",
      imgUrl: Cloth1,
  },
  {
    title: "2D Cloth",
      imgUrl: Cloth2,
  },
  {
    title: "2D Cloth",
      imgUrl: Cloth3,
  },
  {
    title: "2D Cloth",
      imgUrl: Cloth4,
  },
  {
    title: "2D Cloth",
      imgUrl: Cloth5,
  },
]
const Environment = [
  // Environment
  {
    title: "2D Environment",
      imgUrl: Env1,
  },
  {
    title: "2D Environment",
      imgUrl: Env2,
  },
  {
    title: "2D Environment",
      imgUrl: Env3,
  },
  {
    title: "2D Environment",
      imgUrl: Env4,
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
                  <h2 className="mb-5">2D Works</h2>
                  {/* all NAV */}
                  <Tab.Container id="projects-tabs" defaultActiveKey="Animate">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Link eventKey="Animate">2D Animation</Nav.Link>
                      <Nav.Link eventKey="Character">2D Character</Nav.Link>
                      <Nav.Link eventKey="Cloth">2D Cloth</Nav.Link>
                      <Nav.Link eventKey="Environment">2D Environment</Nav.Link>

                    </Nav>

                    {/* Content */}
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>


                      {/* 2D Development */}

                      <Tab.Pane eventKey="Animate">
                        <Row>
                          {Animate.map((Animate, index) => (
                            <ProjectCard key={index} {...Animate} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Character">
                        <Row>
                          {Character.map((Character, index) => (
                            <ProjectCard key={index} {...Character} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Cloth">
                        <Row>
                          {Cloth.map((Cloth, index) => (
                            <ProjectCard key={index} {...Cloth} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Environment">
                        <Row>
                          {Environment.map((Environment, index) => (
                            <ProjectCard key={index} {...Environment} />
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






