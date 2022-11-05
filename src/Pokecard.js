import React from 'react';
import './Pokecard.css';

const Pokecard = (props) => {
	let imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`;
	return (
		<div className="Pokecard">
			<p className="name">{props.name}</p>
			<img src={imgSrc} />
			<p>Type: {props.type}</p>
			<p>EXP: {props.exp}</p>
		</div>
	);
};

export default Pokecard;
