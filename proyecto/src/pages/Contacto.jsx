import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./Contacto.css";

function Contacto() {
  const [state, handleSubmit] = useForm("mldpagkp"); // tu ID de Formspree
  const [formData, setFormData] = useState({
    motivo: "",
    nombre: "",
    email: "",
    telefono: "",
    metodo: "",
    mensaje: "",
    acepta: false,
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleLocalSubmit = async (e) => {
    e.preventDefault();
    if (!formData.acepta) {
      alert("Debes aceptar que nos comuniquemos contigo.");
      return;
    }

    await handleSubmit(e); // Envía los datos a Formspree

    if (!state.errors.length) {
      setShowModal(true);
      setFormData({
        motivo: "",
        nombre: "",
        email: "",
        telefono: "",
        metodo: "",
        mensaje: "",
        acepta: false,
      });

      // 🔹 Cierra el modal automáticamente después de 4 segundos
      setTimeout(() => setShowModal(false), 4000);
    }
  };

  return (
    <div className={`contacto-page ${showModal ? "no-scroll" : ""}`}>
      <h2>¡Hablemos!</h2>
      <form className="contact-form" onSubmit={handleLocalSubmit}>
        <label>
          Motivo del contacto:
          <select
            name="motivo"
            value={formData.motivo}
            onChange={handleChange}
            required
          >
            <option value="">Selecciona un motivo</option>
            <option value="informacion">Información</option>
            <option value="proyecto">Propuesta de proyecto</option>
            <option value="otros">Otros</option>
          </select>
        </label>

        <label>
          Nombre completo:
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Correo electrónico:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </label>

        <label>
          Teléfono:
          <input
            type="tel"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
          />
        </label>

        <label>
          Método de contacto preferido:
          <select
            name="metodo"
            value={formData.metodo}
            onChange={handleChange}
          >
            <option value="">Selecciona un método</option>
            <option value="email">Correo electrónico</option>
            <option value="telefono">Teléfono</option>
          </select>
        </label>

        <label>
          Mensaje:
          <textarea
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            required
          />
          <ValidationError
            prefix="Mensaje"
            field="mensaje"
            errors={state.errors}
          />
        </label>

        <div className="checkbox-container">
          <input
            type="checkbox"
            name="acepta"
            id="acepta"
            checked={formData.acepta}
            onChange={handleChange}
            required
          />
          <label htmlFor="acepta">
            Acepto que me contacten por correo electrónico y/o teléfono
          </label>
        </div>

        <button
          type="submit"
          className="btn enviar-btn"
          disabled={state.submitting}
        >
          {state.submitting ? "Enviando..." : "Enviar"}
        </button>
      </form>

      {/* 🔹 Modal de confirmación con fondo bloqueado */}
      {showModal && (
        <div className="modal-overlay locked">
          <div className="modal-content success-modal">
            <h3>¡Gracias!</h3>
            <p>Tu mensaje ha sido enviado correctamente. Te responderé en breve 😊</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contacto;
