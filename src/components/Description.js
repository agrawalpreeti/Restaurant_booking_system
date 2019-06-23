import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import './Mycss.css';
import { TabPane, TabContainer } from 'react-bootstrap';
import { fontSize } from '@material-ui/system';



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
        <span style={{marginRight: '0%'}} class="rating1">
          <span>☆</span>
        </span>
        <p style={{marginRight: '0%'}}>{"(" + value.review.rating+"/5)"}</p>
        <em>
        <p style={(value.review.rating>3) ? {fontSize:'20px', color: 'green'} : ((value.review.rating=3) ? {fontSize:'20px', color: '#C6C000'} : {fontSize:'20px', color: 'red'})}>
          {value.review.rating_text}</p>
          {value.review.review_text}
        </em>
      </li>
            );
     return rev;
    }

  //  phone_numbers = () =>{
  //     let number = this.props.restaurantInfo.phone_numbers.split(',');
  //     let num = number.map((value)=>
  //     <li>{value}</li>
  //     );
  //     return num;
  //   }
  
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
          </Tab>
          <Tab eventKey="menu" title="Menu"><br></br>
          </Tab>
          <Tab eventKey="direction" title="Direction"><br></br>
          </Tab>
        </Tabs>
      );
    }
  }
  
export default Description;