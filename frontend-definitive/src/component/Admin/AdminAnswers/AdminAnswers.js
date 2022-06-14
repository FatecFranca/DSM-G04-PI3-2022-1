import React from "react";
import Cabecalho from "../Cabecalho/Cabecalho";
import MenuHorizontal from "../MenuHorizontal/MenuHorizontal";

import Rodape from "../Rodape/Rodape";

import "./AdminAnswers.css"

export default function AdminAnswers() {
  return (
    <div className="answer">
      <Cabecalho />
      <MenuHorizontal />

        <div id="areaAnswer">

        </div>


      <Rodape />
    </div>
  );
}

