import { useState, useRef, useEffect, useCallback } from 'react';
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
import { MobileFrame } from './MobileFrame';
import { toast, Toaster } from 'sonner';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import { TASK_PANEL_OWNER } from '../../data/userData';

// Use TouchBackend for mobile, HTML5Backend for desktop
const Backend = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  ? TouchBackend
  : HTML5Backend;

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

// Initial task data
const initialCurrentTasks: Task[] = [
  { id: 1, title: 'Fix the sink', project: '11 N Raintree Hollow Court', projectIcon: 'helmet', projectColor: '#A620B2', dueDate: 'Jan 25 – Feb 2', priority: 'high', owner: 'Alexander Oliver', assignees: [] },
  { id: 2, title: 'Electricity board fix and reconfiguration', project: 'LA Avenue 34 G', projectIcon: 'zap', projectColor: '#FF4444', dueDate: 'Feb 25 – Jan 2', priority: 'high', owner: 'Chelsea Smith', assignees: [] },
  { id: 3, title: 'Fix the squeaky door hinge', project: 'LA Avenue 37 D', projectIcon: 'helmet', projectColor: '#138EFF', dueDate: 'Due Feb 24', priority: 'low', owner: 'Logan Smith', assignees: ['Melissa Monroe'] },
  { id: 4, title: 'Replace light bulbs', project: 'LA Avenue 34 G', projectIcon: 'zap', projectColor: '#FF4444', dueDate: 'Due Date', priority: 'low', owner: 'Chelsea Smith', assignees: ['Theresa Webb'] },
  { id: 5, title: 'Unclog the bathroom drain', project: '11 N Raintree Hollow Court', projectIcon: 'helmet', projectColor: '#A620B2', dueDate: 'Due Feb 22', priority: 'medium', owner: 'Alexander Oliver', assignees: ['Robert Fox', 'Jenny Wilson', 'Wade Warren'] },
  { id: 6, title: 'Clean the gutters', project: 'LA Avenue 37 D', projectIcon: 'helmet', projectColor: '#138EFF', dueDate: 'Due Feb 19', isOverdue: true, priority: 'high', owner: 'Logan Smith', assignees: ['Melissa Monroe', 'Theresa Webb', 'Esther Howard'] },
  { id: 7, title: 'Service the air conditioner', project: 'LA Avenue 34 G', projectIcon: 'zap', projectColor: '#FF4444', dueDate: 'Due Date', priority: 'medium', owner: 'Chelsea Smith', assignees: ['Robert Fox', 'Jenny Wilson', 'Wade Warren', 'Esther Howard'] },
  { id: 8, title: 'Patch drywall holes', project: 'LA Avenue 37 D', projectIcon: 'helmet', projectColor: '#138EFF', dueDate: 'Due Feb 22', priority: 'low', owner: 'Logan Smith', assignees: ['Melissa Monroe', 'Theresa Webb', 'Robert Fox', 'Jenny Wilson'] },
];

const initialCompletedTasks: Task[] = [
  { id: 21, title: 'Paint living room walls', project: 'LA Avenue 37 D', projectIcon: 'helmet', projectColor: '#138EFF', dueDate: 'Due Feb 18', completed: true, priority: 'medium', owner: 'Logan Smith', assignees: ['Theresa Webb', 'Melissa Monroe'] },
  { id: 22, title: 'Replace kitchen faucet', project: '11 N Raintree Hollow Court', projectIcon: 'helmet', projectColor: '#A620B2', dueDate: 'Due Feb 17', completed: true, priority: 'high', owner: 'Alexander Oliver', assignees: ['Jenny Wilson', 'Wade Warren'] },
  { id: 23, title: 'Fix bedroom door lock', project: 'LA Avenue 34 G', projectIcon: 'zap', projectColor: '#FF4444', dueDate: 'Due Feb 16', completed: true, priority: 'low', owner: 'Chelsea Smith', assignees: ['Melissa Monroe', 'Theresa Webb'] },
];

