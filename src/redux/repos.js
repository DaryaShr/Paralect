import { createSlice } from "@reduxjs/toolkit";

export const reposSelector = (state) => state.repos.repos;
export const reposLengthSelector = (state) => state.repos.reposCount;
export const pageSelector = (state) => state.repos.pageCount;
export const isFetchingReposSelector = (state) => state.repos.isFetching;

const perPage = 4;
export const getAllRepos = (username, page) => async (dispatch) => {
  dispatch(ACTION_GET_REPOS_REQUESTED());

  fetch(`https://api.github.com/users/${username}/repos`)
    .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
    .then(
      (result) => {
        dispatch(ACTION_GET_REPOS_SUCCEED({ count: result.length }));
      },
      (error) => {
        dispatch(ACTION_GET_REPOS_FAILED({ error }));
      }
    );
};

export const getReposPerPage = (username, page) => async (dispatch) => {
  dispatch(ACTION_GET_PAGE_REQUESTED());

  fetch(
    `https://api.github.com/users/${username}/repos?per_page=${perPage}&page=${page}`
  )
    .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
    .then(
      (result) => {
        dispatch(ACTION_GET_PAGE_SUCCEED({ result }));
      },
      (error) => {
        dispatch(ACTION_GET_PAGE_FAILED({ error }));
      }
    );
};

const reposSlice = createSlice({
  name: "repos",
  initialState: {
    reposCount: 0,
    repos: [],
    isFetching: false,
    error: null,
    pageCount: 0,
  },
  reducers: {
    ACTION_GET_REPOS_REQUESTED: (state, action) => {
      state.reposCount = 0;
      state.isFetching = true;
      state.repos = [];
      state.error = null;
    },
    ACTION_GET_REPOS_SUCCEED: (state, action) => {
      const { count } = action.payload;

      state.isFetching = false;
      state.reposCount = count;
      state.error = null;
      state.pageCount = Math.ceil(count / perPage);
    },
    ACTION_GET_REPOS_FAILED: (state, action) => {
      const { error } = action.payload;

      state.reposCount = 0;
      state.isFetching = false;
      state.error = error;
    },
    ACTION_GET_PAGE_REQUESTED: (state, action) => {
      state.isFetching = true;
      state.repos = [];
      state.error = null;
    },
    ACTION_GET_PAGE_SUCCEED: (state, action) => {
      const { result } = action.payload;

      state.isFetching = false;
      state.repos = result;
      state.error = null;
    },
    ACTION_GET_PAGE_FAILED: (state, action) => {
      const { error } = action.payload;

      state.isFetching = false;
      state.repos = [];
      state.error = error;
    },
  },
});

export const {
  ACTION_GET_REPOS_REQUESTED,
  ACTION_GET_REPOS_SUCCEED,
  ACTION_GET_REPOS_FAILED,
  ACTION_GET_PAGE_REQUESTED,
  ACTION_GET_PAGE_SUCCEED,
  ACTION_GET_PAGE_FAILED,
} = reposSlice.actions;
export default reposSlice.reducer;
