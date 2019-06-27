import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import Collapse from '@material-ui/core/Collapse';

import Badge from 'react-bootstrap/Badge'

import './Mycss.css';




const useStyles = makeStyles(theme => ({
  card: {
    // maxWidth: 550,
    width: '90%',
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(3),
  },
  media: {
    paddingTop: '56.25%', // 16:9
    // width: '50%',
    // top: '50%'    
  },
  title1: {
    fontSize: 20,
  },
  avatar: {
    backgroundColor: red[500],
  },
  buttonShift: {
    paddingLeft: '10%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

function InnerCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  function splitName(){
    console.log(props.restaurantInfo)
    let name = props.restaurantInfo.name.split(',');
    return name[0];
  }

  function cuisines(){
    let cuisine = props.restaurantInfo.cuisines.split(',');
    let name = cuisine.map((value)=>
    <li>{value}</li>
    );
    return name;
  }

  function phone_numbers(){
    let number = props.restaurantInfo.phone_numbers.split(',');
    let num = number.map((value)=>
    <li>{value}</li>
    );
    return num;
  }
  
  
  
  return (
    <Card className={classes.card}>
     <CardContent>
        {/* <Typography  className={classes.title1} gutterBottom variant="h3" component="h2"> */}
        <h3 className="bookMargin">
        {splitName()}
      </h3>
        {/* </Typography> */}
         <Container>
        <Row>
        <Col md={{span: 5}}>
        <CardMedia
        className={classes.media}
        image={props.restaurantInfo.thumb}
      
      />
      </Col>
    <Col md={{ span: 5 }}>
        <Typography color="textSecondary">{props.restaurantInfo.location.address}</Typography>
             <Typography variant="h5" component="h2" style={{color:'green'}}>   
              {"₹"}
              {props.restaurantInfo.average_cost_for_two}
              {" for 2(approx)"}
              </Typography>

        </Col>
        <Col md={{ span: 1 }}>
             {/* <Typography variant="h5" component="h2"> */}
             <h5>
             {"(" + props.restaurantInfo.user_rating.aggregate_rating + ")"}
              <span class="rating1">
                <span>☆</span>
              </span>
              </h5>
              {/* </Typography> */}
            </Col>
             </Row>
  </Container>
      </CardContent>
      <CardActions disableSpacing>

      
        <IconButton aria-label="Add to favorites">
          {props.fav}
        
        </IconButton>
        <IconButton aria-label="Share">

          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <h5 style={{color: '#E3CF06'}}>Cuisines:</h5>
          {/* <Typography variant="body2" component="p"> */}
          <ul>
          {cuisines()}
          </ul>
          {/* </Typography> */}
          <h5 style={{color: '#E3CF06'}}>Phone Number(s):</h5>
          <ul>
          {phone_numbers()}
        </ul>
        </CardContent>
      </Collapse>
    </Card>
  );
}
export default InnerCard;