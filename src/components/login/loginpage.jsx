import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as action from "../actions/index";
const Login = (props) => {
  return (
    <div class="container">
      {props.isLogin === false ? window.alert("Username not valid") : ""}
      <label>Username : </label>
      <input
        type="text"
        placeholder="Enter Username"
        name="username"
        required
        onChange={(e) => props.usernameChange(e)}
      />
      <label>Password : </label>
      <input
        type="password"
        placeholder="Enter Password"
        name="password"
        required
        onChange={(e) => props.passwordChange(e)}
      />
      <button
        type="submit"
        onClick={(e) => props.loginOnClick(props.username, props.password)}
      >
        Login
      </button>
      <button type="button" className="cancelbtn">
        Cancel
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(action, dispatch);
};

const LoginPage = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginPage;
