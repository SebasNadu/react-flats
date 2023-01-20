import React, { Component } from 'react';
import FlatList from './flat_list.jsx';

import flats from '../../data.js';
class App extends Component {

	constructor(props) {
		super(props);
    
		this.state = {
			flats: flats,
			lat: '',
			lng: '',
		};
	}


	render() {
		return (
			<div>
				<div className="map-container">
				</div>
				<FlatList flats={this.state.flats} />	
			</div>
		)
	}
} 

export default App;

