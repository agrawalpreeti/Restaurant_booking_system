import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import './Mycss.css';
import { TabPane, TabContainer } from 'react-bootstrap';
import { fontSize } from '@material-ui/system';
import MyMap from './map'
import {Link, Route, BrowserRouter as Router } from 'react-router-dom';


class Description extends React.Component {
    constructor(props, context) {
      super(props, context);
      this.state = {
        key: 'home',
      };
    }

    reviews = () => {
     let rev=[]; 
     rev = this.props.restaurantInfo.all_reviews.reviews.map((value) =>
     <li style={{marginTop: '2%'}}>
        <h4>
          {value.review.user.name}
        </h4>
        <p>
          {"(" + value.review.review_time_friendly + ")"}
        </p>
        <img  class="profile" alt="Profile pic" src={value.review.user.profile_image}></img>
        <span style={{marginLeft: '60%'}}>{"(" + value.review.rating+"/5)"}</span>
        <span style={{marginLeft: '60%'}} class="rating1">
          <span>☆</span>
        </span>
        <em>
        <p style={(value.review.rating>3) ? {fontSize:'20px', color: 'green'} : ((value.review.rating=3) ? {fontSize:'20px', color: '#C6C000'} : {fontSize:'20px', color: 'red'})}>
          {value.review.rating_text}</p>
          {value.review.review_text}
        </em>
      </li>
            );
     return rev;
    }

    photos = () =>{
      let pics = [];
      pics = this.props.restaurantInfo.photos.map((value)=>
        <a href={value.photo.url} target= '_blank'><img style={{width:'200px', height:'200px', objectFit: 'cover', 
        margin:'20px',border:'solid',borderRadius:'5px'}} src={value.photo.url} alt="restaurant pics"/></a>
      );
      return pics;
    }

    
  
  
    render() {
      return (
        <Tabs
          id="controlled-tab-example"
          activeKey={this.state.key}
          onSelect={key => this.setState({ key })}
        >
          <Tab eventKey="review" title="Reviews"> <br></br>
          <ul>
            {this.reviews()}
          </ul>
          </Tab>
          <Tab eventKey="pictures" title="Pictures">
            {this.photos()}
          </Tab>
<<<<<<< HEAD
          <Tab eventKey="menu" title="Menu"><br></br>
           
=======
          <Tab eventKey="menu" title="Menu" onSelect={<a href={this.props.restaurantInfo.menu_url} target="_blank"></a>}><br></br>
          For menu <a href={this.props.restaurantInfo.menu_url} target="_blank">
 click here.</a>
>>>>>>> 893277608bafeba433d423f40dd9038c822bacf1
          </Tab>
          <Tab eventKey="direction" title="Direction" style={{ height: '100px', width: '750px' }}><br></br>
          <MyMap latitude={this.props.restaurantInfo.location.latitude} longitude={this.props.restaurantInfo.location.longitude}></MyMap>
          </Tab>
        </Tabs>
      );
    }
  }
  
export default Description;