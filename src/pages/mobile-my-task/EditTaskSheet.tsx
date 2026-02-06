import { useState, useEffect, useRef } from 'react';
import { StatusBar } from './StatusBar';
import { Calendar, ChevronsUp, ChevronsDown, Equal, Check, UserPlus, FileText, ChevronRight, Activity, ImageIcon } from 'lucide-react';
import svgPaths from "../../imports/svg-ngfg9xj07v";
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

interface EditTaskSheetProps {
  isOpen: boolean;
  task: Task;
  editMode: 'name' | 'description';
  currentDescription: string;
  onClose: () => void;
  onSave: (text: string) => void;
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
  
  if (dateString.startsWith('Due ') || dateString.startsWith('Start ')) {
    return dateString;
  }
  
  if (dateString.includes(' - ') || dateString.includes('–')) {
    const separator = dateString.includes(' - ') ? ' - ' : '–';
    const parts = dateString.split(separator).map(s => s.trim());
    
    if (parts.length === 2) {
      const [startDateStr, endDateStr] = parts;
      
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
        const sameMonthAndYear = startDate.month === endDate.month && startDate.year === endDate.year;
        
        if (sameMonthAndYear) {
          if (startDate.year === currentYear) {
            return `${startDate.month} ${startDate.day} – ${endDate.day}`;
          } else {
            return `${startDate.month} ${startDate.day} – ${endDate.day}, ${startDate.year}`;
          }
        }
        
        const bothInCurrentYear = startDate.year === currentYear && endDate.year === currentYear;
        
        if (bothInCurrentYear) {
          return `${startDate.month} ${startDate.day} – ${endDate.month} ${endDate.day}`;
        } else {
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
  
  return dateString;
}

export function EditTaskSheet({ isOpen, task, editMode, currentDescription, onClose, onSave }: EditTaskSheetProps) {
  const [text, setText] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  
  const priorityConfig = {
    high: { label: 'High', color: '#FF4444', icon: ChevronsUp },
    medium: { label: 'Medium', color: '#E6B566', icon: Equal },
    low: { label: 'Low', color: '#138EFF', icon: ChevronsDown }
  };

  const priority = priorityConfig[task.priority];
  const PriorityIcon = priority.icon;

  useEffect(() => {
    if (isOpen) {
      if (editMode === 'name') {
        setText(task.title);
      } else {
        setText(currentDescription);
      }
      
      // Auto-focus textarea and move cursor to end
      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.focus();
          const length = textareaRef.current.value.length;
          textareaRef.current.setSelectionRange(length, length);
          // Scroll to bottom of textarea
          textareaRef.current.scrollTop = textareaRef.current.scrollHeight;
        }
      }, 100);
    }
  }, [isOpen, editMode, task.title, currentDescription]);

  const handleDone = () => {
    onSave(text);
    onClose();
  };

  const assigneesForDisplay = task.assignees;
  const shouldShowFourAvatars = assigneesForDisplay.length === 4;
  const maxDisplayed = shouldShowFourAvatars ? 4 : 3;
  const displayedAssignees = assigneesForDisplay.slice(0, maxDisplayed);
  const remainingCount = assigneesForDisplay.length - maxDisplayed;

  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 bg-secondary z-50 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-card flex flex-col shrink-0">
        {/* Status Bar */}
        <StatusBar />
        
        {/* Navigation */}
        <div className="flex items-center justify-between px-4 py-0 h-[51px]">
          <button 
            onClick={onClose}
            className="flex gap-2 items-center justify-center px-0 py-2 rounded-lg"
          >
            <p className="text-primary" style={{ fontSize: '16px', fontWeight: 500 }}>Cancel</p>
          </button>
          
          <p className="font-semibold text-foreground">Edit Task</p>
          
          <button 
            onClick={handleDone}
            className="flex gap-2 items-center justify-center px-0 py-2 rounded-lg"
          >
            <p className="text-primary" style={{ fontSize: '16px', fontWeight: 500 }}>Done</p>
          </button>
        </div>
        
        {/* Divider */}
        <div className="h-px bg-border" />
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <div className="flex flex-col gap-3 p-4">
          
