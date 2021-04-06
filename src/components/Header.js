import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Container, Typography, Button, Box, Tooltip, IconButton, Toolbar, } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: theme.palette.common.white
  },
  title: {
    color: theme.palette.common.black
  },
  menu: {
    flexGrow: 1,
  },
}))

function Header() {

  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.header} > 
      <Container maxWidth="md">
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            UGMONK
          </Typography>
          
          <Box className={classes.menu} mx={3}>
            <Button>Men</Button>
            <Button>Women</Button>
            <Button>Objects</Button>
            <Button>Analog</Button>
          </Box>

          <Box>
            <Button>Login</Button>
            <Tooltip>            
              <IconButton>
                <ShoppingCartIcon></ShoppingCartIcon>
              </IconButton>
            </Tooltip>
          </Box>
          </Toolbar>
        </Container>
      </AppBar>
  )
}
  
export default Header;