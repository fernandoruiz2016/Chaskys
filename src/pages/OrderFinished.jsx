import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { HeaderHome } from "../components/home/Header";
import { CheckCircle } from "../components/icons/CheckCircle";

import "../styles/OrderFinished.css";

export const OrderFinished = () => {
    const [user, setUser] = useState(null);
    const [order, setOrder] = useState(null);

    const navigate = useNavigate();
    const { id } = useParams();

    // PROPINA FIJA POR AHORA
    const TIP = 3.00;

    // Cargar usuario
    useEffect(() => {
        const stored = localStorage.getItem("registeredUser");

        if (stored) {
            setUser(JSON.parse(stored));
        } else {
            navigate("/Login");
        }
    }, [navigate]);

    // Cargar pedido desde JSON
    useEffect(() => {
        const fetchHistorial = async () => {
            const r = await fetch("/historial.json");
            const { data } = await r.json();
            const found = data.find((o) => o.id == id);
            setOrder(found);
        };

        const fetchData = async () => {
            const r = await fetch("/data.json");
            const { data } = await r.json();
            const found = data.find((o) => o.id == id);

            if (!found) return fetchHistorial();
            setOrder(found);
        };

        fetchData();
    }, [id]);

    useEffect(() => {
        document.body.classList.add("background2");
        return () => document.body.classList.remove("background2");
    }, []);

    if (!user || !order) return null;

    // ======== CALCULOS ==========
    const base = Number(order.amount);     // Lo que paga el joven por el delivery
    const propina = TIP;                   // Propina fija
    const totalGanado = base + propina;    // Gana base + propina

    return (
        <>
            <HeaderHome user={user} setUser={setUser} />

            <div className="finished-card">
                <h2 className="finished-title">Pedido Finalizado</h2>

                <div className="finished-icon">
                    <CheckCircle size={190} />
                </div>

                <h3 className="finished-goodjob">¡Buen trabajo!</h3>
                <p className="finished-desc">La entrega se ha completado.</p>

                <div className="finished-info">
                    
                    {/* TOTAL GANADO REAL */}
                    <div className="row">
                        <span>Total Ganado</span>
                        <strong>S/ {totalGanado.toFixed(2)}</strong>
                    </div>

                    <div className="row">
                        <span>Número de Pedido</span>
                        <strong>#{order.id}</strong>
                    </div>

                    <div className="row">
                        <span>Nombre del Cliente</span>
                        <strong>{order.client}</strong>
                    </div>

                    {/* TARIFA BASE = LO QUE PAGA EL JOVEN */}
                    <div className="row">
                        <span>Tarifa Base</span>
                        <strong>S/ {base.toFixed(2)}</strong>
                    </div>

                    {/* PROPINA */}
                    <div className="row">
                        <span>Propina</span>
                        <strong>S/ {propina.toFixed(2)}</strong>
                    </div>
                </div>

                <button
                    type="button"
                    className="finished-btn"
                    onClick={() => navigate("/Home")}
                >
                    Volver al inicio
                </button>
            </div>
        </>
    );
};
