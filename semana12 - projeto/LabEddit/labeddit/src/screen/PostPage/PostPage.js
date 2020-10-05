import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'
import React from 'react';
import useProtectedPage from '../../hooks/useProtectedPage';
import {useParams} from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import Loading from '../../components/Loading/Loading';
import {PostContainer ,PostCardContent ,PostCardContainer, ScreenContainer} from './styled'
import CreateCommnets from './CreatComments';

const  PostPage = () => {
    const [recipespost , setRecipesPost] = useState({})

    useProtectedPage()
    const {id} = useParams()
    useEffect(() => {
        axios.get(`${BASE_URL}/posts/${id}`, {
          headers: {
            Authorization: localStorage.getItem('token')
          }
        })
          .then((response) => {
            setRecipesPost(response.data.post)
            console.log(response.data.post.comments)
          })
          .catch((error) => {
            console.log(error)
            alert('Ocorreu um erro, tente novamente')
          })
      }, [])
    
      const commentsList = () => {
        return (
            recipespost.comments.map((item) => {
                return (
                    <p>
                      <ul> <li><strong>{item.username}:</strong> {item.text} </li></ul>  
                    </p>
                )
            })
        )
    }
    
    

    return(
        
      <ScreenContainer>  
        <PostContainer  >
          <Typography 
          gutterBottom 
          align={"center"} 
          variant={"h5"}>
              {recipespost.title}
          </Typography>
          
          <Typography
            gutterBottom 
            align={"justify"} 
            variant={"subtitle1"}>
            
              {recipespost.text}
          </Typography>
          <Typography align={"justify"}>
          <p>Comments:</p>{recipespost.comments ? commentsList() : 'Loading...'}
          </Typography>
          <button onClick={()=>null}>
            Comentar
          </button>
          {/* <CreateCommnets/> */}

        </PostContainer>
        </ScreenContainer>    
        
    )
}

export default PostPage