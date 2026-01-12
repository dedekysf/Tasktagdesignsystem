import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TextInput } from "../../components/TextInput";

interface DateRangeCalendarProps {
  startDate: Date | null;
  endDate: Date | null;
  onDatesChange: (
    startDate: Date | null,
    endDate: Date | null,
  ) => void;
  onClose: () => void;
}

export function DateRangeCalendar({
  startDate,
  endDate,
  onDatesChange,
  onClose,
}: DateRangeCalendarProps) {
  const [tempStartDate, setTempStartDate] =
    useState<Date | null>(startDate);
  const [tempEndDate, setTempEndDate] = useState<Date | null>(
    endDate,
  );
  const [currentMonth, setCurrentMonth] = useState<Date>(
    startDate || new Date(),
  );

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const daysInMonth = (date: Date) => {
    return new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0,
    ).getDate();
  };

  const firstDayOfMonth = (date: Date) => {
    return new Date(
      date.getFullYear(),
      date.getMonth(),
      1,
    ).getDay();
  };

  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const daysInCurrentMonth = daysInMonth(currentMonth);
    const firstDay = firstDayOfMonth(currentMonth);

    const prevMonth = month === 0 ? 11 : month - 1;
    const prevYear = month === 0 ? year - 1 : year;
    const daysInPrevMonth = daysInMonth(
      new Date(prevYear, prevMonth, 1),
    );

    const days: Array<{
      date: number;
      month: "prev" | "current" | "next";
      fullDate: Date;
    }> = [];

    for (let i = firstDay - 1; i >= 0; i--) {
      days.push({
        date: daysInPrevMonth - i,
        month: "prev",
        fullDate: new Date(
          prevYear,
          prevMonth,
          daysInPrevMonth - i,
        ),
      });
    }

    for (let i = 1; i <= daysInCurrentMonth; i++) {
      days.push({
        date: i,
        month: "current",
        fullDate: new Date(year, month, i),
      });
    }

    const remainingDays = 42 - days.length;
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

  const isSelected = (date: Date) => {
    if (!tempStartDate && !tempEndDate) return false;

    if (tempStartDate && !tempEndDate) {
      return (
        date.getDate() === tempStartDate.getDate() &&
        date.getMonth() === tempStartDate.getMonth() &&
        date.getFullYear() === tempStartDate.getFullYear()
      );
    }

    if (tempStartDate && tempEndDate) {
      const time = date.getTime();
      return (
        time >= tempStartDate.getTime() &&
        time <= tempEndDate.getTime()
      );
    }

    return false;
  };

  const isInRange = (date: Date) => {
    if (!tempStartDate || !tempEndDate) return false;
    const time = date.getTime();
    return (
      time > tempStartDate.getTime() &&
      time < tempEndDate.getTime()
    );
  };

  const isToday = (date: Date) => {
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const isStartDate = (date: Date) => {
    if (!tempStartDate) return false;
    return (
      date.getDate() === tempStartDate.getDate() &&
      date.getMonth() === tempStartDate.getMonth() &&
      date.getFullYear() === tempStartDate.getFullYear()
    );
  };

  const isEndDate = (date: Date) => {
    if (!tempEndDate) return false;
    return (
      date.getDate() === tempEndDate.getDate() &&
      date.getMonth() === tempEndDate.getMonth() &&
      date.getFullYear() === tempEndDate.getFullYear()
    );
  };

  const handleDateClick = (date: Date) => {
    if (!tempStartDate || (tempStartDate && tempEndDate)) {
      setTempStartDate(date);
      setTempEndDate(null);
    } else if (tempStartDate && !tempEndDate) {
      if (date < tempStartDate) {
        setTempEndDate(tempStartDate);
        setTempStartDate(date);
      } else {
        setTempEndDate(date);
      }
    }
  };

  const handleConfirm = () => {
    onDatesChange(tempStartDate, tempEndDate);
  };

  const handleClear = () => {
    setTempStartDate(null);
    setTempEndDate(null);
  };

  const formatDate = (date: Date | null) => {
    if (!date) return "";
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${month} / ${day} / ${year}`;
  };

  const handlePrevMonth = () => {
    setCurrentMonth(
      new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth() - 1,
      ),
    );
  };

  const handleNextMonth = () => {
    setCurrentMonth(
      new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth() + 1,
      ),
    );
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
      className="w-full bg-white overflow-x-hidden"
      style={{ maxHeight: "600px", overflowY: "auto" }}
    >
      {/* Header */}
      <div
        className="px-4 pb-4 pt-2"
        style={{ borderBottom: "1px solid var(--grey-03)" }}
      >
        <p
          className="text-[14px] text-center text-[var(--text-primary)]"
          style={{ fontWeight: "var(--font-weight-semibold)" }}
        >
          Select Dates
        </p>
      </div>

      {/* Date Range Inputs */}
      <div
        className="px-4 py-2"
        style={{ borderBottom: "1px solid var(--grey-03)" }}
      >
        <div className="flex gap-4">
          <div style={{ flex: "1 1 0%", minWidth: 0 }}>
            <TextInput
              size="sm"
              label="Start Date"
              value={formatDate(tempStartDate)}
              placeholder="MM / DD / YYYY"
              showClearButton={false}
            />
          </div>

          <div style={{ flex: "1 1 0%", minWidth: 0 }}>
            <TextInput
              size="sm"
              label="End Date"
              value={formatDate(tempEndDate)}
              placeholder="MM / DD / YYYY"
              showClearButton={false}
            />
          </div>
        </div>
      </div>

      {/* Month Navigation */}
      <div className="flex items-center justify-between px-4 py-2">
        <button
          onClick={handlePrevMonth}
          className="size-7 flex items-center justify-center hover:bg-secondary rounded transition-colors cursor-pointer"
        >
          <ChevronLeft className="size-6" />
        </button>
        <p
          className="text-[14px] text-center text-[var(--text-secondary)]"
          style={{ fontWeight: "var(--font-weight-semibold)" }}
        >
          {monthNames[currentMonth.getMonth()]}{" "}
          {currentMonth.getFullYear()}
        </p>
        <button
          onClick={handleNextMonth}
          className="size-7 flex items-center justify-center hover:bg-secondary rounded transition-colors cursor-pointer"
        >
          <ChevronRight className="size-6" />
        </button>
      </div>

      {/* Weekday Headers */}
      <div className="flex items-center justify-between px-4 py-1">
        {weekDays.map((day, index) => (
          <div
            key={index}
            className="size-8 flex items-center justify-center"
          >
            <p
              className="text-[14px] text-center text-[var(--text-secondary)] leading-4"
              style={{
                fontWeight: "var(--font-weight-semibold)",
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
          <div
            key={weekIndex}
            className="flex items-start justify-between py-1"
          >
            {week.map((day, dayIndex) => {
              const isSelectedDate = isSelected(day.fullDate);
              const isStart = isStartDate(day.fullDate);
              const isEnd = isEndDate(day.fullDate);
              const inRange = isInRange(day.fullDate);
              const todayIndicator = isToday(day.fullDate);
              const isCurrentMonth = day.month === "current";

              return (
                <div
                  key={dayIndex}
                  className="flex-1 flex items-center justify-center"
                >
                  <div className="relative w-full h-8 flex items-center justify-center">
                    {isSelectedDate && (
                      <div
                        className="absolute inset-y-0"
                        style={{
                          backgroundColor: "var(--grey-02)",
                          left: isStart ? "50%" : "0",
                          right: isEnd ? "50%" : "0",
                          borderTopLeftRadius: isStart
                            ? "50%"
                            : "0",
                          borderBottomLeftRadius: isStart
                            ? "50%"
                            : "0",
                          borderTopRightRadius: isEnd
                            ? "50%"
                            : "0",
                          borderBottomRightRadius: isEnd
                            ? "50%"
                            : "0",
                        }}
                      />
                    )}

                    <button
                      onClick={() =>
                        handleDateClick(day.fullDate)
                      }
                      className={`relative size-8 flex items-center justify-center rounded-full transition-colors cursor-pointer z-10 ${
                        isStart || isEnd
                          ? "bg-black hover:bg-black"
                          : isSelectedDate
                            ? ""
                            : "hover:bg-secondary"
                      } ${
                        todayIndicator && !isStart && !isEnd
                          ? "border-2 border-black"
                          : ""
                      }`}
                    >
                      <p
                        className={`text-[14px] text-center leading-4 ${
                          isStart || isEnd
                            ? "text-white"
                            : isCurrentMonth
                              ? "text-[var(--text-secondary)]"
                              : ""
                        }`}
                        style={{
                          fontWeight:
                            isStart || isEnd
                              ? "var(--font-weight-semibold)"
                              : "var(--font-weight-regular)",
                          color:
                            !isStart &&
                            !isEnd &&
                            !isCurrentMonth
                              ? "var(--grey-05)"
                              : undefined,
                        }}
                      >
                        {day.date}
                      </p>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Actions */}
      <div
        className="px-4 py-3 flex gap-2 justify-end"
        style={{ borderTop: "1px solid var(--grey-03)" }}
      >
        <button
          onClick={handleClear}
          disabled={!tempStartDate && !tempEndDate}
          className={`px-4 py-2 text-[14px] rounded-lg transition-colors ${
            tempStartDate || tempEndDate
              ? "text-[var(--text-secondary)] hover:bg-secondary cursor-pointer"
              : "cursor-not-allowed opacity-50"
          }`}
          style={{
            fontWeight: "var(--font-weight-regular)",
            color:
              !tempStartDate && !tempEndDate
                ? "var(--grey-04)"
                : undefined,
          }}
        >
          Clear
        </button>
        <button
          onClick={handleConfirm}
          disabled={!tempStartDate || !tempEndDate}
          className="px-4 py-2 text-[14px] rounded-lg transition-colors"
          style={{
            fontWeight: "var(--font-weight-semibold)",
            backgroundColor:
              tempStartDate && tempEndDate
                ? "var(--black)"
                : "var(--grey-03)",
            color:
              tempStartDate && tempEndDate
                ? "var(--white)"
                : "var(--grey-04)",
            cursor:
              tempStartDate && tempEndDate
                ? "pointer"
                : "not-allowed",
          }}
          onMouseEnter={(e) => {
            if (tempStartDate && tempEndDate) {
              e.currentTarget.style.backgroundColor =
                "var(--text-secondary)";
            }
          }}
          onMouseLeave={(e) => {
            if (tempStartDate && tempEndDate) {
              e.currentTarget.style.backgroundColor =
                "var(--black)";
            }
          }}
        >
          Confirm
        </button>
      </div>
    </div>
  );
}