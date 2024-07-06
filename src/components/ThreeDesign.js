import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

// 3D
// 3D Animate
import Animation1 from "../assetss/3D/3D-Animate/3D (1).mkv"
import Animation2 from "../assetss/3D/3D-Animate/3D (1).webm"
import Animation3 from "../assetss/3D/3D-Animate/3D (2).webm"
// 3D Character
import Characters1 from "../assetss/3D/3D-Charac/character (1).jpeg"
import Characters2 from "../assetss/3D/3D-Charac/character (1).png"
import Characters3 from "../assetss/3D/3D-Charac/character (2).png"
// 3D Cloth
import Clothes1 from "../assetss/3D/3D-Cloth/cloth (1).mp4"
import Clothes2 from "../assetss/3D/3D-Cloth/cloth (2).mp4"
import Clothes3 from "../assetss/3D/3D-Cloth/cloth (1).png"
import Clothes4 from "../assetss/3D/3D-Cloth/cloth (1).webp"
import Clothes5 from "../assetss/3D/3D-Cloth/cloth (2).png"
// 3D Env
import Envr1 from "../assetss/3D/3D-Environ/env (1).jpg"
import Envr2 from "../assetss/3D/3D-Environ/env (1).png"
import Envr3 from "../assetss/3D/3D-Environ/env (2).jpg"
// 3D Furniture
import Furniture1 from "../assetss/3D/3D-Furniture/furniture (1).avif"
import Furniture2 from "../assetss/3D/3D-Furniture/furniture (1).jpg"
import Furniture3 from "../assetss/3D/3D-Furniture/furniture (1).PNG"
import Furniture4 from "../assetss/3D/3D-Furniture/furniture (2).jpg"
// 3D jewellery
import Jewellery1 from "../assetss/3D/3D-Jewe/jewel (1).avif"
import Jewellery2 from "../assetss/3D/3D-Jewe/jewel (1).png"
import Jewellery3 from "../assetss/3D/3D-Jewe/jewel (2).png"
// 3D logo
import Logos1 from "../assetss/3D/3D-Logo/logo (1).webm"
import Logos2 from "../assetss/3D/3D-Logo/logo (1).jpg"
import Logos3 from "../assetss/3D/3D-Logo/logo (2).jpg"
import Logos4 from "../assetss/3D/3D-Logo/logo (3).jpg"
import Logos5 from "../assetss/3D/3D-Logo/logo (4).jpg"
// 3D Product 
import Product1 from "../assetss/3D/3D-Product/product (1).jpg"
import Product2 from "../assetss/3D/3D-Product/product (2).jpg"
import Product3 from "../assetss/3D/3D-Product/product (3).jpg"


export const ThreeDesign = () => {

// 3D Work
const Animate =[
  // animate
  {
   title: "3D Animation",
   videoUrl: Animation1,
 },
 {
   title: "3D Animation",
   videoUrl: Animation2,
 },
 {
   title: "3D Animation",
   videoUrl: Animation3,
 },
]
const Character =[
 // character
 {
   title: "3D Character",
   imgUrl: Characters1,
 },
 {
   title: "3D Character",
   imgUrl: Characters2,
 },
 {
   title: "3D Character",
   imgUrl: Characters3,
 },
]
const Cloth =[
 // Cloth
 {
   title: "3D Cloth",
   videoUrl: Clothes1,
 },
 {
   title: "3D Cloth",
   videoUrl: Clothes2,
 },
 {
   title: "3D Cloth",
   imgUrl: Clothes3,
 },
 {
   title: "3D Cloth",
   imgUrl: Clothes4,
 },
 {
   title: "3D Cloth",
   imgUrl: Clothes5,
 },
]
const Environment =[
 // Environment
 {
   title: "3D Environment",
   imgUrl: Envr1,
 },
 {
   title: "3D Environment",
   imgUrl: Envr2,
 },
 {
   title: "3D Environment",
   imgUrl: Envr3,
 },
]
const Furniture =[
 // Furniture
 {
   title: "3D Furniture",
   imgUrl: Furniture1,
 },
 {
   title: "3D Furniture",
   imgUrl: Furniture2,
 },
 {
   title: "3D Furniture",
   imgUrl: Furniture3,
 },
 {
   title: "3D Furniture",
   imgUrl: Furniture4,
 },
]
const Jewellery =[
 
 // Jewellery
 {
   title: "3D Jewellery",
   imgUrl: Jewellery1,
 },
 {
   title: "3D Jewellery",
   imgUrl: Jewellery2,
 },
 {
   title: "3D Jewellery",
   imgUrl: Jewellery3,
 },
]
const Logo =[
 // Logo
 {
   title: "3D Logo",
   videoUrl: Logos1,
 },
 {
   title: "3D Logo",
   imgUrl: Logos2,
 },
 {
   title: "3D Logo",
   imgUrl: Logos3,
 },
 {
   title: "3D Logo",
   imgUrl: Logos4,
 },
 {
   title: "3D Logo",
   imgUrl: Logos5,
 },
]
const Product =[
 // Product
 {
   title: "3D Product",
   imgUrl: Product1,
 },
 {
   title: "3D Product",
   imgUrl: Product2,
 },
 {
   title: "3D Product",
   imgUrl: Product3,
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
                  <h2 className="mb-5">3D Works</h2>
                  {/* all NAV */}
                  <Tab.Container id="projects-tabs" defaultActiveKey="Animate">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Link eventKey="Animate">3D Animation</Nav.Link>
                      <Nav.Link eventKey="Character">3D Character</Nav.Link>
                      <Nav.Link eventKey="Cloth">3D Cloth</Nav.Link>
                      <Nav.Link eventKey="Environment">3D Environment</Nav.Link>
                      <Nav.Link eventKey="Furniture">3D Furniture</Nav.Link>
                      <Nav.Link eventKey="Jewellery">3D Jewellery</Nav.Link>
                      <Nav.Link eventKey="Logo">3D Logo</Nav.Link>
                      <Nav.Link eventKey="Product">3D Product</Nav.Link>
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
                      <Tab.Pane eventKey="Furniture">
                        <Row>
                          {Furniture.map((Furniture, index) => (
                            <ProjectCard key={index} {...Furniture} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Jewellery">
                        <Row>
                          {Jewellery.map((Jewellery, index) => (
                            <ProjectCard key={index} {...Jewellery} />
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
                      <Tab.Pane eventKey="Product">
                        <Row>
                          {Product.map((Product, index) => (
                            <ProjectCard key={index} {...Product} />
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









