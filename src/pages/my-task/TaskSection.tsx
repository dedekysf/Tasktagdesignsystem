import { useState, useRef, useEffect } from "react";
import { useDrop } from "react-dnd";
import { TaskItem } from "./TaskItem";
import { InlineTaskCreation } from "./InlineTaskCreation";
import { TaskSectionHeader } from "../../components/TaskSectionHeader";
import { toast } from "sonner@2.0.3";
import type { Task, Assignee } from "../my-task-types";
import { AssigneeModal } from "./AssigneeModal";

interface TaskSectionProps {
  title: string;
  count: number;
  tasks: Task[];
  isExpanded: boolean;
  onToggle: () => void;
  onReorder: (tasks: Task[]) => void;
  onCrossSectionDrop: (fromSection: "current" | "overdue" | "completed", toSection: "current" | "overdue" | "completed", taskIds: string | string[], insertIndex: number) => void;
  onAddTask: (name: string, priority: "high" | "medium" | "low", dueDate: Date | null, assignees: Assignee[]) => void;
  onCompleteTask?: (taskIds: string | string[]) => void;
  onUncompleteTask?: (taskIds: string | string[]) => void;
  showInlineCreation: boolean;
  showCount?: boolean;
  sectionType: "current" | "overdue" | "completed";
  selectedTaskIds: Set<string>;
  onTaskSelect: (taskId: string, isMultiSelect: boolean) => void;
  onUpdateTask?: (taskId: string, updates: Partial<Task>) => void;
  onMoveUp?: (taskIds: string | string[]) => void;
  onMoveDown?: (taskIds: string | string[]) => void;
  onDeleteTask?: (taskIds: string | string[]) => void;
  onDuplicateTask?: (taskIds: string | string[], options?: {
    taskDetails?: boolean;
    checkLists?: boolean;
    allMembers?: boolean;
    creator?: boolean;
    assignee?: boolean;
    viewers?: boolean;
    allFiles?: boolean;
    withTags?: boolean;
  }) => void;
}

interface DragItem {
  id: string;
  index: number;
  type: string;
  sectionType: "current" | "overdue" | "completed";
  selectedTaskIds?: string[];
}

