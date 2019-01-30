import React from "react";
import styled from "styled-components";

const OuterDiv = styled.div`
	background-color: blue;
	color: white;
	padding: 16px 8px;
	width: 50%;
	margin: auto;
`

const InnerDiv = styled.div`
	background-color: green;
	color: white;
`
const BoxHeader = styled.h1`
	margin-top: 2px;
	text-align: left;
`

const BoxText = styled.p`
	background-color: black;
	text-align: justify;
	margin: auto;
	padding: 2px 8px;
`

export default class TextBox extends React.Component {
	constructor( props ) {
		super( props );
	}

	render() {
		return(
			<OuterDiv>
				<BoxHeader>
					I am an awesome box!
				</BoxHeader>
				<InnerDiv>
					<BoxText>
						Well, if I may say so myself, that is. Ha! Who am I kidding! Ofcourse I may say so, I'm an awesome box after all!
					</BoxText>
				</InnerDiv>
			</OuterDiv>
		)
	}
}