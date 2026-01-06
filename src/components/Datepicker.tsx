import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './Button';

export type DatepickerVariant = 'basic' | 'with-label';
export type DatepickerSize = 'sm' | 'md';

interface DatepickerProps {
  /** Datepicker variant: basic, with-label */
  variant?: DatepickerVariant;
  /** Datepicker size: sm, md */
  size?: DatepickerSize;
  /** Custom className for additional styling */
  className?: string;
  /** Label text (for with-label variant) */
  label?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Selected date value */
  value?: Date | null;
  /** Change handler */
  onChange?: (date: Date | null) => void;
  /** Disabled state */
  disabled?: boolean;
  /** Error state */
  error?: boolean;
}

const DAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export function Datepicker({
  variant = 'basic',
  size = 'md',
  className = '',
  label,
  placeholder = 'Select date',
  value = null,
  onChange,
  disabled = false,
  error = false
}: DatepickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState<Date | null>(value);

  const sizeStyles = {
    sm: {
      input: {
        padding: 'var(--spacing-8) var(--spacing-12)',
        minHeight: 'var(--size-sm)',
        fontSize: 'var(--text-label)'
      },
      label: {
        fontSize: 'var(--text-label)',
        marginBottom: 'var(--spacing-4)'
      }
    },
    md: {
      input: {
        padding: 'var(--spacing-12) var(--spacing-16)',
        minHeight: 'var(--size-md)',
        fontSize: 'var(--text-base)'
      },
      label: {
        fontSize: 'var(--text-base)',
        marginBottom: 'var(--spacing-8)'
      }
    }
  };

  const currentSize = sizeStyles[size];

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
    const days = [];

    // Previous month days
    const prevMonthDays = getDaysInMonth(currentMonth - 1, currentYear);
    for (let i = firstDay - 1; i >= 0; i--) {
      days.push({
        day: prevMonthDays - i,
        isCurrentMonth: false,
        date: new Date(currentYear, currentMonth - 1, prevMonthDays - i)
      });
    }

    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        day: i,
        isCurrentMonth: true,
        date: new Date(currentYear, currentMonth, i)
      });
    }

    // Next month days
    const remainingDays = 42 - days.length; // 6 rows * 7 days
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        day: i,
        isCurrentMonth: false,
        date: new Date(currentYear, currentMonth + 1, i)
      });
    }

    return days;
  };

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
  };

  const handleConfirm = () => {
    if (onChange) {
      onChange(selectedDate);
    }
    setIsOpen(false);
  };

  const handleClear = () => {
    setSelectedDate(null);
    if (onChange) {
      onChange(null);
    }
  };

  const isSameDay = (date1: Date | null, date2: Date) => {
    if (!date1) return false;
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const formatDate = (date: Date | null) => {
    if (!date) return '';
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  };

  const calendarDays = generateCalendarDays();

  const inputElement = (
    <button
      type="button"
      onClick={() => !disabled && setIsOpen(true)}
      disabled={disabled}
      className={`input ${error ? 'input-error' : ''} ${disabled ? 'input-disabled' : ''} ${className}`}
      style={{
        ...currentSize.input,
        textAlign: 'left',
        cursor: disabled ? 'not-allowed' : 'pointer',
        color: selectedDate ? 'var(--text-primary)' : 'var(--text-secondary)',
        width: '100%'
      }}
    >
      {selectedDate ? formatDate(selectedDate) : placeholder}
    </button>
  );

  return (
    <>
      {variant === 'with-label' && label ? (
        <div style={{ width: '100%' }}>
          <label
            style={{
              display: 'block',
              ...currentSize.label,
              color: disabled ? 'var(--text-secondary)' : 'var(--text-primary)'
            }}
          >
            {label}
          </label>
          {inputElement}
        </div>
      ) : (
        inputElement
      )}

      {/* Modal */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'var(--overlay)',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            zIndex: 9999
          }}
          onClick={() => setIsOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: 'var(--white)',
              borderRadius: 'var(--radius-24) var(--radius-24) 0 0',
              width: '100%',
              maxWidth: '375px',
              padding: 'var(--spacing-24)',
              paddingBottom: 'var(--spacing-32)',
              boxShadow: 'var(--elevation-xl)'
            }}
          >
            {/* Header */}
            <div
              style={{
                position: 'relative',
                textAlign: 'center',
                marginBottom: 'var(--spacing-24)'
              }}
            >
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  position: 'absolute',
                  left: 0,
                  background: 'none',
                  border: 'none',
                  color: 'var(--secondary-green)',
                  cursor: 'pointer',
                  fontSize: 'var(--text-base)',
                  padding: 0
                }}
              >
                Cancel
              </button>
              <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 'var(--font-weight-semibold)' }}>
                Select Date
              </h3>
            </div>

            {/* Month Navigation */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 'var(--spacing-24)'
              }}
            >
              <button
                onClick={handlePrevMonth}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 'var(--spacing-4)',
                  display: 'flex',
                  alignItems: 'center',
                  color: 'var(--text-primary)'
                }}
              >
                <ChevronLeft size={20} />
              </button>
              <span style={{ fontSize: 'var(--text-base)', fontWeight: 'var(--font-weight-medium)' }}>
                {MONTHS[currentMonth]} {currentYear}
              </span>
              <button
                onClick={handleNextMonth}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 'var(--spacing-4)',
                  display: 'flex',
                  alignItems: 'center',
                  color: 'var(--text-primary)'
                }}
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Calendar Grid */}
            <div style={{ marginBottom: 'var(--spacing-32)' }}>
              {/* Day headers */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(7, 1fr)',
                  gap: 'var(--spacing-4)',
                  marginBottom: 'var(--spacing-12)'
                }}
              >
                {DAYS.map((day, idx) => (
                  <div
                    key={idx}
                    style={{
                      textAlign: 'center',
                      fontSize: 'var(--text-label)',
                      color: 'var(--text-secondary)',
                      fontWeight: 'var(--font-weight-semibold)'
                    }}
                  >
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar days */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(7, 1fr)',
                  gap: 'var(--spacing-4)'
                }}
              >
                {calendarDays.map((dayObj, idx) => {
                  const isSelected = isSameDay(selectedDate, dayObj.date);
                  const isTodayDate = isToday(dayObj.date);
                  return (
                    <button
                      key={idx}
                      onClick={() => handleDateSelect(dayObj.date)}
                      style={{
                        aspectRatio: '1',
                        border: isTodayDate && !isSelected ? '1px solid var(--grey-04)' : 'none',
                        borderRadius: '50%',
                        background: isSelected ? 'var(--grey-06)' : 'transparent',
                        color: isSelected
                          ? 'var(--white)'
                          : dayObj.isCurrentMonth
                          ? 'var(--text-primary)'
                          : 'var(--text-secondary)',
                        fontSize: '14px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.2s ease',
                        fontWeight: 'var(--font-weight-regular)',
                        letterSpacing: '0.28px',
                        position: 'relative'
                      }}
                      onMouseEnter={(e) => {
                        if (!isSelected) {
                          e.currentTarget.style.backgroundColor = 'var(--grey-02)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isSelected) {
                          e.currentTarget.style.backgroundColor = 'transparent';
                        }
                      }}
                    >
                      {dayObj.day}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Action Buttons */}
            <div
              style={{
                display: 'flex',
                gap: 'var(--spacing-12)',
                width: '100%'
              }}
            >
              <Button 
                size="lg" 
                className="btn-secondary" 
                onClick={handleConfirm}
                style={{
                  flex: 1,
                  borderRadius: 'var(--radius-full)'
                }}
              >
                Confirm
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="btn-secondary" 
                onClick={handleClear}
                style={{
                  flex: 1,
                  borderRadius: 'var(--radius-full)'
                }}
              >
                Clear
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}