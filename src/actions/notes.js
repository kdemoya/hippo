export const NOTE_UPDATE = 'NOTE_UPDATE';
export const NOTE_SWITCH = 'NOTE_SWITCH';

export function updateNote(note) {
  return { type: NOTE_UPDATE, payload: note };
}

export function startNewNote(id) {
  return { type: NOTE_UPDATE, payload: { id: id, text: '' } };
}

export function switchNote(id) {
  return { type: NOTE_SWITCH, payload: { id: id } };
}