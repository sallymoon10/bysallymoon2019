import React from 'react'
import {Link } from "react-router-dom";
import styled from 'styled-components';
import DevButton from '../images/Landing/DevButton.png';
import DevButtonActive from '../images/Landing/DevButtonActive.png';


// The Header creates links that can be used to navigate
// between routes.

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #ffffff;
`;

const NavItem = styled.div`
  flex-grow: 1;
  flex: 1;
  justifyContent: space-evenly;
  padding-left:5%;
  padding-top:3%;
  padding-bottom:1%;
`;

const Logo = styled.img`
  width: 50%;
  margin-top: -15%;
`;

const Image = styled.img`
  width: 70%;
`;

function over(e) {
  e.currentTarget.src =  DevButtonActive ;
}
function out(e) {
  e.currentTarget.src =  DevButton ;
}

const NavBar = () => (
  <NavContainer>
    <NavItem>
      <Link to="/devwork">

        <Image src={DevButton} onMouseOver={over} onMouseOut={out}/>
      </Link>
    </NavItem>
    <NavItem>
      <Link to="/designwork">
        <Image src={require('../images/Landing/DesignButton.png')} onMouseOver={over} onMouseOut={out}/>
      </Link>
    </NavItem>
    <NavItem>
      <Link to="/">
        <Logo src={require('../images/Landing/logo.png')}/>
      </Link>
    </NavItem>
    <NavItem>
      <Link to="/resumé">
        <Image src={require('../images/Landing/ResumeButton.png')}/>
      </Link>
    </NavItem>
    <NavItem>
      <Link to="/contacts">
        <Image src={require('../images/Landing/ContactButton.png')}/>
      </Link>
    </NavItem>
  </NavContainer>
);


export default NavBar
