import React from 'react';

import Header from './../../components/Header'
import Search from './../../components/Search'
import ListHeroes from '../../components/ListHeroes'

import { Container } from './styles';

export default function Home() {
  

  return (
    <>
    <Header />
    <Container>
      <Search />
      <ListHeroes />
    </Container>
    </>
  );
}
