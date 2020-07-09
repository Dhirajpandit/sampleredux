import React from "react";
import * as action from "../actions/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const InputDetails = (props) => {
  return (
    <div>
      <label>First Name : </label>
      <input
        type="text"
        placeholder="First Name"
        name="firstname"
        required
        onChange={(e) => props.firstNameChange(e)}
      />
      <label>Middle Name : </label>
      <input
        type="text"
        placeholder="Middle Name"
        name="middleName"
        required
        onChange={(e) => props.middleNameChange(e)}
      />
      <label>Middle Name : </label>
      <input
        type="text"
        placeholder="Last Name"
        name="lastname"
        required
        onChange={(e) => props.lastNameChange(e)}
      />
      <br />
      <br />
      <div>
        <h1>Personal Information</h1>
        <hr></hr>
        <br />
        <label>First Name : {props.firstName}</label>
        <br />
        <label>Middle Name: {props.middleName}</label>
        <br />
        <label>Last Name : {props.lastName}</label>
      </div>
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

const PersonalDetail = connect(
  mapStateToProps,
  mapDispatchToProps
)(InputDetails);

export default PersonalDetail;
