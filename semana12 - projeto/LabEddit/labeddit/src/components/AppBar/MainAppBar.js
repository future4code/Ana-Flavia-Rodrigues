import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button'

const MainAppBar = () => {
  const history = useHistory()
  return(
    <AppBar>
      <Toolbar>
        <Button onClick={() => goToFeedPage(history)}>LabEddit</Button>
        <Button onClick={() => null}>Logout</Button>
      </Toolbar>
    </AppBar>
  )
}

export default MainAppBar