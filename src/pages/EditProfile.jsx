import { HeaderProfile } from '../components/profile/Header'
import { Picture } from '../components/profile/Picture'
import { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

import "../styles/EditProfile.css";

export const EditProfile = () => {
    const [user, setUser] = useState(null);

    const [formUser, setFormUser] = useState(user);
    useEffect(() => {
        setFormUser(user);
    }, [user]);

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
        document.body.classList.add("background2");

        return () => {
            document.body.classList.remove("background2");
        };
    }, []);

    useEffect(() => {
        if (!newPass && !repeatPass) {
            setPassError(true);
        } else {
            setPassError(newPass !== repeatPass);
        }
    }, [newPass, repeatPass]);

    const handleEdit = () => {
        if (passError && newPass.trim() == "") {
            const updatedUser = {
                ...formUser,
            };
            setFormUser(updatedUser);
            setUser(updatedUser);
            localStorage.setItem("registeredUser", JSON.stringify(updatedUser));
            alert('Cambios guardados exitosamente');
            navigate("/profile");
        } else if (!passError) {
            const updatedUser = {
                ...formUser,
                pass: newPass
            };
            setFormUser(updatedUser);
            setUser(updatedUser);
            localStorage.setItem("registeredUser", JSON.stringify(updatedUser));
            alert('Cambios guardados exitosamente');
            navigate("/profile");
        } else {
            alert('No se pudo guardar los cambios')
        }
    }

    return (
        <>
            <HeaderProfile page="Editar Perfil" backPage="/Profile" ></HeaderProfile>
            <div className='profile-info'>
                {formUser && (
                    <>
                        <Picture user={user} setUser={setUser} canEdit={true} ></Picture>
                        <form className='edit-form'>
                            <label className='subtitle-info' htmlFor="edit-name">Nombre completo
                                <input className='input-edit' type='text' id="edit-name" value={formUser.name} onChange={(e) => setFormUser({ ...formUser, name: e.target.value })} />
                                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" className='big-icon'>
                                    <path d="M28.9 7.6501C29.3675 7.6501 29.75 8.0326 29.75 8.5001V25.5001C29.75 25.9676 29.3675 26.3501 28.9 26.3501H5.09995C4.63245 26.3501 4.24995 25.9676 4.24995 25.5001V8.5001C4.24995 8.0326 4.63245 7.6501 5.09995 7.6501H28.9ZM5.09995 5.1001C3.22464 5.1001 1.69995 6.62479 1.69995 8.5001V25.5001C1.69995 27.3754 3.22464 28.9001 5.09995 28.9001H28.9C30.7753 28.9001 32.3 27.3754 32.3 25.5001V8.5001C32.3 6.62479 30.7753 5.1001 28.9 5.1001H5.09995ZM12.75 16.5751C14.3915 16.5751 15.725 15.2417 15.725 13.6001C15.725 11.9585 14.3915 10.6251 12.75 10.6251C11.1084 10.6251 9.77495 11.9585 9.77495 13.6001C9.77495 15.2417 11.1084 16.5751 12.75 16.5751ZM11.05 18.7001C8.70183 18.7001 6.79995 20.602 6.79995 22.9501C6.79995 23.4176 7.18245 23.8001 7.64995 23.8001H17.85C18.3175 23.8001 18.7 23.4176 18.7 22.9501C18.7 20.602 16.7981 18.7001 14.45 18.7001H11.05ZM21.675 11.0501C20.9684 11.0501 20.4 11.6185 20.4 12.3251C20.4 13.0317 20.9684 13.6001 21.675 13.6001H25.925C26.6315 13.6001 27.2 13.0317 27.2 12.3251C27.2 11.6185 26.6315 11.0501 25.925 11.0501H21.675ZM21.675 16.1501C20.9684 16.1501 20.4 16.7185 20.4 17.4251C20.4 18.1317 20.9684 18.7001 21.675 18.7001H25.925C26.6315 18.7001 27.2 18.1317 27.2 17.4251C27.2 16.7185 26.6315 16.1501 25.925 16.1501H21.675Z" fill="#564787" />
                                </svg>
                            </label>

                            <label className='subtitle-info' htmlFor="edit-user">Usuario
                                <input className='input-edit' type='text' id="edit-user" value={formUser.user} onChange={(e) => setFormUser({ ...formUser, user: e.target.value })} />
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='small-icon'>
                                    <g clipPath="url(#clip0_239_1070)">
                                        <path d="M12 2C12.9889 2 13.9556 2.29324 14.7779 2.84265C15.6001 3.39206 16.241 4.17295 16.6194 5.08658C16.9978 6.00021 17.0969 7.00555 16.9039 7.97545C16.711 8.94536 16.2348 9.83627 15.5355 10.5355C14.8363 11.2348 13.9454 11.711 12.9755 11.9039C12.0055 12.0969 11.0002 11.9978 10.0866 11.6194C9.17295 11.241 8.39206 10.6001 7.84265 9.77785C7.29324 8.95561 7 7.98891 7 7L7.005 6.783C7.06092 5.49575 7.61161 4.27978 8.54222 3.38866C9.47284 2.49754 10.7115 2.00007 12 2Z" fill="#564787" />
                                        <path d="M14 14C15.3261 14 16.5979 14.5268 17.5355 15.4645C18.4732 16.4021 19 17.6739 19 19V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V19C5 17.6739 5.52678 16.4021 6.46447 15.4645C7.40215 14.5268 8.67392 14 10 14H14Z" fill="#564787" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_239_1070">
                                            <rect width="24" height="24" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </label>

                            <label className='subtitle-info' htmlFor="edit-email">Correo
                                <input className='input-edit' type='text' id="edit-email" value={formUser.email} onChange={(e) => setFormUser({ ...formUser, email: e.target.value })} />
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

                            <label className='subtitle-info' htmlFor="edit-phone">Número de teléfono
                                <input className='input-edit' type='text' id="edit-phone" value={formUser.phone} onChange={(e) => setFormUser({ ...formUser, phone: e.target.value })} />
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='small-icon'>
                                    <g clipPath="url(#clip0_239_1054)">
                                        <path d="M5 4H9L11 9L8.5 10.5C9.57096 12.6715 11.3285 14.429 13.5 15.5L15 13L20 15V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21C14.0993 20.763 10.4202 19.1065 7.65683 16.3432C4.8935 13.5798 3.23705 9.90074 3 6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4Z" stroke="#564787" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_239_1054">
                                            <rect width="24" height="24" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </label>

                            <label className='subtitle-info' htmlFor="edit-phone">Tipo de Vehículo
                                <select id="edit-vehicle" name="edit-vehicle" value={formUser.vehicle} onChange={(e) => setFormUser({ ...formUser, vehicle: e.target.value })}>Tipo de vehículo
                                    <option value="Moto Lineal">Moto Lineal</option>
                                    <option value="Auto">Auto</option>
                                </select>
                            </label>

                            {/* <label className='subtitle-info' htmlFor="edit-pass">Contraseña actual
                                <input className='input-edit' type='password' id="edit-pass" value={formUser.pass} onChange={(e) => setFormUser({ ...formUser, pass: e.target.value })} />
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
                            </label> */}

                            <label className='subtitle-info' htmlFor="edit-pass-new">Nueva Contraseña
                                <input className='input-edit' type='password' id="edit-pass-new" value={newPass || ""} onChange={(e) => setNewPass(e.target.value)} />
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
                                <input className='input-edit' type='password' id="edit-pass-repeat" value={repeatPass}
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
                        </form>
                        <Link className='forgot-pass' to="/">¿Olvidaste tu contraseña?</Link>
                        <p className='btn-edit' to="/Profile" onClick={handleEdit}>Guardar cambios</p>
                    </>
                )}

            </div>
        </>
    )
}