import styled from "styled-components";

export const FormContainer = styled.form`
display: block;
flex-wrap: wrap;
align-content: start;
margin:0 auto;
width: 30vw;
height: 95vh;
border-radius: 10px;
border-width: 2px;
border-style: solid;
border-color:#9e939e;
box-shadow: 7px 10px 16px -1px #9e939e;
background-color: #e7a61a;
    a{
        text-decoration:none;
    }
    
`
export const Input = styled.input`
border-radius:4px;
-moz-border-radius:4px;
-webkit-border-radius:4px;
box-shadow: 1px 1px 2px #333333;    
-moz-box-shadow: 1px 1px 2px #333333;
-webkit-box-shadow: 1px 1px 2px #333333;
//background: #cccccc; 
border:1px solid #000000;
width:300px
;
`
export const TextArea = styled.textarea`
border-radius:4px;
-moz-border-radius:4px;
-webkit-border-radius:4px;
box-shadow: 1px 1px 2px #333333;    
-moz-box-shadow: 1px 1px 2px #333333;
-webkit-box-shadow: 1px 1px 2px #333333;
//background: #cccccc; 
border:1px solid #000000;
width:300px
;
`
export const Select = styled.select`
border-radius:4px;
-moz-border-radius:4px;
-webkit-border-radius:4px;
box-shadow: 1px 1px 2px #333333;    
-moz-box-shadow: 1px 1px 2px #333333;
-webkit-box-shadow: 1px 1px 2px #333333;
//background: #cccccc; 
border:1px solid #000000;
width:300px
;
`
export const Container = styled.div`
display: grid;
grid-gap: 10px;
grid-auto-flow: row;
justify-items: center;

`