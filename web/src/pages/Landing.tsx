import React from 'react';  // Sempre precisa colocar, nas novas versões n será necessário
import {BsBoxArrowInRight} from 'react-icons/bs'; // Seta diferenciada
import { Link } from 'react-router-dom'; //Serve para não carregar tudo de novo

import '../styles/pages/landing.css';

import logoImg from '../images/logo.svg';

function Landing() {
    return(
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
        
        <Link to="/app" className="enter-app">
            <BsBoxArrowInRight size={26} color="rgba(0,0,0,0.6)"/>
        </Link>

      </div>
    </div>
    );
}

export default Landing;