import { useState } from "react";
import * as React from "react";
import ProjectDetailsPage from "./project-details/ProjectDetailsPage";
import {
  X,
  Folder,
  FileText,
  HardHat,
  Hammer,
  StretchHorizontal,
  User,
  MessageSquare,
  Calendar,
} from "lucide-react";
import { TabItem } from "../components/TabItem";
import { TaskFilterDropdown } from "./global-search/TaskFilterDropdown";
import { SortDropdown } from "./my-task/SortDropdown";
import { SearchInput } from "../components/SearchInput";
import { ProjectFilterDropdown } from "./global-search/ProjectFilterDropdown";
import { ProjectSortDropdown } from "./global-search/ProjectSortDropdown";
import { FileFilterDropdown } from "./global-search/FileFilterDropdown";
import NoResultsFound from "../imports/NoResultsFound";
import type { SortOption, Task, FilterState, Assignee } from "./my-task-types";
import type { ProjectSortOption } from "./global-search/ProjectSortDropdown";
import Pdf from "../imports/Pdf";

// Helper function to highlight matching text
function HighlightText({ text, query }: { text: string; query: string }) {
  if (!query.trim()) {
    return <>{text}</>;
  }

  const parts = text.split(new RegExp(`(${query})`, "gi"));
  
  return (
    <>
      {parts.map((part, index) =>
        part.toLowerCase() === query.toLowerCase() ? (
          <span
            key={index}
            style={{
              backgroundColor: "var(--bright-yellow)",
              color: "var(--text-primary)",
            }}
          >
            {part}
          </span>
        ) : (
          <span key={index}>{part}</span>
        )
      )}
    </>
  );
}

interface ProjectFilterState {
  owners: string[];
  teams: string[];
  members: string[];
}

interface TaskFilterState {
  projects: string[];
}

interface FileFilterState {
  myUpload: boolean;
  media: boolean;
  document: boolean;
}

