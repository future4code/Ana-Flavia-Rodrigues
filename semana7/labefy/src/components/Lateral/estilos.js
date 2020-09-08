import styled from 'styled-components';


export const AdicionarContainer = styled.div`
padding:8px;
border: 1px solid grey;
display: grid;
justify-content: center;
justify-items: center;
font-family: Roboto, sans-serif;

button{
  width: 60%;
  height: 40px;
  background: #ff602f;
  border: none;
  border-radius: 8px;
  color: #ffff;
  font-weight: 300;
  margin-top: 15px;
  margin-bottom: 20px;
  //margin: 0 auto;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  line-height: 40px;
  transition: filter 0.2s;
  &:hover {
      filter: opacity(80%);
  }
`
export const Nome= styled.label`
display: flex;
flex-direction: column;
align-items: flex-start;
margin-bottom: 8px;
`