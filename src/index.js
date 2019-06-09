import React from 'react';
import ReactDOM from 'react-dom';
import Main from './App';
import 'bootstrap/dist/css/bootstrap.css';
import PrimarySearchAppBar from './components/MyNavBar.js'

ReactDOM.render(<Main />, document.getElementById('root'));
ReactDOM.render(<PrimarySearchAppBar />, document.getElementById('root'));
