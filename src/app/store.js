import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./../features/login/loginSlice";
import employeesReducer from "./../features/employees/employeeSlice";
import eventsReducer from "./../features/events/eventsSlice";
export default configureStore({
  reducer: {
    user: authReducer,
    employees: employeesReducer,
    events: eventsReducer,
  },
});
