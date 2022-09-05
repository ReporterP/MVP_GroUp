import React from "react";
import {Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.scss';
import Auth from "./Auth";
import GroFile from "./GroFile";
import { WebApp } from "@grammyjs/web-app";

function App() {
  return (
    <>
    {WebApp.expand()}
      <Routes>
        <Route exact path="/" element={<Auth />}/>
        <Route exact path="/grofile" element={<GroFile />}/>
      </Routes>
    </>
  );
}

export default App;
