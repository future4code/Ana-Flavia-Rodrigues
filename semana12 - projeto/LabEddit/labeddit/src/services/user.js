import axios from 'axios';
import {BASE_URL} from '../constants/urls'


//body vem da tela de formulário via props
export const Login = (body) => {
    axios.post(`${BASE_URL}/login`, body)
    .then((response) => console.log(response))
    .catch((error) => console.log(error))
}