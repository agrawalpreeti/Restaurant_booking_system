import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import './Mycss.css';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50+ rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}



const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    
  },
  root1: {
    flexGrow: 1,
    display:"inline !important",
    fontSize: "15px",
    align: "center",
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


  paper2: {
    position: 'absolute',
    width: 800,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: 'none',
    display:"inline !important"
  },
}));

export default function PaperSheet() {

  const [open, setOpen] = React.useState(false);
  const [modalStyle] = React.useState(getModalStyle);

  const [open1, setOpen1] = React.useState(false);
  const [modalStyle1] = React.useState(getModalStyle);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleOpen1 = () => {
    setOpen1(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const handleClose1 = () => {
    setOpen1(false);
  };
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
              </ul>
       <div>
      <Button onClick={handleOpen}>Show More(70)</Button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper2}>
          <Typography variant="h6" id="modal-title">
          <div className={classes.root1}>
           <Container>
             <Row> 
             <Col span={{sm:3}}>
             <ul type='none' className="sidePannelul" >
              <li><a href="#">Afghan</a></li>
              <li><a href="#">American  </a></li>
              <li><a href="#">Arabian  </a></li>
              <li><a href="#">Asian</a></li>
              <li><a href="#">Awadhi  </a></li>
              <li><a href="#">BBQ  </a></li>
              <li><a href="#">Bakery</a></li>
              <li><a href="#">Bar Food  </a></li>
              <li><a href="#">Belgian </a></li>
              <li><a href="#">Beverages  </a></li>
              <li><a href="#">Biryani</a></li>
              <li><a href="#">Burger</a></li>
              <li><a href="#">Burmese  </a></li>
              <li><a href="#">Cafe </a></li>
              <li><a href="#">Cafe Food </a></li>
              <li><a href="#">Chinese</a></li>
              <li><a href="#">Coffee</a></li>
              <li><a href="#">Continental</a></li>
              <li><a href="#">Desserts</a></li>
          </ul> 
             </Col>
               <Col span={{sm:3}}>
               <ul type='none' className="sidePannelul" >
            
              <li><a href="#">European</a></li>
              <li><a href="#">Falafel  </a></li>
              <li><a href="#">Fast Food</a></li>
              <li><a href="#">Finger Food</a></li>
              <li><a href="#">Fish and Chips  </a></li>
              <li><a href="#">Frozen Yogurt</a></li>
              <li><a href="#">French</a></li>
              <li><a href="#">Fusion</a></li>
              <li><a href="#">Goan</a></li>
              <li><a href="#">Gujarati</a></li>
              <li><a href="#">Health Food</a></li>
              <li><a href="#">Hyderabadi</a></li>
              <li><a href="#">Ice Cream</a></li>
              <li><a href="#">Indian </a></li>
              <li><a href="#">Iranian</a></li>
              <li><a href="#">Isralien</a></li>
              <li><a href="#">Italian</a></li>
              <li><a href="#">Japanese</a></li>
              <li><a href="#">Juices</a></li>
         
           </ul>
               </Col>
               
          <Col span={{sm:3}}>
            
          <ul type='none' className="sidePannelul" >
          <li><a href="#">Kashmiri</a></li>
         <li><a href="#">Kebab</a></li>
          <li><a href="#">Korean</a></li>
          <li><a href="#">Lebanese</a></li>
          <li><a href="#">Lucknowi</a></li>
          <li><a href="#">Maharashtrian</a></li>
          <li><a href="#">Mediterranean</a></li>
          <li><a href="#">Mexican</a></li>
          <li><a href="#">Mithai</a></li>
          <li><a href="#">Mordern Austalian</a></li>
          <li><a href="#">Mordern Indian</a></li>
          <li><a href="#">Momos</a></li>
          <li><a href="#">Mughlai</a></li>
          <li><a href="#">Multi Cuisine</a></li>
          <li><a href="#">North Indian</a></li>
          <li><a href="#">Paan</a></li>
          <li><a href="#">Pizza</a></li>
          <li><a href="#">Portuguese</a></li>
  
         
               </ul>
               </Col>
           <Col span={{sm:3}}>
                 <ul type='none' className="sidePannelul">
                 <li><a href="#">Rajasthani</a></li>
                 <li><a href="#">Raw Meats</a></li>
              <li><a href="#">Roast Chicken</a></li>
              <li><a href="#">Rolls</a></li>
              <li><a href="#">Salad</a></li>
              <li><a href="#">Sandwich</a></li>
              <li><a href="#">Seafood</a></li>
              <li><a href="#">Shakes</a></li>
              <li><a href="#">Sindhi</a></li>
              <li><a href="#">South Indian</a></li>
              <li><a href="#">Spanish</a></li>
              <li><a href="#">Street Food </a></li>
              <li><a href="#">Sushi</a></li>
              <li><a href="#">Tea</a></li>
              <li><a href="#">Thai</a></li>
              <li><a href="#">Turkish</a></li>
              <li><a href="#">Waffle</a></li>
               </ul>
          </Col>
            </Row>
             </Container>
       </div>
          </Typography>
       </div>
      </Modal>
    </div>

  
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
                 <li> <input type="checkbox" value="AC"/>Air Conditioned</li>
                  <li><input type="checkbox" value="AC"/>Games</li>
                 <li> <input type="checkbox" value="AC"/>Parking</li>
                 <li><input type="checkbox" value="AC"/>Card Accepted</li> 
                  </ul>
          <Button onClick={handleOpen1}>Show More(40)</Button>
          <Modal
           aria-labelledby="simple-modal-title"
           aria-describedby="simple-modal-description"
           open={open1}
           onClose={handleClose1}
           >
           <div style={modalStyle1} className={classes.paper2}>
          <Typography variant="h6" id="modal-title">
          <div className={classes.root1}>
           <Container>
             <Row> 
             <Col sm>
             <ul type='none' className="sidePannelul" >
                  <li> <input type="checkbox" value="AC"/>Air Conditioned</li>
                  <li><input type="checkbox" value="AC"/>Alcohol Free Bar</li>
                 <li> <input type="checkbox" value="AC"/>Candle Light Dinner</li>
                 <li><input type="checkbox" value="AC"/>Cards Accepted</li> 
                 <li> <input type="checkbox" value="AC"/>DJ</li>
                  <li><input type="checkbox" value="AC"/>Dance Floor</li>
                 <li> <input type="checkbox" value="AC"/>Full Bar Available</li>
                 <li><input type="checkbox" value="AC"/>Games</li> 
                 </ul>
                 </Col>
                 <Col sm>
                 <ul type='none' className="sidePannelul" >
                 <li> <input type="checkbox" value="AC"/>Home Delivery</li>
                  <li><input type="checkbox" value="AC"/>Lift</li>
                 <li> <input type="checkbox" value="AC"/>Live Performance</li>
                 <li><input type="checkbox" value="AC"/>Outdoor Seating </li> 
                 <li> <input type="checkbox" value="AC"/>Parking</li>
                  <li><input type="checkbox" value="AC"/>Poolside</li>
                 <li> <input type="checkbox" value="AC"/>Private Dining Available</li>
                 <li><input type="checkbox" value="AC"/>Roof Top</li>
                  </ul>
                 </Col>
                 <Col sm>
                 <ul type='none' className="sidePannelul" >
                 <li><input type="checkbox" value="AC"/>Screening</li> 
                 <li> <input type="checkbox" value="AC"/>Serves Alcohol</li>
                  <li><input type="checkbox" value="AC"/>Serves Wine</li>
                 <li> <input type="checkbox" value="AC"/>Smoking Area</li>
                 <li><input type="checkbox" value="AC"/>Take Away </li> 
                 <li> <input type="checkbox" value="AC"/>Wallet Accepted</li>
                  <li><input type="checkbox" value="AC"/>Wifi</li>
                  </ul>
             </Col>
             </Row>
             </Container>
             </div>
             </Typography>
            
             </div>
             </Modal>
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