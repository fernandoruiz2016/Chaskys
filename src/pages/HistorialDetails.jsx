import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { HeaderProfile } from "../components/profile/Header";
import { MapDetails } from "../components/orderDetails/mapDetails";
import '../styles/ConfirmOrder.css'

import "../styles/HistorialDetails.css";

export const HistorialDetails = () => {
    const { id } = useParams();

    useEffect(() => {
        document.body.classList.add("background2");

        return () => {
            document.body.classList.remove("background2");
        };
    }, []);

    return (
        <>
            <div className=''>
                <HeaderProfile page="Detalles de Pedido" backPage="/home" ></HeaderProfile>
                <MapDetails id={id} />
            </div>
        </>
    )
}