import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import { goToFeedPage } from '../router/Coordinator'
import {useParams} from 'react-router-dom'

export const addPost = (body, history, setIsLoading) => {
  setIsLoading(true)
  axios.post(`${BASE_URL}/posts`, body, {
    headers: {
      Authorization: localStorage.getItem('token')
    }
  }).then((response) => {
      setIsLoading(false)
      alert('Post publicado com sucesso!')
      console.log(response)
      console.log(body)
      goToFeedPage(history)
    }
  ).catch((error) => {
      console.log(error)
      setIsLoading(false)
      alert('Ops! Ocorreu algo de errado. Tente novamente!')

    }
  )
}

  