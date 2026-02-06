import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import svgPaths from '../../imports/svg-h4wbalgk08';
import { HomeBar } from './HomeBar';

interface DateRangeSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (startDate: Date | null, endDate: Date | null) => void;
  initialStartDate?: Date | null;
  initialEndDate?: Date | null;
  hideButtons?: boolean; // New prop to hide Start Date / Due Date buttons
}

export function DateRangeSheet({ isOpen, onClose, onConfirm, initialStartDate, initialEndDate, hideButtons = false }: DateRangeSheetProps) {
  const [startDate, setStartDate] = useState<Date | null>(initialStartDate || null);
  const [endDate, setEndDate] = useState<Date | null>(initialEndDate || null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [isClosing, setIsClosing] = useState(false);
  const [selectionMode, setSelectionMode] = useState<'range' | 'start' | 'due'>('range');

  useEffect(() => {
    if (isOpen) {
      setIsClosing(false);
      setStartDate(initialStartDate || null);
      setEndDate(initialEndDate || null);
      setSelectionMode('range');
      
      // Set current month to show the selected date's month
      if (initialStartDate) {
        setCurrentMonth(new Date(initialStartDate.getFullYear(), initialStartDate.getMonth(), 1));
      } else if (initialEndDate) {
        setCurrentMonth(new Date(initialEndDate.getFullYear(), initialEndDate.getMonth(), 1));
      } else {
        setCurrentMonth(new Date());
      }
    }
  }, [isOpen, initialStartDate, initialEndDate]);

  if (!isOpen && !isClosing) return null;

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 250);
  };

  const handleDateClick = (date: Date) => {
    if (selectionMode === 'start') {
      // Single start date selection (keep endDate)
      // If endDate exists and selected date is after endDate, don't allow
      if (endDate && date > endDate) {
        return;
      }
      setStartDate(date);
      // Auto-shift to due date mode after selecting start date
      setSelectionMode('due');
    } else if (selectionMode === 'due') {
      // Single due date selection (keep startDate)
      // If startDate exists and selected date is before startDate, don't allow
      if (startDate && date < startDate) {
        return;
      }
      setEndDate(date);
    } else {
      // Range mode: default behavior
      if (!startDate || (startDate && endDate)) {
        // Start new selection
        setStartDate(date);
        setEndDate(null);
      } else if (startDate && !endDate) {
        // Set end date
        if (date < startDate) {
          // If clicked date is before start, make it the new start
          setEndDate(startDate);
          setStartDate(date);
        } else {
          setEndDate(date);
        }
      }
    }
  };

  const handleStartDateMode = () => {
    if (selectionMode === 'start') {
      // Unselect start date mode, back to range
      setSelectionMode('range');
    } else {
      // Select start date mode (keep endDate)
      setSelectionMode('start');
    }
  };

  const handleDueDateMode = () => {
    if (selectionMode === 'due') {
      // Unselect due date mode, back to range
      setSelectionMode('range');
    } else {
      // Select due date mode (keep startDate)
      setSelectionMode('due');
    }
  };

  const handleClearStartDate = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent button onClick from firing
    setStartDate(null);
  };

  const handleClearDueDate = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent button onClick from firing
    setEndDate(null);
  };

  const formatShortDate = (date: Date | null) => {
    if (!date) return '';
    const month = date.toLocaleDateString('en-US', { month: 'short' });
    const day = date.getDate();
    const currentYear = new Date().getFullYear();
    const dateYear = date.getFullYear();
    
    // Show year if not current year
    if (dateYear !== currentYear) {
      return `${month} ${day}, ${dateYear}`;
    }
    
    return `${month} ${day}`;
  };

  const handleClear = () => {
    // Clear the date based on active mode
    if (selectionMode === 'start') {
      setStartDate(null);
    } else if (selectionMode === 'due') {
      setEndDate(null);
    } else {
      // Range mode: clear both
      setStartDate(null);
      setEndDate(null);
    }
  };

  const handleConfirm = () => {
    onConfirm(startDate, endDate);
    handleClose();
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const formatDate = (date: Date | null) => {
    if (!date) return '';
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    return `${month} / ${day} / ${year}`;
  };

  const getMonthName = () => {
    return currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  const getDaysInMonth = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days: (Date | null)[] = [];

    // Add previous month's days
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      days.push(new Date(year, month - 1, prevMonthLastDay - i));
    }

    // Add current month's days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }

    // Add next month's days to complete the grid
    const remainingDays = 42 - days.length; // 6 rows * 7 days
    for (let i = 1; i <= remainingDays; i++) {
      days.push(new Date(year, month + 1, i));
    }

    return days;
  };

  const isDateInRange = (date: Date) => {
    if (!startDate || !endDate) return false;
    return date > startDate && date < endDate;
  };

  const isStartDate = (date: Date) => {
    if (!startDate) return false;
    return date.toDateString() === startDate.toDateString();
  };

  const isEndDate = (date: Date) => {
    if (!endDate) return false;
    return date.toDateString() === endDate.toDateString();
  };

  const isCurrentMonth = (date: Date) => {
    return date.getMonth() === currentMonth.getMonth();
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const isDateDisabled = (date: Date) => {
    // In start date mode: disable dates after endDate
    if (selectionMode === 'start' && endDate) {
      return date > endDate;
    }
    // In due date mode: disable dates before startDate
    if (selectionMode === 'due' && startDate) {
      return date < startDate;
    }
    return false;
  };

  const days = getDaysInMonth();
  const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  // Check if any date is selected
  const hasSelection = startDate !== null || endDate !== null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 z-50"
        onClick={handleClose}
      />
      
      {/* Bottom Sheet */}
      <div className={`absolute bottom-0 left-0 right-0 z-50 ${isClosing ? 'animate-slide-out-to-bottom' : 'animate-slide-in-from-bottom'}`}>
        <div className="bg-white rounded-t-[24px] flex flex-col">
          {/* Pull Up Indicator */}
          <div className="flex flex-col items-center pb-2 pt-4 w-full">
            <div className="bg-tertiary h-1 rounded-[2.5px] w-[56.25px]" />
          </div>

          {/* Header */}
          <div className="relative shrink-0 w-full px-2 py-2">
            <div className="flex items-center gap-4 relative w-full">
              <button
                onClick={handleClose}
                className="flex gap-2 items-center justify-center px-4 py-2 rounded-lg"
              >
                <p className="text-primary" style={{ fontSize: '16px', fontWeight: 500 }}>Cancel</p>
              </button>
              <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-foreground" style={{ fontSize: '16px', fontWeight: 600 }}>
                Select Dates
              </p>
            </div>
          </div>

          {/* Start Date / Due Date Buttons */}
          {!hideButtons && (
            <div className="flex gap-4 px-6 py-2">
              <button
                onClick={handleStartDateMode}
                className={`flex-1 min-w-0 h-8 flex items-center justify-center gap-1.5 px-3 rounded-full border transition-colors ${
                  selectionMode === 'start' 
                    ? 'border-foreground bg-foreground' 
                    : 'border-border bg-background'
                }`}
              >
                <span 
                  className={`truncate ${selectionMode === 'start' ? 'text-primary-foreground' : 'text-foreground'}`}
                  style={{ fontSize: '12px', fontWeight: 400 }}
                >
                  {startDate ? formatShortDate(startDate) : 'Start date'}
                </span>
              </button>

              <button
                onClick={handleDueDateMode}
                className={`flex-1 min-w-0 h-8 flex items-center justify-center gap-1.5 px-3 rounded-full border transition-colors ${
                  selectionMode === 'due' 
                    ? 'border-foreground bg-foreground' 
                    : 'border-border bg-background'
                }`}
              >
                <span 
                  className={`truncate ${selectionMode === 'due' ? 'text-primary-foreground' : 'text-foreground'}`}
                  style={{ fontSize: '12px', fontWeight: 400 }}
                >
                  {endDate ? formatShortDate(endDate) : 'Due date'}
                </span>
              </button>
            </div>
          )}

          {/* Calendar */}
          <div className="px-6 py-2">
            {/* Month Navigation */}
            <div className="flex items-center gap-2 py-2 mb-2">
              <button onClick={prevMonth} className="flex items-center justify-center size-7">
                <ChevronLeft className="w-6 h-6 text-foreground" strokeWidth={2} />
              </button>
              <p className="flex-1 text-center text-muted-foreground" style={{ fontSize: '14px', fontWeight: 500 }}>
                {getMonthName()}
              </p>
              <button onClick={nextMonth} className="flex items-center justify-center size-7">
                <ChevronRight className="w-6 h-6 text-foreground" strokeWidth={2} />
              </button>
            </div>

            {/* Week Days */}
            <div className="flex gap-4 items-center justify-center py-1 w-full mb-1">
              {weekDays.map((day, index) => (
                <div key={index} className="flex items-center justify-center size-8">
                  <p className="text-muted-foreground text-center" style={{ fontSize: '14px', fontWeight: 500 }}>
                    {day}
                  </p>
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="flex flex-col">
              {Array.from({ length: 6 }).map((_, weekIndex) => (
                <div key={weekIndex} className="flex items-center justify-center py-1 relative">
                  {days.slice(weekIndex * 7, (weekIndex + 1) * 7).map((date, dayIndex) => {
                    if (!date) return <div key={dayIndex} className="size-8" />;
                    
                    const inRange = isDateInRange(date);
                    const isStart = isStartDate(date);
                    const isEnd = isEndDate(date);
                    const isCurrent = isCurrentMonth(date);
                    const isTodayDate = isToday(date);
                    const isDisabled = isDateDisabled(date);

                    return (
                      <div key={dayIndex} className="relative flex-1 flex items-center justify-center" style={{ height: '32px' }}>
                        {/* Background for range - seamless with rounded edges only behind selected dates */}
                        {(inRange || isStart || isEnd) && (
                          <div 
                            className="absolute bg-border"
                            style={{
                              top: 0,
                              bottom: 0,
                              left: isStart ? '20%' : 0,
                              right: isEnd ? '20%' : 0,
                              borderTopLeftRadius: isStart ? '16px' : '0',
                              borderBottomLeftRadius: isStart ? '16px' : '0',
                              borderTopRightRadius: isEnd ? '16px' : '0',
                              borderBottomRightRadius: isEnd ? '16px' : '0',
                            }}
                          />
                        )}
                        
                        {/* Date circle */}
                        <button
                          onClick={() => handleDateClick(date)}
                          className={`relative flex items-center justify-center size-8 rounded-full z-10 ${
                            isTodayDate && !isStart && !isEnd ? 'border border-muted-foreground' : ''
                          } ${
                            isStart || isEnd ? 'bg-foreground' : ''
                          } ${
                            isDisabled ? 'opacity-40 cursor-not-allowed' : ''
                          }`}
                        >
                          <p
                            className={`text-center ${
                              isStart || isEnd ? 'text-primary-foreground' : !isCurrent ? 'text-grey-4' : 'text-muted-foreground'
                            }`}
                            style={{
                              fontSize: isStart || isEnd ? '14px' : '14px',
                              fontWeight: isStart || isEnd ? 500 : 400,
                              letterSpacing: !isStart && !isEnd ? '0.28px' : undefined,
                            }}
                          >
                            {date.getDate()}
                          </p>
                        </button>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 px-6 py-4 border-t border-border">
            <button
              onClick={handleClear}
              className="flex-1 h-12 rounded-lg flex items-center justify-center"
            >
              <p className="body text-foreground">Clear</p>
            </button>
            <button
              onClick={handleConfirm}
              className="flex-1 h-12 rounded-full flex items-center justify-center bg-foreground"
            >
              <p className="body text-primary-foreground">Confirm</p>
            </button>
          </div>

          {/* Home Bar */}
          <HomeBar />
        </div>
      </div>
    </>
  );
}
