import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";
import counterReducer from "../slices/counterSlice";

//Global store
export const store = configureStore({
  reducer: {
    //reducers are defined here
    user: userReducer,
    counter: counterReducer,
  },
});