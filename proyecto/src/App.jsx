import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Curriculum from "./pages/Curriculum";
import Porfolio from "./pages/Porfolio";
import Experiencia from "./pages/Experiencia";
import Contacto from "./pages/Contacto";
import Layout from "./components/Layout";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/porfolio" element={<Porfolio />} /> 
        <Route path="/experiencia" element ={<Experiencia/>}/>
        <Route path="/contacto" element={<Contacto />} />
      </Route>
    </Routes>
  );
}

export default App;
