import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
// Web Development
// CRM
import Customer from "../assetss/Web/CRM/CRM.png"
// informative
import Informative1 from "../assetss/Web/informative/informative1.png"
import Informative2 from "../assetss/Web/informative/informative2.png"
import Informative3 from "../assetss/Web/informative/informative3.png"
import Informative4 from "../assetss/Web/informative/informative4.png"
// management
import Management1 from "../assetss/Web/Management/Management.png"
import Management2 from "../assetss/Web/Management/Management2.png"
import Management3 from "../assetss/Web/Management/Management3.png"
import Management4 from "../assetss/Web/Management/Management4.png"
// e-commerce
import Comm1 from "../assetss/Web/Web-Ecomm/e-com (1).png"
import Comm2 from "../assetss/Web/Web-Ecomm/e-com (2).png"
import Comm3 from "../assetss/Web/Web-Ecomm/e-com (3).png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Website = () => {

  //WEB development
  const Informative = [

    // informative
    {
      title: "Cinta Fresh",
      description: "Click Here to see full website",
      imgUrl: Informative1,
      url: "https://cinta-fresh.web.app/"
    },
    {
      title: "Astral Developers",
      description: "Click Here to see full website",
      imgUrl: Informative2,
      url: "https://astral-developers.web.app/"
    },
    {
      title: "i9 innovations",
      description: "Click Here to see full website",
      imgUrl: Informative3,
      url: "https://i9-innovation-7cee7.web.app/"
    },
    {
      title: "Dream Perfect Kitchen",
      description: "Click Here to see full website",
      imgUrl: Informative4,
      url: "https://dreamkitchen21.netlify.app/"
    },
  ];
  const Management = [
    // management
    {
      title: "EDP",
      description: "Click Here to see full website",
      imgUrl: Management1,
      url: "https://edp-project-3a8b8.web.app/dashboard"
    },
    {
      title: "Meazio",
      description: "Click Here to see full website",
      imgUrl: Management2,
      url: "https://meazio.com/"
    },
    {
      title: "Kamer Lark",
      description: "Click Here to see full website",
      imgUrl: Management3,
      url: "https://kamer-lark.vercel.app/"
    },
    {
      title: "Dashboard",
      description: "Click Here to see full website",
      imgUrl: Management4,
      url: ""
    },
  ];
  const Commerce = [
    // e-commerce
    {
      title: "Makkah Booking",
      description: "Click Here to see full website",
      imgUrl: Comm1,
      url: "https://makkahbooking.info/"
    },
    {
      title: "Mess India",
      description: "Click Here to see full website",
      imgUrl: Comm2,
      url: "https://mess-india.web.app/"
    },
    {
      title: "Nakkai",
      description: "Click Here to see full website",
      imgUrl: Comm3,
      url: "https://nakkai.vercel.app/"
    },
  ];
  const CRM = [
    // crm
    {
      title: "CRM",
      description: "Click Here to see full website",
      imgUrl: Customer,
      url: "https://crm-eta-rosy.vercel.app/"
    },
  ];

  const Portfolio = [
    // portfolio
    {
      title: "portfolio",
      description: "Click Here to see full website",
      imgUrl: Comm3,
      url: "https://faisalshakeel.netlify.app/"
    },
  ];


  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={40}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 className="mb-5">Website Development</h2>
                  {/* all NAV */}
                  <Tab.Container id="projects-tabs" defaultActiveKey="Informative">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Link eventKey="Informative">Informative</Nav.Link>
                      <Nav.Link eventKey="Management">Management</Nav.Link>
                      <Nav.Link eventKey="Commerce">E-Commerce</Nav.Link>
                      <Nav.Link eventKey="CRM">CRM</Nav.Link>
                      <Nav.Link eventKey="Portfolio">Portfolio</Nav.Link>
                    </Nav>

                    {/* Content */}
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>


                      {/* Website Development */}

                      <Tab.Pane eventKey="Informative">
                        <Row>
                          {Informative.map((Informative, index) => (
                            <ProjectCard key={index} {...Informative} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Management">
                        <Row>
                          {Management.map((Management, index) => (
                            <ProjectCard key={index} {...Management} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Commerce">
                        <Row>
                          {Commerce.map((Commerce, index) => (
                            <ProjectCard key={index} {...Commerce} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="CRM">
                        <Row>
                          {CRM.map((CRM, index) => (
                            <ProjectCard key={index} {...CRM} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Portfolio">
                        <Row>
                          {Portfolio.map((Portfolio, index) => (
                            <ProjectCard key={index} {...Portfolio} />
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




