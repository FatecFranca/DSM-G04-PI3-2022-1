import './Login.css';
import React, {useState, useContext, useEffect} from "react";
import { useNavigate } from 'react-router-dom'

import { AuthContext } from '../../../../contexts/Auth/AuthContext';

import { api } from './../../../../services/api';

export function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const contexto = useContext(AuthContext)

    const navigate = useNavigate()

    async function onSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData)
       
        setEmail(data.email)
        setPassword(data.password)
        
        const retorno = await api.post('user/login', { email, password })

        if(email == 'admin@admin.com' && password == '@0123456'){
            localStorage.setItem('x-access-token', retorno.data.token);
            localStorage.setItem('userId', retorno.data.user_id)
           return navigate('/admin-home')
        }
        
        if (retorno && email != 'admin@admin.com') {
          localStorage.setItem('x-access-token', retorno.data.token)
          localStorage.setItem('userId', retorno.data.user_id)
          
          return navigate('/selection-theme')
    
        } else {
          alert('Usuário ou senha incorreto');
        }

    
    //    setValues(initialState);
      }

    return(
        <div className='container'>
            <div className='body-form'>
                <form onSubmit={onSubmit}>
                    <table>
                        <tr>
                            <td className='text-form'>
                                <span>E-mail: </span>
                            </td>
                            <td>
                                <input type="text" name="email" required value={email} onChange={e => setEmail(e.target.value)}/>
                            </td>
                        </tr>
                        <tr>
                            <td className='text-form'>
                                <span>Senha: </span>
                            </td>
                            <td>
                                <input type="password" name="password" required value={password} onChange={e => setPassword(e.target.value)}/>
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
                        <input type="submit" value="Confirmar" className='btn-confirmar'/>
                    </div>
                </form>
            </div>
        </div>
    )
}