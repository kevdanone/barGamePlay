import React from "react"
import styled from "styled-components"
import videoTyping from "../../video/Typing_dark.mov"
import SchedulesSection from "../SchedulesSection"
import ShortDescribe from "../ShortDescribe"
import { opacityOverlay, textColor } from "../../styles/variables"

const Main = styled.main`
	background-color: #000;
	display: flex;
	align-items: center;
	flex-direction: column;
`

const Video = styled.video`
	z-index: 0;
	width: 100%;
	clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
`
const Overlay = styled.div`
	background-color: ${opacityOverlay};
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	z-index: 5;
	height: 100%;
	clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
`
const WrapperHero = styled.div`
	display: flex;
	justify-content: center;
	position: relative;
`

const Hero = styled.div`
	position: absolute;
	top: 45%;
	z-index: 8;
`
const MainTitle = styled.h1`
	text-transform: uppercase;
	font-size: 4em;
	line-height: 1.5em;
	color: ${textColor};
	display: flex;
	align-items: center;
    text-shadow: 0px 0px 13px #23d804;

	&::before,
	::after {
		content: "";
		height: 3px;
		width: 1em;
		background-color: ${textColor};
		margin: 0 0.5em;
		border-radius: 2px;
	}
`
const TextHero = styled.span`
	font-size: 2em;
	color: ${textColor};
`

const Home = () => (
	<Main>
		<WrapperHero>
			<Hero>
				<TextHero> Bienvenue au </TextHero>
				<MainTitle> Gameplay </MainTitle>
			</Hero>
			<Overlay />
			<Video autoPlay muted loop>
				<source src={videoTyping} type="video/mp4" />
			</Video>
		</WrapperHero>

		<ShortDescribe />
		<SchedulesSection />
		<ShortDescribe />
	</Main>
)

export default Home
