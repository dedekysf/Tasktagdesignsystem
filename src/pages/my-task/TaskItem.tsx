import { useRef, useState, useEffect } from "react";
import { useDrag, useDrop } from "react-dnd";
import {
  GripVertical,
  HardHat,
  ListChecks,
  Link,
  ChevronsDown,
  ChevronsUp,
  Minus,
  Calendar,
  UserPlus,
  CircleCheckBig,
} from "lucide-react";
import { TaskCheckbox, AssigneeButton } from "./task";
import { DropIndicator } from "./DropIndicator";
import { Tooltip } from "../../components/Tooltip";
import { Button } from "../../components/Button";
import { TaskContextMenu } from "./TaskContextMenu";
import { SuccessTooltip } from "../../components/SuccessTooltip";
import { DuplicateModal, type DuplicateOptions } from "./DuplicateModal";
import {
  getInitials,
  getAvatarColor,
} from "../../utils/avatar";
import type { Task } from "../my-task-types";
import svgPaths from "../../imports/svg-3x9ir0o7gu";
import { Calendar as CalendarPicker } from "../../components/Calendar";
import { PriorityDropdown } from "../../components/PriorityDropdown";
import { createPortal } from "react-dom";

interface TaskItemProps {
  task: Task;
  index: number;
  onReorder: (
    dragIndex: number,
    hoverIndex: number,
    selectedTaskIds?: string[],
  ) => void;
  onCrossSectionDrop: (
    fromSection: "current" | "overdue" | "completed",
    taskId: string,
    insertIndex: number,
    selectedTaskIds?: string[],
  ) => void;
  onOpenAssigneeModal?: (taskIds: string | string[]) => void;
  sectionType: "current" | "overdue" | "completed";
  isLast?: boolean;
  isSelected?: boolean;
  onTaskSelect?: (
    taskId: string,
    isMultiSelect: boolean,
  ) => void;
  selectedTaskIds?: Set<string>;
  onMultiDragStart?: (taskIds: string[]) => void;
  onMultiDragEnd?: () => void;
  isDraggedItem?: boolean;
  onComplete?: (taskIds: string | string[]) => void;
  onUncomplete?: (taskIds: string | string[]) => void;
  onDelete?: (taskId: string | string[]) => void;
  onDuplicate?: (taskIds: string | string[]) => void;
  onMoveUp?: (taskId: string | string[]) => void;
  onMoveDown?: (taskId: string | string[]) => void;
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
  totalTasksInSection?: number;
  onUpdateTask?: (
    taskId: string,
    updates: Partial<Task>,
  ) => void;
  allTasksInSection?: Task[];
  hideProjectName?: boolean;
}

interface DragItem {
  id: string;
  index: number;
  type: string;
  sectionType: "current" | "overdue" | "completed";
  selectedTaskIds?: string[];
}

const ItemType = "TASK";

