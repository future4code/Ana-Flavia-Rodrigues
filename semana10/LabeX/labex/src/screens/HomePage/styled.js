import styled from "styled-components";



export const Logo = styled.img`
  width: 400px;
  height: 400px;
`;

export const Container = styled.div`
display: grid;
border: 1px solid grey;
grid-template-columns:1fr 1fr ;
padding: 16px;
margin:0 auto;
margin-top: 40px;
gap:1px;
width: 80%;
height: 500px;
align-items: center;
justify-self: center;
border-radius: 10px;
border-width: 2px;
border-style: solid;
box-shadow: 50px;
shadow-color: grey
 
`;

export const MainContainer = styled.div`
width: 100vw;
height: 100vh;
background: #000
`
// export const ShowTitle = styled.p`
//   margin: 4px;
//   text-align: center;
//   color: ${darkGray};
// `;

export const ButtonContainer = styled.div`
display: grid;
grid-template-rows: 1fr 1fr ;
grid-gap: 10px;
padding: 10%;
align-items: center;
justify-self: center;

`
const Logo1 = styled.img`
  width:100%;
  /* padding: 30%; */
  align-items: center;
  justify-self: center;
`