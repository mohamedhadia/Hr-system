import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLoggedin: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      if (
        action.payload.email === "mail@mail.com" &&
        action.payload.password === "12345678"
      ) {
        state.isLoggedin = true;
        state.user = {
          email: action.payload.email,
          password: action.payload.password,
        };
        console.log("correct");
      } else {
        console.log("enter correct info");
      }
    },
    logout: (state) => {
      state.isLoggedin = false;
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
