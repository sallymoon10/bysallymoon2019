import React from 'react'
import styled from 'styled-components';
import colors from './Colors';
import githubIcon from '../images/Buttons/githubIcon.png';
import linkedinIcon from '../images/Buttons/linkedinIcon.png';

const Footer = styled.div`
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

class FooterBottom extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Footer style={{ backgroundColor: colors.grey }}>
        <IconLeft href={"https://github.com/sallymoon10"} target="_blank">
          <IconImage src={githubIcon} />
        </IconLeft>
        <IconRight href={"https://www.linkedin.com/in/sallysaeyoungmoon/"} target="_blank">
          <IconImage src={linkedinIcon} />
        </IconRight>
      </Footer>
    );
  }
}

export default FooterBottom
