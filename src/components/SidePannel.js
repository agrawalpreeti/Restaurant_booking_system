import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import './Mycss.css';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button'


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },

 
  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    position: 'sticky',
    top: 2 /*position sticky needs a coordinate to stick to*/
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.black, 0.25),
    },
    }
}));

export default function PaperSheet() {
  const classes = useStyles();

  return (
    <div className={classes.paper}>  
          <Paper className="sidePaper">
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          Cuisine
        </Typography>
        <div className={classes.search}>
            <InputBase
              placeholder="Search"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'Search' }}
            />
          </div>
          <ul type='none' className="sidePannelul" > 
              <li><a href="#">Chinese</a></li>
              <li><a href="#">South Indian</a></li>
              <li><a href="#">Italian</a></li>
              <li><a href="#">Show More(80)</a></li>

              <li><a href="#">Afghani</a></li>
              <li><a href="#">African</a></li>
              <li><a href="#">American  </a></li>
              <li><a href="#">Andhra</a></li>
              <li><a href="#">Asian</a></li>
              <li><a href="#">Assamese</a></li>
              <li><a href="#">Bakery and Confectionary</a></li>
              <li><a href="#">Barbecue</a></li>
              <li><a href="#">Belgian</a></li>
              <li><a href="#">Chinese</a></li>
              <li><a href="#">Bengali</a></li>
              <li><a href="#">Bihari</a></li>
              <li><a href="#">Biryani</a></li>
              <li><a href="#">Burger</a></li>
              <li><a href="#">Burmese</a></li>
              <li><a href="#">Chaat</a></li>
              <li><a href="#">Chinese</a></li>
              <li><a href="#">Coffee</a></li>
              <li><a href="#">Continental</a></li>
              <li><a href="#">Desserts</a></li>
              <li><a href="#">Doughnuts</a></li>
              <li><a href="#">Drinks</a></li>
              <li><a href="#">European</a></li>
              <li><a href="#">Fast Food</a></li>
              <li><a href="#">Finger Food</a></li>
              <li><a href="#">French</a></li>
              <li><a href="#">Fusion</a></li>
              <li><a href="#">Goan</a></li>
              <li><a href="#">Greek</a></li>
              <li><a href="#">Gujarati</a></li>
              <li><a href="#">Health Food</a></li>
              <li><a href="#">Hyderabadi</a></li>
              <li><a href="#">Ice Cream</a></li>
              <li><a href="#">Indian Cuisine</a></li>
              <li><a href="#">Iranian</a></li>
              <li><a href="#">Italian</a></li>
              <li><a href="#">Japanese</a></li>
              <li><a href="#">Juice</a></li>
              <li><a href="#">Kashmiri</a></li>
              <li><a href="#">Kerala</a></li>
              <li><a href="#">Korean</a></li>
              <li><a href="#">Lebanese</a></li>
              <li><a href="#">Lucknowi</a></li>
              <li><a href="#">Maharashtrian</a></li>
              <li><a href="#">Malaysian</a></li>
              <li><a href="#">Mediterranean</a></li>
              <li><a href="#">Mexican</a></li>
              <li><a href="#">Middle Eastern</a></li>
              <li><a href="#">Mithai</a></li>
              <li><a href="#">Modern Indian</a></li>
              <li><a href="#">Moroccan</a></li>
              <li><a href="#">Mughlai</a></li>
              <li><a href="#">Multi-Cuisine</a></li>
              <li><a href="#"> Naga</a></li>
              <li><a href="#">Nepalese</a></li>
              <li><a href="#">North Eastern</a></li>
              <li><a href="#">North Indian</a></li>
              <li><a href="#">North West Frontier</a></li>
              <li><a href="#">Oriental</a></li>
              <li><a href="#">Parsi</a></li>
              <li><a href="#">Persian</a></li>
              <li><a href="#">Pizza</a></li>
              <li><a href="#">Portuguese</a></li>
              <li><a href="#">Rajasthani</a></li>
              <li><a href="#">Seafood</a></li>
              <li><a href="#">Shakes</a></li>
              <li><a href="#">Sizzlers</a></li>
              <li><a href="#">South American</a></li>
              <li><a href="#">South Indian</a></li>
              <li><a href="#">Spanish</a></li>
              <li><a href="#">Street Food </a></li>
              <li><a href="#">Sushi</a></li>
              <li><a href="#">Tea</a></li>
              <li><a href="#">Thai</a></li>
              <li><a href="#">Tibetan</a></li>
              <li><a href="#">Turkish</a></li>
              <li><a href="#">Vietnamese</a></li>
              <li><a href="#">Waffle</a></li>
              <li><a href="#"> Western</a></li>
              <li><a href="#">World Cuisine</a></li>
              <li><a href="#">Yogurt</a></li>
              
            </ul>
      </Paper>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          Features
        </Typography>
        <div className={classes.search}>
            <InputBase
              placeholder="Search"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'Search' }}
            />
          </div>
          <ul type='none' className="sidePannelul" >   {/*  For loop by api calling */}
                 <li> <input type="checkbox" value="AC"/>AC</li>
                  <li><input type="checkbox" value="AC"/>Non AC</li>
                 <li> <input type="checkbox" value="AC"/>Parking</li>
                 <li><input type="checkbox" value="AC"/>Card Accepted</li> 
                  </ul>
      </Paper>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          Top Rated
        </Typography>
        
          <ul type='none' className="sidePannelul" > 
       
              <li><a href="#">Top 10 Resturants</a></li>
            
          </ul>
      </Paper>
      </Paper>

    </div>
  );
}