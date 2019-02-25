import React, { Component } from "react";
import { user } from "../../mockData/login";

import NotesList from "../Notes/NotesList/NotesList";
import { Route } from "react-router-dom";
import history from "../../history";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uname: "",
      pwd: "",
      isLogin: false
    };
  }
  login = (event) => {
    if (this.state.uname === user.user && this.state.pwd === user.password) {
      this.setState(
        {
          isLogin: !this.state.isLogin
        },
        () => {
          history.push("/notes");
        }
      );
    }
    event.preventDefault();
  };
  handleChange = (event) => {
    if (event.currentTarget.id === "login") {
      this.setState({
        uname: event.currentTarget.value
      });
    } else if (event.currentTarget.id === "password") {
      this.setState({
        pwd: event.currentTarget.value
      });
    }
  };
  render() {
    const { isLogin } = this.state;
    return (
      <div>
        <div className="wrapper fadeInDown">
          <div id="formContent">
            <div className="fadeIn first">
              <p>User Login</p>
            </div>

            <form>
              <input
                type="text"
                id="login"
                className="fadeIn second"
                name="login"
                placeholder="login"
                defaultValue=""
                onChange={this.handleChange}
              />
              <input
                type="text"
                id="password"
                className="fadeIn third"
                name="login"
                placeholder="password"
                onChange={this.handleChange}
                defaultValue=""
              />

              <input
                type="button"
                className="fadeIn fourth"
                value="Log In"
                onClick={this.login}
              />
            </form>
            {isLogin ? (
              <Route to="/notes" component={NotesList} />
            ) : (this.state.uname && this.state.uname !== "user@example.com") ||
              (this.state.pwd && this.state.pwd !== "1234") ? (
              <div>No user found</div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
