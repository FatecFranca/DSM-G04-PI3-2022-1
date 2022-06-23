import './Questions.css';
import React, {useEffect, useState} from "react";
import { Header } from '../Header/Header.js';
import { Footer } from '../Footer/Footer.js';
import { useParams } from 'react-router-dom';
import {api} from '../../../services/api';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

export default function Questions(props){
    const token = localStorage.getItem('x-access-token');
    const navigate = useNavigate();
    const [question, setQuestion] = useState([])
    const [group, setGroup] = useState([])
    const [observation, setObservation] = useState('');
    const{id}=useParams()

    useEffect(() => {
        api.get('http://localhost:3000/question/group/' + id, {
            headers: {'x-access-token': token}
          })
          .then((res) => {
              setTimeout(() => {
                setQuestion(res.data)
              }, 1000);
          })
          .catch((error) => {
            console.error(error)
          })
          api.get('http://localhost:3000/question-group/' + id, {
            headers: {'x-access-token': token}
          })
          .then((res) => {
            setGroup(res.data)
          })
          .catch((error) => {
            console.error(error)
          })

          
    }, [])

    async function getAnswer(){
        const assessment_id = localStorage.getItem('assessment_id');

        api.get('http://localhost:3000/answer/assessment/' + assessment_id, {
            headers: {'x-access-token': token}
          })
          .then((res) => {
            if(res.data){
                question.forEach(e => {
                    res.data.forEach(value => {
                        if(e.group == value.question.group && e.number == value.question.number){
                            if(value.comments){
                                e['observation'] = value.comments;
                                e['ativo'] = true;
                                e['answerId'] = value._id
                            }
                            if(value.objective_answer){
                                e['selectionAnswer'] = value.objective_answer;
                                e['ativo'] = true;
                                e['answerId'] = value._id
                            }
                                
                        }
    
                        return
                        
                    });
    
                    return 
                });
    
    
                setQuestion(question);
            }            
          })
          .catch((error) => {
            console.error(error)
          })
    }

    async function onSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData)
        const assessment_id = localStorage.getItem('assessment_id');

        question.forEach(e => {

            if(e.selectionAnswer || e.observation){

                if(e.ativo){
                    api.put('http://localhost:3000/answer', {assessment: assessment_id, question: e._id, objective_answer: e.selectionAnswer ? e.selectionAnswer : 'P', comments: e.observation ? e.observation : '', _id:e.answerId},{
                        headers: {'x-access-token': token},
                    })
                    .then((res) => {
                        navigate('/selection-theme');
                    })
                    .catch((error) => {
                        console.error(error)
                    })

                    return;
                }

                if(!e.ativo){
                    api.post('http://localhost:3000/answer', {assessment: assessment_id, question: e._id, objective_answer: e.selectionAnswer ? e.selectionAnswer : 'P', comments: e.observation ? e.observation : ''},{
                        headers: {'x-access-token': token},
                    })
                    .then((res) => {
                        navigate('/selection-theme');
                    })
                    .catch((error) => {
                        console.error(error)
                    })
                }   

                
            }
           
        });

        

    }   

    useEffect(()=>{
        if(group){
            getAnswer();
        }
           
    }, [group])

    function onChangeItem (item) {
        const newQuestion = question.map(e => {
            if(item.id == e._id){
                if(item.observation)
                    e['observation'] = item.observation;
                if(item.selectionAnswer)
                    e['selectionAnswer'] = item.selectionAnswer;
            }

            return e;
        })

        setQuestion(newQuestion)
    }

    function logout(){
        localStorage.clear();
        navigate('/')
    }


    return(
        <div className='container-body'>
            <Header/>
            <div className='container-questions'>
                <div className='container-icon-exit'>
                    <FontAwesomeIcon onClick={()=> logout()} style={{fontSize: 20, color: '#B20000', marginRight: 25}} icon={faSignOutAlt} />
                </div>
                <div className='title-questions'>
                    
                        <h2>{group.group}</h2>
                </div>
                <div className='body-questions'>
                    <div className='questions'>
                        <form onSubmit={onSubmit}>
                            {
                                question ? question.map(question => {
                                    return(
                                        <>
                                            <div className='question-card'>
                                                <span>Pergunta {question.number}:</span>
                                                <span style={{marginLeft: 5}}>{question.enunciation}</span>
                                            </div>
                                            <div className='selects-answer'>
                                                <div className='checkbox-card'>
                                                    <input type="checkbox" className='checkbox-input' checked={question.selectionAnswer == 'Y' ? true : false} onChange={e => onChangeItem({id: question._id, selectionAnswer:e.target.checked ? 'Y' : ''})}/>
                                                    <span>Sim</span>
                                                </div>
                                                <div className='checkbox-card'>
                                                    <input type="checkbox" className='checkbox-input' checked={question.selectionAnswer == 'N' ? true : false} onChange={e => onChangeItem({id: question._id, selectionAnswer:e.target.checked ? 'N' : ''})}/>
                                                    <span>Não</span>
                                                </div>
                                                <div className='checkbox-card'>
                                                    <input type="checkbox" className='checkbox-input' checked={question.selectionAnswer == 'X' ? true : false} onChange={e => onChangeItem({id: question._id, selectionAnswer:e.target.checked ? 'X' : ''})}/>
                                                    <span>Parcialmente</span>
                                                </div>
                                            </div>
                                            <div>
                                                <textarea placeholder='Observações' className='text-area' type="input" name='observation' value={question.observation} onChange={e => onChangeItem({id: question._id, observation:e.target.value})}>
                                                </textarea>
                                            </div>
                                        </>
                                    )
                                }) : <></>
                            }
                            <div className='btn-save-form'>
                                <button type='submit' className='btn-save'>Salvar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}