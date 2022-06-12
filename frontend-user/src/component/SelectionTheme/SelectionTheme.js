import './SelectionTheme.css';
import React, {useState} from 'react';
import Questions from '../Questions/Questions';
import { useNavigate } from 'react-router-dom';


export default function SelectionTheme(){
    const navigate = useNavigate();
    const [themes, setThemes] = useState([
        {'title': 'theme 1'}, {'title': 'theme 2'}, {'title': 'theme 3'},
        {'title': 'theme 4'}, {'title': 'theme 5'}, {'title': 'theme 6'}
    ]);


    const routeChange = () =>{ 
        let path = `/questions`; 
        navigate(path);
    }

    
    return(
        <div className='container-theme'>
            <div className='title-theme'>
                    <h2>Selecione o Tema:</h2>
            </div>
            <div className='body-theme'>
                <div className='card-theme'>   
                    {
                        themes.map(theme => {
                            return(
                                <div>
                                    <button className='btn-text-theme'>
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
    );
}