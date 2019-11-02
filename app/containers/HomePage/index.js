/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import styled from 'styled-components';
import colors from 'components/Colors.js'

const HomeContainer = styled.div`
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
  padding: 5%;
  justifyContent: center;
  alignItems: center;
`;

const Image = styled.img`
  width: 50%;
  height: 50%;
  padding-left: 5%;
  padding-right: 5%;
  flex: 1;
  align-self: flex-end;
`;

const SectionImage = styled.img`
  width: 80%;
  height: 80%;
  flex: 1;
`;



export default function HomePage() {
  return (
      <HomeContainer>
          <Header>

          </Header>
          <Section style={{backgroundColor: colors.white}}>
              <Image src={require('../../images/Landing/ProfileCircle.png')}/>
              <Image src={require('../../images/Landing/Intro.png')}/>
          </Section>
          <Section style={{backgroundColor: colors.red}}>
              <SectionImage src={require('../../images/Landing/AILandingSection.png')}/>
          </Section>
          <Section style={{backgroundColor: colors.blue}}>
              <SectionImage src={require('../../images/Landing/CodeLandingSection.png')}/>
          </Section>
          <Section style={{backgroundColor: colors.red}}>
              <SectionImage src={require('../../images/Landing/DesignLandingSection.png')}/>
          </Section>
          <Section style={{backgroundColor: colors.white}}>
              <SectionImage src={require('../../images/Landing/LetsWork.png')}/>
          </Section>
      </HomeContainer>
  );
}
