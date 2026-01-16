export interface Assignee {
  name: string;
  avatar: string;
  email?: string; // Add email support
  isEmailInvite?: boolean;
  role?: "assignee" | "viewer";
  avatarUrl?: string; // Add avatarUrl for consistency with AssigneeModal
}

export interface Task {
  id: string;
  name: string;
  projectName: string;
  projectIcon: string;
  priority: "high" | "medium" | "low";
  dueDate: Date | null;
  assignees: Assignee[];
  checklistCount?: number;
  completed: boolean;
  originalSection?: "current" | "overdue";
  createdAt?: Date;
  updatedAt?: Date;
}

export type Priority = "high" | "medium" | "low";

export interface FilterState {
  projects: string[];
  assignees: string[];
  priorities: Array<"high" | "medium" | "low">;
  dueDates: Array<"today" | "tomorrow" | "next3days">;
  customDateRange: { start: Date | null; end: Date | null } | null;
}

export type SortOption =
  | "dueDate-soonest"
  | "dueDate-latest"
  | "priority-lowToHigh"
  | "priority-highToLow"
  | "lastUpdated-newest"
  | "lastUpdated-oldest"
  | "createdDate-newest"
  | "createdDate-oldest"
  | null;