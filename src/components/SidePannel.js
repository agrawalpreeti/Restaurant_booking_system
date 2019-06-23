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
    display:"flex !important",
    fontSize: "13px",
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
    alignItems: 'center',
    position: 'absolute',
    display: 'flex',
    width: '1000px',
    // height: '200px',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: 'none',
    // display:"inline !important"
  },
}));

export default function PaperSheet(props) {

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

  let flag = false;

  function cuisinModel(){
    let parent = [];
    let child = [];
    let len = (props.cuisinPrint()).length;
    for(let i=0; i<len; i+=10){
      if((i+10)<=len)
      {
          for(let j=0; j<10; ++j){
          child.push(<li style={{whiteSpace: 'nowrap'}}>{(props.cuisinPrint())[i+j]}</li>);
        }
      }
      else
      {
          for(let j=0; j<=(len-i); ++j){
          child.push(<li style={{whiteSpace: 'nowrap'}}>{(props.cuisinPrint())[i+j]}</li>);
        }
      }
        parent.push(
          <Col sm>
            <ul type='none' className="sidePannelul">
              {child}   
            </ul>
          </Col> 
        );
        child = [];
    }
    return parent;
  }

//   function searchCuisinChange(event){
//     console.log(event.target.value);
//     let i = event.target.value;
//     if(i.trim() === ""){
//       flag = false;
//     }
//     let arr = [];  

//     if(i.trim() !== "")
//     {
//       flag = true;
//         this.props.cuisines.map((value, index)=>{
//             let name = value.cuisine.cuisine_name.split(' ');
//             name.map((val)=>{
//                 if(val.toUpperCase() === i.toUpperCase()){
//                     arr.push((props.cuisinPrint())[index]);
//                 }
//             });
//             })
//     }
//     return arr;
//  }


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
              // onChange={(event)=>searchCuisinChange()}
              inputProps={{ 'aria-label': 'Search' }}
            />
          </div>
          <ul type='none' className="sidePannelul" > 
              {(props.cuisinPrint())[0]}
              {(props.cuisinPrint())[1]}
              {(props.cuisinPrint())[2]}
          </ul>
       <div>
      <Button onClick={handleOpen}>{"Show More(" + ((props.cuisinPrint()).length - 3) + ")"}</Button>
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
               {/* {flag ? <ul type='none' className="sidePannelul">{searchCuisinChange()}</ul> : cuisinModel()} */}
            {cuisinModel()}
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
                 <li> <input type="checkbox" value="AC"/>AC</li>
                  <li><input type="checkbox" value="AC"/>Non AC</li>
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