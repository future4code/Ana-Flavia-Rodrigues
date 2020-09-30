import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react';
import LabedditLogo from '../../assets/logo.png';
import { Login } from '../../services/user';
import { FormContainer, MainContainer, LoginContainer, SignUpButtonContainer } from './styled';

const LoginPage = () => {
  //criar um estado unico para mandar um unico objeto para a API com os campos requeridos
  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  //função para controlar o input. Como temos um estado com os objetos, precisamos de apenas uma função
  const handleInputChange = (event) => {
    // const val = event.target.value
    // const name = event.target.name
    //usando a desestruturação : (é importante que o name tenha o mesmo nome que o estado
    //para que um campo não seja alterado se estiver sendo digitado em outro lugar)
    const { value, name } = event.target
    setForm(
      { ...form, [name]: value }
    )

  }

  const onClickLogin = (event) => {
    //o botão submit recarrega a página quando clicado(comportamento padrão)
    //para evitar isso vamos tirar todos os comportamentos padrão do botão
    event.preventDefault()
    //tenho que manter a validação do campo e condicionar a continuidade a validação
    //só fazendo a requisição se o formulario estiver valido
    const element = document.getElementById('login_form')
    const isValid = element.checkValidity()
    //validando o input
    element.reportValidity()
    if (isValid) {
      //body enviado como parametro para a função
       Login(form)
    }
    
  }

  return (
    <MainContainer>
      <img alt={'logo'} src={LabedditLogo} />
      <form id={'login_form'}>
        {/* inputs do Material           */}
        <LoginContainer>
          <FormContainer>
            <TextField
              label={'E-mail'}
              //captar valor digitado 
              value={form.email}
              name={'email'}
              onChange={handleInputChange}
              type={'email'}
              // para que o input utilize todo o espaço disponivel
              fullWidth
              // margem para os imputs não ficarem colados uns aos outros
              margin={'normal'}
              // campo requirido
              required
              //para o foco ir direto nesse campo quando a tela abrir
              autoFocus
            />

            <TextField
              label={'Senha'}
              type={'password'}
              fullWidth
              margin={'normal'}
              required
              value={form.password}
              name={'password'}
              onChange={handleInputChange}
            />
          </FormContainer>
          {/* se não colocar o botão de submit no form, ele não faz a verficação dos campos */}

          <Button
            onClick={onClickLogin}
            type={'submit'}
            variant={'contained'}
            color={'primary'}
            fullWidth
            margin={'normal'}
          >

            Fazer Login
      </Button>
        </LoginContainer>
      </form>
      <SignUpButtonContainer>
        <Button
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