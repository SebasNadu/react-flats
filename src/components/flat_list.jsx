import React from 'react';
import Flat from './flat.jsx'

const FlatList = (props) => {
	return (
		<div className="flat-list">
		{props.flats.map(flat => <Gif id={flat} key={flat} imageUrl={flat.imageUrl} price={flat.price} name={flat.name} />)}
		</div>
	)
}

export default FlatList;
