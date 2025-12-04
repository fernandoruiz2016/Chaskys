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

  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("registeredUser", JSON.stringify(form));
    // alert("Usuario registrado correctamente")
    setOpen(true)
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
            <p className='no-code'>¿Ya tienes cuenta? <Link className='text-login' to="/login">Iniciar sesión</Link></p>
          </div>
        </form>
      </section>
      {open && (
        <div className="modal">
          <div className="modal-content">
            <svg width="114" height="110" viewBox="0 0 114 110" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M90.205 86.7975H90.2501M90.205 86.7975C87.2472 89.6184 81.8868 88.9158 78.1277 88.9158C73.5135 88.9158 71.2915 89.7838 67.9983 92.951C65.1944 95.6481 61.4352 100.502 57.0001 100.502C52.5651 100.502 48.8059 95.6481 46.0018 92.951C42.7087 89.7838 40.4867 88.9158 35.8724 88.9158C32.1134 88.9158 26.753 89.6184 23.7952 86.7975C20.8137 83.9542 21.5475 78.7775 21.5475 75.1388C21.5475 70.5408 20.5019 68.4266 17.0972 65.1521C12.0325 60.2814 9.50022 57.8456 9.50012 54.8195C9.50017 51.7931 12.0324 49.3577 17.097 44.4869C20.1363 41.5639 21.5475 38.6674 21.5475 34.5001C21.5475 30.8847 20.817 25.7294 23.7501 22.8847C26.7067 20.0174 32.0892 20.7231 35.8725 20.7231C40.2054 20.7231 43.2171 19.366 46.2563 16.4431C51.321 11.5722 53.8533 9.13672 57.0001 9.13672C60.147 9.13672 62.6792 11.5722 67.7437 16.4431C70.7823 19.3654 73.7938 20.7231 78.1277 20.7231C81.8868 20.7231 87.2477 20.0205 90.2055 22.8416C93.1866 25.685 92.4527 30.8616 92.4527 34.5001C92.4527 39.0982 93.4987 41.2123 96.903 44.4869C101.968 49.3577 104.5 51.7931 104.5 54.8195C104.5 57.8456 101.968 60.2814 96.903 65.1521C93.4982 68.4266 92.4527 70.5408 92.4527 75.1388C92.4527 78.7775 93.1866 83.9542 90.205 86.7975Z" stroke="#F2FDFF" strokeWidth="8.5" />
              <path d="M42.75 58.8987L51.3 66.2403L71.25 43.3989" stroke="#F2FDFF" strokeWidth="8.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p>¡Listo! Tu cuenta ha sido creada</p>
            <Link className="continue" to="/home">
              Continuar
            </Link>
          </div>

        </div>
      )}
    </>
  );
};
