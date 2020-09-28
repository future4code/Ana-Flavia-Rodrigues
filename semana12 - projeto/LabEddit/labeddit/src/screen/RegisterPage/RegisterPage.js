import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import {MainContainer , Form} from './styled';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
  

const  RegisterPage = () => {
    const classes = useStyles();
    return(
        <MainContainer>
        
        <Form className={classes.root} noValidate autoComplete="off">
        
            <TextField required id="standard-nome-input" 
            label="Nome do Usuário" 
             />

            <TextField required id="standard-email-input" 
            label="E-mail" 
             />

            <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            />
           
            <p><Button 
            variant="contained" 
            color="primary" 
            href="#contained-buttons">
                Cadastrar
            </Button></p>
        </Form>
   
    </MainContainer>
    )
}

export default RegisterPage