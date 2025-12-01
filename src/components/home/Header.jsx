<<<<<<< HEAD
import { useNavigate } from "react-router-dom";

export const HeaderHome = () => {

  const navigate = useNavigate();

    const handlerRedictProfile = () =>{
    navigate("/profile")
  }

  return (
    <section className="header-home">
      <div className="hader-user">
        <span className="header-user-name" onClick={handlerRedictProfile}>
          Jhefferson
        </span>
=======
export const HeaderHome = () => {
  return (
    <section className="header-home">
      <div className="hader-user">
        <span class="header-user-name">Jhefferson</span>
>>>>>>> 18fb091b9b9478649c9c141dc496cf59ba7e4b05
        <span className="header-user-category color-orange">Chasky Balck</span>
      </div>

      <div className="header-logo">
        <span className="header-logo-name color-orange">Chaskys</span>
        <span className="header-logo-subname">Delivery app</span>
      </div>
    </section>
  );
};
