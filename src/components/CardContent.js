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

  constructor(props){
    super(props);
    this.state={}
    this.state.table={
      available: 0
    }
    this.state.user={
      email: ""
    }
  }

  splitName = () =>{
    let name = this.props.restaurantInfo.name.split(',');
    return name[0];
  }

  isLogin = () =>{
    console.log(this.state.user.email)
    if(this.state.user.email === ""){
      alert("Please enter Email id");
    }
    else{
      axios.get('http://localhost:8080/login/' + this.state.user.email)
        .then((resp)=>{
          //do something with response
          if(resp.data[0].is_login){
            console.log(resp.data[0]);
            let obj = {
              temp_email: this.state.user.email,
              tables_booked: parseInt(this.state.user.booked_tables),
              resid: this.state.table.resid,
              id: this.state.table.id
            }
            console.log(obj)
            axios.post('http://localhost:8080/booking', obj)
            .then((resp)=>{

            });

          }

          // else{
          //   alert("Login First!!!")
          // }
          
        }).catch((error)=>{
          alert("Login First!!!")
          console.log(error)
        });
      }
  }

  componentWillMount(){
    axios.get('http://localhost:8080/available/' + window.location.href.split(":")[3])
      .then((resp)=>{
        //do something with response
        console.log(resp.data[0].tables_available);
        let table = this.state.table;
        table.available = resp.data[0].tables_available;
        table.resid = resp.data[0].resid;
        table.id = resp.data[0].id;
        this.setState({
          table: table
        })
        console.log(this.state.table)
      });
  }

  getEmail = (e) =>{
    let user = this.state.user;
    user.email = e.target.value;
    this.setState({
      user: user
    })
  }

  fetchTables = (e) =>{
    let user = this.state.user;
    user.booked_tables = e.target.value;
    this.setState({
      user: user
    })
  }

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
              Book a table at {this.splitName()}
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
                  {/* {console.log(this.totalSeatsAvalilable())} */}

                  <TextField
                    id="outlined-number"
                    label="Available"
                    // value={values.age}
                    // onChange={handleChange('age')}
                    min={this.state.table.available}
                    max={this.state.table.available}
                    value={this.state.table.available}
                    // type="number"
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
                    min="0"
                    max={this.state.table.tables_available}
                    onChange={this.fetchTables}
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
                <Col md={{span:6}}>
                  <h5>Enter Email ID: </h5>
                </Col>
                <Col>
                  {/* <input type="number" name="quantity" min="1" max="5"></input> */}
                  <TextField
                    id="outlined-dense-multiline"
                    label="Required"
                    // className={clsx(classes.textField, classes.dense)}
                    // value={values.age}
                    // onChange={handleChange('age')}
                    // type="number"
                    className="textField"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    margin="normal"
                    variant="outlined"
                    onChange={this.getEmail}
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
                  <Button onClick={()=>this.isLogin()} variant="success" size="md" block>Confirm</Button>
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
      
      
      // let url = "https://developers.zomato.com/api/v2.1/";
      // //id calculater
      // axios.get(url + this.state.db.restaurantContent.url 
      //   + this.props.restId,
      // {
      //   headers:{
      //     "Accept": "application/json",
      //     "user-key": "0c87f14b32add1de8469c4d4cdb376a0 ",
      //   }
      // })
      // .then((res)=>{
      //   let db = this.state.db;
      //   db.restaurantContent.content = res.data
      //   this.setState({
      //     db : db,
      //   });
      //   console.log(this.state.db);
      // })
      // let url = window.location.href;
      // let parsed = url.split(":");
      // this.props.cardClick(parsed[2]);
    }

    render(){
        let modalClose = () => this.setState({ modalShow: false });

        return(
            <div>
                <MyNavBar citySelectedColorChange={() => this.props.citySelectedColorChange()}></MyNavBar>
                <Container>
                    <Row>
                        <Col md={{span:9, offset:0}}>     
                            <InnerCard fav={this.props.fav} restaurantInfo={this.props.restaurantInfo} style={{position: 'relative'}}></InnerCard>
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
                              restaurantInfo={this.props.restaurantInfo}
                              temp_email={this.props.temp_email}
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
                        <Description restaurantInfo={this.props.restaurantInfo} style={{position: 'relative'}}></Description>
                      </Col>
                    </Row>
                    </Container>
            </div>
        );
    }
}

export default CardContent;