import {
  FIRST_NAME,
  MIDDLE_NAME,
  LAST_NAME,
  USERNAME,
  PASSWORD,
  LOGIN,
} from "../types/types";
const initialState = {
  firstName: "",
  middleName: "",
  lastName: "",
  username: "",
  password: "",
  isLogin: "",
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case FIRST_NAME:
      return {
        ...state,
        firstName: action.firstname,
      };
    case MIDDLE_NAME:
      return {
        ...state,
        middleName: action.middlename,
      };
    case LAST_NAME:
      return {
        ...state,
        lastName: action.lastname,
      };
    case USERNAME:
      return {
        ...state,
        username: action.username,
        isLogin: action.isLogin,
      };
    case PASSWORD:
      return {
        ...state,
        password: action.password,
        isLogin: action.isLogin,
      };
    case LOGIN:
      return {
        ...state,
        isLogin: action.isLogin,
      };
  }
}

export default rootReducer;
