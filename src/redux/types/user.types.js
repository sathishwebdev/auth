const CREATE = {
  REQUEST: "USER_REGISTER_REQUEST",
  SUCCESS: "USER_REGISTER_SUCCESS",
  ERROR: "USER_REGISTER_ERROR",
  RESET: "USER_REGISTER_RESET",
};

const LOGIN = {
  REQUEST: "USER_LOGIN_REQUEST",
  SUCCESS: "USER_LOGIN_SUCCESS",
  ERROR: "USER_LOGIN_ERROR",
  RESET: "USER_LOGIN_RESET",
};

const UPDATE = {
  REQUEST: "USER_UPDATE_REQUEST",
  SUCCESS: "USER_UPDATE_SUCCESS",
  ERROR: "USER_UPDATE_ERROR",
  RESET: "USER_UPDATE_RESET",
};

const DELETE = {
  REQUEST: "USER_DELETE_REQUEST",
  SUCCESS: "USER_DELETE_SUCCESS",
  ERROR: "USER_DELETE_ERROR",
  RESET: "USER_DELETE_RESET",
};

const VERIFY = {
  REQUEST: "USER_VERIFY_REQUEST",
  SUCCESS: "USER_VERIFY_SUCCESS",
  ERROR: "USER_VERIFY_ERROR",
  RESET: "USER_VERIFY_RESET",
};

const CHANGEPASSWORD = {
  REQUEST: "USER_CHANGEPASSWORD_REQUEST",
  SUCCESS: "USER_CHANGEPASSWORD_SUCCESS",
  ERROR: "USER_CHANGEPASSWORD_ERROR",
  RESET: "USER_CHANGEPASSWORD_RESET",
}

const FORGETPASSWORD = {
  REQUEST: "USER_FORGETPASSWORD_REQUEST",
  SUCCESS: "USER_FORGETPASSWORD_SUCCESS",
  ERROR: "USER_FORGETPASSWORD_ERROR",
  RESET: "USER_FORGETPASSWORD_RESET",
}

const DETAILS = {
  REQUEST: "USER_DETAILS_REQUEST",
  SUCCESS: "USER_DETAILS_SUCCESS",
  ERROR: "USER_DETAILS_ERROR",
  RESET: "USER_DETAILS_RESET",
}


export const UserActionTypes = {
  REGISTER: CREATE,
  LOGIN: LOGIN,
  UPDATE: UPDATE,
  DELETE: DELETE,
  LOGOUT: "LOGOUT",
  VERIFY : VERIFY,
  CHANGEPASSWORD : CHANGEPASSWORD,
  FORGETPASSWORD :FORGETPASSWORD,
  DETAILS : DETAILS
};
