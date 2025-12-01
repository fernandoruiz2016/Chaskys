<<<<<<< HEAD
import { useEffect, useState } from "react";
import { Order } from "./oders/Order";

export const OdersHome = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        if (!response.ok) {
          alert("no se encontr el archivo");
        }
        const { data } = await response.json();
        setOrders(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="card order-home">
      <div className="order-home-title">
        <span>PEDIDOS DISPONIBLES</span>
      </div>
      {orders.map(({ id, client, amount, address, km }) => (
        <Order
          key={id}
          id={id}
          client={client}
          amount={amount}
          address={address}
          km={km}
        />
      ))}
    </section>
  );
};
=======
import { Order } from './oders/Order'

export const OdersHome = () => {
   return (
    <section className="card order-home">
        <div className='order-home-title'>
            <span>PEDIDOS DISPONIBLES</span>
        </div>
        <Order/>
        <Order/>
        <Order/>
        <Order/>
        <Order/>
        <Order/>
        <Order/>
    </section>
   ) 
}
>>>>>>> 18fb091b9b9478649c9c141dc496cf59ba7e4b05
