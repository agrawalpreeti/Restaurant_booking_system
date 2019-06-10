import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import MyNavBars from './MyNavBar';
import PaperSheet from './SidePannel';



class Home extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
            <MyNavBars></MyNavBars>
            <PaperSheet></PaperSheet>
        </div>
        );
    }
}

export default Home;