import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Paper, Grid, Link, } from '@material-ui/core';
import storyImg from '../images/Story.jpg';

const useStyles = makeStyles((theme) => ({
  story: {
    position: "relative",
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(10),
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

function Story() {

  const classes = useStyles();

  return (
    <section>
          <Container maxWidth="md" >
            <Paper className={classes.story} style={{backgroundImage: `url(${storyImg})`} } >
              <div className={classes.overlay}/>
              <Grid container justify="center">
                <Grid item md={8} align="center">
                  <div className={classes.mainContent}>
                    <Typography component="p" variant="h5" >
                      A design studio in Downingtown, PA, creating and curating products that combine form & function
                    </Typography>
                    <Link color="inherit">Read Our Story →</Link>
                  </div>
                </Grid>
              </Grid>
            </Paper>
          </Container>
        </section>
  )
}
  
export default Story;