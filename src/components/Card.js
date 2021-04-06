import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Link, Card, CardMedia, CardContent, } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '120%',
  },
  cardContent: {
    flexGrow: 1,
  },
}))

function CardItem({card, title, subtitle}) {

  const classes = useStyles();

  return (
    <Grid item xs={12} sm={4} md={3}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image="https://source.unsplash.com/random"
          title="Image title"
        />
        <CardContent className={classes.cardContent}>
          <Link gutterBottom variant="subtitle1" component="p" color="inherit">
            {title}
          </Link>
          <Typography  variant="subtitle2" component="p">
            {subtitle}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}
  
export default CardItem;