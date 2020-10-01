import Button from '@material-ui/core/Button';
import React from 'react';
import LabedditLogo from '../../assets/logo.png';
import {MainContainer, SignUpButtonContainer } from './styled';
import LoginForm from './LoginForm';
import {useHistory} from 'react-router-dom';
import { goToSignUp } from '../../router/Coordinator';
import useUnprotectedPage from '../../hooks/useUnprotectedPage';

const LoginPage = () => {
  useUnprotectedPage()
  const history = useHistory()

  return (
    <MainContainer>
      <img alt={'logo'} src={LabedditLogo} />
      <LoginForm/>
      <SignUpButtonContainer>
        <Button
          onClick={() => goToSignUp(history)}
          type={'submit'}
          variant={'text'}
          color={'primary'}
          fullWidth
        >
          Não tem cadastro? Clique aqui
    </Button>
      </SignUpButtonContainer>
    </MainContainer>
  )
}




export default LoginPage