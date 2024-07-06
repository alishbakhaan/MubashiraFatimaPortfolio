import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


// Architecture
// interior
import Interior1 from "../assetss/Arch/Picture.png"
import Interior2 from "../assetss/Arch/Picture2.png"
import Interior3 from "../assetss/Arch/Picture3.png"
import Interior4 from "../assetss/Arch/Picture4.png"
import Interior5 from "../assetss/Arch/Picture5.png"
import Interior6 from "../assetss/Arch/Picture6.png"
// Exterior
import Exterior1 from "../assetss/Arch/exterior (1).jpg"
import Exterior2 from "../assetss/Arch/exterior (2).jpg"
import Exterior3 from "../assetss/Arch/exterior (3).jpg"
import Exterior4 from "../assetss/Arch/exterior (4).jpg"
import Exterior5 from "../assetss/Arch/exterior (5).jpg"
import Exterior6 from "../assetss/Arch/exterior (6).jpg"
// Floor Planning
import Autocad1 from "../assetss/Arch/autocad1.jpg"
import Autocad2 from "../assetss/Arch/autocad2.png"
import Autocad3 from "../assetss/Arch/autocad3.jpg"
import Autocad4 from "../assetss/Arch/autocad4.jpg"
import Autocad5 from "../assetss/Arch/autocad5.jpg"
import Autocad6 from "../assetss/Arch/autocad6.jpg"

export const Architecture = () => {
// architecture design
const Interior = [
  // interior
  {
    title: "Interior Design",
    imgUrl: Interior1,
  },
  {
    title: "Interior Design",
    imgUrl: Interior2,
  },
  {
    title: "Interior Design",
    imgUrl: Interior3,
  },
  {
    title: "Interior Design",
    imgUrl: Interior4,
  },
  {
    title: "Interior Design",
    imgUrl: Interior5,
  },
  {
    title: "Interior Design",
    imgUrl: Interior6,
  },
]
const Exterior = [
// exterior
   {
    title: "Exterior Design",
    imgUrl: Exterior1,
   },
  {
    title: "Exterior Design",
    imgUrl: Exterior2,
  },
  {
    title: "Exterior Design",
    imgUrl: Exterior3,
  },
  {
    title: "Exterior Design",
    imgUrl: Exterior4,
  },
  {
    title: "Exterior Design",
    imgUrl: Exterior5,
  },
  {
    title: "Exterior Design",
    imgUrl: Exterior6,
  },
]
const Floor = [
// floor
{
  title: "Floor Design",
  imgUrl: Autocad1,
 },
{
  title: "Floor Design",
  imgUrl: Autocad2,
},
{
  title: "Floor Design",
  imgUrl: Autocad3,
},
{
  title: "Floor Design",
  imgUrl: Autocad4,
},
{
  title: "Floor Design",
  imgUrl: Autocad5,
},
{
  title: "Floor Design",
  imgUrl: Autocad6,
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
                  <h2 className="mb-5">Architecture Designing </h2>
                  {/* all NAV */}
                  <Tab.Container id="projects-tabs" defaultActiveKey="Interior">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Link eventKey="Interior">Interior Design</Nav.Link>
                      <Nav.Link eventKey="Exterior">Exterior Design</Nav.Link>
                      <Nav.Link eventKey="Floor">Floor Plans Design</Nav.Link>
                    </Nav>

                    {/* Content */}
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>


                      {/* architect Development */}

                      <Tab.Pane eventKey="Interior">
                        <Row>
                          {Interior.map((Interior, index) => (
                            <ProjectCard key={index} {...Interior} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Exterior">
                        <Row>
                          {Exterior.map((Exterior, index) => (
                            <ProjectCard key={index} {...Exterior} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Floor">
                        <Row>
                          {Floor.map((Floor, index) => (
                            <ProjectCard key={index} {...Floor} />
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