export function MobileMyTaskPage() {
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
  
  const avatarSrc = TASK_PANEL_OWNER.avatarUrl || "";

  // Filter tasks based on search query
  const filterTasks = (tasks: Task[]) => {
    let filtered = tasks;
    if (debouncedSearchQuery.trim()) {
      const query = debouncedSearchQuery.toLowerCase();
      filtered = filtered.filter(task => 
        task.title.toLowerCase().includes(query) ||
        task.project.toLowerCase().includes(query)
      );
    }
    return filtered;
  };

  const processedCurrentTasks = filterTasks(currentTasks);
  const processedCompletedTasks = filterTasks(completedTasks);

  const filteredCurrentTasks = processedCurrentTasks.slice(0, displayedCount);
  const filteredCompletedTasks = processedCompletedTasks;
  const hasMore = displayedCount < processedCurrentTasks.length;
  
  const filteredCurrentCount = processedCurrentTasks.length;

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = scrollContainer;
      const scrollPercentage = (scrollTop + clientHeight) / scrollHeight;
      
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

  // Debounce search
  useEffect(() => {
    if (searchQuery.trim()) {
      setIsSearchLoading(true);
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

  const handleToggleTask = (taskId: number, isCompleted: boolean) => {
    setAnimatingTaskId(taskId);
    setTimeout(() => {
      if (isCompleted) {
        const task = completedTasks.find(t => t.id === taskId);
        if (task) {
          const updatedTask = { ...task, completed: false };
          setCurrentTasks(current => [updatedTask, ...current]);
          setCompletedTasks(prev => prev.filter(t => t.id !== taskId));
        }
      } else {
        const task = currentTasks.find(t => t.id === taskId);
        if (task) {
          const updatedTask = { ...task, completed: true };
          setCompletedTasks(completed => [updatedTask, ...completed]);
          setCurrentTasks(prev => prev.filter(t => t.id !== taskId));
          toast.success("Task completed");
        }
      }
      setAnimatingTaskId(null);
    }, 300);
  };

  const handleDueDateClick = (taskId: number, currentDate: string) => {
    toast.info("Date picker would open here");
  };

  const handleTaskClick = (taskId: number) => {
    toast.info(`Clicked task ${taskId}`);
  };

  const handleMoveCurrentTask = useCallback((dragIndex: number, hoverIndex: number) => {
    setCurrentTasks((prevTasks) => {
      const newTasks = [...prevTasks];
      const draggedTask = newTasks[dragIndex];
      newTasks.splice(dragIndex, 1);
      newTasks.splice(hoverIndex, 0, draggedTask);
      return newTasks;
    });
  }, []);

  const handleMoveCompletedTask = useCallback((dragIndex: number, hoverIndex: number) => {
    setCompletedTasks((prevTasks) => {
      const newTasks = [...prevTasks];
      const draggedTask = newTasks[dragIndex];
      newTasks.splice(dragIndex, 1);
      newTasks.splice(hoverIndex, 0, draggedTask);
      return newTasks;
    });
  }, []);

  const isSearching = searchQuery.trim().length > 0;

  return (
    <DndProvider backend={Backend} options={{ enableMouseEvents: true }}>
      <style>{`
        .mobile-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: var(--grey-04) transparent;
        }
        .mobile-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .mobile-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .mobile-scrollbar::-webkit-scrollbar-thumb {
          background-color: var(--grey-04);
          border-radius: 4px;
        }
      `}</style>
      <MobileFrame>
        <StatusBar />
        {!isSearching && <Header avatarSrc={avatarSrc} />}
        <SearchBar 
          value={searchQuery} 
          onChange={setSearchQuery} 
          onFilterClick={() => toast.info("Filters")}
          onSortClick={() => toast.info("Sort")}
          hasActiveFilters={false}
          hasActiveSorts={false}
        />
        
        {isSearching && <SearchTabs activeTab={searchTab} onTabChange={setSearchTab} />}
        
        <div className="h-px bg-border w-full" />
        
        <div ref={scrollContainerRef} className="flex-1 overflow-y-auto mobile-scrollbar">
          {isSearchLoading ? (
            <SearchLoadingSpinner />
          ) : (
            <div className="pb-24">
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
            </div>
          )}
        </div>

        {!isSearching && <FAB />}
        {!isSearching && <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />}
        <HomeBar />
        
        <Toaster position="bottom-center" />
      </MobileFrame>
    </DndProvider>
  );
}
