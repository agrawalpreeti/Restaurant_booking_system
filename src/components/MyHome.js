import React from 'react';
import MyNavBars from './MyNavBar';
import PaperSheet from './SidePannel';
import Cardmy from './Cardmy';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {Dropdown} from 'react-bootstrap';
import './Mycss.css';
import { Link} from 'react-router-dom';



class Home extends React.Component{

    cardPrint = () =>{
        let cards = [];
        cards = this.props.restaurants.map((value, index)=>
            <Link to={"/home/card/res_id:" + value.restaurant.R.res_id}   style={{ textDecoration: 'none' }}>
                <Cardmy index={index} restaurants={this.props.restaurants}></Cardmy>
            </Link>
        );
        return cards;
    }


    
    render(){
        return(
            <div>
            <MyNavBars citySelectedColorChange={()=>this.props.citySelectedColorChange()}></MyNavBars>
            <Container>
                <Row>
                    <Col md={{span:3, offset:0}}>
                        <PaperSheet></PaperSheet>
                    </Col>
                    <Col md={{ span:9, offset:0}} className="templateCard">
                    <Container>
                        <Row style={{marginRight:'0%'}}>
                            <Col md={{span:2, offset:10}}>
                                <Dropdown className="dropShift">
                                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                    Sort By
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                    
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                            <Row style={{marginTop:'2%'}}>
                                {this.cardPrint()}
                            </Row>
                        </Row>
                    </Container>
                    </Col>
                </Row>
            </Container>
        </div>
        );
    }
}

export default Home;