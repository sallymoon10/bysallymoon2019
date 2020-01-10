/*
 * Dev work page
 */

import React from 'react';
import styled from 'styled-components';
import NavBar from '../../components/NavBar';
import abStandardsButton from '../../images/WorkButtons/AbStandardsButton.png';
import heatmapButton from '../../images/WorkButtons/HeatmapButton.png';
import imageClassificationButton from '../../images/WorkButtons/ImageClassificationButton.png';
import matlabButton from '../../images/WorkButtons/MatlabButton.png';
import reactNativeButton from '../../images/WorkButtons/ReactNativeButton.png';
import resnetButton from '../../images/WorkButtons/ResnetButton.png';
import unityButton from '../../images/WorkButtons/Unity3DButton.png';
import processingButton from '../../images/WorkButtons/ProcessingButton.png';
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
      <NavBar devState={true}/>
      <Gap></Gap>
      <Header>
        Machine Learning / AI
      </Header>
      <ButtonSection>
        <WorkButton imgSrc={resnetButton}/>
        <WorkButton imgSrc={imageClassificationButton}/>
        <WorkButton imgSrc={matlabButton}/>
      </ButtonSection>

      <Header>
        Mobile  & Web Apps
      </Header>
      <ButtonSection>
        <WorkButton imgSrc={reactNativeButton}/>
        <WorkButton imgSrc={heatmapButton}/>
        <WorkButton imgSrc={abStandardsButton}/>
      </ButtonSection>

      <Header>
        Games
      </Header>
      <ButtonSection>
        <WorkButton imgSrc={unityButton}/>
        <WorkButton imgSrc={processingButton}/>
      </ButtonSection>
    </Container>
  );
}
