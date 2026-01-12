import { useState, useEffect, useMemo } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TaskSection } from "./my-task/TaskSection";
import { CustomDragLayer } from "./my-task/CustomDragLayer";
import { FilterDropdown } from "./my-task/FilterDropdown";
import { SortDropdown } from "./my-task/SortDropdown";
import { Search } from "lucide-react";
import { Toaster, toast } from "sonner@2.0.3";
import { Toast } from "../components/Toast";
import svgPaths from "../imports/svg-mytask";
import type { Task, Assignee, FilterState, SortOption } from "./my-task-types";
import { Modal, Button } from "../components";

// Mock data generator
const generateMockTasks = (count: number, section: "current" | "overdue" | "completed"): Task[] => {
  const mockAssignees = [
    { name: "James Logan Smith", avatar: "" },
    { name: "Sarah Johnson", avatar: "" },
    { name: "Michael Chen", avatar: "" },
    { name: "Emily Davis", avatar: "" },
    { name: "Alex Martinez", avatar: "" }
  ];

  const taskNames = [
    "Fix the sink",
    "Electricity board fix and reconfiguration for the entire building complex",
    "Install new door locks",
    "Paint the living room",
    "Replace light bulbs",
    "Unclog the bathroom drain",
    "Comprehensive security system installation and configuration for multiple entry points",
    "Service the air conditioner",
    "Fix the squeaky door hinge",
    "Complete kitchen renovation including countertop replacement and cabinet refacing",
    "Patch drywall holes",
    "Regrout bathroom tiles",
    "Test smoke detectors",
    "Replace the showerhead",
    "Seal window drafts",
    "Assemble the new bookshelf",
    "Deep clean the kitchen appliances and organize the entire pantry storage system",
    "Upgrade the main electrical panel and install additional circuit breakers for safety",
    "Landscape design and implementation for front and backyard including irrigation setup"
  ];

  const projectNames = [
    "11 N Raintree Hollow Court",
    "LA Avenue 34 G",
    "LA Avenue 37 D"
  ];

  const projectColors = ["#7B61FF", "#FF4444", "#138EFF"];

  return Array.from({ length: count }, (_, i) => {
    let assignees: Assignee[] = [];
    const assigneePattern = i % 9;
    
    if (assigneePattern === 0) {
      assignees = [];
    } else if (assigneePattern === 1) {
      assignees = [mockAssignees[0]];
    } else if (assigneePattern === 2 || assigneePattern === 3) {
      assignees = [mockAssignees[0], mockAssignees[1]];
    } else if (assigneePattern === 4 || assigneePattern === 5) {
      assignees = [mockAssignees[0], mockAssignees[1], mockAssignees[2]];
    } else {
      assignees = mockAssignees;
    }

    let priority: "high" | "medium" | "low";
    const priorityPattern = i % 3;
    if (priorityPattern === 0) priority = "high";
    else if (priorityPattern === 1) priority = "medium";
    else priority = "low";

    let dueDate = null;
    if (section === "overdue") {
      // Overdue dates from December 2025
      const dayPattern = i % 5;
      const day = dayPattern === 0 ? 28 : dayPattern === 1 ? 29 : dayPattern === 2 ? 30 : dayPattern === 3 ? 31 : 27;
      dueDate = new Date(2025, 11, day); // December 2025 (month 11)
    } else {
      const hasDueDate = i % 3 !== 1;
      if (hasDueDate) {
        // Mix dates from late December 2025 to March 2026
        const datePattern = i % 10;
        if (datePattern <= 2) {
          // Late December 2025
          const day = datePattern === 0 ? 25 : datePattern === 1 ? 28 : 31;
          dueDate = new Date(2025, 11, day);
        } else if (datePattern <= 5) {
          // January 2026
          const day = datePattern === 3 ? 5 : datePattern === 4 ? 12 : 20;
          dueDate = new Date(2026, 0, day);
        } else if (datePattern <= 7) {
          // February 2026
          const day = datePattern === 6 ? 8 : 18;
          dueDate = new Date(2026, 1, day);
        } else {
          // March 2026
          const day = datePattern === 8 ? 10 : 25;
          dueDate = new Date(2026, 2, day);
        }
      }
    }

    const checklistPattern = i % 5;
    const checklistCount = checklistPattern === 0 ? 3 : checklistPattern === 1 ? 5 : checklistPattern === 2 ? 4 : undefined;

    const projectIndex = i % 3;

    return {
      id: `${section}-task-${i}`,
      name: taskNames[i % taskNames.length],
      projectName: projectNames[projectIndex],
      projectIcon: projectColors[projectIndex],
      priority,
      dueDate,
      assignees,
      checklistCount,
      completed: section === "completed"
    };
  });
};

