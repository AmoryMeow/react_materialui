import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, } from '@material-ui/core';
import CardItem from './Card';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  
}))

function Cards({cards}) {

  const classes = useStyles();

  return (
    <section>
      <Container className={classes.cardGrid} maxWidth="md" >
        <Grid container spacing={4}>
          {cards.map((card) => (
            <CardItem
              key={card.id}
              card={card}
            />
          ))}
        </Grid>
      </Container>
    </section>
  )
}
  
export default Cards;