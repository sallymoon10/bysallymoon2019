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
import mimicButton from '../../images/WorkButtons/MimicButton.png';
import mimicButtonHover from '../../images/WorkButtons/MimicButtonHover.png';
import mimicImage1 from '../../images/WorkImages/mimicImage1.png';
import msBertButton from '../../images/WorkButtons/MsbertButton.png';
import msBertButtonHover from '../../images/WorkButtons/MsbertButtonHover.png';
import msBertImage1 from '../../images/WorkImages/MsbertImage1.png';
import allenNLPButton from '../../images/WorkButtons/AllennlpButton.png';
import allenNLPButtonHover from '../../images/WorkButtons/AllennlpButtonHover.png';
import allenNLPImage1 from '../../images/WorkImages/AllenNLPImage1.png';
import snorkelButton from '../../images/WorkButtons/SnorkelButton.png';
import snorkelButtonHover from '../../images/WorkButtons/SnorkelButtonHover.png';
import snorkelImage1 from '../../images/WorkImages/SnorkelImage1.png';
import WorkButton from '../../components/WorkButton';
import Loader from '../../components/Loader';
import FooterTop from '../../components/FooterTop';
import FooterBottom from '../../components/FooterBottom';
import '../../components/styles.css';

const Container = styled.div`
  width: 100%;
`;

const ButtonSection = styled.div`
  display: flex;
  flex-direction: row;
  justifycontent: center;
  alignitems: center;
  padding-left: 10%;
  padding-right: 10%;
  padding-bottom: 2%;
  padding-top: 2%;
`;

const Header = styled.h1`
  flex: 1;
  text-align: center;
  font-weight: 300;
  font-size: 1.2em;
  padding-top: 2%;
  margin-bottom: -5%;
`;

const Section = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 2%;
  padding-bottom: 2%;
  justifyContent: center;
  alignItems: center;
`;


const Underline = styled.h1`
  flex: 1;
  text-align: center;
  border-bottom: 1px solid #000;
  line-height: 0.1em;
  margin-left: 35%;
  margin-right: 35%;
