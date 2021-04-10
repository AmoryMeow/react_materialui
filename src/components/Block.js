import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Link, Card, CardMedia, CardContent, } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  horizontal: {
    paddingTop: '50%',
  },
  vertical: {
    paddingTop: '130%',
  },
  cardContent: {
    flexGrow: 1,
  },
}))

function Block({blockWidth, caption, orienatation, img}) {
    
  const classes = useStyles();
  
  return (
    <Grid item xs={blockWidth}>
      <Card variant="elevation" elevation={0}>
        <CardMedia
          className={classes[orienatation]}
          image={img}
          title="Image title"
        />
        <CardContent className={classes.cardContent}>
          <Link gutterBottom variant="subtitle1" component="p" color="inherit">
            {caption}
          </Link>
        </CardContent>
      </Card>
    </Grid>
  )
}
  
export default Block;