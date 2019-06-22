import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import './Mycss.css';



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 800,
    width: '800px',
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '120%',
   // width:'100%',
    Height: '100%',
    height:'100%',
    borderRadius:'5%',
  },
  card: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 800,
    width: '800px',
    height: '150px'
    // textDecoration: 'none',
    // color: 'yellow'
  },
  // card.hover: {
  //   zoom : 10,
  // }
}));

function Cardmy(props) {
  const classes = useStyles();

  return (
    <Card  className={classes.card}>
    <div className={classes.root}>
          <CardActionArea>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="Restaurant Image" src={props.restaurants[props.index].restaurant.featured_image} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {props.restaurants[props.index].restaurant.name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {props.restaurants[props.index].restaurant.location.address}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {"Cuisine: "}
                  {props.restaurants[props.index].restaurant.cuisines}<br></br>
              
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                {props.restaurants[props.index].restaurant.timings}<br></br>
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">
              {"(" + props.restaurants[props.index].restaurant.user_rating.aggregate_rating + "/5)"}
              <div class="rating1">
                <span>☆</span>
              </div>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        </CardActionArea>
    </div>
    
     </Card>

  );
}

export default Cardmy;

//                <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
