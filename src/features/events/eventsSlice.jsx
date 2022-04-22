import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  events: [
    {
      event_id: 1,
      assignee: 1,
      title: "present",
      start: new Date("2022 4 1 12:00"),
      end: new Date("2022 4 1 12:00"),
    },
    {
      event_id: 2,
      assignee: 1,

      title: "present",
      start: new Date("2022 5 4 10:00"),
      end: new Date("2022 5 4 11:00"),
    },
  ],
};

const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    addEvent: (state, action) => {
      state.events.push(action.payload);
    },
  },
});

export const { addEvent } = eventsSlice.actions;
export default eventsSlice.reducer;
