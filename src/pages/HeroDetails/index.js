import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from '../../components/Header';
 import Series from '../../components/Series';

import { Container, Content, Divider } from './style';

export default function HeroDetails({ match }) {
  const { id } = match.params;
  const character = useSelector(state => state.main.charactersList).find(
    c => c.id === Number(id)
  );

  const { name, description, thumbnail } = character;
  const imageSrc = `${thumbnail.path}.${thumbnail.extension}`;

  return (
    <>
    <Header />
      <Container data-testid="container">
        <div className="header" data-testid="header">
          <h1>Nome: {name}</h1>
          <Link to="/">
            <button type="button">Voltar</button>
          </Link>
          <Link to={`${id}/edit`}>
            <button type="button">Editar</button>
          </Link>
        </div>
        <Content>
          <img src={imageSrc} alt={name} />
          <p>
            <h1>Descriçāo:</h1>
            {description.trim().length > 0
              ? description.replace(/ï¿½/g, "'")
              : 'Esse herói nāo possui descriçāo cadastrada, clicando no botäo Editar.'}
          </p>
        </Content>
        <Divider/>
         <Series heroId={Number(id)} />
      </Container>
    </>
  );
}

HeroDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