export default function GlobalSearchPage() {
  const [activeTab, setActiveTab] = useState<
    "projects" | "tasks" | "files" | "contacts"
  >("projects");
  const [searchValue, setSearchValue] = useState("");
  const [taskFilters, setTaskFilters] = useState<TaskFilterState>({
    projects: [],
  });
  const [projectFilters, setProjectFilters] = useState<ProjectFilterState>({
    owners: [],
    teams: [],
    members: [],
  });
  const [fileFilters, setFileFilters] = useState<FileFilterState>({
    myUpload: false,
    media: false,
    document: false,
  });
  const [sortOption, setSortOption] =
    useState<SortOption>(null);
  const [projectSortOption, setProjectSortOption] =
    useState<ProjectSortOption>(null);
  const [modalHeight, setModalHeight] = useState(700);

  // Track window dimensions for responsive modal height
  React.useEffect(() => {
    const updateModalHeight = () => {
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;
      
      if (windowHeight < 800 || windowWidth < 1200) {
        // Modal height = window height - 10% from top - 10% from bottom
        // = window height * 0.8 (80% of window height)
        setModalHeight(windowHeight * 0.8);
      } else {
        setModalHeight(700);
      }
    };

    // Set initial height
    updateModalHeight();

    // Add event listener
    window.addEventListener('resize', updateModalHeight);

    // Cleanup
    return () => window.removeEventListener('resize', updateModalHeight);
  }, []);

  const hasSearchValue = searchValue.trim().length > 0;

  // Mock task data matching Task interface
  const mockTasks: Task[] = [
    {
      id: "1",
      title: "Electricity Board Fix 1120",
      projectName: "11520 Oliver Street",
      assignees: [
        { name: "William Smith", email: "william@example.com", avatar: "" },
        { name: "Gerald Drill", email: "gerald@example.com", avatar: "" },
      ],
      priority: "high",
      dueDate: new Date(2026, 0, 30),
    },
    {
      id: "2",
      title: "Fix the sink 11",
      projectName: "11 N Raintree Hollow Court",
      assignees: [
        { name: "Robert Helmet", email: "robert@example.com", avatar: "" },
      ],
      priority: "medium",
      dueDate: new Date(2026, 0, 15),
    },
    {
      id: "3",
      title: "Reaffix loose fixtures 1120",
      projectName: "11520 Oliver Street",
      assignees: [
        { name: "William Smith", email: "william@example.com", avatar: "" },
      ],
      priority: "high",
      dueDate: new Date(2026, 0, 28),
    },
    {
      id: "4",
      title: "Test fire alarms 11",
      projectName: "11 N Raintree Hollow Court",
      assignees: [
        { name: "Robert Helmet", email: "robert@example.com", avatar: "" },
        { name: "Saint Saturn", email: "saint@example.com", avatar: "" },
      ],
      priority: "low",
      dueDate: new Date(2026, 1, 5),
    },
  ];

  const [filters, setFilters] = useState<FilterState>({
    projects: [],
    assignees: [],
    dueDates: [],
    priorities: [],
    customDateRange: null,
  });

  // Apply filters to tasks
  const applyFilters = (tasks: Task[]): Task[] => {
    return tasks.filter((task) => {
      if (
        filters.projects.length > 0 &&
        !filters.projects.includes(task.projectName)
      ) {
        return false;
      }

      if (filters.assignees.length > 0) {
        const taskAssigneeNames = task.assignees.map((a) => a.name);
        const hasMatchingAssignee = filters.assignees.some((filterAssignee) =>
          taskAssigneeNames.includes(filterAssignee)
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

      // Filter by due date
      if (filters.dueDates.length > 0 || filters.customDateRange) {
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

  // Apply sorting to tasks
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
          return priorityOrder[a.priority] - priorityOrder[b.priority];
        });

      case "priority-highToLow":
        return sorted.sort((a, b) => {
          const priorityOrder: { [key: string]: number } = {
            high: 1,
            medium: 2,
            low: 3,
          };
          return priorityOrder[a.priority] - priorityOrder[b.priority];
        });

      default:
        return tasks;
    }
  };

  // Apply filters and sorting to task list
  const filteredAndSortedTasks = applySorting(applyFilters(mockTasks));

  // Get unique project names from tasks
  const taskProjectList = Array.from(
    new Set(mockTasks.map((task) => task.projectName))
  ).sort();

  // Mock projects data with owner, team, and members
  const allProjects = [
    {
      title: "11520 Oliver Street",
      description: "Residential construction project in downtown area with modern design elements",
      iconBg: "#138EFF",
      team: "TaskTag Team",
      owner: "Logan",
      members: ["William Smith", "Gerald Drill"],
    },
    {
      title: "11 N Raintree Hollow Court",
      description: "Kitchen renovation and bathroom remodeling for suburban property",
      iconBg: "#138EFF",
      team: "Nightly Team",
      owner: "Ralph Smith",
      members: ["Robert Helmet"],
    },
    {
      title: "114 Maple Avenue, Austin, TX 78701",
      description: "Commercial office space renovation with complete electrical overhaul",
      iconBg: "#FC7F5B",
      team: "Nightly Team",
      owner: "Roberto",
      members: ["Saint Saturn"],
    },
    {
      title: "Houston, TX 11702",
      description: "Multi-unit residential complex construction and landscaping project",
      iconBg: "#7B61FF",
      team: "TaskTag Team",
      owner: "Logan",
      members: ["William Smith"],
    },
    {
      title: "120 Penn Station #302, 11",
      description: "High-rise apartment interior design and fixture installation",
      iconBg: "#7B61FF",
      team: "Nightly Team",
      owner: "Theodore",
      members: ["Gerald Drill", "Robert Helmet"],
    },
    {
      title: "1123 Oak Street",
      description: "Historic home restoration preserving original architectural features",
      iconBg: "#138EFF",
      team: "My team",
      owner: "Logan",
      members: ["Saint Saturn"],
    },
  ];

  // Create a mapping from project name to team name
  const projectToTeamMap: Record<string, string> = {};
  allProjects.forEach((project) => {
    projectToTeamMap[project.title] = project.team;
  });

  // Mock files data
  const allFiles = [
    {
      id: "1",
      name: "White kitchen.3",
      location: "120 Penn Station #302, 11",
      context: "Tasktag x Headway",
      date: "Apr 10",
      team: "Nightly Team",
      type: "image" as const,
      imageUrl:
        "https://images.unsplash.com/photo-1610177534644-34d881503b83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY5MDY3NTg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      uploader: "Current User",
    },
    {
      id: "2",
      name: "W345547.jpg",
      location: "11520 Oliver Street",
      context: "Group Chat",
      date: "Apr 8",
      team: "TaskTag Team",
      type: "image" as const,
      imageUrl:
        "https://images.unsplash.com/photo-1610177534644-34d881503b83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY5MDY3NTg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      uploader: "Current User",
    },
    {
      id: "3",
      name: "Contract w1.5.pdf",
      location: "11520 Oliver Street",
      context: "Group Chat",
      date: "Mar 25",
      team: "TaskTag Team",
      type: "document" as const,
      uploader: "Other User",
    },
    {
      id: "4",
      name: "White Kitchen34",
      location: "Houston, TX 71102",
      context: "Group Chat",
      date: "Mar 25",
      team: "TaskTag Team",
      type: "image" as const,
      imageUrl:
        "https://images.unsplash.com/photo-1610177534644-34d881503b83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY5MDY3NTg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      uploader: "Current User",
    },
    {
      id: "5",
      name: "Wh bathroom.jpg",
      location: "120 Penn Station #302, 11",
      context: "Tasktag x Headway",
      date: "Mar 11",
      team: "Nightly Team",
      type: "image" as const,
      imageUrl:
        "https://images.unsplash.com/photo-1590880265945-6b43effeb599?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGJhdGhyb29tJTIwbW9kZXJufGVufDF8fHx8MTc2OTAyMTA1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      uploader: "Other User",
    },
    {
      id: "6",
      name: "w83u498hufer.pdf",
      location: "114 Maple Avenue, Austin, TX 78701",
      context: "TT group chat",
      date: "Mar 10",
      team: "Nightly Team",
      type: "document" as const,
      uploader: "Other User",
    },
  ];

  // Filter files based on selected filters
  const filteredFiles = allFiles.filter((file) => {
    // If no filters selected, show all files
    if (!fileFilters.myUpload && !fileFilters.media && !fileFilters.document) {
      return true;
    }

    // Check myUpload filter
    if (fileFilters.myUpload && file.uploader !== "Current User") {
      return false;
    }

    // Check media/document filters
    if (fileFilters.media || fileFilters.document) {
      const isMedia = fileFilters.media && file.type === "image";
      const isDocument = fileFilters.document && file.type === "document";

      // If both are checked, show both types
      if (fileFilters.media && fileFilters.document) {
        return isMedia || isDocument;
      }

      // If only one is checked, show only that type
      if (fileFilters.media) {
        return isMedia;
      }
      if (fileFilters.document) {
        return isDocument;
      }
    }

    return true;
  });

  // Apply filters to projects
  const applyProjectFilters = (projects: typeof allProjects): typeof allProjects => {
    return projects.filter((project) => {
      // Filter by owners
      if (projectFilters.owners.length > 0 && !projectFilters.owners.includes(project.owner)) {
        return false;
      }

      // Filter by teams
      if (projectFilters.teams.length > 0 && !projectFilters.teams.includes(project.team)) {
        return false;
      }

      // Filter by members
      if (projectFilters.members.length > 0) {
        const hasMatchingMember = projectFilters.members.some((filterMember) =>
          project.members.includes(filterMember)
        );
        if (!hasMatchingMember) {
          return false;
        }
      }

      return true;
    });
  };

  // Apply sorting to projects
  const applyProjectSorting = (projects: typeof allProjects): typeof allProjects => {
    if (!projectSortOption) return projects;

    const sorted = [...projects];

    switch (projectSortOption) {
      case "a-z":
        return sorted.sort((a, b) => a.title.localeCompare(b.title));

      case "z-a":
        return sorted.sort((a, b) => b.title.localeCompare(a.title));

      case "archived":
        // Return empty array for archived projects (we don't have any)
        return [];

      default:
        return projects;
    }
  };

  // Apply filters and sorting to project list
  const filteredProjects = applyProjectSorting(applyProjectFilters(allProjects));

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background: Project Details Page */}
      <div className="absolute inset-0">
        <ProjectDetailsPage />
      </div>

      {/* Overlay */}
      <div
        className="absolute inset-0 z-50"
        style={{ backgroundColor: "var(--overlay)" }}
      >
        {/* Modal */}
        <div className="flex items-center justify-center w-full h-full p-4">
          <div
            className="w-full max-w-[820px] flex flex-col overflow-hidden"
            style={{
              height: `${modalHeight}px`,
              borderRadius: "var(--radius-16)",
              boxShadow: "var(--elevation-xl)",
              backgroundColor: "var(--white)",
            }}
          >
            {/* Modal Header */}
            <div
              className="flex items-center justify-between"
              style={{
                padding:
                  "var(--spacing-24) var(--spacing-24) var(--spacing-8) var(--spacing-24)",
              }}
            >
              <h2
                className="text-web-heading-16"
                style={{ color: "var(--text-primary)" }}
              >
                Global Search
              </h2>
              <button
                className="p-2 rounded-lg transition-colors"
                style={{
                  color: "var(--text-primary)",
                  borderRadius: "var(--radius-8)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    "var(--grey-01)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    "transparent")
                }
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            {/* Search Bar */}
            <div
              style={{
                padding: "var(--spacing-16) var(--spacing-24)",
              }}
            >
              <SearchInput
                value={searchValue}
                onChange={setSearchValue}
                placeholder="Find Tasks, Project, Files or contact"
              />
            </div>

            {/* Conditional Content */}
            {!hasSearchValue ? (
              /* Empty State - Recent Search */
              <div
                className="flex-1 flex flex-col"
                style={{ gap: "var(--spacing-24)" }}
              >
                {/* Recent Search Header */}
                <div style={{ padding: "0 var(--spacing-24)" }}>
                  <div
                    className="flex items-center justify-between rounded-lg"
                    style={{
                      padding: "var(--spacing-8) 0",
                      borderRadius: "var(--radius-8)",
                    }}
                  >
                    <h3
                      className="text-web-label-small"
                      style={{ color: "var(--text-primary)" }}
                    >
                      Recent Search
                    </h3>
                  </div>
                </div>

                {/* Empty State Message */}
                <div
                  className="flex-1 flex items-center justify-center"
                  style={{
                    padding: "0 var(--spacing-24)",
                    paddingBottom: "var(--spacing-24)",
                  }}
                >
                  <p
                    className="text-web-secondary-body text-center"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    No recent searches found
                  </p>
                </div>
              </div>
            ) : (
              /* Search Results */
              <>
                {/* Tabs */}
                <div
                  className="flex border-b"
                  style={{
                    paddingLeft: "var(--spacing-16)",
                    paddingRight: "var(--spacing-16)",
                    borderColor: "var(--grey-02)",
                  }}
                >
                  <div className="flex-1">
                    <TabItem
                      variant="default"
                      size="md"
                      label="Projects"
                      isActive={activeTab === "projects"}
                      onClick={() => setActiveTab("projects")}
                      badge={
                        activeTab === "projects" ? 6 : undefined
                      }
                      className="w-full"
                    />
                  </div>
                  <div className="flex-1">
                    <TabItem
                      variant="default"
                      size="md"
                      label="Tasks"
                      isActive={activeTab === "tasks"}
                      onClick={() => setActiveTab("tasks")}
                      badge={
                        activeTab === "tasks" ? 4 : undefined
                      }
                      className="w-full"
                    />
                  </div>
                  <div className="flex-1">
                    <TabItem
                      variant="default"
                      size="md"
                      label="Files"
                      isActive={activeTab === "files"}
                      onClick={() => setActiveTab("files")}
                      badge={
                        activeTab === "files" ? 6 : undefined
                      }
                      className="w-full"
                    />
                  </div>
                  <div className="flex-1">
                    <TabItem
                      variant="default"
                      size="md"
                      label="Contacts"
                      isActive={activeTab === "contacts"}
                      onClick={() => setActiveTab("contacts")}
                      badge={
                        activeTab === "contacts" ? 6 : undefined
                      }
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Filter & Sort */}
                <div
                  className="flex items-center gap-2"
                  style={{
                    padding: "var(--spacing-16)",
                  }}
                >
                  {activeTab === "projects" && (
                    <>
                      <ProjectFilterDropdown
                        onFiltersChange={setProjectFilters}
                      />
                      <ProjectSortDropdown
                        selectedSort={projectSortOption}
                        onSortChange={setProjectSortOption}
                      />
                    </>
                  )}
                  {activeTab === "tasks" && (
                    <>
                      <TaskFilterDropdown
                        tasks={mockTasks}
                        filters={filters}
                        onFiltersChange={setFilters}
                      />
                      <SortDropdown
                        selectedSort={sortOption}
                        onSortChange={setSortOption}
                      />
                    </>
                  )}
                  {activeTab === "files" && (
                    <FileFilterDropdown
                      filters={fileFilters}
                      onFiltersChange={setFileFilters}
                    />
                  )}
                </div>

                {/* Tab Content */}
                <div
                  className="flex-1 overflow-y-auto"
                  style={{ paddingBottom: "var(--spacing-24)" }}
                >
                  {activeTab === "projects" && (
                    <>
                      {projectSortOption === "archived" ? (
                        <div className="flex items-center justify-center h-full">
                          <NoResultsFound />
                        </div>
                      ) : (
                        <div>
                          {filteredProjects.map((project) => (
                            <ProjectRow
                              key={project.title}
                              iconBg={project.iconBg}
                              title={project.title}
                              description={project.description}
                              team={project.team}
                              searchQuery={searchValue}
                            />
                          ))}
                        </div>
                      )}
                    </>
                  )}

                  {activeTab === "tasks" && (
                    <div>
                      {filteredAndSortedTasks.map((task) => {
                        const teamName = projectToTeamMap[task.projectName] || "TaskTag Team";
                        return (
                          <TaskRow
                            key={task.id}
                            title={task.title}
                            project={task.projectName}
                            status={
                              task.dueDate
                                ? task.dueDate < new Date()
                                  ? "Overdue • Due " +
                                    task.dueDate.toLocaleDateString("en-US", {
                                      month: "short",
                                      day: "numeric",
                                    })
                                  : task.dueDate.toLocaleDateString("en-US", {
                                      month: "short",
                                      day: "numeric",
                                    })
                                : "Upcoming"
                            }
                            team={teamName}
                            isCompleted={task.priority === "low"}
                            searchQuery={searchValue}
                          />
                        );
                      })}
                    </div>
                  )}

                  {activeTab === "files" && (
                    <div>
                      {filteredFiles.map((file) => (
                        <FileRow
                          key={file.id}
                          name={file.name}
                          location={file.location}
                          context={file.context}
                          date={file.date}
                          team={file.team}
                          isPdf={file.name.toLowerCase().endsWith('.pdf')}
                          isImage={file.type === "image"}
                          imageUrl={file.imageUrl}
                          searchQuery={searchValue}
                        />
                      ))}
                    </div>
                  )}

                  {activeTab === "contacts" && (
                    <div
                      className="flex-1 flex items-center justify-center"
                      style={{ padding: "var(--spacing-48)" }}
                    >
                      {/* Blank - no contact list */}
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper Components
function ProjectRow({
  iconBg,
  title,
  description,
  team,
  searchQuery,
}: {
  iconBg: string;
  title: string;
  description: string;
  team: string;
  searchQuery: string;
}) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className="flex items-center transition-colors cursor-pointer"
      style={{
        gap: "var(--spacing-12)",
        padding: "var(--spacing-12) var(--spacing-24)",
      }}
      onMouseEnter={(e) => {
        setIsHovered(true);
        e.currentTarget.style.backgroundColor = "var(--grey-01)";
      }}
      onMouseLeave={(e) => {
        setIsHovered(false);
        e.currentTarget.style.backgroundColor = "transparent";
      }}
    >
      <div
        className="flex-1 flex items-center"
        style={{ gap: "var(--spacing-8)" }}
      >
        <div
          className="flex items-center justify-center rounded text-white flex-shrink-0"
          style={{
            width: "32px",
            height: "32px",
            backgroundColor: iconBg,
            borderRadius: "var(--radius-4)",
          }}
        >
          <Folder size={16} />
        </div>
        <div className="flex-1 min-w-0">
          <div
            className="text-web-secondary-body"
            style={{
              color: "var(--text-primary)",
              textDecoration: isHovered ? "underline" : "none",
            }}
          >
            <HighlightText text={title} query={searchQuery} />
          </div>
          <div
            className="text-web-metadata-primary truncate"
            style={{
              color: "var(--grey-06)",
            }}
          >
            {description}
          </div>
        </div>
      </div>
      <div
        className="flex items-center flex-shrink-0"
        style={{ gap: "var(--spacing-8)" }}
      >
        <span
          className="text-web-secondary-body"
          style={{ color: "var(--text-primary)" }}
        >
          {team}
        </span>
        <div
          className="flex items-center justify-center rounded text-white"
          style={{
            width: "24px",
            height: "24px",
            backgroundColor:
              team === "TaskTag Team"
                ? "var(--secondary-green)"
                : team === "Nightly Team"
                ? "var(--black)"
                : "var(--black)",
            borderRadius: "var(--radius-4)",
            fontSize: "10px",
          }}
        >
          {team === "TaskTag Team" ? (
            <HardHat size={12} />
          ) : team === "Nightly Team" ? (
            <Hammer size={12} />
          ) : (
            <StretchHorizontal size={12} />
          )}
        </div>
      </div>
    </div>
  );
}

function TaskRow({
  title,
  project,
  status,
  team,
  isCompleted,
  searchQuery,
}: {
  title: string;
  project: string;
  status: string;
  team: string;
  isCompleted?: boolean;
  searchQuery: string;
}) {
  return (
    <div
      className="flex items-center transition-colors"
      style={{
        gap: "var(--spacing-12)",
        padding: "var(--spacing-12) var(--spacing-24)",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.backgroundColor =
          "var(--grey-01)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.backgroundColor = "transparent")
      }
    >
      <div className="flex-1">
        <div
          className="flex items-center mb-1"
          style={{ gap: "var(--spacing-8)" }}
        >
          <div
            className="flex items-center justify-center rounded-full"
            style={{
              width: "16px",
              height: "16px",
              backgroundColor: isCompleted
                ? "var(--secondary-green)"
                : "transparent",
              border: isCompleted
                ? "2px solid var(--secondary-green)"
                : "2px solid var(--grey-04)",
            }}
          >
            {isCompleted && (
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M2 6l2.5 2.5L10 3"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
          <span
            className="text-web-secondary-body"
            style={{
              color: "var(--text-primary)",
            }}
          >
            <HighlightText text={title} query={searchQuery} />
          </span>
        </div>
        <div
          className="flex items-center text-web-metadata-primary"
          style={{
            gap: "var(--spacing-8)",
            paddingLeft: "24px",
            color: "var(--grey-06)",
          }}
        >
          <div
            className="flex items-center"
            style={{ gap: "var(--spacing-4)" }}
          >
            <Folder size={12} />
            <span>{project}</span>
          </div>
          <span>•</span>
          <span>{status}</span>
        </div>
      </div>
      <div
        className="flex items-center"
        style={{ gap: "var(--spacing-8)" }}
      >
        <span
          className="text-web-secondary-body"
          style={{ color: "var(--text-primary)" }}
        >
          {team}
        </span>
        <div
          className="flex items-center justify-center rounded text-white"
          style={{
            width: "24px",
            height: "24px",
            backgroundColor:
              team === "TaskTag Team"
                ? "var(--secondary-green)"
                : "var(--black)",
            borderRadius: "var(--radius-4)",
            fontSize: "10px",
          }}
        >
          {team === "TaskTag Team" ? (
            <HardHat size={12} />
          ) : (
            <Hammer size={12} />
          )}
        </div>
      </div>
    </div>
  );
}

function FileRow({
  name,
  location,
  context,
  date,
  team,
  isPdf,
  isImage,
  imageUrl,
  searchQuery,
}: {
  name: string;
  location: string;
  context: string;
  date: string;
  team: string;
  isPdf?: boolean;
  isImage?: boolean;
  imageUrl?: string;
  searchQuery: string;
}) {
  return (
    <div
      className="flex items-center transition-colors"
      style={{
        gap: "var(--spacing-12)",
        padding: "var(--spacing-12) var(--spacing-24)",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.backgroundColor =
          "var(--grey-01)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.backgroundColor = "transparent")
      }
    >
      <div
        className="flex-1 flex items-center"
        style={{ gap: "var(--spacing-12)" }}
      >
        <div
          className="flex items-center justify-center rounded overflow-hidden"
          style={{
            width: "48px",
            height: "48px",
            backgroundColor: "var(--grey-02)",
            borderRadius: "var(--radius-8)",
          }}
        >
          {isPdf ? (
            <div style={{ width: "28px", height: "28px" }}>
              <Pdf />
            </div>
          ) : isImage && imageUrl ? (
            <img
              src={imageUrl}
              alt={name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          ) : (
            <FileText
              size={24}
              style={{ color: "var(--text-secondary)" }}
            />
          )}
        </div>
        <div className="flex-1">
          <div
            className="text-web-secondary-body mb-1"
            style={{ color: "var(--text-primary)" }}
          >
            <HighlightText text={name} query={searchQuery} />
          </div>
          <div
            className="flex items-center text-web-metadata-primary"
            style={{
              gap: "var(--spacing-8)",
              color: "var(--text-secondary)",
            }}
          >
            <div
              className="flex items-center"
              style={{ gap: "var(--spacing-4)" }}
            >
              <Folder size={12} />
              <span>{location}</span>
            </div>
            <span>•</span>
            <div
              className="flex items-center"
              style={{ gap: "var(--spacing-4)" }}
            >
              <MessageSquare size={12} />
              <span>{context}</span>
            </div>
            <span>•</span>
            <div
              className="flex items-center"
              style={{ gap: "var(--spacing-4)" }}
            >
              <Calendar size={12} />
              <span>{date}</span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex items-center"
        style={{ gap: "var(--spacing-8)" }}
      >
        <span
          className="text-web-secondary-body"
          style={{ color: "var(--text-primary)" }}
        >
          {team}
        </span>
        <div
          className="flex items-center justify-center rounded text-white"
          style={{
            width: "24px",
            height: "24px",
            backgroundColor:
              team === "TaskTag Team"
                ? "var(--secondary-green)"
                : "var(--black)",
            borderRadius: "var(--radius-4)",
            fontSize: "10px",
          }}
        >
          {team === "TaskTag Team" ? (
            <HardHat size={12} />
          ) : (
            <Hammer size={12} />
          )}
        </div>
      </div>
    </div>
  );
}

function ContactRow({
  name,
  email,
  phone,
  team,
  searchQuery,
}: {
  name: string;
  email: string;
  phone: string;
  team: string;
  searchQuery: string;
}) {
  return (
    <div
      className="flex items-center transition-colors"
      style={{
        gap: "var(--spacing-12)",
        padding: "var(--spacing-12) var(--spacing-24)",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.backgroundColor =
          "var(--grey-01)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.backgroundColor = "transparent")
      }
    >
      <div
        className="flex-1 flex items-center"
        style={{ gap: "var(--spacing-8)" }}
      >
        <div
          className="flex items-center justify-center rounded text-white"
          style={{
            width: "32px",
            height: "32px",
            backgroundColor: "var(--blue)",
            borderRadius: "var(--radius-4)",
          }}
        >
          <User size={16} />
        </div>
        <span
          className="text-web-secondary-body"
          style={{ color: "var(--text-primary)" }}
        >
          <HighlightText text={name} query={searchQuery} />
        </span>
      </div>
      <div
        className="flex items-center"
        style={{ gap: "var(--spacing-8)" }}
      >
        <span
          className="text-web-secondary-body"
          style={{ color: "var(--text-primary)" }}
        >
          {team}
        </span>
        <div
          className="flex items-center justify-center rounded text-white"
          style={{
            width: "24px",
            height: "24px",
            backgroundColor:
              team === "My team"
                ? "var(--secondary-green)"
                : team === "Nightly Team"
                ? "var(--black)"
                : "var(--black)",
            borderRadius: "var(--radius-4)",
            fontSize: "10px",
          }}
        >
          {team === "My team" ? (
            <HardHat size={12} />
          ) : team === "Nightly Team" ? (
            <Hammer size={12} />
          ) : (
            <StretchHorizontal size={12} />
          )}
        </div>
      </div>
    </div>
  );
}