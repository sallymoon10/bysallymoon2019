import React from 'react';
import styled from 'styled-components';
import Modal from 'react-responsive-modal';

import CouerImage1 from '../images/WorkImages/CouerImage1.png'
import CouerImage2 from '../images/WorkImages/CouerImage2.png'

const Button = styled.button`
  border: none;
  outline: none;
`;

const Container = styled.div`
  flex: 0.2;
`;

const ButtonImage = styled.img`
  width: 100%;
  height: 100%;
`;

const Header = styled.h1`
  font-size: 1.5em;
  font-weight:300;
`;

const SubHeader = styled.h4`
  font-size: 1em;
  font-weight: 600;
`;

const Content = styled.text`
  font-size: 1em;
  font-weight:300;
`;

const Section = styled.div`
  display: flex;
  flex-direction: row;
`;

const PictureSection = styled.div`
  flex: 0.35;
  justify-content: center;
  align-items: center;
`;

const ContentSection = styled.div`
  flex: 0.6;
`;

const PictureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;

const Picture = styled.img`
  flex: 0.4;
  width: 80%;
  height: 70%;
  margin:2%;
  align-self: start;
`;



class WorkButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false, open: false };
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    let button;

    if (this.state.hover) {
      button = (
        <ButtonImage
          src={this.props.hoverSrc}
          onMouseOut={() => this.setState({ hover: false })}
          onMouseOver={() => this.setState({ hover: true })}
          onClick={this.onOpenModal}
          style={{
            transform: `${
              this.state.hover ? 'scale(1.05,1.05)' : 'scale(1,1)'
            }`,
          }}
        />
      );
    } else {
      button = (
        <ButtonImage
          src={this.props.imgSrc}
          onMouseOut={() => this.setState({ hover: false })}
          onMouseOver={() => this.setState({ hover: true })}
          onClick={this.onOpenModal}
          style={{
            transform: `${
              this.state.hover ? 'scale(1.05,1.05)' : 'scale(1,1)'
            }`,
          }}
        />
      );
    }
    return (
      <Container>
        <Button style={{ backgroundColor: 'transparent' }}>{button}</Button>
        <Modal open={this.state.open} onClose={this.onCloseModal}>

          <Section>
            <PictureSection>
              <PictureContainer>
                <Picture src ={CouerImage1}/>
                <Picture src ={CouerImage2}/>
              </PictureContainer>
            </PictureSection>
            <ContentSection>
              <Header>{this.props.header}</Header>
              <hr/>
              <SubHeader>Project description:</SubHeader>
              <Content>{this.props.desc}</Content>
              <SubHeader>Key features:</SubHeader>
              <Content>{this.props.features}</Content>
              <SubHeader>Tools used:</SubHeader>
              <Content>{this.props.tools}</Content>
            </ContentSection>
          </Section>
        </Modal>
      </Container>
    );
  }
}

export default WorkButton;
