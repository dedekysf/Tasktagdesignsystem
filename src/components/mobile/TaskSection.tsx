import { ChevronUp, ChevronDown } from 'lucide-react';
import TaskItem from './TaskItem';

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

interface TaskSectionProps {
  title: string;
  count?: number;
  tasks: Task[];
  expanded: boolean;
  onToggle: () => void;
  onTaskToggle: (taskId: number, isCompleted: boolean) => void;
  animatingTaskId?: number | null;
  searchQuery?: string;
  onDueDateClick?: (taskId: number, currentDate: string) => void;
  onTaskClick?: (taskId: number) => void;
  onMoveTask?: (dragIndex: number, hoverIndex: number) => void;
}

export function TaskSection({ 
  title, 
  count, 
  tasks, 
  expanded, 
  onToggle, 
  onTaskToggle, 
  animatingTaskId, 
  searchQuery = '', 
  onDueDateClick, 
  onTaskClick,
  onMoveTask 
}: TaskSectionProps) {
  return (
    <div className="bg-card">
      <div 
        className="px-4 py-3 flex items-center gap-2 cursor-pointer select-none group"
        onClick={onToggle}
      >
        <div className="flex-1 flex items-center gap-2">
          <h4 className="text-mobile-label-emphasized text-muted-foreground transition-colors">{title}</h4>
          {count !== undefined && (
            <div className="min-w-[1.25rem] h-5 px-1.5 flex items-center justify-center rounded-full bg-secondary border border-border">
              <span className="text-mobile-metadata-secondary text-muted-foreground">
                {count}
              </span>
            </div>
          )}
        </div>
        <div className="p-1 rounded-md active:bg-secondary transition-colors">
          {expanded ? (
            <ChevronUp className="w-4 h-4 text-muted-foreground" strokeWidth={2.5} />
          ) : (
            <ChevronDown className="w-4 h-4 text-muted-foreground" strokeWidth={2.5} />
          )}
        </div>
      </div>
      {expanded && (
        <div className="pb-2">
          {tasks.map((task, index) => (
            <TaskItem 
              key={task.id} 
              task={task} 
              onTaskToggle={onTaskToggle} 
              animatingTaskId={animatingTaskId}
              isLastItem={index === tasks.length - 1}
              searchQuery={searchQuery}
              onDueDateClick={onDueDateClick}
              onTaskClick={onTaskClick}
              index={index}
              onMoveTask={onMoveTask}
              section={title.toLowerCase() === 'completed' ? 'completed' : 'current'}
            />
          ))}
          {tasks.length === 0 && (
            <div className="px-4 py-8 text-center text-mobile-secondary-body text-muted-foreground">
              No {title.toLowerCase()} tasks
            </div>
          )}
        </div>
      )}
    </div>
  );
}
