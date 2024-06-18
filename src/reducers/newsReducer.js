import {
    FETCH_NEWS_REQUEST,
    FETCH_NEWS_SUCCESS,
    FETCH_NEWS_FAILURE,
    SET_CATEGORY,
    SET_PAGE,
  } from '../actions/newsActions';
  
  const initialState = {
    articles: [],
    status: 'idle',
    error: null,
    category: 'general',
    page: 1,
  };
  
  const newsReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_NEWS_REQUEST:
        return {
          ...state,
          status: 'loading',
        };
      case FETCH_NEWS_SUCCESS:
        return {
          ...state,
          status: 'succeeded',
          articles: action.payload,
        };
      case FETCH_NEWS_FAILURE:
        return {
          ...state,
          status: 'failed',
          error: action.payload,
        };
      case SET_CATEGORY:
        return {
          ...state,
          category: action.payload,
          page: 1,
        };
      case SET_PAGE:
        return {
          ...state,
          page: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default newsReducer;
  