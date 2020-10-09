import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Fab from '@material-ui/core/Fab'

export const AddPostFormContainer = styled(Card)
`
display:grid;
grid-template-columns: 1fr 9fr;
width: 70%;
margin: 10px
`

export const PostCardContent = styled(CardContent)`
display: flex;
flex-direction:column;
width: 90%;
`

export const ScreenContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction:column;
width: 100vw;
margin: 30px;
`


export const PostContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction:column;
padding: 30px;
border: 1px solid #ccc;
box-shadow: 5px 5px 10px #d3d3d3;
-webkit-box-shadow: 5px 5px 10px #d3d3d3;
-moz-box-shadow: 5px 5px 10px #d3d3d3;
border-radius: 10px;
width: 70vw;
max-width:600px;
min-width:300px
padding: 30px;
`
export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 450px;
  align-items: center;
  margin-bottom: 20px;
`