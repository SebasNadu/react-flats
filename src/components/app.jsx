import React, { Component } from 'react';
import FlatList from './flat_list.jsx';
import SimpleMap from 'google-map-react';
import flats from '../../data.js';
import Marker from './marker';

class App extends Component {

	constructor(props) {
		super(props);
    
		this.state = {
			selectedFlat: flats[0],
			flats: flats,
		};
	}

	center() {
		return {
			lat: this.state.selectedFlat.lat,
			lng: this.state.selectedFlat.lng
		};
	}

	selectFlat = (index) => {
		this.setState({ selectedFlat: flats[index] });
	}

	render() {
		return (
			<div>
        <FlatList
          flats={this.state.flats}
          selectedFlat={this.state.selectedFlat}
          selectFlat={this.selectFlat}
        />
        <div className="map-container">
          <SimpleMap defaultCenter={this.center()} defaultZoom={12}>
            <Marker lat={this.state.selectedFlat.lat} lng={this.state.selectedFlat.lng} />
          </SimpleMap>
        </div>
			</div>
		);
	}
} 

export default App;

