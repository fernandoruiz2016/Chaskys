import { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

export const HeaderHome = ({ user, setUser }) => {
  if (!user) return null;

  const navigate = useNavigate();

  return (
    <div className="header-home">
      <Link className="header-user" to="/profile">
        <img src={user.picture} className="header-picture" alt="Foto de perfil" />
        <div className='header-user-text'>
          <p className='header-user-text-name'>{user.name}</p>
          <p className="chasky-black-header">Chasky Black</p>
        </div>
      </Link>

      <div className="header-logo">
        <span className="header-logo-name color-orange">Chaskys</span>
        <span className="header-logo-subname">Delivery app</span>
      </div>
    </div>
  );
};
