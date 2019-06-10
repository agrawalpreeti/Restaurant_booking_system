import React from 'react';
import ReactDOM from 'react-dom';
import Main from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import PrimarySearchAppBar from './components/MyNavBar.js';
import {LogIn, SignUp} from './components/Loginmy.js';
import PaperSheet from './components/SidePannel';
import ComplexGrid from './components/Cardmy';
import Home from './components/MyHome';

const routing = (
    <Router>
      <div>
          <Link to="/"></Link>
          <Link to="/login"></Link>
          <Link to="/signup"></Link>
          <Link to="/home"></Link>
          
        <Route exact path="/" component={Main} />
        <Route path="/login" component={LogIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/home" component={Home} />        
      </div>
    </Router>
  )



ReactDOM.render(routing, document.getElementById('root'));
// ReactDOM.render(<PrimarySearchAppBar />, document.getElementById('root'));
// ReactDOM.render(<SignUp />, document.getElementById('root'));
//ReactDOM.render(<PaperSheet />, document.getElementById('root'));
// ReactDOM.render(<ComplexGrid />, document.getElementById('root'));
