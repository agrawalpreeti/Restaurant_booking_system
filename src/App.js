import React from 'react';
import ControlledCarousel from './components/MainPage.js'

class Main extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <ControlledCarousel controls="false" indicators="false"></ControlledCarousel>
    );
  }
}

export default Main;