export function TaskSection({ title, count, tasks, isExpanded, onToggle, onReorder, onCrossSectionDrop, onAddTask, onCompleteTask, onUncompleteTask, showInlineCreation, showCount = true, sectionType, selectedTaskIds, onTaskSelect, onUpdateTask, onMoveUp, onMoveDown, onDeleteTask, onDuplicateTask }: TaskSectionProps) {
  const [displayedTasks, setDisplayedTasks] = useState<Task[]>([]);
  const [visibleCount, setVisibleCount] = useState(10);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [draggingTaskIds, setDraggingTaskIds] = useState<Set<string>>(new Set());
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [assigneeModalOpen, setAssigneeModalOpen] = useState(false);
  const [assigneeModalTaskIds, setAssigneeModalTaskIds] = useState<string[]>([]);

  // Drop zone for the section
  const [{ isOver, canDrop, draggedItem }, drop] = useDrop<DragItem, void, { isOver: boolean; canDrop: boolean; draggedItem: DragItem | null }>({
    accept: "TASK",
    canDrop: (item: DragItem) => {
      // Only allow same-section reordering
      if (item.sectionType !== sectionType) {
        return false;
      }
      return true;
    },
    drop: (item: DragItem, monitor) => {
      // Only handle drop if it's not already handled by a TaskItem
      const didDrop = monitor.didDrop();
      if (didDrop) {
        return;
      }

      // Drop at the top of section (index 0) for cross-section moves
      if (item.sectionType !== sectionType) {
        const taskIdsToMove = item.selectedTaskIds && item.selectedTaskIds.length > 0 ? item.selectedTaskIds : [item.id];
        onCrossSectionDrop(item.sectionType, sectionType, taskIdsToMove, 0);
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
      draggedItem: monitor.getItem(),
    }),
  });

  // Update displayed tasks when tasks change
  useEffect(() => {
    if (isExpanded) {
      setDisplayedTasks(tasks.slice(0, visibleCount));
    }
  }, [tasks, visibleCount, isExpanded]);

  // Reset visible count when section collapses
  useEffect(() => {
    if (!isExpanded) {
      setVisibleCount(10);
    }
  }, [isExpanded]);

  // Infinite scroll logic
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || !isExpanded) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const scrollPercentage = (scrollTop + clientHeight) / scrollHeight;

      // Load more when scrolled to 80%
      if (scrollPercentage > 0.8 && !isLoadingMore && visibleCount < tasks.length) {
        setIsLoadingMore(true);
        setTimeout(() => {
          setVisibleCount(prev => Math.min(prev + 10, tasks.length));
          setIsLoadingMore(false);
        }, 1000);
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [isExpanded, isLoadingMore, visibleCount, tasks.length]);

  const moveTask = (dragIndex: number, hoverIndex: number, selectedTaskIds?: string[]) => {
    if (selectedTaskIds && selectedTaskIds.length > 1) {
      const dragTask = displayedTasks[dragIndex];
      const hoverTask = displayedTasks[hoverIndex];
      
      if (!dragTask || !hoverTask) return;
      
      const dragIndexInFull = tasks.findIndex(t => t.id === dragTask.id);
      const hoverIndexInFull = tasks.findIndex(t => t.id === hoverTask.id);
      
      if (dragIndexInFull === -1 || hoverIndexInFull === -1) return;
      
      const selectedTasksInFull = tasks.filter(task => selectedTaskIds.includes(task.id));
      const unselectedTasksInFull = tasks.filter(task => !selectedTaskIds.includes(task.id));
      
      let selectedBeforeHoverInFull = 0;
      for (let i = 0; i < hoverIndexInFull; i++) {
        if (selectedTaskIds.includes(tasks[i].id)) {
          selectedBeforeHoverInFull++;
        }
      }
      
      const adjustedHoverIndexFull = hoverIndexInFull - selectedBeforeHoverInFull;
      const updatedFullTasks = [...unselectedTasksInFull];
      updatedFullTasks.splice(adjustedHoverIndexFull, 0, ...selectedTasksInFull);
      
      onReorder(updatedFullTasks);
    } else {
      const dragTask = displayedTasks[dragIndex];
      const hoverTask = displayedTasks[hoverIndex];
      
      if (!dragTask) return;
      
      const dragIndexInFull = tasks.findIndex(t => t.id === dragTask.id);
      if (dragIndexInFull === -1) return;
      
      let insertIndexInFull: number;
      
      if (hoverTask) {
        const hoverIndexInFull = tasks.findIndex(t => t.id === hoverTask.id);
        if (hoverIndexInFull === -1) return;
        insertIndexInFull = hoverIndexInFull;
      } else {
        insertIndexInFull = tasks.length;
      }
      
      const updatedFullTasks = [...tasks];
      const dragTaskInFull = updatedFullTasks[dragIndexInFull];
      updatedFullTasks.splice(dragIndexInFull, 1);
      
      const adjustedInsertIndexFull = dragIndexInFull < insertIndexInFull ? insertIndexInFull - 1 : insertIndexInFull;
      updatedFullTasks.splice(adjustedInsertIndexFull, 0, dragTaskInFull);
      
      onReorder(updatedFullTasks);
    }
  };

  const handleCrossSectionMove = (fromSection: "current" | "overdue" | "completed", taskId: string, insertIndex: number, selectedTaskIds?: string[]) => {
    const taskIdsToMove = selectedTaskIds && selectedTaskIds.length > 0 ? selectedTaskIds : [taskId];
    
    if (selectedTaskIds && selectedTaskIds.length > 0) {
      onCrossSectionDrop(fromSection, sectionType, selectedTaskIds, insertIndex);
    } else {
      onCrossSectionDrop(fromSection, sectionType, [taskId], insertIndex);
    }
  };

  return (
    <div ref={drop} className={`flex flex-col bg-white rounded-lg overflow-hidden ${isExpanded && sectionType === "current" ? "flex-1 min-h-0" : "shrink-0"} ${isOver && canDrop && !isExpanded ? "ring-2 ring-primary ring-inset" : ""}`} style={{ border: '1px solid var(--grey-03)' }}>
      <TaskSectionHeader 
        title={title} 
        count={count} 
        isExpanded={isExpanded} 
        onToggle={onToggle}
        showCount={showCount}
      />
      
      {isExpanded && (
        <>
          {/* Scrollable task list */}
          <div 
            ref={scrollContainerRef}
            className={sectionType === "current" ? "flex-1 min-h-0 overflow-y-auto" : "overflow-y-auto"}
            style={{ 
              scrollbarWidth: 'thin',
              scrollbarColor: 'var(--grey-03) transparent'
            }}
          >
            <div ref={contentRef}>
              <div>
                {displayedTasks.map((task, index) => (
                  <TaskItem
                    key={task.id}
                    task={task}
                    index={index}
                    onReorder={moveTask}
                    onCrossSectionDrop={handleCrossSectionMove}
                    onOpenAssigneeModal={(taskIds) => {
                      const ids = Array.isArray(taskIds) ? taskIds : [taskIds];
                      setAssigneeModalTaskIds(ids);
                      setAssigneeModalOpen(true);
                    }}
                    sectionType={sectionType}
                    isLast={index === displayedTasks.length - 1 && !showInlineCreation}
                    isSelected={selectedTaskIds.has(task.id)}
                    onTaskSelect={onTaskSelect}
                    selectedTaskIds={selectedTaskIds}
                    onMultiDragStart={(taskIds) => {
                      setDraggingTaskIds(new Set(taskIds));
                    }}
                    onMultiDragEnd={() => {
                      setDraggingTaskIds(new Set());
                    }}
                    isDraggedItem={draggingTaskIds.has(task.id)}
                    onComplete={onCompleteTask}
                    onUncomplete={onUncompleteTask}
                    onUpdateTask={onUpdateTask}
                    onMoveUp={onMoveUp}
                    onMoveDown={onMoveDown}
                    onDeleteTask={onDeleteTask}
                    onDuplicateTask={onDuplicateTask}
                    totalTasksInSection={tasks.length}
                    allTasksInSection={displayedTasks}
                  />
                ))}
                
                {/* Empty state */}
                {displayedTasks.length === 0 && (
                  <>
                    {!isOver ? (
                      <div className="flex flex-col items-center justify-center py-8 text-center">
                        {sectionType === "completed" ? (
                          <>
                            <span className="text-black text-[14px]" style={{ fontWeight: 'var(--font-weight-semibold)' }}>No completed tasks yet</span>
                            <span className="text-[14px]" style={{ color: 'var(--grey-05)' }}>Finish a task to see it here</span>
                          </>
                        ) : sectionType === "overdue" ? (
                          <>
                            <span className="text-black text-[14px]" style={{ fontWeight: 'var(--font-weight-semibold)' }}>No overdue tasks</span>
                            <span className="text-[14px]" style={{ color: 'var(--grey-05)' }}>Nice work nothing is past due</span>
                          </>
                        ) : (
                          <>
                            <span className="text-black text-[14px]" style={{ fontWeight: 'var(--font-weight-semibold)' }}>No current tasks</span>
                            <span className="text-[14px]" style={{ color: 'var(--grey-05)' }}>Add a task to see it here</span>
                          </>
                        )}
                      </div>
                    ) : (
                      <div className="h-16 border-2 border-dashed border-primary rounded-lg m-4 flex items-center justify-center">
                        <span className="text-sm" style={{ color: 'var(--grey-05)' }}>Drop task here</span>
                      </div>
                    )}
                  </>
                )}
                
                {/* Loading indicator */}
                {isLoadingMore && (
                  <div className="flex justify-center items-center gap-2 py-4" style={{ borderTop: '1px solid var(--grey-03)' }}>
                    <div className="size-4 rounded-full animate-spin" style={{ border: '2px solid var(--grey-03)', borderTopColor: 'var(--grey-05)' }} />
                    <div className="text-sm" style={{ color: 'var(--grey-05)' }}>Loading more...</div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Inline task creation */}
          {showInlineCreation && (
            <InlineTaskCreation onAddTask={onAddTask} />
          )}
        </>
      )}

      {/* Assignee Modal */}
      {assigneeModalOpen && (() => {
        // Get all unique assignees from the selected tasks
        const selectedTasks = tasks.filter(task => assigneeModalTaskIds.includes(task.id));
        const allAssignees = selectedTasks.flatMap(task => task.assignees || []);
        
        // Remove duplicates by name and map to modal format
        const uniqueAssignees = Array.from(
          new Map(
            allAssignees.map(assignee => [
              assignee.name,
              {
                name: assignee.name,
                email: assignee.name.toLowerCase().replace(/\s+/g, '') + '@gmail.com', // Generate email from name
                isEmailInvite: assignee.isEmailInvite,
                role: assignee.role
              }
            ])
          ).values()
        );

        return (
          <AssigneeModal
            isOpen={assigneeModalOpen}
            onClose={() => setAssigneeModalOpen(false)}
            selectedAssignees={uniqueAssignees}
            onAssign={(assignees) => {
              // Update all selected tasks with the new assignees
              assigneeModalTaskIds.forEach(taskId => {
                onUpdateTask?.(taskId, { 
                  assignees: assignees.map(a => ({ 
                    name: a.name, 
                    email: a.email, // Include email
                    avatar: a.avatarUrl || "",
                    role: a.role,
                    isEmailInvite: a.isEmailInvite
                  }))
                });
              });
              setAssigneeModalOpen(false);
            }}
          />
        );
      })()}
    </div>
  );
}