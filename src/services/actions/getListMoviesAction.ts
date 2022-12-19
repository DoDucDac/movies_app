import {
    GET_LIST_BANNER_FAILURE,
    GET_LIST_BANNER_REQUEST,
    GET_LIST_BANNER_SUCCESS,
    GET_LIST_MOVIES_FAILURE,
    GET_LIST_MOVIES_REQUEST,
    GET_LIST_MOVIES_SUCCESS,
} from "../constants";

// GET LIST BANNER
export const getListBanner = () => ({
    type: GET_LIST_BANNER_REQUEST,
});

export const getListBannerSuccess = (payload: any) => ({
    type: GET_LIST_BANNER_SUCCESS,
    payload,
});

export const getListBannerFailure = () => ({
    type: GET_LIST_BANNER_FAILURE,
});

// GET LIST MOVIES
export const getListMovies = (payload: any) => ({
    type: GET_LIST_MOVIES_REQUEST,
    payload,
});

export const getListMoviesSuccess = (payload: any) => ({
    type: GET_LIST_MOVIES_SUCCESS,
    payload,
});

export const getListMoviesFailure = () => ({
    type: GET_LIST_MOVIES_FAILURE,
});
