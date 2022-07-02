/*
 *  _____ _______         _                      _
 * |_   _|__   __|       | |                    | |
 *   | |    | |_ __   ___| |___      _____  _ __| | __  ___ ____
 *   | |    | | '_ \ / _ \ __\ \ /\ / / _ \| '__| |/ / / __|_  /
 *  _| |_   | | | | |  __/ |_ \ V  V / (_) | |  |   < | (__ / /
 * |_____|  |_|_| |_|\___|\__| \_/\_/ \___/|_|  |_|\_(_)___/___|
 *                   ___
 *                  |  _|___ ___ ___
 *                  |  _|  _| -_| -_|  LICENCE
 *                  |_| |_| |___|___|
 *
 * IT ZPRAVODAJSTVÍ  <>  PROGRAMOVÁNÍ  <>  HW A SW  <>  KOMUNITA
 *
 * Tento zdrojový kód pochází z IT sociální sítě WWW.ITNETWORK.CZ
 *
 * Můžete ho upravovat a používat jak chcete, musíte však zmínit
 * odkaz na http://www.itnetwork.cz
 */
import React, { useState } from 'react';
import CalculatorForm from './calculator/CalculatorForm';
import './App.css';

const App = () => {
	const [titleState] = useState('React kalkulačka');
	const [xState, setXState] = useState(0);
	const [yState, setyState] = useState(0);

	const inputXonchange = (event) => {
		console.log(event.target.value);
		setXState(event.target.value);
	};

	const inputYonchange = (event) => {
		console.log(event.target.value);
		setyState(event.target.value);
	};

	return (
		<div className="App">
			<h1>{titleState}</h1>
			<CalculatorForm
				xOnChange={inputXonchange}
				yOnChange={inputYonchange}
				x={xState}
				y={yState}
			/>
		</div>
	);
};

export default App;
