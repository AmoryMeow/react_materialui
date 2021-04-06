import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Toolbar, Link, } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}))

function NavBar({sections}) {

  const classes = useStyles();

  return (
    <section>
      <Container maxWidth="md">
        <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
          {sections.map((section) => (
            <Link
              color="inherit"
              noWrap
              key={section.title}
              variant="body2"
              href={section.url}
              className={classes.toolbarLink}
            >
              {section.title}
            </Link>
          ))}
        </Toolbar>
      </Container>
    </section>
  )
}
  
export default NavBar;