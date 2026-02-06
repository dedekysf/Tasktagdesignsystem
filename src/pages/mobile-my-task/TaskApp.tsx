import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { StatusBar } from './StatusBar';
import { Header } from './Header';
import { SearchBar } from './SearchBar';
import { SearchTabs } from './SearchTabs';
import { TaskSection } from './TaskSection';
import { BottomNav } from './BottomNav';
import { HomeBar } from './HomeBar';
import { FAB } from './FAB';
import { LoadMoreSpinner } from './LoadMoreSpinner';
import { SearchLoadingSpinner } from './SearchLoadingSpinner';
import { DatePickerSheet } from './DatePickerSheet';
import { FilterSheet } from './FilterSheet';
import { SortSheet, SortOption } from './SortSheet';
import { TaskDetailPage } from './TaskDetailPage';
import { toast } from 'sonner@2.0.3';

const imgUnsplash = "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzAzOTQyNDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

interface Task {
  id: number;
  title: string;
  project: string;
  projectIcon: string;
  projectColor: string;
  dueDate: string;
  isOverdue?: boolean;
  completed?: boolean;
  priority: 'high' | 'medium' | 'low';
  owner: string;
  assignees: string[];
  lastUpdated?: Date;
  createdDate?: Date;
}

interface TaskAppProps {
  onViewChange?: (viewingDetail: boolean) => void;
}

