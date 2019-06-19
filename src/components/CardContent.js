import React from 'react';
import MyNavBar from './MyNavBar';
import InnerCard from './InnerCard';
import MyCalendar from './MyCalendar';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './Mycss.css';
import Description from './Description';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';




class MyVerticallyCenteredModal extends React.Component {
    render() {
      return (
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter" className="bookMargin">
              Book a table at Kake Di Hatti
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Row>
                <Col>
                  <h5>Total Seats Available: </h5>
                </Col>
                <Col>
                  {/* <input type="input"></input> */}
                  <TextField
                    id="outlined-number"
                    label="Available"
                    // value={values.age}
                    // onChange={handleChange('age')}
                    type="number"
                    className="textField"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    margin="normal"
                    variant="outlined"
                  />
                </Col>
              </Row>
              <Row>
                <Col md={{span:6}}>
                  <h5>Number of tables to book: </h5>
                </Col>
                <Col>
                  {/* <input type="number" name="quantity" min="1" max="5"></input> */}
                  <TextField
                    id="outlined-dense-multiline"
                    label="Required"
                    // className={clsx(classes.textField, classes.dense)}
                    // value={values.age}
                    // onChange={handleChange('age')}
                    type="number"
                    className="textField"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    margin="normal"
                    variant="outlined"
                  />
                </Col>
                {/* <Col>
                  <Button variant="outline-success">+</Button>
                </Col>
                <Col>
                  <Button variant="outline-danger">-</Button>
                </Col> */}
              </Row>
              <Row>
                <Col md={{span: 5, offset:3}}>
                  <Button type="submit" variant="success" size="md" block>Confirm</Button>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-primary" onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    }
  }
  



class CardContent extends React.Component{
    constructor(...args){
        super(...args);
        this.state = { modalShow: false };
        this.state.db = {
          restaurantContent : {
            url: "restaurant?res_id=",
            content: {}
          }
        }
    }

    componentWillMount() {
      let url = "https://developers.zomato.com/api/v2.1/";
      //id calculater
      axios.get(url + this.state.db.restaurantContent.url 
        + this.props.restId,
      {
        headers:{
          "Accept": "application/json",
          "user-key": "0c87f14b32add1de8469c4d4cdb376a0 ",
        }
      })
      .then((res)=>{
        let db = this.state.db;
        db.restaurantContent.content = res.data
        this.setState({
          db : db,
        });
        console.log(this.state.db);
      })
    }

    render(){
        let modalClose = () => this.setState({ modalShow: false });

        return(
            <div>
                <MyNavBar city={this.props.city}></MyNavBar>
                <Container>
                    <Row>
                        <Col md={{span:8, offset:1}}>     
                            <InnerCard style={{position: 'relative'}}></InnerCard>
                            </Col>
                        <Col md={{ span:3, offset:0}}>
                          <Container>
                            <Col>
                            <Row md={{span:12}}> 
                              <MyCalendar style={{position: 'relative'}}></MyCalendar>
                            <Row> 
                            <Col md={{offset:6, span:12}}>
                              <Button  className="bookMargin"
                              variant="warning"
                              onClick={() => this.setState({ modalShow: true })}
                              style={{position: 'relative'}}
                              >
                              Book a Table
                              </Button>

                              <MyVerticallyCenteredModal
                              show={this.state.modalShow}
                              onHide={modalClose}
                              />
                              </Col>
                              </Row>
                              </Row>
                              </Col>
                              </Container>
                          </Col>
                    </Row>
                    <Row>
                    <Col style={{position: 'relative'}} md={{offset:0.1, span:8}}>     
                        <Description></Description>
                      </Col>
                    </Row>
                    </Container>
            </div>
        );
    }
}

export default CardContent;