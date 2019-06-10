import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import Card from '@material-ui/core/Card';
//import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import preeti from './Pics/preeti.jpg';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';



const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 275,
    width: 275
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  bigAvatar: {
    margin: 10,
    width: 120,
    height: 120,
    
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    width: 230,
    
  },
 
}));

export default function SimpleCard() {
  const classes = useStyles();
 return ( <div className={classes.root}>
<Grid container spacing={3}>
<Grid item xs={3}>
    
        </Grid>
   
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          <Grid container justify="center" alignItems="center">
        <Avatar alt="Pofile pic" src={preeti} className={classes.bigAvatar} />
        </Grid>
     <Typography variant="h5" component="h2"> Preeti Agrawal
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Student at JECRC
        </Typography>
        
        <Typography variant="body2" component="p">
          Github: <Link to ="https://github.com/agrawalpreeti">Open this link</Link><br></br>
          Linkedln: <Link to ="https://www.linkedin.com/in/preeti-agrawal-684619157/">Open this link</Link><br/>
          Facebook: <Link to ="https://www.facebook.com/preeti.agrawal.5030">Open this link</Link>
        </Typography>
    </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper className={classes.paper}>
          
          <Grid container justify="center" alignItems="center">
 <Avatar alt="Remy Sharp" src="https://media.licdn.com/dms/image/C5103AQGM_1_ZsEYYUw/profile-displayphoto-shrink_200_200/0?e=1565827200&v=beta&t=L5_IlJ-JpCKd3n9bdyUD2drAmJVsF3h28JqTMzOnEKM" className={classes.bigAvatar} />
 </Grid>
 <Typography variant="h5" component="h2">
    Vibha Sharma
  </Typography>
  <Typography className={classes.pos} color="textSecondary">
  Student at JECRC
  </Typography>
    <Typography variant="body2" component="p">
   Github: <Link to ="https://github.com/Vibs00">Open this link</Link><br></br>
   Linkedln: <Link to ="https://www.linkedin.com/in/Vibha-sharma-b7b837144/">Open this link</Link><br></br>
   Facebook: <Link to ="https://www.facebook.com/profile.php?id=100012430004801">Open this link</Link>
  </Typography>
     </Paper>
        </Grid>

        <Grid item xs={3}>
          
        </Grid>
      </Grid>

      <footer>
    <ul type="none" className="ulfooter">
      <li><a href="#">Privacy</a></li>
      <li><a href="#">Terms</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
    <span>Copyright 2016, Original Trombones</span>
  </footer>


</div>
  );
}
