import { LogoChaskys } from "../components/LogoChaskys";
import { Link } from "react-router";
import { useState } from "react";

import "../styles/Register.css";

export const Register = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    user: "",
    pass: "",
    picture: "https://media.istockphoto.com/id/1495088043/es/vector/icono-de-perfil-de-usuario-avatar-o-icono-de-persona-foto-de-perfil-s%C3%ADmbolo-de-retrato.jpg?s=612x612&w=0&k=20&c=mY3gnj2lU7khgLhV6dQBNqomEGj3ayWH-xtpYuCXrzk=",
    category: "black",
    vehicle: "",
  });



  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("registeredUser", JSON.stringify(form));
    alert("Usuario registrado correctamente")
  }

  return (
    <>
      <LogoChaskys descripcion={"Registro Delivery app"} />
      <section id="form">
        <form action="register-user" method="post" onSubmit={handleSubmit}>
          <div className="form-body">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Nombre Completo"
              value={form.name}
              required
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Teléfono"
              value={form.phone}
              required
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Correo"
              value={form.email}
              required
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <input
              type="text"
              name="user"
              id="user"
              placeholder="Usuario"
              value={form.user}
              required
              onChange={(e) => setForm({ ...form, user: e.target.value })}
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Contraseña"
              value={form.pass}
              required
              onChange={(e) => setForm({ ...form, pass: e.target.value })}
            />
            <select id="vehicle" name="vehicle" required onChange={(e) => setForm({...form, vehicle:e.target.value})}>
            <option value="">Seleccionar tu vehículo</option>
            <option value="Moto Lineal">Moto Lineal</option>
            <option value="Auto">Auto</option>
          </select>
          </div>

          <div className="accion-register">
            <button type="submit" className="btn btn-login">
              Crear una cuenta
            </button>
            <Link to="/login" className="btn btn-create-account">
              Iniciar Sesión
            </Link>
          </div>
        </form>
      </section>
    </>
  );
};
