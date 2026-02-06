import { ChevronUp, ChevronDown } from 'lucide-react';
import { TaskItem } from './TaskItem';

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
        className="px-4 py-3 flex items-center gap-3 bg-card cursor-pointer sticky top-0 z-10"
        onClick={onToggle}
      >
        <div className="flex-1 flex items-center gap-1">
          <h4 className="text-muted-foreground" style={{ fontWeight: 600 }}>{title}</h4>
          {count !== undefined && (
            <div className="w-5 h-5 flex items-center justify-center rounded-full border border-border">
              <span className="text-[10px] leading-4 text-muted-foreground caption" style={{ fontWeight: 500 }}>
                {count}
              </span>
            </div>
          )}
        </div>
        {expanded ? (
          <ChevronUp className="w-5 h-5 text-muted-foreground" strokeWidth={2} />
        ) : (
          <ChevronDown className="w-5 h-5 text-muted-foreground" strokeWidth={2} />
        )}
      </div>
      {expanded && (
        <div>
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
        </div>
      )}
    </div>
  );
}
