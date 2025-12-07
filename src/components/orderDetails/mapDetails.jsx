import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { OrderHistorial } from "../home/oders/OrderHistorial";
import { Map } from "../shared/Map";

mapboxgl.accessToken = import.meta.env.VITE_MAP_TOKEN;

export const MapDetails = ({ id }) => {
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
        notes: ""
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
        fetchHistorial();
    },);

    return (
        <section className="card monitoring" id="monitoring-historial">
            <OrderHistorial
                id={order.id}
                address={order.address}
                amount={order.amount}
                client={order.client}
                km={order.km}
                date={order.date}
            />

            <div className="notes">
                <div className="notes-subtitle">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.5 25.5C5.84531 25.5 4.5 24.1547 4.5 22.5V7.5C4.5 5.84531 5.84531 4.5 7.5 4.5H22.5C24.1547 4.5 25.5 5.84531 25.5 7.5V17.5078C25.5 18.3047 25.1859 19.0687 24.6234 19.6312L19.6266 24.6234C19.0641 25.1859 18.3 25.5 17.5031 25.5H7.5ZM22.7578 17.25H18.375C17.7516 17.25 17.25 17.7516 17.25 18.375V22.7578L22.7578 17.25Z" fill="#564787" />
                    </svg>
                    <p>Notas</p>
                </div>
                <p className="notes-text">{order.notes}</p>
            </div>

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