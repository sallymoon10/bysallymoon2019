import React from 'react';
import styled from 'styled-components';
import Modal from 'react-responsive-modal';

const Button = styled.button`
  border: none;
`;

const Container = styled.div`
  flex: 0.2;
`;

const ButtonImage = styled.img`
  width: 100%;
  height: 100%;
`;

const Header = styled.h1`
  font-size: 1.2em;
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
          onClick={this.onOpenModal}
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
          <h2>Simple centered modal</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
            hendrerit risus, sed porttitor quam.
          </p>
        </Modal>
      </Container>
    );
  }
}

export default WorkButton;
