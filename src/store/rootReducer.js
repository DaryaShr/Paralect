import { combineReducers } from '@reduxjs/toolkit'
import userReducer from "../redux/user"
import reposReducer from "../redux/repos"

export default combineReducers({
    user: userReducer,
    repos: reposReducer
})