import './SelectionTheme.css';
import React, {useState} from 'react';
import Questions from '../../User/Questions/Questions';
import { useNavigate } from 'react-router-dom';
import { Header } from '../Header/Header.js';
import { Footer } from '../Footer/Footer.js';



export default function SelectionTheme(){
    const navigate = useNavigate();
    const [themes, setThemes] = useState([
        {'id': '629cade532792ed640a437f0', 'title': 'theme 1'}, {'id': '629cae2e32792ed640a437f2', 'title': 'theme 2'}, {'id': '629cae7b32792ed640a437f4', 'title': 'theme 3'},
        {'title': 'theme 4'}, {'title': 'theme 5'}, {'title': 'theme 6'}
    ]);


    function routeChange (id) { 
        console.log(id)
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
                            themes.map(theme => {
                                console.log(theme.id)
                                return(
                                    <div>
                    
                                        <button onClick={() => routeChange(theme.id)} className='btn-text-theme'>
                                            Disabled Button
                                        </button>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='btn-next-container'>
                        <button className='btn-next'  onClick={routeChange}>Avançar</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}