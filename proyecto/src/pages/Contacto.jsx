import React, { useState } from "react";
import "./Contacto.css";

function Contacto() {
  const [formData, setFormData] = useState({
    motivo: "",
    nombre: "",
    email: "",
    telefono: "",
    metodo: "",
    mensaje: "",
    acepta: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.acepta) {
      alert("Debes aceptar que nos comuniquemos contigo.");
      return;
    }
    console.log("Formulario enviado:", formData);
    alert("¡Gracias! Tu mensaje ha sido enviado.");
    setFormData({
      motivo: "",
      nombre: "",
      email: "",
      telefono: "",
      metodo: "",
      mensaje: "",
      acepta: false,
    });
  };

  return (
    <div className="contacto-page">
      <h2>¡Hablemos!</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Motivo del contacto:
          <select name="motivo" value={formData.motivo} onChange={handleChange} required>
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


        <button type="submit" className="btn enviar-btn">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Contacto;
