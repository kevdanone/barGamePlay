import React from "react"
import styled from "styled-components"
import bgFooter from "../../img/ptRri9.jpg"
import logo from "../../img/logo.png"
import { primaryColor } from "../../styles/variables"
import { IoLogoTwitter, IoLogoTwitch, IoLogoFacebook, IoIosPin } from "react-icons/io"

const FooterWrapper = styled.footer`
	position: relative;
	background: url(${bgFooter}) center no-repeat;
	padding: 30rem;
`
const OverlayBackGround = styled.div`
	background: linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(18, 7, 7, 0.8) 100%);
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
`
const Logo = styled.img`
	height: 150px;
	width: 150px;
	z-index: 1;
	position: relative;
`
const FooterTitle = styled.h3`
	font-size: 2.2em;
	color: #fff;
	position: relative;
`
const FooterContainers = styled.div`
	display: flex;
	justify-content: space-between;
	z-index: 1;
	position: relative;
`
const FooterContainer = styled.div`
	display: flex;
	flex-direction: column;
`

const TitleContainer = styled.h4`
	color: #fff;
	font-size: 1.2em;
	margin-bottom: 0.7em;
`
const Field = styled.div``
const InputMail = styled.input.attrs({ type: "email" })``
const Button = styled.button`
	padding: 0.5em 1em;
	background-color: ${primaryColor};
	outline: none;
	border: none;
	border-radius: 5px;
	cursor: pointer;
`
const Consent = styled.div``
const CheckBox = styled.input.attrs({ type: "checkbox" })``
const BoxLabel = styled.label``

const LogoWrapper = styled.div``
const LogoSocial = styled.i`
	border: 1px solid #fff;
	border-radius: 15px;
	color: #fff;
`
const LogoLocation = styled.i`
	color: ${primaryColor};
`
const TextLocation = styled.span`
	color: ${primaryColor};
`
const Copyright = styled.p`
	position: relative;
	color: #fff;
`
const CopyrightHighlight = styled.span`
	position: relative;
	color: ${primaryColor};
`

const Footer = () => (
	<FooterWrapper>
		<OverlayBackGround />
		<Logo src={logo} alt="logo GamePlay" />
		<FooterTitle>GamePlay</FooterTitle>

		<FooterContainers>
			<FooterContainer>
				<TitleContainer>Newletter</TitleContainer>
				<Field>
					{/* <InputMail>Votre Email</InputMail> */}
					<Button>Envoyer</Button>
				</Field>
				<Consent>
					{/* <CheckBox /> */}
					<BoxLabel>I consent</BoxLabel>
				</Consent>
			</FooterContainer>
			<FooterContainer>
				<TitleContainer>Réseau social</TitleContainer>
				<LogoWrapper>
					<LogoSocial>
						<IoLogoTwitter />
					</LogoSocial>
					<LogoSocial>
						<IoLogoTwitch />
					</LogoSocial>
					<LogoSocial>
						<IoLogoFacebook />
					</LogoSocial>
				</LogoWrapper>
			</FooterContainer>
			<FooterContainer>
				<TitleContainer>Localisation</TitleContainer>
				<LogoLocation>
					{" "}
					<IoIosPin />
				</LogoLocation>
				<TextLocation>Coordonné</TextLocation>
			</FooterContainer>
		</FooterContainers>

		<Copyright>
			© 2021 <CopyrightHighlight>DESIGN BY</CopyrightHighlight>
		</Copyright>
	</FooterWrapper>
)

export default Footer
