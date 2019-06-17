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
import Main from './../App';



class Home extends React.Component{
    constructor(props){
        super(props);
        // this.state= {};
        // this.state.city = [];
    }

    // componentWillMount(){
    //     let cities = this.props.city.map((value, index) => 
    //     value
    //      );
    //      this.setState({
    //          city: cities,
    //      })
    //      return this.state.city;
    //   }

    cardPrint = () =>{
        let cards = [];
        cards = this.props.restaurants.map((value, index)=>
            <Link to={"/home/card/res_id:" + value.restaurant.R.res_id}  onClick={()=>{
                // console.log(value)
                return <Main restId={value}></Main>}} style={{ textDecoration: 'none' }}>
                <Cardmy index={index} restaurants={this.props.restaurants}></Cardmy>
            </Link>
        );
        return cards;
    }

    // restId = (value) =>{
    //     // console.log(value.restaurant.R.res_id)
    //     return value.restaurant.R.res_id;
    // }

    
    render(){
        return(
            <div>
                {/* {console.log(this.props.city)} */}
            <MyNavBars city={this.props.city}></MyNavBars>
            <Container>
                <Row>
                    <Col md={{span: 3, offset: 0 }}>
                        <PaperSheet></PaperSheet>
                    </Col>
                    <Col md={{ span: 5}} className="templateCard">
                        <Dropdown className="dropShift">
                            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                            Sort By
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                            
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            
                            </Dropdown.Menu>
                        </Dropdown>
                            {this.cardPrint()}
                    </Col>
                </Row>
            </Container>
            {/* <Main restId={this.restId()}></Main> */}
        </div>
        );
    }
}

export default Home;