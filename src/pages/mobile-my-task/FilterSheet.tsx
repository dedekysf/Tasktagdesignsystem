import { useState, useEffect, useRef, useMemo } from 'react';
import { ChevronDown, ChevronUp, Calendar, Zap } from 'lucide-react';
import svgPaths from "../../imports/svg-qo0e9dk7zu";
import helmetPath from "../../imports/svg-ngfg9xj07v";
import { HomeBar } from './HomeBar';
import { Checkbox } from './ui/Checkbox';
import { Avatar } from './ui/Avatar';
import { FilterSection } from './ui/FilterSection';
import { DateRangeSheet } from './DateRangeSheet';
import { ASSIGNEES } from './utils/assignees';

interface Project {
  name: string;
  icon: string;
  color: string;
}

interface FilterSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onReopen?: () => void;
  projects: Project[];
  onApplyFilters?: (filters: {
    projects: string[];
    dueDate: 'today' | 'tomorrow' | 'next3days' | 'custom' | null;
    dateRange: { start: Date | null; end: Date | null };
    priority: ('high' | 'medium' | 'low')[];
    assignee: string[];
  }) => void;
}

export function FilterSheet({ isOpen, onClose, onReopen, projects, onApplyFilters }: FilterSheetProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>('projects');
  const [isDateRangeOpen, setIsDateRangeOpen] = useState(false);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  const [selectedFilters, setSelectedFilters] = useState({
    projects: [] as number[],
    assignee: [] as number[],
    dueDate: null as number | null, // Changed to single select
    priority: [] as number[],
  });

  useEffect(() => {
    if (isOpen) {
      setIsClosing(false);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 250);
  };

  const toggleSection = (section: string) => {
    setExpandedSection(prev => prev === section ? null : section);
  };

  // Apply filters whenever selectedFilters, startDate, or endDate changes
  useEffect(() => {
    if (!onApplyFilters) return;

    // Convert filter indices to actual values
    const projectNames = selectedFilters.projects.map(index => projects[index]?.name).filter(Boolean);
    const assigneeNames = selectedFilters.assignee.map(index => ASSIGNEES[index]?.name).filter(Boolean);
    const priorityValues = selectedFilters.priority.map(index => {
      if (index === 0) return 'low';
      if (index === 1) return 'medium';
      if (index === 2) return 'high';
      return null;
    }).filter(Boolean) as ('high' | 'medium' | 'low')[];

    // Convert due date index to value
    let dueDateValue: 'today' | 'tomorrow' | 'next3days' | 'custom' | null = null;
    if (selectedFilters.dueDate === 0) dueDateValue = 'today';
    else if (selectedFilters.dueDate === 1) dueDateValue = 'tomorrow';
    else if (selectedFilters.dueDate === 2) dueDateValue = 'next3days';
    else if (selectedFilters.dueDate === 3) dueDateValue = 'custom';

    onApplyFilters({
      projects: projectNames,
      dueDate: dueDateValue,
      dateRange: { start: startDate, end: endDate },
      priority: priorityValues,
      assignee: assigneeNames,
    });
  }, [selectedFilters, startDate, endDate, onApplyFilters]);

  const toggleProjectFilter = (index: number) => {
    setSelectedFilters(prev => ({
      ...prev,
      projects: prev.projects.includes(index)
        ? prev.projects.filter(i => i !== index)
        : [...prev.projects, index],
    }));
  };

  const toggleAssigneeFilter = (index: number) => {
    setSelectedFilters(prev => ({
      ...prev,
      assignee: prev.assignee.includes(index)
        ? prev.assignee.filter(i => i !== index)
        : [...prev.assignee, index],
    }));
  };

  const toggleDueDateFilter = (index: number) => {
    // If "Select Dates" is clicked (index 3), open the date range sheet
    if (index === 3) {
      setIsDateRangeOpen(true);
      // Don't close FilterSheet - just hide its content
      return;
    }
    
    // If user selects other due date options, clear the custom date range
    setStartDate(null);
    setEndDate(null);
    
    setSelectedFilters(prev => ({
      ...prev,
      // Single select: if same index clicked, unselect (null), otherwise select new index
      dueDate: prev.dueDate === index ? null : index,
    }));
  };

  const handleDateRangeConfirm = (confirmStartDate: Date | null, confirmEndDate: Date | null) => {
    // When date range is confirmed, select "Select Dates" option and save the range
    if (confirmStartDate || confirmEndDate) {
      setSelectedFilters(prev => ({
        ...prev,
        dueDate: 3, // Index for "Select Dates"
      }));
      setStartDate(confirmStartDate);
      setEndDate(confirmEndDate);
    }
    // Close date range sheet
    setIsDateRangeOpen(false);
    // Note: FilterSheet will automatically show because isOpen prop stays true in parent
    if (onReopen) {
      onReopen();
    }
  };

  const handleDateRangeClose = () => {
    setIsDateRangeOpen(false);
    // When closing DateRangeSheet without confirming, FilterSheet stays hidden
    // User needs to manually open it again
  };

  const togglePriorityFilter = (index: number) => {
    setSelectedFilters(prev => ({
      ...prev,
      priority: prev.priority.includes(index)
        ? prev.priority.filter(i => i !== index)
        : [...prev.priority, index],
    }));
  };

  const handleClearAll = () => {
    setSelectedFilters({
      projects: [],
      assignee: [],
      dueDate: null,
      priority: [],
    });
    setStartDate(null);
    setEndDate(null);
  };



  // Check if any filter is selected
  const hasSelectedFilters = selectedFilters.projects.length > 0 || 
                              selectedFilters.assignee.length > 0 || 
                              selectedFilters.dueDate !== null ||
                              selectedFilters.priority.length > 0;

  const dueDateOptions = [
    { label: 'Today', icon: null },
    { label: 'Tomorrow', icon: null },
    { label: 'Next 3 days', icon: null },
    { label: 'Select Dates', icon: 'calendar' },
  ];

  // Format date range for display
  const formatDateRange = () => {
    if (!startDate && !endDate) return null;

    const currentYear = new Date().getFullYear();

    const formatDate = (date: Date, showYear: boolean) => {
      const day = date.getDate();
      const month = date.toLocaleDateString('en-US', { month: 'short' });
      const year = date.getFullYear();
      
      if (showYear) {
        return `${month} ${day}, ${year}`;
      }
      return `${month} ${day}`;
    };

    if (startDate && endDate) {
      const startYear = startDate.getFullYear();
      const endYear = endDate.getFullYear();
      const startMonth = startDate.getMonth();
      const endMonth = endDate.getMonth();
      
      // Check if both dates are in current year
      const bothInCurrentYear = startYear === currentYear && endYear === currentYear;
      
      // Check if same month and year
      const sameMonthAndYear = startMonth === endMonth && startYear === endYear;
      
      if (sameMonthAndYear) {
        // Same month: "Nov 25 – 28" or "Dec 2 – 5, 2026"
        const month = startDate.toLocaleDateString('en-US', { month: 'short' });
        const startDay = startDate.getDate();
        const endDay = endDate.getDate();
        
        if (startYear === currentYear) {
          return `${month} ${startDay} – ${endDay}`;
        } else {
          return `${month} ${startDay} – ${endDay}, ${startYear}`;
        }
      } else if (bothInCurrentYear) {
        // Different months, both in current year: "Nov 25 – Dec 2"
        return `${formatDate(startDate, false)} – ${formatDate(endDate, false)}`;
      } else {
        // Show years when needed
        const showStartYear = startYear !== currentYear;
        const showEndYear = endYear !== currentYear;
        return `${formatDate(startDate, showStartYear)} – ${formatDate(endDate, showEndYear)}`;
      }
    } else if (startDate) {
      const showYear = startDate.getFullYear() !== currentYear;
      return formatDate(startDate, showYear);
    } else if (endDate) {
      const showYear = endDate.getFullYear() !== currentYear;
      return formatDate(endDate, showYear);
    }
    return null;
  };

  // Don't render FilterSheet content if DateRangeSheet is open (keep bottom sheet structure)
  const showFilterContent = !isDateRangeOpen;

  // Don't render anything when not open and not closing
  if (!isOpen && !isClosing) return null;

  return (
    <>
      {/* Backdrop - inside mobile frame */}
      <div 
        className="absolute inset-0 bg-black/50 z-40"
        onClick={isDateRangeOpen ? undefined : handleClose}
        style={{ pointerEvents: isDateRangeOpen ? 'none' : 'auto' }}
      />
      
      {/* Bottom Sheet - hide when DateRangeSheet is open */}
      {showFilterContent && (
        <div className={`absolute bottom-0 left-0 right-0 z-40 ${isClosing ? 'animate-slide-out-to-bottom' : 'animate-slide-in-from-bottom'}`}>
          <div className="bg-white rounded-t-[24px] flex flex-col">
            {/* Pull Up Indicator */}
            <div className="flex flex-col items-center pb-2 pt-4 w-full">
              <div className="bg-tertiary h-1 rounded-[2.5px] w-[56.25px]" />
            </div>

            {/* Title */}
            <div className="flex flex-col items-center justify-center pt-4 px-2 pb-0">
              <p className="h6 text-foreground text-center w-full mb-4" style={{ fontWeight: 600 }}>Filter</p>

              {/* Content */}
              <div className="flex flex-col items-start w-full">
                {/* Projects */}
                <FilterSection
                  title="Projects"
                  isExpanded={expandedSection === 'projects'}
                  onToggle={() => toggleSection('projects')}
                  selectedCount={selectedFilters.projects.length}
                >
                  {projects.map((project, index) => (
                    <button
                      key={index}
                      onClick={() => toggleProjectFilter(index)}
                      className="w-full"
                    >
                      <div className="flex items-center gap-2 px-4 py-2 h-[45px]">
                        {/* Project Icon */}
                        {project.icon === 'zap' ? (
                          <Zap className="w-3 h-3 shrink-0" fill={project.color} stroke="none" />
                        ) : (
                          <svg className="w-3 h-3 shrink-0" viewBox="0 0 12 12" fill="none">
                            <path d={helmetPath.p13febe80} fill={project.color} />
                          </svg>
                        )}
                        <p className="flex-1 body text-foreground text-left overflow-hidden text-ellipsis whitespace-nowrap">{project.name}</p>
                        {/* Checkbox */}
                        <div className="shrink-0">
                          <Checkbox
                            checked={selectedFilters.projects.includes(index)}
                            onChange={() => toggleProjectFilter(index)}
                          />
                        </div>
                      </div>
                    </button>
                  ))}
                </FilterSection>

                {/* Assignee */}
                <FilterSection
                  title="Assignee"
                  isExpanded={expandedSection === 'assignee'}
                  onToggle={() => toggleSection('assignee')}
                  selectedCount={selectedFilters.assignee.length}
                >
                  {ASSIGNEES.map((assignee, index) => (
                    <button
                      key={index}
                      onClick={() => toggleAssigneeFilter(index)}
                      className="w-full"
                    >
                      <div className="flex items-center gap-2 px-4 py-2 h-[56px]">
                        {/* Avatar */}
                        <Avatar
                          name={assignee.name}
                          initials={assignee.initials}
                          color={assignee.color}
                          avatar={assignee.avatar}
                        />
                        <p className="flex-1 body text-foreground text-left overflow-hidden text-ellipsis whitespace-nowrap">{assignee.name}</p>
                        {/* Checkbox */}
                        <div className="shrink-0">
                          <Checkbox
                            checked={selectedFilters.assignee.includes(index)}
                            onChange={() => toggleAssigneeFilter(index)}
                          />
                        </div>
                      </div>
                    </button>
                  ))}
                </FilterSection>

                {/* Due Date */}
                <FilterSection
                  title="Due Date"
                  isExpanded={expandedSection === 'dueDate'}
                  onToggle={() => toggleSection('dueDate')}
                  selectedCount={selectedFilters.dueDate !== null ? 1 : 0}
                >
                  {dueDateOptions.map((option, index) => {
                    const isSelectDates = option.icon === 'calendar';
                    const dateRangeText = formatDateRange();
                    const displayText = isSelectDates && dateRangeText ? dateRangeText : option.label;
                    const hasDateRange = isSelectDates && dateRangeText !== null;

                    return (
                      <button
                        key={index}
                        onClick={() => toggleDueDateFilter(index)}
                        className="w-full"
                      >
                        <div className="flex items-center px-4 py-2 h-[45px] gap-2">
                          {/* Icon only for Select Dates */}
                          {isSelectDates && (
                            <Calendar 
                              className={`w-5 h-5 shrink-0 ${hasDateRange ? 'text-primary' : 'text-foreground'}`} 
                              strokeWidth={2} 
                            />
                          )}
                          <p className={`flex-1 body text-left ${hasDateRange ? 'text-primary' : 'text-foreground'}`}>
                            {displayText}
                          </p>
                          {/* Checkbox - hide for Select Dates */}
                          {!isSelectDates && (
                            <Checkbox
                              checked={selectedFilters.dueDate === index}
                              onChange={() => toggleDueDateFilter(index)}
                            />
                          )}
                        </div>
                      </button>
                    );
                  })}
                </FilterSection>

                {/* Priority */}
                <FilterSection
                  title="Priority"
                  isExpanded={expandedSection === 'priority'}
                  onToggle={() => toggleSection('priority')}
                  selectedCount={selectedFilters.priority.length}
                >
                  {['Low', 'Medium', 'High'].map((priority, index) => (
                    <button
                      key={index}
                      onClick={() => togglePriorityFilter(index)}
                      className="w-full"
                    >
                      <div className="flex items-center gap-2 px-4 py-2 h-[45px]">
                        <p className="flex-1 body text-foreground text-left">
                          {priority}
                        </p>
                        {/* Checkbox */}
                        <div className="shrink-0">
                          <Checkbox
                            checked={selectedFilters.priority.includes(index)}
                            onChange={() => togglePriorityFilter(index)}
                          />
                        </div>
                      </div>
                    </button>
                  ))}
                </FilterSection>

                {/* Divider Line */}
                <div className="h-2 w-full">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 359 8">
                    <line stroke="rgb(var(--color-divider))" x1="4" x2="355" y1="3.5" y2="3.5" />
                  </svg>
                </div>

                {/* Clear All Button */}
                <div className="flex h-14 items-center justify-center w-full">
                  <button
                    onClick={handleClearAll}
                    disabled={!hasSelectedFilters}
                    className={`flex-1 h-full rounded-lg ${!hasSelectedFilters ? 'cursor-not-allowed' : ''}`}
                  >
                    <div className="flex items-center justify-center gap-2 px-6 py-4 h-full">
                      <p className={`body text-center ${hasSelectedFilters ? 'text-foreground' : 'text-tertiary'}`}>Clear All</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Home Bar */}
            <HomeBar />
          </div>
        </div>
      )}

      {/* Date Range Sheet */}
      <DateRangeSheet
        isOpen={isDateRangeOpen}
        onClose={handleDateRangeClose}
        onConfirm={handleDateRangeConfirm}
        initialStartDate={startDate}
        initialEndDate={endDate}
        hideButtons={true}
      />
    </>
  );
}
