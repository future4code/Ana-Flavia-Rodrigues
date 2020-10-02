import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Fab from '@material-ui/core/Fab'

export const RecipeCardContainer = styled(Card)
` display: flex;
  width: 50%;
  margin: 20px
  align-items: center;
  justify-content: center;
  margin: 30px;
`

export const RecipeCardContent = styled(CardContent)`
  display: grid;
  width: 80%;
  margin: 0 auto;
  grid-template-columns: 1fr 5fr;
  grid-gap: 10px;
  
`

export const FeedContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  background-color:#F0E68C;
`

export const AddRecipeButton = styled(Fab)`
  position: fixed !important;
  right: 20px;
  bottom: 20px;
  z-index: 3;
`

export const PostContainer = styled.div`
align-items: center;
justify-content: center;
width: 100vw;
background-color:#F0E68C;
margin: 0 auto;
  `