import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './Mycss.css';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },

}));


function DashBoard(props) {
    const classes = useStyles();
  
    return (
        <div>user</div>
    );
      }

export default DashBoard;     