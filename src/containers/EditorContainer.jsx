import { connect } from 'react-redux';
import Editor from '../components/Editor';
import { updateNote } from '../actions/notes';

function mapStateToProps(state) {
  return {
    active: state.notes.active,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateNote(note) {
      dispatch(updateNote(note));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor);