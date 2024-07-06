import React, { Component } from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Application} from "./components/Application";
import HomePage from "./screens/HomePage";
import { Website } from "./components/Website";
import { Graphic } from "./components/Graphic";
import { Video } from "./components/Video";
import { TwoDesign } from "./components/TwoDesign";
import { ThreeDesign } from "./components/ThreeDesign";
import { Architecture } from "./components/Architecture";


class App extends Component {


  render() {
    return (
    
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/Website Designing" element={<Website/>} />
        <Route path="/App Development" element={<Application/>} />
        <Route path="/Graphic Designing" element={<Graphic/>} />
        <Route path="/Video Editing" element={<Video/>} />
        <Route path="/2D Designer" element={<TwoDesign/>} />
        <Route path="/3D Designer" element={<ThreeDesign/>} />
        <Route path="/Architecture Designing" element={<Architecture/>} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
