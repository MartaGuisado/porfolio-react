import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="logo">¡Hola, soy Marta!</h1>
      <nav className="nav">
        <Link to="/">Inicio</Link>
        <Link to="/curriculum">Currículum</Link>
        <Link to="/porfolio">Porfolio</Link>
        <Link to="/aficiones">Aficiones</Link>
      </nav>
    </header>
  );
}

export default Header;