`;

const mimicInfo = {
  header: 'NLP model to predict ICU mortality given clinical data (MIMIC III)',
  desc:
    'Developed TFIDF representations of clinical notes present in MIMIC III to predict ICU mortality. Analyzed fairness (parity gap, recall gap, specificity gap) based on gender.',
  features: 'Achieved ~87% AUC score in predicting ICU mortality.',
  tools:
    'Python, SkLearn (nltk, CountVectorizer, TfidfTransformer, LogisticRegression), Pandas, Numpy.',
  affil:
    'University of Toronto, CSC2541 (Machine Learning for Healthcare). Note: code could not be published due to restrictions set by the course instructors. ',
};

const msbertInfo = {
  header: 'MS-BERT: pre-trained language model for clinical NLP ',
  link: 'https://huggingface.co/NLP4H/ms_bert',
  linkTitle: 'Model download',
  link2: 'https://medium.com/@nlp4health/ms-bert-using-neurological-examination-notes-for-multiple-sclerosis-severity-classification-f75f13600d3e',
  linkTitle2: ' Blog post',
  desc:
    'MS-BERT is a contextual language model built upon Blue-BERT (NCBI BERT). It was further pretrained on ~70k clinical examination notes from Multiple Sclerosis clinic at St. Michael’s Hospital.',
  features:
    'MS-BERT is optimized for clinical NLP tasks, particularly those pertaining to multiple sclerosis. MS-BERT is published for research and commercial use and has 500+ downloads to date. ',
  tools: 'HuggingFace Transformers, Blue-BERT, BERT.',
  affil:
    'NLP4H (Organization), St. Michael’s Hospital, University of Toronto (Dr. Marzyeh).',
};

const allenNLPInfo = {
  header:
    'NLP model built with AllenNLP to predict MS severity from clinical text',
  desc:
    'An NLP model that predicts EDSS (Expanded disability status scale), MS subtype, recent and future relapse given a patient’s clinical examination note. The clinical text was embedded into token id’s using the MS-BERT language model. ',
  features:
    'Significantly outperformed baseline (Word2Vec) classifiers on all prediction tasks, delivering state-of-the-art results. ',
  tools: 'Allen-NLP, MS-BERT, HuggingFace Transformers.',
  affil:
    'NLP4H (Organization), St. Michael’s Hospital, University of Toronto (Dr. Marzyeh).',
};

const snorkelInfo = {
  header:
    'Semi-supervised labelling of neurology examination notes using Snorkel',
  desc:
    'A Snorkel pipeline to label neurology examination notes based on MS severity types (EDSS, functional subscores, etc). Implemented various labelling functions such as regex-based keyword searches and a CNN model trained on manual labelled data.',
  features:
    'Labelled ~70k neurology notes,  significantly increasing the amount of training data available. The performance of the classifier trained on Snorkel-labelled data (weighted  F1: 0.91) was comparable to the performance of the classifier trained on manual-labelled data (weighted F1: 0.94), and therefore proved its potential to replace expensive manual labelling processes. ',
  tools: 'Snorkel.',
  affil:
    'NLP4H (Organization), St. Michael’s Hospital, University of Toronto (Dr. Marzyeh).',
};

const resnetInfo = {
  header: 'CNN transfer learning model for medical image classification',
  link: 'https://github.com/sallymoon10/ResnetImageClassification',
  linkTitle: 'Github repo',
  desc:
    'CNN model implemented with transfer learning (ResNet 50) that classifies medical images with categorical labels. The model obtained highest accuracy for the kaggle challenge with f-score of 1.0. ',
  features:
    'Key components of the model included: weight initialization with ImageNet, pooling with GlobalAveragePooling2D, dropout of 0.7, and optimizing with the Adam optimizer. ',
  tools: 'Google colab, Python, Keras, Sklearn, Pandas, Resnet50.',
  affil:
    'University of Waterloo, 4th year course (Introduction to Machine Intelligence).',
};

const imageClassificationInfo = {
  header: 'Unsupervised clustering algorithms for image classification',
  link: 'https://github.com/sallymoon10/Image-Classification',
  linkTitle: 'Github repo',
  desc: 'MICD / K-means algorithm to classify 10 types of textures images.',
  features:
    'Determined how pixels are classified by using color maps and evaluated the probability of error and construct confusion matrices for each method.',
  tools: 'Matlab',
  affil:
    'University of Waterloo, 3rd year Course (Introduction to Pattern Recognition).',
};

const earModelInfo = {
  header: 'Hearing mechanism simulation algorithm',
  link:
    'https://github.com/sallymoon10/Cochlear-Ear-Mechanics-Model-Simulation',
  linkTitle: 'Github repo',
  desc:
    'Modelling cochlear mechanics state-space model on Matlab. Modelled hearing by evaluating stapes displacements at various pressure levels.',
  features:
    'Simulated how otosclerosis affects hearing by simulating ear models with various severities of otosclerosis.',
  tools: 'Matlab.',
  affil:
    'University of Waterloo, 3rd year Course (Anatomical Systems Modelling).',
};

const reactNativeInfo = {
  header: 'Mobile app for powered wheelchair driver training ',
  desc:
    'An android / iOS mobile app to train powered wheelchair users to navigate tight spaces with the Braze Sentina wheelchair sensors',
  features:
    'Implemented calibration system to test out output signals (light, vibration, sound) of the Braze Sentina. Trains users to use signals to drive safely in a variety of tight navigation scenarios. ',
  tools: 'React Native.',
  affil:
    'Braze Mobility, Internship. Note: code could not be publicized due to restrictions.',
};

const heatmapInfo = {
  header: 'EI Pro: heatmap body injury location feature',
  desc:
    'A feature for EI Pro that visualizes which body parts police officers are targetting during arrest and conflict.',
  features:
    'Allows governing bodies to determine whether police officers are using force in safe areas.',
  tools: 'JavaScript, Heatmap.js, JSON.',
  affil:
    'CI Technologies, Internship. Note: code could not be publicized due to restrictions.',
};

const abstandardsInfo = {
  header: 'ABStandards: Police incident reporting app',
  desc:
    'A web application that generates professional reports with visual graphs and data tables for police incidents.',
  features:
    'Allows you to custom define your search parameters. Both front-end and back-end implementation was developed throughout the duration of the internship.',
  tools: 'Java, JavaScript, HTML, Chart.js.',
  affil:
    'CI Technologies, Internship. Note: code could not be publicized due to restrictions.',
};

const unityInfo = {
  header: 'Space Squirrel: touch-screen game for demential prevention',
  desc:
    'A multi-touch screen game that helps prevents onset of dementia with cognitively stimulating games. Allows multiple users to explore new plants as squirrel characters and unlock new regions by playing games. ',
  features:
    'Fun and intuitive game play allows grandchildren and grandparents to play together and bond, motivating participation from seniors. ',
  tools: 'Unity 3D, Blender, Multitouch Digital.',
  affil:
    'IATSL (Intelligent Assistive Technology and Systems), Internship. Note: code could not be publicized due to restrictions.',
};

const processingInfo = {
  header: 'MilkyWay: Game for children with cerebral palsy',
  desc:
    'Collaborative & fun game design that accomodates children with cerebral palsy. Players launch into outer space to save space cows. ',
  features:
    'Adaptive controller design and team-oriented game play that accomodates for physical and intellectual disabilities.',
  tools:
    'Processing, Arduino (accelerometer, buttons, potentiometer, sliders), Adobe Illustrator.',
  affil: 'University of Waterloo, 3rd Year design project.',
};

function FadeInSectionSmall(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <Section
      className={`fade-in-section-small ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}>
      {props.children}
    </Section>
  );
}

function FadeInButtonSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <ButtonSection
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}>
      {props.children}
    </ButtonSection>
  );
}


class DevWork extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isLoading: false};
  }

  componentDidMount() {
    this.setState({isLoading: true});
    setTimeout(() => {
      this.setState({isLoading: false})
    }, 500);
  }

  render() {
    if (this.state.isLoading) return <Loader/>;

    return (
      <Container>
        <NavBar devState/>
        <FadeInSectionSmall>
          <Header>Machine Learning / AI</Header>
        </FadeInSectionSmall>
        <FadeInSectionSmall>
          <Underline/>
        </FadeInSectionSmall>

        <FadeInButtonSection>
          <WorkButton
            imgSrc={msBertButton}
            hoverSrc={msBertButtonHover}
            img1Src={msBertImage1}
            link={msbertInfo.link}
            linkTitle={msbertInfo.linkTitle}
            link2={msbertInfo.link2}
            linkTitle2={msbertInfo.linkTitle2}
            header={msbertInfo.header}
            desc={msbertInfo.desc}
            features={msbertInfo.features}
            tools={msbertInfo.tools}
            affil={msbertInfo.affil}
          />

          <WorkButton
            imgSrc={allenNLPButton}
            hoverSrc={allenNLPButtonHover}
            img1Src={allenNLPImage1}
            header={allenNLPInfo.header}
            desc={allenNLPInfo.desc}
            features={allenNLPInfo.features}
            tools={allenNLPInfo.tools}
            affil={allenNLPInfo.affil}
          />

          <WorkButton
            imgSrc={snorkelButton}
            hoverSrc={snorkelButtonHover}
            img1Src={snorkelImage1}
            header={snorkelInfo.header}
            desc={snorkelInfo.desc}
            features={snorkelInfo.features}
            tools={snorkelInfo.tools}
            affil={snorkelInfo.affil}
          />

          <WorkButton
            imgSrc={mimicButton}
            hoverSrc={mimicButtonHover}
            img1Src={mimicImage1}
            header={mimicInfo.header}
            desc={mimicInfo.desc}
            features={mimicInfo.features}
            tools={mimicInfo.tools}
            affil={mimicInfo.affil}
          />

          <WorkButton
            imgSrc={resnetButton}
            hoverSrc={resnetButtonHover}
            img1Src={resnetImage1}
            img2Src={resnetImage2}
            link={resnetInfo.link}
            linkTitle={resnetInfo.linkTitle}
            header={resnetInfo.header}
            desc={resnetInfo.desc}
            features={resnetInfo.features}
            tools={resnetInfo.tools}
            affil={resnetInfo.affil}
          />
        </FadeInButtonSection>

        <FadeInButtonSection>
          <WorkButton
            imgSrc={imageClassificationButton}
            hoverSrc={imageClassificationButtonHover}
            img1Src={imageClassificationImage1}
            img2Src={imageClassificationImage2}
            link={imageClassificationInfo.link}
            linkTitle={imageClassificationInfo.linkTitle}
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
            link={earModelInfo.link}
            linkTitle={earModelInfo.linkTitle}
            header={earModelInfo.header}
            desc={earModelInfo.desc}
            features={earModelInfo.features}
            tools={earModelInfo.tools}
            affil={earModelInfo.affil}
          />
        </FadeInButtonSection>

        <FadeInSectionSmall>
          <Header>Mobile & Web Apps</Header>
        </FadeInSectionSmall>
        <FadeInSectionSmall>
          <Underline/>
        </FadeInSectionSmall>

        <FadeInButtonSection>
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
        </FadeInButtonSection>

        <FadeInSectionSmall>
          <Header>Games</Header>
        </FadeInSectionSmall>
        <FadeInSectionSmall>
          <Underline/>
        </FadeInSectionSmall>
        <FadeInButtonSection>
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
        </FadeInButtonSection>
        <FooterTop/>
        <FooterBottom/>
      </Container>
    );
  }
}

export default DevWork;
