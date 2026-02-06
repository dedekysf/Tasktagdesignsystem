import { Calendar, Zap, HardHat } from 'lucide-react';
import { useRef, useState, useEffect, memo } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { HighlightedText } from './HighlightedText';
import { Checkbox } from '../Checkbox';

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
    if (cleanString.includes('–') || cleanString.includes('-')) {
      const parts = cleanString.split(/[–-]/);
      return parts[1].trim(); // Return end date
    }
    
    // Otherwise return as is (single due date)
    return cleanString;
  };

  const isAnimating = animatingTaskId === task.id;
  const isCompleted = task.completed || false;
  const displayDate = extractDueDate(task.dueDate);
  const isOverdue = task.isOverdue && !isCompleted;

  const ref = useRef<HTMLDivElement>(null);
  const longPressTimerRef = useRef<NodeJS.Timeout | null>(null);
  const [isLongPressing, setIsLongPressing] = useState(false);
  const [canDrag, setCanDrag] = useState(false);
  const isClickRef = useRef(true);

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

  const hoverIndexRef = useRef<number | null>(null);

  const [{ isOver }, drop] = useDrop({
    accept: section === 'completed' ? 'TASK_COMPLETED' : 'TASK_CURRENT',
    hover(item: { id: number, index: number }) {
      if (!ref.current) {
        return;
      }
      hoverIndexRef.current = index;
    },
    drop(item: { id: number, index: number }) {
      const dragIndex = item.index;
      const hoverIndex = hoverIndexRef.current;

      if (hoverIndex !== null && dragIndex !== hoverIndex) {
        onMoveTask?.(dragIndex, hoverIndex);
      }
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
      if ('vibrate' in navigator) {
        navigator.vibrate(50);
      }
    }, 500);
  };

  const handleLongPressEnd = () => {
    if (longPressTimerRef.current) {
      clearTimeout(longPressTimerRef.current);
      longPressTimerRef.current = null;
    }
    setTimeout(() => {
      setIsLongPressing(false);
    }, 100);
  };

  const handleLongPressCancel = () => {
    if (longPressTimerRef.current) {
      clearTimeout(longPressTimerRef.current);
      longPressTimerRef.current = null;
    }
    setIsLongPressing(false);
  };

  const handleTaskContentClick = () => {
    if (isClickRef.current && !isDragging) {
      onTaskClick?.(task.id);
    }
  };

  return (
    <div 
      ref={ref}
      className={`flex items-center gap-3 py-3 px-4 transition-all duration-200 relative group
        ${isAnimating ? 'opacity-50' : 'opacity-100'} 
        ${isLongPressing && !isDragging ? 'scale-[0.98] bg-secondary/50' : 'scale-100 hover:bg-secondary/20'}
      `}
      style={{ 
        backgroundColor: isDragging ? 'var(--secondary)' : undefined,
        cursor: canDrag ? 'grabbing' : 'default'
      }}
      onMouseDown={handleLongPressStart}
      onMouseUp={handleLongPressEnd}
      onMouseLeave={handleLongPressCancel}
      onTouchStart={handleLongPressStart}
      onTouchEnd={handleLongPressEnd}
      onTouchCancel={handleLongPressCancel}
    >
      {isOver && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary z-10" />
      )}
      
      {!isLastItem && (
        <div className="absolute bottom-0 left-[52px] right-4 h-px bg-border group-hover:bg-transparent" />
      )}
      
      {/* Checkbox */}
      <div className="shrink-0" style={{ opacity: isDragging ? 0 : 1 }}>
        <div 
          className="p-1 -ml-1"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <Checkbox 
            variant="circular"
            checked={isCompleted}
            onChange={(checked) => onTaskToggle(task.id, checked)}
          />
        </div>
      </div>
      
      {/* Task content */}
      <div 
        className="flex-1 flex items-center gap-3 overflow-hidden cursor-pointer min-w-0"
        style={{ opacity: isDragging ? 0.5 : 1 }}
        onClick={handleTaskContentClick}
      >
        <div className="flex-1 flex flex-col gap-0.5 min-w-0">
          <p className={`text-sm truncate transition-colors ${isCompleted ? 'text-muted-foreground line-through decoration-muted-foreground/50' : 'text-foreground font-medium'}`}>
            <HighlightedText text={task.title} query={searchQuery} />
          </p>
          
          <div className="flex items-center gap-1.5 min-w-0 text-muted-foreground">
            {task.projectIcon === 'zap' ? (
              <Zap className="w-3 h-3 shrink-0" fill={task.projectColor} strokeWidth={0} />
            ) : (
              <HardHat className="w-3 h-3 shrink-0" fill={task.projectColor} strokeWidth={0} />
            )}
            <span className="text-[10px] leading-tight truncate">
              {truncateProject(task.project)}
            </span>
          </div>
        </div>
        
        {/* Due date */}
        <div className="shrink-0">
          <button 
            className={`
              px-2 py-1 rounded-md border flex items-center gap-1 transition-colors
              ${isOverdue 
                ? 'bg-destructive/10 border-destructive/20 text-destructive' 
                : 'bg-background border-border text-muted-foreground hover:border-primary/50 hover:text-primary'
              }
            `}
            onClick={(e) => {
              e.stopPropagation();
              onDueDateClick?.(task.id, task.dueDate);
            }}
          >
            {displayDate === 'Due Date' && (
              <Calendar className="w-3 h-3 opacity-70" strokeWidth={2} />
            )}
            <span className="text-[10px] font-medium whitespace-nowrap">
              {displayDate}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default memo(TaskItem);
