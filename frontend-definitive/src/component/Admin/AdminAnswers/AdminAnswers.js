import React from "react";
import Cabecalho from "../Cabecalho/Cabecalho";
import MenuHorizontal from "../MenuHorizontal/MenuHorizontal";
import { Header } from "../../User/Header/Header";
import { Footer } from '../../User/Footer/Footer';
import Rodape from "../Rodape/Rodape";

import "./AdminAnswers.css"

export default function AdminAnswers() {
  return (
    <div className="answer">
      <Header/>
      {/* <Cabecalho /> */}
      <MenuHorizontal />

        <div id="areaAnswer">

        </div>

      {/* <Rodape /> */}
      <Footer/>
    </div>
  );
}

