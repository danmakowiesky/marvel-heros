import React ,{useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import api from '../../services/api';

import { addCharacterToList } from '../../store/modules/main/actions';

import { SideMenu, Hero } from './style';

function Search() {
  const [search, setSearch] = useState('');
  const [queryResults, setQueryResults] = useState([]);

  const dispatch = useDispatch();
  const charactersList = useSelector(state => state.main.charactersList);

  useEffect(() => {
    async function loadCharacters() {

      const response = await api.get('v1/public/characters', {
        params: {
          nameStartsWith: search,
        },
      });

      const { results } = response.data.data;

      setQueryResults(results);
    }

    if (search !== '') {
      loadCharacters();
    }
  }, [search]);

  function handleSearch(e) {
    const { value } = e.target;

    if (value.length) {
      setSearch(value);
    } else {
      setQueryResults([]);
    }
  }

  function handleAddCharacter(id) {
    const charIsInList = !!charactersList.find(c => c.id === id);
    if (!charIsInList) {
      const character = queryResults.find(c => c.id === id);
      dispatch(addCharacterToList(character));
    }
  }

  return (
    <SideMenu>
        <h1>Buscar Super-Herói</h1>
        <input placeholder="Digite aqui o nome do super-herói" onChange={handleSearch} />
        {
           queryResults.map(result => (
              <Hero
                key={result.id}
                onClick={() => handleAddCharacter(result.id)}
              >
                <img
                  src={`${result.thumbnail.path}.${result.thumbnail.extension}`}
                  alt={result.name}
                />
                <p>{result.name}</p>
              </Hero>
            ))}
      </SideMenu>
  );
}

export default Search;