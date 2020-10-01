import Button from '@material-ui/core/Button';
import React from 'react';
import LabedditLogo from '../../assets/logo.png';
import {MainContainer} from './styled';
import SignUpForm from './SignUpForm';
import useUnprotectedPage from '../../hooks/useUnprotectedPage';

const SignUp = () => {
  useUnprotectedPage()

  return (
    <MainContainer>
      <img alt={'logo'} src={LabedditLogo} />
      <SignUpForm/>
    </MainContainer>
  )
}




export default SignUp