import { createSlice } from "@reduxjs/toolkit";

import { getAllRepos } from "./repos"; 

export const userSelector = (state) => state.user.user;
export const errorUserSelector = (state) => state.user.error;
export const isFetchingUserSelector = (state) => state.user.isFetching;

export const getUser = (username) => async (dispatch) => {
  if (username === "") return;
  dispatch(ACTION_GET_USER_REQUESTED());

  fetch(`https://api.github.com/users/${username}`)
    .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
    .then(
      (result) => {
        dispatch(ACTION_GET_USER_SUCCEED({ result }));
        dispatch(getAllRepos(username));
      },
      (error) => {
        dispatch(ACTION_GET_USER_FAILED({ error }));
      }
    );
};

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    error: null,
    isFetching: false,
  },
  reducers: {
    ACTION_GET_USER_REQUESTED: (state, action) => {
      state.isFetching = true;
      state.user = null;
      state.error = null;
    },
    ACTION_GET_USER_SUCCEED: (state, action) => {
      const { result } = action.payload;

      state.isFetching = false;
      state.user = result;
      state.error = null;
    },
    ACTION_GET_USER_FAILED: (state, action) => {
      const { error } = action.payload;

      state.isFetching = false;
      state.user = null;
      state.error = error;
    },
  },
});

export const {
  ACTION_GET_USER_REQUESTED,
  ACTION_GET_USER_SUCCEED,
  ACTION_GET_USER_FAILED,
} = userSlice.actions;
export default userSlice.reducer;
