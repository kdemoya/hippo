import React, { Component } from 'react';
import uuid from 'uuid/v4';
import '../styles/Editor.css';

class Editor extends Component {
  handleUpdate(active, update, event) {
    const noteId = active && active.id || uuid();
    const note = {
      id: noteId,
      text: event.target.value,
    };

    update(note);
  };

  render() {
    const { active, updateNote } = this.props;

    return (
      <div className="Editor">
        <textarea
          className="Text"
          name="editor"
          id="editor"
          placeholder="Add new note here"
          value={active.text}
          onChange={(event) => this.handleUpdate(active, updateNote, event)}
        />
      </div>
    );
  }
}

export default Editor;
