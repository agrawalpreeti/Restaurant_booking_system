import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import SimpleCard from './SimpleCard.js';
import { LogIn, SignUp} from './Loginmy.js';
import Button from 'react-bootstrap/Button.js';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar.js';
import './Mycss.css';
import front_page1 from './Pics/front_page.jpg';
import {Link} from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



class MyVerticallyCenteredModal extends React.Component {

  login_or_signup = (login, signup) =>{
    if((this.props.login === true) && (this.props.signup === false)){
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
      </Modal>);
    }
    else if((this.props.signup === true) && (this.props.login === false)){
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

  render() {
    return (
      <div>
      {this.login_or_signup()}
      </div>)
  }
}




class ControlledCarousel extends React.Component {
    constructor(props, context,...args) {
      super(props, context,...args);


      this.handleSelect = this.handleSelect.bind(this);
      
      this.state = {
        index: 0,
        direction: null,
        modalShow: false,
        login: false, 
        signup : false
      };
    }
  
    handleSelect(selectedIndex, e) {
      // if(selectedIndex === 2 && e === 'prev'){
      //   selectedIndex = 0;
      //   e = "";
      // }
      // else if(selectedIndex === 0 && e === 'next'){
      //   selectedIndex = 2;
      //   e = "";
      // }
      this.setState({
        index: selectedIndex,
        direction: e.direction,
      });
    }

    // handleScroll = (e) => {
    //   console.log("yes")
    //   console.log(e.detail);
    // }

  //   componentDidMount() {
  //     window.addEventListener('scroll', this.handleScroll,true);
  // }
  
  // componentWillUnmount() {
  //     window.removeEventListener('scroll', this.handleScroll,true);
  // }

  
    render() {
      const { index, direction } = this.state;
      let modalClose = () => this.setState({ modalShow: false });  
      return (
        
        
        <div>
          <img
              className="d-block main_page"
              src={front_page1}
              alt="First slide"
            />
      
        <Carousel
          activeIndex={index}
          direction={direction}
          controls= {false}
          interval={null}
          onSelect={this.handleSelect}
          wrap={false}
          // onScroll={(e)=>this.handleScroll(e)}
        >
        
        
          <Carousel.Item>
            {/* <img
              className="d-block main_page"
              src={front_page1}
              alt="First slide"
            /> */}
            <Carousel.Caption className="loginSignupAlign">
                   <Button variant="info" onClick={() => this.setState({ modalShow: true, login: true, signup: false })} className="loginAlign">Log in</Button>
                    <Button variant="info" onClick={() => this.setState({ modalShow: true, login: false, signup: true })}>Sign Up</Button>
                  <MyVerticallyCenteredModal
                    show={this.state.modalShow}
                    onHide={modalClose}
                    login={this.state.login}
                    signup={this.state.signup}
                  />
            </Carousel.Caption>
            <Carousel.Caption className="centerAlign">
             <h2>Plan Your Meal</h2>
              <p>Book your table beforehand to avoid uneccecary wait.</p>
            
               
              <ButtonToolbar>
              <Container>
                <Row>
                  <Col md={{ offset: 4,  span: 2}}>
                    <Link to="/home"><Button variant="primary">Explore</Button></Link>
                  </Col>
                  <Col md={{ span: 2}}>
                  <Button variant="danger" onClick={() => this.setState({ modalShow: true, login: false, signup: true })}>Get Started</Button>
                    <MyVerticallyCenteredModal
                    show={this.state.modalShow}
                    onHide={modalClose}
                    login={this.state.login}
                    signup={this.state.signup}
                  />
                  </Col>
                </Row>
              </Container>
                
              </ButtonToolbar>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          {/* <img
              className="d-block main_page"
              src={front_page1}
              alt="Second slide"
            /> */}
  
            <Carousel.Caption className="centerAlign">
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
            {/* <img
              className="d-block main_page"
              src={front_page1}
              alt="Third slide"
            />
   */}
            <Carousel.Caption className="centerAlign">
              <SimpleCard />
            </Carousel.Caption>
            <Carousel.Caption className="centerAlign">
            <footer>
                <a href="#" className="footerLinkColor">Privacy</a><br></br>
                <a href="#" className="footerLinkColor">Terms</a><br></br>
                <a href="#" className="footerLinkColor">Contact</a><br></br><br></br>
               <span>Copyright 2016, Original Trombones</span>
              
              
              </footer>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>
    
      );
    }
  }
    
  export default ControlledCarousel;