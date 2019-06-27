import React from 'react';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },

}));


function DashBoard(props) {
    const classes = useStyles();
  
    return (
        <div  LikedCardPrint={()=>this.props.LikedCardPrint()} >
        </div>
    );
 }

export default DashBoard;     