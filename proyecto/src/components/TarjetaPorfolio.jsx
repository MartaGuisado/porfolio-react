import React, { useState } from "react";
import { createPortal } from "react-dom";
import "./TarjetaPorfolio.css";
import ModalCarrusel from "./ModalCarrusel";

function TarjetaPortfolio({ titulo, palabras }) {
  const [activo, setActivo] = useState(false);
  const [modalAbierto, setModalAbierto] = useState(false);

  const handleToggle = () => setActivo(!activo);

  const abrirModal = (e) => {
    e.stopPropagation();
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
    setActivo(false); // 👈 Al cerrar el modal, la tarjeta vuelve a su posición original
  };

  return (
    <div
      className={`tarjeta-portfolio-container ${activo ? "activa" : ""}`}
      onClick={handleToggle}
    >
      <div className="tarjeta-portfolio">
        <div className="portfolio-front">
          <h3>{titulo}</h3>
        </div>

        <div className="portfolio-back">
           <p>{palabras?.[0]?.descripcion || "Descripción del proyecto"}</p>
          <div className="portfolio-ver-trabajos" onClick={abrirModal}>
            Ver trabajos
          </div>
        </div>
      </div>

      {modalAbierto &&
        createPortal(
          <ModalCarrusel
            imagenes={palabras.map((p) => p.imagen)}
            descripciones={palabras.map((p) => p.descripcion)}
            palabras={palabras}
            onClose={cerrarModal}
          />,
          document.getElementById("modal-root")
        )}
    </div>
  );
}

export default TarjetaPortfolio;
