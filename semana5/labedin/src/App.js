import React from 'react';
import './App.css';

import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import foto from './img/perfil.jpeg';
import icone from './img/email.png'
import {icone1} from './img/endereco.png';


function App(props) {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>

        <CardGrande 
          imagem={foto} 
          nome="Ana Flavia Rodrigues" 
          descricao="Oi, eu sou a Flávia. Sou aluna da Labenu. Estamos aprendendo a desenvolver em react. O desafio é grande, mas os professores são bons."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />

        <CardPequeno 
          imagem={icone} 
          email="flavia_dev@gmail.com" 
          
        />

        <CardPequeno 
          imagem={icone1} 
          end="R: Sergio Lamarca, 240 - Sorocaba - SP" 
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
