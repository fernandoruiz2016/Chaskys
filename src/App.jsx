import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";

// pages
import { Login } from "./pages/Login";
import { Register } from "./pages/Register"
import { Home } from "./pages/Home"
import { Profile } from "./pages/Profile"
import { EditProfile } from "./pages/EditProfile"
import { RestorePassword } from "./pages/RestorePassword"
import { NewPassword } from "./pages/NewPassword"
import { IngresarEmail } from "./pages/IngresarEmail"
import { MonitoringOrder } from "./pages/MonitoringOrder"
import { ConfirmOrder } from "./pages/ConfirmOrder"
import { HistorialDetails } from "./pages/HistorialDetails"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="home" element={<Home />} />
        <Route path="details/:id" element={<HistorialDetails />} />
        <Route path="profile" element={<Profile />} />
        <Route path="edit-profile" element={<EditProfile />} />
        <Route path="restore-password" element={<RestorePassword />} />
        <Route path="new-password" element={<NewPassword />} />
        <Route path="ingresar-email" element={<IngresarEmail />} />
        <Route path="monitoring-order/:id" element={<MonitoringOrder />} />
        <Route path="confirm-order" element={<ConfirmOrder />} />
      </Routes>
    </>
  );
}

export default App;
