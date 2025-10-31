import React, { useState } from "react";
import "./ModalCarrusel.css";

function ModalCarrusel({ imagenes, descripciones, onClose, palabras }) {
  const [indice, setIndice] = useState(0);
  const [zoom, setZoom] = useState(false);

  const siguiente = () => setIndice((indice + 1) % imagenes.length);
  const anterior = () => setIndice((indice - 1 + imagenes.length) % imagenes.length);
  const toggleZoom = () => setZoom(!zoom);

  return (
    <div
      className={`modal-carrusel-overlay ${zoom ? "zoom-activo" : ""}`}
      onClick={onClose}
    >
      <div
        className="modal-carrusel-contenido"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="cerrar-modal" onClick={onClose}>
          ✕
        </button>

        <div className="carrusel">
          <button className="anterior" onClick={anterior}>
            ‹
          </button>

          <div className="carrusel-imagen">
            <img
              src={imagenes[indice]}
              alt="..."
              className={zoom ? "zoom-activo" : ""}
              onClick={() => setZoom(!zoom)}
            />
            <p className="carrusel-descripcion">{descripciones[indice]}</p>

            {/* 👇 Enlace al PDF si existe */}
            {palabras?.[indice]?.pdf && (
              <a
                href={palabras[indice].pdf}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver PDF completo
              </a>
            )}
          </div>

          <button className="siguiente" onClick={siguiente}>
            ›
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalCarrusel;
