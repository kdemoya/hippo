import { NOTE_UPDATE, NOTE_SWITCH } from '../actions/notes';

const initialState = {
  list: [],
  active: {
    id: undefined,
    text: '',
  },
};

export function notes(currentState = initialState, { type: actionType, payload }) {
  switch (actionType) {
    case NOTE_UPDATE:
      const { id } = payload;
      return {
        ...currentState,
        list: { ...currentState.list, [id]: payload },
        active: payload,
      };
    case NOTE_SWITCH:
      return { ...currentState, active: currentState.list[payload.id] };
    default:
      return currentState;
  }
}