import React from "react";
import "./Home.css"
import mathGif from "./mathGif.gif"

function Home() {
  return (
    <div className="home">
      <h1 className="home-title">Bem Vindos a página de Provas do Rangel</h1>
      <img className="home-image"src={mathGif} alt="Animação Matemática" />
    </div>
   
  );
}

export {Home};