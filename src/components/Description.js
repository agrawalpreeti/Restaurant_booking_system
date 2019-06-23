import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import './Mycss.css';
import { TabPane, TabContainer } from 'react-bootstrap';



class Description extends React.Component {
    constructor(props, context) {
      super(props, context);
      this.state = {
        key: 'home',
      };
    }
    // reviews = () => {
    //  let rev=[]; 
    //  rev= this.props.restaurantInfo.all_reviews.reviews.map((value, index) =>
    //  <li>{value}</li>
    //  );
    //  return rev
    // }

   phone_numbers = () =>{
      let number = this.props.restaurantInfo.phone_numbers.split(',');
      let num = number.map((value)=>
      <li>{value}</li>
      );
      return num;
    }
  
    render() {
      return (
        <Tabs
          id="controlled-tab-example"
          activeKey={this.state.key}
          onSelect={key => this.setState({ key })}
        >
          <Tab eventKey="review" title="Review"> <br></br>
          <b> {this.props.restaurantInfo.all_reviews.reviews[0].review.user.name}</b><br></br>

          <img  class="profile" alt="Profile pic" src={this.props.restaurantInfo.all_reviews.reviews[0].review.user.profile_image} ></img><br></br>
          {"Rating : "}
         {this.props.restaurantInfo.all_reviews.reviews[0].review.rating+"/5"}
        <strong> {this.props.restaurantInfo.all_reviews.reviews[0].review.rating_text}</strong>
         <br></br>
          <i>{this.props.restaurantInfo.all_reviews.reviews[0].review.review_text}</i><br></br>
           {this.props.restaurantInfo.all_reviews.reviews[0].review.review_time_friendly}
          
          </Tab>
          <Tab eventKey="profile" title="Profile">
          </Tab>
          <Tab eventKey="contact" title="Contact"><br></br>
          {this.phone_numbers()}
          </Tab>
        </Tabs>
      );
    }
  }
  
export default Description;