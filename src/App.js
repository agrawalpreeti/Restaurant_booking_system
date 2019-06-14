import React from 'react';
import ControlledCarousel from './components/MainPage.js';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import {LogIn, SignUp} from './components/Loginmy.js';
import Home from './components/MyHome';
import CardContent from './components/CardContent';
import axios from 'axios';



class Main extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
    this.state.db = {
      name: [],
    }
  }



  componentDidMount() {
    let url = "https://developers.zomato.com/api/v2.1/search?entity_id=1&entity_type=city&start=20&count=20";
    axios.get(url,
    {
      headers:{
        "Accept": "application/json",
        "user-key": "0c87f14b32add1de8469c4d4cdb376a0 ",
      }
    })
    .then((res)=>{
      let db = this.state.db;
      db.name = res.data.restaurants;
      console.log(res.data.restaurants);
      this.setState({
        db : db,
      });
    });
  }

  render(){
    return(
      <Router>
      <div>
           <Link to="/"></Link>
          <Link to="/login"></Link>
           <Link to="/signup"></Link>
           <Link to="/home"></Link>
           <Link to="/home/card"></Link>

          
         <Route exact path="/" render={()=><ControlledCarousel/>} />
        <Route path="/login" render={()=><LogIn/>} />
        <Route path="/signup" render={()=><SignUp/>} />
          <Route exact path="/home" render={()=><Home/>} /> 
         <Route exact path="/home/card" render={()=><CardContent/>} />        

       </div>
      </Router>     
      );
  }
}

export default Main;






//807b1a5bea43c47e9977489a0c4c84b4
