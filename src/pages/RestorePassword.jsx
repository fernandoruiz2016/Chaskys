import { HeaderProfile } from '../components/profile/Header'
import { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import OtpInput from 'react-otp-input';

import "../styles/RestorePassword.css";

export const RestorePassword = () => {
    const [error, setError] = useState(false);
    const [otp, setOtp] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        document.body.classList.add("background2");

        return () => {
            document.body.classList.remove("background2");
        };
    }, []);

    const handleVerify = () => {
        if (otp === '123456') {
            alert('Codigo verificado')
            navigate('/')
            return
        }
        setError(true);
    }


    return (
        <>
            <HeaderProfile page="Recuperar Contraseña" backPage="/edit-profile" ></HeaderProfile>
            <div className='section-resend'>
                <h3 className='subtitle-pass'>Hemos enviado un código a tu correo</h3>
                <p className='text-pass'>Revisa tu bandeja de entrada y escribe aquí el código</p>
                <OtpInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={6}
                    placeholder='000000'
                    inputStyle={{
                        minWidth: "40px",
                        minHeight: "40px",
                        fontSize: "20px",
                        borderRadius: "14px",
                        border: "2px solid #9A9A9A",
                        textAlign: "center",
                        padding: 0,
                        lineHeight: "30px",
                    }}
                    containerStyle={{
                        display: "flex",
                        gap: "5px",
                    }}
                    renderSeparator={<span> </span>}
                    renderInput={(props) => <input {...props} />}
                />
                <p className='btn-edit' to="/restore-password" onClick={handleVerify}>Verificar código</p>
                {error && (
                    <p className='error'>
                        Código incorrecto
                    </p>
                )}
                <p className='text-pass'>¿No recibiste el código? <span className='resend'>Reenviar</span></p>
            </div>
        </>
    )
}