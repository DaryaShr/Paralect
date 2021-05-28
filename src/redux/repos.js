import { createSlice } from "@reduxjs/toolkit";

export const reposSelector = (state) => state.repos.repos;
export const reposTotalCountSelector = (state) => state.repos.reposCount;
export const pageSelector = (state) => state.repos.pageCount;
export const isFetchingReposSelector = (state) => state.repos.isFetching;

const perPage = 4;

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
    ACTION_SET_REPOS_COUNT: (state, action) => {
      const { count } = action.payload;

      state.pageCount = Math.ceil(count / perPage);
      state.reposCount = count;
    },
    ACTION_GET_PAGE_REQUESTED: (state, action) => {
      state.isFetching = true;
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
  ACTION_SET_REPOS_COUNT,
  ACTION_GET_PAGE_REQUESTED,
  ACTION_GET_PAGE_SUCCEED,
  ACTION_GET_PAGE_FAILED,
} = reposSlice.actions;
export default reposSlice.reducer;
