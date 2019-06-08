import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button.js';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar.js';
import SimpleCard from './SimpleCard.js';
import './My.css';
import front_page from './Pics/front_page.jpg';
import light_background from './Pics/light_background.jpg';

class ControlledCarousel extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleSelect = this.handleSelect.bind(this);
  
      this.state = {
        index: 0,
        direction: null,
      };
    }
  
    handleSelect(selectedIndex, e) {
      if(selectedIndex === 2 && e === 'prev'){
        selectedIndex = 0;
        e = "";
      }
      else if(selectedIndex === 0 && e === 'next'){
        selectedIndex = 2;
        e = "";
      }
      this.setState({
        index: selectedIndex,
        direction: e.direction,
      });
      // console.log(selectedIndex,e);
    }
  
    render() {
      const { index, direction } = this.state;
  
      return (
        <Carousel
          activeIndex={index}
          direction={direction}
          controls= {false}
          interval={null}
          // bsPrefix={'my'}
          // wrap = {false}
          // indicators={this.props.indicators}
          onSelect={this.handleSelect}

        >
          <Carousel.Item>
            {/* {console.log(this.props)}; */}
            <img
              className="d-block main_page"
              src={front_page}
              alt="First slide"
            />
            <Carousel.Caption>
              <h2>Plan Your Meal</h2>
              <p>Book your table beforehand to avoid uneccecary wait.</p>
              <ButtonToolbar>
                <Button variant="primary">Explore</Button>
                <Button variant="danger">Get Started</Button>
              </ButtonToolbar>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img
              className="d-block main_page"
              src={light_background}
              alt="First slide"
            />
  
            <Carousel.Caption>
 <h3>Just Exploring</h3>
 <p> Though we appreciate all the great blogging contributions to Zomato, not all blog posts are eligible for inclusion 
      on the site. Below are a few types of posts which fall into this category.</p>
<ul>
<li>Posts without specific content about the restaurant(s), such as a list of places visited on vacation, without any
details about the restaurants.</li>
<li>Posts about a one-time or private event that won't be relevant to anyone beyond the date of the event itself.</li>
<li>Posts not based on personal experience, such as links/summaries of newspaper articles or blog posts.</li>
<li>Round-up posts that link to previous reviews, such as 'My Top Ten of 2015'.</li>
<li>Posts with excessive Spoonbacks. Only one Spoonback can be added per blog post and linked back to a single
 restaurant page. If you have mentioned multiple restaurants in your blog post, we would encourage you to write reviews
  for the others.</li>
           </ul>


           <h3>Want To Book</h3>
 <p> Though we appreciate all the great blogging contributions to Zomato, not all blog posts are eligible for inclusion 
      on the site. Below are a few types of posts which fall into this category.</p>
<ul>
<li>Posts without specific content about the restaurant(s), such as a list of places visited on vacation, without any
details about the restaurants.</li>
<li>Posts about a one-time or private event that won't be relevant to anyone beyond the date of the event itself.</li>
<li>Posts not based on personal experience, such as links/summaries of newspaper articles or blog posts.</li>
<li>Round-up posts that link to previous reviews, such as 'My Top Ten of 2015'.</li>
<li>Posts with excessive Spoonbacks. Only one Spoonback can be added per blog post and linked back to a single
 restaurant page. If you have mentioned multiple restaurants in your blog post, we would encourage you to write reviews
  for the others.</li>
           </ul>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block main_page"
              src={light_background}
              alt="Third slide"
            />
  
            <Carousel.Caption>
              <SimpleCard />
     </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
    }
  }
    
  export default ControlledCarousel;