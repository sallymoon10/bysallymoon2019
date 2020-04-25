/*
 * Design work page
 */

import React from 'react';
import styled from 'styled-components';
import NavBar from '../../components/NavBar';
import blueteamButton from '../../images/WorkButtons/BlueteamButton.png';
import blueteamButtonHover from '../../images/WorkButtons/BlueteamButtonHover.png';
import blueteamImage1 from '../../images/WorkImages/BlueTeamImage1.png';
import blueteamImage2 from '../../images/WorkImages/BlueTeamImage2.png';
import cadButton from '../../images/WorkButtons/CADButton.png';
import cadButtonHover from '../../images/WorkButtons/CADButtonHover.png';
import cadImage1 from '../../images/WorkImages/cadImage1.png';
import cadImage2 from '../../images/WorkImages/cadImage2.png';
import couerButton from '../../images/WorkButtons/CoeurButton.png';
import couerButtonHover from '../../images/WorkButtons/CoeurButtonHover.png';
import CouerImage1 from '../../images/WorkImages/CouerImage1.png';
import CouerImage2 from '../../images/WorkImages/CouerImage2.png';
import flaticonButton from '../../images/WorkButtons/FlatIconButton.png';
import flaticonButtonHover from '../../images/WorkButtons/FlatIconButtonHover.png';
import flaticonImage1 from '../../images/WorkImages/FlatIconsImage1.png';
import flaticonImage2 from '../../images/WorkImages/FlatIconsImage2.png';
import lineIconButton from '../../images/WorkButtons/LineIconButton.png';
import lineIconButtonHover from '../../images/WorkButtons/LineIconButtonHover.png';
import lineIconImage1 from '../../images/WorkImages/LineIconImage1.png';
import lineIconImage2 from '../../images/WorkImages/LineIconImage2.png';
import spacesquirrelButton from '../../images/WorkButtons/SpaceSquirrelButton.png';
import spacesquirrelButtonHover from '../../images/WorkButtons/SpaceSquirrelButtonHover.png';
import spacesquirrelImage1 from '../../images/WorkImages/spaceSquirrelAssetsImage1.png';
import spacesquirrelImage2 from '../../images/WorkImages/spaceSquirrelAssetsImage2.png';
import FooterTop from '../../components/FooterTop';
import FooterBottom from '../../components/FooterBottom';

import WorkButton from '../../components/WorkButton';
import Loader from '../../components/Loader';

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
  font-weight: 300;
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

const couerInfo = {
  header: 'Couer: Blood Pressure Tracking iOS app',
  desc: 'User-interface for a blood pressure tracking iOS app',
  features:
    'User dashboard to graphically track progress and set personal goals for regular blood pressure monitoring',
  tools: 'Figma, Adobe Illustrator',
  affil: 'University of Waterloo, 4th Year Capstone Project'
};

const blueteamInfo = {
  header: 'BlueTeam: Police incident reporting web app',
  desc: 'Re-design of CI-Technologies’ flagship project- Blueteam',
  features: 'Dark mode for added discreteness, components resize to scale',
  tools: 'HTML, Javascript, Bootstrap',
  affil: 'CI-Technologies, Internship'
};

const lineIconInfo = {
  header: 'Minimalistic icon package',
  desc: 'Minimalistic icon pack for mobile and web projects',
  features: 'Simple and intuitive design',
  tools: 'Procreate',
  affil: 'Personal project'
};

const flatIconInfo = {
  header: 'Flat icon / illustrations',
  desc:
    'Colorful 2D icons / illustrations for mobile and web apps, infographics, etc.',
  features: 'Simple and intuitive design',
  tools: 'Procreate, Adobe Illustrator',
  affil: 'Braze Mobility (Infographic), Internship'
};

const spacesquirrelInfo = {
  header: 'Game assets for Unity 3D game',
  desc:
    '3D assets for Space Squirrel- a touch screen game that lets players explore planets and play cognitively stimulating games for dementia prevention',
  features:
    'Low-poly and colorful 3D assets to encourage grandparents and grandchildren to play together',
  tools: 'Blender',
  affil: 'IATSL (Intelligent Assistive Technology and Systems), Internship'
};

const cadInfo = {
  header: 'CAD model for Brain MRI Coil ',
  desc:
    '3D printable coil shell for brain imaging that gives patients a peace of mind during testing.',
  features:
    'MRI coils can be protoytped onto the shell, making protyping and testing more efficient and effective.',
  tools: 'SolidWorks',
  affil: 'University of Alberta, Internship'
};

class DesignWork extends React.Component {
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
        <NavBar designState />
        <Gap />
        <Header>User Interface / UX designs</Header>
        <ButtonSection>
          <WorkButton
            imgSrc={couerButton}
            hoverSrc={couerButtonHover}
            img1Src={CouerImage1}
            img2Src={CouerImage2}
            header={couerInfo.header}
            desc={couerInfo.desc}
            features={couerInfo.features}
            tools={couerInfo.tools}
            affil={couerInfo.affil}
          />
          <WorkButton
            imgSrc={blueteamButton}
            hoverSrc={blueteamButtonHover}
            img1Src={blueteamImage1}
            img2Src={blueteamImage2}
            header={blueteamInfo.header}
            desc={blueteamInfo.desc}
            features={blueteamInfo.features}
            tools={blueteamInfo.tools}
            affil={blueteamInfo.affil}
          />
        </ButtonSection>

        <Header>2D Illustrations / 3D assets</Header>
        <ButtonSection>
          <WorkButton
            imgSrc={lineIconButton}
            hoverSrc={lineIconButtonHover}
            img1Src={lineIconImage1}
            img2Src={lineIconImage2}
            header={lineIconInfo.header}
            desc={lineIconInfo.desc}
            features={lineIconInfo.features}
            tools={lineIconInfo.tools}
            affil={lineIconInfo.affil}
          />

          <WorkButton
            imgSrc={flaticonButton}
            hoverSrc={flaticonButtonHover}
            img1Src={flaticonImage1}
            img2Src={flaticonImage2}
            header={flatIconInfo.header}
            desc={flatIconInfo.desc}
            features={flatIconInfo.features}
            tools={flatIconInfo.tools}
            affil={flatIconInfo.affil}
          />

          <WorkButton
            imgSrc={spacesquirrelButton}
            hoverSrc={spacesquirrelButtonHover}
            img1Src={spacesquirrelImage1}
            img2Src={spacesquirrelImage2}
            header={spacesquirrelInfo.header}
            desc={spacesquirrelInfo.desc}
            features={spacesquirrelInfo.features}
            tools={spacesquirrelInfo.tools}
            affil={spacesquirrelInfo.affil}
          />
          <WorkButton
            imgSrc={cadButton}
            hoverSrc={cadButtonHover}
            img1Src={cadImage1}
            img2Src={cadImage2}
            header={cadInfo.header}
            desc={cadInfo.desc}
            features={cadInfo.features}
            tools={cadInfo.tools}
            affil={cadInfo.affil}
          />
        </ButtonSection>
        <FooterTop/>
        <FooterBottom/>
      </Container>
    );
  }
}

export default DesignWork;
