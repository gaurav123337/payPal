import React, { Component } from "react";
import { Link } from "react-router-dom";

export class NotesDesc extends Component {
  getUpdatedNotes = (myUpdatedNote) => {
    this.props.sendToNotesList(myUpdatedNote);
  };

  render() {
    const { myNote } = this.props;
    return (
      <div>
        {myNote.id !== "" && (
          <div>
            <div className="card">
              <div className="card-header">{myNote.notesHeading}</div>
              <div className="card-body">
                <p className="card-text">{myNote.desc}</p>
              </div>
            </div>

            <Link to={`/notes/edit/${myNote.id}`} className="ui button primary">
              Edit
            </Link>
          </div>
        )}
      </div>
    );
  }
}
export default NotesDesc;
