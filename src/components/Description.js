import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import './Mycss.css';



class Description extends React.Component {
    constructor(props, context) {
      super(props, context);
      this.state = {
        key: 'home',
      };
    }
  
    render() {
      return (
        <Tabs
          id="controlled-tab-example"
          activeKey={this.state.key}
          onSelect={key => this.setState({ key })}
        >
          <Tab eventKey="home" title="Home">
              This is BTS
          </Tab>
          <Tab eventKey="profile" title="Profile">
          </Tab>
          <Tab eventKey="contact" title="Contact">
          </Tab>
        </Tabs>
      );
    }
  }
  
export default Description;