import React from 'react'
import {Link } from "react-router-dom";
import styled from 'styled-components';
import DevButton from '../images/Landing/DevButton.png';
import DevButtonActive from '../images/Landing/DevButtonActive.png';
import DesignButton from '../images/Landing/DesignButton.png';
import DesignButtonActive from '../images/Landing/DesignButtonActive.png';
import ResumeButton from '../images/Landing/ResumeButton.png';
import ResumeButtonActive from '../images/Landing/ResumeButtonActive.png';
import ContactsButton from '../images/Landing/ContactButton.png';
import ContactsButtonActive from '../images/Landing/ContactButtonActive.png';
import logoButton from '../images/Landing/logo.png';
import logoButtonActive from '../images/Landing/logoActive.png';

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
  width: 60%;
  margin-top: -15%;
`;

const Image = styled.img`
  width: 70%;
`;

function devActive(e) {
  e.currentTarget.src =  DevButtonActive ;
}
function devInactive(e) {
  e.currentTarget.src =  DevButton ;
}
function designActive(e) {
  e.currentTarget.src =  DesignButtonActive ;
}
function designInactive(e) {
  e.currentTarget.src =  DesignButton ;
}
function resumeActive(e) {
  e.currentTarget.src =  ResumeButtonActive ;
}
function resumeInactive(e) {
  e.currentTarget.src =  ResumeButton ;
}
function contactsActive(e) {
  e.currentTarget.src =  ContactsButtonActive;
}
function contactsInactive(e) {
  e.currentTarget.src =  ContactsButton;
}
function logoActive(e) {
  e.currentTarget.src =  logoButtonActive;
}
function logoInactive(e) {
  e.currentTarget.src =  logoButton;
}


const NavBar = () => (
  <NavContainer>
    <NavItem>
      <Link to="/devwork">
        <Image src={DevButton} onMouseOver={devActive} onMouseOut={devInactive}/>
      </Link>
    </NavItem>
    <NavItem>
      <Link to="/designwork">
        <Image src={DesignButton} onMouseOver={designActive} onMouseOut={designInactive}/>
      </Link>
    </NavItem>
    <NavItem>
      <Link to="/">
        <Logo src={logoButton} onMouseOver={logoActive} onMouseOut={logoInactive}/>
      </Link>
    </NavItem>
    <NavItem>
      <Link to="/resumé">
        <Image src={ResumeButton} onMouseOver={resumeActive} onMouseOut={resumeInactive}/>
      </Link>
    </NavItem>
    <NavItem>
      <Link to="/contacts">
        <Image src={ContactsButton}  onMouseOver={contactsActive} onMouseOut={contactsInactive}/>
      </Link>
    </NavItem>
  </NavContainer>
);



export default NavBar
