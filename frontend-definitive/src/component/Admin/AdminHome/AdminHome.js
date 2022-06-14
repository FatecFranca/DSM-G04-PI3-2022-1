import React from "react";
import Cabecalho from "../Cabecalho/Cabecalho";
import MenuHorizontal from "../MenuHorizontal/MenuHorizontal";
import AreaDados from "../AreaDados/AreaDados";

import Rodape from "../Rodape/Rodape";

import "./AdminHome.css"

/*interface areaDadosColor {
  backgroundColor: String;
}
*/

export default function AdminHome() {
  return (
    <div className="home">
      <Cabecalho />
      <MenuHorizontal />
      <AreaDados />
      <Rodape />
    </div>
  );
}

