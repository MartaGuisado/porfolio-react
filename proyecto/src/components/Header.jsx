import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./Header.css";

function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  const cerrarMenu = () => {
    setMenuAbierto(false);
  };

  return (
    <header className="header">
      <h1 className="headline">Diseñadora gráfica &amp; web developer | Estrategia y creatividad{" "}
      <span className="location">
        <FaMapMarkerAlt className="icon"/> Sevilla
      </span></h1>

      {/* Botón hamburguesa */}
      <button
        className={`hamburger ${menuAbierto ? "active" : ""}`}
        onClick={toggleMenu}
        aria-label="Abrir menú"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {/* Navegación */}
      <nav className={`nav ${menuAbierto ? "active" : ""}`}>
        <Link to="/" onClick={cerrarMenu}>Inicio</Link>
        <Link to="/curriculum" onClick={cerrarMenu}>Currículum</Link>
        <Link to="/porfolio" onClick={cerrarMenu}>Porfolio</Link>
        <Link to="/experiencia" onClick={cerrarMenu}>Experiencia</Link>
        <Link to="/contacto" onClick={cerrarMenu}>Contacto</Link>
      </nav>
    </header>
  );
}

export default Header;