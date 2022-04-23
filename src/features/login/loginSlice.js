import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

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
      } else {
        toast.error("please use the info above to login");
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