export default function MyTaskPage() {
  const [expandedSection, setExpandedSection] = useState<"current" | "overdue" | "completed" | null>("current");
  const [selectedTaskIds, setSelectedTaskIds] = useState<Set<string>>(new Set());
  
  const [currentTasks, setCurrentTasks] = useState<Task[]>(generateMockTasks(15, "current"));
  const [overdueTasks, setOverdueTasks] = useState<Task[]>(generateMockTasks(2, "overdue"));
  const [completedTasks, setCompletedTasks] = useState<Task[]>([]);

  const [filters, setFilters] = useState<FilterState>({
    projects: [],
    assignees: [],
    priorities: [],
    dueDates: [],
    customDateRange: null
  });

  const [sortOption, setSortOption] = useState<SortOption>(null);
  
  // Delete confirmation modal state
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteTargetSection, setDeleteTargetSection] = useState<"current" | "overdue" | "completed" | null>(null);
  const [deleteTargetTaskIds, setDeleteTargetTaskIds] = useState<string[]>([]);

  // ESC key handler to clear selection
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      // Don't clear selection if modal is open
      const hasOpenModal = document.querySelector('[role="dialog"]');
      if (hasOpenModal) return;
      
      if (e.key === "Escape" && selectedTaskIds.size > 0) {
        setSelectedTaskIds(new Set());
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [selectedTaskIds]);

  // Click outside handler to clear selection
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const hasOpenModal = document.querySelector('[role="dialog"]');
      if (hasOpenModal) return;
      
      if (target.closest('[role="menu"]') || target.closest('.context-menu')) {
        return;
      }
      
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        return;
      }
      
      const clickedTaskItem = target.closest('[data-task-item]');
      
      if (clickedTaskItem) {
        const clickedTaskId = clickedTaskItem.getAttribute('data-task-item');
        
        if (selectedTaskIds.size === 1 && selectedTaskIds.has(clickedTaskId!)) {
          return;
        }
        
        if (!target.closest('button') && !target.closest('[role="button"]')) {
          return;
        }
        
        if (selectedTaskIds.size > 0) {
          setSelectedTaskIds(new Set());
        }
        return;
      }
      
      if (selectedTaskIds.size > 0) {
        setSelectedTaskIds(new Set());
      }
    };

    document.addEventListener("mousedown", handleClickOutside, true);
    return () => document.removeEventListener("mousedown", handleClickOutside, true);
  }, [selectedTaskIds]);

  const handleTaskSelect = (taskId: string, isMultiSelect: boolean) => {
    if (isMultiSelect) {
      const newSelection = new Set(selectedTaskIds);
      if (newSelection.has(taskId)) {
        newSelection.delete(taskId);
      } else {
        newSelection.add(taskId);
      }
      setSelectedTaskIds(newSelection);
    } else {
      if (selectedTaskIds.has(taskId) && selectedTaskIds.size === 1) {
        setSelectedTaskIds(new Set());
      } else {
        setSelectedTaskIds(new Set([taskId]));
      }
    }
  };

  const applyFilters = (tasks: Task[]): Task[] => {
    return tasks.filter(task => {
      if (filters.projects.length > 0 && !filters.projects.includes(task.projectName)) {
        return false;
      }

      if (filters.assignees.length > 0) {
        const taskAssigneeNames = task.assignees.map(a => a.name);
        const hasMatchingAssignee = filters.assignees.some(filterAssignee => 
          taskAssigneeNames.includes(filterAssignee)
        );
        if (!hasMatchingAssignee) {
          return false;
        }
      }

      if (filters.priorities.length > 0 && !filters.priorities.includes(task.priority)) {
        return false;
      }

      // Filter by due date
      if (filters.dueDates.length > 0 || filters.customDateRange) {
        if (!task.dueDate) return false; // Skip tasks without due date
        
        const taskDate = new Date(task.dueDate);
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        const next3DaysStart = new Date(today);
        next3DaysStart.setDate(next3DaysStart.getDate() + 1); // Tomorrow
        const next3DaysEnd = new Date(today);
        next3DaysEnd.setDate(next3DaysEnd.getDate() + 3); // 3 days from now
        
        // Reset time to compare only dates
        taskDate.setHours(0, 0, 0, 0);
        today.setHours(0, 0, 0, 0);
        tomorrow.setHours(0, 0, 0, 0);
        next3DaysStart.setHours(0, 0, 0, 0);
        next3DaysEnd.setHours(0, 0, 0, 0);
        
        let matchesDueDate = false;
        
        // Check predefined due dates
        if (filters.dueDates.includes("today") && taskDate.getTime() === today.getTime()) {
          matchesDueDate = true;
        }
        if (filters.dueDates.includes("tomorrow") && taskDate.getTime() === tomorrow.getTime()) {
          matchesDueDate = true;
        }
        if (filters.dueDates.includes("next3days") && taskDate >= next3DaysStart && taskDate <= next3DaysEnd) {
          matchesDueDate = true;
        }
        
        // Check custom date range
        if (filters.customDateRange && filters.customDateRange.start && filters.customDateRange.end) {
          const startDate = new Date(filters.customDateRange.start);
          const endDate = new Date(filters.customDateRange.end);
          startDate.setHours(0, 0, 0, 0);
          endDate.setHours(0, 0, 0, 0);
          
          if (taskDate >= startDate && taskDate <= endDate) {
            matchesDueDate = true;
          }
        }
        
        if (!matchesDueDate) return false;
      }

      return true;
    });
  };

  const applySorting = (tasks: Task[]): Task[] => {
    if (!sortOption) return tasks;

    const sorted = [...tasks];

    switch (sortOption) {
      case "dueDate-soonest":
        return sorted.sort((a, b) => {
          if (!a.dueDate && !b.dueDate) return 0;
          if (!a.dueDate) return 1;
          if (!b.dueDate) return -1;
          return a.dueDate.getTime() - b.dueDate.getTime();
        });

      case "dueDate-latest":
        return sorted.sort((a, b) => {
          if (!a.dueDate && !b.dueDate) return 0;
          if (!a.dueDate) return 1;
          if (!b.dueDate) return -1;
          return b.dueDate.getTime() - a.dueDate.getTime();
        });

      case "priority-lowToHigh":
        return sorted.sort((a, b) => {
          const priorityOrder: { [key: string]: number } = { "low": 1, "medium": 2, "high": 3 };
          return priorityOrder[a.priority] - priorityOrder[b.priority];
        });

      case "priority-highToLow":
        return sorted.sort((a, b) => {
          const priorityOrder: { [key: string]: number } = { "high": 1, "medium": 2, "low": 3 };
          return priorityOrder[a.priority] - priorityOrder[b.priority];
        });

      default:
        return tasks;
    }
  };

  const filteredCurrentTasks = applySorting(applyFilters(currentTasks));
  const filteredOverdueTasks = applySorting(applyFilters(overdueTasks));
  const filteredCompletedTasks = applySorting(applyFilters(completedTasks));

  const handleToggleSection = (section: "current" | "overdue" | "completed") => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const handleReorderTasks = (section: "current" | "overdue" | "completed", newTasks: Task[]) => {
    if (section === "current") setCurrentTasks(newTasks);
    else if (section === "overdue") setOverdueTasks(newTasks);
    else setCompletedTasks(newTasks);
  };

  const handleCrossSectionDrop = (
    fromSection: "current" | "overdue" | "completed",
    toSection: "current" | "overdue" | "completed",
    taskIds: string | string[],
    insertIndex: number
  ) => {
    const taskIdsArray = Array.isArray(taskIds) ? taskIds : [taskIds];
    
    let sourceTasks: Task[];
    
    if (fromSection === "current") {
      sourceTasks = currentTasks;
    } else if (fromSection === "overdue") {
      sourceTasks = overdueTasks;
    } else {
      sourceTasks = completedTasks;
    }

    const tasksToMove = sourceTasks.filter(t => taskIdsArray.includes(t.id));
    
    if (tasksToMove.length === 0) return;

    const newSourceTasks = sourceTasks.filter(t => !taskIdsArray.includes(t.id));

    let targetTasks: Task[];
    if (toSection === "current") {
      targetTasks = [...currentTasks];
    } else if (toSection === "overdue") {
      targetTasks = [...overdueTasks];
    } else {
      targetTasks = [...completedTasks];
    }

    if (fromSection === toSection) {
      targetTasks = newSourceTasks;
    }

    targetTasks.splice(insertIndex, 0, ...tasksToMove);

    if (fromSection === "current") setCurrentTasks(newSourceTasks);
    else if (fromSection === "overdue") setOverdueTasks(newSourceTasks);
    else setCompletedTasks(newSourceTasks);

    if (toSection === "current") setCurrentTasks(targetTasks);
    else if (toSection === "overdue") setOverdueTasks(targetTasks);
    else setCompletedTasks(targetTasks);
  };

  const handleAddTask = (section: "current" | "overdue" | "completed", taskName: string, priority: "high" | "medium" | "low", dueDate: Date | null, assignees: Assignee[]) => {
    const newTask: Task = {
      id: `${section}-task-${Date.now()}`,
      name: taskName,
      projectName: "11 N Raintree Hollow Court",
      projectIcon: "#7B61FF",
      priority,
      dueDate,
      assignees,
      completed: section === "completed"
    };

    if (section === "current") setCurrentTasks([newTask, ...currentTasks]);
    else if (section === "overdue") setOverdueTasks([newTask, ...overdueTasks]);
    else setCompletedTasks([newTask, ...completedTasks]);
  };

  const handleCompleteTask = (section: "current" | "overdue" | "completed", taskIds: string | string[]) => {
    const idsToComplete = Array.isArray(taskIds) ? taskIds : [taskIds];
    
    if (section === "completed") {
      const tasksToUncomplete = completedTasks.filter(t => idsToComplete.includes(t.id));
      if (tasksToUncomplete.length === 0) return;

      const newCompletedTasks = completedTasks.filter(t => !idsToComplete.includes(t.id));

      const tasksForCurrent: Task[] = [];
      const tasksForOverdue: Task[] = [];
      
      tasksToUncomplete.forEach(task => {
        const uncompletedTask = { ...task, completed: false };
        delete uncompletedTask.originalSection;
        
        const targetSection = task.originalSection || "current";
        if (targetSection === "current") {
          tasksForCurrent.push(uncompletedTask);
        } else {
          tasksForOverdue.push(uncompletedTask);
        }
      });

      if (tasksForCurrent.length > 0) {
        setCurrentTasks([...tasksForCurrent, ...currentTasks]);
      }
      if (tasksForOverdue.length > 0) {
        setOverdueTasks([...tasksForOverdue, ...overdueTasks]);
      }

      setCompletedTasks(newCompletedTasks);
    } else {
      let tasksToComplete: Task[] = [];
      let newSourceTasks: Task[] = [];

      if (section === "current") {
        tasksToComplete = currentTasks.filter(t => idsToComplete.includes(t.id));
        newSourceTasks = currentTasks.filter(t => !idsToComplete.includes(t.id));
        setCurrentTasks(newSourceTasks);
      } else {
        tasksToComplete = overdueTasks.filter(t => idsToComplete.includes(t.id));
        newSourceTasks = overdueTasks.filter(t => !idsToComplete.includes(t.id));
        setOverdueTasks(newSourceTasks);
      }

      if (tasksToComplete.length === 0) return;

      const completedTasksToAdd = tasksToComplete.map(task => ({
        ...task,
        completed: true,
        originalSection: section
      }));
      
      setCompletedTasks([...completedTasksToAdd, ...completedTasks]);
    }
  };

  const handleUpdateTask = (section: "current" | "overdue" | "completed", taskId: string, updates: Partial<Task>) => {
    if (section === "current") {
      setCurrentTasks(currentTasks.map(task => 
        task.id === taskId ? { ...task, ...updates } : task
      ));
    } else if (section === "overdue") {
      setOverdueTasks(overdueTasks.map(task =>
        task.id === taskId ? { ...task, ...updates } : task
      ));
    } else {
      setCompletedTasks(completedTasks.map(task =>
        task.id === taskId ? { ...task, ...updates } : task
      ));
    }
  };

  const handleMoveUp = (section: "current" | "overdue" | "completed", taskIds: string | string[]) => {
    const idsToMove = Array.isArray(taskIds) ? taskIds : [taskIds];
    
    let sourceTasks: Task[];
    if (section === "current") sourceTasks = currentTasks;
    else if (section === "overdue") sourceTasks = overdueTasks;
    else sourceTasks = completedTasks;
    
    const indices = idsToMove.map(id => sourceTasks.findIndex(t => t.id === id)).filter(idx => idx !== -1);
    if (indices.length === 0) return;
    
    const minIndex = Math.min(...indices);
    if (minIndex === 0) return; // Already at top
    
    const newTasks = [...sourceTasks];
    const tasksToMove = idsToMove.map(id => newTasks.find(t => t.id === id)).filter(Boolean) as Task[];
    
    // Remove tasks
    idsToMove.forEach(id => {
      const idx = newTasks.findIndex(t => t.id === id);
      if (idx !== -1) newTasks.splice(idx, 1);
    });
    
    // Insert at new position
    newTasks.splice(minIndex - 1, 0, ...tasksToMove);
    
    if (section === "current") setCurrentTasks(newTasks);
    else if (section === "overdue") setOverdueTasks(newTasks);
    else setCompletedTasks(newTasks);
  };

  const handleMoveDown = (section: "current" | "overdue" | "completed", taskIds: string | string[]) => {
    const idsToMove = Array.isArray(taskIds) ? taskIds : [taskIds];
    
    let sourceTasks: Task[];
    if (section === "current") sourceTasks = currentTasks;
    else if (section === "overdue") sourceTasks = overdueTasks;
    else sourceTasks = completedTasks;
    
    const indices = idsToMove.map(id => sourceTasks.findIndex(t => t.id === id)).filter(idx => idx !== -1);
    if (indices.length === 0) return;
    
    const maxIndex = Math.max(...indices);
    if (maxIndex === sourceTasks.length - 1) return; // Already at bottom
    
    const newTasks = [...sourceTasks];
    const tasksToMove = idsToMove.map(id => newTasks.find(t => t.id === id)).filter(Boolean) as Task[];
    
    // Remove tasks
    idsToMove.forEach(id => {
      const idx = newTasks.findIndex(t => t.id === id);
      if (idx !== -1) newTasks.splice(idx, 1);
    });
    
    // Insert at new position
    const newMaxIndex = indices[0]; // Original first selected index
    newTasks.splice(newMaxIndex + 1, 0, ...tasksToMove);
    
    if (section === "current") setCurrentTasks(newTasks);
    else if (section === "overdue") setOverdueTasks(newTasks);
    else setCompletedTasks(newTasks);
  };

  const handleDeleteTask = (section: "current" | "overdue" | "completed", taskIds: string | string[]) => {
    const idsToDelete = Array.isArray(taskIds) ? taskIds : [taskIds];
    
    // Show confirmation modal
    setDeleteTargetSection(section);
    setDeleteTargetTaskIds(idsToDelete);
    setShowDeleteModal(true);
  };

  const confirmDeleteTask = () => {
    if (!deleteTargetSection || deleteTargetTaskIds.length === 0) return;
    
    // Get task information for toast
    let allTasks: Task[] = [];
    if (deleteTargetSection === "current") allTasks = currentTasks;
    else if (deleteTargetSection === "overdue") allTasks = overdueTasks;
    else allTasks = completedTasks;
    
    const deletedTasks = allTasks.filter(t => deleteTargetTaskIds.includes(t.id));
    const isSingleTask = deleteTargetTaskIds.length === 1;
    
    if (deleteTargetSection === "current") {
      setCurrentTasks(currentTasks.filter(t => !deleteTargetTaskIds.includes(t.id)));
    } else if (deleteTargetSection === "overdue") {
      setOverdueTasks(overdueTasks.filter(t => !deleteTargetTaskIds.includes(t.id)));
    } else {
      setCompletedTasks(completedTasks.filter(t => !deleteTargetTaskIds.includes(t.id)));
    }
    
    // Show toast notification
    if (isSingleTask && deletedTasks.length > 0) {
      const taskName = deletedTasks[0].name;
      const truncatedName = taskName.length > 25 ? taskName.substring(0, 25) + '...' : taskName;
      toast.custom(() => (
        <Toast 
          variant="title-caption" 
          type="error" 
          title="Task Deleted"
          caption={truncatedName}
          duration={3000}
        />
      ), {
        duration: 3000,
        position: 'bottom-center',
      });
    } else {
      toast.custom(() => (
        <Toast 
          variant="title-only" 
          type="error" 
          title="Task Deleted"
          duration={3000}
        />
      ), {
        duration: 3000,
        position: 'bottom-center',
      });
    }
    
    setSelectedTaskIds(new Set());
    setShowDeleteModal(false);
    setDeleteTargetSection(null);
    setDeleteTargetTaskIds([]);
  };

  const cancelDeleteTask = () => {
    setShowDeleteModal(false);
    setDeleteTargetSection(null);
    setDeleteTargetTaskIds([]);
  };
  
  const handleDuplicateTask = (
    section: "current" | "overdue" | "completed", 
    taskIds: string | string[], 
    options?: {
      taskDetails?: boolean;
      checkLists?: boolean;
      allMembers?: boolean;
      creator?: boolean;
      assignee?: boolean;
      viewers?: boolean;
      allFiles?: boolean;
      withTags?: boolean;
    }
  ) => {
    const idsToDuplicate = Array.isArray(taskIds) ? taskIds : [taskIds];
    
    let sourceTasks: Task[];
    if (section === "current") sourceTasks = currentTasks;
    else if (section === "overdue") sourceTasks = overdueTasks;
    else sourceTasks = completedTasks;
    
    const tasksToDuplicate = sourceTasks.filter(t => idsToDuplicate.includes(t.id));
    
    const duplicatedTasks = tasksToDuplicate.map(task => {
      // Determine which assignees to copy based on member options
      let assigneesToCopy: Assignee[] = [];
      
      if (options?.allMembers) {
        // Copy all assignees regardless of role
        assigneesToCopy = task.assignees;
      } else {
        // Filter by specific roles
        if (options?.creator || options?.assignee || options?.viewers) {
          assigneesToCopy = task.assignees.filter(assignee => {
            // "creator" - copy assignees without a specific role or first assignee (treating as creator)
            if (options?.creator && (!assignee.role || assignee.role === "assignee")) {
              return true;
            }
            // "assignee" - copy assignees with role "assignee" or no role
            if (options?.assignee && (!assignee.role || assignee.role === "assignee")) {
              return true;
            }
            // "viewers" - copy assignees with role "viewer"
            if (options?.viewers && assignee.role === "viewer") {
              return true;
            }
            return false;
          });
        }
      }
      
      const newTask: Task = {
        id: `${section}-task-${Date.now()}-${Math.random()}`,
        // Always copy basic task info
        name: task.name,
        projectName: task.projectName,
        projectIcon: task.projectIcon,
        completed: false, // New duplicated task starts uncompleted
        originalSection: task.originalSection,
        createdAt: new Date(),
        updatedAt: new Date(),
        
        // Conditional duplication based on individual options
        // If "task details" is checked, include priority, dueDate, AND checklistCount
        priority: options?.taskDetails ? task.priority : "medium",
        dueDate: options?.taskDetails ? task.dueDate : null,
        checklistCount: options?.taskDetails ? task.checklistCount : undefined,
        assignees: assigneesToCopy,
      };
      
      return newTask;
    });
    
    if (section === "current") {
      setCurrentTasks([...duplicatedTasks, ...currentTasks]);
    } else if (section === "overdue") {
      setOverdueTasks([...duplicatedTasks, ...overdueTasks]);
    } else {
      setCompletedTasks([...duplicatedTasks, ...completedTasks]);
    }
    
    // Show toast notification
    if (tasksToDuplicate.length === 1) {
      const taskName = tasksToDuplicate[0].name;
      toast.custom(() => (
        <Toast 
          variant="title-caption" 
          type="success" 
          title="Duplicated Task"
          caption={taskName}
          duration={3000}
        />
      ), {
        duration: 3000,
        position: 'bottom-center',
      });
    }
  };

  const handleClearSelection = (e: React.MouseEvent) => {
    const hasOpenModal = document.querySelector('[role="dialog"]');
    if (hasOpenModal) return;
    
    const target = e.target as HTMLElement;
    
    if (target.closest('[data-task-item]')) {
      return;
    }
    
    if (selectedTaskIds.size > 0) {
      setSelectedTaskIds(new Set());
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <CustomDragLayer />
      <Toaster position="bottom-center" />
      <div className="h-full bg-white flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-white h-[74px] border-b border-[#e8e8e8] shrink-0">
          <div className="flex items-center justify-between px-6 py-3 h-full">
            <h2 style={{ fontWeight: 'var(--font-weight-semibold)' }}>My Tasks</h2>
            <div className="flex items-center gap-[10px]">
              <Button 
                variant="ghost" 
                className="btn-secondary"
                style={{
                  width: 'var(--size-md)',
                  height: 'var(--size-md)',
                  minHeight: 'var(--size-md)',
                  padding: '0',
                  borderRadius: 'var(--radius-button)'
                }}
              >
                <Search className="size-6" />
              </Button>
              <Button 
                variant="fill" 
                className="btn-secondary"
                size="sm"
                style={{
                  borderRadius: 'var(--radius-full)'
                }}
              >
                <svg className="size-4" fill="none" viewBox="0 0 16 16">
                  <path clipRule="evenodd" d={svgPaths.plusIcon} fill="white" fillRule="evenodd" />
                </svg>
                <span className="text-[14px]">New Task</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Filter & Sort Actions */}
        <div className="bg-white border-b border-[#e8e8e8] shrink-0">
          <div className="flex items-center gap-2 p-4">
            <FilterDropdown 
              tasks={[...currentTasks, ...overdueTasks]} 
              filters={filters}
              onFiltersChange={setFilters}
            />
            <SortDropdown
              selectedSort={sortOption}
              onSortChange={setSortOption}
            />
            <button 
              className="h-10 flex items-center justify-center gap-2 px-4 rounded-lg hover:bg-secondary transition-colors cursor-pointer"
              style={{ fontWeight: 'var(--font-weight-semibold)' }}
            >
              <svg className="size-4 shrink-0" fill="none" viewBox="0 0 16 16">
                <path clipRule="evenodd" d={svgPaths.calendarIcon} fill="var(--text-primary)" fillRule="evenodd" />
              </svg>
              <span className="text-[14px] leading-none">Add to calendar</span>
            </button>
          </div>
        </div>

        {/* Task Sections - Scrollable Container */}
        <div className="flex-1 min-h-0 overflow-y-auto p-4 flex flex-col gap-4" onClick={handleClearSelection}>
          <TaskSection
            title="Current"
            count={filteredCurrentTasks.length}
            tasks={filteredCurrentTasks}
            isExpanded={expandedSection === "current"}
            onToggle={() => handleToggleSection("current")}
            onReorder={(tasks) => handleReorderTasks("current", tasks)}
            onCrossSectionDrop={handleCrossSectionDrop}
            onAddTask={(name, priority, dueDate, assignees) => handleAddTask("current", name, priority, dueDate, assignees)}
            onCompleteTask={(taskId) => handleCompleteTask("current", taskId)}
            showInlineCreation={true}
            sectionType="current"
            selectedTaskIds={selectedTaskIds}
            onTaskSelect={handleTaskSelect}
            onUpdateTask={(taskId, updates) => handleUpdateTask("current", taskId, updates)}
            onMoveUp={(taskIds) => handleMoveUp("current", taskIds)}
            onMoveDown={(taskIds) => handleMoveDown("current", taskIds)}
            onDeleteTask={(taskIds) => handleDeleteTask("current", taskIds)}
            onDuplicateTask={(taskIds) => handleDuplicateTask("current", taskIds)}
          />
          <TaskSection
            title="Overdue"
            count={filteredOverdueTasks.length}
            tasks={filteredOverdueTasks}
            isExpanded={expandedSection === "overdue"}
            onToggle={() => handleToggleSection("overdue")}
            onReorder={(tasks) => handleReorderTasks("overdue", tasks)}
            onCrossSectionDrop={handleCrossSectionDrop}
            onAddTask={(name, priority, dueDate, assignees) => handleAddTask("overdue", name, priority, dueDate, assignees)}
            onCompleteTask={(taskId) => handleCompleteTask("overdue", taskId)}
            showInlineCreation={false}
            sectionType="overdue"
            selectedTaskIds={selectedTaskIds}
            onTaskSelect={handleTaskSelect}
            onUpdateTask={(taskId, updates) => handleUpdateTask("overdue", taskId, updates)}
            onMoveUp={(taskIds) => handleMoveUp("overdue", taskIds)}
            onMoveDown={(taskIds) => handleMoveDown("overdue", taskIds)}
            onDeleteTask={(taskIds) => handleDeleteTask("overdue", taskIds)}
            onDuplicateTask={(taskIds) => handleDuplicateTask("overdue", taskIds)}
          />
          <TaskSection
            title="Completed"
            count={filteredCompletedTasks.length}
            tasks={filteredCompletedTasks}
            isExpanded={expandedSection === "completed"}
            onToggle={() => handleToggleSection("completed")}
            onReorder={(tasks) => handleReorderTasks("completed", tasks)}
            onCrossSectionDrop={handleCrossSectionDrop}
            onAddTask={(name, priority, dueDate, assignees) => handleAddTask("completed", name, priority, dueDate, assignees)}
            onUncompleteTask={(taskId) => handleCompleteTask("completed", taskId)}
            showInlineCreation={false}
            showCount={false}
            sectionType="completed"
            selectedTaskIds={selectedTaskIds}
            onTaskSelect={handleTaskSelect}
            onUpdateTask={(taskId, updates) => handleUpdateTask("completed", taskId, updates)}
            onMoveUp={(taskIds) => handleMoveUp("completed", taskIds)}
            onMoveDown={(taskIds) => handleMoveDown("completed", taskIds)}
            onDeleteTask={(taskIds) => handleDeleteTask("completed", taskIds)}
            onDuplicateTask={(taskIds) => handleDuplicateTask("completed", taskIds)}
          />
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (() => {
        let allTasks: Task[] = [];
        if (deleteTargetSection === "current") allTasks = currentTasks;
        else if (deleteTargetSection === "overdue") allTasks = overdueTasks;
        else allTasks = completedTasks;
        
        const tasksToDelete = allTasks.filter(t => deleteTargetTaskIds.includes(t.id));
        const isSingleTask = deleteTargetTaskIds.length === 1;
        
        const descriptionContent = (
          <div>
            <p style={{ 
              color: 'var(--text-primary)',
              margin: 0,
              fontSize: 'var(--text-label)',
              fontWeight: 'var(--font-weight-regular)',
              lineHeight: 1.5,
              marginBottom: !isSingleTask && tasksToDelete.length > 0 ? 'var(--spacing-12)' : 0
            }}>
              {isSingleTask 
                ? "Deleting this task will remove it permanently for all assignee."
                : "Deleting these tasks will remove them permanently for all assignee."
              }
            </p>

            {!isSingleTask && tasksToDelete.length > 0 && (() => {
              const displayTasks = tasksToDelete.slice(0, 3);
              const remainingCount = tasksToDelete.length - 3;
              const showRemaining = remainingCount > 0;
              
              return (
                <ul style={{
                  margin: 0,
                  marginBottom: 'var(--spacing-12)',
                  paddingLeft: '20px',
                  listStyleType: 'disc',
                  fontSize: 'var(--text-label)',
                  fontWeight: 'var(--font-weight-regular)',
                  lineHeight: 1.5,
                  color: 'var(--text-primary)'
                }}>
                  {displayTasks.map(task => (
                    <li 
                      key={task.id}
                      style={{
                        fontSize: 'var(--text-label)',
                        fontWeight: 'var(--font-weight-regular)',
                        lineHeight: 1.5
                      }}
                    >
                      {task.name}
                    </li>
                  ))}
                  {showRemaining && (
                    <li 
                      style={{
                        fontSize: 'var(--text-label)',
                        fontWeight: 'var(--font-weight-regular)',
                        lineHeight: 1.5
                      }}
                    >
                      and {remainingCount} {remainingCount === 1 ? 'other' : 'others'}
                    </li>
                  )}
                </ul>
              );
            })()}

            <p style={{ 
              color: 'var(--text-primary)',
              margin: 0,
              fontSize: 'var(--text-label)',
              fontWeight: 'var(--font-weight-regular)',
              lineHeight: 1.5
            }}>
              {isSingleTask ? "Still want to delete it?" : "Still want to delete them?"}
            </p>
          </div>
        );
        
        return (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'var(--overlay)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1000,
              padding: 'var(--spacing-16)'
            }}
            onClick={cancelDeleteTask}
          >
            <div onClick={(e) => e.stopPropagation()}>
              <Modal
                variant="one-action"
                size="web"
                title="Delete Task"
                description={descriptionContent}
                primaryButtonText="Delete"
                onPrimaryClick={confirmDeleteTask}
                onClose={cancelDeleteTask}
              />
            </div>
          </div>
        );
      })()}
    </DndProvider>
  );
}