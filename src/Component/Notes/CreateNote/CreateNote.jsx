import React, { Component } from "react";
import { connect } from "react-redux";
import { createNotes, fetchNotes } from "../../../actions";

export class CreateNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newNote: {
        notesHeading: "",
        desc: "",
        id: ""
      },
      notesHeading: "Please edit this to add header in your notes",
      desc: ""
    };
  }

  componentDidMount() {
    this.props.fetchNotes();
  }

  handleChange = (event) => {
    if (event.currentTarget.id === "header") {
      this.setState({
        notesHeading: event.currentTarget.value,
        desc: this.state.desc
      });
    } else if (event.currentTarget.id === "desc") {
      this.setState({
        notesHeading: this.state.notesHeading,
        desc: event.currentTarget.value
      });
    }
  };

  createNote = () => {
    this.setState(
      {
        newNote: {
          notesHeading: this.state.notesHeading,
          desc: this.state.desc
        }
      },
      () => {
        this.props.createNotes(this.state.newNote);
      }
    );
  };
  render() {
    return (
      <form>
        <div className="form-group">
          <label>Note Header</label>
          <input
            type="text"
            className="form-control"
            id="header"
            placeholder="Notes Heading"
            defaultValue=""
            onChange={this.handleChange}
          />
        </div>

        <div className="form-group">
          <label>Note Desccription</label>
          <textarea
            className="form-control"
            id="desc"
            rows="3"
            onChange={this.handleChange}
            defaultValue=""
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.createNote}
        >
          Create
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return { myNotes: state.notes };
};

export default connect(
  mapStateToProps,
  { createNotes, fetchNotes }
)(CreateNote);
