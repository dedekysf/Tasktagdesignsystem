import { useState, useEffect, useRef } from "react";
import { Search, ChevronDown, ChevronUp, ListFilter, X, Calendar } from "lucide-react";
import { DateRangeCalendar } from "../../components/DateRangeCalendar";
import { Checkbox } from "../../components/Checkbox";
import { RadioButton } from "../../components/RadioButton";
import type { Task, FilterState } from "../my-task-types";

interface FilterDropdownProps {
  tasks: Task[];
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  hideProjects?: boolean;
}

// Helper function to highlight matched text with yellow background
function highlightText(text: string, query: string) {
  if (!query) return <span>{text}</span>;
  
  const lowerText = text.toLowerCase();
  const lowerQuery = query.toLowerCase();
  const index = lowerText.indexOf(lowerQuery);
  
  if (index === -1) return <span>{text}</span>;
  
  const before = text.slice(0, index);
  const match = text.slice(index, index + query.length);
  const after = text.slice(index + query.length);
  
  return (
    <span>
      {before}
      <span className="bg-[var(--bright-yellow)]">{match}</span>
      {after}
    </span>
  );
}

export function FilterDropdown({ tasks, filters, onFiltersChange, hideProjects }: FilterDropdownProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedSections, setExpandedSections] = useState<Set<"projects" | "assignees" | "dueDate" | "priority">>(
    new Set(hideProjects ? ["assignees"] : ["projects"])
  );
  const [showCalendar, setShowCalendar] = useState(false);

  // Extract unique values from tasks
  const uniqueProjects = Array.from(new Set(tasks.map(t => t.projectName))).sort();
  const uniqueAssignees = Array.from(
    new Set(tasks.flatMap(t => t.assignees.map(a => a.name)))
  ).sort();
  const uniquePriorities: Array<"high" | "medium" | "low"> = ["high", "medium", "low"].filter(
    p => tasks.some(t => t.priority === p)
  ) as Array<"high" | "medium" | "low">;

  // Position dropdown below button
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (isOpen && buttonRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      setPosition({
        top: buttonRect.bottom + 8,
        left: buttonRect.left
      });
    }
  }, [isOpen, buttonRef]);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
        setShowCalendar(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, buttonRef]);

  // Close on ESC
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (showCalendar) {
          setShowCalendar(false);
        } else {
          setIsOpen(false);
        }
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, showCalendar]);

  const toggleSection = (section: "projects" | "assignees" | "dueDate" | "priority") => {
    // If the section is already expanded, collapse it
    if (expandedSections.has(section)) {
      setExpandedSections(new Set([...expandedSections].filter(s => s !== section)));
      return;
    }

    // If in search mode and both projects and assignees have results, allow multiple sections
    const isSearchMode = searchQuery.trim() !== "";
    const hasProjectResults = filteredProjects.length > 0;
    const hasAssigneeResults = filteredAssignees.length > 0;
    const canExpandMultiple = isSearchMode && hasProjectResults && hasAssigneeResults;

    if (canExpandMultiple) {
      // In search mode with multiple results, allow toggling individual sections
      // But only for projects and assignees
      if (section === "projects" || section === "assignees") {
        setExpandedSections(new Set([...expandedSections, section]));
      } else {
        // For dueDate and priority, use strict single accordion
        setExpandedSections(new Set([section]));
      }
    } else {
      // Normal mode: strict single accordion
      setExpandedSections(new Set([section]));
    }
  };

  const toggleProject = (project: string) => {
    const newProjects = filters.projects.includes(project)
      ? filters.projects.filter(p => p !== project)
      : [...filters.projects, project];
    onFiltersChange({ ...filters, projects: newProjects });
  };

  const toggleAssignee = (assignee: string) => {
    const newAssignees = filters.assignees.includes(assignee)
      ? filters.assignees.filter(a => a !== assignee)
      : [...filters.assignees, assignee];
    onFiltersChange({ ...filters, assignees: newAssignees });
  };

  const togglePriority = (priority: "high" | "medium" | "low") => {
    const newPriorities = filters.priorities.includes(priority)
      ? filters.priorities.filter(p => p !== priority)
      : [...filters.priorities, priority];
    onFiltersChange({ ...filters, priorities: newPriorities });
  };

  const toggleDueDate = (dueDate: "today" | "tomorrow" | "next3days") => {
    // Single selection: if already selected, unselect; otherwise select only this one
    const newDueDates = filters.dueDates.includes(dueDate)
      ? []
      : [dueDate];
    onFiltersChange({ ...filters, dueDates: newDueDates, customDateRange: null });
  };

  const handleClearAll = () => {
    onFiltersChange({
      projects: [],
      assignees: [],
      dueDates: [],
      priorities: [],
      customDateRange: null,
    });
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  const totalFilterCount = (hideProjects ? 0 : filters.projects.length) + filters.assignees.length + filters.priorities.length + filters.dueDates.length + (filters.customDateRange ? 1 : 0);

  // Filter items by search query
  const filteredProjects = Array.from(uniqueProjects).filter(project =>
    project.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredAssignees = Array.from(uniqueAssignees).filter(assignee =>
    assignee.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Auto-expand sections based on search results
  useEffect(() => {
    if (searchQuery.trim() !== "") {
      const hasProjectResults = !hideProjects && filteredProjects.length > 0;
      const hasAssigneeResults = filteredAssignees.length > 0;
      
      // If both have results, expand both
      if (hasProjectResults && hasAssigneeResults) {
        setExpandedSections(new Set(["projects", "assignees"]));
      } 
      // If only projects have results, expand only projects
      else if (hasProjectResults) {
        setExpandedSections(new Set(["projects"]));
      } 
      // If only assignees have results, expand only assignees
      else if (hasAssigneeResults) {
        setExpandedSections(new Set(["assignees"]));
      }
      // If no results, keep current state
    } else {
      // No search, reset to default (projects expanded, or assignees if projects hidden)
      setExpandedSections(new Set(hideProjects ? ["assignees"] : ["projects"]));
    }
  }, [searchQuery, filteredProjects.length, filteredAssignees.length, hideProjects]);

  const formatDateRange = (range: { start: Date | null; end: Date | null } | null) => {
    if (!range || !range.start || !range.end) return "Select Dates";
    
    const currentYear = new Date().getFullYear();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    const startMonth = months[range.start.getMonth()];
    const startDay = range.start.getDate();
    const startYear = range.start.getFullYear();
    const endMonth = months[range.end.getMonth()];
    const endDay = range.end.getDate();
    const endYear = range.end.getFullYear();
    
    // Both dates in current year
    if (startYear === currentYear && endYear === currentYear) {
      // Same month: "Jan 7 - 9"
      if (range.start.getMonth() === range.end.getMonth()) {
        return `${startMonth} ${startDay} - ${endDay}`;
      }
      // Different months: "Jan 27 - Feb 1"
      return `${startMonth} ${startDay} - ${endMonth} ${endDay}`;
    }
    
    // Start in current year, end in different year
    if (startYear === currentYear && endYear !== currentYear) {
      return `${startMonth} ${startDay} - ${endMonth} ${endDay}, ${endYear}`;
    }
    
    // Start in different year, end in current year
    if (startYear !== currentYear && endYear === currentYear) {
      return `${startMonth} ${startDay}, ${startYear} - ${endMonth} ${endDay}`;
    }
    
    // Both dates in same non-current year
    if (startYear === endYear) {
      // Same month: "Jan 7 - 9, 2025"
      if (range.start.getMonth() === range.end.getMonth()) {
        return `${startMonth} ${startDay} - ${endDay}, ${startYear}`;
      }
      // Different months: "Jan 27 - Feb 1, 2025"
      return `${startMonth} ${startDay} - ${endMonth} ${endDay}, ${startYear}`;
    }
    
    // Different years
    return `${startMonth} ${startDay}, ${startYear} - ${endMonth} ${endDay}, ${endYear}`;
  };

  return (
    <>
      {/* Filter Button */}
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className={`h-10 flex items-center justify-center gap-2 px-4 rounded-lg transition-colors cursor-pointer ${
          isOpen || totalFilterCount > 0 ? 'bg-secondary' : 'hover:bg-secondary'
        }`}
        style={{ fontWeight: 'var(--font-weight-semibold)' }}
      >
        <ListFilter className="size-4 shrink-0" />
        <span className="text-[14px] leading-none">Filter</span>
        
        {/* Filter Count Badge */}
        {totalFilterCount > 0 && (
          <>
            <div className="bg-[var(--secondary-green)] min-w-5 h-5 px-1.5 rounded-full flex items-center justify-center">
              <span className="text-white text-[12px]" style={{ fontWeight: 'var(--font-weight-regular)' }}>
                {totalFilterCount}
              </span>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleClearAll();
              }}
              className="size-5 flex items-center justify-center hover:bg-[var(--grey-02)] rounded-full transition-colors cursor-pointer"
            >
              <X className="size-4" style={{ color: 'var(--text-primary)' }} />
            </button>
          </>
        )}
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div
          ref={dropdownRef}
          className={`fixed z-50 ${showCalendar ? '' : 'w-[380px] bg-white rounded-[8px]'}`}
          style={
            showCalendar
              ? {
                  top: `${position.top}px`,
                  left: `${position.left}px`,
                }
              : {
                  top: `${position.top}px`,
                  left: `${position.left}px`,
                  boxShadow: 'var(--elevation-lg)',
                  border: '1px solid var(--border)'
                }
          }
        >
          {!showCalendar ? (
            <>
              {/* Search */}
              <div className="p-4" style={{ borderBottom: '1px solid var(--border)' }}>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5" style={{ color: 'var(--text-primary)' }} />
                  <input
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full h-10 pl-12 pr-10 rounded-[8px] text-[14px] outline-none"
                    style={{ 
                      fontWeight: 'var(--font-weight-medium)',
                      backgroundColor: 'var(--grey-02)',
                      color: 'var(--text-primary)'
                    }}
                  />
                  {searchQuery && (
                    <button
                      onClick={clearSearch}
                      className="absolute right-3 top-1/2 -translate-y-1/2 size-6 flex items-center justify-center rounded-full transition-colors"
                      style={{ backgroundColor: 'transparent' }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--grey-02)'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                      <X className="size-4" style={{ color: 'var(--text-secondary)' }} />
                    </button>
                  )}
                </div>
              </div>

              {/* Projects Section */}
              {!hideProjects && (
                <div style={{ borderBottom: '1px solid var(--border)' }}>
                  <button
                    onClick={() => toggleSection("projects")}
                    className="w-full flex items-center justify-between px-4 py-3 transition-colors"
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--grey-01)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-[16px]" style={{ fontWeight: 'var(--font-weight-semibold)', color: 'var(--text-primary)' }}>
                        Projects
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      {filters.projects.length > 0 && (
                        <div className="bg-[var(--secondary-green)] size-5 rounded-full flex items-center justify-center">
                          <span className="text-white text-[12px]" style={{ fontWeight: 'var(--font-weight-regular)' }}>
                            {filters.projects.length}
                          </span>
                        </div>
                      )}
                      {expandedSections.has("projects") ? (
                        <ChevronUp className="size-6" style={{ color: 'var(--text-primary)' }} />
                      ) : (
                        <ChevronDown className="size-6" style={{ color: 'var(--text-primary)' }} />
                      )}
                    </div>
                  </button>
                  
                  {expandedSections.has("projects") && (
                    <div className="pb-2 max-h-[232px] overflow-y-auto" style={{ scrollbarWidth: 'thin' }}>
                      {filteredProjects.length > 0 ? (
                        filteredProjects.map((project) => (
                          <div
                            key={project}
                            className="px-4 py-2 transition-colors cursor-pointer"
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--grey-02)'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                          >
                            <Checkbox
                              variant="rectangular"
                              checked={filters.projects.includes(project)}
                              onChange={() => toggleProject(project)}
                              label={<span>{highlightText(project, searchQuery)}</span>}
                            />
                          </div>
                        ))
                      ) : (
                        <div className="px-4 py-4 text-center">
                          <span className="text-[14px]" style={{ fontWeight: 'var(--font-weight-regular)', color: 'var(--text-secondary)' }}>
                            No results found
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* Assignee Section */}
              <div style={{ borderBottom: '1px solid var(--border)' }}>
                <button
                  onClick={() => toggleSection("assignees")}
                  className="w-full flex items-center justify-between px-4 py-3 transition-colors"
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--grey-01)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-[16px]" style={{ fontWeight: 'var(--font-weight-semibold)', color: 'var(--text-primary)' }}>
                      Assignee
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {filters.assignees.length > 0 && (
                      <div className="bg-[var(--secondary-green)] size-5 rounded-full flex items-center justify-center">
                        <span className="text-white text-[12px]" style={{ fontWeight: 'var(--font-weight-regular)' }}>
                          {filters.assignees.length}
                        </span>
                      </div>
                    )}
                    {expandedSections.has("assignees") ? (
                      <ChevronUp className="size-6" style={{ color: 'var(--text-primary)' }} />
                    ) : (
                      <ChevronDown className="size-6" style={{ color: 'var(--text-primary)' }} />
                    )}
                  </div>
                </button>
                
                {expandedSections.has("assignees") && (
                  <div className="pb-2 max-h-[232px] overflow-y-auto" style={{ scrollbarWidth: 'thin' }}>
                    {filteredAssignees.length > 0 ? (
                      filteredAssignees.map((assignee) => (
                        <div
                          key={assignee}
                          className="px-4 py-2 transition-colors cursor-pointer"
                          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--grey-02)'}
                          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                        >
                          <Checkbox
                            variant="rectangular"
                            checked={filters.assignees.includes(assignee)}
                            onChange={() => toggleAssignee(assignee)}
                            label={<span>{highlightText(assignee, searchQuery)}</span>}
                          />
                        </div>
                      ))
                    ) : (
                      <div className="px-4 py-4 text-center">
                        <span className="text-[14px]" style={{ fontWeight: 'var(--font-weight-regular)', color: 'var(--text-secondary)' }}>
                          No results found
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Due Date Section */}
              <div style={{ borderBottom: '1px solid var(--border)' }}>
                <button
                  onClick={() => toggleSection("dueDate")}
                  className="w-full flex items-center justify-between px-4 py-3 transition-colors"
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--grey-01)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-[16px]" style={{ fontWeight: 'var(--font-weight-semibold)', color: 'var(--text-primary)' }}>
                      Due Date
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {(filters.dueDates.length > 0 || filters.customDateRange) && (
                      <div className="bg-[var(--secondary-green)] size-5 rounded-full flex items-center justify-center">
                        <span className="text-white text-[12px]" style={{ fontWeight: 'var(--font-weight-regular)' }}>
                          {filters.dueDates.length + (filters.customDateRange ? 1 : 0)}
                        </span>
                      </div>
                    )}
                    {expandedSections.has("dueDate") ? (
                      <ChevronUp className="size-6" style={{ color: 'var(--text-primary)' }} />
                    ) : (
                      <ChevronDown className="size-6" style={{ color: 'var(--text-primary)' }} />
                    )}
                  </div>
                </button>
                
                {expandedSections.has("dueDate") && (
                  <div className="pb-2">
                    <div
                      className="px-4 py-2 transition-colors cursor-pointer"
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--grey-02)'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                      <RadioButton
                        name="dueDate"
                        value="today"
                        checked={filters.dueDates.includes("today")}
                        onChange={() => toggleDueDate("today")}
                        label="Today"
                      />
                    </div>
                    <div
                      className="px-4 py-2 transition-colors cursor-pointer"
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--grey-02)'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                      <RadioButton
                        name="dueDate"
                        value="tomorrow"
                        checked={filters.dueDates.includes("tomorrow")}
                        onChange={() => toggleDueDate("tomorrow")}
                        label="Tomorrow"
                      />
                    </div>
                    <div
                      className="px-4 py-2 transition-colors cursor-pointer"
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--grey-02)'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                      <RadioButton
                        name="dueDate"
                        value="next3days"
                        checked={filters.dueDates.includes("next3days")}
                        onChange={() => toggleDueDate("next3days")}
                        label="Next 3 days"
                      />
                    </div>
                    <button
                      onClick={() => setShowCalendar(true)}
                      className="w-full flex items-center gap-2 px-4 py-2 transition-colors"
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--grey-02)'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                      <Calendar className="size-5" style={{ color: filters.customDateRange ? 'var(--secondary-green)' : 'var(--text-primary)' }} />
                      <span 
                        className="text-[14px]"
                        style={{ 
                          fontWeight: 'var(--font-weight-regular)',
                          color: filters.customDateRange ? 'var(--secondary-green)' : 'var(--text-primary)'
                        }}
                      >
                        {formatDateRange(filters.customDateRange)}
                      </span>
                    </button>
                  </div>
                )}
              </div>

              {/* Priority Section */}
              <div style={{ borderBottom: '1px solid var(--border)' }}>
                <button
                  onClick={() => toggleSection("priority")}
                  className="w-full flex items-center justify-between px-4 py-3 transition-colors"
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--grey-01)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-[16px]" style={{ fontWeight: 'var(--font-weight-semibold)', color: 'var(--text-primary)' }}>
                      Priority
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {filters.priorities.length > 0 && (
                      <div className="bg-[var(--secondary-green)] size-5 rounded-full flex items-center justify-center">
                        <span className="text-white text-[12px]" style={{ fontWeight: 'var(--font-weight-regular)' }}>
                          {filters.priorities.length}
                        </span>
                      </div>
                    )}
                    {expandedSections.has("priority") ? (
                      <ChevronUp className="size-6" style={{ color: 'var(--text-primary)' }} />
                    ) : (
                      <ChevronDown className="size-6" style={{ color: 'var(--text-primary)' }} />
                    )}
                  </div>
                </button>
                
                {expandedSections.has("priority") && (
                  <div className="pb-2">
                    {uniquePriorities.map((priority) => (
                      <div
                        key={priority}
                        className="px-4 py-2 transition-colors cursor-pointer"
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--grey-02)'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                      >
                        <Checkbox
                          variant="rectangular"
                          checked={filters.priorities.includes(priority)}
                          onChange={() => togglePriority(priority)}
                          label={<span className="capitalize">{priority}</span>}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Clear All */}
              <button
                onClick={handleClearAll}
                disabled={totalFilterCount === 0}
                className={`w-full p-4 text-center transition-colors rounded-b-[8px] ${
                  totalFilterCount > 0 
                    ? 'cursor-pointer' 
                    : 'cursor-not-allowed opacity-50'
                }`}
                onMouseEnter={(e) => {
                  if (totalFilterCount > 0) {
                    e.currentTarget.style.backgroundColor = 'var(--grey-01)';
                  }
                }}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <span 
                  className="text-[14px]" 
                  style={{ 
                    fontWeight: 'var(--font-weight-regular)',
                    color: totalFilterCount > 0 ? 'var(--text-primary)' : 'var(--text-secondary)'
                  }}
                >
                  Clear All
                </span>
              </button>
            </>
          ) : (
            <DateRangeCalendar
              startDate={filters.customDateRange?.start || null}
              endDate={filters.customDateRange?.end || null}
              onDatesChange={(start, end) => {
                const newCustomDateRange = (start || end) ? { start, end } : null;
                onFiltersChange({ ...filters, dueDates: [], customDateRange: newCustomDateRange });
                setShowCalendar(false);
              }}
              onClose={() => setShowCalendar(false)}
            />
          )}
        </div>
      )}
    </>
  );
}