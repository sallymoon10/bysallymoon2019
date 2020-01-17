/*
 * Design work page
 */

import React from 'react';
import styled from 'styled-components';
import NavBar from '../../components/NavBar';
import blueteamButton from '../../images/WorkButtons/BlueteamButton.png';
import blueteamButtonHover from '../../images/WorkButtons/BlueteamButtonHover.png';
import cadButton from '../../images/WorkButtons/CADButton.png';
import cadButtonHover from '../../images/WorkButtons/CADButtonHover.png';
import couerButton from '../../images/WorkButtons/CoeurButton.png';
import couerButtonHover from '../../images/WorkButtons/CoeurButtonHover.png';
import flaticonButton from '../../images/WorkButtons/FlatIconButton.png';
import flaticonButtonHover from '../../images/WorkButtons/FlatIconButtonHover.png';
import lineIconButton from '../../images/WorkButtons/LineIconButton.png';
import lineIconButtonHover from '../../images/WorkButtons/LineIconButtonHover.png';
import spacesquirrelButton from '../../images/WorkButtons/SpaceSquirrelButton.png';
import spacesquirrelButtonHover from '../../images/WorkButtons/SpaceSquirrelButtonHover.png';

import WorkButton from '../../components/WorkButton';

const Container = styled.div`
  width: 100%;
`;

const Gap = styled.div`
  padding-top: 5%;
`;

const Header = styled.h1`
  flex: 1;
  text-align: center;
  font-size: 1.2em;
  font-weight:300;
`;

const ButtonSection = styled.div`
  display: flex;
  flex-direction: row;
  justifycontent: center;
  alignitems: center;
  padding-left: 10%;
  padding-right: 10%;
  padding-bottom: 5%;
  padding-top: 5%;
`;

export default function DesignWork() {
  return (
    <Container>
      <NavBar designState />
      <Gap />
      <Header>User Interface / UX designs</Header>
      <ButtonSection>
        <WorkButton imgSrc={couerButton} hoverSrc={couerButtonHover} />
        <WorkButton imgSrc={blueteamButton} hoverSrc={blueteamButtonHover} />
      </ButtonSection>

      <Header>2D Illustrations / 3D assets</Header>
      <ButtonSection>
        <WorkButton imgSrc={lineIconButton} hoverSrc={lineIconButtonHover} />
        <WorkButton imgSrc={flaticonButton} hoverSrc={flaticonButtonHover} />
        <WorkButton
          imgSrc={spacesquirrelButton}
          hoverSrc={spacesquirrelButtonHover}
        />
        <WorkButton imgSrc={cadButton} hoverSrc={cadButtonHover} />
      </ButtonSection>
    </Container>
  );
}
