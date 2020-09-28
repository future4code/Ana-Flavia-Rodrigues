import React from 'react'
import {ContainerItem , DetailContainer} from './styled/styled'

const CandidateItem = (props) => {
  const approveCandidate = () => {
    props.decideCandidate(true, props.candidate.id)
  }

  const rejectCandidate = () => {
    props.decideCandidate(false, props.candidate.id)
  }

  return <div>
  <ContainerItem primary={props.candidate.name}>
  <p>Nome:{props.candidate.name}</p>
    <button onClick={approveCandidate}>
      OK
    </button>
    <button  onClick={rejectCandidate}>
     X
    </button>
    </ContainerItem>
</div>
}

export default CandidateItem