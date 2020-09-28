import React from 'react'
import CandidateItem from './CandidateItem';
import {CardContainerCandidate} from './styled/styled'

const CandidatesList = (props) => {
    return<div>
      <CardContainerCandidate>
        <h1>
          Lista de candidatos
        </h1>
        <div>
          {props.candidates.map(candidate => {
            return <CandidateItem candidate={candidate} decideCandidate={props.decideCandidate}/>
          })}
        </div>
      
        </CardContainerCandidate>
        </div>
  }
  
  export default CandidatesList