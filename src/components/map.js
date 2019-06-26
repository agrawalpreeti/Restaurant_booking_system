import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class MyMap extends React.Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '70vh', width: '100%', marginBottom: '10%'}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyA7-ctbeGOOihHWPavd2ACXGF6eTnBcO7Y" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={this.props.latitude}
            lng={this.props.longitude}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default MyMap;