export function TaskItem({
  task,
  index,
  onReorder,
  onCrossSectionDrop,
  onOpenAssigneeModal,
  sectionType,
  isLast,
  isSelected,
  onTaskSelect,
  selectedTaskIds,
  onMultiDragStart,
  onMultiDragEnd,
  isDraggedItem,
  onComplete,
  onUncomplete,
  onDelete,
  onDuplicate,
  onMoveUp,
  onMoveDown,
  onDeleteTask,
  onDuplicateTask,
  totalTasksInSection,
  onUpdateTask,
  allTasksInSection,
  hideProjectName,
}: TaskItemProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [dropPosition, setDropPosition] = useState<
    "above" | "below" | null
  >(null);
  const [showPlaceholder, setShowPlaceholder] = useState(false);
  const dragRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLSpanElement>(null);

  const mouseDownTime = useRef<number>(0);
  const mouseDownPosition = useRef<{
    x: number;
    y: number;
  } | null>(null);
  const hasDragged = useRef<boolean>(false);
  const mouseDownSelectedTask = useRef<boolean>(false);

  const [isHovered, setIsHovered] = useState(false);
  const [contextMenu, setContextMenu] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const [
    triggerCheckboxAnimation,
    setTriggerCheckboxAnimation,
  ] = useState(false);
  const [showPriorityDropdown, setShowPriorityDropdown] =
    useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [datePickerPosition, setDatePickerPosition] = useState<{
    top: number;
    left: number;
  } | null>(null);
  const [
    priorityDropdownPosition,
    setPriorityDropdownPosition,
  ] = useState<{ top: number; left: number } | null>(null);
  const dateButtonRef = useRef<HTMLDivElement>(null);
  const priorityButtonRef = useRef<HTMLDivElement>(null);
  const [showLinkCopiedSuccess, setShowLinkCopiedSuccess] =
    useState(false);
  const [showDuplicateModal, setShowDuplicateModal] = useState(false);

  const [{ handlerId, isOver, canDrop }, drop] = useDrop<
    DragItem,
    void,
    { handlerId: any; isOver: boolean; canDrop: boolean }
  >({
    accept: ItemType,
    canDrop: (item: DragItem) => {
      if (item.sectionType !== sectionType) {
        return false;
      }
      return true;
    },
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      };
    },
    hover(item: DragItem, monitor) {
      if (!dragRef.current) {
        return;
      }

      if (!monitor.canDrop()) {
        setDropPosition(null);
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;

      if (
        dragIndex === hoverIndex &&
        item.sectionType === sectionType
      ) {
        setDropPosition(null);
        return;
      }

      const hoverBoundingRect =
        dragRef.current.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();

      if (!clientOffset) {
        return;
      }

      const hoverClientY =
        clientOffset.y - hoverBoundingRect.top;

      if (hoverClientY < hoverMiddleY) {
        setDropPosition("above");
      } else {
        setDropPosition("below");
      }
    },
    drop(item: DragItem) {
      const dragIndex = item.index;
      const hoverIndex = index;

      if (
        dragIndex === hoverIndex &&
        item.sectionType === sectionType
      ) {
        return;
      }

      if (item.sectionType !== sectionType) {
        const insertIndex =
          dropPosition === "above"
            ? hoverIndex
            : hoverIndex + 1;
        onCrossSectionDrop(
          item.sectionType,
          item.id,
          insertIndex,
          item.selectedTaskIds,
        );
      } else {
        const insertIndex =
          dropPosition === "above"
            ? hoverIndex
            : hoverIndex + 1;
        onReorder(dragIndex, insertIndex, item.selectedTaskIds);
      }
    },
  });

  const [{ isDragging }, drag, preview] = useDrag<
    DragItem,
    void,
    { isDragging: boolean }
  >({
    type: ItemType,
    canDrag: () => {
      return true;
    },
    item: () => {
      const wasSelected =
        isSelected && selectedTaskIds?.has(task.id);

      if (!wasSelected) {
        onTaskSelect?.(task.id, false);

        return {
          id: task.id,
          index,
          type: ItemType,
          sectionType,
          selectedTaskIds: undefined,
        };
      }

      const selectedIds = Array.from(selectedTaskIds!);

      if (selectedIds.length > 1) {
        onMultiDragStart?.(selectedIds);
      }

      return {
        id: task.id,
        index,
        type: ItemType,
        sectionType,
        selectedTaskIds: selectedIds,
      };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    end: () => {
      setDropPosition(null);
      setShowPlaceholder(false);
      if (
        isSelected &&
        selectedTaskIds &&
        selectedTaskIds.has(task.id)
      ) {
        onMultiDragEnd?.();
      }
    },
  });

  useEffect(() => {
    if (!isOver) {
      setDropPosition(null);
    }
  }, [isOver]);

  // Check if task name exceeds 50 characters
  useEffect(() => {
    setShowTooltip(task.name.length > 50);
  }, [task.name]);

  drag(drop(dragRef));

  useEffect(() => {
    preview(dragRef);
  }, [preview]);

  useEffect(() => {
    if (isDragging || isDraggedItem) {
      const timer = setTimeout(() => {
        setShowPlaceholder(true);
      }, 0);
      return () => clearTimeout(timer);
    } else {
      setShowPlaceholder(false);
    }
  }, [isDragging, isDraggedItem]);

  // Truncate task name at 50 characters
  const displayTaskName = task.name.length > 50
    ? task.name.substring(0, 50) + "..."
    : task.name;

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button === 2) {
      return;
    }

    // Don't handle selection if any dropdown/picker is open
    if (showPriorityDropdown || showDatePicker) {
      return;
    }

    const target = e.target as HTMLElement;
    if (
      target.closest("button") ||
      target.closest('[role="button"]')
    ) {
      return;
    }

    mouseDownTime.current = Date.now();
    mouseDownPosition.current = { x: e.clientX, y: e.clientY };
    hasDragged.current = false;

    const isMultiSelect = e.metaKey || e.ctrlKey || e.shiftKey;
    const wasSelected =
      isSelected && selectedTaskIds?.has(task.id);

    mouseDownTime.current = Date.now();

    if (!isMultiSelect && !wasSelected) {
      onTaskSelect?.(task.id, false);
      hasDragged.current = false;
      mouseDownSelectedTask.current = true;
    }
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (mouseDownPosition.current) {
      const deltaX = Math.abs(
        e.clientX - mouseDownPosition.current.x,
      );
      const deltaY = Math.abs(
        e.clientY - mouseDownPosition.current.y,
      );
      const mouseMoved = deltaX > 5 || deltaY > 5;

      if (mouseMoved) {
        hasDragged.current = true;
      }
    }
  };

  const handleTaskClick = (e: React.MouseEvent) => {
    if (hasDragged.current) {
      hasDragged.current = false;
      mouseDownSelectedTask.current = false;
      return;
    }

    // Don't handle selection if any dropdown/picker is open
    if (showPriorityDropdown || showDatePicker) {
      return;
    }

    const target = e.target as HTMLElement;
    if (
      target.closest("button") ||
      target.closest('[role="button"]')
    ) {
      return;
    }

    if (isDragging) {
      return;
    }

    e.stopPropagation();

    const isMultiSelect = e.metaKey || e.ctrlKey || e.shiftKey;

    if (isMultiSelect) {
      onTaskSelect?.(task.id, true);
      mouseDownSelectedTask.current = false;
    } else {
      if (mouseDownSelectedTask.current) {
        mouseDownSelectedTask.current = false;
        return;
      }

      onTaskSelect?.(task.id, false);
    }
  };

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setContextMenu({ x: e.clientX, y: e.clientY });
  };

  const handleMarkComplete = () => {
    setTriggerCheckboxAnimation(true);

    setTimeout(() => {
      if (
        isSelected &&
        selectedTaskIds &&
        selectedTaskIds.size > 1
      ) {
        onComplete?.(Array.from(selectedTaskIds));
      } else {
        onComplete?.(task.id);
      }
      setTriggerCheckboxAnimation(false);
    }, 300);
  };

  const handleUncomplete = () => {
    setTriggerCheckboxAnimation(true);

    setTimeout(() => {
      if (
        isSelected &&
        selectedTaskIds &&
        selectedTaskIds.size > 1
      ) {
        onUncomplete?.(Array.from(selectedTaskIds));
      } else {
        onUncomplete?.(task.id);
      }
      setTriggerCheckboxAnimation(false);
    }, 300);
  };

  const handleDelete = () => {
    if (
      isSelected &&
      selectedTaskIds &&
      selectedTaskIds.size > 1
    ) {
      onDeleteTask?.(Array.from(selectedTaskIds));
    } else {
      onDeleteTask?.(task.id);
    }
  };

  const handleDuplicate = () => {
    setContextMenu(null);
    setShowDuplicateModal(true);
  };

  const handleDuplicateConfirm = (options: DuplicateOptions) => {
    // Pass the options to the duplicate handler
    if (
      isSelected &&
      selectedTaskIds &&
      selectedTaskIds.size > 1
    ) {
      onDuplicateTask?.(Array.from(selectedTaskIds), options);
    } else {
      onDuplicateTask?.(task.id, options);
    }
    
    setShowDuplicateModal(false);
  };

  const handleMoveUpAction = () => {
    if (
      isSelected &&
      selectedTaskIds &&
      selectedTaskIds.size > 1
    ) {
      onMoveUp?.(Array.from(selectedTaskIds));
    } else {
      onMoveUp?.(task.id);
    }
  };

  const handleMoveDownAction = () => {
    if (
      isSelected &&
      selectedTaskIds &&
      selectedTaskIds.size > 1
    ) {
      onMoveDown?.(Array.from(selectedTaskIds));
    } else {
      onMoveDown?.(task.id);
    }
  };

  const handleAssigneeAction = () => {
    if (
      isSelected &&
      selectedTaskIds &&
      selectedTaskIds.size > 1
    ) {
      onOpenAssigneeModal?.(Array.from(selectedTaskIds));
    } else {
      onOpenAssigneeModal?.(task.id);
    }
  };

  let canMoveUp = index > 0;
  let canMoveDown = totalTasksInSection
    ? index < totalTasksInSection - 1
    : !isLast;

  if (
    selectedTaskIds &&
    selectedTaskIds.size > 1 &&
    allTasksInSection
  ) {
    const selectedIndices = Array.from(selectedTaskIds)
      .map((id) =>
        allTasksInSection.findIndex((t) => t.id === id),
      )
      .filter((idx) => idx !== -1);

    const minIndex = Math.min(...selectedIndices);
    const maxIndex = Math.max(...selectedIndices);

    canMoveUp = minIndex > 0;
    canMoveDown = maxIndex < allTasksInSection.length - 1;
  }

  const handlePriorityChange = (
    newPriority: "high" | "medium" | "low",
  ) => {
    onUpdateTask?.(task.id, { priority: newPriority });
    setShowPriorityDropdown(false);
  };

  const handleCopyLink = () => {
    const taskLink = `${window.location.origin}/task/${task.id}`;

    // Try modern clipboard API first
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(taskLink)
        .then(() => {
          setShowLinkCopiedSuccess(true);
          setTimeout(
            () => setShowLinkCopiedSuccess(false),
            2000,
          );
        })
        .catch(() => {
          // Fallback to older method
          fallbackCopyTextToClipboard(taskLink);
        });
    } else {
      // Use fallback method
      fallbackCopyTextToClipboard(taskLink);
    }
  };

  // Fallback copy method for browsers that don't support clipboard API
  const fallbackCopyTextToClipboard = (text: string) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.width = "2em";
    textArea.style.height = "2em";
    textArea.style.padding = "0";
    textArea.style.border = "none";
    textArea.style.outline = "none";
    textArea.style.boxShadow = "none";
    textArea.style.background = "transparent";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      const successful = document.execCommand("copy");
      if (successful) {
        setShowLinkCopiedSuccess(true);
        setTimeout(() => setShowLinkCopiedSuccess(false), 2000);
      }
    } catch (err) {
      console.error("Failed to copy:", err);
    }

    document.body.removeChild(textArea);
  };

  // Format due date
  const formatDate = (date: Date) => {
    const currentYear = new Date().getFullYear();
    const dateYear = date.getFullYear();
    const month = date.toLocaleDateString("en-US", {
      month: "short",
    });
    const day = date.getDate();

    // Show year only if it's not the current year
    if (dateYear === currentYear) {
      return `${month} ${day}`;
    } else {
      return `${month} ${day}, ${dateYear}`;
    }
  };

  return (
    <>
      <div
        ref={dragRef}
        className="relative"
        data-handler-id={handlerId}
        data-task-item={task.id}
        onClick={handleTaskClick}
        onContextMenu={handleContextMenu}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        {dropPosition === "above" && (
          <div className="absolute left-0 right-0 -top-[5px] z-50 pointer-events-none">
            <DropIndicator />
          </div>
        )}

        {showPlaceholder ? (
          <div
            className={`px-4 py-2 h-[56px] ${!isLast ? "border-b" : ""}`}
            style={{
              backgroundColor: 'var(--grey-03)',
              borderColor: 'var(--grey-03)'
            }}
          />
        ) : (
          <div
            className={`
              px-4 py-2 flex items-center gap-4 
              ${!isLast ? "border-b" : ""}
              ${isOver && !canDrop ? "cursor-not-allowed" : isSelected ? "cursor-move" : "cursor-pointer"}
              transition-colors duration-200
            `}
            style={{
              borderColor: 'var(--grey-03)',
              backgroundColor: isSelected ? 'var(--light-mint)' : isHovered || contextMenu !== null ? 'var(--grey-01)' : 'var(--white)'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Left: Drag Handle, Checkbox, and Task Info */}
            <div className="flex items-center gap-4 flex-1 min-w-0">
              <div className="flex items-center gap-3">
                {/* Drag Handle */}
                <div
                  className={`${isSelected || isHovered ? "opacity-100" : "opacity-0"} transition-opacity ${isSelected ? "cursor-move" : "cursor-grab active:cursor-grabbing"}`}
                >
                  <GripVertical className="size-4 text-[var(--grey-05)]" />
                </div>

                {/* Checkbox */}
                <TaskCheckbox
                  onComplete={() => {
                    if (sectionType === "completed") {
                      onUncomplete?.(task.id);
                    } else {
                      onComplete?.(task.id);
                    }
                  }}
                  completed={sectionType === "completed"}
                  triggerAnimation={triggerCheckboxAnimation}
                />
              </div>

              {/* Task Info */}
              <div className="flex flex-col gap-1 flex-1 min-w-0">
                {/* Task Title */}
                <div className="flex items-center gap-2">
                  {showTooltip ? (
                    <Tooltip
                      variant="bottom-left"
                      content={task.name}
                    >
                      <span
                        ref={titleRef}
                        className="text-[14px] text-[var(--text-primary)] hover:underline cursor-pointer whitespace-pre-wrap break-words overflow-hidden line-clamp-1"
                        style={{
                          fontWeight:
                            "var(--font-weight-regular)",
                        }}
                      >
                        {displayTaskName}
                      </span>
                    </Tooltip>
                  ) : (
                    <span
                      ref={titleRef}
                      className="text-[14px] text-[var(--text-primary)] hover:underline cursor-pointer whitespace-pre-wrap break-words overflow-hidden line-clamp-1"
                      style={{
                        fontWeight:
                          "var(--font-weight-regular)",
                      }}
                    >
                      {displayTaskName}
                    </span>
                  )}
                </div>

                {/* Metadata: Project Badge + Checklist Badge */}
                <div className="flex items-center gap-2">
                  {/* Project Badge */}
                  {!hideProjectName && (
                    <div className="flex items-center gap-1">
                      <HardHat
                        className="size-[10px]"
                        style={{ color: task.projectIcon }}
                      />
                      <span
                        className="text-[10px] hover:underline cursor-pointer"
                        style={{
                          fontWeight:
                            "var(--font-weight-regular)",
                          color: 'var(--grey-05)'
                        }}
                      >
                        {task.projectName}
                      </span>
                    </div>
                  )}

                  {/* Checklist Badge */}
                  {task.checklistCount && (
                    <div className="flex items-center gap-1 p-[2px] hover:bg-secondary transition-colors rounded cursor-pointer">
                      <ListChecks
                        className="size-3 text-[var(--text-secondary)]"
                        strokeWidth={2}
                      />
                      <span
                        className="text-[10px] text-[var(--text-secondary)] underline"
                        style={{
                          fontWeight:
                            "var(--font-weight-regular)",
                        }}
                      >
                        {task.checklistCount} items
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right: Metadata Display (Priority, Due Date, Assignees, Copy Link) */}
            <div className="flex items-center gap-2">
              {/* Priority Button with Dropdown - CIRCULAR using Button component */}
              <div
                className="relative shrink-0"
                ref={priorityButtonRef}
              >
                <Button
                  variant="outline"
                  size="sm"
                  className="btn-secondary !w-8 !h-8 !p-0"
                  style={{
                    height: "var(--size-sm)",
                    minHeight: "var(--size-sm)",
                    maxHeight: "var(--size-sm)",
                    padding: "0",
                    borderRadius: "var(--radius-full)",
                    borderColor: "var(--grey-03)",
                    aspectRatio: "1",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxSizing: "border-box",
                    overflow: "hidden",
                    lineHeight: "0",
                    flex: "none",
                    gap: "0",
                  }}
                  onMouseDown={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    const rect =
                      priorityButtonRef.current?.getBoundingClientRect();
                    if (rect) {
                      const dropdownWidth = 140;
                      const dropdownHeight = 100;
                      const padding = 8;

                      // Calculate horizontal position
                      let left = rect.right - dropdownWidth;
                      if (left < padding) {
                        // Not enough space on right, align to left side of button
                        left = rect.left;
                      }

                      // Calculate vertical position - prefer below to avoid cutoff
                      const spaceBelow =
                        window.innerHeight - rect.bottom;
                      const spaceAbove = rect.top;

                      let top;
                      // Show below if there's enough space, otherwise show above
                      if (
                        spaceBelow >=
                        dropdownHeight + padding
                      ) {
                        // Enough space below - show below the button
                        top = rect.bottom + 4;
                      } else if (
                        spaceAbove >=
                        dropdownHeight + padding
                      ) {
                        // Not enough space below but enough above - show above
                        top = rect.top - dropdownHeight - 4;
                      } else {
                        // Not enough space either way - position to maximize visibility
                        if (spaceBelow > spaceAbove) {
                          // More space below
                          top = rect.bottom + 4;
                        } else {
                          // More space above
                          top = rect.top - dropdownHeight - 4;
                        }
                      }

                      // Ensure dropdown doesn't go off screen
                      if (top < padding) {
                        top = padding;
                      }
                      if (
                        top + dropdownHeight >
                        window.innerHeight - padding
                      ) {
                        top =
                          window.innerHeight -
                          dropdownHeight -
                          padding;
                      }
                      if (
                        left + dropdownWidth >
                        window.innerWidth - padding
                      ) {
                        left =
                          window.innerWidth -
                          dropdownWidth -
                          padding;
                      }

                      setPriorityDropdownPosition({
                        top,
                        left,
                      });
                    }
                    setShowPriorityDropdown(
                      !showPriorityDropdown,
                    );
                  }}
                >
                  {task.priority === "high" && (
                    <div className="size-4 flex items-center justify-center" style={{ height: '16px', width: '16px' }}>
                      <ChevronsUp
                        className="size-4 text-[var(--alert-red)]"
                        strokeWidth={2}
                      />
                    </div>
                  )}
                  {task.priority === "medium" && (
                    <div 
                      className="size-4 flex items-center justify-center" 
                      style={{ 
                        height: '16px', 
                        width: '16px',
                        position: 'relative',
                        overflow: 'hidden'
                      }}
                    >
                      <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '2px'
                      }}>
                        <div style={{ 
                          width: '12px', 
                          height: '2px', 
                          backgroundColor: 'var(--vivid-yellow)', 
                          borderRadius: '9999px' 
                        }} />
                        <div style={{ 
                          width: '12px', 
                          height: '2px', 
                          backgroundColor: 'var(--vivid-yellow)', 
                          borderRadius: '9999px' 
                        }} />
                      </div>
                    </div>
                  )}
                  {task.priority === "low" && (
                    <div className="size-4 flex items-center justify-center" style={{ height: '16px', width: '16px' }}>
                      <ChevronsDown
                        className="size-4 text-[var(--pastel-blue)]"
                        strokeWidth={2}
                      />
                    </div>
                  )}
                </Button>

                {/* Priority Dropdown */}
                {showPriorityDropdown &&
                  priorityDropdownPosition &&
                  createPortal(
                    <>
                      <div
                        className="fixed inset-0 z-[9998]"
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowPriorityDropdown(false);
                        }}
                      />
                      <div
                        className="fixed z-[9999]"
                        style={{
                          top: `${priorityDropdownPosition.top}px`,
                          left: `${priorityDropdownPosition.left}px`,
                        }}
                      >
                        <PriorityDropdown
                          onSelect={(priority) => {
                            handlePriorityChange(priority);
                          }}
                          onClose={() => setShowPriorityDropdown(false)}
                        />
                      </div>
                    </>,
                    document.body,
                  )}
              </div>

              {/* Due Date Button using Button component */}
              <div
                className="relative shrink-0"
                ref={dateButtonRef}
              >
                <Button
                  variant="outline"
                  size="sm"
                  className="btn-secondary shrink-0"
                  style={{
                    width: "124px",
                    height: "var(--size-sm)",
                    padding: "0 var(--spacing-12)",
                    borderRadius: "var(--radius-full)",
                    borderColor: "var(--grey-03)",
                  }}
                  onMouseDown={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    const rect =
                      dateButtonRef.current?.getBoundingClientRect();
                    if (rect) {
                      const calendarWidth = 360;
                      const calendarHeight = 380;
                      const padding = 8;

                      // Calculate horizontal position
                      let left = rect.right - calendarWidth;
                      if (left < padding) {
                        // Not enough space on right, align to left side of button
                        left = rect.left;
                      }

                      // Calculate vertical position - prefer below to avoid cutoff
                      const spaceBelow =
                        window.innerHeight - rect.bottom;
                      const spaceAbove = rect.top;

                      let top;
                      // Show below if there's enough space, otherwise show above
                      if (
                        spaceBelow >=
                        calendarHeight + padding
                      ) {
                        // Enough space below - show below the button
                        top = rect.bottom + 4;
                      } else if (
                        spaceAbove >=
                        calendarHeight + padding
                      ) {
                        // Not enough space below but enough above - show above
                        top = rect.top - calendarHeight - 4;
                      } else {
                        // Not enough space either way - position to maximize visibility
                        if (spaceBelow > spaceAbove) {
                          // More space below
                          top = rect.bottom + 4;
                        } else {
                          // More space above
                          top = rect.top - calendarHeight - 4;
                        }
                      }

                      // Ensure calendar doesn't go off screen
                      if (top < padding) {
                        top = padding;
                      }
                      if (
                        top + calendarHeight >
                        window.innerHeight - padding
                      ) {
                        top =
                          window.innerHeight -
                          calendarHeight -
                          padding;
                      }
                      if (
                        left + calendarWidth >
                        window.innerWidth - padding
                      ) {
                        left =
                          window.innerWidth -
                          calendarWidth -
                          padding;
                      }

                      setDatePickerPosition({ top, left });
                    }
                    setShowDatePicker(!showDatePicker);
                  }}
                >
                  <Calendar
                    className="size-3 text-[var(--text-secondary)]"
                    strokeWidth={2}
                  />
                  <span
                    className="text-[12px] text-[var(--text-primary)] truncate"
                    style={{
                      fontWeight: "var(--font-weight-regular)",
                    }}
                  >
                    {task.dueDate
                      ? formatDate(task.dueDate)
                      : "Due Date"}
                  </span>
                </Button>
              </div>

              {/* Assignees or Assignee Button */}
              {task.assignees && task.assignees.length > 0 ? (
                <div className="shrink-0">
                  <AssigneeButton
                    assignees={task.assignees}
                    onClick={() =>
                      onOpenAssigneeModal?.(task.id)
                    }
                  />
                </div>
              ) : (
                <Button
                  variant="outline"
                  size="sm"
                  className="btn-secondary shrink-0"
                  style={{
                    width: "124px",
                    height: "var(--size-sm)",
                    padding: "0 var(--spacing-12)",
                    borderRadius: "var(--radius-full)",
                    borderColor: "var(--grey-03)",
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenAssigneeModal?.(task.id);
                  }}
                >
                  <UserPlus
                    className="size-3 text-[var(--text-secondary)]"
                    strokeWidth={2}
                  />
                  <span
                    className="text-[12px] text-[var(--text-primary)] truncate"
                    style={{
                      fontWeight: "var(--font-weight-regular)",
                    }}
                  >
                    Assignee
                  </span>
                </Button>
              )}

              {/* Copy Link Button - Far Right with Tooltip */}
              <Tooltip
                variant="bottom-right"
                content={
                  showLinkCopiedSuccess ? (
                    <SuccessTooltip message="Link copied!" />
                  ) : (
                    "Copy link to invite"
                  )
                }
                size="sm"
                style={
                  showLinkCopiedSuccess ? "custom" : "default"
                }
                forceShow={showLinkCopiedSuccess}
              >
                <button
                  className="shrink-0 p-1 rounded hover:bg-secondary transition-colors cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCopyLink();
                  }}
                >
                  <Link className="size-4 text-[var(--text-secondary)]" />
                </button>
              </Tooltip>
            </div>
          </div>
        )}

        {dropPosition === "below" && (
          <div className="absolute left-0 right-0 -bottom-[6px] z-50 pointer-events-none">
            <DropIndicator />
          </div>
        )}
      </div>

      {contextMenu && (
        <TaskContextMenu
          x={contextMenu.x}
          y={contextMenu.y}
          onClose={() => setContextMenu(null)}
          onMarkComplete={
            sectionType !== "completed"
              ? handleMarkComplete
              : undefined
          }
          onMarkUncomplete={
            sectionType === "completed"
              ? handleUncomplete
              : undefined
          }
          onAssignee={handleAssigneeAction}
          onDelete={handleDelete}
          onDuplicate={handleDuplicate}
          onMoveUp={handleMoveUpAction}
          onMoveDown={handleMoveDownAction}
          canMoveUp={canMoveUp}
          canMoveDown={canMoveDown}
          showMarkComplete={sectionType !== "completed"}
          showMarkUncomplete={sectionType === "completed"}
          selectedCount={selectedTaskIds?.size || 1}
        />
      )}

      {/* Date Picker Dropdown Portal */}
      {showDatePicker &&
        datePickerPosition &&
        createPortal(
          <>
            <div
              className="fixed inset-0 z-[9998]"
              onClick={(e) => {
                e.stopPropagation();
                setShowDatePicker(false);
              }}
            />
            <div
              className="fixed z-[9999]"
              style={{
                top: `${datePickerPosition.top}px`,
                left: `${datePickerPosition.left}px`,
              }}
            >
              <CalendarPicker
                selectedDate={task.dueDate}
                onSelect={(date) => {
                  onUpdateTask?.(task.id, { dueDate: date });
                  setShowDatePicker(false);
                }}
                onClose={() => setShowDatePicker(false)}
              />
            </div>
          </>,
          document.body,
        )}

      {/* Duplicate Modal Portal */}
      <DuplicateModal
        isOpen={showDuplicateModal}
        onClose={() => setShowDuplicateModal(false)}
        onConfirm={handleDuplicateConfirm}
      />
    </>
  );
}