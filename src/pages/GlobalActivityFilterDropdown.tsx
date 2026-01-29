import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronUp, ListFilter, X, Calendar } from "lucide-react";
import { Checkbox } from "../components/Checkbox";
import { DateRangeCalendar } from "../components/DateRangeCalendar";

export interface ActivityFilterState {
  projects: string[];
  users: string[];
  dateRange: { start: Date | null; end: Date | null } | null;
}

interface GlobalActivityFilterDropdownProps {
  projects: string[];
  users: string[];
  filters: ActivityFilterState;
  onFiltersChange: (filters: ActivityFilterState) => void;
}

export function GlobalActivityFilterDropdown({ 
  projects, 
  users, 
  filters, 
  onFiltersChange 
}: GlobalActivityFilterDropdownProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Set<"projects" | "users">>(
    new Set(["projects"])
  );
  const [showCalendar, setShowCalendar] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  // Calculate totals
  const totalFilterCount = 
    filters.projects.length + 
    filters.users.length + 
    (filters.dateRange ? 1 : 0);

  // Positioning
  useEffect(() => {
    if (isOpen && buttonRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const DROPDOWN_WIDTH = 380; // Matches w-[380px] class
      
      setPosition({
        top: buttonRect.bottom + 8,
        // Align right edge of dropdown with right edge of button (bottom right alignment)
        left: buttonRect.right - DROPDOWN_WIDTH
      });
    }
  }, [isOpen]);

  // Click outside
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
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (showCalendar) setShowCalendar(false);
        else setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, showCalendar]);

  const toggleSection = (section: "projects" | "users") => {
    if (expandedSections.has(section)) {
      setExpandedSections(new Set());
    } else {
      setExpandedSections(new Set([section]));
    }
  };

  const toggleProject = (project: string) => {
    const newProjects = filters.projects.includes(project)
      ? filters.projects.filter(p => p !== project)
      : [...filters.projects, project];
    onFiltersChange({ ...filters, projects: newProjects });
  };

  const toggleUser = (user: string) => {
    const newUsers = filters.users.includes(user)
      ? filters.users.filter(u => u !== user)
      : [...filters.users, user];
    onFiltersChange({ ...filters, users: newUsers });
  };

  const handleClearAll = () => {
    onFiltersChange({
      projects: [],
      users: [],
      dateRange: null,
    });
  };

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
    
    // Same year
    if (startYear === endYear) {
      if (startYear === currentYear) {
        if (range.start.getMonth() === range.end.getMonth()) {
          return `${startMonth} ${startDay} - ${endDay}`;
        }
        return `${startMonth} ${startDay} - ${endMonth} ${endDay}`;
      }
      return `${startMonth} ${startDay} - ${endMonth} ${endDay}, ${startYear}`;
    }
    
    // Different years
    const startStr = startYear === currentYear 
      ? `${startMonth} ${startDay}` 
      : `${startMonth} ${startDay}, ${startYear}`;
      
    const endStr = endYear === currentYear 
      ? `${endMonth} ${endDay}` 
      : `${endMonth} ${endDay}, ${endYear}`;
      
    return `${startStr} - ${endStr}`;
  };

  return (
    <>
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
              {/* Projects Section */}
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
                    {projects.map((project) => (
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
                          label={<span>{project}</span>}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* User Section */}
              <div style={{ borderBottom: '1px solid var(--border)' }}>
                <button
                  onClick={() => toggleSection("users")}
                  className="w-full flex items-center justify-between px-4 py-3 transition-colors"
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--grey-01)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-[16px]" style={{ fontWeight: 'var(--font-weight-semibold)', color: 'var(--text-primary)' }}>
                      User
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {filters.users.length > 0 && (
                      <div className="bg-[var(--secondary-green)] size-5 rounded-full flex items-center justify-center">
                        <span className="text-white text-[12px]" style={{ fontWeight: 'var(--font-weight-regular)' }}>
                          {filters.users.length}
                        </span>
                      </div>
                    )}
                    {expandedSections.has("users") ? (
                      <ChevronUp className="size-6" style={{ color: 'var(--text-primary)' }} />
                    ) : (
                      <ChevronDown className="size-6" style={{ color: 'var(--text-primary)' }} />
                    )}
                  </div>
                </button>
                
                {expandedSections.has("users") && (
                  <div className="pb-2 max-h-[232px] overflow-y-auto" style={{ scrollbarWidth: 'thin' }}>
                    {users.map((user) => (
                      <div
                        key={user}
                        className="px-4 py-2 transition-colors cursor-pointer"
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--grey-02)'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                      >
                        <Checkbox
                          variant="rectangular"
                          checked={filters.users.includes(user)}
                          onChange={() => toggleUser(user)}
                          label={<span>{user}</span>}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Select Dates Button */}
              <button
                onClick={() => setShowCalendar(true)}
                className="w-full flex items-center gap-2 px-4 py-3 transition-colors text-left"
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--grey-01)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                style={{ borderBottom: '1px solid var(--border)' }}
              >
                <Calendar className="size-5" style={{ color: filters.dateRange ? 'var(--secondary-green)' : 'var(--text-primary)' }} />
                <span className="text-[16px]" style={{ fontWeight: 'var(--font-weight-semibold)', color: filters.dateRange ? 'var(--secondary-green)' : 'var(--text-primary)' }}>
                  {formatDateRange(filters.dateRange)}
                </span>
              </button>

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
                  if (totalFilterCount > 0) e.currentTarget.style.backgroundColor = 'var(--grey-01)';
                }}
                onMouseLeave={(e) => {
                  if (totalFilterCount > 0) e.currentTarget.style.backgroundColor = 'transparent';
                }}
                style={{ 
                  color: 'var(--grey-06)',
                  fontSize: '14px',
                  letterSpacing: '0.28px'
                }}
              >
                Clear All
              </button>
            </>
          ) : (
            <DateRangeCalendar
              startDate={filters.dateRange?.start || null}
              endDate={filters.dateRange?.end || null}
              onDatesChange={(start, end) => {
                const newDateRange = (start || end) ? { start, end } : null;
                onFiltersChange({ ...filters, dateRange: newDateRange });
                setShowCalendar(false);
                setExpandedSections(new Set());
              }}
              onClose={() => setShowCalendar(false)}
            />
          )}
        </div>
      )}
    </>
  );
}
