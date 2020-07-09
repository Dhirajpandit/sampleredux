import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./components/login/loginpage";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as action from "../src/components/actions";
import PersonalDetail from "../src/components/PersonalDetails/InputDetaisl";

function App(props) {
  console.log(props);
  return (
    <div>{props.isLogin === true ? <PersonalDetail /> : <LoginPage />}</div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(action, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
