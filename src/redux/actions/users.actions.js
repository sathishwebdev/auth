import { UserActionTypes } from "../types/user.types";
import { getConfig } from "../config";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL + "/api/users"


export const logout = () => async (dispatch) => {
  dispatch({ type: UserActionTypes.LOGIN.RESET });
  localStorage.removeItem("cred-details");
};

export const loginUser = (values) => async (dispatch) => {
  try {
    dispatch({
      type: UserActionTypes.LOGIN.REQUEST,
    });
    const { data } = await axios.post(`${BASE_URL}/login`, values);
    
    const userInfo = {
      _id: data.user.id,
      email: data.user.email,
      name: data.user.name,
      username: data.user.username,
      isVerified: data.user.isVerified,
      token: data.token,
      views: data.user.views,
    };

    dispatch({
      type: UserActionTypes.LOGIN.SUCCESS,
      payload: userInfo,
    });

    localStorage.setItem("cred-details", JSON.stringify(userInfo));
  } catch (error) {
    dispatch({
      type: UserActionTypes.LOGIN.ERROR,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const registerUser = (values) => async (dispatch) => {
  try {
    dispatch({
      type: UserActionTypes.REGISTER.REQUEST,
    });

    let {data} = await axios.post(`${BASE_URL}/register`, values);

    dispatch({
      type: UserActionTypes.REGISTER.SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: UserActionTypes.REGISTER.ERROR,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};


export const deleteUsers = (userId) => async (dispatch, getState) => {
  try {
    dispatch({
      type: UserActionTypes.DELETE.REQUEST,
    });

    await axios.post(`${BASE_URL}/deleteUser`, {userId}, getConfig(getState()));

    dispatch({
      type: UserActionTypes.DELETE.SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: UserActionTypes.DELETE.ERROR,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const verifyUser = (id , key) => async (dispatch, getState) =>{
  try {
    dispatch({
      type: UserActionTypes.VERIFY.REQUEST,
    });

   const {data} = await axios.get(`${BASE_URL}/verify/${id}/${key}`, getConfig(getState()));
   let userData = localStorage.getItem("linkstore-user")
   ? JSON.parse(localStorage.getItem("linkstore-user"))
   : null;
   if (!userData){

   }else if (data){
     userData.isVerified=true;
     localStorage.setItem("linkstore-user", JSON.stringify(userData));
     dispatch({
      type: UserActionTypes.VERIFY.SUCCESS,
      payload: data
    });
   }
    
  } catch (error) {
    dispatch({
      type: UserActionTypes.VERIFY.ERROR,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
}

export const forgetPassword = (values) => async (dispatch) =>{
  try{
    dispatch({
      type: UserActionTypes.FORGETPASSWORD.REQUEST,
    });

    const {data} =  await axios.post(`${BASE_URL}/forgetpassword`, values)

    dispatch({
      type: UserActionTypes.FORGETPASSWORD.SUCCESS,
      payload : data
    });
  }catch (error) {
    dispatch({
      type: UserActionTypes.FORGETPASSWORD.ERROR,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
}


export const changePassword = (values, userId, key) => async (dispatch) =>{
  try{
    dispatch({
      type: UserActionTypes.CHANGEPASSWORD.REQUEST,
    });

    const {data} =  await axios.post(`${BASE_URL}/changepassword/${userId}/${key}`, values)

    dispatch({
      type: UserActionTypes.CHANGEPASSWORD.SUCCESS,
      payload : data
    });
  }catch (error) {
    dispatch({
      type: UserActionTypes.CHANGEPASSWORD.ERROR,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
}

export const updateUserDetails = (values, userId) => async (dispatch, getState) =>{
  try{
    dispatch({
      type: UserActionTypes.UPDATE.REQUEST,
    });

    const {data} =  await axios.post(`${BASE_URL}/update/${userId}`, {...values}, getConfig(getState()))

    dispatch({
      type: UserActionTypes.UPDATE.SUCCESS,
      payload : data
    });
  }catch (error) {
    dispatch({
      type: UserActionTypes.UPDATE.ERROR,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }

}

export const getUserDetails = (userId) => async (dispatch, getState) =>{
  try {
    dispatch({
      type: UserActionTypes.DETAILS.REQUEST,
    });

   const {data} = await axios.get(`${BASE_URL}/${userId}`, getConfig(getState()));
  
   dispatch({
    type: UserActionTypes.DETAILS.SUCCESS,
    payload : data
  });

    
  } catch (error) {
    dispatch({
      type: UserActionTypes.DETAILS.ERROR,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
}