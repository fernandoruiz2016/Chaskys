import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';

import { HeaderHome } from "../components/home/Header";
import { ProfitHome } from "../components/home/Profit";
import { RecordHome } from "../components/home/Record";
import { OdersHome } from "../components/home/Oders";
import { HistorialHome } from "../components/home/Historial";
import { OrdersAvailableHome } from "../components/home/OrdersAvailable";

import "../styles/Home.css";

export const Home = () => {
  const [user, setUser] = useState(null);

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
    <div>
      <HeaderHome user={user} setUser={setUser}></HeaderHome>
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
    </div>
  );
};
