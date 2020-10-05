import React, { useEffect, useLayoutEffect, useState } from 'react';
import PostCard from './PostCard'
import {useHistory} from 'react-router-dom';
import { goToCreatePost, goToLogin  } from '../../router/Coordinator';
import useProtectedPage from '../../hooks/useProtectedPage';
import {AddPostButton, FormFeedContainer, PostContainer, RecipeCardContainer} from './styled'
import axios from 'axios'
import {BASE_URL} from '../../constants/urls'
import useRequestData from '../../hooks/useRequestData';
import Loading from '../../components/Loading/Loading'
import PostForm from './PostForm';
import {goToPostPage} from '../../router/Coordinator'
import AddCommentIcon from '@material-ui/icons/AddComment';

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
                onClick={() => goToPostPage(history, post.id)}
                key={post.id}
                titlePost={post.title}
                text={post.text}
                userName={post.username}
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
    <FormFeedContainer>

    <AddPostButton color="primary" onClick={()=>goToCreatePost(history)}>
      <AddCommentIcon/>
    </AddPostButton>
     {recipes.length > 0 ? renderPostList() : <Loading/>}
    
    </FormFeedContainer>
  );
}



export default FeedPage