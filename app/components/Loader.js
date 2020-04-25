import React from 'react'
import styled from 'styled-components';
import DotLoader from "react-spinners/DotLoader";
import colors from './Colors';

const LoaderContainer = styled.div`
  display: flex;
  position: absolute;
  padding-left: 50%;
  padding-top: 25%;
`;

const LoaderItem = styled.div`
  flex: 1;
  width:120%;
  height:120%;
`;

class Loader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <LoaderContainer><LoaderItem><DotLoader color={colors.yellow}/></LoaderItem></LoaderContainer>
    );
  }
}

export default Loader
