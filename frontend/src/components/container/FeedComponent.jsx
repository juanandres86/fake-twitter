import React from "react";
import piggtter from "../../assets/piggtter.png";
import { Routes, Route, Link } from "react-router-dom";
import InicioComponent from "../pure/InicioComponent";
import ExplorarComponent from "../pure/ExplorarComponent";
import MensajesComponents from "../pure/MensajesComponents";
import NotificacionesComponent from "../pure/NotificacionesComponent";
import PerfilComponent from "../pure/PerfilComponent";
import LoginComponent from "../../pages/Auth/LoginComponent";
import RegisterComponent from "../../pages/Auth/RegisterComponent";

const FeedComponent = ({ tweets, setTweets, setUser, user }) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<InicioComponent tweets={tweets} setTweets={setTweets} />} />
        <Route path="explorar" element={<ExplorarComponent />} />
        <Route path="mensajes" element={<MensajesComponents />} />
        <Route path="avisos" element={<NotificacionesComponent />} />
        <Route path="perfil" element={<PerfilComponent user={user} setUser={setUser} />} />
      </Routes>
    </div>
  );
};

export default FeedComponent;
