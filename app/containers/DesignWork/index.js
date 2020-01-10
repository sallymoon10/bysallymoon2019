/*
 * Design work page
 */

import React from 'react';
import styled from 'styled-components';
import NavBar from '../../components/NavBar';
import blueteamButton from '../../images/WorkButtons/BlueteamButton.png';
import cadButton from '../../images/WorkButtons/CADButton.png';
import couerButton from '../../images/WorkButtons/CoeurButton.png';
import flaticonButton from '../../images/WorkButtons/FlatIconButton.png';
import lineIconButton from '../../images/WorkButtons/LineIconButton.png';
import spacesquirrelButton from '../../images/WorkButtons/SpaceSquirrelButton.png';
import WorkButton from '../../components/WorkButton';

const Container = styled.div`
  width: 100%;
`;

const Gap = styled.div`
  padding-top:5%;
`;

const Header = styled.h1`
  flex: 1;
  text-align: center;
  font-size: 1.2em;
`;

const ButtonSection = styled.div`
  display: flex;
  flex-direction: row;
  justifyContent: center;
  alignItems: center;
  padding-left: 10%;
  padding-right: 10%;
  padding-bottom: 5%;
  padding-top: 5%;
`;

export default function DevWork() {
  return (
    <Container>
      <NavBar designState={true}/>
      <Gap></Gap>
      <Header>
        User Interface / UX designs
      </Header>
      <ButtonSection>
        <WorkButton imgSrc={couerButton}/>
        <WorkButton imgSrc={blueteamButton}/>
      </ButtonSection>

      <Header>
        2D Illustrations / 3D assets
      </Header>
      <ButtonSection>
        <WorkButton imgSrc={lineIconButton}/>
        <WorkButton imgSrc={flaticonButton}/>
        <WorkButton imgSrc={spacesquirrelButton}/>
        <WorkButton imgSrc={cadButton}/>
      </ButtonSection>
    </Container>
  );
}
