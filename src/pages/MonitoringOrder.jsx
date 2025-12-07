import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { HeaderHome } from "../components/home/Header";
import { MapMonitoring } from "../components/monitoring/MapPreview";

import "../styles/MonitoringOrder.css";


export const MonitoringOrder = () => {
  const [user, setUser] = useState(null);

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

  const { id } = useParams();

  return (
    <>
      {user && (<HeaderHome user={user} setUser={setUser}></HeaderHome>)}
      <MapMonitoring id={id} />
    </>
  );
};
