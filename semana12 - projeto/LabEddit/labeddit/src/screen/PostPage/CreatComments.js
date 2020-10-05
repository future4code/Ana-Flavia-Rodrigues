import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { InputsContainer, AddPostFormContainer} from './styled'
import { useHistory , useParams } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import CircularProgress from '@material-ui/core/CircularProgress'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'
import {goToFeedPage} from '../../router/Coordinator'
import {addPost} from '../../services/post'

const CreateCommnets = (props) => {
  const history = useHistory()
  const {id} = useParams()
  const [form, handleInputChange] = useForm({
	"text": " "
})
  const [isLoading, setIsLoading] = useState(false)

  const onClickAddComment = (body, history, setIsLoading) => {
    
    setIsLoading(true)
    axios.post(`${BASE_URL}/posts/${id}/comment`, body, {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    }).then((response) => {
        setIsLoading(false)
        alert('Seu Comentário foi adicionado!')
        // goToFeedPage(history)
        
      }
    ).catch((error) => {
        console.log(error)
        setIsLoading(false)
        alert('Ops, algo de errado aconteceu. Tente novamente!')
  
      }
    )
  }


//   const onClickAddComment = (event) => {
//     event.preventDefault()
//     const element = document.getElementById('addcomment_form')
//     const isValid = element.checkValidity()
//     element.reportValidity()
//     if (isValid) {
//         addPost(form, history, setIsLoading) 
//     }
//   }

  return (
    <form id={'addcomment_form'}>
      <AddPostFormContainer>
        <InputsContainer>
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
          onClick={()=>null}
          color={'primary'}
          variant={'contained'}
          type={'submit'}
          fullWidth
          margin={'normal'}
        >
          {isLoading ? <CircularProgress color={'inherit'} size={24}/> : <>Adicionar Comentário</>}
        </Button>
        
      </AddPostFormContainer>
    </form>
  )
}

export default CreateCommnets