import React from 'react';
import styled, { injectGlobal } from "styled-components";
import TextBox from "./components/TextBox";

injectGlobal`
	body {
		margin: 0;
		padding: 0;
		font: normal 16px/1.5 "Open Sans", sans-serif;
		font-size: 1rem;
		min-height: 100%;
		height: 100%;
		background: black;
	}

	a {
		color: blue;
	}

	a:hover,
	a:focus {
		color: yellow;
	}
`;

const Main = styled.div`
	background-color: #01a0ff;
	text-align: center;
	min-height: 100%;
	width: 50%;
	padding: 24px;
	margin: 0 auto;
`

export default class App extends React.Component {
	constructor( props ) {
		super( props );
	}

	render() {
		return (
			<Main>
				<TextBox
					boxTitle={ "Hallo Sjardo" }
					mainText={ "Ik ben echt de besteste developer kijk maar" }
				/>
				{
					// Hier moet een menu
					// Hier moet een router, die components wrapped met het menu, zie app.js en layout.js in my-yoast.
				}
			</Main>
		);
	}
}