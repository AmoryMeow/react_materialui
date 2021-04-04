import './App.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { Container, Typography, Button, Box, Tooltip, IconButton, Toolbar, Paper, Grid, Link,
  Card, CardMedia, CardContent, CardActionArea } from '@material-ui/core';
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
  cardHor: {
    paddingTop: '50%',
  },
  cardVert: {
    paddingTop: '100%',
  },
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
  story: {
    position: "relative",
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(10),
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    color: theme.palette.common.white,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
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
          <Container className={classes.cardGrid} maxWidth="md" >
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
                      <Link gutterBottom variant="subtitle1" component="p" color="inherit">
                        Preorder - Analog Wood Card Holder
                      </Link>
                      <Typography  variant="subtitle2" component="p">
                        $59.00
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
        </Container>
        </section>

        <section>
          <Container maxWidth="md" >
            <Paper className={classes.darkBg} spacing={4}>
              <CardActionArea component="a" href="#">
                <Card className={classes.frame}>
                  <div className={classes.frameDetails}>
                    <CardContent>
                      <Typography component="h2" variant="h5">
                        Final Stock - Up to 50% Off
                      </Typography>
                      <Link variant="subtitle1"  color="inherit">
                        Shop the sale →
                      </Link>
                    </CardContent>
                  </div>
                  <CardMedia className={classes.frameMedia} 
                    image={'https://source.unsplash.com/random'} 
                    title={'title'}
                  />
                </Card>
              </CardActionArea>
            </Paper>
          </Container>
        </section>

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
              <Grid item xs={6}>
                <Card variant="elevation" elevation={0}>
                  <CardMedia
                    className={classes.cardVert}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Link gutterBottom variant="subtitle1" component="p" color="inherit">
                      Shop Mens →
                    </Link>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card variant="elevation" elevation={0}>
                  <CardMedia
                    className={classes.cardVert}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Link gutterBottom variant="subtitle1" component="p" color="inherit">
                      Shop Womens →
                    </Link>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card variant="elevation" elevation={0}>
                  <CardMedia
                    className={classes.cardHor}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Link gutterBottom variant="subtitle1" component="p" color="inherit">
                      Shop Objects →
                    </Link>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </section>

        <section>
          <Container maxWidth="md" >
            <Paper className={classes.darkBg} >
              <CardActionArea component="a" href="#">
                <Card className={classes.frame}>
                  <div className={classes.frameDetails}>
                    <CardContent>
                      <Typography component="h2" variant="h5">
                        Gather
                      </Typography>
                      <Typography variant="subtitle1" paragraph>
                        The minimal, modular desk organizer that cuts through the clutter
                      </Typography >
                      <Link variant="subtitle1"  color="inherit">
                        Shop Gather →
                      </Link>
                    </CardContent>
                  </div>
                  <CardMedia className={classes.frameMedia} 
                    image={'https://source.unsplash.com/random'} 
                    title={'title'}
                  />
                </Card>
              </CardActionArea>
            </Paper>
          </Container>
        </section>

        <section>
          <Container maxWidth="md" >
            <Paper className={classes.story} style={{backgroundImage: `url(https://source.unsplash.com/random)`}} >
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
      </main>

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

    </div>
    

  );
}

export default App;
