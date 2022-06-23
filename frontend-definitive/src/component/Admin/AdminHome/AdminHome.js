import React from "react";
import Cabecalho from "../Cabecalho/Cabecalho";
import MenuHorizontal from "../MenuHorizontal/MenuHorizontal";
import AreaDados from "../AreaDados/AreaDados";
import { Header } from "../../User/Header/Header";
import { Footer } from '../../User/Footer/Footer';
import Rodape from "../Rodape/Rodape";
import "./AdminHome.css"

/*interface areaDadosColor {
  backgroundColor: String;
}
*/

export default function AdminHome() {
  return (
    <div className="home">
      <Header/>
      <MenuHorizontal />
      <AreaDados />
      <Footer/>
    </div>
  );
}

