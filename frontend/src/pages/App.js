import React from "react";
import {Routes, Route} from "react-router-dom";
import '../styles/global.scss';
import Auth from "./Auth";
import GroFile from "./GroFile";

function App() {
  const WebApp = typeof window !== 'undefined' ? window.Telegram.WebApp : null;
  
  const WebAppMainButton = WebApp?.MainButton;
  if (!WebAppMainButton || !WebApp) return null;

  WebAppMainButton.setParams({
    color: '#26282F',
    text_color: '#ABF08D'})

  WebAppMainButton.setText("GroUp")
  WebAppMainButton.disable()
  WebAppMainButton.show()


  const handleScroll = event => {
    window.scrollBy({top:10})
  };

  window.addEventListener('scroll', handleScroll)

  return (
    <>
    {WebApp.ready()}
    {WebApp.expand()}
    {WebApp.onEvent("viewportChanged", e=>e.isStateStable===false?e.isStateStable=true:WebApp.expand())}
    {handleScroll()}

      <Routes>
        <Route exact path="/" element={<Auth />}/>
        <Route exact path="/grofile" element={<GroFile />}/>
      </Routes>
    </>
  );
}

export default App;
