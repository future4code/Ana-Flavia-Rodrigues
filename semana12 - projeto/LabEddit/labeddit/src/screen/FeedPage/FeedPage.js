import React, { useEffect, useLayoutEffect, useState } from 'react';
import PostCard from './PostCard'
import {useHistory} from 'react-router-dom';
import { goToLogin } from '../../router/Coordinator';
import useProtectedPage from '../../hooks/useProtectedPage';
import {PostContainer, RecipeCardContainer} from './styled'
import axios from 'axios'
import {BASE_URL} from '../../constants/urls'
import useRequestData from '../../hooks/useRequestData';
import Loading from '../../components/Loading/Loading'

const  FeedPage = () => {
  const [recipes , setRecipes] = useState([])
  // const recipes = useRequestData([], '/posts')
  //redirecionar o usuário para a página de login, caso não esteja logado
  const history = useHistory()
  //pegar o token armazenado no localStorage, caso ele exista na primeira renderização da página
  useLayoutEffect(() => {
    const token = localStorage.getItem('token')
    if (!token){
      goToLogin(history)
    }
  },[history])
  // custom hooks para proteger as telas, só permitir o acesso se logado
  useProtectedPage()

  useEffect(()=>{
    axios.get(`${BASE_URL}/posts`,{
      headers:{
        Authorization : localStorage.getItem('token')
      }
    })
    .then((response)=>{
      setRecipes(response.data.posts)
      
    })
    .catch((error)=>(console.log(error)))
  },[])

  const renderPostList = () => {
    return (
        recipes.map((post) => {
            return (
                <PostCard 
                key={post.id}
                title={post.title}
                text={post.text}
                userName={post.username}
                post={post}
                postId={post.id}
                comments={post.commentsCount}
                create={post.createdAt}
                votesCount={post.votesCount}
                />
            )
        })
    )
}
console.log(recipes)
  return (
    
    <PostContainer>
     {recipes.length > 0 ? renderPostList() : <Loading/>}
    </PostContainer>
  );
}



export default FeedPage