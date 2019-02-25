import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchNotes, editNotes } from "../../../actions";

export class EditNotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updatedNote: {
        notesHeading: "",
        desc: "",
        id: ""
      },
      notesHeading: "",
      desc: ""
    };
  }

  componentDidMount() {
    this.props.fetchNotes(this.props.match.params.id);
  }

  handleChange = (event) => {
    const { myNotes } = this.props;
    if (event.currentTarget.id === "header") {
      this.setState({
        notesHeading: event.currentTarget.value,
        desc: this.state.desc || myNotes.desc
      });
    } else if (event.currentTarget.id === "desc") {
      this.setState({
        notesHeading: this.state.notesHeading || myNotes.notesHeading,
        desc: event.currentTarget.value
      });
    }
  };

  saveNote = () => {
    const { myNotes } = this.props;
    this.setState(
      {
        updatedNote: {
          id: myNotes.id,
          notesHeading: this.state.notesHeading,
          desc: this.state.desc
        }
      },
      () => {
        this.props.editNotes(
          this.props.match.params.id,
          this.state.updatedNote
        );
      }
    );
  };

  render() {
    const { myNotes } = this.props;
    return (
      <form>
        <div className="form-group">
          <label>Note Header</label>
          <input
            key={myNotes.id}
            type="text"
            className="form-control"
            id="header"
            placeholder="Notes Heading"
            defaultValue={myNotes.notesHeading}
            onChange={this.handleChange}
          />
        </div>

        <div className="form-group">
          <label>Note Desccription</label>
          <textarea
            key={myNotes.id}
            className="form-control"
            id="desc"
            rows="3"
            onChange={this.handleChange}
            defaultValue={myNotes.desc}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.saveNote}
        >
          Save
        </button>
      </form>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  const selectedNote = state.notesList.filter((note) => {
    if (note.id === parseInt(ownProps.match.params.id)) {
      return note;
    }
  });
  return { myNotes: selectedNote[0] };
};

export default connect(
  mapStateToProps,
  { fetchNotes, editNotes }
)(EditNotes);
