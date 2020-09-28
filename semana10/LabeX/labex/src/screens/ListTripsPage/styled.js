import styled from "styled-components";

export const CardTripContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
`

export const CardTrip = styled.div`
  display: flex;
  width: 300px;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  border-width: 2px;
  border-style: solid;
  border-color: #000;
  box-shadow: 20px;
  border-radius: 10px;
  margin: 10px;
  cursor: pointer;
  &:hover {
    border-color: gray  ;
  }
`;


