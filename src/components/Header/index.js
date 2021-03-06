import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo-marvel.svg';

import { Container, Content } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <Link to="/">
          <img src={logo} alt="Marvel" />
        </Link>
      </Content>
    </Container>
  );
}
