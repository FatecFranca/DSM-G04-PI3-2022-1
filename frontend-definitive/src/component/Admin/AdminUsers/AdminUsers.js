import React from "react";
import Cabecalho from "../Cabecalho/Cabecalho";
import MenuHorizontal from "../MenuHorizontal/MenuHorizontal";

import Rodape from "../Rodape/Rodape";

import "./AdminUsers.css"

export default function AdminUsers() {
  return (
    <div className="user">
      <Cabecalho />
      <MenuHorizontal />

        <div id="areaUser">

        </div>

      <Rodape />
    </div>
  );
}

