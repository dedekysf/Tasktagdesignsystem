import { useState, useEffect } from 'react';
import { HomeBar } from './HomeBar';
import svgPaths from '../../imports/svg-h4wbalgk08';

interface DatePickerSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onDateSelect: (date: Date | null) => void;
  currentDate?: string;
}

export function DatePickerSheet({ isOpen, onClose, onDateSelect, currentDate }: DatePickerSheetProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [isClosing, setIsClosing] = useState(false);

  // Parse currentDate when sheet opens
  useEffect(() => {
    if (isOpen && currentDate && currentDate !== 'Due Date') {
      const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      
      // Extract the date from different formats
      let dateStr = currentDate;
      
      // Remove "Due " prefix if exists (format: "Due Feb 24")
      if (dateStr.startsWith('Due ')) {
        dateStr = dateStr.substring(4);
      }
      
      // Extract the end date from date range (format: "Nov 25 – Feb 2" or "Feb 25 – Jan 2")
      if (dateStr.includes('–')) {
        // Extract end date (after the dash)
        dateStr = dateStr.split('–')[1].trim();
      }
      
      const parts = dateStr.split(' ');
      
      if (parts.length === 2) {
        // Format: "Feb 24" or "Dec 25"
        const monthIndex = monthNames.indexOf(parts[0]);
        const day = parseInt(parts[1]);
        const year = new Date().getFullYear();
        if (monthIndex !== -1 && !isNaN(day)) {
          const parsedDate = new Date(year, monthIndex, day);
          setSelectedDate(parsedDate);
          setCurrentMonth(parsedDate);
        }
      } else if (parts.length === 3) {
        // Format: "Jan 2, 2026"
        const monthIndex = monthNames.indexOf(parts[0]);
        const day = parseInt(parts[1].replace(',', ''));
        const year = parseInt(parts[2]);
        if (monthIndex !== -1 && !isNaN(day) && !isNaN(year)) {
          const parsedDate = new Date(year, monthIndex, day);
          setSelectedDate(parsedDate);
          setCurrentMonth(parsedDate);
        }
      }
    } else if (isOpen) {
      // Reset when opening without currentDate
      setSelectedDate(null);
      setCurrentMonth(new Date());
    }
  }, [isOpen, currentDate]);

  useEffect(() => {
    if (isOpen) {
      setIsClosing(false);
    }
  }, [isOpen]);

  if (!isOpen && !isClosing) return null;

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 250); // Match animation duration
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days: (number | null)[] = [];
    
    // Add previous month's days
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      days.push(prevMonthLastDay - i);
    }

    // Add current month's days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    // Add next month's days
    const remainingDays = 42 - days.length; // 6 rows * 7 days
    for (let i = 1; i <= remainingDays; i++) {
      days.push(i);
    }

    return { days, startingDayOfWeek, daysInMonth };
  };

  const { days, startingDayOfWeek, daysInMonth } = getDaysInMonth(currentMonth);

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const handleDateClick = (day: number | null, index: number) => {
    if (day === null) return;

    let targetDate: Date;
    
    if (index < startingDayOfWeek) {
      // Previous month
      targetDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, day);
    } else if (index >= startingDayOfWeek + daysInMonth) {
      // Next month
      targetDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, day);
    } else {
      // Current month
      targetDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    }

    setSelectedDate(targetDate);
  };

  const handleConfirm = () => {
    onDateSelect(selectedDate);
    handleClose();
  };

  const handleClear = () => {
    setSelectedDate(null);
  };

  const handleCancel = () => {
    setSelectedDate(null);
    handleClose();
  };

  const isToday = (day: number | null, index: number) => {
    if (day === null) return false;
    const today = new Date();
    
    let checkDate: Date;
    if (index < startingDayOfWeek) {
      checkDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, day);
    } else if (index >= startingDayOfWeek + daysInMonth) {
      checkDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, day);
    } else {
      checkDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    }

    return checkDate.getDate() === today.getDate() &&
           checkDate.getMonth() === today.getMonth() &&
           checkDate.getFullYear() === today.getFullYear();
  };

  const isSelected = (day: number | null, index: number) => {
    if (!selectedDate || day === null) return false;
    
    let checkDate: Date;
    if (index < startingDayOfWeek) {
      checkDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, day);
    } else if (index >= startingDayOfWeek + daysInMonth) {
      checkDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, day);
    } else {
      checkDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    }

    return checkDate.getDate() === selectedDate.getDate() &&
           checkDate.getMonth() === selectedDate.getMonth() &&
           checkDate.getFullYear() === selectedDate.getFullYear();
  };

  const isCurrentMonth = (index: number) => {
    return index >= startingDayOfWeek && index < startingDayOfWeek + daysInMonth;
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 z-40"
        onClick={handleClose}
      />

      {/* Bottom Sheet */}
      <div className={`absolute bottom-0 left-0 right-0 bg-card rounded-t-[24px] z-50 ${isClosing ? 'animate-slide-out-to-bottom' : 'animate-slide-in-from-bottom'}`}>
        {/* Handle */}
        <div className="flex flex-col items-center pb-2 pt-4 w-full">
          <div className="bg-tertiary h-1 rounded-[2.5px] w-[56.25px]" />
        </div>

        {/* Header with Cancel and Title */}
        <div className="relative shrink-0 w-full px-2 py-2">
          <div className="flex items-center gap-4 relative w-full">
            <button 
              onClick={handleCancel}
              className="flex gap-2 items-center justify-center px-4 py-2 rounded-lg"
            >
              <p className="text-primary" style={{ fontSize: '16px', fontWeight: 500 }}>Cancel</p>
            </button>
            <p 
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-foreground"
              style={{ fontSize: '16px', fontWeight: 600 }}
            >
              Due Date
            </p>
          </div>
        </div>

        {/* Calendar Container */}
        <div className="px-6 py-2">
          {/* Month Navigation */}
          <div className="flex items-center gap-2 py-2 mb-2">
            <button 
              onClick={handlePrevMonth}
              className="flex items-center justify-center size-7"
            >
              <svg className="block size-6" fill="none" viewBox="0 0 24 24">
                <path 
                  clipRule="evenodd" 
                  d={svgPaths.p1281c00} 
                  fill="black" 
                  fillRule="evenodd" 
                />
              </svg>
            </button>
            <p 
              className="flex-1 text-center text-muted-foreground"
              style={{ fontSize: '14px', fontWeight: 500 }}
            >
              {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </p>
            <button 
              onClick={handleNextMonth}
              className="flex items-center justify-center size-7"
            >
              <svg className="block size-6" fill="none" viewBox="0 0 24 24">
                <path 
                  clipRule="evenodd" 
                  d={svgPaths.pcdb3800} 
                  fill="black" 
                  fillRule="evenodd" 
                />
              </svg>
            </button>
          </div>

          {/* Days of Week */}
          <div className="flex gap-4 items-center justify-center py-1 w-full mb-1">
            {daysOfWeek.map((day, index) => (
              <div 
                key={index}
                className="flex items-center justify-center size-8"
              >
                <p className="text-muted-foreground text-center" style={{ fontSize: '14px', fontWeight: 500 }}>
                  {day}
                </p>
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="flex flex-col">
            {[...Array(6)].map((_, rowIndex) => (
              <div key={rowIndex} className="flex items-center justify-center py-1 relative">
                {days.slice(rowIndex * 7, (rowIndex + 1) * 7).map((day, colIndex) => {
                  const index = rowIndex * 7 + colIndex;
                  const today = isToday(day, index);
                  const selected = isSelected(day, index);
                  const currentMonthDay = isCurrentMonth(index);

                  return (
                    <div key={index} className="relative flex-1 flex items-center justify-center" style={{ height: '32px' }}>
                      <button
                        onClick={() => handleDateClick(day, index)}
                        className={`relative flex items-center justify-center size-8 rounded-full z-10 ${
                          today && !selected ? 'border border-muted-foreground' : ''
                        } ${
                          selected ? 'bg-foreground' : ''
                        }`}
                      >
                        <p
                          className={`text-center ${
                            selected ? 'text-primary-foreground' : !currentMonthDay ? 'text-grey-4' : 'text-muted-foreground'
                          }`}
                          style={{
                            fontSize: selected ? '14px' : '14px',
                            fontWeight: selected ? 500 : 400,
                            letterSpacing: !selected ? '0.28px' : undefined,
                          }}
                        >
                          {day}
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
            disabled={!selectedDate}
            className={`flex-1 h-12 rounded-lg flex items-center justify-center ${
              !selectedDate ? 'opacity-40 cursor-not-allowed' : ''
            }`}
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

        <HomeBar />
      </div>
    </>
  );
}
