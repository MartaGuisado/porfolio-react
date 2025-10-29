import React, { useEffect, useState } from "react";
import "./ModalCarrusel.css";

/*
  ModalCarrusel.jsx
  - overlay con z-index muy alto para asegurarse que queda sobre el header
  - cross-fade entre imágenes (fade out -> cambiar -> fade in)
  - ampliar imagen al hacer click (se cierra con click sobre overlay o en la imagen ampliada)
  - usa SVGs inline para flechas / cerrar (sin dependencias)
*/

function IconClose({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
      <path fill="currentColor" d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7A1 1 0 0 0 5.7 7.11L10.59 12l-4.9 4.89a1 1 0 1 0 1.41 1.41L12 13.41l4.89 4.9a1 1 0 0 0 1.41-1.41L13.41 12l4.9-4.89a1 1 0 0 0 0-1.4z"></path>
    </svg>
  );
}

function IconLeft({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
      <path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
    </svg>
  );
}

function IconRight({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
      <path fill="currentColor" d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"></path>
    </svg>
  );
}

export default function ModalCarrusel({ imagenes = [], onClose }) {
  const [indice, setIndice] = useState(0);
  const [displaySrc, setDisplaySrc] = useState(imagenes[0] || "");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imagenAmpliada, setImagenAmpliada] = useState(null);

  // si las imagenes cambian (nuevo set props), reajustamos
  useEffect(() => {
    setIndice(0);
    setDisplaySrc(imagenes[0] || "");
    setImagenAmpliada(null);
  }, [imagenes]);

  const cambiarA = (nuevoIndex) => {
    if (isTransitioning || nuevoIndex === indice) return;
    setIsTransitioning(true);
    // fade-out (200ms), cambiar src, fade-in
    setTimeout(() => {
      const safeIndex = (nuevoIndex + imagenes.length) % imagenes.length;
      setIndice(safeIndex);
      setDisplaySrc(imagenes[safeIndex]);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 220); // duracion de fade-in
    }, 180); // tiempo de fade-out
  };

  const siguiente = (e) => {
    e?.stopPropagation();
    cambiarA(indice + 1);
  };
  const anterior = (e) => {
    e?.stopPropagation();
    cambiarA(indice - 1);
  };

  const cerrar = () => {
    setImagenAmpliada(null);
    onClose && onClose();
  };

  return (
    <div
      className="modal-overlay"
      onClick={cerrar}
      role="dialog"
      aria-modal="true"
    >
      {!imagenAmpliada ? (
        <div
          className="modal-carrusel"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="cerrar-modal"
            onClick={cerrar}
            aria-label="Cerrar"
            title="Cerrar"
          >
            <IconClose size={20} />
          </button>

          <button
            className="nav-btn izquierda"
            onClick={anterior}
            aria-label="Anterior"
            title="Anterior"
          >
            <IconLeft />
          </button>

          <div className="imagen-container">
            {/* imagen principal: controlamos la animación por clase */}
            <img
              key={displaySrc} /* key ayuda a garantizar re-render limpio */
              src={displaySrc}
              alt={`Imagen ${indice + 1}`}
              className={`imagen-carrusel ${isTransitioning ? "fade-out" : "fade-in"}`}
              onClick={() => setImagenAmpliada(displaySrc)}
              draggable={false}
            />
          </div>

          <button
            className="nav-btn derecha"
            onClick={siguiente}
            aria-label="Siguiente"
            title="Siguiente"
          >
            <IconRight />
          </button>
        </div>
      ) : (
        <div
          className="imagen-ampliada"
          onClick={() => setImagenAmpliada(null)}
        >
          <img src={imagenAmpliada} alt="Ampliada" className="fade-in enlarged" draggable={false} />
        </div>
      )}
    </div>
  );
}
