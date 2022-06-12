import './Questions.css';
import React, {useEffect, useState} from "react";



export default function Questions(){
    const [question, setQuestion] = useState([{'number': 1, 'enunciado': 'texto do enunciado ?', 'check_answer': 0}, {'number': 2, 'enunciado': 'texto do enunciado ?', 'check_answer': 0},
        {'number': 0, 'enunciado': 'texto do enunciado ?', 'check_answer': 0}, {'number': 4, 'enunciado': 'texto do enunciado ?', 'check_answer': 0}
    ])
    const [checkAnswer, setCheckAnswer] = useState(false);
    const [checkAnswer1, setCheckAnswer1] = useState(false);
    const [checkAnswer2, setCheckAnswer2] = useState(false);
    const [checkAnswer3, setCheckAnswer3] = useState(false);

    function validationCheckbox(check, number, number_question){
        /* console.log(question);
        setQuestion(question.forEach(quest => {
            if(quest.number == number_question){
                if(check && quest.check_answer < 1){
                    quest.check_answer = number;
                }
            }
        })); 

        console.log(question); */
        /* if(check && question.check_answer == 0){
            console.log('caiu no 1 if')
            question.check_answer = number;
        }

        if(!check && question.check_answer > 0){
            console.log('caiu no 2 if')
            question.check_answer = 0;
        } */

        /* if(check && question.check_answer != 0){
            console.log('caiu aqui');
            return alert('Já existe uma resposta ativa')
        }  */
    }


  /*   useEffect(()=> {
        console.log('teve mudança');
        console.log(checkAnswer1);
        console.log(checkAnswer2);
        console.log(checkAnswer3);
        setCheckAnswer1(checkAnswer1);
        setCheckAnswer2(checkAnswer2);
        setCheckAnswer3(checkAnswer3);
    }, [checkAnswer1, checkAnswer2, checkAnswer3]) */


    

    return(
        <div className='container-questions'>
            <div className='title-questions'>
                    <h2>Nome do Tema</h2>
            </div>
            <div className='body-questions'>
                <div className='questions'>
                {
                    question ? question.map(question => {
                        return(
                            <>
                                <div className='question-card'>
                                    <span>Pergunta {question.number}:</span>
                                    <span style={{marginLeft: 5}}>{question.enunciado}</span>
                                </div>
                                <div className='selects-answer'>
                                    <div className='checkbox-card'>
                                        <input type="checkbox" className='checkbox-input' /* checked={question.check_answer == 1 ? true : false} */ onChange={e => validationCheckbox(e.target.checked,  1, question.number)}/>
                                        <span>Sim</span>
                                    </div>
                                    <div className='checkbox-card'>
                                        <input type="checkbox" className='checkbox-input' /* checked={question.check_answer == 2 ? true : false} */ onChange={e => validationCheckbox(e.target.checked,  2, question.number)}/>
                                        <span>Não</span>
                                    </div>
                                    <div className='checkbox-card'>
                                        <input type="checkbox" className='checkbox-input' /* checked={question.check_answer == 3 ? true : false} */ onChange={e => validationCheckbox(e.target.checked, 3, question.number)}/>
                                        <span>Parcialmente</span>
                                    </div>
                                </div>
                                <div>
                                <textarea placeholder='Observações' className='text-area'>
                                </textarea>
                                </div>
                            </>
                        )
                    }) : <></>
                }
                <div className='btn-save-form'>
                    <button className='btn-save'>Salvar</button>
                </div>
                </div>
            </div>
        </div>
    );
}