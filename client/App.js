import React from 'react';
import TextBox from "./components/TextBox.js";

export default class App extends React.Component {
	render() {
		return (
			<div style={{textAlign: 'center'}}>
				<h1>Hail Maarten, lord of code</h1>
				<TextBox/>
			</div>
		);
	}
}