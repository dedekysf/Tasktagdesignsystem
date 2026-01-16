import { useState, useRef, useEffect } from "react";
import {
  Building2,
  UserPlus,
  ChevronsUp,
  ChevronsDown,
  Calendar as CalendarIcon,
  HardHat,
  Zap,
} from "lucide-react";
import { AssigneeButton } from "./task";
import type { Assignee } from "../my-task-types";
import { ProjectSelectModal } from "../../components/ProjectSelectModal";
import { AssigneeModal } from "./AssigneeModal";
import { DiscardChangesModal } from "../../components/DiscardChangesModal";
import { toast } from "sonner@2.0.3";
import { Toast } from "../../components/Toast";
import { Button } from "../../components/Button";
import { Calendar as CalendarPicker } from "../../components/Calendar";
import { createPortal } from "react-dom";
import svgPaths from "../../imports/svg-mytask";
import { Tooltip } from "../../components/Tooltip";

interface Project {
  id: string;
  name: string;
  color: string;
  icon: "helmet" | "zap";
}

interface InlineTaskCreationProps {
  onAddTask: (
    name: string,
    priority: "high" | "medium" | "low",
    dueDate: Date | null,
    assignees: Assignee[],
  ) => void;
  hideProjectSelect?: boolean;
  isExpiredMode?: boolean;
  onUpgradeClick?: () => void;
}

