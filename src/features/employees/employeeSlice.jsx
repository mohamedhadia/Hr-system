import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employees: [
    {
      id: 1,
      keyField: 1,
      name: "Mohamed",
      attendance: "absent",
      date: "10 APRL",
    },
    {
      id: 2,

      keyField: 2,
      name: "Ahmed",
      attendance: "present",
      date: "10 APRL",
    },
    {
      id: 3,
      keyField: 3,
      name: "Ahmed",
      attendance: "vacation",
      date: "10 APRL",
    },
  ],
};

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    addNew: (state, action) => {
      state.employees.push(action.payload);
    },
  },
});

export const { addNew } = employeeSlice.actions;
export default employeeSlice.reducer;
