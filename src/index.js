import React from 'react';
import ReactDOM from 'react-dom';
import Main from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import PrimarySearchAppBar from './components/MyNavBar.js';
import {MyModal, SignUp} from './components/Loginmy.js';
import PaperSheet from './components/SidePannel';
import ComplexGrid from './components/Cardmy';

// const routing = (
//     <Router>
//       <div>
//         <ul>
//           <li>
//           <Link to="/"></Link>
//           </li>
          
//         </ul>
//         <Route exact path="/" component={Main} />
//         <Route path="/users" component={Main} />
//         <Route path="/contact" component={Main} />
//       </div>
//     </Router>
//   )



ReactDOM.render(<Main></Main>, document.getElementById('root'));
// ReactDOM.render(<PrimarySearchAppBar />, document.getElementById('root'));
// ReactDOM.render(<SignUp />, document.getElementById('root'));
//ReactDOM.render(<PaperSheet />, document.getElementById('root'));
// ReactDOM.render(<ComplexGrid />, document.getElementById('root'));
