// Contacto.jsx
import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./Contacto.css";

function Contacto() {
  const [showModal, setShowModal] = useState(false);
  const [formKey, setFormKey] = useState(0); // cuando cambie, remonta el formulario hijo

  // Handler cuando el formulario hijo notifica un envío exitoso
  const handleSuccess = () => {
    setShowModal(true);

    // Cierra el modal automáticamente tras 4s y remonta el formulario para permitir un nuevo envío
    const timer = setTimeout(() => {
      setShowModal(false);
      setFormKey((k) => k + 1); // remonta ContactForm -> nuevo hook useForm
    }, 4000);

    return () => clearTimeout(timer);
  };

  // Cierre manual: oculta modal y remonta el formulario para que el siguiente envío funcione
  const handleManualClose = () => {
    setShowModal(false);
    setFormKey((k) => k + 1);
  };

  return (
    <div className={`contacto-page ${showModal ? "no-scroll" : ""}`}>
      <h2>¡Hablemos!</h2>

      {/* Key para forzar remount del form cuando cambiamos formKey */}
      <ContactForm key={formKey} onSuccess={handleSuccess} />

      {/* Modal de confirmación */}
      {showModal && (
        <div className="modal-overlay locked" onClick={handleManualClose}>
          <div
            className="modal-content success-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <h3>¡Gracias!</h3>
            <p>Tu mensaje ha sido enviado correctamente. Te responderé en breve 😊</p>
            <button className="close-btn" onClick={handleManualClose}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * ContactForm: componente hijo que contiene el hook useForm de Formspree.
 * - onSuccess (callback) se llama cuando state.succeeded pasa a true.
 * - Al remountear este componente (cambio de key desde el padre), se re-inicializa useForm.
 */
function ContactForm({ onSuccess }) {
  // reemplaza el ID por tu ID real de Formspree
  const [state, handleSubmit] = useForm("mldpagkp");

  const [formData, setFormData] = useState({
    motivo: "",
    nombre: "",
    email: "",
    telefono: "",
    metodo: "",
    mensaje: "",
    acepta: false,
  });

  useEffect(() => {
    if (state.succeeded) {
      // notifica al padre que la sumisión fue correcta
      if (typeof onSuccess === "function") onSuccess();

      // resetea el formulario localmente (por si se opta por no remontar)
      setFormData({
        motivo: "",
        nombre: "",
        email: "",
        telefono: "",
        metodo: "",
        mensaje: "",
        acepta: false,
      });
    }
  }, [state.succeeded, onSuccess]);

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

    // Envía a Formspree; la respuesta actualizará `state` asíncronamente
    await handleSubmit(e);
    // no comprobar state.succeeded aquí: useEffect lo hará cuando cambie
  };

  return (
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
          placeholder="Escribe tu teléfono si prefieres que te llame"
          value={formData.telefono}
          onChange={handleChange}
        />
      </label>

      <label>
        Método de contacto preferido:
        <select name="metodo" value={formData.metodo} onChange={handleChange}>
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
        <ValidationError prefix="Mensaje" field="mensaje" errors={state.errors} />
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

      <button type="submit" className="btn enviar-btn" disabled={state.submitting}>
        {state.submitting ? "Enviando..." : "Enviar"}
      </button>
    </form>
  );
}

export default Contacto;
