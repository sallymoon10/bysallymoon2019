import React from 'react'
import styled from 'styled-components';
import footer from '../images/Landing/Footer.png';
import colors from './Colors';

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 2%;
  padding-bottom: 1%;
  justifycontent: center;
  alignitems: center;
`;

const SectionImage = styled.img`
  width: 80%;
  height: 80%;
  flex: 1;
`;

class FooterTop extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Footer style={{ backgroundColor: colors.grey }}>
        <SectionImage src={footer} />
      </Footer>
    );
  }
}

export default FooterTop
