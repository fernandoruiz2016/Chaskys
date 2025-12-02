export const UserInfo = ({ user }) => {
    return (
        <section className="card user-info">
            <div className="info">
                <div className="contenedor-icono">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icono">
                        <g clipPath="url(#clip0_239_811)">
                            <path d="M12 2C12.9889 2 13.9556 2.29324 14.7779 2.84265C15.6001 3.39206 16.241 4.17295 16.6194 5.08658C16.9978 6.00021 17.0969 7.00555 16.9039 7.97545C16.711 8.94536 16.2348 9.83627 15.5355 10.5355C14.8363 11.2348 13.9454 11.711 12.9755 11.9039C12.0055 12.0969 11.0002 11.9978 10.0866 11.6194C9.17295 11.241 8.39206 10.6001 7.84265 9.77785C7.29324 8.95561 7 7.98891 7 7L7.005 6.783C7.06092 5.49575 7.61161 4.27978 8.54222 3.38866C9.47284 2.49754 10.7115 2.00007 12 2Z" fill="#564787" />
                            <path d="M14 14C15.3261 14 16.5979 14.5268 17.5355 15.4645C18.4732 16.4021 19 17.6739 19 19V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V19C5 17.6739 5.52678 16.4021 6.46447 15.4645C7.40215 14.5268 8.67392 14 10 14H14Z" fill="#564787" />
                        </g>
                        <defs>
                            <clipPath id="clip0_239_811">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div className="texto-user">
                    <h4>Usuario</h4>
                    <p>{user.user}</p>
                </div>
            </div>
            <div className="info">
                <div className="contenedor-icono">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_239_797)">
                            <path d="M22 7.53516V17.0002C22 17.7654 21.7077 18.5017 21.1827 19.0584C20.6578 19.6152 19.9399 19.9503 19.176 19.9952L19 20.0002H5C4.23479 20.0002 3.49849 19.7078 2.94174 19.1829C2.38499 18.6579 2.04989 17.9401 2.005 17.1762L2 17.0002V7.53516L11.445 13.8322L11.561 13.8982C11.6977 13.965 11.8478 13.9997 12 13.9997C12.1522 13.9997 12.3023 13.965 12.439 13.8982L12.555 13.8322L22 7.53516Z" fill="#564787" />
                            <path d="M18.9999 4C20.0799 4 21.0269 4.57 21.5549 5.427L11.9999 11.797L2.44495 5.427C2.69568 5.01977 3.04016 4.6784 3.44965 4.43138C3.85915 4.18436 4.32178 4.03886 4.79895 4.007L4.99995 4H18.9999Z" fill="#564787" />
                        </g>
                        <defs>
                            <clipPath id="clip0_239_797">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div className="texto-user">
                    <h4>Correo electrónico</h4>
                    <p>{user.email}</p>
                </div>
            </div>
            <div className="info">
                <div className="contenedor-icono">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_239_789)">
                            <path d="M5 4H9L11 9L8.5 10.5C9.57096 12.6715 11.3285 14.429 13.5 15.5L15 13L20 15V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21C14.0993 20.763 10.4202 19.1065 7.65683 16.3432C4.8935 13.5798 3.23705 9.90074 3 6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4Z" stroke="#564787" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_239_789">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>

                </div>
                <div className="texto-user">
                    <h4>Número de teléfono</h4>
                    <p>{user.phone}</p>
                </div>
            </div>
            <div className="info">
                <div className="contenedor-icono">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_239_778)">
                            <path d="M5 17C5 17.5304 5.21071 18.0391 5.58579 18.4142C5.96086 18.7893 6.46957 19 7 19C7.53043 19 8.03914 18.7893 8.41421 18.4142C8.78929 18.0391 9 17.5304 9 17C9 16.4696 8.78929 15.9609 8.41421 15.5858C8.03914 15.2107 7.53043 15 7 15C6.46957 15 5.96086 15.2107 5.58579 15.5858C5.21071 15.9609 5 16.4696 5 17Z" stroke="#564787" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M15 17C15 17.5304 15.2107 18.0391 15.5858 18.4142C15.9609 18.7893 16.4696 19 17 19C17.5304 19 18.0391 18.7893 18.4142 18.4142C18.7893 18.0391 19 17.5304 19 17C19 16.4696 18.7893 15.9609 18.4142 15.5858C18.0391 15.2107 17.5304 15 17 15C16.4696 15 15.9609 15.2107 15.5858 15.5858C15.2107 15.9609 15 16.4696 15 17Z" stroke="#564787" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M5 17H3V13M2 5H13V17M9 17H15M19 17H21V11M21 11H13M21 11L18 6H13" stroke="#564787" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M3 9H7" stroke="#564787" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_239_778">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div className="texto-user">
                    <h4>Tipo de Vehículo</h4>
                    <p>{user.vehicle}</p>
                </div>
            </div>
            <div className="info">
                <div className="contenedor-icono">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_239_890)">
                            <path d="M12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V10C17.7956 10 18.5587 10.3161 19.1213 10.8787C19.6839 11.4413 20 12.2044 20 13V19C20 19.7956 19.6839 20.5587 19.1213 21.1213C18.5587 21.6839 17.7956 22 17 22H7C6.20435 22 5.44129 21.6839 4.87868 21.1213C4.31607 20.5587 4 19.7956 4 19V13C4 12.2044 4.31607 11.4413 4.87868 10.8787C5.44129 10.3161 6.20435 10 7 10V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2ZM12 14C11.4954 13.9998 11.0094 14.1904 10.6395 14.5335C10.2695 14.8766 10.0428 15.3468 10.005 15.85L10 16C10 16.3956 10.1173 16.7822 10.3371 17.1111C10.5568 17.44 10.8692 17.6964 11.2346 17.8478C11.6001 17.9991 12.0022 18.0387 12.3902 17.9616C12.7781 17.8844 13.1345 17.6939 13.4142 17.4142C13.6939 17.1345 13.8844 16.7781 13.9616 16.3902C14.0387 16.0022 13.9991 15.6001 13.8478 15.2346C13.6964 14.8692 13.44 14.5568 13.1111 14.3371C12.7822 14.1173 12.3956 14 12 14ZM12 4C11.2044 4 10.4413 4.31607 9.87868 4.87868C9.31607 5.44129 9 6.20435 9 7V10H15V7C15 6.20435 14.6839 5.44129 14.1213 4.87868C13.5587 4.31607 12.7956 4 12 4Z" fill="#564787" />
                        </g>
                        <defs>
                            <clipPath id="clip0_239_890">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div className="texto-user">
                    <h4>Contraseña</h4>
                    <p>{"*".repeat(user.pass.length)}</p>
                </div>
            </div>
        </section>
    )
}