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
           {(() => {
  const palabra = palabras?.[indice];
  const url = palabra?.pdf || palabra?.link || palabra?.Link;

  return (
    <img
      src={imagenes[indice]}
      alt="..."
      className={zoom ? "zoom-activo" : ""}
      onClick={(e) => {
        e.stopPropagation();

        // si hay enlace y NO está en zoom → abre enlace
        if (url && !zoom) {
          window.open(url, "_blank");
          return;
        }

        // si está en zoom → salir del zoom
        setZoom(!zoom);
      }}
    />
  );
})()}
            <p className="carrusel-descripcion">{descripciones[indice]}</p>

{/* ===== Detectar enlace web o PDF ===== */}
{(() => {
  const palabra = palabras?.[indice];
  if (!palabra) return null;

  // Detectamos pdf o link (minúscula o mayúscula)
  const url = palabra.pdf || palabra.link || palabra.Link;

  if (!url) return null;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="carrusel-enlace"
      onClick={(e) => e.stopPropagation()} // evita cerrar modal al clicar
    >
      {palabra.pdf ? "Ver PDF completo" : "Visitar sitio web"}
    </a>
  );
})()}
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
