import React from 'react';
import MyNavBar from './MyNavBar';
import InnerCard from './InnerCard';
import MyCalendar from './MyCalendar';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function CardContent(){
    return(
        <div>
            <MyNavBar></MyNavBar>
            <Container>
                <Row>
                    <Col md={{span:9}}>     
                        <InnerCard></InnerCard>
                    </Col>
                    <Col md={{ span:3, offset:0}}>
                        <MyCalendar></MyCalendar>
                    </Col>
                </Row>
                </Container>
        </div>
    );
}

export default CardContent;