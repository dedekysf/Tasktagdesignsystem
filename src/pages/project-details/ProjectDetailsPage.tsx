import {
  useState,
  useRef,
  useCallback,
  useEffect,
  useMemo,
} from "react";
import {
  ChevronLeft,
  MoreVertical,
  MapPin,
  Search,
  Plus,
  Hash,
  FileText,
  ImageIcon,
  Activity,
  Users,
  Link,
  UserPlus,
  Save,
  X,
} from "lucide-react";
import { ChecklistItem } from "../../components/ChecklistItem";
import { Switch } from "../../components/ui/switch";
import { Button } from "../../components/Button";
import { Tooltip } from "../../components/Tooltip";
import { SuccessTooltip } from "../../components/SuccessTooltip";
import { TabItem } from "../../components/TabItem";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../../components/ui/alert-dialog";
import { TaskSection } from "../my-task/TaskSection";
import { FilterDropdown } from "../my-task/FilterDropdown";
import { SortDropdown } from "../my-task/SortDropdown";
import type {
  Task,
  Assignee,
  FilterState,
  SortOption,
} from "../my-task-types";
import { Toaster, toast } from "sonner@2.0.3";
import { Toast } from "../../components/Toast";
import { Modal } from "../../components/Modal";
import { usePaywall } from "../../contexts/PaywallContext";
import svgPaths from "../../imports/svg-mytask";
import { ALL_USERS } from "../../data/userData";
import { AssigneeModal } from "../my-task/AssigneeModal";

interface ChecklistItemData {
  id: string;
  text: string;
  checked: boolean;
}

