import React from 'react';
import { CardContainerCandidate , CandidateItem} from './styled/styled';

function CardCandidate() {
  return (
    <CardContainerCandidate>
        
        <h2>Lista de Candidatos</h2> 
        <CandidateItem>
            Nome: <button>Aprovar</button> <button>Rejeitar</button>
        </CandidateItem>
        <CandidateItem>
            Nome: <button>Aprovar</button> <button>Rejeitar</button>
        </CandidateItem>
        <CandidateItem>
            Nome: <button>Aprovar</button> <button>Rejeitar</button>
        </CandidateItem>
        <CandidateItem>
            Nome: <button>Aprovar</button> <button>Rejeitar</button>
        </CandidateItem>
         
    </CardContainerCandidate>
  );
}

export default CardCandidate;