// Initial task data
const initialCurrentTasks: Task[] = [
  // 2 item pertama: 0 assignee - dengan date range examples
  { id: 1, title: 'Fix the sink', project: '11 N Raintree Hollow Court', projectIcon: 'helmet', projectColor: '#A620B2', dueDate: 'Jan 25 – Feb 2', priority: 'high', owner: 'Alexander Oliver', assignees: [] },
  { id: 2, title: 'Electricity board fix and reconfiguration', project: 'LA Avenue 34 G', projectIcon: 'zap', projectColor: '#FF4444', dueDate: 'Feb 25 – Jan 2', priority: 'high', owner: 'Chelsea Smith', assignees: [] },
  
  // 2 item berikutnya: 1 assignee
  { id: 3, title: 'Fix the squeaky door hinge', project: 'LA Avenue 37 D', projectIcon: 'helmet', projectColor: '#138EFF', dueDate: 'Due Feb 24', priority: 'low', owner: 'Logan Smith', assignees: ['Melissa Monroe'] },
  { id: 4, title: 'Replace light bulbs', project: 'LA Avenue 34 G', projectIcon: 'zap', projectColor: '#FF4444', dueDate: 'Due Date', priority: 'low', owner: 'Chelsea Smith', assignees: ['Theresa Webb'] },
  
  // 2 item berikutnya: 3 assignee
  { id: 5, title: 'Unclog the bathroom drain', project: '11 N Raintree Hollow Court', projectIcon: 'helmet', projectColor: '#A620B2', dueDate: 'Due Feb 22', priority: 'medium', owner: 'Alexander Oliver', assignees: ['Robert Fox', 'Jenny Wilson', 'Wade Warren'] },
  { id: 6, title: 'Clean the gutters', project: 'LA Avenue 37 D', projectIcon: 'helmet', projectColor: '#138EFF', dueDate: 'Due Feb 19', isOverdue: true, priority: 'high', owner: 'Logan Smith', assignees: ['Melissa Monroe', 'Theresa Webb', 'Esther Howard'] },
  
  // 2 item berikutnya: 4 assignee
  { id: 7, title: 'Service the air conditioner', project: 'LA Avenue 34 G', projectIcon: 'zap', projectColor: '#FF4444', dueDate: 'Due Date', priority: 'medium', owner: 'Chelsea Smith', assignees: ['Robert Fox', 'Jenny Wilson', 'Wade Warren', 'Esther Howard'] },
  { id: 8, title: 'Patch drywall holes', project: 'LA Avenue 37 D', projectIcon: 'helmet', projectColor: '#138EFF', dueDate: 'Due Feb 22', priority: 'low', owner: 'Logan Smith', assignees: ['Melissa Monroe', 'Theresa Webb', 'Robert Fox', 'Jenny Wilson'] },
  
  // Sisanya: lebih dari 4 assignee
  { id: 9, title: 'Clean the gutters V1', project: '11 N Raintree Hollow Court', projectIcon: 'helmet', projectColor: '#A620B2', dueDate: 'Due Feb 19', isOverdue: true, priority: 'high', owner: 'Alexander Oliver', assignees: ['Melissa Monroe', 'Theresa Webb', 'Robert Fox', 'Jenny Wilson', 'Wade Warren'] },
  { id: 10, title: 'Clean the gutters V2', project: '11 N Raintree Hollow Court', projectIcon: 'helmet', projectColor: '#A620B2', dueDate: 'Due Feb 19', isOverdue: true, priority: 'medium', owner: 'Alexander Oliver', assignees: ['Esther Howard', 'Melissa Monroe', 'Theresa Webb', 'Robert Fox', 'Jenny Wilson'] },
  { id: 11, title: 'Inspect roof for leaks', project: 'LA Avenue 34 G', projectIcon: 'zap', projectColor: '#FF4444', dueDate: 'Due Feb 28', priority: 'high', owner: 'Chelsea Smith', assignees: ['Wade Warren', 'Esther Howard', 'Melissa Monroe', 'Theresa Webb', 'Robert Fox'] },
  { id: 12, title: 'Replace HVAC filters', project: 'LA Avenue 37 D', projectIcon: 'helmet', projectColor: '#138EFF', dueDate: 'Due Feb 30', priority: 'medium', owner: 'Logan Smith', assignees: ['Jenny Wilson', 'Wade Warren', 'Esther Howard', 'Melissa Monroe', 'Theresa Webb'] },
  { id: 13, title: 'Fix broken window latch', project: '11 N Raintree Hollow Court', projectIcon: 'helmet', projectColor: '#A620B2', dueDate: 'Due Feb 26', priority: 'low', owner: 'Alexander Oliver', assignees: ['Robert Fox', 'Jenny Wilson', 'Wade Warren', 'Esther Howard', 'Melissa Monroe'] },
  { id: 14, title: 'Repair garage door opener', project: 'LA Avenue 34 G', projectIcon: 'zap', projectColor: '#FF4444', dueDate: 'Due Date', priority: 'high', owner: 'Chelsea Smith', assignees: ['Theresa Webb', 'Robert Fox', 'Jenny Wilson', 'Wade Warren', 'Esther Howard'] },
  { id: 15, title: 'Install new smoke detectors', project: 'LA Avenue 37 D', projectIcon: 'helmet', projectColor: '#138EFF', dueDate: 'Due Feb 31', priority: 'high', owner: 'Logan Smith', assignees: ['Melissa Monroe', 'Theresa Webb', 'Robert Fox', 'Jenny Wilson', 'Wade Warren'] },
  { id: 16, title: 'Fix loose handrail', project: '11 N Raintree Hollow Court', projectIcon: 'helmet', projectColor: '#A620B2', dueDate: 'Due Feb 23', priority: 'medium', owner: 'Alexander Oliver', assignees: ['Esther Howard', 'Melissa Monroe', 'Theresa Webb', 'Robert Fox', 'Jenny Wilson'] },
  { id: 17, title: 'Replace weatherstripping', project: 'LA Avenue 34 G', projectIcon: 'zap', projectColor: '#FF4444', dueDate: 'Due Feb 27', priority: 'low', owner: 'Chelsea Smith', assignees: ['Wade Warren', 'Esther Howard', 'Melissa Monroe', 'Theresa Webb', 'Robert Fox'] },
  { id: 18, title: 'Clean furnace vents', project: 'LA Avenue 37 D', projectIcon: 'helmet', projectColor: '#138EFF', dueDate: 'Due Date', priority: 'medium', owner: 'Logan Smith', assignees: ['Jenny Wilson', 'Wade Warren', 'Esther Howard', 'Melissa Monroe', 'Theresa Webb'] },
  { id: 19, title: 'Fix leaky outdoor faucet', project: '11 N Raintree Hollow Court', projectIcon: 'helmet', projectColor: '#A620B2', dueDate: 'Due Feb 21', priority: 'high', owner: 'Alexander Oliver', assignees: ['Robert Fox', 'Jenny Wilson', 'Wade Warren', 'Esther Howard', 'Melissa Monroe'] },
  { id: 20, title: 'Seal basement cracks', project: 'LA Avenue 34 G', projectIcon: 'zap', projectColor: '#FF4444', dueDate: 'Due Feb 29', priority: 'medium', owner: 'Chelsea Smith', assignees: ['Theresa Webb', 'Robert Fox', 'Jenny Wilson', 'Wade Warren', 'Esther Howard'] },
  { id: 21, title: 'Replace water heater', project: 'LA Avenue 37 D', projectIcon: 'helmet', projectColor: '#138EFF', dueDate: 'Due Jan 2', priority: 'high', owner: 'Logan Smith', assignees: ['Melissa Monroe', 'Theresa Webb', 'Robert Fox', 'Jenny Wilson', 'Wade Warren'] },
  { id: 22, title: 'Install ceiling fan', project: '11 N Raintree Hollow Court', projectIcon: 'helmet', projectColor: '#A620B2', dueDate: 'Due Jan 3', priority: 'low', owner: 'Alexander Oliver', assignees: ['Esther Howard', 'Melissa Monroe', 'Theresa Webb', 'Robert Fox', 'Jenny Wilson'] },
  { id: 23, title: 'Repair attic insulation', project: 'LA Avenue 34 G', projectIcon: 'zap', projectColor: '#FF4444', dueDate: 'Due Jan 4', priority: 'medium', owner: 'Chelsea Smith', assignees: ['Wade Warren', 'Esther Howard', 'Melissa Monroe', 'Theresa Webb', 'Robert Fox'] },
  { id: 24, title: 'Fix sliding glass door', project: 'LA Avenue 37 D', projectIcon: 'helmet', projectColor: '#138EFF', dueDate: 'Due Jan 6', priority: 'high', owner: 'Logan Smith', assignees: ['Jenny Wilson', 'Wade Warren', 'Esther Howard', 'Melissa Monroe', 'Theresa Webb'] },
  { id: 25, title: 'Replace bathroom tiles', project: '11 N Raintree Hollow Court', projectIcon: 'helmet', projectColor: '#A620B2', dueDate: 'Due Jan 7', priority: 'low', owner: 'Alexander Oliver', assignees: ['Robert Fox', 'Jenny Wilson', 'Wade Warren', 'Esther Howard', 'Melissa Monroe'] },
  { id: 26, title: 'Install new carpeting', project: 'LA Avenue 34 G', projectIcon: 'zap', projectColor: '#FF4444', dueDate: 'Due Jan 8', priority: 'medium', owner: 'Chelsea Smith', assignees: ['Theresa Webb', 'Robert Fox', 'Jenny Wilson', 'Wade Warren', 'Esther Howard'] },
  { id: 27, title: 'Repair chimney flashing', project: 'LA Avenue 37 D', projectIcon: 'helmet', projectColor: '#138EFF', dueDate: 'Due Jan 9', priority: 'high', owner: 'Logan Smith', assignees: ['Melissa Monroe', 'Theresa Webb', 'Robert Fox', 'Jenny Wilson', 'Wade Warren'] },
  { id: 28, title: 'Replace kitchen countertops', project: '11 N Raintree Hollow Court', projectIcon: 'helmet', projectColor: '#A620B2', dueDate: 'Due Jan 10', priority: 'medium', owner: 'Alexander Oliver', assignees: ['Esther Howard', 'Melissa Monroe', 'Theresa Webb', 'Robert Fox', 'Jenny Wilson'] },
  { id: 29, title: 'Install new blinds', project: 'LA Avenue 34 G', projectIcon: 'zap', projectColor: '#FF4444', dueDate: 'Due Jan 11', priority: 'low', owner: 'Chelsea Smith', assignees: ['Wade Warren', 'Esther Howard', 'Melissa Monroe', 'Theresa Webb', 'Robert Fox'] },
  { id: 30, title: 'Repair foundation cracks', project: 'LA Avenue 37 D', projectIcon: 'helmet', projectColor: '#138EFF', dueDate: 'Due Jan 12', priority: 'high', owner: 'Logan Smith', assignees: ['Jenny Wilson', 'Wade Warren', 'Esther Howard', 'Melissa Monroe', 'Theresa Webb'] },
  { id: 31, title: 'Fix cabinet hinges', project: '11 N Raintree Hollow Court', projectIcon: 'helmet', projectColor: '#A620B2', dueDate: 'Due Jan 13', priority: 'low', owner: 'Alexander Oliver', assignees: ['Robert Fox', 'Jenny Wilson', 'Wade Warren', 'Esther Howard', 'Melissa Monroe'] },
  { id: 32, title: 'Replace doorbell chime', project: 'LA Avenue 34 G', projectIcon: 'zap', projectColor: '#FF4444', dueDate: 'Due Jan 14', priority: 'medium', owner: 'Chelsea Smith', assignees: ['Theresa Webb', 'Robert Fox', 'Jenny Wilson', 'Wade Warren', 'Esther Howard'] },
  { id: 33, title: 'Repair window screens', project: 'LA Avenue 37 D', projectIcon: 'helmet', projectColor: '#138EFF', dueDate: 'Due Jan 15', priority: 'low', owner: 'Logan Smith', assignees: ['Melissa Monroe', 'Theresa Webb', 'Robert Fox', 'Jenny Wilson', 'Wade Warren'] },
  { id: 34, title: 'Install new towel racks', project: '11 N Raintree Hollow Court', projectIcon: 'helmet', projectColor: '#A620B2', dueDate: 'Due Jan 16', priority: 'high', owner: 'Alexander Oliver', assignees: ['Esther Howard', 'Melissa Monroe', 'Theresa Webb', 'Robert Fox', 'Jenny Wilson'] },
  { id: 35, title: 'Fix closet door track', project: 'LA Avenue 34 G', projectIcon: 'zap', projectColor: '#FF4444', dueDate: 'Due Jan 17', priority: 'medium', owner: 'Chelsea Smith', assignees: ['Wade Warren', 'Esther Howard', 'Melissa Monroe', 'Theresa Webb', 'Robert Fox'] },
  { id: 36, title: 'Replace outlet covers', project: 'LA Avenue 37 D', projectIcon: 'helmet', projectColor: '#138EFF', dueDate: 'Due Jan 18', priority: 'low', owner: 'Logan Smith', assignees: ['Jenny Wilson', 'Wade Warren', 'Esther Howard', 'Melissa Monroe', 'Theresa Webb'] },
  { id: 37, title: 'Repair patio door lock', project: '11 N Raintree Hollow Court', projectIcon: 'helmet', projectColor: '#A620B2', dueDate: 'Due Jan 19', priority: 'high', owner: 'Alexander Oliver', assignees: ['Robert Fox', 'Jenny Wilson', 'Wade Warren', 'Esther Howard', 'Melissa Monroe'] },
  { id: 38, title: 'Install new door knocker', project: 'LA Avenue 34 G', projectIcon: 'zap', projectColor: '#FF4444', dueDate: 'Due Jan 20', priority: 'low', owner: 'Chelsea Smith', assignees: ['Theresa Webb', 'Robert Fox', 'Jenny Wilson', 'Wade Warren', 'Esther Howard'] },
  { id: 39, title: 'Fix loose floorboards', project: 'LA Avenue 37 D', projectIcon: 'helmet', projectColor: '#138EFF', dueDate: 'Due Jan 21', priority: 'medium', owner: 'Logan Smith', assignees: ['Melissa Monroe', 'Theresa Webb', 'Robert Fox', 'Jenny Wilson', 'Wade Warren'] },
  { id: 40, title: 'Replace stair treads', project: '11 N Raintree Hollow Court', projectIcon: 'helmet', projectColor: '#A620B2', dueDate: 'Due Jan 22', priority: 'high', owner: 'Alexander Oliver', assignees: ['Esther Howard', 'Melissa Monroe', 'Theresa Webb', 'Robert Fox', 'Jenny Wilson'] },
];