export function InlineTaskCreation({
  onAddTask,
  hideProjectSelect,
  isExpiredMode,
  onUpgradeClick,
}: InlineTaskCreationProps) {
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState<
    "high" | "medium" | "low"
  >("medium");
  const [dueDate, setDueDate] = useState<Date | null>(null);
  const [assignees, setAssignees] = useState<Assignee[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);
  const [isProjectModalOpen, setIsProjectModalOpen] =
    useState(false);
  const [isAssigneeModalOpen, setIsAssigneeModalOpen] =
    useState(false);
  const [showProjectWarning, setShowProjectWarning] =
    useState(false);
  const [isDiscardModalOpen, setIsDiscardModalOpen] =
    useState(false);
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
  const containerRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const isModalOpenRef = useRef(false);
  const warningTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dateButtonRef = useRef<HTMLDivElement>(null);
  const priorityButtonRef = useRef<HTMLDivElement>(null);

  const handleCreate = () => {
    if (taskName.trim()) {
      // Check if project is selected
      if (!selectedProject && !hideProjectSelect) {
        // Show warning tooltip
        setShowProjectWarning(true);

        // Clear any existing timeout
        if (warningTimeoutRef.current) {
          clearTimeout(warningTimeoutRef.current);
        }

        // Hide after 3 seconds
        warningTimeoutRef.current = setTimeout(() => {
          setShowProjectWarning(false);
        }, 3000);

        return;
      }

      onAddTask(taskName, priority, dueDate, assignees);

      // Show toast notification
      toast.custom(() => (
        <Toast 
          variant="title-only" 
          type="success" 
          title="Task Created"
          duration={3000}
        />
      ), {
        duration: 3000,
        position: 'bottom-center',
      });

      setTaskName("");
      setPriority("medium");
      setDueDate(null);
      setAssignees([]);
      setSelectedProject(null);
      setIsFocused(false);
    }
  };

  const handleCancel = () => {
    setTaskName("");
    setPriority("medium");
    setDueDate(null);
    setAssignees([]);
    setSelectedProject(null);
    setIsFocused(false);
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLTextAreaElement>,
  ) => {
    // Enter without Shift creates the task
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleCreate();
    }
    // Shift + Enter allows new line (default behavior)
  };

  const handlePriorityChange = (
    newPriority: "high" | "medium" | "low",
  ) => {
    setPriority(newPriority);
    setShowPriorityDropdown(false);
  };

  const handleDateSelect = (date: Date | null) => {
    setDueDate(date);
    setShowDatePicker(false);
  };

  const formatDueDate = (date: Date | null) => {
    if (!date) return "Due date";

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateToCompare = new Date(date);
    dateToCompare.setHours(0, 0, 0, 0);

    if (dateToCompare.getTime() === today.getTime()) {
      return "Today";
    } else if (dateToCompare.getTime() === tomorrow.getTime()) {
      return "Tomorrow";
    } else {
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
    }
  };

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [taskName]);

  useEffect(() => {
    isModalOpenRef.current =
      isProjectModalOpen ||
      isAssigneeModalOpen ||
      isDiscardModalOpen ||
      showPriorityDropdown ||
      showDatePicker;
  }, [
    isProjectModalOpen,
    isAssigneeModalOpen,
    isDiscardModalOpen,
    showPriorityDropdown,
    showDatePicker,
  ]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === "Escape" &&
        (isFocused || taskName) &&
        !isModalOpenRef.current
      ) {
        // Show discard modal if there's task name
        if (taskName.trim()) {
          setIsDiscardModalOpen(true);
        } else {
          handleCancel();
        }
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      // Don't handle click outside if modal is open
      if (isModalOpenRef.current) return;

      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        if (isFocused || taskName) {
          // Show discard modal if there's task name
          if (taskName.trim()) {
            setIsDiscardModalOpen(true);
          } else {
            handleCancel();
          }
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener(
        "mousedown",
        handleClickOutside,
      );

      // Cleanup timeout on unmount
      if (warningTimeoutRef.current) {
        clearTimeout(warningTimeoutRef.current);
      }
    };
  }, [isFocused, taskName]);

  return (
    <>
      <div
        ref={containerRef}
        className="shrink-0"
        style={{
          backgroundColor: 'var(--white)',
          borderTop: '1px solid var(--grey-03)'
        }}
      >
        <div className="px-4 py-3">
          <div className="flex gap-4">
            {/* Task Name Input - Left Side */}
            <div className="flex-1 relative flex items-center">
              <div className="w-full">
                <textarea
                  ref={textareaRef}
                  onKeyDown={handleKeyDown}
                  rows={1}
                  className="w-full text-[14px] text-[var(--text-primary)] outline-none bg-transparent resize-none overflow-hidden"
                  style={{
                    fontWeight: "var(--font-weight-regular)",
                  }}
                  placeholder="Enter task name..."
                  value={taskName}
                  onChange={(e) => setTaskName(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                />
                {(isFocused || taskName) && (
                  <div className="text-[11px] mt-1" style={{ color: 'var(--grey-05)' }}>
                    Press Shift + Enter for new line
                  </div>
                )}
              </div>
            </div>

            {/* Actions - Right Side - Shown only when typing */}
            {taskName && (
              <div className="flex items-center gap-2 shrink-0">
                {/* Select Project Button with Warning Tooltip */}
                {!hideProjectSelect && (
                  <div className="h-8 w-[124px]">
                    <Tooltip
                      variant="bottom-left"
                      size="md"
                      style="default"
                      forceShow={showProjectWarning}
                      content={
                        <div>
                          <p
                            style={{
                              fontWeight:
                                "var(--font-weight-bold)",
                            }}
                          >
                            No Project Selected
                          </p>
                          <p
                            className="mt-1 opacity-90"
                            style={{
                              fontWeight:
                                "var(--font-weight-regular)",
                            }}
                          >
                            Please select one to continue
                          </p>
                        </div>
                      }
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="btn-secondary w-full"
                        style={{
                          height: "var(--size-sm)",
                          minHeight: "var(--size-sm)",
                          maxHeight: "var(--size-sm)",
                          width: "124px",
                          maxWidth: "124px",
                          padding: "0 var(--spacing-12)",
                          borderRadius:
                            "var(--radius-full)",
                          borderColor: showProjectWarning
                            ? "var(--alert-red)"
                            : "var(--grey-03)",
                        }}
                        onClick={() => {
                          setIsProjectModalOpen(true);
                          setShowProjectWarning(false);
                        }}
                      >
                        {selectedProject ? (
                          <>
                            {selectedProject.icon ===
                              "helmet" && (
                              <HardHat
                                className="size-3 shrink-0"
                                style={{
                                  color:
                                    selectedProject.color,
                                }}
                              />
                            )}
                            {selectedProject.icon ===
                              "zap" && (
                              <Zap
                                className="size-3 shrink-0"
                                style={{
                                  color:
                                    selectedProject.color,
                                }}
                              />
                            )}
                            <span
                              className="text-[12px] text-[var(--text-primary)] truncate min-w-0"
                              style={{
                                fontWeight:
                                  "var(--font-weight-regular)",
                              }}
                            >
                              {selectedProject.name}
                            </span>
                          </>
                        ) : (
                          <>
                            <Building2
                              className="size-3 text-[var(--text-secondary)] shrink-0"
                              strokeWidth={2}
                            />
                            <span
                              className="text-[12px] text-[var(--text-primary)] truncate min-w-0"
                              style={{
                                fontWeight:
                                  "var(--font-weight-regular)",
                              }}
                            >
                              Select Project
                            </span>
                          </>
                        )}
                      </Button>
                    </Tooltip>
                  </div>
                )}

                {/* Priority Button with Dropdown - CIRCULAR */}
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

                        // Ensure it doesn't go off the left edge
                        if (left < padding) {
                          left = padding;
                        }

                        // Calculate vertical position
                        let top = rect.bottom + 4;

                        // Check if dropdown would go below viewport
                        if (
                          top + dropdownHeight >
                          window.innerHeight - padding
                        ) {
                          // Position above the button instead
                          top = rect.top - dropdownHeight - 4;
                        }

                        setPriorityDropdownPosition({
                          top,
                          left,
                        });
                        setShowPriorityDropdown(
                          !showPriorityDropdown,
                        );
                      }
                    }}
                  >
                    {priority === "high" && (
                      <div className="size-4 flex items-center justify-center" style={{ height: '16px', width: '16px' }}>
                        <ChevronsUp
                          className="size-4 text-[var(--alert-red)]"
                          strokeWidth={2}
                        />
                      </div>
                    )}
                    {priority === "medium" && (
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
                    {priority === "low" && (
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
                          className="fixed bg-white rounded-lg shadow-lg border border-[var(--border)] py-2 z-[9999] min-w-[140px]"
                          style={{
                            boxShadow: "var(--elevation-md)",
                            top: `${priorityDropdownPosition.top}px`,
                            left: `${priorityDropdownPosition.left}px`,
                          }}
                        >
                          <button
                            className="w-full px-4 py-2 flex items-center gap-2 hover:bg-secondary transition-colors text-left cursor-pointer"
                            onClick={(e) => {
                              e.stopPropagation();
                              handlePriorityChange("high");
                            }}
                          >
                            <ChevronsUp
                              className="size-4 text-[var(--alert-red)]"
                              strokeWidth={2}
                            />
                            <span
                              className="text-[14px] text-[var(--alert-red)]"
                              style={{
                                fontWeight:
                                  "var(--font-weight-regular)",
                              }}
                            >
                              High
                            </span>
                          </button>
                          <button
                            className="w-full px-4 py-2 flex items-center gap-2 hover:bg-secondary transition-colors text-left cursor-pointer"
                            onClick={(e) => {
                              e.stopPropagation();
                              handlePriorityChange("medium");
                            }}
                          >
                            <div className="size-4 flex flex-col items-center justify-center gap-[2px]">
                              <div className="w-3 h-[2px] bg-[var(--vivid-yellow)] rounded-full" />
                              <div className="w-3 h-[2px] bg-[var(--vivid-yellow)] rounded-full" />
                            </div>
                            <span
                              className="text-[14px] text-[var(--vivid-yellow)]"
                              style={{
                                fontWeight:
                                  "var(--font-weight-regular)",
                              }}
                            >
                              Medium
                            </span>
                          </button>
                          <button
                            className="w-full px-4 py-2 flex items-center gap-2 hover:bg-secondary transition-colors text-left cursor-pointer"
                            onClick={(e) => {
                              e.stopPropagation();
                              handlePriorityChange("low");
                            }}
                          >
                            <ChevronsDown
                              className="size-4 text-[var(--pastel-blue)]"
                              strokeWidth={2}
                            />
                            <span
                              className="text-[14px] text-[var(--pastel-blue)]"
                              style={{
                                fontWeight:
                                  "var(--font-weight-regular)",
                              }}
                            >
                              Low
                            </span>
                          </button>
                        </div>
                      </>,
                      document.body,
                    )}
                </div>

                {/* Due Date Button */}
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
                      minHeight: "var(--size-sm)",
                      maxHeight: "var(--size-sm)",
                      padding: "0 var(--spacing-12)",
                      borderRadius: "var(--radius-full)",
                      borderColor: "var(--grey-03)",
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

                        // Ensure it doesn't go off the left edge
                        if (left < padding) {
                          left = padding;
                        }

                        // Calculate vertical position
                        let top = rect.bottom + 4;

                        // Check if calendar would go below viewport
                        if (
                          top + calendarHeight >
                          window.innerHeight - padding
                        ) {
                          // Position above the button instead
                          top = rect.top - calendarHeight - 4;
                        }

                        setDatePickerPosition({ top, left });
                        setShowDatePicker(!showDatePicker);
                      }
                    }}
                  >
                    <CalendarIcon
                      className="size-3 text-[var(--text-secondary)]"
                      strokeWidth={2}
                    />
                    <span
                      className="text-[12px] text-[var(--text-primary)] truncate"
                      style={{
                        fontWeight:
                          "var(--font-weight-regular)",
                      }}
                    >
                      {formatDueDate(dueDate)}
                    </span>
                  </Button>

                  {/* Calendar Picker Portal */}
                  {showDatePicker &&
                    datePickerPosition &&
                    createPortal(
                      <>
                        <div
                          className="fixed inset-0 z-[9998]"
                          onClick={() =>
                            setShowDatePicker(false)
                          }
                        />
                        <div
                          className="fixed z-[9999]"
                          style={{
                            top: `${datePickerPosition.top}px`,
                            left: `${datePickerPosition.left}px`,
                          }}
                        >
                          <CalendarPicker
                            selectedDate={dueDate}
                            onSelect={handleDateSelect}
                            onClose={() =>
                              setShowDatePicker(false)
                            }
                          />
                        </div>
                      </>,
                      document.body,
                    )}
                </div>

                {/* Assignee Button - Reused from main component */}
                {assignees.length > 0 ? (
                  <AssigneeButton
                    assignees={assignees}
                    onClick={() => {
                      if (!isExpiredMode) {
                        setIsAssigneeModalOpen(true);
                      }
                    }}
                    isExpiredMode={isExpiredMode}
                    onUpgradeClick={onUpgradeClick}
                  />
                ) : isExpiredMode ? (
                  <Tooltip
                    content="Upgrade to unlock team features"
                    variant="bottom-right"
                    size="sm"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="btn-secondary shrink-0"
                      style={{
                        width: "124px",
                        height: "var(--size-sm)",
                        minHeight: "var(--size-sm)",
                        maxHeight: "var(--size-sm)",
                        padding: "0 var(--spacing-12)",
                        borderRadius: "var(--radius-full)",
                        borderColor: "var(--grey-03)",
                      }}
                      onClick={() => {
                        if (isExpiredMode) {
                          onUpgradeClick?.();
                        } else {
                          setIsAssigneeModalOpen(true);
                        }
                      }}
                    >
                      <UserPlus
                        className="size-3 text-[var(--text-secondary)]"
                        strokeWidth={2}
                      />
                      <span
                        className="text-[12px] text-[var(--text-primary)] truncate"
                        style={{
                          fontWeight:
                            "var(--font-weight-regular)",
                        }}
                      >
                        Assignee
                      </span>
                    </Button>
                  </Tooltip>
                ) : (
                  <Button
                    variant="outline"
                    size="sm"
                    className="btn-secondary shrink-0"
                    style={{
                      width: "124px",
                      height: "var(--size-sm)",
                      minHeight: "var(--size-sm)",
                      maxHeight: "var(--size-sm)",
                      padding: "0 var(--spacing-12)",
                      borderRadius: "var(--radius-full)",
                      borderColor: "var(--grey-03)",
                    }}
                    onClick={() => {
                      if (!isExpiredMode) {
                        setIsAssigneeModalOpen(true);
                      }
                    }}
                  >
                    <UserPlus
                      className="size-3 text-[var(--text-secondary)]"
                      strokeWidth={2}
                    />
                    <span
                      className="text-[12px] text-[var(--text-primary)] truncate"
                      style={{
                        fontWeight:
                          "var(--font-weight-regular)",
                      }}
                    >
                      Assignee
                    </span>
                  </Button>
                )}

                {/* Create Task Button - Primary without icon */}
                <Button
                  variant="fill"
                  size="sm"
                  onClick={handleCreate}
                  disabled={!taskName.trim()}
                  className="btn-primary shrink-0"
                  style={{
                    minHeight: "var(--size-sm)",
                    borderRadius: "var(--radius-full)",
                  }}
                >
                  <span
                    className="text-[12px]"
                    style={{
                      fontWeight: "var(--font-weight-semibold)",
                    }}
                  >
                    Create Task
                  </span>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Project Select Modal */}
      <ProjectSelectModal
        isOpen={isProjectModalOpen}
        onClose={() => setIsProjectModalOpen(false)}
        onSelect={(project) => setSelectedProject(project)}
        selectedProjectId={selectedProject?.id}
      />

      {/* Assignee Modal */}
      <AssigneeModal
        isOpen={isAssigneeModalOpen}
        onClose={() => setIsAssigneeModalOpen(false)}
        selectedAssignees={assignees.map((a) => ({
          name: a.name,
          email: a.email,
          isEmailInvite: a.isEmailInvite,
          avatarUrl: a.avatarUrl,
        }))}
        onAssign={(users) => {
          const newAssignees: Assignee[] = users.map(
            (user) => ({
              name: user.name,
              email: user.email,
              isEmailInvite: user.isEmailInvite,
              avatarUrl: user.avatarUrl,
            }),
          );
          setAssignees(newAssignees);
        }}
        hideToast={true}
      />

      {/* Discard Changes Modal */}
      <DiscardChangesModal
        isOpen={isDiscardModalOpen}
        onDiscard={() => {
          handleCancel();
          setIsDiscardModalOpen(false);
        }}
        onCancel={() => setIsDiscardModalOpen(false)}
      />
    </>
  );
}