import React from 'react';


function Etapa3() {
   
  return (
  <div>
   <section className="Etapa3">
    <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
    <p>5. Por que você não terminou um curso de graduação?</p>
     <input
       type="text"
       name="motivo"
       id="motivo "
      /> 
    <p>6. Você fez algum curso complementar?</p>
      <input
       type="select"
       name="complemento"
       id="complemento "
       />
   </section>
 </div>
 );
}
export default Etapa3;

