import {
    GET_LIST_BANNER_REQUEST,
    GET_LIST_BANNER_SUCCESS,
    GET_LIST_BANNER_FAILURE,
    GET_LIST_MOVIES_REQUEST,
    GET_LIST_MOVIES_SUCCESS,
    GET_LIST_MOVIES_FAILURE,
  } from "../constants";
  
  const INITIAL_STATE = {
    loading: false,
    listBanner: null,
    listMovies: null,
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
        case GET_LIST_MOVIES_REQUEST:
          return {
            ...state,
            loading: true,
          };
        case GET_LIST_MOVIES_SUCCESS:
          return {
            ...state,
            loading: false,
            listMovies: action.payload,
          };
        case GET_LIST_MOVIES_FAILURE:
          return {
            ...state,
            loading: false,
            listMovies: null,
          };
      
      default:
        return state;
    }
  };
  
  export default listMoviesReducer;
  