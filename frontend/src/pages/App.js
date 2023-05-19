import React from "react";
import {Routes, Route} from "react-router-dom";
import '../styles/global.scss';
import Auth from "./Auth";
import GroFile from "./GroFile";
// import { WebApp } from "@grammyjs/web-app";

function App() {
  const WebApp = window.Telegram.WebApp
  
  return (
    <>
    {WebApp.ready()}
    {WebApp.expand()}
    {WebApp.enableClosingConfirmation()}
    {WebApp.onEvent("viewportChanged", ()=>WebApp.expand())}
      <Routes>
        <Route exact path="/" element={<Auth />}/>
        <Route exact path="/grofile" element={<GroFile />}/>
      </Routes>
    </>
  );
}

export default App;
