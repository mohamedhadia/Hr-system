import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  events: [
    {
      mohamed: [
        {
          event_id: 1,
          assignee: 1,
          title: "present",
          start: new Date("2022 4 1 12:00"),
          end: new Date("2022 4 1 12:00"),
        },
        {
          event_id: 1,
          assignee: 1,
          title: "present",
          start: new Date("2022 4 1 12:00"),
          end: new Date("2022 4 1 12:00"),
        },
      ],
    },
    {
      ahmed: [
        {
          event_id: 2,
          assignee: 2,
          title: "present",
          start: new Date("2022 4 1 12:00"),
          end: new Date("2022 4 1 12:00"),
        },
      ],
    },
  ],
};

const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    addEvent: (state, action) => {
      state.events[0].mohamed.push(action.payload);
    },
  },
});

export const { addEvent } = eventsSlice.actions;
export default eventsSlice.reducer;
