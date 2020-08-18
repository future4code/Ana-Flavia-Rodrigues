import React from 'react';


function Etapa2() {
  return (
<div>
  <section className="Etapa2">
   <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
   <p>5. Qual curso?</p>
   <input
    type="text"
    name="curso"
    id="curso "
    placeholder="curso "
    /> 
    <p>6. Qual a unidade de ensino?</p>
    <input
    type="text"
    name="unidade"
    id="unidade "
    placeholder="Unidade de ensino "
    />
 </section>
</div>
  );
}
export default Etapa2;