          {/* Edit Task Name Mode */}
          {editMode === 'name' && (
            <>
              {/* Textarea for Task Name */}
              <div className="bg-card rounded-lg border border-foreground p-4 flex items-end gap-2">
                <textarea
                  ref={textareaRef}
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className="flex-1 text-sm text-foreground tracking-[0.28px] resize-none outline-none bg-transparent min-h-[64px] custom-scrollbar"
                  placeholder="Task name"
                  rows={4}
                  maxLength={250}
                />
                <p className="text-xs text-grey-4 tracking-[0.24px] shrink-0">{250 - text.length}</p>
              </div>

              {/* Action Pills - Disabled */}
              <div className="flex gap-2 items-start opacity-50 pointer-events-none">
                <div className="bg-card rounded-[40px] px-4 py-2 flex items-center gap-2">
                  <PriorityIcon className="w-4 h-4" style={{ color: priority.color }} strokeWidth={2} />
                  <p className="text-sm tracking-[0.28px]" style={{ color: priority.color }}>
                    {priority.label}
                  </p>
                </div>
                
                <div className="bg-card rounded-[40px] px-4 py-2 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-foreground" strokeWidth={2} />
                  <p className="text-sm text-foreground tracking-[0.28px]">
                    {formatDateRange(task.dueDate)}
                  </p>
                </div>
              </div>

              {/* Description Card - Disabled */}
              <div className="bg-card rounded-lg p-4 opacity-50 pointer-events-none">
                <p className="font-semibold text-foreground mb-3">Description</p>
                <p className="text-xs text-muted-foreground tracking-[0.24px] leading-4 whitespace-pre-wrap break-words">
                  {currentDescription}
                </p>
              </div>
            </>
          )}

          {/* Edit Description Mode */}
          {editMode === 'description' && (
            <>
              {/* Task Name Card - Disabled */}
              <div className="bg-card rounded-lg p-4 opacity-50 pointer-events-none">
                <div className="flex gap-3 items-start">
                  {/* Checkbox */}
                  <div className="relative shrink-0 size-5 mt-0.5">
                    {task.completed ? (
                      <div className="absolute inset-0 rounded-full bg-primary flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" strokeWidth={3} />
                      </div>
                    ) : (
                      <div className="absolute inset-0 rounded-full border-2 border-foreground" />
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 flex flex-col gap-3 min-w-0">
                    <p className="text-foreground text-sm tracking-[0.28px] whitespace-pre-wrap break-words overflow-wrap-anywhere">
                      {task.title}
                    </p>
                    
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

              {/* Action Pills - Disabled */}
              <div className="flex gap-2 items-start opacity-50 pointer-events-none">
                <div className="bg-card rounded-[40px] px-4 py-2 flex items-center gap-2">
                  <PriorityIcon className="w-4 h-4" style={{ color: priority.color }} strokeWidth={2} />
                  <p className="text-sm tracking-[0.28px]" style={{ color: priority.color }}>
                    {priority.label}
                  </p>
                </div>
                
                <div className="bg-card rounded-[40px] px-4 py-2 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-foreground" strokeWidth={2} />
                  <p className="text-sm text-foreground tracking-[0.28px]">
                    {formatDateRange(task.dueDate)}
                  </p>
                </div>
              </div>

              {/* Textarea for Description */}
              <div className="bg-card rounded-lg border border-foreground p-4 flex items-end gap-2">
                <textarea
                  ref={textareaRef}
                  value={text}
                  onChange={(e) => {
                    const newText = e.target.value;
                    if (newText.length <= 1000) {
                      setText(newText);
                    }
                  }}
                  className="flex-1 text-xs text-muted-foreground tracking-[0.24px] leading-4 resize-none outline-none bg-transparent min-h-[64px] custom-scrollbar"
                  placeholder="Description"
                  rows={4}
                  maxLength={1000}
                />
                <p className="text-xs text-grey-4 tracking-[0.24px] shrink-0">{1000 - text.length}</p>
              </div>
            </>
          )}

          {/* Assignee Card - Disabled */}
          <div className="bg-card rounded-lg p-4 opacity-50 pointer-events-none">
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

          {/* Checklist Card - Disabled */}
          <div className="bg-card rounded-lg p-4 opacity-50 pointer-events-none">
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

          {/* Activity Log & Files Grid - Disabled */}
          <div className="flex gap-3 items-start opacity-50 pointer-events-none">
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

      {/* Home Bar */}
      <div className="h-7 shrink-0 relative">
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-[5px] bg-foreground rounded-full" />
      </div>
    </div>
  );
}
