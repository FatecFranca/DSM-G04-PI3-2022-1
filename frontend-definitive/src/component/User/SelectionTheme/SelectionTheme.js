import './SelectionTheme.css';
import React, {useEffect, useState} from 'react';
import Questions from '../../User/Questions/Questions';
import { useNavigate } from 'react-router-dom';
import { Header } from '../Header/Header.js';
import { Footer } from '../Footer/Footer.js';
import {api} from '../../../services/api';
const token = localStorage.getItem('x-access-token');
const userId = localStorage.getItem('userId');


export default function SelectionTheme(){
    const navigate = useNavigate();
    const [groups, setGroups] = useState([]);
    const [modalVisible, setModalVisible] = useState(true);
    const [objective, setObjective] = useState('');

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


    function routeChange (id) { 
        let path = `/questions/` + id; 
        navigate(path); 
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
                console.log(res);
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
    
    return(
        <div className='container-content'>
            <Header/>
            <div className='container-theme'>
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
                                console.log(group);
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
                        <button className='btn-next'>Finalizar</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}