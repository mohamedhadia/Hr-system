import { Scheduler } from "@aldabil/react-scheduler";
import { useDispatch, useSelector } from "react-redux";
import { addEvent } from "./../features/events/eventsSlice";

export default function EmployeeCard({ employee }) {
  const events = useSelector((state) => state.events.events);
  console.log(events);

  const handleConfirm = async (event, action) => {
    if (action === "edit") {
      console.log("edit", event.attendance);
    } else if (action === "create") {
      console.log("create", event.title);
    }
    /**
     * Make sure to return 4 mandatory fields:
     * event_id: string|number
     * title: string
     * start: Date|string
     * end: Date|string
     * ....extra other fields depend on your custom fields/editor properties
     */
    return new Promise((res, rej) => {
      setTimeout(() => {
        res({
          ...event,
          event_id: event.event_id || Math.random(),
        });
      }, 1000);
    });
  };

  const handleDelete = async (deletedId) => {
    // Simulate http request: return the deleted id
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(deletedId);
      }, 1000);
    });
  };

  return (
    <Scheduler
      events={events}
      view="month"
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
      onConfirm={handleConfirm}
      onDelete={handleDelete}
    />
  );
}
