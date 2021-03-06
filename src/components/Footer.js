import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Link, } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
}))

function Footer() {

  const classes = useStyles();

  return (
    <footer className={classes.footer}>
        <Container maxWidth="lg">
          <Typography variant="h6" align="center" gutterBottom>
            UGMONK
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            All images and content may not be used without permission
          </Typography>
          <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
              Ugmonk
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        </Container>
      </footer>
  );
}
  
export default Footer;