import { useState, useEffect } from 'react'
import { Order } from "../home/oders/Order";
import { Map } from "../shared/Map";
import { useNavigate } from "react-router-dom";

export const MapConfirmMonitoring = ({ id }) => {
    const [order, setOrder] = useState({
        id: 0,
        client: "",
        amount: "",
        address: {
            origin: "",
            destination: "",
        },
        origin: [-77.029842, -12.04574],
        destination: [-77.029842, -12.04574],
        km: "",
        date: "",
        notes: "",
    });

    useEffect(() => {
        const fetchHistorial = async () => {
            try {
                const response = await fetch("/historial.json");
                if (!response.ok) {
                    alert("no se encontró el archivo");
                }
                const { data } = await response.json();
                const findOrder = data.find((e) => e.id == id);
                setOrder(findOrder);
            } catch (error) {
                console.error(error);
            }
        }
        const fetchData = async () => {
            try {
                const response = await fetch("/data.json");
                if (!response.ok) {
                    alert("No se encontró el archivo");
                }
                const { data } = await response.json();
                const findOrder = data.find((e) => e.id == id);
                if (!findOrder) {
                    fetchHistorial();
                    return
                }
                setOrder(findOrder);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    },);

    const navigate = useNavigate();

    const handleFinished = () => {
        navigate("/order-finished/" + id)
    }

    return (
        <section className="card monitoring">
            <div className="btns-map-confirm">
                <button className="btn-accept-delivery" onClick={handleFinished}>Pedido entregado</button>
                <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24.5" cy="24.5" r="24.5" fill="#9AD4D6"  onClick={() => alert("Vuelva a intentarlo en otro momento")}/>
                    <path d="M27.6251 11.5C33.6298 11.5 38.5001 16.3703 38.5001 22.375C38.5001 22.9984 37.9985 23.5 37.3751 23.5C36.7517 23.5 36.2501 22.9984 36.2501 22.375C36.2501 17.6125 32.3876 13.75 27.6251 13.75C27.0017 13.75 26.5001 13.2484 26.5001 12.625C26.5001 12.0016 27.0017 11.5 27.6251 11.5ZM28.0001 20.5C28.8298 20.5 29.5001 21.1703 29.5001 22C29.5001 22.8297 28.8298 23.5 28.0001 23.5C27.1704 23.5 26.5001 22.8297 26.5001 22C26.5001 21.1703 27.1704 20.5 28.0001 20.5ZM26.5001 17.125C26.5001 16.5016 27.0017 16 27.6251 16C31.1454 16 34.0001 18.8547 34.0001 22.375C34.0001 22.9984 33.4985 23.5 32.8751 23.5C32.2517 23.5 31.7501 22.9984 31.7501 22.375C31.7501 20.0969 29.9032 18.25 27.6251 18.25C27.0017 18.25 26.5001 17.7484 26.5001 17.125ZM18.2548 13.0656C19.1782 12.8125 20.1438 13.2859 20.5095 14.1672L22.4079 18.7281C22.7314 19.5016 22.5063 20.3969 21.8548 20.9312L19.7876 22.6234C21.311 25.9797 23.9595 28.7172 27.2548 30.3531L29.0642 28.1406C29.5939 27.4891 30.4892 27.2688 31.2673 27.5875L35.8282 29.4906C36.7095 29.8562 37.1829 30.8219 36.9298 31.7453L36.8595 32.0031C36.0345 35.0359 33.1048 37.6234 29.5282 36.8688C21.3251 35.1297 14.8704 28.675 13.1314 20.4719C12.3767 16.8953 14.9642 13.9656 17.9923 13.1359L18.2501 13.0656H18.2548Z" fill="#101935" />
                </svg>

            </div>
            <Order
                id={order.id}
                address={order.address}
                amount={order.amount}
                client={order.client}
                km={order.km}
                date={order.date}
            />
            {order.id ? (
                <div className="map" style={{ display: "block" }}>
                    <Map mOrigin={order.origin} mDestination={order.destination} />
                </div>
            ) : (
                <div></div>
            )}
        </section>
    );
};
