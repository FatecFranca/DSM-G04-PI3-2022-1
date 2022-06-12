import './App.css';
import React from 'react';
import Routers from '../../routers.js';
import { BrowserRouter } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

function App() {
  return (
    <div class="main">
     <Header/>
        <div class="body">
          <BrowserRouter>
                <Routers/>
          </BrowserRouter>
        </div>
      <Footer/> 
    </div>
  );
}

export default App;
