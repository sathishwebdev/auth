import { UserActionTypes } from "../types/user.types";
import { combineReducers } from "redux";

// USER LOGIN REDUCER
const initialState = localStorage.getItem("cred-details")
  ? JSON.parse(localStorage.getItem("cred-details"))
  : null;

const userLoginReducer = (state = { user_login: initialState }, action) => {
  switch (action.type) {
    case UserActionTypes.LOGIN.REQUEST:
      return { loading: true };

    case UserActionTypes.LOGIN.SUCCESS:
      return { loading: false, user_login: action.payload };

    case UserActionTypes.LOGIN.ERROR:
      return { loading: false, error: action.payload };

    case UserActionTypes.LOGIN.RESET:
      return {};

    default:
      return state;
  }
};


// USER REGISTER REDUCER

const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case UserActionTypes.REGISTER.REQUEST:
      return { loading: true };

    case UserActionTypes.REGISTER.SUCCESS:
      return { loading: false, success: true, response : action.payload };

    case UserActionTypes.REGISTER.ERROR:
      return { loading: false, error: action.payload };

    case UserActionTypes.REGISTER.RESET:
      return {};

    default:
      return state;
  }
};


// USER DELETE REDUCER

const userDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case UserActionTypes.DELETE.REQUEST:
      return { loading: true };

    case UserActionTypes.DELETE.SUCCESS:
      return { loading: false, success: true};

    case UserActionTypes.DELETE.ERROR:
      return { loading: false, error: action.payload };

    case UserActionTypes.DELETE.RESET:
      return {};

    default:
      return state;
  }
};


// verify user

const userVerifyReducer = (state = {}, action) => {
  switch (action.type) {
    case UserActionTypes.VERIFY.REQUEST:
      return { loading: true };

    case UserActionTypes.VERIFY.SUCCESS:
      return { loading: false, success: true, response: action.payload };

    case UserActionTypes.VERIFY.ERROR:
      return { loading: false, error: action.payload };

    case UserActionTypes.VERIFY.RESET:
      return {};

    default:
      return state;
  }
};

//  FORGET PASSWORD

const userForgetPassword = (state = {}, action) => {
  switch (action.type) {
    case UserActionTypes.FORGETPASSWORD.REQUEST:
      return { loading: true };

    case UserActionTypes.FORGETPASSWORD.SUCCESS:
      return { loading: false, success: true, response : action.payload};

    case UserActionTypes.FORGETPASSWORD.ERROR:
      return { loading: false, error: action.payload };

    case UserActionTypes.FORGETPASSWORD.RESET:
      return {};

    default:
      return state;
  }
};

//  CHANGE PASSWORD

const userChangePassword = (state = {}, action) => {
  switch (action.type) {
    case UserActionTypes.CHANGEPASSWORD.REQUEST:
      return { loading: true };

    case UserActionTypes.CHANGEPASSWORD.SUCCESS:
      return { loading: false, success: true, response : action.payload};

    case UserActionTypes.CHANGEPASSWORD.ERROR:
      return { loading: false, error: action.payload };

    case UserActionTypes.CHANGEPASSWORD.RESET:
      return {};

    default:
      return state;
  }
};

//  CHANGE PASSWORD

const updateUserReducer = (state = {}, action) => {
  switch (action.type) {
    case UserActionTypes.UPDATE.REQUEST:
      return { loading: true };

    case UserActionTypes.UPDATE.SUCCESS:
      return { loading: false, success: true, response : action.payload};

    case UserActionTypes.UPDATE.ERROR:
      return { loading: false, error: action.payload };

    case UserActionTypes.UPDATE.RESET:
      return {};

    default:
      return state;
  }
};

//  GET USER DETAIL

const getUserDetailReducer = (state = {data: null}, action) => {
  switch (action.type) {
    case UserActionTypes.DETAILS.REQUEST:
      return { loading: true };

    case UserActionTypes.DETAILS.SUCCESS:
      return { loading: false, success: true, data : action.payload};

    case UserActionTypes.DETAILS.ERROR:
      return { loading: false, error: action.payload };

    case UserActionTypes.DETAILS.RESET:
      return {data : null};

    default:
      return state;
  }
};

const userReducers = combineReducers({
  create: userRegisterReducer,
  login: userLoginReducer,
  delete: userDeleteReducer,
  verify : userVerifyReducer,
  forgetPassword : userForgetPassword,
  changePassword : userChangePassword,
  updateUser : updateUserReducer,
  userDetail : getUserDetailReducer
});

export default userReducers;
