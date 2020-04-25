/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import colors from '../../components/Colors';
import NavBar from '../../components/NavBar';

import intro from '../../images/Landing/Intro.png';
import aiLanding from '../../images/Landing/AILandingSection.png';
import codeLanding from '../../images/Landing/CodeLandingSection.png';
import designLanding from '../../images/Landing/DesignLandingSection.png';
import letsWork from '../../images/Landing/LetsWork.png';
import footer from '../../images/Landing/Footer.png';
import ViewWorkButton from '../../images/Buttons/ViewWorkButton.png';
import ViewContactButton from '../../images/Buttons/ViewContactButton.png';
import githubIcon from '../../images/Buttons/githubIcon.png';
import linkedinIcon from '../../images/Buttons/linkedinIcon.png';

const Container = styled.div`
  width: 100%;
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

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justifyContent: center;
  alignItems: center;
  padding-right: 3%;
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

const FooterTop = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 2%;
  padding-bottom: 1%;
  justifycontent: center;
  alignitems: center;
`;

const FooterBottom = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 10%;
  padding-right: 10%;
  padding-bottom: 5%;
  justifycontent: center;
  alignitems: center;
`;

const IconLeft = styled.a`
  width: 80%;
  height: 80%;
  margin-left: 45%;
`;

const IconRight = styled.a`
  width: 80%;
  height: 80%;
  margin-right: 45%;
`;

const IconImage = styled.img`
  width: 70%;
  height: 70%;
`;

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { resumeButtonHover: false };
    this.state = { devWorkButtonHover: false };
    this.state = { designWorkButtonHover: false };
    this.state = { contactsButtonHover: false };
  }

  render() {
    return (
      <Container>
        <NavBar />
        <Section style={{ backgroundColor: colors.white }}>
          <Image src={intro} />
        </Section>
        <Section style={{ backgroundColor: colors.red }}>
          <SectionImage src={aiLanding} />
          <RightButton style={{ backgroundColor: 'transparent' }}>
            <Link to="/devwork">
              <ButtonImage
                src={ViewWorkButton}
                onMouseOut={() => this.setState({ devWorkButtonHover: false })}
                onMouseOver={() => this.setState({ devWorkButtonHover: true })}
                style={{
                  transform: `${
                    this.state.devWorkButtonHover
                      ? 'scale(1.05,1.05)'
                      : 'scale(1,1)'
                  }`,
                }}
              />
            </Link>
          </RightButton>
        </Section>
        <Section style={{ backgroundColor: colors.blue }}>
          <SectionImage src={codeLanding} />
          <LeftButton style={{ backgroundColor: 'transparent' }}>
            <Link to="/devwork">
              <ButtonImage
                src={ViewWorkButton}
                onMouseOut={() => this.setState({ devWorkButtonHover: false })}
                onMouseOver={() => this.setState({ devWorkButtonHover: true })}
                style={{
                  transform: `${
                    this.state.devWorkButtonHover
                      ? 'scale(1.05,1.05)'
                      : 'scale(1,1)'
                  }`,
                }}
              />
            </Link>
          </LeftButton>
        </Section>
        <Section style={{ backgroundColor: colors.red }}>
          <SectionImage src={designLanding} />
          <RightButton style={{ backgroundColor: 'transparent' }}>
            <Link to="/designwork">
              <ButtonImage
                src={ViewWorkButton}
                onMouseOut={() =>
                  this.setState({ designWorkButtonHover: false })
                }
                onMouseOver={() =>
                  this.setState({ designWorkButtonHover: true })
                }
                style={{
                  transform: `${
                    this.state.designWorkButtonHover
                      ? 'scale(1.05,1.05)'
                      : 'scale(1,1)'
                  }`,
                }}
              />
            </Link>
          </RightButton>
        </Section>
        <Section style={{ backgroundColor: colors.white }}>
          <SectionImage src={letsWork} />
          <CenterButton style={{ backgroundColor: 'transparent' }}>
            <Link to="/contacts">
              <ButtonImage
                src={ViewContactButton}
                onMouseOut={() => this.setState({ contactsButtonHover: false })}
                onMouseOver={() => this.setState({ contactsButtonHover: true })}
                style={{
                  transform: `${
                    this.state.contactsButtonHover
                      ? 'scale(1.05,1.05)'
                      : 'scale(1,1)'
                  }`,
                }}
              />
            </Link>
          </CenterButton>
        </Section>

        <FooterTop style={{ backgroundColor: colors.grey }}>
          <SectionImage src={footer} />
        </FooterTop>
        <FooterBottom style={{ backgroundColor: colors.grey }}>
          <IconLeft href={"https://github.com/sallymoon10"} target="_blank">
            <IconImage src={githubIcon} />
          </IconLeft>
          <IconRight href={"https://www.linkedin.com/in/sallysaeyoungmoon/"} target="_blank">
            <IconImage src={linkedinIcon} />
          </IconRight>
        </FooterBottom>
      </Container>
    );
  }
}

export default HomePage;