export default function ProjectDetailsPage() {
  const { isExpiredMode, showUpgradeModal } = usePaywall();
  const [items, setItems] = useState<ChecklistItemData[]>([
    {
      id: "1",
      text: "Client contract signed and uploaded",
      checked: true,
    },
    {
      id: "2",
      text: "Permits submitted and tracked",
      checked: true,
    },
    {
      id: "3",
      text: "Policy confirmed for General Contractor and Subcontractors",
      checked: true,
    },
    {
      id: "4",
      text: "Coverage checked (General Contractor + Subs)",
      checked: true,
    },
    {
      id: "5",
      text: "Insurance status validated (GC alongside Subs)",
      checked: false,
    },
    {
      id: "6",
      text: "Coverage confirmed for General Contractor and Subcontractors",
      checked: false,
    },
    {
      id: "7",
      text: "Insurance cleared (GC and Subs included)",
      checked: false,
    },
    {
      id: "8",
      text: "Verification complete for Insurance (General Contractor + Subs)",
      checked: false,
    },
    {
      id: "9",
      text: "Insurance approval achieved for GC and Subs",
      checked: false,
    },
    {
      id: "10",
      text: "Insurance approval achieved for GC and Subs",
      checked: false,
    },
  ]);
  const [newItemText, setNewItemText] = useState("");
  const [isAddingItem, setIsAddingItem] = useState(false);
  const [showCompleted, setShowCompleted] = useState(false);
  const [isAnyItemEditing, setIsAnyItemEditing] =
    useState(false);
  const [showDiscardDialog, setShowDiscardDialog] =
    useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [isMultiline, setIsMultiline] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("tasks");
  const [isInviteMemberModalOpen, setIsInviteMemberModalOpen] = useState(false);
  const addItemContainerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Task-related state
  const [expandedSection, setExpandedSection] = useState<
    "current" | "overdue" | "completed" | null
  >("current");
  const [selectedTaskIds, setSelectedTaskIds] = useState<
    Set<string>
  >(new Set());

  // Mock data generator for project tasks
  const generateProjectTasks = (
    count: number,
    section: "current" | "overdue" | "completed",
  ): Task[] => {
    const mockAssignees: Assignee[] = ALL_USERS.map((user) => ({
      name: user.name,
      email: user.email,
      avatar: user.avatarUrl || "",
    }));

    const taskNames = [
      "Electrical board assessment",
      "Safety inspection and certification",
      "Install new circuit breakers",
      "Rewire main power distribution",
      "Replace outdated outlets",
      "Ground fault testing",
      "Install surge protection system",
      "Update electrical panel labels",
      "Compliance documentation review",
      "Final safety walkthrough",
    ];

    return Array.from({ length: count }, (_, i) => {
      let assignees: Assignee[] = [];
      const assigneePattern = i % 9;

      if (assigneePattern === 0) {
        assignees = [];
      } else if (assigneePattern === 1) {
        assignees = [mockAssignees[0]];
      } else if (
        assigneePattern === 2 ||
        assigneePattern === 3
      ) {
        assignees = [mockAssignees[0], mockAssignees[1]];
      } else if (
        assigneePattern === 4 ||
        assigneePattern === 5
      ) {
        assignees = [
          mockAssignees[0],
          mockAssignees[1],
          mockAssignees[2],
        ];
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
        const dayPattern = i % 5;
        const day =
          dayPattern === 0
            ? 28
            : dayPattern === 1
              ? 29
              : dayPattern === 2
                ? 30
                : dayPattern === 3
                  ? 31
                  : 27;
        dueDate = new Date(2025, 11, day);
      } else {
        const hasDueDate = i % 3 !== 1;
        if (hasDueDate) {
          const datePattern = i % 10;
          if (datePattern <= 2) {
            const day =
              datePattern === 0
                ? 25
                : datePattern === 1
                  ? 28
                  : 31;
            dueDate = new Date(2025, 11, day);
          } else if (datePattern <= 5) {
            const day =
              datePattern === 3
                ? 5
                : datePattern === 4
                  ? 12
                  : 20;
            dueDate = new Date(2026, 0, day);
          } else if (datePattern <= 7) {
            const day = datePattern === 6 ? 8 : 18;
            dueDate = new Date(2026, 1, day);
          } else {
            const day = datePattern === 8 ? 10 : 25;
            dueDate = new Date(2026, 2, day);
          }
        }
      }

      const checklistPattern = i % 5;
      const checklistCount =
        checklistPattern === 0
          ? 3
          : checklistPattern === 1
            ? 5
            : checklistPattern === 2
              ? 4
              : undefined;

      return {
        id: `${section}-task-${i}`,
        name: taskNames[i % taskNames.length],
        projectName: "Raintree Hollow Court Renovation",
        projectIcon: "#7B61FF",
        priority,
        dueDate,
        assignees,
        checklistCount,
        completed: section === "completed",
      };
    });
  };

  const [currentTasks, setCurrentTasks] = useState<Task[]>(
    generateProjectTasks(30, "current"),
  );
  const [overdueTasks, setOverdueTasks] = useState<Task[]>(
    generateProjectTasks(5, "overdue"),
  );
  const [completedTasks, setCompletedTasks] = useState<Task[]>(
    [],
  );

  const [filters, setFilters] = useState<FilterState>({
    projects: [],
    assignees: [],
    priorities: [],
    dueDates: [],
    customDateRange: null,
  });

  const [sortOption, setSortOption] =
    useState<SortOption>(null);

  // Delete confirmation modal state
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteTargetSection, setDeleteTargetSection] =
    useState<"current" | "overdue" | "completed" | null>(null);
  const [deleteTargetTaskIds, setDeleteTargetTaskIds] =
    useState<string[]>([]);

  const moveItem = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      setItems((prevItems) => {
        const newItems = [...prevItems];
        const dragItem = newItems[dragIndex];
        newItems.splice(dragIndex, 1);
        newItems.splice(hoverIndex, 0, dragItem);
        return newItems;
      });
    },
    [],
  );

  const toggleItem = useCallback((id: string) => {
    setItems((prevItems) => {
      const itemIndex = prevItems.findIndex(
        (item) => item.id === id,
      );
      if (itemIndex === -1) return prevItems;

      const item = prevItems[itemIndex];
      const updatedItem = { ...item, checked: !item.checked };
      const newItems = prevItems.filter((i) => i.id !== id);

      if (item.checked && !updatedItem.checked) {
        const firstIncompleteIndex = newItems.findIndex(
          (i) => !i.checked,
        );
        if (firstIncompleteIndex !== -1) {
          newItems.splice(firstIncompleteIndex, 0, updatedItem);
        } else {
          newItems.unshift(updatedItem);
        }
      } else {
        const firstCompletedIndex = newItems.findIndex(
          (i) => i.checked,
        );
        if (firstCompletedIndex !== -1) {
          newItems.splice(firstCompletedIndex, 0, updatedItem);
        } else {
          newItems.push(updatedItem);
        }
      }

      return newItems;
    });
  }, []);

  const deleteItem = useCallback((id: string) => {
    setItems((prevItems) =>
      prevItems.filter((item) => item.id !== id),
    );
  }, []);

  const addItem = useCallback(() => {
    if (newItemText.trim()) {
      const newItem: ChecklistItemData = {
        id: Date.now().toString(),
        text: newItemText,
        checked: false,
      };
      setItems((prevItems) => [...prevItems, newItem]);
      setNewItemText("");
      setIsAddingItem(false);
    }
  }, [newItemText]);

  const handleCancelAddItem = useCallback(() => {
    if (newItemText.trim()) {
      setShowDiscardDialog(true);
    } else {
      setIsAddingItem(false);
      setNewItemText("");
      setIsMultiline(false);
    }
  }, [newItemText]);

  const handleDiscardConfirm = useCallback(() => {
    setIsAddingItem(false);
    setNewItemText("");
    setShowDiscardDialog(false);
    setIsMultiline(false);
  }, []);

  const updateItem = useCallback(
    (id: string, newText: string) => {
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === id ? { ...item, text: newText } : item,
        ),
      );
    },
    [],
  );

  const copyToClipboard = (text: string) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2000);
  };

  useEffect(() => {
    if (!isAddingItem) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (showDiscardDialog) return;

      if (
        addItemContainerRef.current &&
        !addItemContainerRef.current.contains(
          event.target as Node,
        )
      ) {
        handleCancelAddItem();
      }
    };

    const timeoutId = setTimeout(() => {
      document.addEventListener(
        "mousedown",
        handleClickOutside,
      );
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener(
        "mousedown",
        handleClickOutside,
      );
    };
  }, [isAddingItem, showDiscardDialog, handleCancelAddItem]);

  const displayItems = showCompleted
    ? items
    : items.filter((item) => !item.checked);

  useEffect(() => {
    const checkOverflow = () => {
      const currentRef = contentRef.current;
      if (currentRef) {
        const isOverflow =
          currentRef.scrollHeight > currentRef.clientHeight;
        setIsOverflowing(isOverflow);
      }
    };

    checkOverflow();

    const resizeObserver = new ResizeObserver(() => {
      checkOverflow();
    });

    if (contentRef.current) {
      resizeObserver.observe(contentRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [displayItems, isAddingItem]);

  // Task handlers
  const applyFilters = (tasks: Task[]): Task[] => {
    return tasks.filter((task) => {
      if (
        filters.projects.length > 0 &&
        !filters.projects.includes(task.projectName)
      ) {
        return false;
      }

      if (filters.assignees.length > 0) {
        const taskAssigneeNames = task.assignees.map(
          (a) => a.name,
        );
        const hasMatchingAssignee = filters.assignees.some(
          (filterAssignee) =>
            taskAssigneeNames.includes(filterAssignee),
        );
        if (!hasMatchingAssignee) {
          return false;
        }
      }

      if (
        filters.priorities.length > 0 &&
        !filters.priorities.includes(task.priority)
      ) {
        return false;
      }

      if (
        filters.dueDates.length > 0 ||
        filters.customDateRange
      ) {
        if (!task.dueDate) return false;

        const taskDate = new Date(task.dueDate);
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        const next3DaysStart = new Date(today);
        next3DaysStart.setDate(next3DaysStart.getDate() + 1);
        const next3DaysEnd = new Date(today);
        next3DaysEnd.setDate(next3DaysEnd.getDate() + 3);

        taskDate.setHours(0, 0, 0, 0);
        today.setHours(0, 0, 0, 0);
        tomorrow.setHours(0, 0, 0, 0);
        next3DaysStart.setHours(0, 0, 0, 0);
        next3DaysEnd.setHours(0, 0, 0, 0);

        let matchesDueDate = false;

        if (
          filters.dueDates.includes("today") &&
          taskDate.getTime() === today.getTime()
        ) {
          matchesDueDate = true;
        }
        if (
          filters.dueDates.includes("tomorrow") &&
          taskDate.getTime() === tomorrow.getTime()
        ) {
          matchesDueDate = true;
        }
        if (
          filters.dueDates.includes("next3days") &&
          taskDate >= next3DaysStart &&
          taskDate <= next3DaysEnd
        ) {
          matchesDueDate = true;
        }

        if (
          filters.customDateRange &&
          filters.customDateRange.start &&
          filters.customDateRange.end
        ) {
          const startDate = new Date(
            filters.customDateRange.start,
          );
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
          const priorityOrder: { [key: string]: number } = {
            low: 1,
            medium: 2,
            high: 3,
          };
          return (
            priorityOrder[a.priority] -
            priorityOrder[b.priority]
          );
        });

      case "priority-highToLow":
        return sorted.sort((a, b) => {
          const priorityOrder: { [key: string]: number } = {
            high: 1,
            medium: 2,
            low: 3,
          };
          return (
            priorityOrder[a.priority] -
            priorityOrder[b.priority]
          );
        });

      default:
        return tasks;
    }
  };

  const filteredCurrentTasks = useMemo(
    () => applySorting(applyFilters(currentTasks)),
    [currentTasks, filters, sortOption],
  );
  const filteredOverdueTasks = useMemo(
    () => applySorting(applyFilters(overdueTasks)),
    [overdueTasks, filters, sortOption],
  );
  const filteredCompletedTasks = useMemo(
    () => applySorting(applyFilters(completedTasks)),
    [completedTasks, filters, sortOption],
  );

  const handleToggleSection = (
    section: "current" | "overdue" | "completed",
  ) => {
    setExpandedSection(
      expandedSection === section ? null : section,
    );
  };

  const handleReorderTasks = (
    section: "current" | "overdue" | "completed",
    newTasks: Task[],
  ) => {
    if (section === "current") setCurrentTasks(newTasks);
    else if (section === "overdue") setOverdueTasks(newTasks);
    else setCompletedTasks(newTasks);
  };

  const handleCrossSectionDrop = (
    fromSection: "current" | "overdue" | "completed",
    toSection: "current" | "overdue" | "completed",
    taskIds: string | string[],
    insertIndex: number,
  ) => {
    const taskIdsArray = Array.isArray(taskIds)
      ? taskIds
      : [taskIds];

    let sourceTasks: Task[];

    if (fromSection === "current") {
      sourceTasks = currentTasks;
    } else if (fromSection === "overdue") {
      sourceTasks = overdueTasks;
    } else {
      sourceTasks = completedTasks;
    }

    const tasksToMove = sourceTasks.filter((t) =>
      taskIdsArray.includes(t.id),
    );

    if (tasksToMove.length === 0) return;

    const newSourceTasks = sourceTasks.filter(
      (t) => !taskIdsArray.includes(t.id),
    );

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

    if (fromSection === "current")
      setCurrentTasks(newSourceTasks);
    else if (fromSection === "overdue")
      setOverdueTasks(newSourceTasks);
    else setCompletedTasks(newSourceTasks);

    if (toSection === "current") setCurrentTasks(targetTasks);
    else if (toSection === "overdue")
      setOverdueTasks(targetTasks);
    else setCompletedTasks(targetTasks);
  };

  const handleAddTask = (
    section: "current" | "overdue" | "completed",
    taskName: string,
    priority: "high" | "medium" | "low",
    dueDate: Date | null,
    assignees: Assignee[],
  ) => {
    const newTask: Task = {
      id: `${section}-task-${Date.now()}`,
      name: taskName,
      projectName: "Raintree Hollow Court Renovation",
      projectIcon: "#7B61FF",
      priority,
      dueDate,
      assignees,
      completed: section === "completed",
    };

    if (section === "current")
      setCurrentTasks([newTask, ...currentTasks]);
    else if (section === "overdue")
      setOverdueTasks([newTask, ...overdueTasks]);
    else setCompletedTasks([newTask, ...completedTasks]);
  };

  const handleCompleteTask = (
    section: "current" | "overdue" | "completed",
    taskIds: string | string[],
  ) => {
    const idsToComplete = Array.isArray(taskIds)
      ? taskIds
      : [taskIds];

    if (section === "completed") {
      const tasksToUncomplete = completedTasks.filter((t) =>
        idsToComplete.includes(t.id),
      );
      if (tasksToUncomplete.length === 0) return;

      const newCompletedTasks = completedTasks.filter(
        (t) => !idsToComplete.includes(t.id),
      );

      const tasksForCurrent: Task[] = [];
      const tasksForOverdue: Task[] = [];

      tasksToUncomplete.forEach((task) => {
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
        tasksToComplete = currentTasks.filter((t) =>
          idsToComplete.includes(t.id),
        );
        newSourceTasks = currentTasks.filter(
          (t) => !idsToComplete.includes(t.id),
        );
        setCurrentTasks(newSourceTasks);
      } else {
        tasksToComplete = overdueTasks.filter((t) =>
          idsToComplete.includes(t.id),
        );
        newSourceTasks = overdueTasks.filter(
          (t) => !idsToComplete.includes(t.id),
        );
        setOverdueTasks(newSourceTasks);
      }

      if (tasksToComplete.length === 0) return;

      const completedTasksToAdd = tasksToComplete.map(
        (task) => ({
          ...task,
          completed: true,
          originalSection: section,
        }),
      );

      setCompletedTasks([
        ...completedTasksToAdd,
        ...completedTasks,
      ]);
    }
  };

  const handleUpdateTask = (
    section: "current" | "overdue" | "completed",
    taskId: string,
    updates: Partial<Task>,
  ) => {
    if (section === "current") {
      setCurrentTasks(
        currentTasks.map((task) =>
          task.id === taskId ? { ...task, ...updates } : task,
        ),
      );
    } else if (section === "overdue") {
      setOverdueTasks(
        overdueTasks.map((task) =>
          task.id === taskId ? { ...task, ...updates } : task,
        ),
      );
    } else {
      setCompletedTasks(
        completedTasks.map((task) =>
          task.id === taskId ? { ...task, ...updates } : task,
        ),
      );
    }
  };

  const handleMoveUp = (
    section: "current" | "overdue" | "completed",
    taskIds: string | string[],
  ) => {
    const idsToMove = Array.isArray(taskIds)
      ? taskIds
      : [taskIds];

    let sourceTasks: Task[];
    if (section === "current") sourceTasks = currentTasks;
    else if (section === "overdue") sourceTasks = overdueTasks;
    else sourceTasks = completedTasks;

    const indices = idsToMove
      .map((id) => sourceTasks.findIndex((t) => t.id === id))
      .filter((idx) => idx !== -1);
    if (indices.length === 0) return;

    const minIndex = Math.min(...indices);
    if (minIndex === 0) return;

    const newTasks = [...sourceTasks];
    const tasksToMove = idsToMove
      .map((id) => newTasks.find((t) => t.id === id))
      .filter(Boolean) as Task[];

    idsToMove.forEach((id) => {
      const idx = newTasks.findIndex((t) => t.id === id);
      if (idx !== -1) newTasks.splice(idx, 1);
    });

    newTasks.splice(minIndex - 1, 0, ...tasksToMove);

    if (section === "current") setCurrentTasks(newTasks);
    else if (section === "overdue") setOverdueTasks(newTasks);
    else setCompletedTasks(newTasks);
  };

  const handleMoveDown = (
    section: "current" | "overdue" | "completed",
    taskIds: string | string[],
  ) => {
    const idsToMove = Array.isArray(taskIds)
      ? taskIds
      : [taskIds];

    let sourceTasks: Task[];
    if (section === "current") sourceTasks = currentTasks;
    else if (section === "overdue") sourceTasks = overdueTasks;
    else sourceTasks = completedTasks;

    const indices = idsToMove
      .map((id) => sourceTasks.findIndex((t) => t.id === id))
      .filter((idx) => idx !== -1);
    if (indices.length === 0) return;

    const maxIndex = Math.max(...indices);
    if (maxIndex === sourceTasks.length - 1) return;

    const newTasks = [...sourceTasks];
    const tasksToMove = idsToMove
      .map((id) => newTasks.find((t) => t.id === id))
      .filter(Boolean) as Task[];

    idsToMove.forEach((id) => {
      const idx = newTasks.findIndex((t) => t.id === id);
      if (idx !== -1) newTasks.splice(idx, 1);
    });

    const newMaxIndex = indices[0];
    newTasks.splice(newMaxIndex + 1, 0, ...tasksToMove);

    if (section === "current") setCurrentTasks(newTasks);
    else if (section === "overdue") setOverdueTasks(newTasks);
    else setCompletedTasks(newTasks);
  };

  const handleDeleteTask = (
    section: "current" | "overdue" | "completed",
    taskIds: string | string[],
  ) => {
    const idsToDelete = Array.isArray(taskIds)
      ? taskIds
      : [taskIds];

    // Show confirmation modal
    setDeleteTargetSection(section);
    setDeleteTargetTaskIds(idsToDelete);
    setShowDeleteModal(true);
  };

  const confirmDeleteTask = () => {
    if (
      !deleteTargetSection ||
      deleteTargetTaskIds.length === 0
    )
      return;

    // Get task information for toast
    let allTasks: Task[] = [];
    if (deleteTargetSection === "current")
      allTasks = currentTasks;
    else if (deleteTargetSection === "overdue")
      allTasks = overdueTasks;
    else allTasks = completedTasks;

    const deletedTasks = allTasks.filter((t) =>
      deleteTargetTaskIds.includes(t.id),
    );
    const isSingleTask = deleteTargetTaskIds.length === 1;

    if (deleteTargetSection === "current") {
      setCurrentTasks(
        currentTasks.filter(
          (t) => !deleteTargetTaskIds.includes(t.id),
        ),
      );
    } else if (deleteTargetSection === "overdue") {
      setOverdueTasks(
        overdueTasks.filter(
          (t) => !deleteTargetTaskIds.includes(t.id),
        ),
      );
    } else {
      setCompletedTasks(
        completedTasks.filter(
          (t) => !deleteTargetTaskIds.includes(t.id),
        ),
      );
    }

    // Show toast notification
    if (isSingleTask && deletedTasks.length > 0) {
      const taskName = deletedTasks[0].name;
      const truncatedName =
        taskName.length > 25
          ? taskName.substring(0, 25) + "..."
          : taskName;
      toast.custom(
        () => (
          <Toast
            variant="title-caption"
            type="error"
            title="Task Deleted"
            caption={truncatedName}
            duration={3000}
          />
        ),
        {
          duration: 3000,
          position: "bottom-center",
        },
      );
    } else {
      toast.custom(
        () => (
          <Toast
            variant="title-only"
            type="error"
            title="Task Deleted"
            duration={3000}
          />
        ),
        {
          duration: 3000,
          position: "bottom-center",
        },
      );
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
  ) => {
    const idsToDuplicate = Array.isArray(taskIds)
      ? taskIds
      : [taskIds];

    let sourceTasks: Task[];
    if (section === "current") sourceTasks = currentTasks;
    else if (section === "overdue") sourceTasks = overdueTasks;
    else sourceTasks = completedTasks;

    const tasksToDuplicate = sourceTasks.filter((t) =>
      idsToDuplicate.includes(t.id),
    );
    if (tasksToDuplicate.length === 0) return;

    const duplicatedTasks = tasksToDuplicate.map((task) => ({
      ...task,
      id: `${section}-task-${Date.now()}-${Math.random()}`,
    }));

    if (section === "current") {
      setCurrentTasks([...duplicatedTasks, ...currentTasks]);
    } else if (section === "overdue") {
      setOverdueTasks([...duplicatedTasks, ...overdueTasks]);
    } else {
      setCompletedTasks([
        ...duplicatedTasks,
        ...completedTasks,
      ]);
    }

    if (tasksToDuplicate.length === 1) {
      const taskName = tasksToDuplicate[0].name;
      toast.custom(
        () => (
          <Toast
            variant="title-caption"
            type="success"
            title="Duplicated Task"
            caption={taskName}
            duration={3000}
          />
        ),
        {
          duration: 3000,
          position: "bottom-center",
        },
      );
    }
  };

  const handleTaskSelect = (
    taskId: string,
    isMultiSelect: boolean,
  ) => {
    if (isMultiSelect) {
      const newSelection = new Set(selectedTaskIds);
      if (newSelection.has(taskId)) {
        newSelection.delete(taskId);
      } else {
        newSelection.add(taskId);
      }
      setSelectedTaskIds(newSelection);
    } else {
      if (
        selectedTaskIds.has(taskId) &&
        selectedTaskIds.size === 1
      ) {
        setSelectedTaskIds(new Set());
      } else {
        setSelectedTaskIds(new Set([taskId]));
      }
    }
  };

  const handleClearSelection = (e: React.MouseEvent) => {
    const hasOpenModal = document.querySelector(
      '[role="dialog"]',
    );
    if (hasOpenModal) return;

    const target = e.target as HTMLElement;

    if (target.closest("[data-task-item]")) {
      return;
    }

    if (selectedTaskIds.size > 0) {
      setSelectedTaskIds(new Set());
    }
  };

  // ESC key handler for task selection
  useEffect(() => {
    if (activeTab !== "tasks") return;

    const handleEscKey = (e: KeyboardEvent) => {
      const hasOpenModal = document.querySelector(
        '[role="dialog"]',
      );
      if (hasOpenModal) return;

      if (e.key === "Escape" && selectedTaskIds.size > 0) {
        setSelectedTaskIds(new Set());
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      const hasOpenModal = document.querySelector(
        '[role="dialog"]',
      );
      if (hasOpenModal) return;

      if (
        target.closest('[role="menu"]') ||
        target.closest(".context-menu")
      ) {
        return;
      }

      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA"
      ) {
        return;
      }

      const clickedTaskItem = target.closest(
        "[data-task-item]",
      );

      if (clickedTaskItem) {
        const clickedTaskId =
          clickedTaskItem.getAttribute("data-task-item");

        if (
          selectedTaskIds.size === 1 &&
          selectedTaskIds.has(clickedTaskId!)
        ) {
          return;
        }

        if (
          !target.closest("button") &&
          !target.closest('[role="button"]')
        ) {
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

    document.addEventListener("keydown", handleEscKey);
    document.addEventListener(
      "mousedown",
      handleClickOutside,
      true,
    );
    return () => {
      document.removeEventListener("keydown", handleEscKey);
      document.removeEventListener(
        "mousedown",
        handleClickOutside,
        true,
      );
    };
  }, [selectedTaskIds, activeTab]);

  return (
    <DndProvider backend={HTML5Backend}>
      <div
        className="flex flex-col h-full bg-white overflow-hidden"
        style={{ fontFamily: "var(--font-family-base)" }}
      >
        {/* Header */}
        <header
          className="bg-white px-4 py-3 flex-shrink-0"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <div className="flex items-center justify-between">
            {/* Left: Title Section */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2 h-8">
                <button className="w-8 h-8 flex items-center justify-center">
                  <ChevronLeft
                    className="w-4 h-4"
                    style={{ color: "var(--grey-04)" }}
                  />
                </button>
                <h1
                  style={{
                    fontWeight: "var(--font-weight-semibold)",
                    fontSize: "22px",
                    lineHeight: "32px",
                    color: "var(--text-primary)",
                    fontFamily: "var(--font-family-base)",
                  }}
                >
                  Raintree Hollow Court Renovation
                </h1>
                <button className="w-8 h-8 flex items-center justify-center">
                  <MoreVertical
                    className="w-6 h-6"
                    style={{ color: "var(--text-primary)" }}
                  />
                </button>
              </div>
              <div className="flex items-center gap-2 pl-10 opacity-80">
                <div className="flex items-center gap-1 p-0.5">
                  <div className="w-3 h-3 relative">
                    <svg
                      className="w-full h-full"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path
                        d="M10.875 10.2807V4.3418C10.875 3.89442 10.5113 3.53067 10.0639 3.53067H7.875V0.80667C7.875 0.77442 7.86788 0.369045 7.51538 0.132795C7.16288 -0.10308 6.78525 0.0446696 6.75525 0.0566696L1.25213 2.3228C0.94725 2.44842 0.75 2.74242 0.75 3.0728V10.2807H0.375C0.168 10.2807 0 10.4487 0 10.6557C0 10.8627 0.168 11.0307 0.375 11.0307H1.125H7.5H10.5H10.875C11.082 11.0307 11.25 10.8627 11.25 10.6557C11.25 10.4487 11.082 10.2807 10.875 10.2807ZM1.5 3.0728C1.5 3.04805 1.515 3.02592 1.53788 3.01655L7.041 0.750795C7.06163 0.742545 7.08038 0.74442 7.098 0.75642C7.116 0.768045 7.125 0.78492 7.125 0.80667V3.90567V10.2807H1.5V3.0728ZM7.875 10.2807V4.28067H10.0639C10.0976 4.28067 10.125 4.30805 10.125 4.3418V10.2807H7.875Z"
                        fill="var(--secondary-green)"
                      />
                    </svg>
                  </div>
                  <span
                    style={{
                      fontSize: "10px",
                      lineHeight: "16px",
                      color: "var(--text-primary)",
                      letterSpacing: "0.2px",
                      fontFamily: "var(--font-family-base)",
                    }}
                  >
                    TaskTag Project
                  </span>
                </div>
                <div className="flex items-center gap-1 p-0.5">
                  <MapPin
                    className="w-3 h-3"
                    style={{ color: "var(--text-primary)" }}
                  />
                  <span
                    style={{
                      fontWeight: "var(--font-weight-medium)",
                      fontSize: "10px",
                      lineHeight: "16px",
                      color: "var(--text-primary)",
                      letterSpacing: "0.2px",
                      fontFamily: "var(--font-family-base)",
                    }}
                  >
                    11 N Raintree Hollow Court
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">
                <Search className="w-5 h-5" />
              </Button>
              {isExpiredMode ? (
                <Tooltip
                  content="Upgrade to unlock team features"
                  variant="bottom-right"
                  size="sm"
                >
                  <Button
                    variant="fill"
                    size="sm"
                    className="btn-black"
                    onClick={showUpgradeModal}
                    style={{ width: "120px", borderRadius: "var(--radius-full)" }}
                  >
                    <Plus className="w-4 h-4" />
                    <span>New Task</span>
                  </Button>
                </Tooltip>
              ) : (
                <Button
                  variant="fill"
                  size="sm"
                  className="btn-black"
                  style={{ width: "120px", borderRadius: "var(--radius-full)" }}
                >
                  <Plus className="w-4 h-4" />
                  <span>New Task</span>
                </Button>
              )}
            </div>
          </div>
        </header>

        {/* Description Section */}
        <div className="px-4 pt-4 pb-2 flex-shrink-0">
          <div
            className="rounded-lg p-4"
            style={{ backgroundColor: "var(--grey-01)" }}
          >
            <h2
              style={{
                fontWeight: "var(--font-weight-semibold)",
                fontSize: "16px",
                lineHeight: "21px",
                color: "var(--text-primary)",
                marginBottom: "8px",
                fontFamily: "var(--font-family-base)",
              }}
            >
              Description
            </h2>
            <p
              style={{
                fontSize: "12px",
                lineHeight: "16px",
                color: "var(--text-primary)",
                letterSpacing: "0.24px",
                fontFamily: "var(--font-family-base)",
              }}
            >
              This project focuses on conducting a comprehensive
              assessment and improvement of the electrical board
              to ensure long-term safety, system reliability,
              and compliance with current standards.
            </p>
          </div>
        </div>

        {/* Tabs Section */}
        <div
          className="relative flex-shrink-0"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <div className="flex items-center justify-between px-4 pt-2">
            <div className="flex items-center">
              <TabItem
                variant="icon-left"
                size="md"
                label="Tasks"
                icon={Hash}
                isActive={activeTab === "tasks"}
                onClick={() => setActiveTab("tasks")}
              />
              <TabItem
                variant="icon-left"
                size="md"
                label="Checklist"
                icon={FileText}
                isActive={activeTab === "checklist"}
                onClick={() => setActiveTab("checklist")}
              />
              <TabItem
                variant="icon-left"
                size="md"
                label="Files & Media"
                icon={ImageIcon}
                isActive={activeTab === "files"}
                onClick={() => setActiveTab("files")}
              />
              <TabItem
                variant="icon-left"
                size="md"
                label="Activity Log"
                icon={Activity}
                isActive={activeTab === "activity"}
                onClick={() => setActiveTab("activity")}
              />
              <TabItem
                variant="icon-left"
                size="md"
                label="Members"
                icon={Users}
                badge="10"
                isActive={activeTab === "members"}
                onClick={() => setActiveTab("members")}
              />
            </div>

            {/* Right: Copy Link and Invite buttons */}
            <div className="flex items-center gap-4 -mt-4">
              <Tooltip
                content={
                  isExpiredMode ? (
                    "Upgrade to unlock team features"
                  ) : linkCopied ? (
                    <SuccessTooltip message="Link Copied" />
                  ) : (
                    "Copy link to invite"
                  )
                }
                variant="bottom-right"
                size="sm"
                style={linkCopied && !isExpiredMode ? "custom" : "default"}
                forceShow={linkCopied && !isExpiredMode}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  style={{
                    aspectRatio: "1",
                    padding: "var(--spacing-8)",
                    minWidth: "var(--size-sm)",
                    minHeight: "var(--size-sm)",
                  }}
                  onClick={() => {
                    if (isExpiredMode) {
                      showUpgradeModal();
                    } else {
                      copyToClipboard(window.location.href);
                    }
                  }}
                >
                  <Link
                    className="w-6 h-6"
                    style={{ color: "var(--text-primary)" }}
                  />
                </Button>
              </Tooltip>
              {isExpiredMode ? (
                <Tooltip
                  content="Upgrade to unlock team features"
                  variant="bottom-right"
                  size="sm"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="btn-secondary"
                    onClick={showUpgradeModal}
                    style={{
                      borderRadius: "var(--radius-full)",
                      width: "120px",
                      minHeight: "var(--size-sm)",
                    }}
                  >
                    <UserPlus className="w-4 h-4" />
                    <span>Invite</span>
                  </Button>
                </Tooltip>
              ) : (
                <Button
                  variant="outline"
                  size="sm"
                  className="btn-secondary"
                  onClick={() => setIsInviteMemberModalOpen(true)}
                  style={{
                    borderRadius: "var(--radius-full)",
                    width: "120px",
                    minHeight: "var(--size-sm)",
                  }}
                >
                  <UserPlus className="w-4 h-4" />
                  <span>Invite</span>
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Tasks Tab Content */}
        {activeTab === "tasks" && (
          <>
            <Toaster position="bottom-center" />
            {/* Filter & Sort Actions */}
            <div className="bg-white shrink-0">
              <div className="flex items-center gap-2 p-4">
                <FilterDropdown
                  tasks={[...currentTasks, ...overdueTasks]}
                  filters={filters}
                  onFiltersChange={setFilters}
                  hideProjects={true}
                />
                <SortDropdown
                  selectedSort={sortOption}
                  onSortChange={setSortOption}
                />
                {isExpiredMode ? (
                  <Tooltip
                    content="Upgrade to unlock team features"
                    variant="bottom-left"
                    size="sm"
                  >
                    <button
                      onClick={showUpgradeModal}
                      className="h-10 flex items-center justify-center gap-2 px-4 rounded-lg hover:bg-secondary transition-colors cursor-pointer"
                      style={{
                        fontWeight: "var(--font-weight-semibold)",
                      }}
                    >
                      <svg
                        className="size-4 shrink-0"
                        fill="none"
                        viewBox="0 0 16 16"
                      >
                        <path
                          clipRule="evenodd"
                          d={svgPaths.calendarIcon}
                          fill="var(--text-primary)"
                          fillRule="evenodd"
                        />
                      </svg>
                      <span className="text-[14px] leading-none">
                        Add to calendar
                      </span>
                    </button>
                  </Tooltip>
                ) : (
                  <button
                    className="h-10 flex items-center justify-center gap-2 px-4 rounded-lg hover:bg-secondary transition-colors cursor-pointer"
                    style={{
                      fontWeight: "var(--font-weight-semibold)",
                    }}
                  >
                    <svg
                      className="size-4 shrink-0"
                      fill="none"
                      viewBox="0 0 16 16"
                    >
                      <path
                        clipRule="evenodd"
                        d={svgPaths.calendarIcon}
                        fill="var(--text-primary)"
                        fillRule="evenodd"
                      />
                    </svg>
                    <span className="text-[14px] leading-none">
                      Add to calendar
                    </span>
                  </button>
                )}
              </div>
            </div>

            {/* Task Sections - Scrollable Container */}
            <div
              className="flex-1 min-h-0 overflow-y-auto flex flex-col gap-4 pt-[0px] pr-[16px] pb-[16px] pl-[16px]"
              onClick={handleClearSelection}
            >
              <TaskSection
                title="Current"
                count={filteredCurrentTasks.length}
                tasks={filteredCurrentTasks}
                isExpanded={expandedSection === "current"}
                onToggle={() => handleToggleSection("current")}
                onReorder={(tasks) =>
                  handleReorderTasks("current", tasks)
                }
                onCrossSectionDrop={handleCrossSectionDrop}
                onAddTask={(
                  name,
                  priority,
                  dueDate,
                  assignees,
                ) =>
                  handleAddTask(
                    "current",
                    name,
                    priority,
                    dueDate,
                    assignees,
                  )
                }
                onCompleteTask={(taskId) =>
                  handleCompleteTask("current", taskId)
                }
                showInlineCreation={true}
                sectionType="current"
                selectedTaskIds={selectedTaskIds}
                onTaskSelect={handleTaskSelect}
                onUpdateTask={(taskId, updates) =>
                  handleUpdateTask("current", taskId, updates)
                }
                onMoveUp={(taskIds) =>
                  handleMoveUp("current", taskIds)
                }
                onMoveDown={(taskIds) =>
                  handleMoveDown("current", taskIds)
                }
                onDeleteTask={(taskIds) =>
                  handleDeleteTask("current", taskIds)
                }
                onDuplicateTask={(taskIds) =>
                  handleDuplicateTask("current", taskIds)
                }
                hideProjectName={true}
                hideProjectSelect={true}
                isExpiredMode={isExpiredMode}
                onUpgradeClick={showUpgradeModal}
              />
              <TaskSection
                title="Overdue"
                count={filteredOverdueTasks.length}
                tasks={filteredOverdueTasks}
                isExpanded={expandedSection === "overdue"}
                onToggle={() => handleToggleSection("overdue")}
                onReorder={(tasks) =>
                  handleReorderTasks("overdue", tasks)
                }
                onCrossSectionDrop={handleCrossSectionDrop}
                onAddTask={(
                  name,
                  priority,
                  dueDate,
                  assignees,
                ) =>
                  handleAddTask(
                    "overdue",
                    name,
                    priority,
                    dueDate,
                    assignees,
                  )
                }
                onCompleteTask={(taskId) =>
                  handleCompleteTask("overdue", taskId)
                }
                showInlineCreation={false}
                sectionType="overdue"
                selectedTaskIds={selectedTaskIds}
                onTaskSelect={handleTaskSelect}
                onUpdateTask={(taskId, updates) =>
                  handleUpdateTask("overdue", taskId, updates)
                }
                onMoveUp={(taskIds) =>
                  handleMoveUp("overdue", taskIds)
                }
                onMoveDown={(taskIds) =>
                  handleMoveDown("overdue", taskIds)
                }
                onDeleteTask={(taskIds) =>
                  handleDeleteTask("overdue", taskIds)
                }
                onDuplicateTask={(taskIds) =>
                  handleDuplicateTask("overdue", taskIds)
                }
                hideProjectName={true}
                hideProjectSelect={true}
                isExpiredMode={isExpiredMode}
                onUpgradeClick={showUpgradeModal}
              />
              <TaskSection
                title="Completed"
                count={filteredCompletedTasks.length}
                tasks={filteredCompletedTasks}
                isExpanded={expandedSection === "completed"}
                onToggle={() =>
                  handleToggleSection("completed")
                }
                onReorder={(tasks) =>
                  handleReorderTasks("completed", tasks)
                }
                onCrossSectionDrop={handleCrossSectionDrop}
                onAddTask={(
                  name,
                  priority,
                  dueDate,
                  assignees,
                ) =>
                  handleAddTask(
                    "completed",
                    name,
                    priority,
                    dueDate,
                    assignees,
                  )
                }
                onUncompleteTask={(taskId) =>
                  handleCompleteTask("completed", taskId)
                }
                showInlineCreation={false}
                sectionType="completed"
                selectedTaskIds={selectedTaskIds}
                onTaskSelect={handleTaskSelect}
                onUpdateTask={(taskId, updates) =>
                  handleUpdateTask("completed", taskId, updates)
                }
                onMoveUp={(taskIds) =>
                  handleMoveUp("completed", taskIds)
                }
                onMoveDown={(taskIds) =>
                  handleMoveDown("completed", taskIds)
                }
                onDeleteTask={(taskIds) =>
                  handleDeleteTask("completed", taskIds)
                }
                onDuplicateTask={(taskIds) =>
                  handleDuplicateTask("completed", taskIds)
                }
                hideProjectName={true}
                hideProjectSelect={true}
                showCount={false}
                isExpiredMode={isExpiredMode}
                onUpgradeClick={showUpgradeModal}
              />
            </div>
          </>
        )}

        {/* Checklist Tab Content */}
        {activeTab === "checklist" && (
          <>
            {/* Action Bar */}
            <div className="bg-white px-4 py-4 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-2">
                {isExpiredMode ? (
                  <Tooltip
                    content="Upgrade to unlock team features"
                    variant="bottom-left"
                    size="sm"
                  >
                    <Button
                      variant="ghost"
                      size="sm"
                      className="btn-secondary"
                      onClick={showUpgradeModal}
                    >
                      <Save className="w-4 h-4" />
                      <span>Save as Template</span>
                    </Button>
                  </Tooltip>
                ) : (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="btn-secondary"
                  >
                    <Save className="w-4 h-4" />
                    <span>Save as Template</span>
                  </Button>
                )}
                {isExpiredMode ? (
                  <Tooltip
                    content="Upgrade to unlock team features"
                    variant="bottom-left"
                    size="sm"
                  >
                    <Button
                      variant="ghost"
                      size="sm"
                      className="btn-secondary"
                      onClick={showUpgradeModal}
                    >
                      <Hash className="w-4 h-4" />
                      <span>Convert to Tasks</span>
                    </Button>
                  </Tooltip>
                ) : (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="btn-secondary"
                  >
                    <Hash className="w-4 h-4" />
                    <span>Convert to Tasks</span>
                  </Button>
                )}
              </div>
              <div className="flex items-center gap-3">
                <span
                  style={{
                    fontWeight: "var(--font-weight-regular)",
                    fontSize: "14px",
                    lineHeight: "16px",
                    color: "var(--text-primary)",
                    letterSpacing: "0.28px",
                    fontFamily: "var(--font-family-base)",
                  }}
                >
                  Show completed items
                </span>
                <Switch
                  checked={showCompleted}
                  onCheckedChange={setShowCompleted}
                />
              </div>
            </div>

            <div
              ref={containerRef}
              className="flex-1 flex flex-col min-h-0 overflow-hidden"
            >
              <div
                ref={contentRef}
                className="flex-1 overflow-y-auto px-4"
                style={{
                  paddingBottom: "16px",
                }}
              >
                <div className="flex flex-col gap-4">
                  {displayItems.map((item) => {
                    const realIndex = items.findIndex(
                      (i) => i.id === item.id,
                    );
                    return (
                      <ChecklistItem
                        key={item.id}
                        id={item.id}
                        text={item.text}
                        checked={item.checked}
                        index={realIndex}
                        onToggle={toggleItem}
                        onDelete={deleteItem}
                        moveItem={moveItem}
                        onUpdate={updateItem}
                        onEditingChange={setIsAnyItemEditing}
                      />
                    );
                  })}

                  {/* Add Item Form */}
                  {!isAnyItemEditing && !showCompleted && (
                    <>
                      {isAddingItem ? (
                        <div
                          className="bg-white relative rounded-lg shrink-0 w-full"
                          ref={addItemContainerRef}
                          style={{
                            border: "1px solid var(--border)",
                          }}
                        >
                          <button
                            onClick={handleCancelAddItem}
                            className="absolute right-[16px] top-[16px] flex items-center justify-center z-10 rounded-full hover:bg-[var(--grey-02)] transition-colors"
                          >
                            <X
                              className="w-6 h-6"
                              style={{
                                color: "var(--text-primary)",
                              }}
                            />
                          </button>

                          <div className="flex flex-col size-full">
                            <div className="box-border content-stretch flex flex-col gap-[8px] items-start pl-[24px] pr-[56px] py-[16px] relative w-full">
                              <div className="relative w-full">
                                <textarea
                                  value={newItemText}
                                  onChange={(e) =>
                                    setNewItemText(
                                      e.target.value,
                                    )
                                  }
                                  onKeyDown={(e) => {
                                    if (
                                      e.key === "Enter" &&
                                      !e.shiftKey
                                    ) {
                                      e.preventDefault();
                                      addItem();
                                    } else if (
                                      e.key === "Escape"
                                    ) {
                                      handleCancelAddItem();
                                    }
                                  }}
                                  placeholder="Item name"
                                  autoFocus
                                  maxLength={255}
                                  rows={1}
                                  className="w-full outline-none bg-white rounded-[4px] px-[12px] py-[8px] resize-none overflow-hidden"
                                  style={{
                                    fontFamily:
                                      "var(--font-family-base)",
                                    fontWeight:
                                      "var(--font-weight-regular)",
                                    fontSize: "14px",
                                    color:
                                      "var(--text-primary)",
                                    letterSpacing: "0.28px",
                                    border:
                                      "1px solid var(--text-primary)",
                                    height: "auto",
                                    minHeight: "40px",
                                  }}
                                  onInput={(e) => {
                                    const target =
                                      e.target as HTMLTextAreaElement;
                                    target.style.height =
                                      "auto";
                                    target.style.height =
                                      target.scrollHeight +
                                      "px";
                                    setIsMultiline(
                                      target.scrollHeight > 56,
                                    );
                                  }}
                                />
                                <span
                                  className={`absolute pointer-events-none ${
                                    isMultiline
                                      ? "right-[12px] bottom-[12px]"
                                      : "right-[12px] top-[50%] -translate-y-1/2"
                                  }`}
                                  style={{
                                    fontSize: "12px",
                                    color: "var(--grey-04)",
                                    fontFamily:
                                      "var(--font-family-base)",
                                  }}
                                >
                                  {255 - newItemText.length}
                                </span>
                              </div>
                              <p
                                style={{
                                  fontSize: "12px",
                                  color: "var(--grey-04)",
                                  lineHeight: "16px",
                                  fontFamily:
                                    "var(--font-family-base)",
                                }}
                              >
                                Press Shift + Enter for new line
                              </p>
                            </div>
                          </div>
                        </div>
                      ) : null}
                    </>
                  )}

                  {/* Add Item Buttons - Non-sticky when not overflowing */}
                  {!isOverflowing &&
                    !isAnyItemEditing &&
                    !showCompleted &&
                    !isAddingItem && (
                      <div className="flex gap-2" style={{ width: '100%' }}>
                        <Button
                          onClick={() => setIsAddingItem(true)}
                          size="lg"
                          style={{
                            backgroundColor: "var(--grey-01)",
                            color: "var(--secondary-green)",
                            width: '50%',
                            border: "none",
                            justifyContent: "flex-start",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor =
                              "var(--grey-02)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor =
                              "var(--grey-01)";
                          }}
                        >
                          <svg
                            className="block size-4"
                            fill="none"
                            preserveAspectRatio="none"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M8 3.33333V12.6667M3.33333 8H12.6667"
                              stroke="var(--secondary-green)"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span
                            style={{
                              fontWeight:
                                "var(--font-weight-medium)",
                              color: "var(--secondary-green)",
                            }}
                          >
                            Add item
                          </span>
                        </Button>
                        <div style={{ width: '50%' }}>
                          {isExpiredMode ? (
                            <Tooltip
                              content="Upgrade to unlock team features"
                              variant="bottom-left"
                              size="sm"
                              fullWidth={true}
                            >
                              <Button
                                size="lg"
                                onClick={showUpgradeModal}
                                style={{
                                  backgroundColor: "var(--grey-01)",
                                  color: "var(--secondary-green)",
                                  width: '100%',
                                  border: "none",
                                  justifyContent: "flex-start",
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.backgroundColor =
                                    "var(--grey-02)";
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.backgroundColor =
                                    "var(--grey-01)";
                                }}
                              >
                                <svg
                                  className="block size-4"
                                  fill="none"
                                  preserveAspectRatio="none"
                                  viewBox="0 0 16 16"
                                >
                                  <path
                                    d="M8 3.33333V12.6667M3.33333 8H12.6667"
                                    stroke="var(--secondary-green)"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                                <span
                                  style={{
                                    fontWeight:
                                      "var(--font-weight-medium)",
                                    color: "var(--secondary-green)",
                                  }}
                                >
                                  Add item from template
                                </span>
                              </Button>
                            </Tooltip>
                          ) : (
                            <Button
                              size="lg"
                              style={{
                                backgroundColor: "var(--grey-01)",
                                color: "var(--secondary-green)",
                                width: '100%',
                                border: "none",
                                justifyContent: "flex-start",
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor =
                                  "var(--grey-02)";
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor =
                                  "var(--grey-01)";
                              }}
                            >
                              <svg
                                className="block size-4"
                                fill="none"
                                preserveAspectRatio="none"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  d="M8 3.33333V12.6667M3.33333 8H12.6667"
                                  stroke="var(--secondary-green)"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              <span
                                style={{
                                  fontWeight:
                                    "var(--font-weight-medium)",
                                  color: "var(--secondary-green)",
                                }}
                              >
                                Add item from template
                              </span>
                            </Button>
                          )}
                        </div>
                      </div>
                    )}
                </div>
              </div>

              {/* Add Item Buttons - Sticky when overflowing */}
              {isOverflowing &&
                !showCompleted &&
                !isAnyItemEditing &&
                !isAddingItem && (
                  <div
                    className="bg-white px-4 py-4 flex-shrink-0"
                    style={{
                      boxShadow:
                        "0px -2px 8px rgba(0, 0, 0, 0.08)",
                      zIndex: 10,
                    }}
                  >
                    <div className="flex gap-2" style={{ width: '100%' }}>
                      <Button
                        onClick={() => setIsAddingItem(true)}
                        size="lg"
                        style={{
                          backgroundColor: "var(--grey-01)",
                          color: "var(--secondary-green)",
                          width: '50%',
                          border: "none",
                          justifyContent: "flex-start",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor =
                            "var(--grey-02)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor =
                            "var(--grey-01)";
                        }}
                      >
                        <svg
                          className="block size-4"
                          fill="none"
                          preserveAspectRatio="none"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M8 3.33333V12.6667M3.33333 8H12.6667"
                            stroke="var(--secondary-green)"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span
                          style={{
                            fontWeight:
                              "var(--font-weight-medium)",
                            color: "var(--secondary-green)",
                          }}
                        >
                          Add item
                        </span>
                      </Button>
                      <div style={{ width: '50%' }}>
                        {isExpiredMode ? (
                          <Tooltip
                            content="Upgrade to unlock team features"
                            variant="bottom-left"
                            size="sm"
                            fullWidth={true}
                          >
                            <Button
                              size="lg"
                              onClick={showUpgradeModal}
                              style={{
                                backgroundColor: "var(--grey-01)",
                                color: "var(--secondary-green)",
                                width: '100%',
                                border: "none",
                                justifyContent: "flex-start",
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor =
                                  "var(--grey-02)";
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor =
                                  "var(--grey-01)";
                              }}
                            >
                              <svg
                                className="block size-4"
                                fill="none"
                                preserveAspectRatio="none"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  d="M8 3.33333V12.6667M3.33333 8H12.6667"
                                  stroke="var(--secondary-green)"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              <span
                                style={{
                                  fontWeight:
                                    "var(--font-weight-medium)",
                                  color: "var(--secondary-green)",
                                }}
                              >
                                Add item from template
                              </span>
                            </Button>
                          </Tooltip>
                        ) : (
                          <Button
                            size="lg"
                            style={{
                              backgroundColor: "var(--grey-01)",
                              color: "var(--secondary-green)",
                              width: '100%',
                              border: "none",
                              justifyContent: "flex-start",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor =
                                "var(--grey-02)";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor =
                                "var(--grey-01)";
                            }}
                          >
                            <svg
                              className="block size-4"
                              fill="none"
                              preserveAspectRatio="none"
                              viewBox="0 0 16 16"
                            >
                              <path
                                d="M8 3.33333V12.6667M3.33333 8H12.6667"
                                stroke="var(--secondary-green)"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <span
                              style={{
                                fontWeight:
                                  "var(--font-weight-medium)",
                                color: "var(--secondary-green)",
                              }}
                            >
                              Add item from template
                            </span>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                )}
            </div>
          </>
        )}

        {/* Discard Confirmation Dialog */}
        <AlertDialog
          open={showDiscardDialog}
          onOpenChange={setShowDiscardDialog}
        >
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Discard changes?
              </AlertDialogTitle>
              <AlertDialogDescription>
                You have unsaved changes. Are you sure you want
                to discard them?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction onClick={handleDiscardConfirm}>
                Discard
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        {/* Delete Confirmation Modal */}
        {showDeleteModal &&
          (() => {
            let allTasks: Task[] = [];
            if (deleteTargetSection === "current")
              allTasks = currentTasks;
            else if (deleteTargetSection === "overdue")
              allTasks = overdueTasks;
            else allTasks = completedTasks;

            const tasksToDelete = allTasks.filter((t) =>
              deleteTargetTaskIds.includes(t.id),
            );
            const isSingleTask = deleteTargetTaskIds.length === 1;

            const descriptionContent = (
              <div>
                <p
                  style={{
                    color: "var(--text-primary)",
                    margin: 0,
                    fontSize: "var(--text-label)",
                    fontWeight: "var(--font-weight-regular)",
                    lineHeight: 1.5,
                    marginBottom:
                      !isSingleTask && tasksToDelete.length > 0
                        ? "var(--spacing-12)"
                        : 0,
                  }}
                >
                  {isSingleTask
                    ? "Deleting this task will remove it permanently for all assignee."
                    : "Deleting these tasks will remove them permanently for all assignee."}
                </p>

                {!isSingleTask &&
                  tasksToDelete.length > 0 &&
                  (() => {
                    const displayTasks = tasksToDelete.slice(
                      0,
                      3,
                    );
                    const remainingCount =
                      tasksToDelete.length - 3;
                    const showRemaining = remainingCount > 0;

                    return (
                      <ul
                        style={{
                          margin: 0,
                          marginBottom: "var(--spacing-12)",
                          paddingLeft: "20px",
                          listStyleType: "disc",
                          fontSize: "var(--text-label)",
                          fontWeight:
                            "var(--font-weight-regular)",
                          lineHeight: 1.5,
                          color: "var(--text-primary)",
                        }}
                      >
                        {displayTasks.map((task) => (
                          <li
                            key={task.id}
                            style={{
                              fontSize: "var(--text-label)",
                              fontWeight:
                                "var(--font-weight-regular)",
                              lineHeight: 1.5,
                            }}
                          >
                            {task.name}
                          </li>
                        ))}
                        {showRemaining && (
                          <li
                            style={{
                              fontSize: "var(--text-label)",
                              fontWeight:
                                "var(--font-weight-regular)",
                              lineHeight: 1.5,
                            }}
                          >
                            and {remainingCount}{" "}
                            {remainingCount === 1
                              ? "other"
                              : "others"}
                          </li>
                        )}
                      </ul>
                    );
                  })()}

                <p
                  style={{
                    color: "var(--text-primary)",
                    margin: 0,
                    fontSize: "var(--text-label)",
                    fontWeight: "var(--font-weight-regular)",
                    lineHeight: 1.5,
                  }}
                >
                  {isSingleTask
                    ? "Still want to delete it?"
                    : "Still want to delete them?"}
                </p>
              </div>
            );

            return (
              <div
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "var(--overlay)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 1000,
                  padding: "var(--spacing-16)",
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

        {/* Invite Member Modal */}
        <AssigneeModal
          isOpen={isInviteMemberModalOpen}
          onClose={() => setIsInviteMemberModalOpen(false)}
          modalTitle="Invite or add member"
          modalDescription="Add existing member or invite new ones to collaborate on this project."
          searchPlaceholder="Add member by email, name or group"
          submitButtonText="Send invite"
          roles={[
            { value: 'Admin', label: 'Admin' },
            { value: 'Editor', label: 'Editor' },
            { value: 'Viewer', label: 'Viewer' },
          ]}
          defaultRole="Editor"
          onAssign={(members) => {
            console.log('Invited members:', members);
            setIsInviteMemberModalOpen(false);
          }}
        />
      </div>
    </DndProvider>
  );
}