const initialCompletedTasks: Task[] = [
  { id: 21, title: 'Paint living room walls', project: 'LA Avenue 37 D', projectIcon: 'helmet', projectColor: '#138EFF', dueDate: 'Due Feb 18', completed: true, priority: 'medium', owner: 'Logan Smith', assignees: ['Theresa Webb', 'Melissa Monroe'] },
  { id: 22, title: 'Replace kitchen faucet', project: '11 N Raintree Hollow Court', projectIcon: 'helmet', projectColor: '#A620B2', dueDate: 'Due Feb 17', completed: true, priority: 'high', owner: 'Alexander Oliver', assignees: ['Jenny Wilson', 'Wade Warren'] },
  { id: 23, title: 'Fix bedroom door lock', project: 'LA Avenue 34 G', projectIcon: 'zap', projectColor: '#FF4444', dueDate: 'Due Feb 16', completed: true, priority: 'low', owner: 'Chelsea Smith', assignees: ['Melissa Monroe', 'Theresa Webb'] },
  { id: 24, title: 'Install new light fixtures', project: 'LA Avenue 37 D', projectIcon: 'helmet', projectColor: '#138EFF', dueDate: 'Due Feb 15', completed: true, priority: 'medium', owner: 'Logan Smith', assignees: ['Theresa Webb', 'Robert Fox'] },
  { id: 25, title: 'Repair fence panels', project: '11 N Raintree Hollow Court', projectIcon: 'helmet', projectColor: '#A620B2', dueDate: 'Due Feb 14', completed: true, priority: 'high', owner: 'Alexander Oliver', assignees: ['Esther Howard', 'Jenny Wilson'] },
  { id: 26, title: 'Clean out rain gutters', project: 'LA Avenue 34 G', projectIcon: 'zap', projectColor: '#FF4444', dueDate: 'Due Feb 13', completed: true, priority: 'low', owner: 'Chelsea Smith', assignees: ['Wade Warren', 'Theresa Webb'] },
  { id: 27, title: 'Replace thermostat batteries', project: 'LA Avenue 37 D', projectIcon: 'helmet', projectColor: '#138EFF', dueDate: 'Due Feb 12', completed: true, priority: 'medium', owner: 'Logan Smith', assignees: ['Melissa Monroe', 'Theresa Webb'] },
  { id: 28, title: 'Fix squeaky floorboards', project: '11 N Raintree Hollow Court', projectIcon: 'helmet', projectColor: '#A620B2', dueDate: 'Due Feb 11', completed: true, priority: 'low', owner: 'Alexander Oliver', assignees: ['Robert Fox', 'Esther Howard'] },
  { id: 29, title: 'Clean dryer vent', project: 'LA Avenue 34 G', projectIcon: 'zap', projectColor: '#FF4444', dueDate: 'Due Feb 10', completed: true, priority: 'high', owner: 'Chelsea Smith', assignees: ['Jenny Wilson', 'Melissa Monroe'] },
  { id: 30, title: 'Touch up exterior paint', project: 'LA Avenue 37 D', projectIcon: 'helmet', projectColor: '#138EFF', dueDate: 'Due Feb 9', completed: true, priority: 'medium', owner: 'Logan Smith', assignees: ['Theresa Webb', 'Robert Fox'] },
  { id: 31, title: 'Replace mailbox post', project: '11 N Raintree Hollow Court', projectIcon: 'helmet', projectColor: '#A620B2', dueDate: 'Due Feb 8', completed: true, priority: 'low', owner: 'Alexander Oliver', assignees: ['Melissa Monroe', 'Wade Warren'] },
  { id: 32, title: 'Install new doorbell', project: 'LA Avenue 34 G', projectIcon: 'zap', projectColor: '#FF4444', dueDate: 'Due Feb 7', completed: true, priority: 'high', owner: 'Chelsea Smith', assignees: ['Esther Howard', 'Jenny Wilson'] },
  { id: 33, title: 'Organize garage storage', project: 'LA Avenue 37 D', projectIcon: 'helmet', projectColor: '#138EFF', dueDate: 'Due Feb 6', completed: true, priority: 'medium', owner: 'Logan Smith', assignees: ['Theresa Webb', 'Melissa Monroe'] },
  { id: 34, title: 'Trim hedges and bushes', project: '11 N Raintree Hollow Court', projectIcon: 'helmet', projectColor: '#A620B2', dueDate: 'Due Feb 5', completed: true, priority: 'low', owner: 'Alexander Oliver', assignees: ['Melissa Monroe', 'Robert Fox'] },
  { id: 35, title: 'Repair deck railing', project: 'LA Avenue 34 G', projectIcon: 'zap', projectColor: '#FF4444', dueDate: 'Due Feb 4', completed: true, priority: 'high', owner: 'Chelsea Smith', assignees: ['Wade Warren', 'Theresa Webb'] },
  { id: 36, title: 'Install shelf brackets', project: 'LA Avenue 37 D', projectIcon: 'helmet', projectColor: '#138EFF', dueDate: 'Due Feb 3', completed: true, priority: 'medium', owner: 'Logan Smith', assignees: ['Theresa Webb', 'Robert Fox'] },
  { id: 37, title: 'Replace shower head', project: '11 N Raintree Hollow Court', projectIcon: 'helmet', projectColor: '#A620B2', dueDate: 'Due Feb 2', completed: true, priority: 'low', owner: 'Alexander Oliver', assignees: ['Melissa Monroe', 'Esther Howard'] },
];

