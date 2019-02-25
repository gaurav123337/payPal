import React, { Component } from "react";
import { Router, Route } from "react-router-dom";

import Login from "./Component/Login/Login";
import NotesList from "./Component/Notes/NotesList/NotesList";
import CreateNote from "./Component/Notes/CreateNote/CreateNote";
import EditNotes from "./Component/Notes/EditNotes/EditNotes";

import history from "./history";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <div>
            <Route exact path="/" component={Login} />
            <Route exact path="/notes" component={NotesList} />
            <Route exact path="/createNotes" component={CreateNote} />
            <Route exact path="/notes/edit/:id" component={EditNotes} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
