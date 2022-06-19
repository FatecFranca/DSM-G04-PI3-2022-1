import './SelectionTheme.css';
import React, {useEffect, useState} from 'react';
import Questions from '../../User/Questions/Questions';
import { useNavigate } from 'react-router-dom';
import { Header } from '../Header/Header.js';
import { Footer } from '../Footer/Footer.js';
import {api} from '../../../services/api'
const token = localStorage.getItem('x-access-token');



export default function SelectionTheme(){
    const navigate = useNavigate();
    /* const [themes, setThemes] = useState([
        {'id': '629cade532792ed640a437f0', 'title': 'theme 1'}, {'id': '629cae2e32792ed640a437f2', 'title': 'theme 2'}, {'id': '629cae7b32792ed640a437f4', 'title': 'theme 3'},
        {'title': 'theme 4'}, {'title': 'theme 5'}, {'title': 'theme 6'}
    ]); */
    //const [group, setGroup] = useState([]);
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        console.log('caiu aqui');
        api.get('http://localhost:3000/question-group', {
            headers: {'x-access-token': token}
          })
          .then((res) => {
              console.log(res);
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

    
    return(
        <div className='container-content'>
            <Header/>
            <div className='container-theme'>
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