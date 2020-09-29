import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import {MainContainer , Form} from './styled';
import Button from '@material-ui/core/Button';
import {goToRegisterPage} from '../../router/Coordinator'
import { useHistory } from 'react-router-dom';
import LabedditLogo from '../../assets/logo.png'

const  LoginPage = () => {
  return(
    <div>
      <img alt={'logo'} src={LabedditLogo}/>
      <form>
{/* inputs do Material           */}
      <TextField 
        label={'E-mail'} 
        type={'email'}
      />

      <TextField 
        label={'Senha'} 
        type={'password'}
      />
{/* se não colocar o botão de submit noo form, ele não faz a verficação dos campos */}
      <Button 
        type={'submit'}
        variant={'contained'}
        color={'primary'}
        >
          Fazer Login
      </Button>
    </form>
    <Button 
        type={'submit'}
        variant={'text'}
        color={'primary'}
        >
          Não tem cadastro? Clique aqui
    </Button>

    </div>
  )
} 



// // const useStyles = makeStyles((theme) => ({
// //   root: {
// //     '& .MuiTextField-root': {
// //       margin: theme.spacing(1),
// //       width: '25ch',
// //     },
// //   },
// // }));

// // const  LoginPage = () => {
// //     const history = useHistory()  
// //     const classes = useStyles();

// //   return (
// //     <MainContainer>
// //       <img alt={'logo'} src={LabedditLogo}/>  
// //         <Form className={classes.root} >
        
// //             <TextField 
// //             required id="standard-email-input" 
// //             label="E-mail"
// //             type="" 
// //              />
             
// //             <TextField
// //             id="standard-password-input"
// //             label="Password"
// //             type="password"
// //             autoComplete="current-password"
// //             />
           
// //             <p><Button 
// //             variant="contained" 
// //             color="primary" 
// //             href="#contained-buttons">
// //                 Entrar
// //             </Button></p>
// //             <p><Button 
// //             variant= "text" 
// //             color="secundary" 
// //             onClick={() => goToRegisterPage(history)}>
// //                 Não é cadastrado? Clique aqui
// //             </Button></p>
// //         </Form>
   
// //     </MainContainer>
// //     )
// }

export default LoginPage