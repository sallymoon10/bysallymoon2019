/*
 * Design work page
 */

import React from 'react';
import styled from 'styled-components';
import NavBar from '../../components/NavBar';
import abStandardsButton from '../../images/WorkButtons/AbStandardsButton.png';
import abStandardsButtonHover from '../../images/WorkButtons/AbStandardsButtonHover.png';
import abstandardsImage1 from '../../images/WorkImages/abstandardsImage1.png';
import abstandardsImage2 from '../../images/WorkImages/abstandardsImage2.png';
import heatmapButton from '../../images/WorkButtons/HeatmapButton.png';
import heatmapButtonHover from '../../images/WorkButtons/HeatmapButtonHover.png';
import heatmapImage1 from '../../images/WorkImages/heatmapImage1.png';
import imageClassificationButton from '../../images/WorkButtons/ImageClassificationButton.png';
import imageClassificationButtonHover from '../../images/WorkButtons/ImageClassificationButtonHover.png';
import imageClassificationImage1 from '../../images/WorkImages/imageClassification1.png';
import imageClassificationImage2 from '../../images/WorkImages/imageClassification2.png';
import earModelButton from '../../images/WorkButtons/MatlabButton.png';
import earModelButtonHover from '../../images/WorkButtons/MatlabButtonHover.png';
import earModelImage1 from '../../images/WorkImages/earImage1.png';
import reactNativeButton from '../../images/WorkButtons/ReactNativeButton.png';
import reactNativeButtonHover from '../../images/WorkButtons/ReactNativeButtonHover.png';
import reactNativeImage1 from '../../images/WorkImages/ReactNativeImage1.png';
import reactNativeImage2 from '../../images/WorkImages/ReactNativeImage2.png';
import resnetButton from '../../images/WorkButtons/ResnetButton.png';
import resnetButtonHover from '../../images/WorkButtons/ResnetButtonHover.png';
import resnetImage1 from '../../images/WorkImages/ResnetImage1.png';
import resnetImage2 from '../../images/WorkImages/ResnetImage2.png';
import unityButton from '../../images/WorkButtons/Unity3DButton.png';
import unityButtonHover from '../../images/WorkButtons/Unity3DButtonHover.png';
import unityImage1 from '../../images/WorkImages/spacesquirrelGameImage1.png';
import unityImage2 from '../../images/WorkImages/spacesquirrelGameImage2.png';
import processingButton from '../../images/WorkButtons/ProcessingButton.png';
import processingButtonHover from '../../images/WorkButtons/ProcessingButtonHover.png';
import processingImage1 from '../../images/WorkImages/processingImage1.png';
import processingImage2 from '../../images/WorkImages/processingImage2.png';
import footer from '../../images/Landing/Footer.png';
import WorkButton from '../../components/WorkButton';
import colors from '../../components/Colors';

const Container = styled.div`
  width: 100%;
`;

const Gap = styled.div`
  padding-top: 5%;
`;

const Header = styled.h1`
  flex: 1;
  text-align: center;
  font-weight:300;
  font-size: 1.2em;
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

const SectionImage = styled.img`
  width: 80%;
  height: 80%;
  flex: 1;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justifycontent: center;
  alignitems: center;
  padding-right: 3%;
