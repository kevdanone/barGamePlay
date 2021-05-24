import React from 'react';
import { NavLink } from 'react-router-dom';
import videoTyping from '../../video/Typing_dark.mov';
import styled from 'styled-components'

const Video = styled.video`
position: absolute;
top:0;
right:0;
left:0;
clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
`
const Nav = styled.nav`
  width: 100%;
  padding: 0 0 2em 0;
  position: fixed;
  display:flex;
  justify-content:space-around;
  background-color: rgba(0,0,0,.4);
  
`
const LinkItem = styled(NavLink)`
  padding: 2em 0 0 0;
  text-decoration:none;
  color: white;
  font-weight: bold;
  
  &:after{
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: green;
    transition: width .3s;
  }
  &:hover:after {
    width:100%
  }
  
  &.active {
    border-bottom: 1px solid green;
  }
`;

const Header = () => (
  <header>
  <Video autoPlay muted loop>
    <source src={videoTyping} type="video/mp4" />
  </Video>
  <Nav>
    <LinkItem
      exact
      to='/'
      >
      accueil
    </LinkItem>
    <LinkItem
      exact
      to='/test'
      >
      qui somme nous
    </LinkItem>
    <LinkItem
      exact
      to='/test2'
      >
      galerie
    </LinkItem>
    <LinkItem
      exact
      to='/test3'
      >
      quoi de neuf
    </LinkItem>

    <LinkItem
      exact
      to='/test4'
      >
      reservation
    </LinkItem>
    <LinkItem
      exact
      to='/test5'
      >
      blabla
    </LinkItem>
  </Nav>
</header>
);

export default Header;