import React from "react";
import "../App.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {About} from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { Experience } from "../components/Experience";

const HomePage = () => {
  const resumeBasicInfo = {
    section_name: {
      skills: "Skills"
    }
  };

  const sharedSkills = {
    icons: [
      { name: "ReactJS", class: "devicon-react-plain", level: "95" },
      { name: "Three.js", class: "devicon-threejs-original", level: "70" },
      { name: "AngularJS", class: "devicon-angularjs-plain", level: "80" },
      { name: "NodeJS", class: "devicon-nodejs-plain", level: "65" },
      { name: "MongoDB", class: "devicon-mongodb-plain", level: "70" },
      { name: "TailwindCss", class: "devicon-tailwindcss-plain", level: "95" }, 
      { name: "Express", class: "devicon-express-original", level: "70" },  
      { name: "PHP", class: "devicon-php-plain", level: "60" },
      { name: "Flutter", class: "devicon-flutter-plain", level: "90" },
      { name: "Illustrator", class: "devicon-illustrator-plain", level: "85" },  
    ]
  };


  const sharedData = {
    name: "Mubashira Fatima",
    titles: [
      "Website Developer", "Mobile Application Developer", "Graphic Designer",
      "2D Designer", "3D Designer", "Architecture Designer", "Video Editor"
    ],
    social: [
      {
        name: "github",
        url: "https://github.com",
        class: "fab fa-whatsapp-square"
      }
    ],
   
  };

    return (
    <div>
        <Header sharedData={sharedData}/>
        <About/>
        <Skills sharedSkills={sharedSkills} resumeBasicInfo={resumeBasicInfo}/>
        <Projects/>
        <Experience/>
        <Footer/>
        </div>
    );
  
  }

  export default HomePage

