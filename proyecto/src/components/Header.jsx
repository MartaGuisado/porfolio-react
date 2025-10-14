import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Contacto from "../pages/Contacto";

function Header() {
  return (
    <header className="header">
      <h1 className="logo">¡Hola, soy Marta!</h1>
      <nav className="nav">
        <Link to="/">Inicio</Link>
        <Link to="/curriculum">Currículum</Link>
        <Link to="/porfolio">Porfolio</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>
    </header>
  );
}

export default Header;