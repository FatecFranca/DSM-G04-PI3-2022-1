import './Cadastro.css'
import React from "react";



export function Cadastro(){
    return (
        <div className='container'>
            <div className='body-form-cadastro'>
                <form>
                    <table>
                        <tr>
                            <td className='text-form'>
                                <span>Nome: </span>
                            </td>
                            <td>
                                <input type="text" name="nome" />
                            </td>
                        </tr>
                        <tr>
                            <td className='text-form'>
                                <span>Email: </span>
                            </td>
                            <td>
                                <input type="text" name="email" />
                            </td>
                        </tr>
                        <tr>
                            <td className='text-form'>
                                <span>Usuário: </span>
                            </td>
                            <td>
                                <input type="text" name="usuario" />
                            </td>
                        </tr>
                        <tr>
                            <td className='text-form'>
                                <span>Senha: </span>
                            </td>
                            <td>
                                <input type="text" name="senha" />
                            </td>
                        </tr>
                        <tr>
                            <td className='text-form'>
                                <span>Confirmar senha: </span>
                            </td>
                            <td>
                                <input type="text" name="confirmarSenha" />
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