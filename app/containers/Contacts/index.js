/*
 * Contacts
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import styled from 'styled-components';
import NavBar from '../../components/NavBar';
import FooterTop from '../../components/FooterTop';
import FooterBottom from '../../components/FooterBottom';
import Loader from '../../components/Loader';
import colors from '../../components/Colors';
import '../../components/styles.css';

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

const SubSection = styled.div`
  flex:0.5;
`;


const Container = styled.div`
  width: 100%;
`;

const Header = styled.h1`
  flex: 1;
  text-align: center;
  font-weight: 300;
  font-size: 1.2em;
  padding-top: 2%;
  margin-bottom: -5%;
`;

const Underline = styled.h1`
  flex: 1;
  text-align: center;
  border-bottom: 1px solid #000;
  line-height: 0.1em;
  margin-left: 35%;
  margin-right: 35%;
`;

const SubHeaderContainer = styled.div`
  padding-top: 3%;
`;

const SubHeader = styled.text`
  font-size: 1em;
  font-weight: 600;
`;

const Content = styled.text`
  font-size: 1em;
  font-weight: 300;
`;

const Gap = styled.div`
  padding-bottom: 15%;
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
      ref={domRef}>
      {props.children}
    </Section>
  );
}

class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isLoading: false};
  }

  componentDidMount() {
    this.setState({isLoading: true});
    setTimeout(() => {
      this.setState({isLoading: false})
    }, 1000);
  }

  render() {

    if (this.state.isLoading) return <Loader/>;
    return (
      <Container>
        <NavBar />
        <FadeInSection>
          <Header>Let's get in touch!</Header>
        </FadeInSection>
        <FadeInSection>
          <Underline></Underline>
        </FadeInSection>
        <FadeInSection>
          <SubSection>picture here</SubSection>
          <SubSection>
            <SubHeaderContainer>
              <SubHeader>E-mail: </SubHeader><Content>sallymoon10@gmail.com</Content>
            </SubHeaderContainer>
            <SubHeaderContainer>
              <SubHeader>Linked-In: </SubHeader> <a href={"https://www.linkedin.com/in/sallysaeyoungmoon/"} target="_blank"><Content style={{ color: colors.blue}}>https://www.linkedin.com/in/sallysaeyoungmoon/</Content></a>
            </SubHeaderContainer>
            <SubHeaderContainer>
              <SubHeader>GitHub: </SubHeader><a href={"https://www.linkedin.com/in/sallysaeyoungmoon/"} target="_blank"><Content style={{ color: colors.blue}}>https://github.com/sallymoon10</Content></a>
            </SubHeaderContainer>
            <SubHeaderContainer>
              <SubHeader>IATSL (Lab) Profile: </SubHeader><a href={"https://www.iatsl.org/people/smoon.html"} target="_blank"><Content style={{ color: colors.blue}}>https://www.iatsl.org/people/smoon.html</Content></a>
            </SubHeaderContainer>
          </SubSection>
        </FadeInSection>
        <Gap/>
        <FooterTop/>
        <FooterBottom/>

      </Container>


    );
  }
}

export default Contacts;
