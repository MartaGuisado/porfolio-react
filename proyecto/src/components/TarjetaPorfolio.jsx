import React, { useState } from "react";
import { createPortal } from "react-dom";
import "./TarjetaPorfolio.css";
import ModalCarrusel from "./ModalCarrusel"; // 👈 asegúrate de importar el carrusel

function TarjetaPortfolio({ titulo, palabras }) {
  const [modalIndex, setModalIndex] = useState(null);
  const [activo, setActivo] = useState(false); // 👈 para controlar el giro con clic

  const toggleCard = () => {
    setActivo(!activo);
  };

  const modalIsImage =
    modalIndex !== null && palabras[modalIndex]?.grande === true;

  const modalContent =
    modalIndex !== null ? (
      <ModalCarrusel
        imagenes={palabras.map((p) => p.imagen)}
        onClose={() => setModalIndex(null)}
      />
    ) : null;

  return (
    <div
      className={`tarjeta-portfolio-container ${activo ? "activa" : ""}`}
      onClick={toggleCard}
    >
      <div className="tarjeta-portfolio">
        <div className="portfolio-front">
          <h3>{titulo}</h3>
        </div>

        <div className="portfolio-back">
          <h4>Explora</h4>
          <div className="portfolio-palabras-clave">
            {palabras.map((item, index) => (
              <div key={index} className="portfolio-palabra-wrapper">
                {item.Link ? (
                  <a
                    href={item.Link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portfolio-palabra"
                  >
                    {item.texto}
                  </a>
                ) : (
                  <span
                    className="portfolio-palabra"
                    onClick={(e) => {
                      e.stopPropagation(); // evita cerrar la tarjeta
                      setModalIndex(index);
                    }}
                  >
                    {item.texto}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {createPortal(modalContent, document.getElementById("modal-root"))}
    </div>
  );
}

export default TarjetaPortfolio;
