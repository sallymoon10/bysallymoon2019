/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import styled from 'styled-components';
import NavBar from '../../components/NavBar';

const Container = styled.div`
  width: 100%;
`;

export default function Contacts() {
  return (
    <Container>
      <NavBar contactsState={true}/>
      contacts
    </Container>
  );
}
