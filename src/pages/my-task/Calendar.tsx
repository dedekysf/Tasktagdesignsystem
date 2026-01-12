import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CalendarProps {
  selectedDate: Date | null;
  onSelect: (date: Date | null) => void;
  onClose: () => void;
}

export function Calendar({ selectedDate, onSelect, onClose }: CalendarProps) {
  const today = new Date(); // Use actual current date
  const [viewDate, setViewDate] = useState(selectedDate || today);

  const daysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const firstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const generateCalendarDays = () => {
    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();
    const daysInCurrentMonth = daysInMonth(viewDate);
    const firstDay = firstDayOfMonth(viewDate);

    const prevMonth = month === 0 ? 11 : month - 1;
    const prevYear = month === 0 ? year - 1 : year;
    const daysInPrevMonth = daysInMonth(new Date(prevYear, prevMonth, 1));

    const days: Array<{
      date: number;
      month: "prev" | "current" | "next";
      fullDate: Date;
    }> = [];

    // Previous month days
    for (let i = firstDay - 1; i >= 0; i--) {
      days.push({
        date: daysInPrevMonth - i,
        month: "prev",
        fullDate: new Date(prevYear, prevMonth, daysInPrevMonth - i),
      });
    }

    // Current month days
    for (let i = 1; i <= daysInCurrentMonth; i++) {
      days.push({
        date: i,
        month: "current",
        fullDate: new Date(year, month, i),
      });
    }

    // Next month days to fill the grid
    const remainingDays = 42 - days.length; // 6 rows * 7 days
    const nextMonth = month === 11 ? 0 : month + 1;
    const nextYear = month === 11 ? year + 1 : year;
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        date: i,
        month: "next",
        fullDate: new Date(nextYear, nextMonth, i),
      });
    }

    return days;
  };

  const isToday = (date: Date) => {
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const isSelected = (date: Date) => {
    if (!selectedDate) return false;
    return (
      date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear()
    );
  };

  const handlePrevMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1));
  };

  const handleDateClick = (date: Date) => {
    onSelect(date);
    onClose();
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const weekDays = ["S", "M", "T", "W", "T", "F", "S"];
  const calendarDays = generateCalendarDays();
  const weeks = [];
  for (let i = 0; i < calendarDays.length; i += 7) {
    weeks.push(calendarDays.slice(i, i + 7));
  }

  return (
    <div 
      className="w-[360px] bg-white rounded-lg border shadow-[0px_5px_12px_0px_rgba(0,0,0,0.1)] py-2"
      style={{ borderColor: 'var(--border)' }}
    >
      {/* Header */}
      <div 
        className="border-b px-4 pb-4 pt-2"
        style={{ borderColor: 'var(--border)' }}
      >
        <p 
          className="text-[14px] text-center leading-4"
          style={{ 
            color: 'var(--text-primary)',
            fontWeight: 'var(--font-weight-semibold)'
          }}
        >
          Select Dates
        </p>
      </div>

      {/* Month Navigation */}
      <div className="flex items-center justify-between px-4 py-2">
        <button
          onClick={handlePrevMonth}
          className="size-7 flex items-center justify-center hover:bg-secondary rounded transition-colors cursor-pointer"
        >
          <ChevronLeft className="size-6" style={{ color: 'var(--text-primary)' }} />
        </button>
        <p 
          className="text-[14px] text-center"
          style={{ 
            color: 'var(--text-secondary)',
            fontWeight: 'var(--font-weight-semibold)'
          }}
        >
          {monthNames[viewDate.getMonth()]} {viewDate.getFullYear()}
        </p>
        <button
          onClick={handleNextMonth}
          className="size-7 flex items-center justify-center hover:bg-secondary rounded transition-colors cursor-pointer"
        >
          <ChevronRight className="size-6" style={{ color: 'var(--text-primary)' }} />
        </button>
      </div>

      {/* Weekday Headers */}
      <div className="flex items-center justify-between px-4 py-1">
        {weekDays.map((day, index) => (
          <div key={index} className="size-8 flex items-center justify-center">
            <p 
              className="text-[14px] text-center leading-4"
              style={{ 
                color: 'var(--text-secondary)',
                fontWeight: 'var(--font-weight-semibold)'
              }}
            >
              {day}
            </p>
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="px-4">
        {weeks.map((week, weekIndex) => (
          <div key={weekIndex} className="flex items-start justify-between py-1">
            {week.map((day, dayIndex) => {
              const isTodayDate = isToday(day.fullDate);
              const isSelectedDate = isSelected(day.fullDate);
              const isCurrentMonth = day.month === "current";

              return (
                <button
                  key={dayIndex}
                  onClick={() => handleDateClick(day.fullDate)}
                  className={`size-8 flex items-center justify-center rounded-full transition-colors cursor-pointer hover:bg-secondary ${
                    isSelectedDate ? "bg-black" : ""
                  } ${isTodayDate && !isSelectedDate ? "border" : ""}`}
                  style={isTodayDate && !isSelectedDate ? { borderColor: 'var(--text-primary)' } : {}}
                >
                  <p
                    className="text-[14px] text-center leading-4"
                    style={{
                      color: isSelectedDate
                        ? 'white'
                        : isTodayDate
                        ? 'var(--text-primary)'
                        : isCurrentMonth
                        ? 'var(--text-secondary)'
                        : '#828282',
                      fontWeight: isSelectedDate || isTodayDate
                        ? 'var(--font-weight-semibold)'
                        : 'var(--font-weight-regular)'
                    }}
                  >
                    {day.date}
                  </p>
                </button>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}