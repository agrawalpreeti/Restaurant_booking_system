import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import MyNavBars from './MyNavBar';
import PaperSheet from './SidePannel';
import ComplexGrid from './Cardmy';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {Dropdown} from 'react-bootstrap';




class Home extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
            <MyNavBars></MyNavBars>
            <Container>
                <Row>
                    <Col md={{offset:0, span: 3, offset: 0 }}><PaperSheet></PaperSheet></Col>
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
                        <ComplexGrid></ComplexGrid>
                    </Col>
                </Row>
            </Container>
        </div>
        );
    }
}

export default Home;