`;

const resnetInfo = {
  header: 'CNN transfer learning model for medical image classification',
  desc: 'CNN model implemented with transfer learning (ResNet 50) that classifies medical images with categorical labels. The model obtained highest accuracy for the kaggle challenge with f-score of 1.0. ',
  features: 'Key components of the model included: weight initialization with ImageNet, pooling with GlobalAveragePooling2D, dropout of 0.7, and optimizing with the Adam optimizer. ',
  tools: 'Google colab, Python, Keras, Sklearn, Pandas, Resnet50',
  affil: 'University of Waterloo, 4th year Course (Introduction to Machine Intelligence)'
};

const imageClassificationInfo = {
  header: 'Unsupervised clustering algorithms for image classification',
  desc: 'MICD / K-means algorithm to classify 10 types of textures images.',
  features: 'Determined how pixels are classified by using color maps and evaluated the probability of error and construct confusion matrices for each method.',
  tools: 'Matlab',
  affil: 'University of Waterloo, 3rd year Course (Introduction to Pattern Recognition)'
};

const earModelInfo = {
  header: 'Hearing mechanism simulation algorithm',
  desc: 'Modelling cochlear mechanics state-space model on Matlab. Modelled hearing by evaluating statpes displacements at various pressure levels.',
  features: 'Simulated how otosclerosis affects hearing by simulating ear models with various severities of otosclerosis.',
  tools: 'Matlab',
  affil: 'University of Waterloo, 3rd year Course (Anatomical Systems Modelling)'
};

const reactNativeInfo = {
  header: 'Mobile app for powered wheelchair driver training ',
  desc: 'An android / iOS mobile app to train powered wheelchair users to navigate tight spaces with the Braze Sentina wheelchair sensors',
  features: 'Implemented calibration system to test out output signals (light, vibration, sound) of the Braze Sentina. Trains users to use signals to drive safely in a variety of tight navigation scenarios. ',
  tools: 'React Native',
  affil: 'Braze Mobility, Internship'
};

const heatmapInfo = {
  header: 'EI Pro: heatmap body injury location feature',
  desc: 'A feature for EI Pro that visualizes which body parts police officers targetting during arrest and conflict',
  features: 'Allows governing bodies to determine whether police officers are using force in safe areas',
  tools: 'Javascript, Heatmap.js, JSON',
  affil: 'CI Technologies, Internship'
};

const abstandardsInfo = {
  header: 'ABStandards: Police incident reporting app',
  desc: 'A web application that generates professional reports with visual graphs and data tables for police incidents.',
  features: 'Allows you to custom define your search parameters. Both front-end and back-end implementation was developed throughout the duration of the internship.',
  tools: 'Java, Javascript, HTML, Chart.js',
  affil: 'CI Technologies, Internship'
};

const unityInfo = {
  header: 'Space Squirrel: touch-screen game for demential prevention',
  desc: 'A multi-touch screen game that helps prevents onset of dementia with cognitively stimulating games. Allows multiple users to explore new plants as squirrel characters and unlock new regions by playing games. ',
  features: 'Fun and intuitive game play allows grandchildren and grandparents to play together and bond, motivating participation from seniors. ',
  tools: 'Unity 3D, Blender, Multitouch Digital  ',
  affil: 'IATSL (Intelligent Assistive Technology and Systems), Internship'
};

const processingInfo = {
  header: 'MilkyWay: Game for children with cerebral palsy',
  desc: 'Collaborative & fun game design that accomodates children with cerebral palsy. Players launch into outer space to save space cows. ',
  features: 'Adaptive controller design and team-oriented game play that accomodates for physical and intellectual disabilities.',
  tools: 'Processing, Arduino (accelerometer, buttons, potentiometer, sliders), Adobe Illustrator',
  affil: 'University of Waterloo, 3rd Year design project '
};


export default function DevWork() {
  return (
    <Container>
      <NavBar devState />
      <Gap />

      <Header>Machine Learning / AI</Header>

      <ButtonSection>
        <WorkButton
          imgSrc={resnetButton}
          hoverSrc={resnetButtonHover}
          img1Src={resnetImage1}
          img2Src={resnetImage2}
          header={resnetInfo.header}
          desc={resnetInfo.desc}
          features={resnetInfo.features}
          tools={resnetInfo.tools}
          affil={resnetInfo.affil}
        />

        <WorkButton
          imgSrc={imageClassificationButton}
          hoverSrc={imageClassificationButtonHover}
          img1Src={imageClassificationImage1}
          img2Src={imageClassificationImage2}
          header={imageClassificationInfo.header}
          desc={imageClassificationInfo.desc}
          features={imageClassificationInfo.features}
          tools={imageClassificationInfo.tools}
          affil={imageClassificationInfo.affil}
        />

        <WorkButton
          imgSrc={earModelButton}
          hoverSrc={earModelButtonHover}
          img1Src={earModelImage1}
          header={earModelInfo.header}
          desc={earModelInfo.desc}
          features={earModelInfo.features}
          tools={earModelInfo.tools}
          affil={earModelInfo.affil}
        />
      </ButtonSection>

      <Header>Mobile & Web Apps</Header>

      <ButtonSection>
        <WorkButton
          imgSrc={reactNativeButton}
          hoverSrc={reactNativeButtonHover}
          img1Src={reactNativeImage1}
          img2Src={reactNativeImage2}
          header={reactNativeInfo.header}
          desc={reactNativeInfo.desc}
          features={reactNativeInfo.features}
          tools={reactNativeInfo.tools}
          affil={reactNativeInfo.affil}
        />

        <WorkButton
          imgSrc={heatmapButton}
          hoverSrc={heatmapButtonHover}
          img1Src={heatmapImage1}
          header={heatmapInfo.header}
          desc={heatmapInfo.desc}
          features={heatmapInfo.features}
          tools={heatmapInfo.tools}
          affil={heatmapInfo.affil}
        />

        <WorkButton
          imgSrc={abStandardsButton}
          hoverSrc={abStandardsButtonHover}
          img1Src={abstandardsImage1}
          img2Src={abstandardsImage2}
          header={abstandardsInfo.header}
          desc={abstandardsInfo.desc}
          features={abstandardsInfo.features}
          tools={abstandardsInfo.tools}
          affil={abstandardsInfo.affil}
        />
      </ButtonSection>

      <Header>Games</Header>
      <ButtonSection>
        <WorkButton
          imgSrc={unityButton}
          hoverSrc={unityButtonHover}
          img1Src={unityImage1}
          img2Src={unityImage2}
          header={unityInfo.header}
          desc={unityInfo.desc}
          features={unityInfo.features}
          tools={unityInfo.tools}
          affil={unityInfo.affil}
        />

        <WorkButton
          imgSrc={processingButton}
          hoverSrc={processingButtonHover}
          img1Src={processingImage1}
          img2Src={processingImage2}
          header={processingInfo.header}
          desc={processingInfo.desc}
          features={processingInfo.features}
          tools={processingInfo.tools}
          affil={processingInfo.affil}
        />

      </ButtonSection>
      <Footer style={{ backgroundColor: colors.grey }}>
        <SectionImage src={footer} />
      </Footer>
    </Container>
  );
}
