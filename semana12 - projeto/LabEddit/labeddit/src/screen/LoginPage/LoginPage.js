import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import {MainContainer , Form} from './styled';
import Button from '@material-ui/core/Button';
import {goToRegisterPage} from '../../router/Coordinator'
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const  LoginPage = () => {
    const history = useHistory()  
    const classes = useStyles();

  return (
    <MainContainer>
        
        <Form className={classes.root} noValidate autoComplete="off">
        
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
                Entrar
            </Button></p>
            <p><Button 
            variant="contained" 
            color="secundary" 
            onClick={() => goToRegisterPage(history)}>
                Cadastrar
            </Button></p>
        </Form>
   
    </MainContainer>
    )
}

export default LoginPage