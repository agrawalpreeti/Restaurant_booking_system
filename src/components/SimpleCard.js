import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import Card from '@material-ui/core/Card';
//import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';



const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  bigAvatar: {
    margin: 10,
    width: 90,
    height: 90,
    
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    
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
        <Avatar alt="Remy Sharp" src="https://i.ytimg.com/vi/NShJwsoPTzU/maxresdefault.jpg" alignItems="center" className={classes.bigAvatar} />
        </Grid>
     <Typography variant="h5" component="h2"> Preeti Agrawal
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Student
        </Typography>
        <Typography variant="body2" component="p">
          github
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
    Student
  </Typography>
  <Typography variant="body2" component="p">
    github
  </Typography>
     </Paper>
        </Grid>

        <Grid item xs={3}>
          
        </Grid>
      </Grid>
</div>
  );
}
