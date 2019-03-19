import mockServer from '../api';

/*
    Action Types
------------------------------------ */
const FETCH_USERS_LOADING = 'FETCH_USERS_LOADING';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';

/*
    Actions
------------------------------------ */

export const fetchUsers = () => dispatch => {
  dispatch({ type: FETCH_USERS_LOADING });
  mockServer
    .get('users')
    .then(response => response)
    .then(
      data => dispatch({ type: FETCH_USERS_SUCCESS, data }),
      error =>
        dispatch({
          type: FETCH_USERS_ERROR,
          error: error.message || 'Unexpected Error!!!'
        })
    );
};

/*
    Reducer
------------------------------------ */
const intialState = {
  data: [],
  loading: false,
  error: ''
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case FETCH_USERS_LOADING: {
      return {
        ...state,
        loading: true,
        error: ''
      };
    }
    case FETCH_USERS_SUCCESS: {
      return {
        ...state,
        data: action.data,
        loading: false
      };
    }
    case FETCH_USERS_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
