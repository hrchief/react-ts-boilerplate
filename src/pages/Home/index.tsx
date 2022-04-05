import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Crop75 from '@material-ui/icons/Crop75'
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    carouselDescription: {
      position: 'absolute',
      color: 'white',
      top: '50px',
      left: '100px',
      opacity: 1,
      zIndex: 1
    },
    carouselImage: {       
      opacity: '0.3', 
    },
    carouselImageContainer: {  
      backgroundColor: '#024',  
    }
  })
)
const Home: React.FC = () => {
  var items = [
    {
      date: "June 2021",
      title: "New NFT will listing Monday",
      description: "Probably the most random thing you have ever seen!",
      imgsrc: "img(1).png"
    },
    {
      date: "June 2021",
      title: "New NFT will listing Monday",
      description: "Probably the most random thing you have ever seen!",
      imgsrc: "img(1).png"
    }
  ]
  return (
    <>  
    <Carousel
      IndicatorIcon={<Crop75/>}
    >
    {
      items.map( (item, i) => <Item key={i} item={item} /> )
    }
    </Carousel>
    </>
  );
};
function Item(props: any)
{  
  const classes = useStyles();
  return (
    <Paper>
      <div className={classes.carouselDescription}>
        <h3>{props.item.date}</h3>
        <h1>{props.item.title}</h1>
        <p>{props.item.description}</p>
      </div>
      <div className={classes.carouselImageContainer}>
        <div className={classes.carouselImage}>
          <img src={props.item.imgsrc} alt='carousel' />
        </div>
      </div>
    </Paper>
  )
}

export default Home;
