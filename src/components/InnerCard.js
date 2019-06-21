import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import demo from './Pics/demo.jpg';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



const useStyles = makeStyles(theme => ({
  card: {
    // maxWidth: 550,
    width: '90%',
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(3),
  },
  media: {
    paddingTop: '56.25%', // 16:9
  },
  title1: {
    fontSize: 14,
  },
  avatar: {
    backgroundColor: red[500],
  },
  buttonShift: {
    paddingLeft: '10%', // 16:9
  }
}));

function InnerCard(props) {
  const classes = useStyles();


  return (
    <Card className={classes.card}>
     <CardContent>
        <Typography  className={classes.title1}gutterBottom variant="h5" component="h2" title={props.restaurantInfo.name}>
        </Typography>
         <Container>
        <Row>
        <Col md={{span: 5}}>
        <CardMedia
        className={classes.media}
        image={props.restaurantInfo.thumb}
      
      />
      </Col>
    <Col md={{ span: 6 }}>
        <Typography color="textSecondary">{props.restaurantInfo.location.address}</Typography>
             <Typography variant="h5" component="h2">   
              {"₹"}
              {props.restaurantInfo.average_cost_for_two}
              {" for 2(approx)"}</Typography>

             <Typography variant="body2" component="p">{props.restaurantInfo.cuisines}</Typography>
             <Typography variant="body2" component="p">{props.restaurantInfo.phone_numbers}</Typography>
             <Typography variant="h5" component="h2">
              {"(" + props.restaurantInfo.user_rating.aggregate_rating + ")"}
              <div class="rating1">
                <span>☆</span>
              </div>
              </Typography>
            </Col>
             </Row>
  </Container>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="Share">
          <ShareIcon />
        </IconButton>
    </CardActions>
     </Card>
  );
}

export default InnerCard;