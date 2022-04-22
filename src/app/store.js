import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./../features/login/loginSlice";
import employeesReducer from "./../features/employees/employeeSlice";
export default configureStore({
  reducer: {
    user: authReducer,
    employees: employeesReducer,
  },
});
