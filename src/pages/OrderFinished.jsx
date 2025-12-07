import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { HeaderHome } from '../components/home/Header'
import { useParams } from "react-router-dom";

export const OrderFinished = () => {
    const [user, setUser] = useState(null);
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

    useEffect(() => {
        const stored = localStorage.getItem("registeredUser");
        if (stored) {
            setUser(JSON.parse(stored));
        } else {
            navigate("/Login")
        }
    }, []);

    useEffect(() => {
        document.body.classList.add("background2");
        return () => {
            document.body.classList.remove("background2");
        };
    }, []);

    const { id } = useParams();

    const navigate = useNavigate();
    
    return (
        <>
        {user && (<HeaderHome user={user} setUser={setUser}></HeaderHome>)}
        </>
    )
}