import { Scheduler } from "@aldabil/react-scheduler";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEvent } from "./../features/events/eventsSlice";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
export default function EmployeeCard({ employee }) {
  const events = useSelector((state) => state.events.events);
  const eventEmp = events[0].mohamed;
  const [startDate, setStartDate] = useState(new Date());
  const [selectV, setSelectV] = useState("");
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    console.log(selectV, startDate);

    if (selectV === "") {
      console.log("nope");
    } else {
      dispatch(
        addEvent({
          event_id: 2,
          assignee: 2,
          title: selectV,
          start: startDate,
          end: startDate,
        })
      );
    }
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-3/4">
        <Scheduler
          events={eventEmp}
          view="month"
          draggable={false}
          resources={[
            {
              assignee: employee.id,
              text: employee.name,
              avatar: "https://picsum.photos/200/300",
            },
          ]}
          month={{
            weekDays: [0, 1, 2, 3, 4, 5, 6],
            weekStartOn: 6,
            startHour: 9,
            endHour: 17,
          }}
          dialogMaxWidth="lg"
          fields={[
            {
              name: "attendance",
              type: "select",
              options: [
                { id: 1, text: "absent", value: 1 },
                { id: 2, text: "present", value: 2 },
                { id: 3, text: "vacation", value: 3 },
              ],
              config: {
                label: "attendance",
                required: true,
                errMsg: "Plz Select attendance",
              },
            },
          ]}
        />
      </div>

      <div className="flex h-full w-1/4 flex-col items-center justify-center gap-4">
        <form className="">
          <button onClick={handleClick}>add</button>
          <select
            required
            id="attendance"
            name="attendance"
            onChange={(e) => setSelectV(e.target.value)}
            className="mt-1 block w-full border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-sky-700 focus:outline-none focus:ring-sky-700 sm:text-sm"
          >
            <option></option>
            <option>absent</option>
            <option>present</option>
            <option>vacation</option>
          </select>
          <DayPicker
            mode="single"
            selected={startDate}
            onSelect={setStartDate}
          />
        </form>
      </div>
    </div>
  );
}
