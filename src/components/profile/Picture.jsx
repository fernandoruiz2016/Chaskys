export const Picture = ({ user, setUser, canEdit = false }) => {
    if (!user) return null;

    const handleEdit = () => {
        const url = prompt("Ingresa la URL de la imagen: ");

        if (url && url.trim() !== "") {
            const updatedUser = { ...user, picture: url };
            localStorage.setItem("registeredUser", JSON.stringify(updatedUser));
            setUser(updatedUser);
        }
    }


    return (
        <div className="picture">
            <img src={user.picture} className="profile-picture" alt="Foto de perfil" />
            {canEdit && (
                <div className="edit-picture" onClick={handleEdit}>
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="edit-icon">
                        <path d="M11.0572 5.3325L10.6347 6.6H7.6C6.16594 6.6 5 7.76594 5 9.2V19.6C5 21.0341 6.16594 22.2 7.6 22.2H23.2C24.6341 22.2 25.8 21.0341 25.8 19.6V9.2C25.8 7.76594 24.6341 6.6 23.2 6.6H20.1653L19.7428 5.3325C19.4787 4.53625 18.7353 4 17.8944 4H12.9056C12.0647 4 11.3212 4.53625 11.0572 5.3325ZM15.4 10.5C17.5531 10.5 19.3 12.2469 19.3 14.4C19.3 16.5531 17.5531 18.3 15.4 18.3C13.2469 18.3 11.5 16.5531 11.5 14.4C11.5 12.2469 13.2469 10.5 15.4 10.5Z" fill="white" />
                    </svg>
                </div>
            )}
            <h3 className="picture-name">{user.name}</h3>
            <p className="chasky-black">Chasky Black</p>
        </div>
    )
}