import './App.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { Container, Typography, Button, Box, Tooltip, IconButton, Toolbar, Paper, Grid, Link,
  Card, CardMedia, CardContent } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const sections = [
  { title: 'New Arrivals', url: '#' },
  { title: 'Final Stock', url: '#' },
  { title: 'Best Sellers', url: '#' },
  { title: 'Clothing', url: '#' },
  { title: 'Objects', url: '#' },
  { title: 'Face Masks', url: '#' },
];

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

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
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
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

        <section>
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={4} md={3}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://source.unsplash.com/random"
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Link gutterBottom variant="h7" component="p" color="inherit">
                        Preorder - Analog Wood Card Holder
                      </Link>
                      <Typography  variant="h8" component="p">
                        $59.00
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
        </Container>
        </section>

      </main>
    </div>
    
  );
}

export default App;
