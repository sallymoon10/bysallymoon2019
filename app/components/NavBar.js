import React from 'react'
import {Link } from "react-router-dom";
import styled from 'styled-components';
import DevButton from '../images/Buttons/DevButton.png';
import DevButtonActive from '../images/Buttons/DevButtonActive.png';
import DesignButton from '../images/Buttons/DesignButton.png';
import DesignButtonActive from '../images/Buttons/DesignButtonActive.png';
import ResumeButton from '../images/Buttons/ResumeButton.png';
import ResumeButtonActive from '../images/Buttons/ResumeButtonActive.png';
import ContactsButton from '../images/Buttons/ContactButton.png';
import ContactsButtonActive from '../images/Buttons/ContactButtonActive.png';
import logoButton from '../images/Landing/logo.png';

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
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {logoHover: false};
  }

  render() {
    return (
      <NavContainer>
        <NavItem>
          <Link to="/devwork">
            {this.props.devState ? <Image src={DevButtonActive}/>
              : <Image src={DevButton} onMouseOver={devActive} onMouseOut={devInactive}/>}
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/designwork">
            {this.props.designState ? <Image src={DesignButtonActive}/>
              : <Image src={DesignButton} onMouseOver={designActive} onMouseOut={designInactive}/>}
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/">
            <Logo src={logoButton}
                  onMouseOut={() => this.setState({logoHover: false})}
                  onMouseOver={() => this.setState({logoHover: true})}
                  style={{transform: `${this.state.logoHover ? 'scale(1.05,1.05)' : 'scale(1,1)'}`}}/>
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/resumé">
            {this.props.resumeState ? <Image src={ResumeButtonActive}/>
              : <Image src={ResumeButton} onMouseOver={resumeActive} onMouseOut={resumeInactive}/>}
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/contacts">
            {this.props.contactsState ? <Image src={ContactsButtonActive}/>
              : <Image src={ContactsButton} onMouseOver={contactsActive} onMouseOut={contactsInactive}/>}
          </Link>
        </NavItem>
      </NavContainer>
    );
  }
}

export default NavBar
