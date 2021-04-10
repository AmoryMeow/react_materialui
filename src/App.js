import './App.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

import { cards, sections } from './utils/data';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}))

function App() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <Header/>
    
      <Main sections={sections} cards={cards}/>
      
      <Footer />

    </div>
    
  );
}

export default App;
