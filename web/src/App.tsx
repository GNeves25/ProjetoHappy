import React from 'react';
import {BsBoxArrowInRight} from 'react-icons/bs';

import './styles/global.css';
import './styles/pages/landing.css';

import logoImg from './images/logo.svg';

function App() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Happy" />

        <main>
          <h1>Leve Felicidade Para o Mundo</h1>
          <p>Visite Orfanatos e Mude o Dia de Muitas Crianças</p>
        </main>

        <div className="location">
          <strong>Goiânia</strong>
          <span>Goiás</span>
        </div>
        
        <a href="" className="enter-app">
        <BsBoxArrowInRight size={26} color="rgba(0,0,0,0.6)"/>
        </a>

      </div>
    </div>
  );
}

export default App;
