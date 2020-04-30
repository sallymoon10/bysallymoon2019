/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import styled, {keyframes} from 'styled-components';
import { Link } from 'react-router-dom';
import colors from '../../components/Colors';
import NavBar from '../../components/NavBar';

import intro from '../../images/Landing/Intro.png';
import aiLanding from '../../images/Landing/AILandingSection.png';
import codeLanding from '../../images/Landing/CodeLandingSection.png';
import designLanding from '../../images/Landing/DesignLandingSection.png';
import letsWork from '../../images/Landing/LetsWork.png';
import ViewWorkButton from '../../images/Buttons/ViewWorkButton.png';
import ViewContactButton from '../../images/Buttons/ViewContactButton.png';
import FooterTop from '../../components/FooterTop';
import FooterBottom from '../../components/FooterBottom';
import Loader from '../../components/Loader';
import '../../components/styles.css';

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

function FadeInSection(props) {
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
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef} style={{ backgroundColor: colors.white}}>
      {props.children}
    </Section>
  );
}

function FadeInSectionRed(props) {
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
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef} style={{ backgroundColor: colors.red}}>
      {props.children}
    </Section>
  );
}

function FadeInSectionBlue(props) {
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
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef} style={{ backgroundColor: colors.blue}}>
      {props.children}
    </Section>
  );
}


class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { resumeButtonHover: false };
    this.state = { devWorkButtonHover: false };
    this.state = { designWorkButtonHover: false };
    this.state = { contactsButtonHover: false };
    this.state = {isLoading: false};
  }

  componentDidMount() {
    this.setState({isLoading: true});
    setTimeout(() => {
      this.setState({isLoading: false})
    }, 1200);
  }

  render() {

    if (this.state.isLoading) return <Loader/>;
    return (
      <Container>
        <NavBar />
        <FadeInSection  color={colors.red} >
          <Image src={intro} />
        </FadeInSection>

        <FadeInSectionRed>
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
        </FadeInSectionRed>

        <FadeInSectionBlue>
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
        </FadeInSectionBlue>

        <FadeInSectionRed>
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
        </FadeInSectionRed>
        <FadeInSection>
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
        </FadeInSection>
        <FooterTop/>
        <FooterBottom/>
      </Container>
    );
  }
}

export default HomePage;
