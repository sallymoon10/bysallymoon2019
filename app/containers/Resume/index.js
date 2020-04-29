/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import styled from 'styled-components';
import NavBar from '../../components/NavBar';
import colors from '../../components/Colors';
import Loader from '../../components/Loader';
import FooterTop from '../../components/FooterTop';
import FooterBottom from '../../components/FooterBottom';
import CV1 from "../../documents/SallyMoonCV1.jpg"
import CV2 from "../../documents/SallyMoonCV2.jpg"

const Container = styled.div`
  width: 100%;
`;

const Section = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 20%;
  padding-right: 20%;
  justifyContent: center;
  alignItems: center;
`;

const SectionImage = styled.img`
  width: 80%;
  height: 80%;
  flex: 1;
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

class Resume extends React.Component {
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
        <NavBar resumeState/>
        <FadeInSection  color={colors.red} >
          <SectionImage src={CV1} />
        </FadeInSection>
        <FadeInSection  color={colors.red} >
          <SectionImage src={CV2} />
        </FadeInSection>

        <FooterTop/>
        <FooterBottom/>
      </Container>
    );
  }
}

export default Resume;