export function TaskApp({ onViewChange }: TaskAppProps) {
  const [currentTasks, setCurrentTasks] = useState<Task[]>(initialCurrentTasks);
  const [completedTasks, setCompletedTasks] = useState<Task[]>(initialCompletedTasks);
  const [currentExpanded, setCurrentExpanded] = useState(true);
  const [completedExpanded, setCompletedExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState('tasks');
  const [animatingTaskId, setAnimatingTaskId] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState('');
  const [isSearchLoading, setIsSearchLoading] = useState(false);
  const [searchTab, setSearchTab] = useState('tasks');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [displayedCount, setDisplayedCount] = useState(20);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState<number | null>(null);
  const [selectedTaskCurrentDate, setSelectedTaskCurrentDate] = useState<string>('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState<SortOption | null>(null);
  const [viewingTaskId, setViewingTaskId] = useState<number | null>(null);

  // Handle sort change - accept null for clearing
  const handleSortChange = useCallback((sort: SortOption | null) => {
    setSelectedSort(sort);
  }, []);

  // Active filters state
  const [activeFilters, setActiveFilters] = useState<{
    projects: string[];
    dueDate: 'today' | 'tomorrow' | 'next3days' | 'custom' | null;
    dateRange: { start: Date | null; end: Date | null };
    priority: ('high' | 'medium' | 'low')[];
    assignee: string[];
  }>({
    projects: [],
    dueDate: null,
    dateRange: { start: null, end: null },
    priority: [],
    assignee: [],
  });

  // Get unique projects from all tasks - memoized to prevent unnecessary re-renders
  // IMPORTANT: Do not sort! FilterSheet uses indices, so order must be consistent
  const uniqueProjects = useMemo(() => {
    const seenProjects = new Set<string>();
    const projects: { name: string; icon: string; color: string }[] = [];
    
    // Process in order of appearance to maintain consistent indices
    [...initialCurrentTasks, ...initialCompletedTasks].forEach(task => {
      if (!seenProjects.has(task.project)) {
        seenProjects.add(task.project);
        projects.push({
          name: task.project,
          icon: task.projectIcon,
          color: task.projectColor
        });
      }
    });
    
    return projects;
  }, []); // Empty dependency - projects don't change dynamically

  // Parse date string to Date object for comparison
  const parseDateString = (dateStr: string): Date | null => {
    if (dateStr === 'Due Date') return null;
    
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const parts = dateStr.split(' ');
    
    if (parts.length === 2) {
      // Format: "Dec 25"
      const monthIndex = monthNames.indexOf(parts[0]);
      const day = parseInt(parts[1]);
      const year = new Date().getFullYear();
      if (monthIndex !== -1 && !isNaN(day)) {
        return new Date(year, monthIndex, day);
      }
    } else if (parts.length === 3) {
      // Format: "Jan 5, 2026"
      const monthIndex = monthNames.indexOf(parts[0]);
      const day = parseInt(parts[1].replace(',', ''));
      const year = parseInt(parts[2]);
      if (monthIndex !== -1 && !isNaN(day) && !isNaN(year)) {
        return new Date(year, monthIndex, day);
      }
    }
    
    return null;
  };

  // Apply advanced filters
  const applyAdvancedFilters = (tasks: Task[]) => {
    let filtered = tasks;

    // Filter by projects
    if (activeFilters.projects.length > 0) {
      filtered = filtered.filter(task => 
        activeFilters.projects.includes(task.project)
      );
    }

    // Filter by due date
    if (activeFilters.dueDate) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);
      
      const threeDaysLater = new Date(today);
      threeDaysLater.setDate(threeDaysLater.getDate() + 3);

      filtered = filtered.filter(task => {
        const taskDate = parseDateString(task.dueDate);
        if (!taskDate) return false;
        taskDate.setHours(0, 0, 0, 0);

        switch (activeFilters.dueDate) {
          case 'today':
            return taskDate.getTime() === today.getTime();
          case 'tomorrow':
            return taskDate.getTime() === tomorrow.getTime();
          case 'next3days':
            return taskDate >= today && taskDate <= threeDaysLater;
          case 'custom':
            const { start, end } = activeFilters.dateRange;
            if (start && end) {
              const startDate = new Date(start);
              startDate.setHours(0, 0, 0, 0);
              const endDate = new Date(end);
              endDate.setHours(0, 0, 0, 0);
              return taskDate >= startDate && taskDate <= endDate;
            } else if (start) {
              const startDate = new Date(start);
              startDate.setHours(0, 0, 0, 0);
              return taskDate.getTime() === startDate.getTime();
            } else if (end) {
              const endDate = new Date(end);
              endDate.setHours(0, 0, 0, 0);
              return taskDate.getTime() === endDate.getTime();
            }
            return false;
          default:
            return true;
        }
      });
    }

    // Filter by priority (if tasks have priority)
    if (activeFilters.priority.length > 0) {
      filtered = filtered.filter(task => 
        task.priority && activeFilters.priority.includes(task.priority)
      );
    }

    // Filter by assignee (if tasks have assignee)
    if (activeFilters.assignee.length > 0) {
      filtered = filtered.filter(task => 
        task.assignees && task.assignees.some(assignee => activeFilters.assignee.includes(assignee))
      );
    }

    return filtered;
  };

  // Filter tasks based on search query and advanced filters
  const filterTasks = (tasks: Task[]) => {
    let filtered = tasks;

    // Apply search filter
    if (debouncedSearchQuery.trim()) {
      const query = debouncedSearchQuery.toLowerCase();
      filtered = filtered.filter(task => 
        task.title.toLowerCase().includes(query) ||
        task.project.toLowerCase().includes(query)
      );
    }

    // Apply advanced filters
    filtered = applyAdvancedFilters(filtered);

    return filtered;
  };

  // Apply sorting to tasks
  const applySorting = (tasks: Task[]) => {
    if (!selectedSort) return tasks;

    const sorted = [...tasks];

    switch (selectedSort.category) {
      case 'dueDate':
        sorted.sort((a, b) => {
          const dateA = parseDateString(a.dueDate);
          const dateB = parseDateString(b.dueDate);
          
          // Handle null dates (put them at the end)
          if (!dateA && !dateB) return 0;
          if (!dateA) return 1;
          if (!dateB) return -1;
          
          const comparison = dateA.getTime() - dateB.getTime();
          return selectedSort.value === 'soonest' ? comparison : -comparison;
        });
        break;

      case 'priority':
        const priorityOrder = { high: 3, medium: 2, low: 1 };
        sorted.sort((a, b) => {
          const priorityA = priorityOrder[a.priority];
          const priorityB = priorityOrder[b.priority];
          const comparison = priorityA - priorityB;
          return selectedSort.value === 'lowToHigh' ? comparison : -comparison;
        });
        break;

      case 'lastUpdated':
        sorted.sort((a, b) => {
          // Generate mock lastUpdated based on task id for demo
          const lastUpdatedA = a.lastUpdated || new Date(2024, 11, 23 - (a.id % 20));
          const lastUpdatedB = b.lastUpdated || new Date(2024, 11, 23 - (b.id % 20));
          const comparison = lastUpdatedA.getTime() - lastUpdatedB.getTime();
          return selectedSort.value === 'newest' ? -comparison : comparison;
        });
        break;

      case 'createdDate':
        sorted.sort((a, b) => {
          // Generate mock createdDate based on task id for demo
          const createdA = a.createdDate || new Date(2024, 11, 1 + (a.id % 22));
          const createdB = b.createdDate || new Date(2024, 11, 1 + (b.id % 22));
          const comparison = createdA.getTime() - createdB.getTime();
          return selectedSort.value === 'newest' ? -comparison : comparison;
        });
        break;
    }

    return sorted;
  };

  // Apply filtering and sorting  
  const processedCurrentTasks = applySorting(filterTasks(currentTasks));
  const processedCompletedTasks = applySorting(filterTasks(completedTasks));

  const filteredCurrentTasks = processedCurrentTasks.slice(0, displayedCount);
  const filteredCompletedTasks = processedCompletedTasks;
  const hasMore = displayedCount < processedCurrentTasks.length;
  
  // Count for display - use the actual filtered/processed count
  const filteredCurrentCount = processedCurrentTasks.length;
  const filteredCompletedCount = processedCompletedTasks.length;
  const totalCurrentTasks = currentTasks.length;

  // Scroll event handler for load more
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = scrollContainer;
      const scrollPercentage = (scrollTop + clientHeight) / scrollHeight;
      
      // Load more when scrolled 80% down
      if (scrollPercentage > 0.8 && hasMore && !isLoadingMore && !searchQuery.trim()) {
        setIsLoadingMore(true);
        setTimeout(() => {
          setDisplayedCount(prev => Math.min(prev + 10, initialCurrentTasks.length));
          setIsLoadingMore(false);
        }, 800);
      }
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, [hasMore, isLoadingMore, searchQuery]);

  const handleToggleTask = (taskId: number, isCompleted: boolean) => {
    console.log('[TaskApp] handleToggleTask called:', { taskId, isCompleted });
    
    setAnimatingTaskId(taskId);
    setTimeout(() => {
      if (isCompleted) {
        // Move from completed to current
        const task = completedTasks.find(t => t.id === taskId);
        console.log('[TaskApp] Moving from completed to current:', task);
        
        if (task) {
          const updatedTask = { ...task, completed: false };
          setCurrentTasks(current => [updatedTask, ...current]);
          setCompletedTasks(prev => prev.filter(t => t.id !== taskId));
        }
      } else {
        // Move from current to completed
        const task = currentTasks.find(t => t.id === taskId);
        console.log('[TaskApp] Moving from current to completed:', task);
        
        if (task) {
          const updatedTask = { ...task, completed: true };
          setCompletedTasks(completed => [updatedTask, ...completed]);
          setCurrentTasks(prev => prev.filter(t => t.id !== taskId));
          
          // Show "Task completed" toast
          toast("Task completed");
        }
      }
      setAnimatingTaskId(null);
    }, 300);
  };

  const handleDueDateClick = (taskId: number, currentDate: string) => {
    setSelectedTaskId(taskId);
    setSelectedTaskCurrentDate(currentDate);
    setIsDatePickerOpen(true);
  };

  const handleDateSelect = (date: Date | null) => {
    if (!selectedTaskId) return;

    // If date is null, set back to "Due Date"
    if (!date) {
      // Update the task to "Due Date" and remove isOverdue flag
      setCurrentTasks(prev => 
        prev.map(task => 
          task.id === selectedTaskId ? { ...task, dueDate: 'Due Date', isOverdue: false } : task
        )
      );

      setCompletedTasks(prev => 
        prev.map(task => 
          task.id === selectedTaskId ? { ...task, dueDate: 'Due Date', isOverdue: false } : task
        )
      );

      // Show toast
      toast("Date updated");
      return;
    }

    const monthNames = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    const formattedDate = `Due ${monthNames[date.getMonth()]} ${date.getDate()}${date.getFullYear() !== new Date().getFullYear() ? ', ' + date.getFullYear() : ''}`;

    // Check if date is overdue (before today)
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const selectedDate = new Date(date);
    selectedDate.setHours(0, 0, 0, 0);
    const isOverdue = selectedDate < today;

    // Check if this is first time setting date or updating
    const isFirstTimeSet = selectedTaskCurrentDate === 'Due Date';

    // Update the task in currentTasks or completedTasks
    setCurrentTasks(prev => 
      prev.map(task => 
        task.id === selectedTaskId ? { ...task, dueDate: formattedDate, isOverdue } : task
      )
    );

    setCompletedTasks(prev => 
      prev.map(task => 
        task.id === selectedTaskId ? { ...task, dueDate: formattedDate, isOverdue } : task
      )
    );

    // Show appropriate toast
    toast(isFirstTimeSet ? 'Due date set' : 'Due date updated');

    setSelectedTaskId(null);
  };

  const handleApplyFilters = useCallback((filters: {
    projects: string[];
    dueDate: 'today' | 'tomorrow' | 'next3days' | 'custom' | null;
    dateRange: { start: Date | null; end: Date | null };
    priority: ('high' | 'medium' | 'low')[];
    assignee: string[];
  }) => {
    console.log('[TaskApp] handleApplyFilters called with:', filters);
    setActiveFilters(filters);
  }, []);

  const handleCancelSearch = () => {
    setSearchQuery('');
  };

  // Check if any filter is active
  const hasActiveFilters = 
    activeFilters.projects.length > 0 ||
    activeFilters.dueDate !== null ||
    activeFilters.priority.length > 0 ||
    activeFilters.assignee.length > 0;

  // Check if sort is active
  const hasActiveSorts = selectedSort !== null;

  // Check if search has value (for hiding elements)
  const isSearching = searchQuery.trim().length > 0;

  // Debounce search query
  useEffect(() => {
    if (searchQuery.trim()) {
      setIsSearchLoading(true);
      // Auto-expand completed section when searching
      setCompletedExpanded(true);
      const handler = setTimeout(() => {
        setDebouncedSearchQuery(searchQuery);
        setIsSearchLoading(false);
      }, 500);

      return () => clearTimeout(handler);
    } else {
      setDebouncedSearchQuery('');
      setIsSearchLoading(false);
    }
  }, [searchQuery]);

  const handleTaskClick = (taskId: number) => {
    setViewingTaskId(taskId);
    if (onViewChange) onViewChange(true);
  };

  const handleBackFromDetail = () => {
    setViewingTaskId(null);
    if (onViewChange) onViewChange(false);
  };

  const handleMoveCurrentTask = useCallback((dragIndex: number, hoverIndex: number) => {
    setCurrentTasks((prevTasks) => {
      // Only update if indices are valid and different
      if (dragIndex === hoverIndex || dragIndex >= prevTasks.length || hoverIndex >= prevTasks.length) {
        return prevTasks;
      }
      
      const newTasks = [...prevTasks];
      const draggedTask = newTasks[dragIndex];
      newTasks.splice(dragIndex, 1);
      newTasks.splice(hoverIndex, 0, draggedTask);
      return newTasks;
    });
    toast("Order changed");
  }, []);

  const handleMoveCompletedTask = useCallback((dragIndex: number, hoverIndex: number) => {
    setCompletedTasks((prevTasks) => {
      // Only update if indices are valid and different
      if (dragIndex === hoverIndex || dragIndex >= prevTasks.length || hoverIndex >= prevTasks.length) {
        return prevTasks;
      }
      
      const newTasks = [...prevTasks];
      const draggedTask = newTasks[dragIndex];
      newTasks.splice(dragIndex, 1);
      newTasks.splice(hoverIndex, 0, draggedTask);
      return newTasks;
    });
    toast("Order changed");
  }, []);

  // Get viewing task
  const viewingTask = viewingTaskId 
    ? [...currentTasks, ...completedTasks].find(t => t.id === viewingTaskId)
    : null;

  // Handle task update from detail page
  const handleUpdateTask = useCallback((updatedTask: Task) => {
    // Update in current tasks
    setCurrentTasks(prev => 
      prev.map(t => t.id === updatedTask.id ? updatedTask : t)
    );
    
    // Update in completed tasks
    setCompletedTasks(prev => 
      prev.map(t => t.id === updatedTask.id ? updatedTask : t)
    );
  }, []);

  // Handle task delete from detail page
  const handleDeleteTask = useCallback((taskId: number) => {
    // Remove from current tasks
    setCurrentTasks(prev => prev.filter(t => t.id !== taskId));
    
    // Remove from completed tasks
    setCompletedTasks(prev => prev.filter(t => t.id !== taskId));
  }, []);

  // If viewing task detail, show detail page
  if (viewingTask) {
    return <TaskDetailPage task={viewingTask} onBack={handleBackFromDetail} onUpdateTask={handleUpdateTask} onDeleteTask={handleDeleteTask} />;
  }

  return (
    <div className="h-full flex flex-col bg-white overflow-hidden relative">
      <StatusBar />
      {!isSearching && <Header avatarSrc={imgUnsplash} />}
      <SearchBar 
        value={searchQuery} 
        onChange={setSearchQuery} 
        onFilterClick={() => setIsFilterOpen(true)}
        onSortClick={() => setIsSortOpen(true)}
        hasActiveFilters={hasActiveFilters}
        hasActiveSorts={hasActiveSorts}
      />
      
      {isSearching && <SearchTabs activeTab={searchTab} onTabChange={setSearchTab} />}
      
      <div className="h-px bg-border" />
      
      <div ref={scrollContainerRef} className="flex-1 overflow-y-auto custom-scrollbar">
        {isSearchLoading ? (
          <SearchLoadingSpinner />
        ) : (
          <>
            <div id="current-section">
              <TaskSection
                title="Current"
                count={filteredCurrentCount}
                tasks={filteredCurrentTasks}
                expanded={currentExpanded}
                onToggle={() => setCurrentExpanded(!currentExpanded)}
                onTaskToggle={handleToggleTask}
                animatingTaskId={animatingTaskId}
                searchQuery={searchQuery}
                onDueDateClick={handleDueDateClick}
                onTaskClick={handleTaskClick}
                onMoveTask={handleMoveCurrentTask}
              />
              {isLoadingMore && <LoadMoreSpinner />}
            </div>
            
            <div id="completed-section">
              <TaskSection
                title="Completed"
                tasks={filteredCompletedTasks}
                expanded={completedExpanded}
                onToggle={() => setCompletedExpanded(!completedExpanded)}
                onTaskToggle={handleToggleTask}
                animatingTaskId={animatingTaskId}
                searchQuery={searchQuery}
                onDueDateClick={handleDueDateClick}
                onTaskClick={handleTaskClick}
                onMoveTask={handleMoveCompletedTask}
              />
            </div>
          </>
        )}
      </div>

      {!isSearching && <FAB />}
      {!isSearching && <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />}
      <HomeBar />
      <DatePickerSheet
        isOpen={isDatePickerOpen}
        onClose={() => setIsDatePickerOpen(false)}
        currentDate={selectedTaskCurrentDate}
        onDateSelect={handleDateSelect}
      />
      <FilterSheet 
        isOpen={isFilterOpen} 
        onClose={() => setIsFilterOpen(false)} 
        onReopen={() => setIsFilterOpen(true)}
        projects={uniqueProjects} 
        onApplyFilters={handleApplyFilters}
      />
      <SortSheet
        isOpen={isSortOpen}
        onClose={() => setIsSortOpen(false)}
        currentSort={selectedSort}
        onSortChange={handleSortChange}
      />
    </div>
  );
}
