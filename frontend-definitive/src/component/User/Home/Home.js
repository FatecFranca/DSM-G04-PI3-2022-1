import './Home.css';
import React, {useState} from 'react';
import { Login } from './Login/Login';
import { Cadastro } from './Cadastro/Cadastro';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';


function Home() {

  const [pageLogin, setPageLogin] = useState(true);

  return (
    <div className='container-home'>
      <Header/>
      <div className='home-user'>
        <div class="container">
          <label className={pageLogin ? 'user-login-selected' : 'user-login'} onClick={()=> setPageLogin(true)}>Login</label>
          <label className={pageLogin ? 'user-cadastro' : 'user-cadastro-selected'} class="user-cadastro" onClick={()=> setPageLogin(false)}>Registrar</label>
        </div>
        <div>
          {
            pageLogin ? <Login/> : <Cadastro/>
          }
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
