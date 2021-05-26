/* eslint-disable react/no-unescaped-entities */
import React from "react"
import styled from "styled-components"
import { lightColor,bgLightColor,tertiaryColor, textColor } from "../../styles/variables"
import picture01 from "../../img/peinture.png"
import picture02 from "../../img/peinture.png"
import picture03 from "../../img/peinture.png"
import picture04 from "../../img/peinture.png"

const DescribeSection = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 8rem 0;
    width: 80vw;

`
const LeftSide = styled.div`
    flex-basis: 40%;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const RightSide = styled.div`
    flex-basis: 40%;
`
const Picture = styled.img`
	height: 260px;
    width: 260px;
    margin: .3em;
    filter: grayscale(0) blur(0);
    transition: .3s ease-in-out;
    &:hover{
        cursor: pointer;
        filter: grayscale(100%) blur(3px);
    }
`
const Pictures = styled.div`
    display: flex;
    justify-content: center;
`
const Title = styled.h2`
	text-transform: uppercase;
    font-size: 4em;
    width:100%;
	color: ${textColor};

    text-shadow: 0px 0px 13px #23d804;
	//text-shadow: #3de949 1px 0 10px;
`
const SubTitle = styled.h3`
    color: ${textColor};
    text-shadow: 0px 0px 13px #23d804;

    font-size: 2em;
    padding: 1em 0;
`
const Text = styled.p`
    color: ${textColor};
    font-size:1.2em;
    padding-bottom: 0.5em;
    line-height: 1.2em;
    letter-spacing: .017em;
`

const ShortDescribe = () => {
    

    return (
	<DescribeSection>
		<LeftSide>
			<Title>GamePlay</Title>
            <SubTitle>Le bar Geek n°1 à Vesoul </SubTitle>
			<Text>Le GamePlay est un bar Geek, des bornes d'arcades jusqu'au consoles nextGen,des Pc ainsi que des jeux de société.</Text>
            <Text> Ouvert tout les jours de la semaine.</Text>
            <Text>Le GamePlay, 6 Rue des Bains, 70000 Vesoul</Text>
		</LeftSide>
		<RightSide>
            <Pictures>
			<Picture src={picture01} alt="Photo du bar" />
			<Picture src={picture02} alt="Photo du bar" />
            </Pictures>
            <Pictures>
			<Picture src={picture03} alt="Photo du bar" />
			<Picture src={picture04} alt="Photo du bar" />
            </Pictures>
		</RightSide>
	</DescribeSection>
)}

export default ShortDescribe
