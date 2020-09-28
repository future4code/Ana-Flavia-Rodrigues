import styled from "styled-components";

export const CardTripContainer = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
align-items: center;
width: 100vw;
height: 100vh;
a{
  text-decoration:none;
}
`



export const CardTrip = styled.div`
  display: flex;
  width: 300px;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  border-width: 2px;
  border-style: solid;
  border-color: grey;
  box-shadow: 20px;
  border-radius: 10px;
  margin: 5px;
  cursor: pointer;
  &:hover {
    border-color: gray  ;
  }
  border-color:#9e939e;
  box-shadow: 7px 10px 16px -1px #9e939e;
  background-color: #e7a61a;
  color:#000;  
`;


