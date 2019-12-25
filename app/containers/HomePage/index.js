/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import styled from 'styled-components';
import colors from '../../components/Colors';
import NavBar from '../../components/NavBar';
import {Link } from "react-router-dom";


const Container = styled.div`
  width: 100%;
`;

const Header = styled.div`
  flex: 2;
  padding: 10%;
  background-color: #ffffff;
`;

const Section = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 1%;
  padding-bottom: 1%;
  justifyContent: center;
  alignItems: center;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justifyContent: center;
  alignItems: center;
`;


const Image = styled.img`
  width: 40%;
  height: 40%;
  padding-left: 5%;
  padding-right: 5%;
  bottom: 0;
  flex: 1;
`;

const SectionImage = styled.img`
  width: 80%;
  height: 80%;
  flex: 1;
`;

const RightButton = styled.button`
  border:none;
  position:absolute;
  margin-left:49%;
  margin-right:10%;
  margin-top:29%;
  margin-bottom:5%;
`;

const LeftButton = styled.button`
  border:none;
  position:absolute;
  margin-left:-1%;
  margin-right:60%;
  margin-top:29%;
  margin-bottom:5%;
`;

const CenterButton = styled.button`
  border:none;
  position:absolute;
  justify-content:center;
  margin-left:22%;
  margin-right:35%;
  margin-top:15%;
`;

const ButtonImage = styled.img`
  width: 50%;
  height: 50%;
`;

export default function HomePage() {
  return (
    <Container>
      <NavBar />
      <Section style={{backgroundColor: colors.white}}>
        <Image src={require('../../images/Landing/Intro.png')}/>
      </Section>
      <Section style={{backgroundColor: colors.red}}>
        <SectionImage src={require('../../images/Landing/AILandingSection.png')}/>
        <RightButton style={{backgroundColor: 'transparent'}}>
          <Link to="/resumé">
            <ButtonImage src={require('../../images/Landing/ViewResumeButton.png')}/>
          </Link>
        </RightButton>
      </Section>
      <Section style={{backgroundColor: colors.blue}}>
        <SectionImage src={require('../../images/Landing/CodeLandingSection.png')}/>
        <LeftButton style={{backgroundColor: 'transparent'}}>
          <Link to="/devwork">
            <ButtonImage src={require('../../images/Landing/ViewWorkButton.png')}/>
          </Link>
        </LeftButton>
      </Section>
      <Section style={{backgroundColor: colors.red}}>
        <SectionImage src={require('../../images/Landing/DesignLandingSection.png')}/>
        <RightButton style={{backgroundColor: 'transparent'}}>
          <Link to="/designwork">
            <ButtonImage src={require('../../images/Landing/ViewWorkButton.png')}/>
          </Link>
        </RightButton>
      </Section>
      <Section style={{backgroundColor: colors.white}}>
        <SectionImage src={require('../../images/Landing/LetsWork.png')}/>
        <CenterButton style={{backgroundColor: 'transparent'}}>
          <Link to="/contacts">
            <ButtonImage src={require('../../images/Landing/ViewContactButton.png')}/>
          </Link>
        </CenterButton>
      </Section>
      <Footer style={{backgroundColor: colors.grey}}>
        <SectionImage src={require('../../images/Landing/Footer.png')}/>
      </Footer>
    </Container>
  );
}

