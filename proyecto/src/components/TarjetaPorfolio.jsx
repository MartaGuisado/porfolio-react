import React, { useState } from "react";
import { createPortal } from "react-dom";
import "./TarjetaPorfolio.css";

function TarjetaPortfolio({ titulo, palabras }) {
  const [modalIndex, setModalIndex] = useState(null);

  const modalIsImage =
  modalIndex !== null && palabras[modalIndex]?.grande === true;

  const modalContent =
    modalIndex !== null ? (
      <div
        className="portfolio-modal-overlay"
        onClick={() => setModalIndex(null)}
      >
        <div
          className={`portfolio-modal-content ${
            modalIsImage ? "modal-imagen-grande" : ""
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={palabras[modalIndex].imagen}
            alt={palabras[modalIndex].texto}
          />
          <p>{palabras[modalIndex].descripcion}</p>
          <button
            className="portfolio-close-btn"
            onClick={() => setModalIndex(null)}
          >
            Cerrar
          </button>
        </div>
      </div>
    ) : null;

  return (
    <div className="tarjeta-portfolio-container">
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
                    onClick={() => setModalIndex(index)}
                  >
                    {item.texto}
                  </span>
                )}

                <div className="portfolio-imagen-hover">
                  {item.Link ? (
                    <a
                      href={item.Link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={item.imagen} alt={item.texto} />
                    </a>
                  ) : (
                    <img
                      src={item.imagen}
                      alt={item.texto}
                      onClick={() => setModalIndex(index)}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Renderizamos el modal en un portal fuera del árbol transformado */}
      {createPortal(modalContent, document.getElementById("modal-root"))}
    </div>
  );
}

export default TarjetaPortfolio;
