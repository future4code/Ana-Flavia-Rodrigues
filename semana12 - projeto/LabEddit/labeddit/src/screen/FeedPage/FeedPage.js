import React, { useEffect, useLayoutEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {useHistory} from 'react-router-dom';
import { goToLogin } from '../../router/Coordinator';
import useProtectedPage from '../../hooks/useProtectedPage';

const useStyles = makeStyles({
  root: {
    maxWidth: 275,
    margin: '0 auto',
    marginTop: 20,
  },

  title: {
    fontSize: 20,
  },
 
});

const  FeedPage = () => {
  //redirecionar o usuário para a página de login, caso não esteja logado
  const history = useHistory()
  const classes = useStyles();
  //pegar o token armazenado no localStorage, caso ele exista na primeira renderização da página

  // useLayoutEffect(() => {
  //   const token = localStorage.getItem('token')
  //   if (!token){
  //     goToLogin(history)
  //   }
  // },[history])
  //custom hooks para proteger as telas, só permitir o acesso se logado
  useProtectedPage()

  return (
      <>
    <Card className={classes.root}>
      <CardContent>
        <TextField id="outlined-basic" label="Escreva seu Post" variant="outlined" />
      </CardContent>
          <CardActions>
            <Button size="small" variant="contained" 
            color="primary" >Postar</Button>
          </CardActions>
    </Card>
    <Card className={classes.root}>
        <CardActionArea>
        <CardMedia
            className={classes.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
            Nome do Usuário
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
            Texto do Post
        </Typography>
        </CardContent>
        </CardActionArea>
    <CardActions>
    <Button size="small" color="primary">
    curtir
    </Button>
    <Button size="small" color="primary">
    Comentarios
    </Button>
    </CardActions>
    </Card>
    </>
  );
}



export default FeedPage