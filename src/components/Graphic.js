import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

// Graphics
// Banner
import Banner1 from "../assetss/Graphics/Banner/banner (1).avif"
import Banner2 from "../assetss/Graphics/Banner/banner (2).avif"
// Logo
import Logo1 from "../assetss/Graphics/Logo/logo1.jpg"
import Logo2 from "../assetss/Graphics/Logo/logo2.avif"
import Logo3 from "../assetss/Graphics/Logo/logo3.jpg"
import Logo4 from "../assetss/Graphics/Logo/logo4.jpg"
// Stationery
import Stationery1 from "../assetss/Graphics/stationary/state (1).avif"
import Stationery2 from "../assetss/Graphics/stationary/state (1).jpg"
import Stationery3 from "../assetss/Graphics/stationary/state (2).avif"
// Social-Post
import Social1 from "../assetss/Graphics/Social-post/social (1).jpg"
import Social2 from "../assetss/Graphics/Social-post/social (2).jpg"
import Social3 from "../assetss/Graphics/Social-post/social (3).jpg"
import Social4 from "../assetss/Graphics/Social-post/social (4).jpg"
import Social5 from "../assetss/Graphics/Social-post/social (5).jpg"
// T-shirt
import shirt1 from "../assetss/Graphics/T-shirts-design/shirt (1).png"
import shirt2 from "../assetss/Graphics/T-shirts-design/shirt (2).png"
import shirt3 from "../assetss/Graphics/T-shirts-design/shirt (3).png"
import shirt4 from "../assetss/Graphics/T-shirts-design/shirt (4).png"
// UIUX
import UIUX1 from "../assetss/Graphics/Ui-Ux/uiux (1).jpg"
import UIUX2 from "../assetss/Graphics/Ui-Ux/uiux (2).jpg"
import UIUX3 from "../assetss/Graphics/Ui-Ux/uiux (3).jpg"
import UIUX4 from "../assetss/Graphics/Ui-Ux/uiux (4).jpg"


export const Graphic = () => {

 // graphic design
const Banner = [
  // Banner
  {
    title: "Banner Design",
    imgUrl: Banner1,
  },
  {
    title: "Banner Design",
    imgUrl: Banner2,
  },
]
const Logo = [
  // Logo
  {
    title: "Logo Design",
    imgUrl: Logo1,
  },
  {
    title: "Logo Design",
    imgUrl: Logo2,
  },
  {
    title: "Logo Design",
    imgUrl: Logo3,
  },
  {
    title: "Logo Design",
    imgUrl: Logo4,
  },
]
const Stationery = [
  // Stationery
  {
    title: "Stationery Design",
    imgUrl: Stationery1,
  },
  {
    title: "Stationery Design",
    imgUrl: Stationery2,
  },
  {
    title: "Stationery Design",
    imgUrl: Stationery3,
  },
]
const Social = [
  // Social-Post
  {
    title: "Social-Post Design",
    imgUrl: Social1,
  },
  {
    title: "Social-Post Design",
    imgUrl: Social2,
  },
  {
    title: "Social-Post Design",
    imgUrl: Social3,
  },
  {
    title: "Social-Post Design",
    imgUrl: Social4,
  },
  {
    title: "Social-Post Design",
    imgUrl: Social5,
  },
]
const Shirt = [
  // T-shirt
  {
    title: "T-Shirt Design",
    imgUrl: shirt1,
  },
  {
    title: "T-Shirt Design",
    imgUrl: shirt2,
  },
  {
    title: "T-Shirt Design",
    imgUrl: shirt3,
  },
  {
    title: "T-Shirt Design",
    imgUrl: shirt4,
  },
]
const UIUX = [
  // UIUX
  {
    title: "UI/UX Design",
    imgUrl: UIUX1,
  },
  {
    title: "UI/UX Design",
    imgUrl: UIUX2,
  },
  {
    title: "UI/UX Design",
    imgUrl: UIUX3,
  },
  {
    title: "UI/UX Design",
    imgUrl: UIUX4,
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
                  <h2 className="mb-5">Graphic Designing</h2>
                  {/* all NAV */}
                  <Tab.Container id="projects-tabs" defaultActiveKey="Banner">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Link eventKey="Banner">Banner Design</Nav.Link>
                      <Nav.Link eventKey="Logo">Logo Design</Nav.Link>
                      <Nav.Link eventKey="Stationery">Stationery Design</Nav.Link>
                      <Nav.Link eventKey="Social">Social-Post Design</Nav.Link>
                      <Nav.Link eventKey="Shirt">T-Shirt Design</Nav.Link>
                      <Nav.Link eventKey="UIUX">UI/UX Design</Nav.Link>
                    </Nav>

                    {/* Content */}
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>


                      {/* Website Development */}

                      <Tab.Pane eventKey="Banner">
                        <Row>
                          {Banner.map((Banner, index) => (
                            <ProjectCard key={index} {...Banner} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Logo">
                        <Row>
                          {Logo.map((Logo, index) => (
                            <ProjectCard key={index} {...Logo} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Stationery">
                        <Row>
                          {Stationery.map((Stationery, index) => (
                            <ProjectCard key={index} {...Stationery} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Social">
                        <Row>
                          {Social.map((Social, index) => (
                            <ProjectCard key={index} {...Social} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Shirt">
                        <Row>
                          {Shirt.map((Shirt, index) => (
                            <ProjectCard key={index} {...Shirt} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="UIUX">
                        <Row>
                          {UIUX.map((UIUX, index) => (
                            <ProjectCard key={index} {...UIUX} />
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


