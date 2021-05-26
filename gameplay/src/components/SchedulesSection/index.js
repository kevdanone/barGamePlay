/* eslint-disable react/no-unescaped-entities */
import React from "react"
import styled from "styled-components"
import backimg from "../../img/purplegaming.jpg"
import { bgColor, textColor, lightColor,darkColor } from "../../styles/variables"

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
	//width: 81%;
	text-align: left;
	width: 65vw;
	display: flex;
	flex-direction: column;
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
	padding: 2em 2.5em;
	margin-top: 2em;
	width: 40%;
	background-color:${darkColor};
	height: 60%;
`
const TimesTitle = styled.h3`
	color: ${textColor};
	font-size: 1.5em;
    margin-bottom: 1em;
`
const TimesHoursDays = styled.div`
    padding: .75em 3em;
	color: ${textColor};
	border-bottom: 1px solid ${textColor};
    font-weight: 700;
    display: flex;
    justify-content: space-between;
`
const TimesDays = styled.span``
const TimesHours = styled.span``
const Disclaimer = styled.p`
	color: ${bgColor};
`

const SchedulesSection = () => (
	<Schedules>
		<OpeningTimes>
			<TitleSection> Pour vous </TitleSection>
			<TitleSection2> Pour nous? </TitleSection2>
			<Times>
				<TimesTitle>Horraires d'ouvertures</TimesTitle>
				<TimesHoursDays>
					<TimesDays>Lun - Mar - Jeu</TimesDays>
					<TimesHours>12h - 21h</TimesHours>
				</TimesHoursDays>
				<TimesHoursDays>
					<TimesDays>Mer</TimesDays>
					<TimesHours>12h - 21h</TimesHours>
				</TimesHoursDays>
				<TimesHoursDays>
					<TimesDays>Ven</TimesDays>
					<TimesHours>12h - 21h</TimesHours>
				</TimesHoursDays>
				<TimesHoursDays>
					<TimesDays>Sam</TimesDays>
					<TimesHours>12h - 22h</TimesHours>
				</TimesHoursDays>
				<TimesHoursDays>
					<TimesDays>Dim</TimesDays>
					<TimesHours>12h - 22h</TimesHours>
				</TimesHoursDays>
				<Disclaimer>L'abus d'alcool c'est le mal. On aime se compliquer la vie et alors? on est maso c'est pas notre faute</Disclaimer>
			</Times>
		</OpeningTimes>
	</Schedules>
)

export default SchedulesSection
