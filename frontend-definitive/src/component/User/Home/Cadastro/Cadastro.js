import './Cadastro.css'
import React, {useState} from "react";
import { api } from '../../../../services/api';
import { useNavigate } from 'react-router-dom'


export function Cadastro(){

    const[fullname, setFullname] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const navigate = useNavigate()

    async function onSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData)
        
        setFullname(data.fullname);
        setEmail(data.email);
        setPassword(data.password);

        const retorno = await api.post('/user', { fullname, email, password }).then((response) => {
            console.log(response)
            if(response.status == 201 || response.status == 200 ){
                alert('Cadastrado realizado com sucesso !');
                //navigation.navigate('/')
            }
        }) .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
            alert('Erro ao criar usuário, informe os campos corretamente');
        });
        console.log(retorno); 

        
        /* if (retorno) {
          console.log("Cadastrado")
          localStorage.setItem('x-access-token', retorno.data.token)
          
          //navigate('/selection-theme')
    
        } else {
          console.log("Não autorizado!")
          alert('Erro ao criar usuário, informe os campos corretamente');
        } */
    
        //console.log("Voltei!") 
        //console.log("Retorno: "+retorno.data.token)
    

    }

    return (
        <div className='container'>
            <div className='body-form-cadastro'>
                <form onSubmit={onSubmit}>
                    <table>
                        <tr>
                            <td className='text-form'>
                                <span>Nome: </span>
                            </td>
                            <td>
                                <input type="text" name="fullname" value={fullname} onChange={e => setFullname(e.target.value)}/>
                            </td>
                        </tr>
                        <tr>
                            <td className='text-form'>
                                <span>Email: </span>
                            </td>
                            <td>
                                <input type="text" name="email" value={email} onChange={e => setEmail(e.target.value)}/>
                            </td>
                        </tr>
                        <tr>
                            <td className='text-form'>
                                <span>Senha: </span>
                            </td>
                            <td>
                                <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)}/>
                            </td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>    
                            </td>
                        </tr>
                    </table>
                    <div className='content-btn'>
                        <input type="submit" value="Cadastrar" className='btn-cadastrar'/>
                    </div>
                </form>
            </div>
        </div>
    )
}
