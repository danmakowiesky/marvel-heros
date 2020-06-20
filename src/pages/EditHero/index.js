import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { editHero } from '../../store/modules/main/actions';

import { Container, Header, Content, FormEdit, InputText } from './style';


export default function EditHero({match, history}) {
  const dispatch = useDispatch();
  const { id } = match.params;
  const character = useSelector(state => state.main.charactersList).find(
    c => c.id === Number(id)
  );

  const { name, thumbnail } = character;
  const imageSrc = `${thumbnail.path}.${thumbnail.extension}`;

  function handleSubmit(data) {
    character.description = data.description;
    dispatch(editHero(character));
    history.push(`/details/${id}`);
  }

  return (
    
    <Container>
      <Header>
        <h1>Editar {name}</h1>
      </Header>
      <Content>
        <img src={imageSrc} alt={name} />
        <FormEdit
          data-testid="form"
          initialData={character}
          onSubmit={handleSubmit}
        >
          <InputText
            data-testid="description"
            name="description"
            className="description"
            multiline
          />
         
          <button type="submit">
            Salvar
          </button>
        </FormEdit>
  
      </Content>
    </Container>
  );
}
