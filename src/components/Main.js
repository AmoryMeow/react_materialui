import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Cover from './Cover';
import NavBar from './NavBar';
import Cards from './Cards';
import Banner from './Banner';
import Blocks from './Blocks';
import Story from './Story';
import finalStock from '../images/Final Stock.jpg';
import gather from '../images/Gather.jpg';

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
        img={finalStock}
      />
      <Blocks />
      <Banner
        title={'Gather'}
        subtitle={'The minimal, modular desk organizer that cuts through the clutter'}
        linkText={'Shop Gather →'} //
        img={gather}
      />
      <Story />
    </main>
  )
}
  
export default Main;