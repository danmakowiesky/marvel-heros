export function addCharacterToList(character) {
  return {
    type: '@main/ADD_CHAR_TO_LIST',
    payload: { character },
  };
}

export function editHero(character) {
  return {
    type: '@main/EDIT_HERO',
    payload: { character }
  };
}
