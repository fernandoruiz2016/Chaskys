<<<<<<< HEAD
import { useNavigate } from "react-router-dom";

=======
>>>>>>> 18fb091b9b9478649c9c141dc496cf59ba7e4b05
import { HeaderHome } from "../components/home/Header";
import { ProfitHome } from "../components/home/Profit";
import { RecordHome } from "../components/home/Record";
import { OdersHome } from "../components/home/Oders";
<<<<<<< HEAD
import { HistorialHome } from "../components/home/Historial";
import { OrdersAvailableHome } from "../components/home/OrdersAvailable";

import "../styles/Home.css";
import { useState } from "react";

export const Home = () => {
  const [totalRecords, setTotalRecords] = useState(253);
  const [totalRecordsToday, setTotalRecordsToday] = useState(32);
  const [totalOderAvailable, setTotalOderAvailable] = useState(5);
  const [isVisibleHistorial, setIsVisibleHistorial] = useState(false);


   const navigate = useNavigate();

  const handlerViewHistorial = () => {
    setIsVisibleHistorial(true);
  };

  const handlerViewOrdersAvailable = () => {
    setIsVisibleHistorial(false);
  };


  return (
    <div>
      <HeaderHome/>
      <ProfitHome />

      {isVisibleHistorial ? (
        <OrdersAvailableHome
          total={totalOderAvailable}
          onViewOrdersAvailable={handlerViewOrdersAvailable}
        />
      ) : (
        <RecordHome
          record={totalRecords}
          total={totalRecordsToday}
          onViewHistorial={handlerViewHistorial}
        />
      )}

      {isVisibleHistorial ? <HistorialHome /> : <OdersHome />}
=======

import "../styles/Home.css";

export const Home = () => {
  return (
    <div>
      <HeaderHome />
      <ProfitHome />
      <RecordHome />
      <OdersHome />
>>>>>>> 18fb091b9b9478649c9c141dc496cf59ba7e4b05
    </div>
  );
};
