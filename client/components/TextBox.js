import React from "react";
import styled from "styled-components";

const OuterDiv = styled.div`
	background-color: blue;
	color: white;
	padding: 16px 8px;
	width: 100%;
	margin: 8px 2px;
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
					{ this.props.boxTitle }
				</BoxHeader>
				<InnerDiv>
					<BoxText>
						{ this.props.mainText }
					</BoxText>
				</InnerDiv>
			</OuterDiv>
		)
	}
}