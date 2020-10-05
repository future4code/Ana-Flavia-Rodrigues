import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import { RecipeContainer, ScreenContainer } from './styled'
import CreatePostForm from './CreatePostForm'
import Typography from '@material-ui/core/Typography'

const AddRecipePage = () => {
  useProtectedPage()
  return (
    <ScreenContainer>
      <RecipeContainer>
        <Typography 
          gutterBottom variant={'h4'} 
          align={'center'} 
          color={'textPrimary'}>Adicionar Novo Post
        </Typography>
        <CreatePostForm/>
      </RecipeContainer>
    </ScreenContainer>
  )
}

export default AddRecipePage
