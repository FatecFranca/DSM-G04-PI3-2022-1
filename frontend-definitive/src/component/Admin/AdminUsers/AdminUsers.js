import React from "react";
import Cabecalho from "../Cabecalho/Cabecalho";
import MenuHorizontal from "../MenuHorizontal/MenuHorizontal";
import Rodape from "../Rodape/Rodape";
import "./AdminUsers.css";
import { Header } from "../../User/Header/Header";
import { Footer } from '../../User/Footer/Footer';
import { useEffect, useState } from "react";
import { api } from '../../../services/api'
import "../AdminQuestions/AdminQuestions.css"

export default function AdminUsers() {
  const [user, setUser] = useState([])

  useEffect(() => {
    api.get('http://localhost:3000/user')
      .then(response => setUser(response.data))
  }, []);
 

  return (
    <div className="user">
      {/* <Cabecalho /> */}
      < Header />
      <MenuHorizontal />

        <div id="areaUser">
        <div id="idQuestion">
          {/* <legend>Users cadastrados</legend>
          <div className="tabela">
            <table className="table table-responsive">
              <thead>
                <tr id="titulo">
                  <th id="t_numero">Nº</th>
                  <th id="t_enunciado">Email</th>

                  <th id="novo"> <a className="btn btn-success btn-block">Data do Registro</a> </th>
                </tr>
              </thead>
              <tbody>
                {user.map((item, i) => {
                  return (
                    <>
                      <tr>
                        <td id="p_numero">{item.fullname}</td>
                        <td id="p_enunciado">{item.email}</td>
                        <td id="p_enunciado">{item.date_registered}</td>

                        <button id="editar"> <a className="btn btn-primary btn-block">Editar</a> </button>
                        <button id="ativar"> <a className="btn btn-danger btn-block">Ativar/Inativar</a> </button>
                      </tr>
                    </>
                  )
                })}
              </tbody>
              <tfoot>
                <tr id="registros">
                  <td>Total de Usuários: {user.length}</td>
                </tr>
              </tfoot>

            </table>

          </div> */}

        </div>

        </div>
      {/* < Rodape /> */}
      < Footer />
    </div>
  );
}

