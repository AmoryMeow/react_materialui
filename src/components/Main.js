import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Cover from './Cover';
import NavBar from './NavBar';
import Cards from './Cards';
import Banner from './Banner';
import Blocks from './Blocks';
import Story from './Story';

const useStyles = makeStyles((theme) => ({

}))

function Main({sections, cards}) {

  const classes = useStyles();

  return (
    <main>
      <Cover />
      <NavBar sections={sections}/>
      <Cards cards={cards}/>
      <Banner
        title={'Final Stock - Up to 50% Off'}
        linkText={'Shop the sale →'}
      />
      <Blocks />
      <Banner
        title={'Gather'}
        subtitle={'The minimal, modular desk organizer that cuts through the clutter'}
        linkText={'Shop Gather →'}
      />
      <Story />
    </main>
  )
}
  
export default Main;