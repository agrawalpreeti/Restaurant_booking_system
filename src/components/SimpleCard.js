import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import preeti from './Pics/preeti.jpg';
import './Mycss.css';



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
          <a href="https://github.com/agrawalpreeti" target="blank" className="footerLinkColor">Github</a><br></br>
          <a href="https://www.linkedin.com/in/preeti-agrawal-684619157/" target="blank" className="footerLinkColor">Linkedln</a><br/>
          <a href="https://www.facebook.com/preeti.agrawal.5030" target="blank" className="footerLinkColor">Facebook</a>
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
   <a href="https://github.com/Vibs00" target="blank" className="footerLinkColor">Github</a><br></br>
   <a href="https://www.linkedin.com/in/Vibha-sharma-b7b837144/" target="blank" className="footerLinkColor">Linkedln</a><br></br>
   <a href="https://www.facebook.com/profile.php?id=100012430004801" target="blank" className="footerLinkColor">Facebook</a>
  </Typography>
     </Paper>
        </Grid>

        <Grid item xs={3}>
          
        </Grid>
      </Grid>

    


</div>
  );
}
