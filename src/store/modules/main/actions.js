export function addCharacterToList(character) {
  return {
    type: '@main/ADD_CHAR_TO_LIST',
    payload: { character },
  };
}
