import React, { useState } from "react";
import "./Tarjeta.css";

function Tarjeta({ titulo, palabras }) {
  const [modalIndex, setModalIndex] = useState(null);

  return (
    <div className="tarjeta-container">
      {/* Tarjeta con efecto flip */}
      <div className="tarjeta">
        <div className="tarjeta-front">
          <h3>{titulo}</h3>
        </div>

        <div className="tarjeta-back">
          <h4>Explora</h4>
          <div className="palabras-clave">
            {palabras.map((item, index) => (
              <span
                key={index}
                className="palabra"
                onClick={() => setModalIndex(index)}
              >
                {item.texto}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Modal de imagen */}
      {modalIndex !== null && (
        <div
          className="modal-overlay"
          onClick={() => setModalIndex(null)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={palabras[modalIndex].imagen} alt={palabras[modalIndex].texto} />
            <p>{palabras[modalIndex].descripcion}</p>
            <button className="close-btn" onClick={() => setModalIndex(null)}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Tarjeta;
