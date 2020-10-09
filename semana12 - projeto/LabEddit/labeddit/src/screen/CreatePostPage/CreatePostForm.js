import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { InputsContainer, AddPostFormContainer} from './styled'
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import CircularProgress from '@material-ui/core/CircularProgress'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'
import {goToFeedPage} from '../../router/Coordinator'
import {addPost} from '../../services/post'

const CreatePostForm = (props) => {
  const history = useHistory()
  const [form, handleInputChange] = useForm({
	"text": " ",
	"title": " "
})
  const [isLoading, setIsLoading] = useState(false)

  const onClickAddPost = (event) => {
    event.preventDefault()
    const element = document.getElementById('addpost_form')
    const isValid = element.checkValidity()
    element.reportValidity()
    if (isValid) {
        addPost(form, history, setIsLoading) 
    }
  }

  return (
    <form id={'addpost_form'}>
      <AddPostFormContainer>
        <InputsContainer>
          <TextField
            value={form.title}
            name={'title'}
            onChange={handleInputChange}
            label={'Título'}
            variant={'outlined'}
            fullWidth
            required
            autoFocus
            margin={'normal'}
          />
          <TextField
            value={form.text}
            name={'text'}
            onChange={handleInputChange}
            label={'Post'}
            variant={'outlined'}
            fullWidth
            required
            margin={'normal'}
          />
        </InputsContainer>
        <Button
          onClick={onClickAddPost}
          color={'primary'}
          variant={'contained'}
          type={'submit'}
          fullWidth
          margin={'normal'}
        >
          {isLoading ? <CircularProgress color={'inherit'} size={24}/> : <>Adicionar Post</>}
        </Button>
      </AddPostFormContainer>
    </form>
  )
}

export default CreatePostForm
