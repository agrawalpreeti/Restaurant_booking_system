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
import { fontSize } from '@material-ui/system';

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

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
      <Button onClick={handleOpen}>Show More(40)</Button>
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
             <Col sm>
             <ul type='none' className="sidePannelul" >
              <li><a href="#">Afghani</a></li>
              <li><a href="#">American  </a></li>
              <li><a href="#">Asian</a></li>
              <li><a href="#">Bakery</a></li>
              <li><a href="#">Barbecue</a></li>
              <li><a href="#">Biryani</a></li>
              <li><a href="#">Burger</a></li>
              <li><a href="#">Chinese</a></li>
              <li><a href="#">Coffee</a></li>
              <li><a href="#">Continental</a></li>
              <li><a href="#">Desserts</a></li>
          </ul> 
             </Col>
               <Col sm>
               <ul type='none' className="sidePannelul" >
            
              <li><a href="#">European</a></li>
              <li><a href="#">Fast Food</a></li>
              <li><a href="#">Finger Food</a></li>
              <li><a href="#">French</a></li>
              <li><a href="#">Fusion</a></li>
              <li><a href="#">Gujarati</a></li>
              <li><a href="#">Health Food</a></li>
              <li><a href="#">Ice Cream</a></li>
              <li><a href="#">Indian Cuisine</a></li>
              <li><a href="#">Italian</a></li>
              
              <li><a href="#">Japanese</a></li>
           </ul>
               </Col>
               <Col sm> <ul type='none' className="sidePannelul" >
            
              <li><a href="#">Juice</a></li>
              <li><a href="#">Kashmiri</a></li>
              <li><a href="#">Lebanese</a></li>
              <li><a href="#">Lucknowi</a></li>
              <li><a href="#">Mediterranean</a></li>
              <li><a href="#">Mexican</a></li>
              <li><a href="#">Middle Eastern</a></li>
              <li><a href="#">Mithai</a></li>
              <li><a href="#">Modern Indian</a></li>
              <li><a href="#">Mughlai</a></li>
              <li><a href="#">Multi-Cuisine</a></li>
          </ul></Col>
          <Col sm>
            
          <ul type='none' className="sidePannelul" >
        
           
              <li><a href="#">North Indian</a></li>
              <li><a href="#">Pizza</a></li>
              <li><a href="#">Rajasthani</a></li>
              <li><a href="#">Shakes</a></li>
              <li><a href="#">South Indian</a></li>
              <li><a href="#">Street Food </a></li>
              <li><a href="#">Tea</a></li>
              <li><a href="#">Thai</a></li>
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
</Paper>
    </div>
  );
}