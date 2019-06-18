import React from 'react';
import ReactDOM from 'react-dom';
import Main from './App';
import 'bootstrap/dist/css/bootstrap.css';
// import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
// import {LogIn, SignUp} from './components/Loginmy.js';
// import Home from './components/MyHome';
// import CardContent from './components/CardContent';

//  const routing = (
//      <Router>
//        <div>
//            <Link to="/"></Link>
//            <Link to="/login"></Link>
//            <Link to="/signup"></Link>
//           <Link to="/home"></Link>
//            <Link to="/home/card"></Link>

          
//          <Route exact path="/" component={Main} />
//         <Route path="/login" component={LogIn} />
//          <Route path="/signup" component={SignUp} />
//          <Route exact path="/home" component={Home} /> 
//          <Route exact path="/home/card" component={CardContent} />        

//        </div>
//      </Router>
//  )



 ReactDOM.render(<Main/>, document.getElementById('root'));
