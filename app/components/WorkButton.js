import React from 'react';
import styled from 'styled-components';


const Button = styled.button`
  flex: 0.2;
  border:none;
`;

const ButtonImage = styled.img`
  width: 100%;
  height: 100%;
`;


class WorkButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hover: false};
  }

  render() {
    const isHover = this.state.hover;
    let button;

    if (isHover){
      button =
        <ButtonImage
          src={this.props.hoverSrc}
          onMouseOut={() => this.setState({hover: false})}
          onMouseOver={() => this.setState({hover: true})}
          style={{transform: `${this.state.hover ? 'scale(1.05,1.05)' : 'scale(1,1)'}`}}>
        </ButtonImage>;
    }
    else{
      button =
        <ButtonImage
          src={this.props.imgSrc}
          onMouseOut={() => this.setState({hover: false})}
          onMouseOver={() => this.setState({hover: true})}
          style={{transform: `${this.state.hover ? 'scale(1.05,1.05)' : 'scale(1,1)'}`}}>
        </ButtonImage>;
    }
    return (
      <Button style={{backgroundColor: 'transparent'}}>
        {button}
      </Button>
      );
  }
}

export default WorkButton
