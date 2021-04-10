import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Paper, Link,
  Card, CardMedia, CardContent, CardActionArea } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  darkBg: {
    backgroundColor: "#CED3CA",
    padding: theme.spacing(8),
    borderRadius: 0,
  },
  frame: {
    display: 'flex',
    margin: theme.spacing(2),
  },
  frameDetails: {
    flex: 1,
    padding: theme.spacing(4),
  },
  frameMedia: {
    width: '66%',
  },
}))

function Banner({title, subtitle, linkText, img}) {

  const classes = useStyles();

  return (
    <section>
      <Container maxWidth="md" >
        <Paper className={classes.darkBg} spacing={4}>
          <CardActionArea component="a" href="#">
            <Card className={classes.frame}>
              <div className={classes.frameDetails}>
                <CardContent>
                  <Typography component="h2" variant="h5">
                    {title}
                  </Typography>
                  <Typography variant="subtitle1" paragraph>
                    {subtitle}
                  </Typography >
                  <Link variant="subtitle1"  color="inherit">
                    {linkText}
                  </Link>
                </CardContent>
              </div>
              <CardMedia className={classes.frameMedia} 
                image={img}
                title={'title'}
              />
            </Card>
          </CardActionArea>
        </Paper>
      </Container>
    </section>
  )
}
  
export default Banner;