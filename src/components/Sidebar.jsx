import React, { Component } from 'react';
import uuid from 'uuid/v4';
import { map } from 'lodash';
import '../styles/Sidebar.css';

class Sidebar extends Component {
  renderList = (list, switchNote) => {
    if (!list) return null;
    return map(list, (note) => {
      const { id, text } = note;
      const title = text.length > 0 ? `${text.substring(0, 10)}...` : 'New Note';

      return (
        <div className="NoteListItem" onClick={() => switchNote(id)}>
          {title}
        </div>
      )
    });
  };

  render() {
    const { list, newNote, switchNote } = this.props;

    return (
      <div className="NotesWrapper">
        <div className="NoteList">
          {this.renderList(list, switchNote)}
        </div>
        <span className="ButtonAdd" onClick={() => newNote(uuid())}>NEW NOTE [+]</span>
      </div>
    );
  }
}

export default Sidebar;
