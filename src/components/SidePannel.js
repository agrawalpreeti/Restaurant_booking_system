import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import './Mycss.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { CardActionArea } from '@material-ui/core';
import Card from '@material-ui/core/Card';
// import { yellow } from '@material-ui/core/colors';


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    backgroundColor: '#EAECEE',
    // filter: 'brightness(85%)'
    // color: '#F1C40F'
  },

 
  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    // backgroundColor: fade(theme.palette.common.black, 0.15),
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
    // <Container>
    // <Row>
    // <Col md={{ offset: 9, span: 3, offset: 0 }}>
    <div className={classes.paper}>  
          <Paper className="sidePaper">
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          Cuisine
        </Typography>
        <div className={classes.search}>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'Search' }}
            />
          </div>
          <ul type='none' className="sidePannelul" > 
          {/*  For loop by api calling */}
              <li><a href="#">Chinese</a></li>
              <li><a href="#">South Indian</a></li>
              <li><a href="#">Italian</a></li>
          </ul>
      </Paper>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          Features
        </Typography>
        <div className={classes.search}>
            <InputBase
              placeholder="Search…"
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
        <div className={classes.search}>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'Search' }}
            />
          </div>
          <ul type='none' className="sidePannelul" > 
       
              <li><a href="#">Top 10</a></li>
              <li><a href="#">Top 20</a></li>
              <li><a href="#">Top 30</a></li>
          </ul>
      </Paper>
      </Paper>

    </div>
    // </Col>
    //     </Row>
    //     </Container>
  );
}