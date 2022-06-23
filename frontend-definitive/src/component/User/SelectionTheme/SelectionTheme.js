import './SelectionTheme.css';
import React, {useEffect, useState} from 'react';
import Questions from '../../User/Questions/Questions';
import { useNavigate } from 'react-router-dom';
import { Header } from '../Header/Header.js';
import { Footer } from '../Footer/Footer.js';
import {api} from '../../../services/api';
import Result from '../Result/Result';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

export default function SelectionTheme(){
    const navigate = useNavigate();
    const [groups, setGroups] = useState([]);
    const [modalVisible, setModalVisible] = useState(true);
    const [objective, setObjective] = useState('');
    const [answerQuestion, setAnswerQuestion] = useState(false);

    const assessment_id = localStorage.getItem('assessment_id');

    const token = localStorage.getItem('x-access-token');
    const userId = localStorage.getItem('userId');

    useEffect(() => {
        api.get('http://localhost:3000/question-group', {
            headers: {'x-access-token': token}
          })
          .then((res) => {
            setGroups(res.data);
          })
          .catch((error) => {
            console.error(error)
          })

    }, []);


    /* useEffect(()=> {
        api.get('http://localhost:3000/assessment', {
            headers: {'x-access-token': token}
          })
          .then((res) => {
            console.log(res);           
          })
          .catch((error) => {
            console.error(error)
          })
    },[]) */


    useEffect(()=>{
        api.get('http://localhost:3000/answer/assessment/' + assessment_id, {
            headers: {'x-access-token': token}
          })
          .then((res) => {
            if(res.data){
                console.log('caiu aqui');
                setAnswerQuestion(true);
            }            
          })
          .catch((error) => {
            console.error(error)
          })
    })


    function routeChange (id) { 
        let path = `/questions/` + id; 
        navigate(path); 
    }

    function assessmentFinish() {
        if(answerQuestion)
            navigate('/result'); 
    }

    async function onSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData)
        
        const objective  = data.objective;

        if(!objective)
            return alert("Informe o seu objetivo");

        api.post('http://localhost:3000/assessment', {title: objective, user: `${userId}`},{
            headers: {'x-access-token': token},
            })
            .then((res) => {
                setModalVisible(false);
                setObjective('');
                localStorage.setItem('assessment_id', res.data.assessment_id);
                
            })
            .catch((error) => {
            console.error(error)
            })
    }

    useEffect(()=>{
       const assessment =  localStorage.getItem('assessment_id');
       
       if(assessment)
            setModalVisible(false);
    },[])


    function logout(){
        localStorage.clear();
        navigate('/')
    }

    
    return(
        <div className='container-content'>
            <Header/>
            <div className='container-theme'>
                <div className='container-icon-exit'>
                    <FontAwesomeIcon onClick={()=> logout()} style={{fontSize: 20, color: '#B20000', marginRight: 25}} icon={faSignOutAlt} />
                </div>
               {
                  modalVisible ? <>
                   <div className="modal-overlay"/>
                    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
                        <div className="modal">
                            <div className="modal-header">
                                <h2>
                                    Para iniciar uma nova avaliação informe o seu objetivo:
                                </h2>
                            </div>
                            <form onSubmit={onSubmit}> 
                                <div>
                                    <input type="input" required name="objective" value={objective} className='inputObjetive' placeholder='Objetivo' onChange={e => setObjective(e.target.value)}></input>
                                </div>
                                <div className='body-start-assessment'>
                                    <button type='submit' className='btn-startAssessment'>Iniciar</button>
                                </div>
                            </form>
                        </div>
                   </div>
                   </>  : <></>
               } 
                <div className='title-theme'>
                        <h2>Selecione o Tema:</h2>
                </div>
                <div className='body-theme'>
                    <div className='card-theme'>   
                        {
                            groups.map( group => {
                                return(
                                    <div className='card-group'>
                    
                                        <button onClick={() => routeChange(group._id)} className='btn-text-theme'>
                                            <h2>{group.group}</h2>
                                        </button>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='btn-next-container'>
                        <button className='btn-next' onClick={()=> assessmentFinish()}>Finalizar</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}