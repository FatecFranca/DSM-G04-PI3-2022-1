import './Result.css';
import React, {useState} from 'react';
import { Header } from '../Header/Header.js';
import { Footer } from '../Footer/Footer.js';



export default function Result(){
    return(
        <div className='container-body'>
            <Header/>
            <div className='container-result'>
                <div className='title-result'>
                    <h2>Resultado</h2>
                </div>
                <div className='container-result-text'>
                    <div className='body-text-result'>
                        <h3>Recomendações: </h3>
                        <p>Resposta</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
} 