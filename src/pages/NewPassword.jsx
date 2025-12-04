import { HeaderProfile } from '../components/profile/Header'
import { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

import "../styles/NewPassword.css";

export const NewPassword = () => {
    const [user, setUser] = useState(null);

    const [newPass, setNewPass] = useState("");
    const [repeatPass, setRepeatPass] = useState("");
    const [passError, setPassError] = useState(false);
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
        if (!newPass && !repeatPass) {
            setPassError(true);
        } else {
            setPassError(newPass !== repeatPass);
        }
    }, [newPass, repeatPass]);

    useEffect(() => {
        document.body.classList.add("background2");

        return () => {
            document.body.classList.remove("background2");
        };
    }, []);

    const handleSave = () => {
        if (!passError && newPass.trim() !== "") {
            const updatedUser = {
                ...user,
                pass: newPass
            };
            setUser(updatedUser);
            localStorage.setItem("registeredUser", JSON.stringify(updatedUser));
            alert('Cambios guardados exitosamente');
            navigate("/profile");
        } else {
            alert('No se pudo guardar la contraseña')
        }
    }

    return (
        <>
            <HeaderProfile page="Recuperar Contraseña" backPage="/edit-profile" ></HeaderProfile>
            <div className='section-resend'>
                <h3 className='subtitle-pass' id="text-new-pass">Crea una nueva contraseña</h3>
                <div className='profile-info'>
                    <label className='subtitle-info' htmlFor="edit-pass-new">Nueva Contraseña
                        <input className='input-edit' type='password' id="edit-pass-new" value={newPass || ""} placeholder='********' onChange={(e) => setNewPass(e.target.value)} />
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='small-icon'>
                            <g clipPath="url(#clip0_252_267)">
                                <path d="M12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V10C17.7956 10 18.5587 10.3161 19.1213 10.8787C19.6839 11.4413 20 12.2044 20 13V19C20 19.7956 19.6839 20.5587 19.1213 21.1213C18.5587 21.6839 17.7956 22 17 22H7C6.20435 22 5.44129 21.6839 4.87868 21.1213C4.31607 20.5587 4 19.7956 4 19V13C4 12.2044 4.31607 11.4413 4.87868 10.8787C5.44129 10.3161 6.20435 10 7 10V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2ZM12 14C11.4954 13.9998 11.0094 14.1904 10.6395 14.5335C10.2695 14.8766 10.0428 15.3468 10.005 15.85L10 16C10 16.3956 10.1173 16.7822 10.3371 17.1111C10.5568 17.44 10.8692 17.6964 11.2346 17.8478C11.6001 17.9991 12.0022 18.0387 12.3902 17.9616C12.7781 17.8844 13.1345 17.6939 13.4142 17.4142C13.6939 17.1345 13.8844 16.7781 13.9616 16.3902C14.0387 16.0022 13.9991 15.6001 13.8478 15.2346C13.6964 14.8692 13.44 14.5568 13.1111 14.3371C12.7822 14.1173 12.3956 14 12 14ZM12 4C11.2044 4 10.4413 4.31607 9.87868 4.87868C9.31607 5.44129 9 6.20435 9 7V10H15V7C15 6.20435 14.6839 5.44129 14.1213 4.87868C13.5587 4.31607 12.7956 4 12 4Z" fill="#564787" />
                            </g>
                            <defs>
                                <clipPath id="clip0_252_267">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </label>

                    <label className='subtitle-info' htmlFor="edit-pass-repeat">Repite la contraseña
                        <input className='input-edit' type='password' id="edit-pass-repeat" value={repeatPass} placeholder='********'
                            onChange={(e) => {
                                const value = e.target.value;
                                setRepeatPass(value);
                            }} />
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='small-icon'>
                            <g clipPath="url(#clip0_252_267)">
                                <path d="M12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V10C17.7956 10 18.5587 10.3161 19.1213 10.8787C19.6839 11.4413 20 12.2044 20 13V19C20 19.7956 19.6839 20.5587 19.1213 21.1213C18.5587 21.6839 17.7956 22 17 22H7C6.20435 22 5.44129 21.6839 4.87868 21.1213C4.31607 20.5587 4 19.7956 4 19V13C4 12.2044 4.31607 11.4413 4.87868 10.8787C5.44129 10.3161 6.20435 10 7 10V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2ZM12 14C11.4954 13.9998 11.0094 14.1904 10.6395 14.5335C10.2695 14.8766 10.0428 15.3468 10.005 15.85L10 16C10 16.3956 10.1173 16.7822 10.3371 17.1111C10.5568 17.44 10.8692 17.6964 11.2346 17.8478C11.6001 17.9991 12.0022 18.0387 12.3902 17.9616C12.7781 17.8844 13.1345 17.6939 13.4142 17.4142C13.6939 17.1345 13.8844 16.7781 13.9616 16.3902C14.0387 16.0022 13.9991 15.6001 13.8478 15.2346C13.6964 14.8692 13.44 14.5568 13.1111 14.3371C12.7822 14.1173 12.3956 14 12 14ZM12 4C11.2044 4 10.4413 4.31607 9.87868 4.87868C9.31607 5.44129 9 6.20435 9 7V10H15V7C15 6.20435 14.6839 5.44129 14.1213 4.87868C13.5587 4.31607 12.7956 4 12 4Z" fill="#564787" />
                            </g>
                            <defs>
                                <clipPath id="clip0_252_267">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        {(passError && newPass.trim() !== "") && (
                            <p className='error'>
                                Las contraseñas no coinciden
                            </p>
                        )}
                    </label>
                    <p className='btn-edit' onClick={handleSave}>Guardar cambios</p>
                </div>
            </div>
        </>
    )
}