<<<<<<< HEAD
import { useNavigate } from "react-router-dom";

export const Order = ({ id, client, amount, address, km }) => {
  const navigate = useNavigate();

  const handlerRedictMonitoring = () => {
    navigate("/monitoring-order/" + id);
  };

  return (
    <div className="card-order" onClick={handlerRedictMonitoring}>
      <div className="card-order-name-summary">
        <span>{client}</span>
        <span>S/ {amount}</span>
      </div>
      <div className="card-order-details">
        <span>{address.origin}</span>
        <div>
          <span>Distancia: </span>
          <span>{km}km</span>
        </div>
        <span>{address.destination}</span>
=======
export const Order = () => {
  return (
    <div className="card-order">
      <div className="card-order-name-summary">
        <span>José Peréz</span>
        <span>S/ 10.20</span>
      </div>
      <div className="card-order-details">
        <span>Av. Abancay 123</span>
        <div>
            <span>Distancia: </span>
            <span>10km</span>
        </div>
        <span>Jr. Apurimac 555</span>
>>>>>>> 18fb091b9b9478649c9c141dc496cf59ba7e4b05
        <span></span>
      </div>
    </div>
  );
};
