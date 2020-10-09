import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Fab from '@material-ui/core/Fab'

export const RecipeCardContainer = styled(Card)
`
display:grid;
grid-template-columns: 1fr 9fr;
width: 70%;
margin: 10px
`

export const RecipeCardContent = styled(CardContent)`
display: flex;
flex-direction:column;
width: 90%;
`
export const FeedContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  background-color:#A9A9A9;
`

export const AddPostButton = styled(Fab)`
  position: fixed !important;
  right: 20px;
  bottom: 20px;
  z-index: 3;
`

export const PostContainer = styled.div`
display: flex;
flex-direction:column;
align-items: center;
width: 100vw;
background-color:#D3D3D3;
`
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 450px;
  align-items: center;
  margin-bottom: 20px;  
`
export const PostFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
  margin-bottom: 20px;
  
`
export const FormFeedContainer = styled.div`
display: flex;
flex-direction:column;
align-items: center;
width: 100vw;
background-color:#D3D3D3;

`