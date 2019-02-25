import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import NotesDesc from "../NotesDesc/NotesDesc";
import { fetchNotes } from "../../../actions";

export class NotesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      selectedNote: {
        notesHeading: "",
        desc: "",
        id: ""
      }
    };
  }

  componentDidMount() {
    this.props.fetchNotes();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.myNotes.notesList.length) {
      this.setState({
        notes: nextProps.myNotes.notesList
      });
    }
  }

  getDesc = (id) => {
    const clickedNote = this.state.notes.filter((myNote) => {
      return id === myNote.id && myNote;
    });
    this.setState({ selectedNote: clickedNote[0] });
  };

  render() {
    const { selectedNote } = this.state;
    const { myNotes } = this.props;
    if (!myNotes.notesList) {
      return <div>Loading...</div>;
    }

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3">
            <ul className="list-group">
              {myNotes.notesList.map((note, index) => {
                return (
                  <li
                    className="list-group-item"
                    key={index}
                    onClick={() => this.getDesc(note.id)}
                  >
                    {note.notesHeading}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-sm-9">
            <h3>Click any note in list to get desccription</h3>
            <NotesDesc
              myNote={selectedNote}
              sendToNotesList={this.getUpdatedNote}
            />
          </div>
        </div>

        <Link
          type="button"
          className="btn btn-primary  float-left"
          to="/createNotes"
        >
          Create Note
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { myNotes: state };
};

export default connect(
  mapStateToProps,
  { fetchNotes }
)(NotesList);
