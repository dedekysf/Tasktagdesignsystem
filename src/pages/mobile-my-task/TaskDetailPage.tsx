import { ChevronLeft, Calendar, User, Users, Zap, HardHat, ChevronsUp, ChevronsDown, Equal, MoreVertical, AlertCircle, UserPlus, FileText, ChevronRight, Activity, ImageIcon, Plus, Check } from 'lucide-react';
import svgPaths from "../../imports/svg-ngfg9xj07v";
import { StatusBar } from './StatusBar';
import { PrioritySheet } from './PrioritySheet';
import { DateRangeSheet } from './DateRangeSheet';
import { EditTaskSheet } from './EditTaskSheet';
import { MoreActionsSheet } from './MoreActionsSheet';
import { toast } from 'sonner@2.0.3';
import { useState, useEffect } from 'react';
import { getAssigneeConfig } from './utils/assignees';

interface Task {
  id: number;
  title: string;
  project: string;
  projectIcon: string;
  projectColor: string;
  dueDate: string;
  isOverdue?: boolean;
  completed?: boolean;
  priority: 'high' | 'medium' | 'low';
  owner: string;
  assignees: string[];
}

interface TaskDetailPageProps {
  task: Task;
  onBack: () => void;
  onUpdateTask: (updatedTask: Task) => void;
  onDeleteTask?: (taskId: number) => void;
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

function getAvatarColor(name: string): string {
  const darkPastels = [
    '#5B7C99', // Dark Blue
    '#C4A053', // Dark Yellow
    '#6B8E6F', // Dark Green
    '#CC7A50', // Dark Orange
    '#9B6B8E', // Dark Magenta
    '#8B6F47'  // Dark Brown
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return darkPastels[Math.abs(hash) % darkPastels.length];
}

function formatDateRange(dateString: string): string {
  const currentYear = new Date().getFullYear();
  
  // Check if it starts with "Due " or "Start " prefix (single date)
  if (dateString.startsWith('Due ') || dateString.startsWith('Start ')) {
    // Keep the prefix and return as-is (e.g., "Due Dec 26" or "Start Dec 20")
    return dateString;
  }
  
  // Check if it's a date range (contains " - " or "–")
  if (dateString.includes(' - ') || dateString.includes('–')) {
    const separator = dateString.includes(' - ') ? ' - ' : '–';
    const parts = dateString.split(separator).map(s => s.trim());
    
    if (parts.length === 2) {
      const [startDateStr, endDateStr] = parts;
      
      // Parse dates (assuming format like "Nov 25" or "Dec 2, 2026")
      const parseDate = (str: string) => {
        const hasYear = /\d{4}/.test(str);
        if (hasYear) {
          const match = str.match(/(\w+)\s+(\d+),\s+(\d{4})/);
          if (match) {
            return { month: match[1], day: match[2], year: parseInt(match[3]) };
          }
        } else {
          const match = str.match(/(\w+)\s+(\d+)/);
          if (match) {
            return { month: match[1], day: match[2], year: currentYear };
          }
        }
        return null;
      };
      
      const startDate = parseDate(startDateStr);
      const endDate = parseDate(endDateStr);
      
      if (startDate && endDate) {
        // Check if same month and year
        const sameMonthAndYear = startDate.month === endDate.month && startDate.year === endDate.year;
        
        if (sameMonthAndYear) {
          // Same month: "Nov 25 – 28" or "Dec 2 – 5, 2026"
          if (startDate.year === currentYear) {
            return `${startDate.month} ${startDate.day} – ${endDate.day}`;
          } else {
            return `${startDate.month} ${startDate.day} – ${endDate.day}, ${startDate.year}`;
          }
        }
        
        // Check if both dates are in current year
        const bothInCurrentYear = startDate.year === currentYear && endDate.year === currentYear;
        
        if (bothInCurrentYear) {
          // Hide years: "Nov 25 – Dec 2"
          return `${startDate.month} ${startDate.day} – ${endDate.month} ${endDate.day}`;
        } else {
          // Show years when needed
          const startStr = startDate.year === currentYear 
            ? `${startDate.month} ${startDate.day}` 
            : `${startDate.month} ${startDate.day}, ${startDate.year}`;
          const endStr = endDate.year === currentYear 
            ? `${endDate.month} ${endDate.day}` 
            : `${endDate.month} ${endDate.day}, ${endDate.year}`;
          return `${startStr} – ${endStr}`;
        }
      }
    }
  }
  
  // Single date without prefix or "Due Date" placeholder - return as is
  return dateString;
}

export function TaskDetailPage({ task, onBack, onUpdateTask, onDeleteTask }: TaskDetailPageProps) {
  const [isPrioritySheetOpen, setIsPrioritySheetOpen] = useState(false);
  const [isDateRangeSheetOpen, setIsDateRangeSheetOpen] = useState(false);
  const [isEditTaskSheetOpen, setIsEditTaskSheetOpen] = useState(false);
  const [isMoreActionsSheetOpen, setIsMoreActionsSheetOpen] = useState(false);
  const [editMode, setEditMode] = useState<'name' | 'description'>('name');
  const [currentPriority, setCurrentPriority] = useState<'high' | 'medium' | 'low'>(task.priority);
  const [currentDueDate, setCurrentDueDate] = useState<string>(task.dueDate);
  const [currentTitle, setCurrentTitle] = useState<string>(task.title);
  const [currentDescription, setCurrentDescription] = useState<string>('Ensure all room components within the electrical board are thoroughly inspected and reconfigured as needed to meet safety and operational standards.');
  const [isCompleted, setIsCompleted] = useState<boolean>(task.completed || false);
  const [startDateObj, setStartDateObj] = useState<Date | null>(null);
  const [endDateObj, setEndDateObj] = useState<Date | null>(null);
  
  const priorityConfig = {
    high: { label: 'High', color: '#FF4444', icon: ChevronsUp },
    medium: { label: 'Medium', color: '#E6B566', icon: Equal },
    low: { label: 'Low', color: '#138EFF', icon: ChevronsDown }
  };

  const priority = priorityConfig[currentPriority];
  const PriorityIcon = priority.icon;

  // Parse initial dates from task.dueDate
  useEffect(() => {
    const parseDateString = (dateStr: string): Date | null => {
      const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const currentYear = new Date().getFullYear();
      
      // Remove "Due " or "Start " prefix if exists
      let cleanStr = dateStr.replace(/^(Due|Start)\s+/, '');
      
      // Pattern with year: "Dec 22, 2025"
      const patternWithYear = /(\w+)\s+(\d+),\s+(\d{4})/;
      // Pattern without year: "Dec 22"
      const patternWithoutYear = /(\w+)\s+(\d+)/;
      
      let match = cleanStr.match(patternWithYear);
      if (match) {
        const monthIndex = monthNames.indexOf(match[1]);
        const day = parseInt(match[2]);
        const year = parseInt(match[3]);
        if (monthIndex !== -1) {
          return new Date(year, monthIndex, day);
        }
      }
      
      match = cleanStr.match(patternWithoutYear);
      if (match) {
        const monthIndex = monthNames.indexOf(match[1]);
        const day = parseInt(match[2]);
        if (monthIndex !== -1) {
          return new Date(currentYear, monthIndex, day);
        }
      }
      
      return null;
    };

    const dateStr = task.dueDate;
    
    // Check if it starts with "Due " prefix (single due date)
    if (dateStr.startsWith('Due ')) {
      const date = parseDateString(dateStr);
      setStartDateObj(null);
      setEndDateObj(date);
      return;
    }
    
    // Check if it starts with "Start " prefix (single start date)
    if (dateStr.startsWith('Start ')) {
      const date = parseDateString(dateStr);
      setStartDateObj(date);
      setEndDateObj(null);
      return;
    }
    
    // Check if it's a range (contains "–" or " - ")
    if (dateStr.includes('–') || dateStr.includes(' - ')) {
      const separator = dateStr.includes('–') ? '–' : ' - ';
      const parts = dateStr.split(separator).map(s => s.trim());
      
      if (parts.length === 2) {
        const start = parseDateString(parts[0]);
        const end = parseDateString(parts[1]);
        setStartDateObj(start);
        setEndDateObj(end);
      }
    } else if (dateStr && dateStr !== 'Due Date') {
      // Single date from task list without prefix = DUE DATE (not start date)
      const date = parseDateString(dateStr);
      setStartDateObj(null);  // No start date
      setEndDateObj(date);    // Set as due date
    }
  }, [task.dueDate]);

  const handleCheckboxToggle = () => {
    const newCompletedState = !isCompleted;
    setIsCompleted(newCompletedState);
    
    if (newCompletedState) {
      toast('Task completed');
    } else {
      toast('Task uncompleted');
    }
  };

  const handlePrioritySelect = (newPriority: 'high' | 'medium' | 'low') => {
    setCurrentPriority(newPriority);
    toast('Priority updated');
  };

  const handleDateRangeConfirm = (startDate: Date | null, endDate: Date | null) => {
    // Save date objects
    setStartDateObj(startDate);
    setEndDateObj(endDate);
    
    // If both dates are null, reset to "Due Date"
    if (!startDate && !endDate) {
      setCurrentDueDate('Due Date');
      onUpdateTask({ ...task, dueDate: 'Due Date' });
      setIsDateRangeSheetOpen(false);
      toast('Date updated');
      return;
    }
    
    // Format date range based on the rules
    if (startDate || endDate) {
      const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const currentYear = new Date().getFullYear();
      
      // Only Due Date (no start date)
      if (!startDate && endDate) {
        const endMonth = monthNames[endDate.getMonth()];
        const endDay = endDate.getDate();
        const endYear = endDate.getFullYear();
        
        const formattedDate = endYear === currentYear 
          ? `Due ${endMonth} ${endDay}` 
          : `Due ${endMonth} ${endDay}, ${endYear}`;
        
        setCurrentDueDate(formattedDate);
        
        // Notify parent of update
        onUpdateTask({ ...task, dueDate: formattedDate });
        
        // Close sheet
        setIsDateRangeSheetOpen(false);
        
        toast('Date updated');
        return;
      }
      
      // Only Start Date (no due date)
      if (startDate && !endDate) {
        const startMonth = monthNames[startDate.getMonth()];
        const startDay = startDate.getDate();
        const startYear = startDate.getFullYear();
        
        const formattedDate = startYear === currentYear 
          ? `Start ${startMonth} ${startDay}` 
          : `Start ${startMonth} ${startDay}, ${startYear}`;
        
        setCurrentDueDate(formattedDate);
        
        // Notify parent of update
        onUpdateTask({ ...task, dueDate: formattedDate });
        
        // Close sheet
        setIsDateRangeSheetOpen(false);
        
        toast('Date updated');
        return;
      }
      
      // Range case (both start and due date)
      if (startDate && endDate) {
        // Format start date
        const startMonth = monthNames[startDate.getMonth()];
        const startDay = startDate.getDate();
        const startYear = startDate.getFullYear();
        
        // Format end date
        const endMonth = monthNames[endDate.getMonth()];
        const endDay = endDate.getDate();
        const endYear = endDate.getFullYear();
        
        // Build date range string: "Nov 25 – Dec 2" or "Dec 2, 2025 – Jan 5, 2026"
        let formattedDateRange = '';
        
        // Check if both dates are in current year
        const bothInCurrentYear = startYear === currentYear && endYear === currentYear;
        
        if (bothInCurrentYear) {
          // Hide years: "Nov 25 – Dec 2"
          formattedDateRange = `${startMonth} ${startDay} – ${endMonth} ${endDay}`;
        } else {
          // Show years when needed
          const startStr = startYear === currentYear 
            ? `${startMonth} ${startDay}` 
            : `${startMonth} ${startDay}, ${startYear}`;
          const endStr = endYear === currentYear 
            ? `${endMonth} ${endDay}` 
            : `${endMonth} ${endDay}, ${endYear}`;
          formattedDateRange = `${startStr} – ${endStr}`;
        }
        
        // Update state
        setCurrentDueDate(formattedDateRange);
        
        // Notify parent of update
        onUpdateTask({ ...task, dueDate: formattedDateRange });
        
        // Close sheet
        setIsDateRangeSheetOpen(false);
        
        // Show toast
        toast('Date updated');
      }
    }
  };
  
  // Assignees for the Assignee section (excludes owner)
  const assigneesForDisplay = task.assignees;
  
  // For display: show up to 4 avatars if remainingCount is 1, otherwise show 3 + count
  const shouldShowFourAvatars = assigneesForDisplay.length === 4;
  const maxDisplayed = shouldShowFourAvatars ? 4 : 3;
  const displayedAssignees = assigneesForDisplay.slice(0, maxDisplayed);
  const remainingCount = assigneesForDisplay.length - maxDisplayed;

  const handleMoreAction = (action: 'copy-link' | 'start-chat' | 'duplicate' | 'forward' | 'delete') => {
    switch (action) {
      case 'copy-link':
        // No action needed
        break;
      case 'start-chat':
        // No action needed
        break;
      case 'duplicate':
        // No action needed
        break;
      case 'forward':
        // No action needed
        break;
      case 'delete':
        // No action needed
        break;
    }
  };

  return (
    <div className="h-full flex flex-col bg-secondary overflow-hidden">
      {/* Header */}
      <div className="bg-card flex flex-col shrink-0">
        {/* Status Bar */}
        <StatusBar />
        
        {/* Navigation */}
        <div className="flex items-center justify-between px-4 py-0 h-[51px]">
          <div className="flex items-center gap-1">
            <button 
              onClick={onBack}
              className="flex items-center justify-center size-10"
            >
              <ChevronLeft className="w-6 h-6 text-foreground" strokeWidth={2} />
            </button>
            <p className="font-semibold text-foreground">Task Details</p>
          </div>
          
          <button className="flex items-center justify-center size-10" onClick={() => setIsMoreActionsSheetOpen(true)}>
            <MoreVertical className="w-6 h-6 text-foreground" strokeWidth={2} />
          </button>
        </div>
        
        {/* Divider */}
        <div className="h-px bg-border" />
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <div className="flex flex-col gap-3 p-4">
          {/* Task Name Card */}
          <div className="bg-card rounded-lg p-4">
            <div className="flex gap-3 items-start">
              {/* Checkbox */}
              <button 
                onClick={handleCheckboxToggle}
                className="relative shrink-0 size-5 mt-0.5 cursor-pointer"
              >
                {isCompleted ? (
                  <div className="absolute inset-0 rounded-full bg-primary flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                ) : (
                  <div className="absolute inset-0 rounded-full border-2 border-foreground" />
                )}
              </button>
              
              {/* Content */}
              <div className="flex-1 flex flex-col gap-3 min-w-0">
                <button 
                  onClick={() => {
                    setEditMode('name');
                    setIsEditTaskSheetOpen(true);
                  }}
                  className="text-left w-full"
                >
                  <p className="text-foreground text-sm tracking-[0.28px] whitespace-pre-wrap break-words overflow-wrap-anywhere">
                    {currentTitle}
                  </p>
                </button>
                
                {/* Tags */}
                <div className="flex gap-4 items-center overflow-hidden">
                  <div className="flex items-center gap-1 rounded min-w-0 max-w-[160px]">
                    {task.projectIcon === 'zap' ? (
                      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
                        <path d={svgPaths.p9ffde00} fill={task.projectColor} />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4 shrink-0" viewBox="0 0 12 12" fill="none">
                        <path d={svgPaths.p13febe80} fill={task.projectColor} />
                      </svg>
                    )}
                    <p className="text-xs text-foreground tracking-[0.24px] truncate">
                      {task.project.length > 25 ? `${task.project.slice(0, 25)}...` : task.project}
                    </p>
                  </div>
                  
                  {task.owner && (
                    <div className="flex items-center gap-1 min-w-0 max-w-[110px]">
                      <div 
                        className="size-4 rounded-full flex items-center justify-center text-[8px] text-white shrink-0"
                        style={{ backgroundColor: getAvatarColor(task.owner) }}
                      >
                        {getInitials(task.owner)}
                      </div>
                      <p className="text-xs text-foreground tracking-[0.24px] truncate">
                        {task.owner}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Action Pills */}
          <div className="flex gap-2 items-start">
            <button
              onClick={() => setIsPrioritySheetOpen(true)}
              className="bg-card rounded-[40px] px-4 py-2 flex items-center gap-2"
            >
              <PriorityIcon className="w-4 h-4" style={{ color: priority.color }} strokeWidth={2} />
              <p className="text-sm tracking-[0.28px]" style={{ color: priority.color }}>
                {priority.label}
              </p>
            </button>
            
            <button
              onClick={() => setIsDateRangeSheetOpen(true)}
              className="bg-card rounded-[40px] px-4 py-2 flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-foreground" strokeWidth={2} />
              <p className="text-sm text-foreground tracking-[0.28px]">
                {formatDateRange(currentDueDate)}
              </p>
            </button>
          </div>

          {/* Description Card */}
          <div className="bg-card rounded-lg p-4">
            <p className="font-semibold text-foreground mb-3">Description</p>
            <button
              onClick={() => {
                setEditMode('description');
                setIsEditTaskSheetOpen(true);
              }}
              className="text-left w-full"
            >
              <p className="text-xs text-muted-foreground tracking-[0.24px] leading-4 whitespace-pre-wrap break-words">
                {currentDescription}
              </p>
            </button>
          </div>

          {/* Assignee Card */}
          <div className="bg-card rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <p className="font-semibold text-foreground">
                Assignee{assigneesForDisplay.length > 0 && ` (${assigneesForDisplay.length})`}
              </p>
              {assigneesForDisplay.length > 0 && (
                <p className="text-xs text-grey-4 text-center">See All</p>
              )}
            </div>
            
            <div className="flex gap-2 items-start">
              {/* Add Assignee Button */}
              <div className="flex flex-col gap-1 items-center w-14">
                <div className="bg-secondary rounded-[40px] size-14 flex items-center justify-center">
                  <UserPlus className="w-6 h-6 text-foreground" strokeWidth={2} />
                </div>
                <p className="text-xs text-grey-4 text-center truncate w-full">Assignee</p>
              </div>
              
              {/* Assignee Avatars */}
              {displayedAssignees.map((assignee, index) => {
                const assigneeConfig = getAssigneeConfig(assignee);
                return (
                  <div key={index} className="flex flex-col gap-1 items-center w-14">
                    {assigneeConfig.avatar ? (
                      <img 
                        src={assigneeConfig.avatar} 
                        alt={assignee} 
                        className="size-14 rounded-full object-cover"
                      />
                    ) : (
                      <div 
                        className="size-14 rounded-full flex items-center justify-center text-[22px] font-semibold leading-none text-white"
                        style={{ backgroundColor: assigneeConfig.color }}
                      >
                        {assigneeConfig.initials}
                      </div>
                    )}
                    <p className="text-xs text-grey-4 text-center truncate w-full">
                      {assignee.split(' ')[0]}...
                    </p>
                  </div>
                );
              })}
              
              {/* More Assignees */}
              {remainingCount > 0 && (
                <div className="flex flex-col gap-1 items-center w-14">
                  <div className="size-14 rounded-full bg-foreground flex items-center justify-center text-[22px] text-white">
                    +{remainingCount}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Checklist Card */}
          <div className="bg-card rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="bg-foreground rounded-md p-1.5">
                  <FileText className="w-5 h-5 text-white" strokeWidth={2} />
                </div>
                <p className="font-semibold text-foreground">Checklist (0/3)</p>
              </div>
              <ChevronRight className="w-6 h-6 text-foreground" strokeWidth={2} />
            </div>
          </div>

          {/* Activity Log & Files Grid */}
          <div className="flex gap-3 items-start">
            <div className="flex-1 bg-card rounded-lg p-4">
              <div className="bg-foreground rounded-md p-1.5 w-fit mb-3">
                <Activity className="w-5 h-5 text-white" strokeWidth={2} />
              </div>
              <p className="font-semibold text-foreground">Activity Log</p>
            </div>
            
            <div className="flex-1 bg-card rounded-lg p-4">
              <div className="bg-foreground rounded-md p-1.5 w-fit mb-3">
                <ImageIcon className="w-5 h-5 text-white" strokeWidth={2} />
              </div>
              <p className="font-semibold text-foreground">Files & Media</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Button */}
      <div className="absolute bottom-[44px] right-4">
        <button className="bg-foreground rounded-[100px] px-3 py-3 flex items-center gap-2 shadow-lg">
          <Plus className="w-6 h-6 text-white" strokeWidth={2} />
          <p className="font-medium text-white">New Update</p>
        </button>
      </div>

      {/* Home Bar */}
      <div className="h-7 shrink-0 relative">
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-[5px] bg-foreground rounded-full" />
      </div>
      
      {/* Priority Sheet */}
      <PrioritySheet
        isOpen={isPrioritySheetOpen}
        onClose={() => setIsPrioritySheetOpen(false)}
        currentPriority={currentPriority}
        onSelectPriority={handlePrioritySelect}
      />
      
      {/* Date Range Sheet */}
      <DateRangeSheet
        isOpen={isDateRangeSheetOpen}
        onClose={() => setIsDateRangeSheetOpen(false)}
        onConfirm={handleDateRangeConfirm}
        initialStartDate={startDateObj}
        initialEndDate={endDateObj}
      />
      
      {/* Edit Task Sheet */}
      <EditTaskSheet
        isOpen={isEditTaskSheetOpen}
        onClose={() => setIsEditTaskSheetOpen(false)}
        task={{ ...task, title: currentTitle }}
        editMode={editMode}
        currentDescription={currentDescription}
        onSave={(text) => {
          if (editMode === 'name') {
            setCurrentTitle(text);
            onUpdateTask({ ...task, title: text });
            toast('Task name updated');
          } else {
            setCurrentDescription(text);
            toast('Description updated');
          }
        }}
      />
      
      {/* More Actions Sheet */}
      <MoreActionsSheet
        isOpen={isMoreActionsSheetOpen}
        onClose={() => setIsMoreActionsSheetOpen(false)}
        onAction={handleMoreAction}
      />
    </div>
  );
}
