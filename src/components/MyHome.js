import React from 'react';
import MyNavBars from './MyNavBar';
import PaperSheet from './SidePannel';
import Cardmy from './Cardmy';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Dropdown } from 'react-bootstrap';
import './Mycss.css';
import Button from 'react-bootstrap/Button.js';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar.js';
import InputBase from '@material-ui/core/InputBase';
import axios from 'axios';
import { Route, BrowserRouter as Router } from 'react-router-dom';


class Home extends React.Component {
    constructor(props){
        super(props);
        this.state={
            db: [],
            i: "",
            // cardPrint: this.props.cardPrint(),
            flag: false,
            search_card : [],
            flag2: false
        }
    }



    

    searchInputChange = (e) =>{
        let i = this.state.i;
        i = e.target.value;
        this.setState({
            i : i,
            search_card: [],
        });
    }

    searchButtonClick = () =>{
        // this.setState({
        //     search_card: [],
        // })
        this.state.flag = true;
        let arr = this.state.search_card;
        if(this.state.i.trim() !== "")
        {
            arr.push(
                <ButtonToolbar>
                    <Button onClick={()=>this.setState({flag: false})} variant="primary" style={{borderRadius: '0rem 0.25rem 0.25rem 0rem !important', marginBottom: '1% !important'}}>Refresh</Button>
                </ButtonToolbar>
                )
            this.props.restaurants.map((value, index)=>{
                let name = value.restaurant.name.split(' ');
                // name = name.split('-');
                // let name = name1.split('-');
                name.map((val)=>{
                    let valu = val.split("'");
                    valu = valu[0];
                    if(valu.toUpperCase() === this.state.i.toUpperCase()){
                        // console.log("restaurant found");
                        arr.push((this.props.cardPrint())[index]);
                    }
                });
                })
            // console.log(arr);
            this.setState({
                search_card: arr,
                i: ""
            })
        }
    }

    cuisinSort = () =>{
        // this.setState({
        //     search_card: [],
        // })
        this.state.flag2 = true;
        let arr = [];
            arr.push(
                <ButtonToolbar>
                    <Button onClick={()=>this.setState({flag2: false})} variant="primary" style={{borderRadius: '0rem 0.25rem 0.25rem 0rem !important', marginBottom: '1% !important', marginLeft:'2% !important'}}>Refresh</Button>
                </ButtonToolbar>
                )
            this.props.restaurants.map((value, index)=>{
                let name = value.restaurant.cuisines.split(' ');
                // name = name.split('-');
                // let name = name1.split('-');
                name.map((val)=>{
                    // let valu = val.split("'");
                    // valu = valu[0];
                    if(val.toUpperCase() === this.props.cuisine_selected.toUpperCase()){
                        // console.log("restaurant found");
                        arr.push((this.props.cardPrint())[index]);
                    }
                });
                })
            // console.log(arr);
            this.setState({
                search_card: arr,
            })
    }

    render() {
        return (
            

            <div>
                <MyNavBars citySelectedColorChange={() => this.props.citySelectedColorChange()}></MyNavBars>
                {/* {console.log(this.props.citySelectedColorChange())} */}
                <Container>
                    <Row>
                        <Col md={{ span: 3, offset: 0 }}>
                            <PaperSheet cuisinPrint={()=>this.props.cuisinPrint()} cuisines={this.props.cuisines}></PaperSheet>
                        </Col>
                        <Col md={{ span: 9, offset: 0 }} className="templateCard">
                            <Container>
                                <Row style={{ marginRight: '0%' }}>
                                    <Col style={{marginRight: '0%'}} md={{ span: 5, offset: 1 }}>
                                        <div>
                                            <InputBase
                                             className="search-bar-styles"
                                                placeholder="Search…"
                                                inputProps={{ 'aria-label': 'Search' }}
                                                onChange={this.searchInputChange}
                                                value={this.state.i}
                                            />
                                        </div>
                                        </Col>
                                        <Col style={{display: 'inline', marginLeft: '-30px'}} md={{ span: 2, offset: 0 }}>
                                        <ButtonToolbar>
                                            <Button onClick={()=>{this.searchButtonClick()}} variant="primary" style={{borderRadius: '0rem 0.25rem 0.25rem 0rem !important'}}>Search</Button>
                                        </ButtonToolbar>
                                        
                                    </Col>
                                    <Col md={{ span: 1, offset: 2 }}>
                                        <Dropdown className="dropShift">
                                            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                                Sort By
                                    </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                
                                            <Dropdown.Item href="#/action-1">Popularity</Dropdown.Item>
                                            <Dropdown.Item >Rating</Dropdown.Item>
                                            <Dropdown.Item href="#/action-1">Price: Low to High</Dropdown.Item>
                                            <Dropdown.Item href="#/action-1">Price: High to Low</Dropdown.Item>
                                                
                                              

                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Col>
                                    <Row style={{ marginTop: '2%'}}>
                                        {this.state.flag ? this.state.search_card : (this.state.flag2 ? this.state.search_card : this.props.cardPrint())}
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