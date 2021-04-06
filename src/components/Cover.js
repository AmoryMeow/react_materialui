import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Paper, Grid, Link, } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
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

function Cover() {

  const classes = useStyles();

  return (
    <Paper  className={classes.mainImg} style={{backgroundImage: `url(https://source.unsplash.com/random)`}}>
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
  )
}
  
export default Cover;