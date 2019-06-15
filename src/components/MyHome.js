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
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div style={{position: 'fixed'}}>
            <MyNavBars></MyNavBars>
            <Container>
                <Row>
                    <Col md={{span: 3, offset: 1 }}>
                        <PaperSheet></PaperSheet>
                    </Col>
                    <Col md={{ span: 5}} className="templateCard">
                        <Dropdown className="dropShift">
                            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                            Sort By
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Link to="/home/card" style={{ textDecoration: 'none' }}>
                            <Cardmy></Cardmy>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
        );
    }
}

export default Home;