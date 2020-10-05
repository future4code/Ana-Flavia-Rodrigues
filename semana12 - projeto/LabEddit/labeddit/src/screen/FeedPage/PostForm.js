import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react';
import { Login } from '../../services/user';
import { FormContainer,  PostFormContainer, RecipeCardContainer } from './styled';
import {useHistory} from 'react-router-dom';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';



const PostForm = () => {
  
  
  //criar um estado unico para mandar um unico objeto para a API com os campos requeridos
  const [form, setForm] = useState({text: "",title: ""})
  //mandando o history como parametro para user.js para direcionar o usuario depois do login
  const history = useHistory()

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
    const element = document.getElementById('post_form')
    const isValid = element.checkValidity()
    //validando o input
    // element.reportValidity()
    // if (isValid) {
    //   //body enviado como parametro para a função
    //   //history enviado como parametro pra requisição para saber qual página deve ir
    //    Login(form, history)
    // }
    
  }

  return (
    <Card  variant="outlined">
    <CardContent>
    <FormContainer>
      <TextField
        label={'Titulo'}
        //captar valor digitado 
        value={form.title}
        name={'title'}
        onChange={handleInputChange}
        // para que o input utilize todo o espaço disponivel
        fullWidth
        // margem para os imputs não ficarem colados uns aos outros
        margin={'normal'}
        // campo requirido
        required
        //para o foco ir direto nesse campo quando a tela abrir
        autoFocus
      />
      <TextareaAutosize
        rowsMax={4}
        aria-label="maximum height"
        placeholder="Digite seu Post"
        fullWidth
        margin={'normal'}
        required
        value={form.text}
        name={'text'}
        onChange={handleInputChange}
      />
      {/* <TextField
        label={'Senha'}
        type={'password'}
        fullWidth
        margin={'normal'}
        required
        value={form.password}
        name={'password'}
        onChange={handleInputChange}
      /> */}
    </FormContainer>
    </CardContent>
    <CardActions>
      <Button 
      onClick={()=>null}
      type={'submit'}
      variant={'contained'}
      color={'primary'}
      fullWidth
      margin={'normal'}>
        Enviar Post
      </Button>
    </CardActions>
  </Card>
);


    
    //   <form id={'post_form'}>
    //     {/* inputs do Material           */}
    //     <PostFormContainer>
    //       <FormContainer>
    //         <TextField
    //           label={'Titulo'}
    //           //captar valor digitado 
    //           value={form.title}
    //           name={'title'}
    //           onChange={handleInputChange}
    //           // para que o input utilize todo o espaço disponivel
    //           fullWidth
    //           // margem para os imputs não ficarem colados uns aos outros
    //           margin={'normal'}
    //           // campo requirido
    //           required
    //           //para o foco ir direto nesse campo quando a tela abrir
    //           autoFocus
    //         />
    //         <TextareaAutosize 
    //             aria-label={"minimum height"} 
    //             rowsMin={3}
    //             placeholder={'Digite seu Post'}
    //             required
    //             margin={'normal'}
    //             value={form.text}
    //             name={'text'}
    //             onChange={handleInputChange}
    //             fullWidth
    //         />
    //       </FormContainer>
    //       {/* se não colocar o botão de submit no form, ele não faz a verficação dos campos */}

    //       <Button
    //         onClick={onClickLogin}
    //         type={'submit'}
    //         variant={'contained'}
    //         color={'primary'}
    //         margin={'normal'}
    //       >

    //         Criar Seu Post
    //   </Button>
    //     </PostFormContainer>
    //   </form>
      
  // )
}

export default PostForm