import './App.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { Container, Typography, Button, Box, Tooltip, IconButton, Toolbar, Paper, Grid, Link } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: theme.palette.common.white
  },
  title: {
    color: theme.palette.common.black
  },
  menu: {
    flexGrow: 1,
  },
  mainImg: {
    position: "relative",
    paddingTop: theme.spacing(20),
    paddingBottom: theme.spacing(3),
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    color: theme.palette.common.white,
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,.3)",
  },
  mainContent: {
    position: "relative"
  },
}))

function App() {

  const classes = useStyles();

 
  return (
    <div >
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

      <main>
        <Paper fixed className={classes.mainImg} style={{backgroundImage: `url(https://source.unsplash.com/random)`}}>
          <Container maxWidth="md">
          <div className={classes.overlay}/>
            <Grid container>
              <Grid item md={6} >
                <div className={classes.mainContent}>
                  <Typography component="p" variant="h5">Analog: The Simplest Productivity System</Typography>
                  <Link color="inherit">Learn more</Link>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Paper>
      </main>
    </div>
    
  );
}

export default App;
