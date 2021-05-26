/* eslint-disable react/no-unescaped-entities */
import React from "react"
import styled from "styled-components"
import { primaryColor, darkColor, textColor, tertiaryColor, bgColor } from "../../styles/variables"
import { IoLogoDribbble, IoIosBeer } from "react-icons/io"

const HomeInfoSection = styled.section`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	height: 80vh;
	width: 99vw;
	clip-path: polygon(0 15%, 100% 0, 100% 85%, 0 100%);
	background-color: ${darkColor};
`
const LeftSide = styled.div`
	flex-basis: 40%;
	text-align: left;
`
const Title = styled.h2`
	text-transform: uppercase;
	color: ${textColor};
	text-shadow: 0px 0px 13px ${primaryColor};
	font-size: 2.2em;
`
const SubTitle = styled.h3`
	color: ${textColor};
	text-shadow: 0px 0px 13px ${primaryColor};
	font-size: 4em;
	font-weight: 700;
`

const RightSide = styled.div`
	flex-basis: 40%;
	text-align: left;
`
const RightSideTop = styled.div``

const RightSideTitle = styled.h4`
	color: ${primaryColor};
	font-size: 1.8em;
	letter-spacing: 0.2em;
	text-transform: uppercase;
`
const RightSideText = styled.p`
	color: ${textColor};
	font-size: 1.1em;
	margin: 1em 0;
	line-height: 1.7em;
	letter-spacing: 0.017em;
`

const RightSideBottom = styled.div`
	display: flex;
	flex-wrap: wrap;
`

const Card = styled.div`
	flex-basis: 50%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`
const CardIllustration = styled.div`
	font-size: 48px;
	color: ${primaryColor};
	&:hover {
		color: ${tertiaryColor};
		border: 15px solid green;
		border-radius: 50%;
        &::after{
            content: "Test";
        }
	}
`
const CardTitle = styled.div`
	color: ${primaryColor};
	font-size: 1.5em;
	text-transform: uppercase;
`
const CardDescription = styled.div`
	color: #fff;
	padding: 2em 0;
`
const CardButton = styled.div`
	background-color: ${primaryColor};
	padding: 0.5em 1.5em;
	border-radius: 5px;
	text-transform: uppercase;
	font-weight: 700;
	cursor: pointer;
	&:hover {
		background-color: ${bgColor};
		color: ${primaryColor};
	}
`

const HomeInfo = () => {
	return (
		<HomeInfoSection>
			<LeftSide>
				<Title>Geek &</Title>
				<SubTitle>Food Porn </SubTitle>
			</LeftSide>
			<RightSide>
				<RightSideTop>
					<RightSideTitle>Vesoul Bar</RightSideTitle>
					<RightSideText>
						Twenty Twenty Two is a unique bar, ping pong room and events space in the heart of the Northern Quarter, it
						offers more than the standard bar experience.
					</RightSideText>
					<RightSideText>
						Offering all night ping pong and a late night, wild weekend party spot. Serving up tasty cocktails and good
						vibes. Check out happy hour and our other weekly offers.
					</RightSideText>
				</RightSideTop>
				<RightSideBottom>
					<Card>
						<CardIllustration>
							<IoLogoDribbble />
						</CardIllustration>
						<CardTitle>Reservation</CardTitle>
						<CardDescription>
							Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du
							Lorem Ipsum,
						</CardDescription>
						<CardButton>Voir</CardButton>
					</Card>
					<Card>
						<CardIllustration>
							<IoIosBeer />
						</CardIllustration>
						<CardTitle>Qui sommes-nous?</CardTitle>
						<CardDescription>
							Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d'entre elles
							a été altérée
						</CardDescription>
						<CardButton>Boire</CardButton>
					</Card>
				</RightSideBottom>
			</RightSide>
		</HomeInfoSection>
	)
}

export default HomeInfo
