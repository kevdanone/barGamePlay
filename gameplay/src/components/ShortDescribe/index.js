/* eslint-disable react/no-unescaped-entities */
import React from "react"
import styled from "styled-components"
import { primaryColor, textColor } from "../../styles/variables"
import picture01 from "../../img/peinture.png"
import picture02 from "../../img/peinture.png"
import picture03 from "../../img/peinture.png"
import picture04 from "../../img/peinture.png"

const DescribeSection = styled.section`
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 3rem 0;
`
const LeftSide = styled.div`
	width: 40%;
	display: flex;
	flex-wrap: wrap;
`
const RightSide = styled.div`
    display:flex;
    flex-wrap: wrap;
    flex-basis: 40%;
    justify-content: center;
`
const Title = styled.h1`
	text-transform: uppercase;
    font-size: 3em;
    text-align: center;
    width:100%;
	color: ${primaryColor};
	//text-shadow: #3de949 1px 0 10px;
`
const SubTitle = styled.h2`
    color: ${primaryColor};
`
const Text = styled.p`
    color: ${textColor}
`
const Picture = styled.img`
	//height: 150px;
    width: 35%;
    margin: .3em;

    filter: grayscale(0) blur(0);
    transition: .3s ease-in-out;
    &:hover{
        cursor: pointer;
        filter: grayscale(100%) blur(3px);
    }
`

const ShortDescribe = () => (
	<DescribeSection>
		<LeftSide>
			<Title>GamePlay</Title>
            <SubTitle>Le bar Geek n°1 à Vesoul </SubTitle>
			<Text>
				Le GamePlay est un bar Geek, des bornes d'arcades jusqu'au consoles nextGen, des Pc ainsi que des jeux de société.Ouver tout les jours de la semaine.
                Le GamePlay, 6 Rue des Bains, 70000 Vesoul
			</Text>
		</LeftSide>
		<RightSide>
			<Picture src={picture01} alt="Photo du bar" />
			<Picture src={picture02} alt="Photo du bar" />
			<Picture src={picture03} alt="Photo du bar" />
			<Picture src={picture04} alt="Photo du bar" />
		</RightSide>
	</DescribeSection>
)

export default ShortDescribe
