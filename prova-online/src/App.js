import React from "react";
import { HashRouter, Routes, Route} from "react-router-dom";
import {Turmas} from "./FormulariosTurmas/FormulariosTurmas";
import {Home} from "./Home/Home";
import "./App.css"

function App() {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        {
          Turmas.map((turma)=>(<Route path={`/${turma.rotaUrl}`} element={turma.componente} />))
        }
      </Routes>
    </HashRouter>
   
  );
}

export default App;
