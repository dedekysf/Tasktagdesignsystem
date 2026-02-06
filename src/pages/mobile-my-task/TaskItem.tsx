import { Circle, CheckCircle2, Check, Calendar } from 'lucide-react';
import { useRef, useState, useEffect, memo } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import svgPaths from "../../imports/svg-ngfg9xj07v";
import { HighlightedText } from './HighlightedText';

interface Task {
  id: number;
  title: string;
  project: string;
  projectIcon: string;
  projectColor: string;
  dueDate: string;
  isOverdue?: boolean;
  completed?: boolean;
}

interface TaskItemProps {
  task: Task;
  onTaskToggle: (taskId: number, isCompleted: boolean) => void;
  animatingTaskId?: number | null;
  isLastItem?: boolean;
  searchQuery?: string;
  onDueDateClick?: (taskId: number, currentDate: string) => void;
  onTaskClick?: (taskId: number) => void;
  index?: number;
  onMoveTask?: (dragIndex: number, hoverIndex: number) => void;
  section?: 'current' | 'completed';
}

export function TaskItem({ 
  task, 
  onTaskToggle, 
  animatingTaskId, 
  isLastItem, 
  searchQuery = '', 
  onDueDateClick, 
  onTaskClick,
  index,
  onMoveTask,
  section
}: TaskItemProps) {
  const truncateProject = (text: string, maxLength: number = 25) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  // Extract only the due date (end date) from date range
  const extractDueDate = (dateString: string) => {
    // If already "Due Date", return as is (empty state)
    if (dateString === 'Due Date') return 'Due Date';
    
    // Remove "Due " or "Start " prefix if exists
    let cleanString = dateString.replace(/^(Due|Start)\s+/, '');
    
    // Check if it was a "Start" prefix with no range (no due date)
    if (dateString.startsWith('Start ') && !cleanString.includes('–')) {
      // Only start date, no due date - return empty state
      return 'Due Date';
    }
    
    // If it's a range (contains –), extract the end date (due date)
    if (cleanString.includes('–')) {
      const parts = cleanString.split('–');
      return parts[1].trim(); // Return end date
    }
    
    // Otherwise return as is (single due date)
    return cleanString;
  };

  // Check if task is overdue
  const checkIsOverdue = (dateString: string) => {
    // Skip if no date set
    if (dateString === 'Due Date') return false;
    
    // Remove "Due " or "Start " prefix
    let cleanString = dateString.replace(/^(Due|Start)\s+/, '');
    
    // Extract due date from range
    let dueDateStr = cleanString;
    if (cleanString.includes('–')) {
      const parts = cleanString.split('–');
      dueDateStr = parts[1].trim(); // Get end date
    }
    
    // Parse the date
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset to start of day for accurate comparison
    
    try {
      // Parse formats like "Dec 19", "Dec 24", "Jan 2, 2026"
      const currentYear = today.getFullYear();
      let dueDate: Date;
      
      if (dueDateStr.includes(',')) {
        // Format: "Jan 2, 2026"
        dueDate = new Date(dueDateStr);
      } else {
        // Format: "Dec 19" - assume current year first
        dueDate = new Date(`${dueDateStr}, ${currentYear}`);
        
        // If parsed date is in the past but month is in future (e.g., Jan when current is Dec),
        // it's probably next year
        if (dueDate < today && dueDate.getMonth() < today.getMonth()) {
          dueDate = new Date(`${dueDateStr}, ${currentYear + 1}`);
        }
      }
      
      // Compare: overdue if due date is before today
      return dueDate < today;
    } catch (error) {
      console.error('Error parsing date:', dueDateStr, error);
      return false;
    }
  };

  const isAnimating = animatingTaskId === task.id;
  const isCompleted = task.completed || false;
  const displayDate = extractDueDate(task.dueDate);
  // Don't show overdue for completed tasks or empty due dates
  const isOverdue = !isCompleted && displayDate !== 'Due Date' && checkIsOverdue(task.dueDate);

  const ref = useRef<HTMLDivElement>(null);
  const longPressTimerRef = useRef<NodeJS.Timeout | null>(null);
  const [isLongPressing, setIsLongPressing] = useState(false);
  const [canDrag, setCanDrag] = useState(false);
  const isClickRef = useRef(true);

  // Debug effect
  useEffect(() => {
    if (!isLastItem) {
      // console.log(`Task ${task.id}: Border should render. isLastItem=${isLastItem}`);
    }
  }, [isLastItem, task.id]);

  const [{ isDragging }, drag] = useDrag({
    type: section === 'completed' ? 'TASK_COMPLETED' : 'TASK_CURRENT',
    item: { id: task.id, index },
    canDrag: () => canDrag,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    end: () => {
      setCanDrag(false);
      setIsLongPressing(false);
    }
  });

  // Track hover position without moving yet
  const hoverIndexRef = useRef<number | null>(null);

  const [{ isOver }, drop] = useDrop({
    accept: section === 'completed' ? 'TASK_COMPLETED' : 'TASK_CURRENT',
    hover(item: { id: number, index: number }) {
      if (!ref.current) {
        return;
      }
      const hoverIndex = index;

      // Just track where we're hovering, don't move yet
      hoverIndexRef.current = hoverIndex;
    },
    drop(item: { id: number, index: number }) {
      // Only move on drop
      const dragIndex = item.index;
      const hoverIndex = hoverIndexRef.current;

      if (hoverIndex !== null && dragIndex !== hoverIndex) {
        onMoveTask?.(dragIndex, hoverIndex);
      }

      // Reset
      hoverIndexRef.current = null;
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  drag(drop(ref) as any);

  const handleLongPressStart = (e: React.MouseEvent | React.TouchEvent) => {
    isClickRef.current = true;
    longPressTimerRef.current = setTimeout(() => {
      setIsLongPressing(true);
      setCanDrag(true);
      isClickRef.current = false;
      // Haptic feedback for mobile
      if ('vibrate' in navigator) {
        navigator.vibrate(50);
      }
      console.log('Long press activated - drag mode enabled');
    }, 500);
  };

  const handleLongPressEnd = () => {
    if (longPressTimerRef.current) {
      clearTimeout(longPressTimerRef.current);
      longPressTimerRef.current = null;
    }
    setTimeout(() => {
      setIsLongPressing(false);
      console.log('Long press ended');
    }, 100);
  };

  const handleLongPressCancel = () => {
    if (longPressTimerRef.current) {
      clearTimeout(longPressTimerRef.current);
      longPressTimerRef.current = null;
    }
    setIsLongPressing(false);
    console.log('Long press cancelled');
  };

  const handleTaskContentClick = () => {
    if (isClickRef.current && !isDragging) {
      console.log('Task clicked - opening detail');
      onTaskClick?.(task.id);
    } else {
      console.log('Click prevented - was dragging or long pressing');
    }
  };

  return (
    <div 
      ref={ref}
      className={`flex items-center gap-3 h-14 px-4 transition-all duration-200 relative ${ 
        isAnimating ? 'opacity-50' : 'opacity-100'
      } ${isLongPressing && !isDragging ? 'scale-[0.98]' : 'scale-100'}`}
      style={{ 
        backgroundColor: isDragging ? 'rgba(0, 0, 0, 0.04)' : 'var(--card)',
        cursor: canDrag ? 'grabbing' : 'default'
      }}
      onMouseDown={handleLongPressStart}
      onMouseUp={handleLongPressEnd}
      onMouseLeave={handleLongPressCancel}
      onTouchStart={handleLongPressStart}
      onTouchEnd={handleLongPressEnd}
      onTouchCancel={handleLongPressCancel}
    >
      {/* Drop indicator - green line with circle */}
      {isOver && (
        <div 
          className="absolute bottom-0 left-0 right-0 flex items-center"
          style={{ zIndex: 10 }}
        >
          {/* Circle indicator */}
          <div 
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: 'var(--primary)' }}
          />
          {/* Green line */}
          <div 
            className="flex-1 h-0.5"
            style={{ backgroundColor: 'var(--primary)' }}
          />
        </div>
      )}
      
      {/* Border bottom at parent level */}
      {!isLastItem && (
        <div 
          className="absolute bottom-0 h-px"
          style={{ 
            left: 'calc(20px + 12px + 16px)', // checkbox width + gap + left padding
            right: '16px', // align with right padding
            backgroundColor: 'rgba(232, 232, 232, 1.00)'
          }}
        />
      )}
      
      {/* Checkbox */}
      <div style={{ opacity: isDragging ? 0 : 1 }}>
        <button 
          className="shrink-0"
          onClick={() => onTaskToggle(task.id, isCompleted)}
        >
          <div className={`transition-all duration-300 ${
            isAnimating ? 'scale-125' : 'scale-100'
          }`}>
            {isAnimating ? (
              // When animating from current to completed: show filled circle
              // When animating from completed to current: show empty circle
              isCompleted ? (
                <Circle className="w-5 h-5 text-checkbox-border" strokeWidth={2} />
              ) : (
                <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-primary-foreground" strokeWidth={3} />
                </div>
              )
            ) : isCompleted ? (
              <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                <Check className="w-3 h-3 text-primary-foreground" strokeWidth={3} />
              </div>
            ) : (
              <Circle className="w-5 h-5 text-checkbox-border" strokeWidth={2} />
            )}
          </div>
        </button>
      </div>
      
      {/* Task content */}
      <div 
        className="flex-1 flex items-center gap-3 overflow-hidden cursor-pointer py-3"
        style={{ opacity: isDragging ? 0 : 1 }}
        onClick={handleTaskContentClick}
      >
        <div className="flex-1 flex flex-col gap-1 min-w-0">
          <p 
            className="text-sm tracking-[0.28px] truncate text-foreground"
          >
            <HighlightedText text={task.title} query={searchQuery} />
          </p>
          
          <div className="flex items-center gap-1 min-w-0">
            {task.projectIcon === 'zap' ? (
              <svg className="w-3 h-3 shrink-0" viewBox="0 0 24 24" fill="none">
                <path d={svgPaths.p9ffde00} fill={task.projectColor} />
              </svg>
            ) : (
              <svg className="w-3 h-3 shrink-0" viewBox="0 0 12 12" fill="none">
                <path d={svgPaths.p13febe80} fill={task.projectColor} />
              </svg>
            )}
            <span className="text-[10px] leading-3 text-grey-4 tracking-[0.2px] caption truncate">
              {truncateProject(task.project)}
            </span>
          </div>
        </div>
        
        {/* Due date */}
        <div className="shrink-0">
          <button 
            className="bg-card px-3 py-2 rounded-full border border-border flex items-center justify-center gap-1"
            onClick={(e) => {
              e.stopPropagation();
              onDueDateClick?.(task.id, task.dueDate);
            }}
          >
            {displayDate === 'Due Date' && (
              <Calendar className="w-3 h-3 text-muted-foreground" strokeWidth={2} />
            )}
            <span 
              className={`text-[10px] leading-3 caption whitespace-nowrap ${
                isOverdue ? 'text-destructive-foreground' : 'text-muted-foreground'
              }`}
              style={{ fontWeight: 500 }}
            >
              {displayDate}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default memo(TaskItem);
