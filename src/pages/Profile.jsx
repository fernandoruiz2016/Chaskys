import { HeaderProfile } from '../components/profile/Header'
import { Picture } from '../components/profile/Picture'
import { UserInfo } from '../components/profile/UserInfo'
import { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

import "../styles/Profile.css";

export const Profile = () => {
    const [user, setUser] = useState(null);

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

    return (
        <>
            <HeaderProfile page="Mi Perfil" backPage="/Home" ></HeaderProfile>
            <div className='profile'>
                {user && (
                    <>
                        <Picture user={user} setUser={setUser}></Picture>
                        <UserInfo user={user}></UserInfo>
                    </>
                )}
                <Link className='btn-edit' to="/edit-profile">Editar Informacion</Link>
                <Link className='cerrar-sesion' to="/login">
                    <svg width="27" height="30" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.44995 7.5C10.1967 7.5 10.8 6.82969 10.8 6C10.8 5.17031 10.1967 4.5 9.44995 4.5H6.74995C4.51401 4.5 2.69995 6.51563 2.69995 9V21C2.69995 23.4844 4.51401 25.5 6.74995 25.5H9.44995C10.1967 25.5 10.8 24.8297 10.8 24C10.8 23.1703 10.1967 22.5 9.44995 22.5H6.74995C6.00323 22.5 5.39995 21.8297 5.39995 21V9C5.39995 8.17031 6.00323 7.5 6.74995 7.5H9.44995ZM23.9034 16.0594C24.4307 15.4734 24.4307 14.5219 23.9034 13.9359L18.5034 7.93594C17.976 7.35 17.1196 7.35 16.5923 7.93594C16.065 8.52188 16.065 9.47344 16.5923 10.0594L19.6889 13.5H10.8C10.0532 13.5 9.44995 14.1703 9.44995 15C9.44995 15.8297 10.0532 16.5 10.8 16.5H19.6889L16.5923 19.9406C16.065 20.5266 16.065 21.4781 16.5923 22.0641C17.1196 22.65 17.976 22.65 18.5034 22.0641L23.9034 16.0641V16.0594Z" fill="#564787" />
                    </svg>
                    <p>Cerrar sesión</p>
                </Link>
            </div>
        </>
    )
}