import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

 import { Container, Name, Image } from './style';

export default function InfoHero({character}) {
  const { id, name, thumbnail } = character;
  const img = `${thumbnail.path}.${thumbnail.extension}`;
  return (
    <Link data-testid="link" to={`/details/${id}`}>
      <Container data-testid="container">
        <Image data-testid="image" src={img} alt={name} />
        <Name data-testid="name">{name}</Name>
      </Container>
    </Link>
  );
}

InfoHero.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    thumbnail: PropTypes.shape({
      path: PropTypes.string,
      extension: PropTypes.string,
    }),
  }).isRequired,
};
