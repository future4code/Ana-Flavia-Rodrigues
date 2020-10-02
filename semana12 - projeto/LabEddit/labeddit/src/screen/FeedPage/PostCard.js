import React from 'react';
import Typography from '@material-ui/core/Typography';
import { FeedContainer, RecipeCardContainer, RecipeCardContent } from './styled';
import {SetaVerde} from '../../assets/seta_cima.png'
import {SetaVermelha} from '../../assets/seta_baixo.png'

const PostCard = (props) => {

  return (
    
    <RecipeCardContainer onClick={props.onClick}>
      <FeedContainer >
      <img src={SetaVerde} />
      {props.votesCount}
      <img src={SetaVermelha} />
      </FeedContainer >
        <RecipeCardContent >
          <Typography  align="center" variant="body2" component="p">
           Posted by {props.userName} 
          </Typography>
        <Typography align="center" variant='subtitle2' color="textSecondary" component="p">
          {props.create}
          </Typography>

        <Typography align="center" variant="h6" component="h3">
            {props.title}
          </Typography>
          <Typography variant='subtitle1' color="textSecondary" component="p">
          {props.text}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
          {props.comments} comments
          </Typography>
        </RecipeCardContent>
    </RecipeCardContainer>
  )
}
export default PostCard
