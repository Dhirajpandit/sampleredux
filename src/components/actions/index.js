import {
  USERNAME,
  PASSWORD,
  LOGIN,
  FIRST_NAME,
  MIDDLE_NAME,
  LAST_NAME,
} from "../types/types";

export function usernameChange(event) {
  return {
    type: USERNAME,
    username: event.target.value,
    isLogin: "",
  };
}

export function passwordChange(event) {
  return {
    type: PASSWORD,
    password: event.target.value,
    isLogin: "",
  };
}

export function loginOnClick(username, password) {
  return {
    type: LOGIN,
    isLogin: username === "admin" && password === "admin" ? true : false,
  };
}

export function firstNameChange(event) {
  return {
    type: FIRST_NAME,
    firstname: event.target.value,
  };
}
export function middleNameChange(event) {
  return {
    type: MIDDLE_NAME,
    middlename: event.target.value,
  };
}
export function lastNameChange(event) {
  return {
    type: LAST_NAME,
    lastname: event.target.value,
  };
}
