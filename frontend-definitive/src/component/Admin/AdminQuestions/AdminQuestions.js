import React from "react";
import Cabecalho from "../Cabecalho/Cabecalho";
import MenuHorizontal from "../MenuHorizontal/MenuHorizontal";
import Rodape from "../Rodape/Rodape";
import { useEffect, useState } from "react";
import { api } from '../../../services/api'
import { Header } from "../../User/Header/Header";
import { Footer } from "../../User/Footer/Footer";
import "./AdminQuestions.css";
const token = localStorage.getItem('x-access-token');

//export default function Questions() {
function AdminQuestions() {  
  const [question, setQuestion] = useState([])

  useEffect(() => {
   api.get('http://localhost:3000/question', {
            headers: {'x-access-token': token}
          })
          .then((res) => {
            setQuestion(res.data);
          })
          .catch((error) => {
            console.error(error)
          })

  }, []);
  
  function questionPost() {
    console.log(question)
    api.post('http://localhost:3000/question', {
            headers: {'x-access-token': token}
          })
          .then((res) => {
            setQuestion(res.data);
          })
          .catch((error) => {
            console.error(error)
          })
  }

  function questionPut() {
    console.log(question)
    api.put('http://localhost:3000/question', {
            headers: {'x-access-token': token}
          })
          .then((res) => {
            setQuestion(res.data);
          })
          .catch((error) => {
            console.error(error)
          })
  }

  return (
    <div className="question">
      {/* <Cabecalho /> */}
      <Header/>
      <MenuHorizontal />

      <div id="areaQuestion">
        <div id="idQuestion">
          <legend>Questões cadastradas:</legend>
          <br></br>
          <div className="tabela">
            <table className="table table-responsive">
              <thead>
                <tr id="titulo">
                  <th id="t_numero">Nº</th>
                  <th id="t_enunciado">Enunciado</th>

                  <th className="btn-ai" id="novo"> <a className="btn btn-success btn-block" onClick={() => questionPost()}>Novo Registro</a> </th>
                </tr>
              </thead>
              <tbody>
                {question.map((item, i) => {
                  return (
                    <>
                      <tr>
                        <td id="p_numero">{item.number}</td>
                        <td onChange={e=>item.enunciation=e.target.value} contenteditable="true" id="p_enunciado">{item.enunciation}</td>
                        
                        <button className="btn-ai" id="editar"> <a className="btn btn-primary btn-block" onClick={() => questionPut()}>Salvar</a> </button>
                        <button className="btn-ai" id="ativar"> <a className="btn btn-danger btn-block">Ativar/Inativar</a> </button>
                      </tr>
                    </>
                  )
                })}
              </tbody>
              <tfoot>
                <tr id="registros">
                  <td>Total de Registros: {question.length}</td>
                </tr>
              </tfoot>

            </table>

          </div>

        </div>


      </div>

      {/* <Rodape /> */}
      <Footer/>
    </div>
  );
}

export default AdminQuestions

