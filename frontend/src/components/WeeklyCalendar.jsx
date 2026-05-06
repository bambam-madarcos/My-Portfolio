import React, { useState } from "react";

const WeeklyCalendar = ({ data }) => {
  const [currentWeek, setCurrentWeek] = useState(0);

  const week = data[currentWeek];

  const nextWeek = () => {
    if (currentWeek < data.length - 1) {
      setCurrentWeek(currentWeek + 1);
    }
  };

  const prevWeek = () => {
    if (currentWeek > 0) {
      setCurrentWeek(currentWeek - 1);
    }
  };

  return (
    <div className="mt-10">
      
      {/* Header + Navigation */}
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={prevWeek}
          disabled={currentWeek === 0}
          className="px-3 py-1 border rounded disabled:opacity-40"
        >
          ← Previous
        </button>

        <h3 className="text-lg font-semibold text-ink-soft">
          {week.week} — {week.dateRange}
        </h3>

        <button
          onClick={nextWeek}
          disabled={currentWeek === data.length - 1}
          className="px-3 py-1 border rounded disabled:opacity-40"
        >
          Next →
        </button>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-5 gap-4">
        {(week.days || []).map((day, i) => (
          <div
            key={i}
            className="border border-rule rounded-lg p-4 min-h-[160px]"
          >
            <p className="font-semibold text-sm">{day.day}</p>
            <p className="text-xs text-ink-muted">{day.date}</p>

            <div className="mt-2 space-y-1 text-xs">
              {(day.tasks || []).length > 0 ? (
                (day.tasks || []).map((task, j) => (
                  <div key={j}>
                    <span className="font-mono text-accent">
                      {task.time}
                    </span>{" "}
                    — {task.activity}
                  </div>
                ))
              ) : (
                <p className="text-ink-muted italic">No activity</p>
              )}
            </div>

            {day.notes && (
              <div className="mt-2 text-[11px] border-t pt-2">
                {day.notes}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyCalendar;