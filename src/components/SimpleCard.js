import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (<div style={{ marginTop: 20, marginRight: 40, padding: 30 }}>
     <Grid container spacing= {120} justify="center">
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Preeti Agrawal
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Student
        </Typography>
        <Typography variant="body2" component="p">
          github
        </Typography>
      </CardContent>
    
    </Card>


<Card className={classes.card}>
<CardContent>
  <Typography variant="h5" component="h2">
    Vibha Sharma
  </Typography>
  <Typography className={classes.pos} color="textSecondary">
    Student
  </Typography>
  <Typography variant="body2" component="p">
    github
  </Typography>
</CardContent>

</Card>
</Grid>
</div>
  );
}
