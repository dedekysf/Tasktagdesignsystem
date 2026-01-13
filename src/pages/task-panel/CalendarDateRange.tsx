import { useEffect, useRef } from 'react';
import { DateRangeCalendar } from '../../components/DateRangeCalendar';

interface CalendarDateRangeProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (startDate: Date | null, endDate: Date | null) => void;
  buttonRef: React.RefObject<HTMLElement>;
  startDate: Date | null;
  endDate: Date | null;
}

export function CalendarDateRange({ isOpen, onClose, onSelect, buttonRef, startDate, endDate }: CalendarDateRangeProps) {
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose, buttonRef]);

  if (!isOpen) return null;

  const handleDatesChange = (start: Date | null, end: Date | null) => {
    onSelect(start, end);
    onClose();
  };

  return (
    <div
      ref={calendarRef}
      className="absolute z-50 mt-2 rounded-lg shadow-lg border border-[#e8e8e8] bg-white overflow-hidden"
      style={{
        width: '320px',
      }}
    >
      <DateRangeCalendar
        startDate={startDate}
        endDate={endDate}
        onDatesChange={handleDatesChange}
        onClose={onClose}
      />
    </div>
  );
}