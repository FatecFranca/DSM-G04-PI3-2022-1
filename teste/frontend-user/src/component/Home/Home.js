import './Home.css';
import React, {useState} from 'react';
import { Login } from './Login/Login';
import { Cadastro } from './Cadastro/Cadastro';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SelectionTheme from '../SelectionTheme/SelectionTheme';

function Home() {

  const [pageLogin, setPageLogin] = useState(true);

  return (
    <div className='home'>
      <h2>aaaaa</h2>
      {/* <Header/> */}
      <SelectionTheme/>
      {/* <Footer/> */}
    </div>
  );
}

export default Home;
