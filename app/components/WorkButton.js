import React from 'react';
import styled from 'styled-components';
import Modal from 'react-responsive-modal';
import colors from './Colors';

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
  font-weight: 300;
`;

const SubHeader = styled.h4`
  font-size: 1em;
  font-weight: 600;
`;

const Content = styled.text`
  font-size: 1em;
  font-weight: 300;
`;

const Section = styled.div`
  display: flex;
  flex-direction: row;
`;

const PictureSection = styled.div`
  margin-top: 2%;
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
  justify-content: center;
  align-items: center;
`;

const Picture = styled.img`
  flex: 0.4;
  width: 80%;
  height: 70%;
  margin: 2%;
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
        <Modal style= {{transform: "translate3d(0, 0, 0);"}} open={this.state.open} onClose={this.onCloseModal}>
          <Section>
            <PictureSection>
              <PictureContainer>
                <Picture src={this.props.img1Src} />
                <Picture src={this.props.img2Src} />
              </PictureContainer>
            </PictureSection>
            <ContentSection>
              <Header>{this.props.header}</Header>
              <hr />
              <a href={this.props.link} target="_blank">
                <Content style={{ color: colors.blue }}>
                  {this.props.linkTitle}
                </Content>
              </a>
              <br/>
              <a href={this.props.link2} target="_blank">
                <Content style={{ color: colors.blue }}>
                  {this.props.linkTitle2}
                </Content>
              </a>
              <SubHeader>Project description:</SubHeader>
              <Content>{this.props.desc}</Content>
              <SubHeader>Key features:</SubHeader>
              <Content>{this.props.features}</Content>
              <SubHeader>Tools used:</SubHeader>
              <Content>{this.props.tools}</Content>
              <SubHeader>Affiliation:</SubHeader>
              <Content>{this.props.affil}</Content>
            </ContentSection>
          </Section>
        </Modal>
      </Container>
    );
  }
}

export default WorkButton;
