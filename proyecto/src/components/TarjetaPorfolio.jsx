import React, { useState } from "react";
import { createPortal } from "react-dom";
import "./TarjetaPorfolio.css";
import ModalCarrusel from "./ModalCarrusel";

function TarjetaPortfolio({ titulo, palabras }) {
  const [activo, setActivo] = useState(false);
  const [modalAbierto, setModalAbierto] = useState(false);

  const toggleCard = () => setActivo(!activo);

  const abrirModal = (e) => {
    e.stopPropagation();
     console.log("🟢 abrirModal ejecutado"); 
    setModalAbierto(true);
  };

  const cerrarModal = () => setModalAbierto(false);

  return (
    <div
  className={`tarjeta-portfolio-container ${activo ? "activa" : ""}`}
  onClick={() => setActivo(!activo)}
>
      <div className="tarjeta-portfolio">
        <div className="portfolio-front">
          <h3>{titulo}</h3>
        </div>

        <div className="portfolio-back">
          <h4
            className="portfolio-ver-trabajos"
            onClick={abrirModal}
          >
            Ver trabajos
          </h4>
        </div>
      </div>

      {modalAbierto &&
        createPortal(
          <ModalCarrusel
            imagenes={palabras.map((p) => p.imagen)}
            descripciones={palabras.map((p) => p.descripcion)}
            onClose={cerrarModal}
          />,
          document.getElementById("modal-root")
        )}
    </div>
  );
}

export default TarjetaPortfolio;
