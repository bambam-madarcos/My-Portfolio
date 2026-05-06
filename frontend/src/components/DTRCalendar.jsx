import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

const computeHours = (timeIn, timeOut) => {
  const toMinutes = (t) => {
    const [time, modifier] = t.split(" ");
    let [hours, minutes] = time.split(":").map(Number);

    if (modifier === "PM" && hours !== 12) hours += 12;
    if (modifier === "AM" && hours === 12) hours = 0;

    return hours * 60 + minutes;
  };

  const diff = (toMinutes(timeOut) - toMinutes(timeIn)) / 60;
  return diff.toFixed(2);
};

const getStatus = (timeIn) => {
  if (!timeIn) return "absent";

  const [time, modifier] = timeIn.split(" ");
  let [hours, minutes] = time.split(":").map(Number);

  if (modifier === "PM" && hours !== 12) hours += 12;

  const totalMinutes = hours * 60 + minutes;

  if (totalMinutes > 8 * 60) return "late"; // after 8:00 AM
  return "present";
};

const DTRCalendar = ({ dtr }) => {
  const events = dtr.map((entry) => {
    const hours = computeHours(entry.timeIn, entry.timeOut);
    const status = getStatus(entry.timeIn);

    const colors = {
      present: "#16a34a", // green
      late: "#f59e0b",    // yellow
      absent: "#dc2626",  // red
    };

    return {
      title: `IN: ${entry.timeIn}\nOUT: ${entry.timeOut}\nHRS: ${hours}`,
      date: entry.date,
      backgroundColor: colors[status],
      borderColor: colors[status],
    };
  });

  return (
    <div className="mt-10">
      <h3 className="text-lg font-semibold mb-4 text-ink-soft">
        Daily Time Record Calendar
      </h3>

      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        height="auto"
        eventContent={(arg) => (
          <div className="text-xs whitespace-pre-line leading-tight">
            {arg.event.title}
          </div>
        )}
      />
    </div>
  );
};

export default DTRCalendar;