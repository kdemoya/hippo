import { connect } from 'react-redux';
import Sidebar from '../components/Sidebar';
import { updateNote, startNewNote, switchNote } from '../actions/notes';

function mapStateToProps(state) {
  return {
    list: state.notes.list,
    active: state.notes.active,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateNote(note) {
      dispatch(updateNote(note));
    },
    newNote(id) {
      dispatch(startNewNote(id));
    },
    switchNote(id) {
      dispatch(switchNote(id));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);