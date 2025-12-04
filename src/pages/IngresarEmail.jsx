import { HeaderProfile } from '../components/profile/Header'
import { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

import "../styles/IngresarEmail.css";


export const IngresarEmail = () => {
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState("");

    const navigate = useNavigate();

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

    const handleSend = () => {
        if (email === user.email) {
            navigate("/restore-password")
            return
        }

        alert('Ingresa un correo válido.')
    }

    return (
        <>
            <HeaderProfile page="Recuperar Contraseña" backPage="/login" ></HeaderProfile>
            <div className='section-resend'>
                <h3 className='subtitle-pass'>Ingresa tu correo</h3>
                <p className='text-pass' id="verify-mail">Te enviaremos un código de verificación a tu correo</p>
                <label className='subtitle-info' htmlFor="edit-email">
                    <input className='input-edit' type='text' id="edit-email" value={email} placeholder='Correo electrónico' required onChange={(e) => setEmail(e.target.value)} />
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='small-icon'>
                        <g clipPath="url(#clip0_239_1084)">
                            <path d="M22 7.53516V17.0002C22 17.7654 21.7077 18.5017 21.1827 19.0584C20.6578 19.6152 19.9399 19.9503 19.176 19.9952L19 20.0002H5C4.23479 20.0002 3.49849 19.7078 2.94174 19.1829C2.38499 18.6579 2.04989 17.9401 2.005 17.1762L2 17.0002V7.53516L11.445 13.8322L11.561 13.8982C11.6977 13.965 11.8478 13.9997 12 13.9997C12.1522 13.9997 12.3023 13.965 12.439 13.8982L12.555 13.8322L22 7.53516Z" fill="#564787" />
                            <path d="M19.0001 4C20.0801 4 21.0271 4.57 21.5551 5.427L12.0001 11.797L2.44507 5.427C2.6958 5.01977 3.04028 4.6784 3.44978 4.43138C3.85927 4.18436 4.3219 4.03886 4.79907 4.007L5.00007 4H19.0001Z" fill="#564787" />
                        </g>
                        <defs>
                            <clipPath id="clip0_239_1084">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </label>
                <p className='btn-edit' onClick={handleSend}>Verificar código</p>
            </div>
        </>
    )
}