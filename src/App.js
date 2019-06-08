import React from 'react';
import ControlledCarousel from './components/MainPage.js'

class Main extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <ControlledCarousel></ControlledCarousel>
    );
  }
}

export default Main;
