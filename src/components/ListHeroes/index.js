import React from 'react';
import { useSelector } from 'react-redux';

import InfoHero from '../InfoHero'

import { Container, Title } from './style';

export default function ListHeroes() {
  let characters = useSelector(state => state.main.charactersList);

  return (
    <Container>
      {characters.length === 0 ?
        (<Title>Nenhum Herói foi pesquisado!!!</Title>) : 
        (<Title>Heróis Pesquisados</Title>)
      }
      <div>
        {characters.length > 0 &&
          characters.map(item => (
            <InfoHero character={item} key={item.id} />
          ))}
      </div>
    </Container>
  );
}
