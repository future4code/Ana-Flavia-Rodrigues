import React from 'react';
import Typography from '@material-ui/core/Typography';
import { FeedContainer, RecipeCardContainer, RecipeCardContent } from './styled';

const PostCard = (props) => {

  return (
    
    <RecipeCardContainer onClick={props.onClick}>
      {/* container com numero de votos */}
      <FeedContainer >
        {props.votesCount}
      </FeedContainer >
      {/* container com os dados recebidos do backend */}
      <RecipeCardContent >
        <Typography  align={'inherit'} variant={"body2"} color={'textPrimary'} >
            Posted by {props.userName} 
        </Typography>
        {/* <Typography align={"center"} variant={'subtitle2'} color={"textSecondary"} >
            {props.create}
        </Typography> */}

        <Typography  align={'justify'} variant={'subtitle1'} color={"textSecondary"}>
        {props.text}
        </Typography>
        <Typography variant={"body1"} color={"textSecondary"}>
            {props.comments} comments
        </Typography>
      </RecipeCardContent>
  </RecipeCardContainer>
  )
}
export default PostCard
