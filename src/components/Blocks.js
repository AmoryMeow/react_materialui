import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Grid, } from '@material-ui/core';
import Block from './Block';
import shopMens from '../images/Shop Mens.jpg';
import shopObjects from '../images/Shop Objects.jpg';
import shopWomens from '../images/Shop Womens.jpg';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  cardHor: {
    paddingTop: '50%',
  },
  cardVert: {
    paddingTop: '100%',
  },
}))

function Blocks() {

  const classes = useStyles();

  return (
    <section>
      <Container maxWidth="md" className={classes.cardGrid}>
        <Grid container maxWidth="sm" justify="center" spacing={4}>
          <Grid item md={6}>               
            <Typography component="p" variant="h5" align="center">
              Our mission is to create simple, beautiful objects that combine form and function.
            </Typography>
          </Grid>
        </Grid>
              
        <Grid container className={classes.cardGrid} spacing={10} >

          <Block
            blockWidth={6}
            caption={'Shop Mens →'}
            orienatation={'vertical'}
            img={shopMens}
          />

          <Block
            blockWidth={6}
            caption={'Shop Womens →'}
            orienatation={'vertical'}
            img={shopWomens}
          />

          <Block
            blockWidth={12}
            caption={'Shop Objects →'}
            orienatation={'horizontal'}
            img={shopObjects}
          />        

        </Grid>
      </Container>
    </section>
  )
}
  
export default Blocks;