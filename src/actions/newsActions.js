import axios from 'axios';

// const API_KEY = 'your_newsapi_key';
// const BASE_URL = 'https://newsapi.org/v2';

export const FETCH_NEWS_REQUEST = 'FETCH_NEWS_REQUEST';
export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS';
export const FETCH_NEWS_FAILURE = 'FETCH_NEWS_FAILURE';
export const SET_CATEGORY = 'SET_CATEGORY';
export const SET_PAGE = 'SET_PAGE';

export const fetchNewsRequest = () => ({
  type: FETCH_NEWS_REQUEST,
});

export const fetchNewsSuccess = (articles) => ({
  type: FETCH_NEWS_SUCCESS,
  payload: articles,
});

export const fetchNewsFailure = (error) => ({
  type: FETCH_NEWS_FAILURE,
  payload: error,
});

export const setCategory = (category) => ({
  type: SET_CATEGORY,
  payload: category,
});

export const setPage = (page) => ({
  type: SET_PAGE,
  payload: page,
});

export const fetchNews = ({ category, page }) => {
  return async (dispatch) => {
    dispatch(fetchNewsRequest());
    try {
      const response = await axios.get(`https://newsapi.org/v2/everything?q=${category}&apiKey=a3e0a684ea114f759ea2942a12c1e775`, {
        params: {
          page,
          pageSize: 10,
        },
      });
      console.log(response)
      dispatch(fetchNewsSuccess(response.data.articles));
    } catch (error) {
      dispatch(fetchNewsFailure(error.message));
    }
  };
};
