import React from "react"
import styled from "styled-components"
import backimg from "../../img/purplegaming.jpg"
import { primaryColor, textColor } from "../../styles/variables"

const Schedules = styled.section`
	height: 120vh;
	width: 99vw;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;

	padding-top: 10%;
	background: url(${backimg}) fixed center no-repeat;
	background-size: cover;
	clip-path: polygon(0 10%, 100% 0, 100% 90%, 0 100%);
`

const OpeningTimes = styled.div`
	width: 81%;
	text-align: left;
`
const TitleSection = styled.h2`
	text-transform: uppercase;
	color: ${textColor};
	font-size: 3em;
	font-weight: 400;
`
const TitleSection2 = styled.h2`
	text-transform: uppercase;
	color: ${textColor};
    text-shadow: 6px 6px 20px #00ff00;

	font-size: 4em;
`
const Times = styled.article`
    margin-top: 2em;
	width: 40%;
	background-color: orange;
    height: 60%;
`
const SchedulesSection = () => (
	<Schedules>
		<OpeningTimes>
			<TitleSection> Pour vous </TitleSection>
			<TitleSection2> Pour nous? </TitleSection2>
			<Times></Times>
		</OpeningTimes>
	</Schedules>
)

export default SchedulesSection
