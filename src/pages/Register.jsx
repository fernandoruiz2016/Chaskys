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
  });

  return (
    <>
      <LogoChaskys descripcion={"Registro Delivery app"} />
      <section id="form">
        <form action="register-user" method="post">
          <div className="form-body">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Nombre Completo"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Teléfono"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Correo"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <input
              type="text"
              name="user"
              id="user"
              placeholder="Usuario"
              value={form.user}
              onChange={(e) => setForm({ ...form, user: e.target.value })}
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Contraseña"
              value={form.pass}
              onChange={(e) => setForm({ ...form, pass: e.target.value })}
            />
          </div>

          <div className="accion-register">
            <button type="submit" className="btn btn-login">
              Crear una cuneta
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
