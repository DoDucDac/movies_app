import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE,
    GET_LIST_BANNER_REQUEST,
    GET_LIST_BANNER_SUCCESS,
    GET_LIST_BANNER_FAILURE,
  } from "../constants";
  
  const INITIAL_STATE = {
    loading: false,
    listBanner: null,
  };
  
  const listMoviesReducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
      case GET_LIST_BANNER_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case GET_LIST_BANNER_SUCCESS:
        return {
          ...state,
          loading: false,
          listBanner: action.payload,
        };
      case GET_LIST_BANNER_FAILURE:
        return {
          ...state,
          loading: false,
          listBanner: null,
        };
      default:
        return state;
    }
  };
  
  export default listMoviesReducer;
  