
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { BtContainer , AppBarTitle } from './styled';
import { useHistory } from 'react-router-dom'
import { goToFeedPage } from '../../router/Coordinator';
import Icone from '../../assets/iconebranco.png'


export default function MainAppBar() {
  const history = useHistory()

  return (
    <div >
      <AppBar position="static">
        
        <Toolbar>
          <BtContainer>
            <Button color="inherit" onClick={()=>goToFeedPage(history)}>
            <img alt={'logo'} src={Icone}/>
              <AppBarTitle variant={'h6'}>LabEddit</AppBarTitle>
            </Button>
            <Button color="inherit" onClick={()=>null}>
              <Typography variant={'h6'}>Login</Typography>
            </Button>
          </BtContainer>
        </Toolbar>
      </AppBar>
    </div>
  );
}
