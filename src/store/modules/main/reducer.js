import produce from 'immer';

export const INITIAL_STATE = {
  charactersList: [],
};

export default function main(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@main/ADD_CHAR_TO_LIST': {
        draft.charactersList.push(action.payload.character);
        break;
      }
      default:
    }
  });
}
