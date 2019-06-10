import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import SimpleCard from './SimpleCard.js';
 import { LogIn, SignUp} from './Loginmy.js';
import Button from 'react-bootstrap/Button.js';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar.js';
import './Mycss.css';
import front_page from './Pics/front_page.jpg';
import light_background from './Pics/light_background.jpg';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class MyVerticallyCenteredModal extends React.Component {
  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        
        <Modal.Body>
          <LogIn></LogIn>
                  </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}


class MyVerticallyCenteredModal1 extends React.Component {
  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        
        <Modal.Body>
          <SignUp></SignUp>
                  </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}




class ControlledCarousel extends React.Component {
    constructor(props, context,...args) {
      super(props, context,...args);


      this.handleSelect = this.handleSelect.bind(this);
      
      this.state = {
        index: 0,
        direction: null,
        modalShowl: false,
        modalShows: false,
        login: false, 

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

    // login = () =>{
    //   this.setState({
    //     login: true
    //   })
    //   return <LogIn></LogIn>;
    // }
  
    render() {
      const { index, direction } = this.state;
      let modalClosel = () => this.setState({ modalShowl: false });
      let modalCloses = () => this.setState({ modalShows: false });
  
      return (
        <div>
    
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
            {/* <div> */}

            <Carousel.Caption className="centerAlign">
             <h2>Plan Your Meal</h2>
              <p>Book your table beforehand to avoid uneccecary wait.</p>
              {/* <LogIn></LogIn> */}
            
               
              <ButtonToolbar>
              <Container>
                <Row>
                  <Col md={{ offset: 4,  span: 2}}>
                    <Link to="/home"><Button variant="primary">Explore</Button></Link>
                  </Col>
                  <Col md={{ span: 2}}>
                  <Button variant="danger" onClick={() => this.setState({ modalShows: true })}>Get Started</Button>
                    <MyVerticallyCenteredModal1
                    show={this.state.modalShows}
                    onHide={modalCloses}
                  />
                  </Col>
                </Row>
              </Container>
                
              </ButtonToolbar>
            </Carousel.Caption>
            <Carousel.Caption className="loginAlign">
            <ButtonToolbar>
            <Container>
              <Row>
                <Col md={{span: 4}}><Button variant="info" onClick={() => this.setState({ modalShowl: true })}>LogIn</Button>
              <MyVerticallyCenteredModal
                show={this.state.modalShowl}
                onHide={modalClosel}
              /></Col>
                <Col md={{ span: 4}}><Button variant="info" onClick={() => this.setState({ modalShows: true })}>SignUp</Button>
              <MyVerticallyCenteredModal1
                show={this.state.modalShows}
                onHide={modalCloses}
              />
              </Col>
              </Row>
            </Container>
              
              {/* <Link to="/signup"><Button variant="info">SignUp</Button></Link> */}
                
              </ButtonToolbar>
            </Carousel.Caption>
           {/* </div> */}
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
        </div>
      );
    }
  }
    
  export default ControlledCarousel;