import './Result.css';
import React, {useEffect, useState} from 'react';
import { Header } from '../Header/Header.js';
import { Footer } from '../Footer/Footer.js';
import { Chart } from 'react-google-charts';
import {api} from '../../../services/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export const data = [
    ["Questions", "Answer"],
    ["Questões conformes", 20],
    ["Questões não conformes", 2],
    ["Questões que não se aplicam", 3],
    ["Questões não respondidas", 5],
]

export default function Result(){
    const assessment_id = localStorage.getItem('assessment_id');
    const token = localStorage.getItem('x-access-token');
    const navigate = useNavigate();

    const [ chartData, setChartData] = useState([]);

    useEffect(()=>{
        /* api.get('http://localhost:3000/answer/assessment/' + assessment_id, {
            headers: {'x-access-token': token}
          })
          .then((res) => {
            console.log(res);     
          })
          .catch((error) => {
            console.error(error)
          }) */
    },[])

    function logout(){
        localStorage.clear();
        navigate('/')
    }

    return(
        <div className='container-body'>
            <Header/>
            <div className='container-result'>
                <div className='container-icon-exit'>
                    <FontAwesomeIcon onClick={()=> logout()} style={{fontSize: 20, color: '#B20000', marginRight: 25}} icon={faSignOutAlt} />
                </div>
                <div className='title-result'>
                    <h2>Resultado</h2>
                </div>
                <div className='container-result-text'>
                    <div className='body-text-result'>
                    <Chart
                        chartType="PieChart"
                        data={data}
                        width="100%"
                        height="400px"
                        legendToggle
                    />
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
} 