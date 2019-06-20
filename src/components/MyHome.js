import React from 'react';
import MyNavBars from './MyNavBar';
import PaperSheet from './SidePannel';
import Cardmy from './Cardmy';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Dropdown } from 'react-bootstrap';
import './Mycss.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button.js';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar.js';
import InputBase from '@material-ui/core/InputBase';




class Home extends React.Component {

    cardPrint = () => {
        let cards = [];
        cards = this.props.restaurants.map((value, index) =>
            <Link to={"/home/card/res_id:" + value.restaurant.R.res_id} style={{ textDecoration: 'none' }}>
                <Cardmy index={index} restaurants={this.props.restaurants}></Cardmy>
            </Link>
        );
        return cards;
    }



    render() {
        return (
            <div>
                <MyNavBars citySelectedColorChange={() => this.props.citySelectedColorChange()}></MyNavBars>
                {/* {console.log(this.props.citySelectedColorChange())} */}
                <Container>
                    <Row>
                        <Col md={{ span: 3, offset: 0 }}>
                            <PaperSheet></PaperSheet>
                        </Col>
                        <Col md={{ span: 9, offset: 0 }} className="templateCard">
                            <Container>
                                <Row style={{ marginRight: '0%' }}>
                                    <Col style={{marginRight: '0%'}} md={{ span: 5, offset: 1 }}>
                                        <div>
                                            <InputBase
                                             style={{position: 'relative',
                                             backgroundColor: ' rgba(0, 0, 0, 0.1)', width: '100%',
                                             height: '100%', border: 'hidden', borderRadius:'10px 0px 0px 10px',
                                            paddingLeft: '15%', paddingBottom: '1%', paddingTop: '1%'}}
                                                placeholder="Search…"
                                                // classes={{
                                                //     root: classes.inputRoot,
                                                //     input: classes.inputInput,
                                                // }}
                                                inputProps={{ 'aria-label': 'Search' }}
                                            />
                                        </div>
                                        </Col>
                                        <Col style={{display: 'inline', marginLeft: '-30px'}} md={{ span: 2, offset: 0 }}>
                                        <ButtonToolbar>
                                            <Button variant="primary" style={{borderRadius: '0rem 0.25rem 0.25rem 0rem !important'}}>Search</Button>
                                        </ButtonToolbar>
                                    </Col>
                                    <Col md={{ span: 1, offset: 2 }}>
                                        <Dropdown className="dropShift">
                                            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                                Sort By
                                    </Dropdown.Toggle>

                                            <Dropdown.Menu>

                                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>

                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Col>
                                    <Row style={{ marginTop: '2%' }}>
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