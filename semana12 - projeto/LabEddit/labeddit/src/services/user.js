import axios from 'axios';
import {BASE_URL} from '../constants/urls'
import { goToFeedPage } from '../router/Coordinator';


//body vem da tela de formulário via props
export const Login = (body, history) => {
    axios.post(`${BASE_URL}/login`, body)
    //no caso de sucesso, guardar o token no localStorage e direcionar para tela de posts
    .then((response) => {
        localStorage.setItem('token',response.data.token)
        goToFeedPage(history)
    })

    .catch((error) => {
        console.log(error)
        alert("Falha no Login, tente novamente")
    })
}

export const SignUp = (body, history) => {
    axios.post(`${BASE_URL}/signup`, body)
    .then((response) => {
        localStorage.setItem('token',response.data.token)
        goToFeedPage(history)
    })

    .catch((error) => {
        console.log(error)
        alert("Falha no Login, tente novamente")
    })
}
