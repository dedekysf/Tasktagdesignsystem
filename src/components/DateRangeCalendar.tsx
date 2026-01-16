import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface DateRangeCalendarProps {
  startDate: Date | null;
  endDate: Date | null;
  onDatesChange: (
    startDate: Date | null,
    endDate: Date | null,
  ) => void;
  onClose: () => void;
  className?: string;
}

export function DateRangeCalendar({
  startDate,
  endDate,
  onDatesChange,
  onClose,
  className = "",
}: DateRangeCalendarProps) {
  const [tempStartDate, setTempStartDate] =
    useState<Date | null>(startDate);
  const [tempEndDate, setTempEndDate] = useState<Date | null>(
    endDate,
  );
  const [currentMonth, setCurrentMonth] = useState<Date>(
    startDate || new Date(),
  );
  const [focusedInput, setFocusedInput] = useState<
    "start" | "end" | null
  >(null);

  const startInputRef = useRef<HTMLInputElement>(null);
  const endInputRef = useRef<HTMLInputElement>(null);

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

  const isDateDisabled = (date: Date) => {
    // If focused on start input and there's an end date, disable dates after end date
    if (focusedInput === "start" && tempEndDate) {
      return date > tempEndDate;
    }
    // If focused on end input and there's a start date, disable dates before start date
    if (focusedInput === "end" && tempStartDate) {
      return date < tempStartDate;
    }
    return false;
  };

  const handleDateClick = (date: Date) => {
    // Don't allow clicking disabled dates
    if (isDateDisabled(date)) {
      return;
    }

    // If focused on start input, set start date only (keep end date if exists)
    if (focusedInput === "start") {
      setTempStartDate(date);
      // Don't clear end date - keep it if it exists
      // Auto shift to end input
      setFocusedInput("end");
      setTimeout(() => {
        endInputRef.current?.focus();
      }, 100);
    }
    // If focused on end input, set end date only (keep start date if exists)
    else if (focusedInput === "end") {
      setTempEndDate(date);
      // Don't swap or clear start date - just set end date
    }
    // Default behavior when no input is focused (original logic)
    else {
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
    }
  };

  const handleConfirm = () => {
    onDatesChange(tempStartDate, tempEndDate);
  };

  const handleClearStartDate = () => {
    setTempStartDate(null);
  };

  const handleClearEndDate = () => {
    setTempEndDate(null);
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
      className={`bg-white rounded-lg shadow-lg overflow-hidden ${className}`}
      style={{
        width: "360px",
        maxHeight: "600px",
        overflowY: "auto",
        border: "1px solid var(--grey-03)",
      }}
    >
      {/* Header */}
      <div
        className="px-4 py-3"
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
          {/* Start Date Input */}
          <div style={{ width: "156px", flexShrink: 0 }}>
            <label
              style={{
                display: "block",
                fontSize: "var(--text-label)",
                fontWeight: "var(--font-weight-medium)",
                color: "var(--text-primary)",
                marginBottom: "var(--spacing-8)",
              }}
            >
              Start Date
            </label>
            <div
              className="relative flex items-center transition-all"
              style={{
                border: `1px solid ${focusedInput === "start" ? "var(--black)" : "var(--border)"}`,
                borderRadius: "var(--radius-8)",
                backgroundColor: "var(--input-background)",
                height: "var(--size-sm)",
                width: "100%",
              }}
            >
              <input
                ref={startInputRef}
                value={formatDate(tempStartDate)}
                placeholder="MM / DD / YYYY"
                readOnly
                onFocus={() => setFocusedInput("start")}
                onBlur={() => setFocusedInput(null)}
                className="flex-1 bg-transparent outline-none cursor-pointer"
                style={{
                  padding: "var(--spacing-8) var(--spacing-12)",
                  paddingRight: tempStartDate
                    ? "var(--spacing-36)"
                    : "var(--spacing-12)",
                  fontSize: "var(--text-label)",
                  fontWeight: "var(--font-weight-regular)",
                  color: "var(--text-primary)",
                  width: "100%",
                }}
              />
              {/* Clear Button - inside input */}
              {tempStartDate && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClearStartDate();
                  }}
                  className="absolute right-[var(--spacing-12)] flex items-center justify-center cursor-pointer"
                  style={{
                    background: "transparent",
                    border: "none",
                    padding: 0,
                    color: "var(--grey-05)",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color =
                      "var(--text-primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color =
                      "var(--grey-05)";
                  }}
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </div>

          {/* End Date Input */}
          <div style={{ width: "156px", flexShrink: 0 }}>
            <label
              style={{
                display: "block",
                fontSize: "var(--text-label)",
                fontWeight: "var(--font-weight-medium)",
                color: "var(--text-primary)",
                marginBottom: "var(--spacing-8)",
              }}
            >
              End Date
            </label>
            <div
              className="relative flex items-center transition-all"
              style={{
                border: `1px solid ${focusedInput === "end" ? "var(--black)" : "var(--border)"}`,
                borderRadius: "var(--radius-8)",
                backgroundColor: "var(--input-background)",
                height: "var(--size-sm)",
                width: "100%",
              }}
            >
              <input
                ref={endInputRef}
                value={formatDate(tempEndDate)}
                placeholder="MM / DD / YYYY"
                readOnly
                onFocus={() => setFocusedInput("end")}
                onBlur={() => setFocusedInput(null)}
                className="flex-1 bg-transparent outline-none cursor-pointer"
                style={{
                  padding: "var(--spacing-8) var(--spacing-12)",
                  paddingRight: tempEndDate
                    ? "var(--spacing-36)"
                    : "var(--spacing-12)",
                  fontSize: "var(--text-label)",
                  fontWeight: "var(--font-weight-regular)",
                  color: "var(--text-primary)",
                  width: "100%",
                }}
              />
              {/* Clear Button - inside input */}
              {tempEndDate && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClearEndDate();
                  }}
                  className="absolute right-[var(--spacing-12)] flex items-center justify-center cursor-pointer"
                  style={{
                    background: "transparent",
                    border: "none",
                    padding: 0,
                    color: "var(--grey-05)",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color =
                      "var(--text-primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color =
                      "var(--grey-05)";
                  }}
                >
                  <X size={16} />
                </button>
              )}
            </div>
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
              const isDisabled = isDateDisabled(day.fullDate);

              return (
                <div
                  key={dayIndex}
                  className="relative"
                  style={{ width: "32px", height: "32px" }}
                >
                  {/* Range Background */}
                  {isSelectedDate && !isDisabled && (
                    <div
                      className="absolute inset-y-0"
                      style={{
                        backgroundColor: "var(--grey-02)",
                        left: isStart ? "50%" : "-100%",
                        right: isEnd ? "50%" : "-100%",
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
                    onMouseDown={(e) => {
                      // Prevent blur on inputs
                      e.preventDefault();
                    }}
                    onClick={() =>
                      handleDateClick(day.fullDate)
                    }
                    disabled={isDisabled}
                    className={`relative size-8 flex items-center justify-center rounded-full transition-colors z-10 ${
                      isDisabled
                        ? "cursor-not-allowed opacity-40"
                        : isStart || isEnd
                          ? "bg-black hover:bg-black cursor-pointer"
                          : isSelectedDate
                            ? "cursor-pointer"
                            : "hover:bg-secondary cursor-pointer"
                    } ${
                      todayIndicator &&
                      !isStart &&
                      !isEnd &&
                      !isDisabled
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
                          !isStart && !isEnd && !isCurrentMonth
                            ? "var(--grey-05)"
                            : undefined,
                      }}
                    >
                      {day.date}
                    </p>
                  </button>
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
          disabled={!tempStartDate && !tempEndDate}
          className="px-4 py-2 text-[14px] rounded-lg transition-colors"
          style={{
            fontWeight: "var(--font-weight-semibold)",
            backgroundColor:
              tempStartDate || tempEndDate
                ? "var(--black)"
                : "var(--grey-03)",
            color:
              tempStartDate || tempEndDate
                ? "var(--white)"
                : "var(--grey-04)",
            cursor:
              tempStartDate || tempEndDate
                ? "pointer"
                : "not-allowed",
          }}
          onMouseEnter={(e) => {
            if (tempStartDate || tempEndDate) {
              e.currentTarget.style.backgroundColor =
                "var(--text-secondary)";
            }
          }}
          onMouseLeave={(e) => {
            if (tempStartDate || tempEndDate) {
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