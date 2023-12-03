import React, {useEffect} from "react";
import {InformacoesTurmas} from "../InformacoesTurmas/InformacoesTurmas";
import "./FormularioTurmas.css"

const Turma = ({infoTurma}) => { 
  console.log(infoTurma)
  const {nome, linkFormulario} = infoTurma;

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.defer = true;
    script.src = `${linkFormulario}`;
    
    // Adiciona o script ao final do corpo do documento
    document.body.appendChild(script);

    // Adiciona o listener de visibilitychange
    const visibilityChangeHandler = () => {
      if (document.visibilityState === 'hidden') {
        const sendButton = document.querySelector(".ff-button-bar button");
        sendButton && sendButton.click();

        setTimeout(function () {
          window.location.href = "https://www.google.com";
        }, 300);
      }
    };

    document.addEventListener('visibilitychange', visibilityChangeHandler);

    // Remove o script do DOM quando o componente for desmontado
    return () => {
      document.removeEventListener('visibilitychange', visibilityChangeHandler);
      document.body.removeChild(script);
    };
  }, []); // O array vazio assegura que o efeito seja executado apenas uma vez (na montagem)
  
  return (
  <div>
    <h1 className="class-name">{nome}</h1>
    <div id="ff-compose"></div>
  </div>
)};

const Turmas = InformacoesTurmas.map((infoTurma, index)=> ({"componente": <Turma key={index} infoTurma={infoTurma}/>, "rotaUrl": infoTurma.rotaUrl}))

export {Turmas};