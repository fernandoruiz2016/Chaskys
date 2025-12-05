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

  const [totalRecords, setTotalRecords] = useState(0);
  const [totalRecordsToday, setTotalRecordsToday] = useState(0);
  const [totalOderAvailable, setTotalOderAvailable] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [isVisibleHistorial, setIsVisibleHistorial] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/home.json");
        if (!response.ok) {
          alert("no se encontr el archivo");
        }
        const { record, total, totalHistorial, totalAmount } =
          await response.json();
        setTotalRecords(totalHistorial);
        setTotalRecordsToday(total);
        setTotalOderAvailable(record);
        setTotalAmount(totalAmount);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

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
      {user && (<HeaderHome user={user} setUser={setUser}></HeaderHome>)}
      <ProfitHome totalAmount={totalAmount} />

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
