import React from 'react';
import logo from './logo.svg';
import './App.css';
import Pokedex from './Pokedex';
import Pokecard from './Pokecard';

function App() {
	let listPokemon = [];
	for (let Pokemon of Pokedex) {
		listPokemon.push(
			<Pokecard
				key={Pokemon.id}
				name={Pokemon.name}
				type={Pokemon.type}
				exp={Pokemon.base_experience}
				id={Pokemon.id}
			/>
		);
	}

	let grid = <div className="grid">{listPokemon}</div>;

	return (
		<div>
			<h1>Pokedex</h1> {grid}{' '}
		</div>
	);
}

export default App;
