import React from "react"
import { NavLink } from "react-router-dom"
import styled from "styled-components"
import logo from "../../img/logo.png"
import { primaryColor } from "../../styles/variables"

const Nav = styled.nav`
	z-index: 10;
	width: 100%;
	padding: 0 0 2em 0;
	position: fixed;
	display: flex;
	justify-content: center;
	background-color: rgba(0, 0, 0, 0.7);
`
const LinkItem = styled(NavLink)`
	padding: 2em 0 0 0;
	margin: 0 2em;
	text-decoration: none;
	color: white;
	font-weight: bold;

	&:after {
		content: "";
		display: block;
		width: 0;
		height: 2px;
		background: ${primaryColor};
		transition: width 0.3s;
	}
	&:hover:after {
		width: 100%;
	}

	&.active {
		border-bottom: 1px solid ${primaryColor};
	}
`
const Logo = styled.img`
	height: 75px;
	width: 75px;
	margin: -2em;
`

const Header = () => (
	<header>
		<Nav>
			<LinkItem exact to="/">
				Accueil
			</LinkItem>
			<LinkItem exact to="/test">
				Qui somme nous
			</LinkItem>
			<LinkItem exact to="/test2">
				Galerie
			</LinkItem>
			<LinkItem to="/">
				<Logo src={logo} alt="logo GamePlay" />
			</LinkItem>
			<LinkItem exact to="/test3">
				Quoi de neuf
			</LinkItem>

			<LinkItem exact to="/test4">
				Menu | Reservations
			</LinkItem>
			<LinkItem exact to="/test5">
				Tournois
			</LinkItem>
		</Nav>
	</header>
)

export default Header
