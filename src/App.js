import './App.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

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
}))

function App() {

  const classes = useStyles();

  return (
    <div >
      
      <Header/>
    
      <Main sections={sections} cards={cards}/>
      
      <Footer />

    </div>
    
  );
}

export default App;
