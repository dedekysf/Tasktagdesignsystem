import { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { SectionHeader } from './components/SectionHeader';
import { ColorItem } from './components/ColorItem';
import { TypographyItem } from './components/TypographyItem';
import { RadiusItem } from './components/RadiusItem';
import { ElevationItem } from './components/ElevationItem';
import { SpacingItem } from './components/SpacingItem';
import { SizeItem } from './components/SizeItem';
import { LogoItem } from './components/LogoItem';
import { Avatar } from './components/AvatarComponent';
import { AvatarGroup } from './components/AvatarGroup';
import { Button, type ButtonSize } from './components/Button';
import { TextInput } from './components/TextInput';
import { Textarea } from './components/Textarea';
import { Checkbox } from './components/Checkbox';
import { RadioButton } from './components/RadioButton';
import { Dropdown, type DropdownOption } from './components/Dropdown';
import { Datepicker } from './components/Datepicker';
import { CodeExample } from './components/CodeExample';
import { TabsContainer, TabPanel } from './components/TabsContainer';
import { Tooltip } from './components/Tooltip';
import { SuccessTooltipDemo } from './components/SuccessTooltipDemo';
import { TabItem } from './components/TabItem';
import { Modal } from './components/Modal';
import { Toast } from './components/Toast';
import { Calendar } from './components/Calendar';
import { DateRangeCalendar } from './components/DateRangeCalendar';
import { DiscardChangesModal } from './components/DiscardChangesModal';
import { PriorityDropdown } from './components/PriorityDropdown';
import { TaskSectionHeader } from './components/TaskSectionHeader';
import { ProjectSelectModal } from './components/ProjectSelectModal';
import { TaskSection } from './components/TaskSection';
import { AssigneeModal } from './pages/my-task/AssigneeModal';
import { TaskItem } from './pages/my-task/TaskItem';
import { AssignedMembersButton } from './components/AssignedMembersButton';
import { MemberRow } from './components/MemberRow';
import { ChecklistItem } from './components/ChecklistItem';
import { Toggle } from './components/Toggle';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Palette, Type, Square, Box, MousePointerClick, TextCursor, LayoutGrid, User, Users, Image, Menu, X, CheckSquare, Circle, Sparkles, ExternalLink, ChevronDown, ChevronLeft, ChevronRight, Trash2, Info, Home, Settings, Search, CircleCheckBig, Bell, CalendarDays, CalendarRange, AlertTriangle, ChevronUp as ChevronUpIcon, FolderOpen, UserPlus, List, Plus } from 'lucide-react';
import svgPaths from './imports/svg-92e1ovrkrf';
import AppIconAndroid from './imports/AppIconAndroid-43-971';
import AppIconIOs from './imports/AppIconIOs-43-942';
import TaskTagLogo from './imports/TaskTagLogo';
import Xls from './imports/Xls';
import Pdf from './imports/Pdf';
import Ppt from './imports/Ppt';
import Zip from './imports/Zip';
import Txt from './imports/Txt';
import Xml from './imports/Xml';
import Doc from './imports/Doc';
import Html from './imports/Html';
import Eps from './imports/Eps';
import teamCollaborationImage from 'figma:asset/231f46d29d335b70c14e6a1c3a239decf66583f3.png';
import MyTaskPage from './pages/MyTaskPage';
import TaskPanelPage from './pages/TaskPanelPage';
import ProjectDetailsPage from './pages/project-details/ProjectDetailsPage';
import TeamDetailPage from './pages/team-detail/TeamDetailPage';

export default function App() {
  const [activeSection, setActiveSection] = useState('colors');
  const [inputValue, setInputValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');
  const [textareaValue2, setTextareaValue2] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // Prevent window scrolling for My Task, Task Panel, Project Details, and Team Detail pages
  useEffect(() => {
    if (activeSection === 'my-task' || activeSection === 'task-panel' || activeSection === 'project-details' || activeSection === 'team-detail') {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [activeSection]);
  const [selectedRadio, setSelectedRadio] = useState('option2');
  const [selectedRadioNoLabel, setSelectedRadioNoLabel] = useState('option2');
  const [selectedDropdown, setSelectedDropdown] = useState('');

  // Tab states for each component
  const [buttonRectTab, setButtonRectTab] = useState('preview');
  const [buttonRoundTab, setButtonRoundTab] = useState('preview');
  const [buttonVariantTab, setButtonVariantTab] = useState('preview');
  const [inputTab, setInputTab] = useState('preview');
  const [textareaTab, setTextareaTab] = useState('preview');
  const [checkboxTab, setCheckboxTab] = useState('preview');
  const [checkboxBasicTab, setCheckboxBasicTab] = useState('preview');
  const [checkboxLabelTab, setCheckboxLabelTab] = useState('preview');
  const [checkboxSizeTab, setCheckboxSizeTab] = useState('preview');
  const [checkboxStatesTab, setCheckboxStatesTab] = useState('preview');
  const [radioTab, setRadioTab] = useState('preview');
  const [radioBasicTab, setRadioBasicTab] = useState('preview');
  const [radioLabelTab, setRadioLabelTab] = useState('preview');
  const [radioSizeTab, setRadioSizeTab] = useState('preview');
  const [radioStatesTab, setRadioStatesTab] = useState('preview');
  const [dropdownTab, setDropdownTab] = useState('preview');
  const [dropdownBasicTab, setDropdownBasicTab] = useState('preview');
  const [dropdownLabelTab, setDropdownLabelTab] = useState('preview');
  const [dropdownSizeTab, setDropdownSizeTab] = useState('preview');
  const [dropdownVariantTab, setDropdownVariantTab] = useState('preview');
  const [dropdownStatesTab, setDropdownStatesTab] = useState('preview');
  const [textInputBasicTab, setTextInputBasicTab] = useState('preview');
  const [dropdownWithoutLabelTab, setDropdownWithoutLabelTab] = useState('preview');
  const [dropdownWithLabelTab, setDropdownWithLabelTab] = useState('preview');
  const [dropdownRequiredTab, setDropdownRequiredTab] = useState('preview');
  const [dropdownErrorTab, setDropdownErrorTab] = useState('preview');
  const [dropdownDisabledTab, setDropdownDisabledTab] = useState('preview');
  const [inputBasicTab, setInputBasicTab] = useState('preview');
  const [inputLabelTab, setInputLabelTab] = useState('preview');
  const [inputSizeTab, setInputSizeTab] = useState('preview');
  const [inputStatesTab, setInputStatesTab] = useState('preview');
  const [textareaBasicTab, setTextareaBasicTab] = useState('preview');
  const [textareaLabelTab, setTextareaLabelTab] = useState('preview');
  const [textareaCounterTab, setTextareaCounterTab] = useState('preview');
  const [textareaSizeTab, setTextareaSizeTab] = useState('preview');
  const [textareaStatesTab, setTextareaStatesTab] = useState('preview');
  const [cardTab, setCardTab] = useState('preview');
  const [avatarIconTab, setAvatarIconTab] = useState('preview');
  const [avatarImageTab, setAvatarImageTab] = useState('preview');
  const [avatarInitialsTab, setAvatarInitialsTab] = useState('preview');
  const [avatarGroupTab, setAvatarGroupTab] = useState('preview');
  const [tooltipVariantTab, setTooltipVariantTab] = useState('preview');
  const [tooltipAvatarExamplesTab, setTooltipAvatarExamplesTab] = useState('preview');
  const [tooltipAvatarGroupTab, setTooltipAvatarGroupTab] = useState('preview');
  const [tooltipSuccessTab, setTooltipSuccessTab] = useState('preview');
  const [tabsItemTab, setTabsItemTab] = useState('preview');
  const [tabBasicMdTab, setTabBasicMdTab] = useState('preview');
  const [tabBasicSmTab, setTabBasicSmTab] = useState('preview');
  const [tabIconMdTab, setTabIconMdTab] = useState('preview');
  const [tabIconSmTab, setTabIconSmTab] = useState('preview');
  const [tabDisabledTab, setTabDisabledTab] = useState('preview');
  const [iconsTab, setIconsTab] = useState('preview');
  const [imagesTab, setImagesTab] = useState('preview');
  const [modalTwoActionTab, setModalTwoActionTab] = useState('preview');
  const [modalOneActionTab, setModalOneActionTab] = useState('preview');
  const [datepickerBasicTab, setDatepickerBasicTab] = useState('preview');
  const [datepickerLabelTab, setDatepickerLabelTab] = useState('preview');
  const [datepickerSizeTab, setDatepickerSizeTab] = useState('preview');
  const [datepickerStatesTab, setDatepickerStatesTab] = useState('preview');
  
  // New MyTask component tabs
  const [toastTab, setToastTab] = useState('preview');
  const [toastTab1, setToastTab1] = useState('preview');
  const [toastTab2, setToastTab2] = useState('preview');
  const [toastTab3, setToastTab3] = useState('preview');
  const [toastTab4, setToastTab4] = useState('preview');
  const [calendarTab, setCalendarTab] = useState('preview');
  const [dateRangeCalendarTab, setDateRangeCalendarTab] = useState('preview');
  const [discardChangesModalTab, setDiscardChangesModalTab] = useState('preview');
  const [priorityDropdownTab, setPriorityDropdownTab] = useState('preview');
  const [taskSectionHeaderTab, setTaskSectionHeaderTab] = useState('preview');
  const [projectSelectModalTab, setProjectSelectModalTab] = useState('preview');
  const [assigneeModalTab, setAssigneeModalTab] = useState('preview');
  const [taskItemTab, setTaskItemTab] = useState('preview');
  const [taskSectionTab, setTaskSectionTab] = useState('preview');
  const [assignedMembersButtonTab, setAssignedMembersButtonTab] = useState('preview');
  const [memberRowTab, setMemberRowTab] = useState('preview');
  const [checklistItemTab, setChecklistItemTab] = useState('preview');
  const [toggleTab, setToggleTab] = useState('preview');
  
  // Toggle states
  const [toggleBasic, setToggleBasic] = useState(false);
  const [toggleSm, setToggleSm] = useState(false);
  const [toggleMd, setToggleMd] = useState(true);
  const [toggleLg, setToggleLg] = useState(false);
  const [toggleChecked, setToggleChecked] = useState(true);
  const [toggleUnchecked, setToggleUnchecked] = useState(false);
  
  // Checklist items state
  const [checklistPreviewItems, setChecklistPreviewItems] = useState([
    { id: '1', text: 'Electrical Board Service Task Check Completed...', checked: true },
    { id: '2', text: 'Label all circuits clearly and accurately', checked: true },
    { id: '3', text: 'Replace damaged breakers immediately', checked: false },
    { id: '4', text: 'Test each circuit for stability', checked: false },
    { id: '5', text: 'Verify voltage performance', checked: false },
  ]);

  // Checklist functions
  const moveChecklistItem = (dragIndex: number, hoverIndex: number) => {
    setChecklistPreviewItems((prevItems) => {
      const newItems = [...prevItems];
      const dragItem = newItems[dragIndex];
      newItems.splice(dragIndex, 1);
      newItems.splice(hoverIndex, 0, dragItem);
      return newItems;
    });
  };

  const toggleChecklistItem = (id: string) => {
    setChecklistPreviewItems((prevItems) => {
      const itemIndex = prevItems.findIndex(item => item.id === id);
      const item = prevItems[itemIndex];
      const updatedItem = { ...item, checked: !item.checked };
      const newItems = prevItems.filter(i => i.id !== id);
      
      if (item.checked && !updatedItem.checked) {
        const firstIncompleteIndex = newItems.findIndex(i => !i.checked);
        if (firstIncompleteIndex !== -1) {
          newItems.splice(firstIncompleteIndex, 0, updatedItem);
        } else {
          newItems.unshift(updatedItem);
        }
      } else {
        const firstCompletedIndex = newItems.findIndex(i => i.checked);
        if (firstCompletedIndex !== -1) {
          newItems.splice(firstCompletedIndex, 0, updatedItem);
        } else {
          newItems.push(updatedItem);
        }
      }
      
      return newItems;
    });
  };

  const deleteChecklistItem = (id: string) => {
    setChecklistPreviewItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const updateChecklistItem = (id: string, newText: string) => {
    setChecklistPreviewItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, text: newText } : item
      )
    );
  };

  // Modal visibility states
  const [isTwoActionModalOpen, setIsTwoActionModalOpen] = useState(false);
  const [isOneActionModalOpen, setIsOneActionModalOpen] = useState(false);
  const [isDiscardModalOpen, setIsDiscardModalOpen] = useState(false);
  const [isProjectSelectModalOpen, setIsProjectSelectModalOpen] = useState(false);
  const [isAssigneeModalOpen, setIsAssigneeModalOpen] = useState(false);

  // Datepicker states
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedDateWithLabel, setSelectedDateWithLabel] = useState<Date | null>(null);
  
  // Calendar states
  const [calendarSelectedDate, setCalendarSelectedDate] = useState<Date | null>(null);
  const [showCalendar, setShowCalendar] = useState(false);
  
  // Date Range Calendar states
  const [dateRangeStart, setDateRangeStart] = useState<Date | null>(null);
  const [dateRangeEnd, setDateRangeEnd] = useState<Date | null>(null);
  const [showDateRangeCalendar, setShowDateRangeCalendar] = useState(false);
  
  // Priority Dropdown state
  const [showPriorityDropdown, setShowPriorityDropdown] = useState(false);
  const [selectedPriority, setSelectedPriority] = useState<"high" | "medium" | "low">("medium");
  
  // Member Row states
  const [memberRowHoveredId, setMemberRowHoveredId] = useState<string | null>(null);
  const [memberRowDropdownId, setMemberRowDropdownId] = useState<string | null>(null);
  
  // Task Section Header state
  const [isSectionExpanded, setIsSectionExpanded] = useState(true);

  // Tab Item interactive states
  const [activeTabSm, setActiveTabSm] = useState('tab1');
  const [activeTabMd, setActiveTabMd] = useState('tab1');
  const [activeTabBasicMd, setActiveTabBasicMd] = useState('tab1');
  const [activeTabBasicSm, setActiveTabBasicSm] = useState('tab1');
  const [activeTabIconMd, setActiveTabIconMd] = useState('tab1');
  const [activeTabIconSm, setActiveTabIconSm] = useState('tab1');

  // Dropdown options - 15 items to demonstrate scrolling (exceeds 10)
  const dropdownOptions: DropdownOption[] = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
    { value: 'option4', label: 'Option 4' },
    { value: 'option5', label: 'Option 5' },
    { value: 'option6', label: 'Option 6' },
    { value: 'option7', label: 'Option 7' },
    { value: 'option8', label: 'Option 8' },
    { value: 'option9', label: 'Option 9' },
    { value: 'option10', label: 'Option' },
    { value: 'option11', label: 'Option 11' },
    { value: 'option12', label: 'Option 12' },
    { value: 'option13', label: 'Option 13' },
    { value: 'option14', label: 'Option 14' },
    { value: 'option15', label: 'Option 15' },
  ];

  // Foundation Colors - 26 colors from design system
  const colorCategories = [
    {
      title: 'Brand Colors',
      colors: [
        { name: '--brand-green', cssVar: '--brand-green' },
        { name: '--secondary-green', cssVar: '--secondary-green' },
        { name: '--dark-green', cssVar: '--dark-green' }
      ]
    },
    {
      title: 'Text Colors',
      colors: [
        { name: '--text-primary', cssVar: '--text-primary' },
        { name: '--text-secondary', cssVar: '--text-secondary' }
      ]
    },
    {
      title: 'Neutrals',
      colors: [
        { name: '--white', cssVar: '--white' },
        { name: '--grey-01', cssVar: '--grey-01' },
        { name: '--grey-02', cssVar: '--grey-02' },
        { name: '--grey-03', cssVar: '--grey-03' },
        { name: '--grey-04', cssVar: '--grey-04' },
        { name: '--grey-05', cssVar: '--grey-05' },
        { name: '--grey-06', cssVar: '--grey-06' },
        { name: '--grey-07', cssVar: '--grey-07' },
        { name: '--black', cssVar: '--black' },
        { name: '--overlay', cssVar: '--overlay' }
      ]
    },
    {
      title: 'Vivid Colors',
      colors: [
        { name: '--blue', cssVar: '--blue' },
        { name: '--purple', cssVar: '--purple' },
        { name: '--light-magenta', cssVar: '--light-magenta' },
        { name: '--dark-magenta', cssVar: '--dark-magenta' },
        { name: '--orange', cssVar: '--orange' },
        { name: '--vivid-yellow', cssVar: '--vivid-yellow' },
        { name: '--alert-red', cssVar: '--alert-red' }
      ]
    },
    {
      title: 'Pastel Colors',
      colors: [
        { name: '--pastel-blue', cssVar: '--pastel-blue' },
        { name: '--pastel-purple', cssVar: '--pastel-purple' },
        { name: '--pastel-magenta', cssVar: '--pastel-magenta' },
        { name: '--pastel-orange', cssVar: '--pastel-orange' },
        { name: '--pastel-yellow', cssVar: '--pastel-yellow' },
        { name: '--bright-yellow', cssVar: '--bright-yellow' }
      ]
    },
    {
      title: 'Light Background Colors',
      colors: [
        { name: '--light-peach', cssVar: '--light-peach' },
        { name: '--light-purple', cssVar: '--light-purple' },
        { name: '--light-lavender', cssVar: '--light-lavender' },
        { name: '--light-lavender-blue', cssVar: '--light-lavender-blue' },
        { name: '--light-mint', cssVar: '--light-mint' },
        { name: '--light-sky', cssVar: '--light-sky' },
        { name: '--light-pink', cssVar: '--light-pink' },
        { name: '--light-cream', cssVar: '--light-cream' }
      ]
    }
  ];

  const typographyItems = [
    { name: '--text-h1', cssVar: '--text-h1' },
    { name: '--text-h2', cssVar: '--text-h2' },
    { name: '--text-h3', cssVar: '--text-h3' },
    { name: '--text-h4', cssVar: '--text-h4' },
    { name: '--text-base', cssVar: '--text-base' },
    { name: '--text-label', cssVar: '--text-label' },
    { name: '--text-caption', cssVar: '--text-caption' }
  ];

  const radiusItems = [
    { name: '--radius-none', cssVar: '--radius-none' },
    { name: '--radius-2', cssVar: '--radius-2' },
    { name: '--radius-4', cssVar: '--radius-4' },
    { name: '--radius-8', cssVar: '--radius-8' },
    { name: '--radius-12', cssVar: '--radius-12' },
    { name: '--radius-16', cssVar: '--radius-16' },
    { name: '--radius-20', cssVar: '--radius-20' },
    { name: '--radius-24', cssVar: '--radius-24' },
    { name: '--radius-full', cssVar: '--radius-full' },
    { name: '--radius-sm', cssVar: '--radius-sm' },
    { name: '--radius-md', cssVar: '--radius-md' },
    { name: '--radius-lg', cssVar: '--radius-lg' },
    { name: '--radius-xl', cssVar: '--radius-xl' },
    { name: '--radius-button', cssVar: '--radius-button' },
    { name: '--radius-card', cssVar: '--radius-card' }
  ];

  const elevationItems = [
    { name: '--elevation-sm', cssVar: '--elevation-sm' },
    { name: '--elevation-md', cssVar: '--elevation-md' },
    { name: '--elevation-lg', cssVar: '--elevation-lg' },
    { name: '--elevation-xl', cssVar: '--elevation-xl' }
  ];

  const spacingItems = [
    { name: '--spacing-0', cssVar: '--spacing-0' },
    { name: '--spacing-4', cssVar: '--spacing-4' },
    { name: '--spacing-8', cssVar: '--spacing-8' },
    { name: '--spacing-12', cssVar: '--spacing-12' },
    { name: '--spacing-16', cssVar: '--spacing-16' },
    { name: '--spacing-20', cssVar: '--spacing-20' },
    { name: '--spacing-24', cssVar: '--spacing-24' },
    { name: '--spacing-32', cssVar: '--spacing-32' },
    { name: '--spacing-40', cssVar: '--spacing-40' },
    { name: '--spacing-48', cssVar: '--spacing-48' },
    { name: '--spacing-56', cssVar: '--spacing-56' },
    { name: '--spacing-64', cssVar: '--spacing-64' }
  ];

  const sizeItems = [
    { name: '--size-xs', cssVar: '--size-xs' },
    { name: '--size-sm', cssVar: '--size-sm' },
    { name: '--size-md', cssVar: '--size-md' },
    { name: '--size-lg', cssVar: '--size-lg' },
    { name: '--size-xl', cssVar: '--size-xl' }
  ];

  return (
    <div className="flex h-screen bg-secondary overflow-hidden">
      {/* Mobile Header - Shows only on screens under 1080px */}
      <header className="max-[1080px]:flex hidden fixed top-0 left-0 right-0 h-16 bg-background items-center justify-center z-50 px-4" style={{ borderBottom: '1px solid var(--border)' }}>
        {/* Hamburger menu on the left */}
        <button
          className="absolute left-4 p-2 rounded-lg hover:bg-secondary transition-colors"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          aria-label="Toggle menu"
          style={{ color: 'var(--text-primary)' }}
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Logo in the middle */}
        <div className="w-[135px] h-[40px]">
          <TaskTagLogo />
        </div>
      </header>

      {/* Sidebar */}
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

      {/* Main Content */}
      <main className={`flex-1 w-full min-[1080px]:w-auto h-screen max-[1080px]:pt-16 ${activeSection === 'my-task' || activeSection === 'task-panel' || activeSection === 'project-details' || activeSection === 'team-detail' ? 'overflow-hidden' : 'overflow-y-auto'}`}>
        <div className={activeSection === 'my-task' || activeSection === 'task-panel' || activeSection === 'project-details' || activeSection === 'team-detail' ? 'h-full' : 'p-4 md:p-8 pb-16 min-[1080px]:pt-8'}>
          {/* Colors Section */}
          {activeSection === 'colors' && (
            <section>
              <SectionHeader
                icon={Palette}
                title="Colors"
                description="36 foundational colors organized into 6 groups: Brand (3), Text (2), Neutrals (10), Vivid (7), Pastel (6), and Light Background (8)"
              />

              <div>
                {colorCategories.map((category, categoryIdx) => (
                  <div key={categoryIdx} style={{ marginBottom: 'var(--spacing-56)' }}>
                    <h3 style={{ fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--spacing-8)' }}>{category.title}</h3>
                    <div className="grid grid-cols-1 min-[768px]:grid-cols-2 min-[1080px]:grid-cols-3 gap-3">
                      {category.colors.map((color, idx) => (
                        <ColorItem
                          key={idx}
                          name={color.name}
                          cssVar={color.cssVar}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Typography Section */}
          {activeSection === 'typography' && (
            <section>
              <SectionHeader
                icon={Type}
                title="Typography"
                description="Typography styles from the design system"
              />

              <div className="flex gap-6">
                {/* Mobile Column */}
                <div className="flex-1 space-y-6">
                  <h3 style={{ fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--spacing-8)' }}>Mobile</h3>
                  
                  <div className="typography-card">
                    <p className="text-mobile-heading-28">Heading</p>
                    <p className="text-web-metadata-primary text-metadata mt-1">28px / Semibold / 32px</p>
                  </div>

                  <div className="typography-card">
                    <p className="text-mobile-heading-22">Heading</p>
                    <p className="text-web-metadata-primary text-metadata mt-1">22px / Semibold / 32px</p>
                  </div>

                  <div className="typography-card">
                    <p className="text-mobile-large-label">Large Label</p>
                    <p className="text-web-metadata-primary text-metadata mt-1">18px / Medium / 24px</p>
                  </div>

                  <div className="typography-card">
                    <p className="text-mobile-label-emphasized">Label / emphasized body</p>
                    <p className="text-web-metadata-primary text-metadata mt-1">16px / Semibold / 21px</p>
                  </div>

                  <div className="typography-card">
                    <p className="text-mobile-button">Button</p>
                    <p className="text-web-metadata-primary text-metadata mt-1">16px / Regular / 21px</p>
                  </div>

                  <div className="typography-card">
                    <p className="text-mobile-label-small">Label small</p>
                    <p className="text-web-metadata-primary text-metadata mt-1">14px / Medium / 16px</p>
                  </div>

                  <div className="typography-card">
                    <p className="text-mobile-body">Body</p>
                    <p className="text-web-metadata-primary text-metadata mt-1">16px / Regular / 21px</p>
                  </div>

                  <div className="typography-card">
                    <p className="text-mobile-link">Link</p>
                    <p className="text-web-metadata-primary text-metadata mt-1">14px / Regular / 16px / Underline</p>
                  </div>

                  <div className="typography-card">
                    <p className="text-mobile-secondary-body">Secondary body</p>
                    <p className="text-web-metadata-primary text-metadata mt-1">14px / Regular / 16px / 0.28px</p>
                  </div>

                  <div className="typography-card">
                    <p className="text-mobile-metadata-primary">Metadata Primary</p>
                    <p className="text-web-metadata-primary text-metadata mt-1">12px / Regular / 16px</p>
                  </div>

                  <div className="typography-card">
                    <p className="text-mobile-metadata-secondary">Metadata Secondary</p>
                    <p className="text-web-metadata-primary text-metadata mt-1">10px / Medium / 12px</p>
                  </div>
                </div>

                {/* Web Column */}
                <div className="flex-1 space-y-6">
                  <h3 style={{ fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--spacing-8)' }}>Web</h3>
                  
                  <div className="typography-card">
                    <p className="text-web-heading-32">Heading</p>
                    <p className="text-web-metadata-primary text-metadata mt-1">32px / Semibold / 36px</p>
                  </div>

                  <div className="typography-card">
                    <p className="text-web-heading-22">Heading</p>
                    <p className="text-web-metadata-primary text-metadata mt-1">22px / Semibold / 32px</p>
                  </div>

                  <div className="typography-card">
                    <p className="text-web-large-label">Large Label</p>
                    <p className="text-web-metadata-primary text-metadata mt-1">18px / Medium / 24px</p>
                  </div>

                  <div className="typography-card">
                    <p className="text-web-label-emphasized">Label / emphasized body</p>
                    <p className="text-web-metadata-primary text-metadata mt-1">16px / Semibold / 24px</p>
                  </div>

                  <div className="typography-card">
                    <p className="text-web-button">Button</p>
                    <p className="text-web-metadata-primary text-metadata mt-1">16px / Medium / 24px</p>
                  </div>

                  <div className="typography-card">
                    <p className="text-web-label-small">Label small</p>
                    <p className="text-web-metadata-primary text-metadata mt-1">14px / Medium / 16px</p>
                  </div>

                  <div className="typography-card">
                    <p className="text-web-body">Body</p>
                    <p className="text-web-metadata-primary text-metadata mt-1">16px / Regular / 24px</p>
                  </div>

                  <div className="typography-card">
                    <p className="text-web-link">Link</p>
                    <p className="text-web-metadata-primary text-metadata mt-1">14px / Regular / 16px / Underline</p>
                  </div>

                  <div className="typography-card">
                    <p className="text-web-secondary-body">Secondary body</p>
                    <p className="text-web-metadata-primary text-metadata mt-1">14px / Regular / 16px</p>
                  </div>

                  <div className="typography-card">
                    <p className="text-web-metadata-primary">Metadata Primary</p>
                    <p className="text-web-metadata-primary text-metadata mt-1">12px / Regular / 16px</p>
                  </div>

                  <div className="typography-card">
                    <p className="text-web-metadata-secondary">Metadata Secondary</p>
                    <p className="text-web-metadata-primary text-metadata mt-1">10px / Medium / 12px</p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Typography Web Section */}
          {activeSection === 'typography-web' && (
            <section>
              <SectionHeader
                icon={Type}
                title="Typography on web"
                description="11 typography styles: 2 headings, 4 labels, 2 body types, and 3 utility styles"
              />

              <div className="grid grid-cols-1 min-[768px]:grid-cols-2 min-[1080px]:grid-cols-3 gap-3">
                <div className="typography-card">
                  <p className="text-web-heading-32">Heading</p>
                  <p className="text-web-metadata-primary text-metadata mt-1">32px / Semibold / 36px</p>
                </div>

                <div className="typography-card">
                  <p className="text-web-heading-22">Heading</p>
                  <p className="text-web-metadata-primary text-metadata mt-1">22px / Semibold / 32px</p>
                </div>

                <div className="typography-card">
                  <p className="text-web-large-label">Large Label</p>
                  <p className="text-web-metadata-primary text-metadata mt-1">18px / Medium / 24px</p>
                </div>

                <div className="typography-card">
                  <p className="text-web-label-emphasized">Label / emphasized body</p>
                  <p className="text-web-metadata-primary text-metadata mt-1">16px / Semibold / 24px</p>
                </div>

                <div className="typography-card">
                  <p className="text-web-button">Button</p>
                  <p className="text-web-metadata-primary text-metadata mt-1">16px / Medium / 24px</p>
                </div>

                <div className="typography-card">
                  <p className="text-web-label-small">Label small</p>
                  <p className="text-web-metadata-primary text-metadata mt-1">14px / Medium / 16px</p>
                </div>

                <div className="typography-card">
                  <p className="text-web-body">Body</p>
                  <p className="text-web-metadata-primary text-metadata mt-1">16px / Regular / 24px</p>
                </div>

                <div className="typography-card">
                  <p className="text-web-link">Link</p>
                    <p className="text-web-metadata-primary text-metadata mt-1">14px / Regular / 16px / Underline</p>
                </div>

                <div className="typography-card">
                  <p className="text-web-secondary-body">Secondary body</p>
                  <p className="text-web-metadata-primary text-metadata mt-1">14px / Regular / 16px</p>
                </div>

                <div className="typography-card">
                  <p className="text-web-metadata-primary">Metadata Primary</p>
                  <p className="text-web-metadata-primary text-metadata mt-1">12px / Regular / 16px</p>
                </div>

                <div className="typography-card">
                  <p className="text-web-metadata-secondary">Metadata Secondary</p>
                  <p className="text-web-metadata-primary text-metadata mt-1">10px / Medium / 12px</p>
                </div>
              </div>
            </section>
          )}

          {/* Typography Mobile Section */}
          {activeSection === 'typography-mobile' && (
            <section>
              <SectionHeader
                icon={Type}
                title="Typography on mobile"
                description="11 typography styles: 2 headings, 4 labels, 2 body types, and 3 utility styles"
              />

              <div className="grid grid-cols-1 min-[768px]:grid-cols-2 min-[1080px]:grid-cols-3 gap-3">
                <div className="typography-card">
                  <p className="text-mobile-heading-28">Heading</p>
                  <p className="text-web-metadata-primary text-metadata mt-1">28px / Semibold / 32px</p>
                </div>

                <div className="typography-card">
                  <p className="text-mobile-heading-22">Heading</p>
                  <p className="text-web-metadata-primary text-metadata mt-1">22px / Semibold / 32px</p>
                </div>

                <div className="typography-card">
                  <p className="text-mobile-large-label">Large Label</p>
                  <p className="text-web-metadata-primary text-metadata mt-1">18px / Medium / 24px</p>
                </div>

                <div className="typography-card">
                  <p className="text-mobile-label-emphasized">Label / emphasized body</p>
                  <p className="text-web-metadata-primary text-metadata mt-1">16px / Semibold / 21px</p>
                </div>

                <div className="typography-card">
                  <p className="text-mobile-button">Button</p>
                  <p className="text-web-metadata-primary text-metadata mt-1">16px / Regular / 21px</p>
                </div>

                <div className="typography-card">
                  <p className="text-mobile-label-small">Label small</p>
                  <p className="text-web-metadata-primary text-metadata mt-1">14px / Medium / 16px</p>
                </div>

                <div className="typography-card">
                  <p className="text-mobile-body">Body</p>
                  <p className="text-web-metadata-primary text-metadata mt-1">16px / Regular / 21px</p>
                </div>

                <div className="typography-card">
                  <p className="text-mobile-link">Link</p>
                  <p className="text-web-metadata-primary text-metadata mt-1">14px / Regular / 16px / Underline</p>
                </div>

                <div className="typography-card">
                  <p className="text-mobile-secondary-body">Secondary body</p>
                  <p className="text-web-metadata-primary text-metadata mt-1">14px / Regular / 16px / 0.28px</p>
                </div>

                <div className="typography-card">
                  <p className="text-mobile-metadata-primary">Metadata Primary</p>
                  <p className="text-web-metadata-primary text-metadata mt-1">12px / Regular / 16px</p>
                </div>

                <div className="typography-card">
                  <p className="text-mobile-metadata-secondary">Metadata Secondary</p>
                  <p className="text-web-metadata-primary text-metadata mt-1">10px / Medium / 12px</p>
                </div>
              </div>
            </section>
          )}

          {/* Border Radius Section */}
          {activeSection === 'radius' && (
            <section>
              <SectionHeader
                icon={Square}
                title="Border Radius"
                description="15 border radius tokens from 0px to full (9999px) in multiples of 4, plus semantic tokens for buttons and cards"
              />

              <div className="grid grid-cols-1 min-[768px]:grid-cols-2 min-[1080px]:grid-cols-3 gap-3">
                {radiusItems.map((item, idx) => (
                  <RadiusItem key={idx} name={item.name} cssVar={item.cssVar} />
                ))}
              </div>
            </section>
          )}

          {/* Elevation Section */}
          {activeSection === 'elevation' && (
            <section>
              <SectionHeader
                icon={Box}
                title="Elevation"
                description="4 shadow variants from small to extra large for depth and layering: sm, md, lg, xl"
              />

              <div className="grid grid-cols-1 min-[768px]:grid-cols-2 min-[1080px]:grid-cols-3 gap-3">
                {elevationItems.map((item, idx) => (
                  <ElevationItem key={idx} name={item.name} cssVar={item.cssVar} />
                ))}
              </div>
            </section>
          )}

          {/* Spacing Section */}
          {activeSection === 'spacing' && (
            <section>
              <SectionHeader
                icon={Box}
                title="Spacing"
                description="12 spacing tokens from 0px to 64px in multiples of 4 for consistent layout and spacing"
              />

              <div className="grid grid-cols-1 min-[768px]:grid-cols-2 min-[1080px]:grid-cols-3 gap-3">
                {spacingItems.map((item, idx) => (
                  <SpacingItem key={idx} name={item.name} cssVar={item.cssVar} />
                ))}
              </div>
            </section>
          )}

          {/* Sizes Section */}
          {activeSection === 'sizes' && (
            <section>
              <SectionHeader
                icon={Box}
                title="Sizes"
                description="5 component size tokens: xs (24px), sm (32px), md (40px), lg (48px), xl (56px)"
              />

              <div className="grid grid-cols-1 min-[768px]:grid-cols-2 min-[1080px]:grid-cols-3 gap-3">
                {sizeItems.map((item, idx) => (
                  <SizeItem key={idx} name={item.name} cssVar={item.cssVar} />
                ))}
              </div>
            </section>
          )}

          {/* Buttons Component */}
          {activeSection === 'buttons' && (
            <section>
              <SectionHeader
                icon={MousePointerClick}
                title="Buttons"
                description="Total Variant: 3"
              />

              <div>
                {/* 1. Button Variants */}
                <div style={{ marginBottom: 'var(--spacing-56)' }}>
                  <h3 style={{ fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--spacing-8)' }}>Button Variants</h3>
                  <TabsContainer
                    activeTab={buttonVariantTab}
                    onTabChange={setButtonVariantTab}
                    tabs={[
                      { value: 'preview', label: 'Preview' },
                      { value: 'usage', label: 'Usage' },
                      { value: 'github', label: 'GitHub' }
                    ]}
                  >
                    <TabPanel value="preview" activeTab={buttonVariantTab}>
                      <div className="component-card">
                        <div className="space-y-6">
                          {/* Fill Variant */}
                          <div>
                            <p className="text-web-metadata-primary text-metadata mb-3">FILL</p>
                            <div className="flex flex-wrap gap-3 items-center">
                              <Button variant="fill" className="btn-primary">Primary</Button>
                              <Button variant="fill" className="btn-secondary">Black</Button>
                              <Button variant="fill" className="btn-destructive">Destructive</Button>
                              <Button variant="fill" className="btn-blue">Blue</Button>
                              <Button variant="fill" disabled>Disabled</Button>
                            </div>
                          </div>

                          {/* Outline Variant */}
                          <div>
                            <p className="text-web-metadata-primary text-metadata mb-3">OUTLINE</p>
                            <div className="flex flex-wrap gap-3 items-center">
                              <Button variant="outline" className="btn-primary">Primary</Button>
                              <Button variant="outline" className="btn-secondary">Black</Button>
                              <Button variant="outline" className="btn-destructive">Destructive</Button>
                              <Button variant="outline" className="btn-blue">Blue</Button>
                              <Button variant="outline" disabled>Disabled</Button>
                            </div>
                          </div>

                          {/* Ghost Variant */}
                          <div>
                            <p className="text-web-metadata-primary text-metadata mb-3">GHOST</p>
                            <div className="flex flex-wrap gap-3 items-center">
                              <Button variant="ghost" className="btn-primary">Primary</Button>
                              <Button variant="ghost" className="btn-secondary">Black</Button>
                              <Button variant="ghost" className="btn-destructive">Destructive</Button>
                              <Button variant="ghost" className="btn-blue">Blue</Button>
                              <Button variant="ghost" disabled>Disabled</Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel value="usage" activeTab={buttonVariantTab}>
                      <CodeExample
                        title="Usage Example"
                        code={`import { Button } from './components';

// FILL VARIANT - Solid background
<Button variant="fill" className="btn-primary">Primary</Button>
<Button variant="fill" className="btn-secondary">Black</Button>
<Button variant="fill" className="btn-destructive">Destructive</Button>
<Button variant="fill" className="btn-blue">Blue</Button>
<Button variant="fill" disabled>Disabled</Button>

// OUTLINE VARIANT - Transparent with border
<Button variant="outline" className="btn-primary">Primary</Button>
<Button variant="outline" className="btn-secondary">Black</Button>
<Button variant="outline" className="btn-destructive">Destructive</Button>
<Button variant="outline" className="btn-blue">Blue</Button>
<Button variant="outline" disabled>Disabled</Button>

// GHOST VARIANT - Transparent without border
<Button variant="ghost" className="btn-primary">Primary</Button>
<Button variant="ghost" className="btn-secondary">Black</Button>
<Button variant="ghost" className="btn-destructive">Destructive</Button>
<Button variant="ghost" className="btn-blue">Blue</Button>
<Button variant="ghost" disabled>Disabled</Button>`}
                      />
                    </TabPanel>
                    <TabPanel value="github" activeTab={buttonVariantTab}>
                      <CodeExample
                        title="GitHub URL"
                        code={`https://github.com/dedekysf/Tasktagdesignsystem/blob/main/src/components/Button.tsx`}
                      />
                    </TabPanel>
                  </TabsContainer>
                </div>

                {/* 2. Rectangular Button - Default Border Radius */}
                <div style={{ marginBottom: 'var(--spacing-56)' }}>
                  <h3 style={{ fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--spacing-8)' }}>Rectangular Button</h3>
                  <TabsContainer
                    activeTab={buttonRectTab}
                    onTabChange={setButtonRectTab}
                    tabs={[
                      { value: 'preview', label: 'Preview' },
                      { value: 'usage', label: 'Usage' },
                      { value: 'github', label: 'GitHub URL' }
                    ]}
                  >
                    <TabPanel value="preview" activeTab={buttonRectTab}>
                      <div className="component-card">
                        <div className="space-y-6">
                          {['xl', 'lg', 'md', 'sm', 'xs'].map((size) => (
                            <div key={size}>
                              <p className="text-web-metadata-primary text-metadata mb-3">{size.toUpperCase()}</p>
                              <div className="flex flex-wrap gap-3 items-center">
                                <Button 
                                  size={size as ButtonSize} 
                                  variant="fill" 
                                  className="btn-secondary"
                                >
                                  Button
                                </Button>
                                <Button 
                                  size={size as ButtonSize} 
                                  variant="fill" 
                                  className="btn-secondary"
                                >
                                  <ChevronLeft size={size === 'xl' ? 20 : size === 'lg' ? 18 : size === 'md' ? 18 : size === 'sm' ? 16 : 14} />
                                  Left Icon
                                </Button>
                                <Button 
                                  size={size as ButtonSize} 
                                  variant="fill" 
                                  className="btn-secondary"
                                >
                                  Right Icon
                                  <ChevronRight size={size === 'xl' ? 20 : size === 'lg' ? 18 : size === 'md' ? 18 : size === 'sm' ? 16 : 14} />
                                </Button>
                                <Button 
                                  size={size as ButtonSize} 
                                  variant="fill" 
                                  className="btn-secondary"
                                >
                                  <User size={size === 'xl' ? 20 : size === 'lg' ? 18 : size === 'md' ? 18 : size === 'sm' ? 16 : 14} />
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel value="usage" activeTab={buttonRectTab}>
                      <CodeExample
                        title="Usage Example"
                        code={`import { Button } from './components';
import { ChevronLeft, ChevronRight, User } from 'lucide-react';

// Sizes
<Button 
  size="xl" 
  variant="fill" 
  className="btn-secondary"
>
  Button
</Button>
<Button 
  size="lg" 
  variant="fill" 
  className="btn-secondary"
>
  Button
</Button>
<Button 
  size="md" 
  variant="fill" 
  className="btn-secondary"
>
  Button
</Button>
<Button 
  size="sm" 
  variant="fill" 
  className="btn-secondary"
>
  Button
</Button>
<Button 
  size="xs" 
  variant="fill" 
  className="btn-secondary"
>
  Button
</Button>

// With left icon
<Button 
  size="md" 
  variant="fill" 
  className="btn-secondary"
>
  <ChevronLeft size={18} />
  Left Icon
</Button>

// With right icon
<Button 
  size="md" 
  variant="fill" 
  className="btn-secondary"
>
  Right Icon
  <ChevronRight size={18} />
</Button>

// Icon only
<Button 
  size="md" 
  variant="fill" 
  className="btn-secondary"
>
  <User size={18} />
</Button>`}
                      />
                    </TabPanel>
                    <TabPanel value="github" activeTab={buttonRectTab}>
                      <CodeExample
                        title="GitHub URL"
                        code={`https://github.com/dedekysf/Tasktagdesignsystem/blob/main/src/components/Button.tsx`}
                      />
                    </TabPanel>
                  </TabsContainer>
                </div>

                {/* 3. Rounded Button - Full Radius */}
                <div style={{ marginBottom: 'var(--spacing-56)' }}>
                  <h3 style={{ fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--spacing-8)' }}>Rounded Button</h3>
                  <TabsContainer
                    activeTab={buttonRoundTab}
                    onTabChange={setButtonRoundTab}
                    tabs={[
                      { value: 'preview', label: 'Preview' },
                      { value: 'usage', label: 'Usage' },
                      { value: 'github', label: 'GitHub URL' }
                    ]}
                  >
                    <TabPanel value="preview" activeTab={buttonRoundTab}>
                      <div className="component-card">
                        <div className="space-y-6">
                          {['xl', 'lg', 'md', 'sm', 'xs'].map((size) => (
                            <div key={size}>
                              <p className="text-web-metadata-primary text-metadata mb-3">{size.toUpperCase()}</p>
                              <div className="flex flex-wrap gap-3 items-center">
                                <Button 
                                  size={size as ButtonSize} 
                                  variant="fill" 
                                  className="btn-secondary"
                                  style={{ borderRadius: 'var(--radius-full)' }}
                                >
                                  Button
                                </Button>
                                <Button 
                                  size={size as ButtonSize} 
                                  variant="fill" 
                                  className="btn-secondary"
                                  style={{ borderRadius: 'var(--radius-full)' }}
                                >
                                  <ChevronLeft size={size === 'xl' ? 20 : size === 'lg' ? 18 : size === 'md' ? 18 : size === 'sm' ? 16 : 14} />
                                  Left Icon
                                </Button>
                                <Button 
                                  size={size as ButtonSize} 
                                  variant="fill" 
                                  className="btn-secondary"
                                  style={{ borderRadius: 'var(--radius-full)' }}
                                >
                                  Right Icon
                                  <ChevronRight size={size === 'xl' ? 20 : size === 'lg' ? 18 : size === 'md' ? 18 : size === 'sm' ? 16 : 14} />
                                </Button>
                                <Button 
                                  size={size as ButtonSize} 
                                  variant="fill" 
                                  className="btn-secondary"
                                  style={{ 
                                    borderRadius: 'var(--radius-full)', 
                                    aspectRatio: '1', 
                                    padding: size === 'xl' ? 'var(--spacing-16)' : 
                                            size === 'lg' ? 'var(--spacing-12)' : 
                                            size === 'md' ? 'var(--spacing-8)' : 
                                            size === 'sm' ? 'var(--spacing-8)' : 
                                            'var(--spacing-4)',
                                    minWidth: size === 'xl' ? 'var(--size-xl)' :
                                             size === 'lg' ? 'var(--size-lg)' :
                                             size === 'md' ? 'var(--size-md)' :
                                             size === 'sm' ? 'var(--size-sm)' :
                                             'var(--size-xs)'
                                  }}
                                >
                                  <User size={size === 'xl' ? 20 : size === 'lg' ? 18 : size === 'md' ? 18 : size === 'sm' ? 16 : 14} />
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel value="usage" activeTab={buttonRoundTab}>
                      <CodeExample
                        title="Usage Example"
                        code={`import { Button } from './components';
import { ChevronLeft, ChevronRight, User } from 'lucide-react';

// Sizes with full border radius
<Button 
  size="xl" 
  variant="fill" 
  className="btn-secondary"
  style={{ borderRadius: 'var(--radius-full)' }}
>
  Button
</Button>

<Button 
  size="md" 
  variant="fill" 
  className="btn-secondary"
  style={{ borderRadius: 'var(--radius-full)' }}
>
  Button
</Button>

// With left icon
<Button 
  size="md" 
  variant="fill" 
  className="btn-secondary"
  style={{ borderRadius: 'var(--radius-full)' }}
>
  <ChevronLeft size={18} />
  Left Icon
</Button>

// With right icon
<Button 
  size="md" 
  variant="fill" 
  className="btn-secondary"
  style={{ borderRadius: 'var(--radius-full)' }}
>
  Right Icon
  <ChevronRight size={18} />
</Button>

// Icon only - circular shape
<Button 
  size="md" 
  variant="fill" 
  className="btn-secondary"
  style={{ 
    borderRadius: 'var(--radius-full)', 
    aspectRatio: '1', 
    padding: 'var(--spacing-8)',
    minWidth: 'var(--size-md)'
  }}
>
  <User size={18} />
</Button>`}
                      />
                    </TabPanel>
                    <TabPanel value="github" activeTab={buttonRoundTab}>
                      <CodeExample
                        title="GitHub URL"
                        code={`https://github.com/dedekysf/Tasktagdesignsystem/blob/main/src/components/Button.tsx`}
                      />
                    </TabPanel>
                  </TabsContainer>
                </div>

              </div>
            </section>
          )}

          {/* Inputs Component */}
          {activeSection === 'inputs' && (
            <section>
              <SectionHeader
                icon={TextCursor}
                title="Input Fields"
                description="Variants: with-icon, with-counter | States: default, disabled, error, with-label"
              />

              <div>
                {/* Variant 1: Input with Icon */}
                <div style={{ marginBottom: 'var(--spacing-56)' }}>
                  <h3 style={{ fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--spacing-8)' }}>Text Input with Icon</h3>
                  <TabsContainer
                    activeTab={inputTab}
                    onTabChange={setInputTab}
                    tabs={[
                      { value: 'preview', label: 'Preview' },
                      { value: 'usage', label: 'Usage' },
                      { value: 'github', label: 'GitHub URL' }
                    ]}
                  >
                    <TabPanel value="preview" activeTab={inputTab}>
                      <div className="component-card">
                        <div className="space-y-4">
                          <div>
                            <p className="text-web-metadata-primary text-metadata mb-2">Default</p>
                            <TextInput 
                              variant="with-icon" 
                              placeholder="Search..." 
                              state="default"
                            />
                          </div>

                          <div>
                            <p className="text-web-metadata-primary text-metadata mb-2">Disabled</p>
                            <TextInput 
                              variant="with-icon" 
                              placeholder="Search..." 
                              state="disabled"
                            />
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel value="usage" activeTab={inputTab}>
                      <CodeExample
                        title="Usage Example"
                        code={`import { TextInput } from './components';

// Default state
<TextInput 
  variant="with-icon" 
  placeholder="Search..." 
  state="default"
/>

// Disabled state
<TextInput 
  variant="with-icon" 
  placeholder="Search..." 
  state="disabled"
/>`}
                      />
                    </TabPanel>
                    <TabPanel value="github" activeTab={inputTab}>
                      <CodeExample
                        title="GitHub URL"
                        code={`https://github.com/dedekysf/Tasktagdesignsystem/blob/main/src/components/TextInput.tsx`}
                      />
                    </TabPanel>
                  </TabsContainer>
                </div>

                {/* Variant 2: Input with Counter */}
                <div style={{ marginBottom: 'var(--spacing-56)' }}>
                  <h3 style={{ fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--spacing-8)' }}>Text Input without Icon</h3>
                  <div className="component-card">
                    <div className="space-y-4">
                      <div>
                        <p className="text-web-metadata-primary text-metadata mb-2">Default</p>
                        <TextInput 
                          variant="with-counter" 
                          placeholder="Enter text..." 
                          state="default"
                          maxLength={250}
                        />
                      </div>

                      <div>
                        <p className="text-web-metadata-primary text-metadata mb-2">With Label</p>
                        <TextInput 
                          id="input-with-label"
                          variant="with-counter" 
                          placeholder="Enter text..." 
                          state="default"
                          maxLength={250}
                          label="Label"
                        />
                      </div>

                      <div>
                        <p className="text-web-metadata-primary text-metadata mb-2">Error</p>
                        <TextInput 
                          variant="with-counter" 
                          placeholder="Enter text..." 
                          state="error"
                          maxLength={250}
                          errorMessage="Please enter valid text"
                        />
                      </div>

                      <div>
                        <p className="text-web-metadata-primary text-metadata mb-2">Disabled</p>
                        <TextInput 
                          variant="with-counter" 
                          placeholder="Enter text..." 
                          state="disabled"
                          maxLength={250}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <CodeExample
                      title="Usage Example"
                      code={`import { TextInput } from './components';

// Default
<TextInput 
  variant="with-counter" 
  placeholder="Enter text..." 
  state="default"
  maxLength={250}
/>

// With label
<TextInput 
  id="input-with-label"
  variant="with-counter" 
  placeholder="Enter text..." 
  state="default"
  maxLength={250}
  label="Label"
/>

// Error state
<TextInput 
  variant="with-counter" 
  placeholder="Enter text..." 
  state="error"
  maxLength={250}
  errorMessage="Please enter valid text"
/>

// Disabled
<TextInput 
  variant="with-counter" 
  placeholder="Enter text..." 
  state="disabled"
  maxLength={250}
/>`}
                    />
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Text Input Section */}
          {activeSection === 'text-input' && (
            <section>
              <SectionHeader
                icon={TextCursor}
                title="Text Input"
                description="Total Variant: 2"
              />

              <div>
                {/* 1. Basic */}
                <div style={{ marginBottom: 'var(--spacing-56)' }}>
                  <h3 style={{ fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--spacing-8)' }}>Basic</h3>
                  <TabsContainer
                    activeTab={inputBasicTab}
                    onTabChange={setInputBasicTab}
                    tabs={[
                      { value: 'preview', label: 'Preview' },
                      { value: 'usage', label: 'Usage' },
                      { value: 'github', label: 'GitHub URL' }
                    ]}
                  >
                    <TabPanel value="preview" activeTab={inputBasicTab}>
                      <div className="component-card">
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-24)' }}>
                          <div>
                            <p className="text-web-metadata-primary text-metadata" style={{ marginBottom: 'var(--spacing-12)' }}>WITHOUT ICON</p>
                            <TextInput 
                              size="md"
                              placeholder="Enter text..."
                              maxLength={250}
                              showCounter={true}
                            />
                          </div>
                          <div>
                            <p className="text-web-metadata-primary text-metadata" style={{ marginBottom: 'var(--spacing-12)' }}>WITH ICON</p>
                            <TextInput 
                              size="md"
                              placeholder="Search..."
                              maxLength={250}
                              icon={Search}
                              showClearButton={true}
                            />
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel value="usage" activeTab={inputBasicTab}>
                      <CodeExample
                        title="Basic Text Input"
                        code={`import { TextInput } from './components';
import { Search } from 'lucide-react';

// Without icon (with counter)
<TextInput 
  size="md"
  placeholder="Enter text..."
  maxLength={250}
  showCounter={true}
/>

// With icon (with clear button)
<TextInput 
  size="md"
  placeholder="Search..."
  maxLength={250}
  icon={Search}
  showClearButton={true}
/>`}
                      />
                    </TabPanel>
                    <TabPanel value="github" activeTab={inputBasicTab}>
                      <CodeExample
                        title="GitHub URL"
                        code={`https://github.com/dedekysf/Tasktagdesignsystem/blob/main/src/components/TextInput.tsx`}
                      />
                    </TabPanel>
                  </TabsContainer>
                </div>

                {/* 2. With Label */}
                <div style={{ marginBottom: 'var(--spacing-56)' }}>
                  <h3 style={{ fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--spacing-8)' }}>With Label</h3>
                  <TabsContainer
                    activeTab={inputLabelTab}
                    onTabChange={setInputLabelTab}
                    tabs={[
                      { value: 'preview', label: 'Preview' },
                      { value: 'usage', label: 'Usage' },
                      { value: 'github', label: 'GitHub URL' }
                    ]}
                  >
                    <TabPanel value="preview" activeTab={inputLabelTab}>
                      <div className="component-card">
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-24)' }}>
                          <div>
                            <p className="text-web-metadata-primary text-metadata" style={{ marginBottom: 'var(--spacing-12)' }}>WITHOUT ICON</p>
                            <TextInput 
                              size="md"
                              label="Label"
                              placeholder="Enter text..."
                              maxLength={250}
                              showCounter={true}
                            />
                          </div>
                          <div>
                            <p className="text-web-metadata-primary text-metadata" style={{ marginBottom: 'var(--spacing-12)' }}>WITH ICON</p>
                            <TextInput 
                              size="md"
                              label="Label"
                              placeholder="Search..."
                              maxLength={250}
                              icon={Search}
                              showClearButton={true}
                            />
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel value="usage" activeTab={inputLabelTab}>
                      <CodeExample
                        title="Text Input With Label"
                        code={`import { TextInput } from './components';
import { Search } from 'lucide-react';

// Without icon (with counter)
<TextInput 
  size="md"
  label="Label"
  placeholder="Enter text..."
  maxLength={250}
  showCounter={true}
/>

// With icon (with clear button)
<TextInput 
  size="md"
  label="Label"
  placeholder="Search..."
  maxLength={250}
  icon={Search}
  showClearButton={true}
/>`}
                      />
                    </TabPanel>
                    <TabPanel value="github" activeTab={inputLabelTab}>
                      <CodeExample
                        title="GitHub URL"
                        code={`https://github.com/dedekysf/Tasktagdesignsystem/blob/main/src/components/TextInput.tsx`}
                      />
                    </TabPanel>
                  </TabsContainer>
                </div>

                {/* 3. Sizes */}
                <div style={{ marginBottom: 'var(--spacing-56)' }}>
                  <h3 style={{ fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--spacing-8)' }}>Sizes</h3>
                  <TabsContainer
                    activeTab={inputSizeTab}
                    onTabChange={setInputSizeTab}
                    tabs={[
                      { value: 'preview', label: 'Preview' },
                      { value: 'usage', label: 'Usage' },
                      { value: 'github', label: 'GitHub URL' }
                    ]}
                  >
                    <TabPanel value="preview" activeTab={inputSizeTab}>
                      <div className="component-card">
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-24)' }}>
                          <div>
                            <p className="text-web-metadata-primary text-metadata" style={{ marginBottom: 'var(--spacing-12)' }}>SM</p>
                            <TextInput 
                              size="sm"
                              label="Label"
                              placeholder="Enter text..."
                              maxLength={250}
                              showCounter={true}
                            />
                          </div>
                          <div>
                            <p className="text-web-metadata-primary text-metadata" style={{ marginBottom: 'var(--spacing-12)' }}>MD</p>
                            <TextInput 
                              size="md"
                              label="Label"
                              placeholder="Enter text..."
                              maxLength={250}
                              showCounter={true}
                            />
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel value="usage" activeTab={inputSizeTab}>
                      <CodeExample
                        title="Text Input Sizes"
                        code={`import { TextInput } from './components';

// Small
<TextInput 
  size="sm"
  label="Label"
  placeholder="Enter text..."
  maxLength={250}
  showCounter={true}
/>

// Medium
<TextInput 
  size="md"
  label="Label"
  placeholder="Enter text..."
  maxLength={250}
  showCounter={true}
/>`}
                      />
                    </TabPanel>
                    <TabPanel value="github" activeTab={inputSizeTab}>
                      <CodeExample
                        title="GitHub URL"
                        code={`https://github.com/dedekysf/Tasktagdesignsystem/blob/main/src/components/TextInput.tsx`}
                      />
                    </TabPanel>
                  </TabsContainer>
                </div>

                {/* 4. States */}
                <div style={{ marginBottom: 'var(--spacing-56)' }}>
                  <h3 style={{ fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--spacing-8)' }}>States</h3>
                  <TabsContainer
                    activeTab={inputStatesTab}
                    onTabChange={setInputStatesTab}
                    tabs={[
                      { value: 'preview', label: 'Preview' },
                      { value: 'usage', label: 'Usage' },
                      { value: 'github', label: 'GitHub URL' }
                    ]}
                  >
                    <TabPanel value="preview" activeTab={inputStatesTab}>
                      <div className="component-card">
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-24)' }}>
                          <div>
                            <p className="text-web-metadata-primary text-metadata" style={{ marginBottom: 'var(--spacing-12)' }}>REQUIRED</p>
                            <TextInput 
                              size="md"
                              label="Label"
                              required={true}
                              placeholder="Enter text..."
                              maxLength={250}
                              showCounter={true}
                            />
                          </div>
                          <div>
                            <p className="text-web-metadata-primary text-metadata" style={{ marginBottom: 'var(--spacing-12)' }}>ERROR</p>
                            <TextInput 
                              size="md"
                              label="Label"
                              placeholder="Enter text..."
                              errorMessage="This field is required"
                              maxLength={250}
                              showCounter={true}
                            />
                          </div>
                          <div>
                            <p className="text-web-metadata-primary text-metadata" style={{ marginBottom: 'var(--spacing-12)' }}>DISABLED</p>
                            <TextInput 
                              size="md"
                              label="Label"
                              placeholder="Enter text..."
                              disabled={true}
                              maxLength={250}
                              showCounter={true}
                            />
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel value="usage" activeTab={inputStatesTab}>
                      <CodeExample
                        title="Text Input States"
                        code={`import { TextInput } from './components';

// Required state
<TextInput 
  size="md"
  label="Label"
  required={true}
  placeholder="Enter text..."
  maxLength={250}
  showCounter={true}
/>

// Error state
<TextInput 
  size="md"
  label="Label"
  placeholder="Enter text..."
  errorMessage="This field is required"
  maxLength={250}
  showCounter={true}
/>

// Disabled state
<TextInput 
  size="md"
  label="Label"
  placeholder="Enter text..."
  disabled={true}
  maxLength={250}
  showCounter={true}
/>`}
                      />
                    </TabPanel>
                    <TabPanel value="github" activeTab={inputStatesTab}>
                      <CodeExample
                        title="GitHub URL"
                        code={`https://github.com/dedekysf/Tasktagdesignsystem/blob/main/src/components/TextInput.tsx`}
                      />
                    </TabPanel>
                  </TabsContainer>
                </div>

              </div>
            </section>
          )}

          {/* Textarea Section */}
          {activeSection === 'textarea' && (
            <section>
              <SectionHeader
                icon={TextCursor}
                title="Text Area"
                description="Total Variant: 2"
              />

              <div>
                {/* 1. Basic */}
                <div style={{ marginBottom: 'var(--spacing-56)' }}>
                  <h3 style={{ fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--spacing-8)' }}>Basic</h3>
                  <TabsContainer
                    activeTab={textareaBasicTab}
                    onTabChange={setTextareaBasicTab}
                    tabs={[
                      { value: 'preview', label: 'Preview' },
                      { value: 'usage', label: 'Usage' },
                      { value: 'github', label: 'GitHub URL' }
                    ]}
                  >
                    <TabPanel value="preview" activeTab={textareaBasicTab}>
                      <div className="component-card">
                        <Textarea
                          size="md"
                          placeholder="Enter your message"
                          value={textareaValue}
                          onChange={setTextareaValue}
                          maxLength={1000}
                        />
                      </div>
                    </TabPanel>
                    <TabPanel value="usage" activeTab={textareaBasicTab}>
                      <CodeExample
                        title="Basic Textarea Usage"
                        code={`import { Textarea } from './components';

<Textarea
  size="md"
  placeholder="Enter your message"
  maxLength={1000}
/>`}
                      />
                    </TabPanel>
                    <TabPanel value="github" activeTab={textareaBasicTab}>
                      <CodeExample
                        title="GitHub URL"
                        code={`https://github.com/dedekysf/Tasktagdesignsystem/blob/main/src/components/Textarea.tsx`}
                      />
                    </TabPanel>
                  </TabsContainer>
                </div>

                {/* 2. With Label */}
                <div style={{ marginBottom: 'var(--spacing-56)' }}>
                  <h3 style={{ fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--spacing-8)' }}>With Label</h3>
                  <TabsContainer
                    activeTab={textareaLabelTab}
                    onTabChange={setTextareaLabelTab}
                    tabs={[
                      { value: 'preview', label: 'Preview' },
                      { value: 'usage', label: 'Usage' },
                      { value: 'github', label: 'GitHub URL' }
                    ]}
                  >
                    <TabPanel value="preview" activeTab={textareaLabelTab}>
                      <div className="component-card">
                        <Textarea
                          size="md"
                          label="Label"
                          placeholder="Enter your message"
                          maxLength={1000}
                        />
                      </div>
                    </TabPanel>
                    <TabPanel value="usage" activeTab={textareaLabelTab}>
                      <CodeExample
                        title="Textarea With Label"
                        code={`import { Textarea } from './components';

<Textarea
  size="md"
  label="Label"
  placeholder="Enter your message"
  maxLength={1000}
/>`}
                      />
                    </TabPanel>
                    <TabPanel value="github" activeTab={textareaLabelTab}>
                      <CodeExample
                        title="GitHub URL"
                        code={`https://github.com/dedekysf/Tasktagdesignsystem/blob/main/src/components/Textarea.tsx`}
                      />
                    </TabPanel>
                  </TabsContainer>
                </div>

                {/* 3. Sizes */}
                <div style={{ marginBottom: 'var(--spacing-56)' }}>
                  <h3 style={{ fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--spacing-8)' }}>Sizes</h3>
                  <TabsContainer
                    activeTab={textareaSizeTab}
                    onTabChange={setTextareaSizeTab}
                    tabs={[
                      { value: 'preview', label: 'Preview' },
                      { value: 'usage', label: 'Usage' },
                      { value: 'github', label: 'GitHub URL' }
                    ]}
                  >
                    <TabPanel value="preview" activeTab={textareaSizeTab}>
                      <div className="component-card">
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-24)' }}>
                          <div>
                            <p className="text-web-metadata-primary text-metadata" style={{ marginBottom: 'var(--spacing-12)' }}>SM</p>
                            <Textarea
                              size="sm"
                              label="Label"
                              placeholder="Enter your message"
                              maxLength={1000}
                            />
                          </div>
                          <div>
                            <p className="text-web-metadata-primary text-metadata" style={{ marginBottom: 'var(--spacing-12)' }}>MD</p>
                            <Textarea
                              size="md"
                              label="Label"
                              placeholder="Enter your message"
                              maxLength={1000}
                            />
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel value="usage" activeTab={textareaSizeTab}>
                      <CodeExample
                        title="Textarea Sizes"
                        code={`import { Textarea } from './components';

// Small
<Textarea
  size="sm"
  label="Label"
  placeholder="Enter your message"
  maxLength={1000}
/>

// Medium
<Textarea
  size="md"
  label="Label"
  placeholder="Enter your message"
  maxLength={1000}
/>`}
                      />
                    </TabPanel>
                    <TabPanel value="github" activeTab={textareaSizeTab}>
                      <CodeExample
                        title="GitHub URL"
                        code={`https://github.com/dedekysf/Tasktagdesignsystem/blob/main/src/components/Textarea.tsx`}
                      />
                    </TabPanel>
                  </TabsContainer>
                </div>

                {/* 4. States */}
                <div style={{ marginBottom: 'var(--spacing-56)' }}>
                  <h3 style={{ fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--spacing-8)' }}>States</h3>
                  <TabsContainer
                    activeTab={textareaStatesTab}
                    onTabChange={setTextareaStatesTab}
                    tabs={[
                      { value: 'preview', label: 'Preview' },
                      { value: 'usage', label: 'Usage' },
                      { value: 'github', label: 'GitHub URL' }
                    ]}
                  >
                    <TabPanel value="preview" activeTab={textareaStatesTab}>
                      <div className="component-card">
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-24)' }}>
                          <div>
                            <p className="text-web-metadata-primary text-metadata" style={{ marginBottom: 'var(--spacing-12)' }}>REQUIRED</p>
                            <Textarea
                              size="md"
                              label="Label"
                              required={true}
                              placeholder="Enter your message"
                              maxLength={1000}
                            />
                          </div>
                          <div>
                            <p className="text-web-metadata-primary text-metadata" style={{ marginBottom: 'var(--spacing-12)' }}>ERROR</p>
                            <Textarea
                              size="md"
                              label="Label"
                              placeholder="Enter your message"
                              errorMessage="This field is required"
                              maxLength={1000}
                            />
                          </div>
                          <div>
                            <p className="text-web-metadata-primary text-metadata" style={{ marginBottom: 'var(--spacing-12)' }}>DISABLED</p>
                            <Textarea
                              size="md"
                              label="Label"
                              placeholder="Enter your message"
                              disabled={true}
                              maxLength={1000}
                            />
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel value="usage" activeTab={textareaStatesTab}>
                      <CodeExample
                        title="Textarea States"
                        code={`import { Textarea } from './components';

// Required state
<Textarea
  size="md"
  label="Label"
  required={true}
  placeholder="Enter your message"
  maxLength={1000}
/>

// Error state
<Textarea
  size="md"
  label="Label"
  placeholder="Enter your message"
  errorMessage="This field is required"
  maxLength={1000}
/>

// Disabled state
<Textarea
  size="md"
  label="Label"
  placeholder="Enter your message"
  disabled={true}
  maxLength={1000}
/>`}
                      />
                    </TabPanel>
                    <TabPanel value="github" activeTab={textareaStatesTab}>
                      <CodeExample
                        title="GitHub URL"
                        code={`https://github.com/dedekysf/Tasktagdesignsystem/blob/main/src/components/Textarea.tsx`}
                      />
                    </TabPanel>
                  </TabsContainer>
                </div>

              </div>
            </section>
          )}

          {/* Cards Component */}
          {activeSection === 'cards' && (
            <section>
              <SectionHeader
                icon={LayoutGrid}
                title="Cards"
                description="Total Variant: 2"
              />

              <div>
                
                <TabsContainer
                  activeTab={cardTab}
                  onTabChange={setCardTab}
                  tabs={[
                    { value: 'preview', label: 'Preview' },
                    { value: 'usage', label: 'Usage' },
                    { value: 'github', label: 'GitHub URL' }
                  ]}
                >
                  <TabPanel value="preview" activeTab={cardTab}>
                    <div className="grid grid-cols-1 min-[768px]:grid-cols-2 gap-6">
                      {/* Simple Card */}
                      <div className="component-card">
                        <h3 className="mb-2 text-web-label-emphasized">Simple Card</h3>
                        <p className="text-muted-foreground text-web-secondary-body">
                          This is a simple card component with a title and description. It uses the card background and elevation shadow.
                        </p>
                      </div>

                      {/* Card with Button */}
                      <div className="component-card">
                        <h3 className="mb-2 text-web-label-emphasized">Card with Action</h3>
                        <p className="text-muted-foreground mb-4 text-web-secondary-body">
                          This card includes an action button at the bottom.
                        </p>
                        <Button size="md" variant="fill">Take Action</Button>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel value="usage" activeTab={cardTab}>
                    <CodeExample
                      title="Usage Example"
                      code={`// Cards use the component-card class from globals.css

// Simple card
<div className="component-card">
  <h3 className="mb-2 text-web-label-emphasized">
    Card Title
  </h3>
  <p className="text-web-secondary-body">
    Card description text goes here.
  </p>
</div>

// Card with action button
<div className="component-card">
  <h3 className="mb-2 text-web-label-emphasized">
    Card with Action
  </h3>
  <p className="mb-4 text-web-secondary-body">
    This card includes an action button.
  </p>
  <Button size="md" variant="fill">
    Take Action
  </Button>
</div>`}
                    />
                  </TabPanel>
                  <TabPanel value="github" activeTab={cardTab}>
                    <CodeExample
                      title="GitHub URL"
                      code={`https://github.com/dedekysf/Tasktagdesignsystem/blob/main/src/components/ui/Card.tsx`}
                    />
                  </TabPanel>
                </TabsContainer>
              </div>
            </section>
          )}

          {/* Checkbox Component */}
          {activeSection === 'checkbox' && (
            <section>
              <SectionHeader
                icon={CheckSquare}
                title="Checkbox"
                description="Total Variant: 2"
              />

              {/* Section 1: Basic (Without Label) */}
              <div style={{ marginBottom: 'var(--spacing-56)' }}>
                <h3 style={{ fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--spacing-8)' }}>Basic</h3>
                <TabsContainer
                  activeTab={checkboxBasicTab}
                  onTabChange={setCheckboxBasicTab}
                  tabs={[
                    { value: 'preview', label: 'Preview' },
                    { value: 'usage', label: 'Usage' },
                    { value: 'github', label: 'GitHub URL' }
                  ]}
                >
                  <TabPanel value="preview" activeTab={checkboxBasicTab}>
                    <div className="component-card">
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-32)' }}>
                        <div>
                          <p className="text-web-metadata-primary text-metadata" style={{ marginBottom: 'var(--spacing-12)' }}>CIRCULAR</p>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-12)' }}>
                            <Checkbox variant="circular" />
                            <Checkbox variant="circular" checked={true} />
                          </div>
                        </div>
                        <div>
                          <p className="text-web-metadata-primary text-metadata" style={{ marginBottom: 'var(--spacing-12)' }}>RECTANGULAR</p>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-12)' }}>
                            <Checkbox variant="rectangular" />
                            <Checkbox variant="rectangular" checked={true} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel value="usage" activeTab={checkboxBasicTab}>
                    <CodeExample
                      title="Basic Checkbox Usage"
                      code={`import { Checkbox } from './components';

// Circular checkbox (default)
<Checkbox variant="circular" />

// Rectangular checkbox
<Checkbox variant="rectangular" />

// Controlled state
const [checked, setChecked] = useState(false);
<Checkbox 
  variant="circular" 
  checked={checked} 
  onChange={setChecked} 
/>`}
                    />
                  </TabPanel>
                  <TabPanel value="github" activeTab={checkboxBasicTab}>
                    <CodeExample
                      title="GitHub URL"
                      code={`https://github.com/dedekysf/Tasktagdesignsystem/blob/main/src/components/Checkbox.tsx`}
                    />
                  </TabPanel>
                </TabsContainer>
              </div>

              {/* Section 2: With Label */}
              <div style={{ marginBottom: 'var(--spacing-56)' }}>
                <h3 style={{ fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--spacing-8)' }}>With Label</h3>
                <TabsContainer
                  activeTab={checkboxLabelTab}
                  onTabChange={setCheckboxLabelTab}
                  tabs={[
                    { value: 'preview', label: 'Preview' },
                    { value: 'usage', label: 'Usage' },
                    { value: 'github', label: 'GitHub URL' }
                  ]
                }>
                  <TabPanel value="preview" activeTab={checkboxLabelTab}>
                    <div className="component-card">
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-32)' }}>
                        <div>
                          <p className="text-web-metadata-primary text-metadata" style={{ marginBottom: 'var(--spacing-12)' }}>CIRCULAR</p>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-12)' }}>
                            <Checkbox label="Option 1" variant="circular" />
                            <Checkbox label="Option 2" variant="circular" checked={true} />
                            <Checkbox label="Option 3" variant="circular" />
                          </div>
                        </div>
                        <div>
                          <p className="text-web-metadata-primary text-metadata" style={{ marginBottom: 'var(--spacing-12)' }}>RECTANGULAR</p>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-12)' }}>
                            <Checkbox label="Option 1" variant="rectangular" />
                            <Checkbox label="Option 2" variant="rectangular" checked={true} />
                            <Checkbox label="Option 3" variant="rectangular" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel value="usage" activeTab={checkboxLabelTab}>
                    <CodeExample
                      title="Checkbox With Label Usage"
                      code={`import { Checkbox } from './components';

// Circular checkbox with label
<Checkbox 
  variant="circular" 
  label="Accept terms and conditions" 
/>

// Rectangular checkbox with label
<Checkbox 
  variant="rectangular" 
  label="Subscribe to newsletter" 
/>`}
                    />
                  </TabPanel>
                  <TabPanel value="github" activeTab={checkboxLabelTab}>
                    <CodeExample
                      title="GitHub URL"
                      code={`https://github.com/dedekysf/Tasktagdesignsystem/blob/main/src/components/Checkbox.tsx`}
                    />
                  </TabPanel>
                </TabsContainer>
              </div>

              
              

              {/* Section 3: States */}
              <div style={{ marginBottom: 'var(--spacing-56)' }}>
                <h3 style={{ fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--spacing-8)' }}>States</h3>
                <TabsContainer
                  activeTab={checkboxStatesTab}
                  onTabChange={setCheckboxStatesTab}
                  tabs={[
                    { value: 'preview', label: 'Preview' },
                    { value: 'usage', label: 'Usage' },
                    { value: 'github', label: 'GitHub URL' }
                  ]
                }>
                  <TabPanel value="preview" activeTab={checkboxStatesTab}>
                    <div className="component-card">
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-24)' }}>
                        <div>
                          <p className="text-web-metadata-primary text-metadata" style={{ marginBottom: 'var(--spacing-12)' }}>DEFAULT STATE</p>
                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-32)' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-12)' }}>
                              <Checkbox label="Circular unchecked" variant="circular" />
                              <Checkbox label="Circular checked" variant="circular" checked={true} />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-12)' }}>
                              <Checkbox label="Rectangular unchecked" variant="rectangular" />
                              <Checkbox label="Rectangular checked" variant="rectangular" checked={true} />
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <p className="text-web-metadata-primary text-metadata" style={{ marginBottom: 'var(--spacing-12)' }}>DISABLED STATE</p>
                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-32)' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-12)' }}>
                              <Checkbox label="Circular disabled" variant="circular" disabled={true} />
                              <Checkbox label="Circular disabled checked" variant="circular" checked={true} disabled={true} />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-12)' }}>
                              <Checkbox label="Rectangular disabled" variant="rectangular" disabled={true} />
                              <Checkbox label="Rectangular disabled checked" variant="rectangular" checked={true} disabled={true} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel value="usage" activeTab={checkboxStatesTab}>
                    <CodeExample
                      title="Checkbox States Usage"
                      code={`import { Checkbox } from './components';

// Default state
<Checkbox label="Default checkbox" variant="circular" />

// Disabled state
<Checkbox 
  label="Disabled checkbox" 
  variant="circular" 
  disabled={true} 
/>

// Disabled and checked
<Checkbox 
  label="Disabled checked" 
  variant="circular" 
  checked={true}
  disabled={true} 
/>`}
                    />
                  </TabPanel>
                  <TabPanel value="github" activeTab={checkboxStatesTab}>
                    <CodeExample
                      title="GitHub URL"
                      code={`https://github.com/dedekysf/Tasktagdesignsystem/blob/main/src/components/Checkbox.tsx`}
                    />
                  </TabPanel>
                </TabsContainer>
              </div>
            </section>
          )}

          {/* Radio Button Component */}
          {activeSection === 'radio-button' && (
            <section>
              <SectionHeader
                icon={Circle}
                title="Radio Button"
                description="Total Variant: 2"
              />

              {/* Section 1: Basic (Without Label) */}
              <div style={{ marginBottom: 'var(--spacing-56)' }}>
                <h3 style={{ fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--spacing-8)' }}>Basic</h3>
                <TabsContainer
                  activeTab={radioBasicTab}
                  onTabChange={setRadioBasicTab}
                  tabs={[
                    { value: 'preview', label: 'Preview' },
                    { value: 'usage', label: 'Usage' },
                    { value: 'github', label: 'GitHub URL' }
                  ]}
                >
                  <TabPanel value="preview" activeTab={radioBasicTab}>
                    <div className="component-card">
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-12)' }}>
                        <RadioButton 
                          name="radio-basic" 
                          value="option1" 
                          checked={selectedRadioNoLabel === 'option1'}
                          onChange={setSelectedRadioNoLabel}
                        />
                        <RadioButton 
                          name="radio-basic" 
                          value="option2" 
                          checked={selectedRadioNoLabel === 'option2'}
                          onChange={setSelectedRadioNoLabel}
                        />
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel value="usage" activeTab={radioBasicTab}>
                    <CodeExample
                      title="Basic Radio Button Usage"
                      code={`import { RadioButton } from './components';

const [selected, setSelected] = useState('option1');

// Radio button without label
<RadioButton 
  name="options" 
  value="option1" 
  checked={selected === 'option1'} 
  onChange={setSelected} 
/>

<RadioButton 
  name="options" 
  value="option2" 
  checked={selected === 'option2'} 
  onChange={setSelected} 
/>`}
                    />
                  </TabPanel>
                  <TabPanel value="github" activeTab={radioBasicTab}>
                    <CodeExample
                      title="GitHub URL"
                      code={`https://github.com/dedekysf/Tasktagdesignsystem/blob/main/src/components/RadioButton.tsx`}
                    />
                  </TabPanel>
                </TabsContainer>
              </div>

              {/* Section 2: With Label */}
              <div style={{ marginBottom: 'var(--spacing-56)' }}>
                <h3 style={{ fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--spacing-8)' }}>With Label</h3>
                <TabsContainer
                  activeTab={radioLabelTab}
                  onTabChange={setRadioLabelTab}
                  tabs={[
                    { value: 'preview', label: 'Preview' },
                    { value: 'usage', label: 'Usage' },
                    { value: 'github', label: 'GitHub URL' }
                  ]
                }>
                  <TabPanel value="preview" activeTab={radioLabelTab}>
                    <div className="component-card">
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-12)' }}>
                        <RadioButton 
                          name="radio-label" 
                          value="option1" 
                          label="Option 1" 
                          checked={selectedRadio === 'option1'}
                          onChange={setSelectedRadio}
                        />
                        <RadioButton 
                          name="radio-label" 
                          value="option2" 
                          label="Option 2" 
                          checked={selectedRadio === 'option2'}
                          onChange={setSelectedRadio}
                        />
                        <RadioButton 
                          name="radio-label" 
                          value="option3" 
                          label="Option 3" 
                          checked={selectedRadio === 'option3'}
                          onChange={setSelectedRadio}
                        />
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel value="usage" activeTab={radioLabelTab}>
                    <CodeExample
                      title="Radio Button With Label Usage"
                      code={`import { RadioButton } from './components';

const [selected, setSelected] = useState('option1');

// Radio button with label
<RadioButton 
  name="options" 
  value="option1" 
  label="Option 1" 
  checked={selected === 'option1'} 
  onChange={setSelected} 
/>

<RadioButton 
  name="options" 
  value="option2" 
  label="Option 2" 
  checked={selected === 'option2'} 
  onChange={setSelected} 
/>`}
                    />
                  </TabPanel>
                  <TabPanel value="github" activeTab={radioLabelTab}>
                    <CodeExample
                      title="GitHub URL"
                      code={`https://github.com/dedekysf/Tasktagdesignsystem/blob/main/src/components/RadioButton.tsx`}
                    />
                  </TabPanel>
                </TabsContainer>
              </div>

              

              {/* Section 3: States */}
              <div style={{ marginBottom: 'var(--spacing-56)' }}>
                <h3 style={{ fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--spacing-8)' }}>States</h3>
                <TabsContainer
                  activeTab={radioStatesTab}
                  onTabChange={setRadioStatesTab}
                  tabs={[
                    { value: 'preview', label: 'Preview' },
                    { value: 'usage', label: 'Usage' },
                    { value: 'github', label: 'GitHub URL' }
                  ]
                }>
                  <TabPanel value="preview" activeTab={radioStatesTab}>
                    <div className="component-card">
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-24)' }}>
                        <div>
                          <p className="text-web-metadata-primary text-metadata" style={{ marginBottom: 'var(--spacing-12)' }}>DEFAULT STATE</p>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-12)' }}>
                            <RadioButton 
                              name="radio-default" 
                              value="option1" 
                              label="Radio unchecked" 
                              checked={false}
                            />
                            <RadioButton 
                              name="radio-default" 
                              value="option2" 
                              label="Radio checked" 
                              checked={true}
                            />
                          </div>
                        </div>
                        
                        <div>
                          <p className="text-web-metadata-primary text-metadata" style={{ marginBottom: 'var(--spacing-12)' }}>DISABLED STATE</p>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-12)' }}>
                            <RadioButton 
                              name="radio-disabled" 
                              value="option1" 
                              label="Radio disabled unchecked" 
                              disabled={true}
                              checked={false}
                            />
                            <RadioButton 
                              name="radio-disabled" 
                              value="option2" 
                              label="Radio disabled checked" 
                              disabled={true}
                              checked={true}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel value="usage" activeTab={radioStatesTab}>
                    <CodeExample
                      title="Radio Button States Usage"
                      code={`import { RadioButton } from './components';

// Default state
<RadioButton 
  name="options" 
  value="option1" 
  label="Default radio button"
  checked={false}
/>

// Disabled state
<RadioButton 
  name="options" 
  value="disabled" 
  label="Disabled radio button" 
  disabled={true}
  checked={false}
/>

// Disabled and checked
<RadioButton 
  name="options" 
  value="disabled-checked" 
  label="Disabled checked" 
  disabled={true}
  checked={true}
/>`}
                    />
                  </TabPanel>
                  <TabPanel value="github" activeTab={radioStatesTab}>
                    <CodeExample
                      title="GitHub URL"
                      code={`https://github.com/dedekysf/Tasktagdesignsystem/blob/main/src/components/RadioButton.tsx`}
                    />
                  </TabPanel>
                </TabsContainer>
              </div>
            </section>
          )}

          {/* Dropdown Component */}
          {activeSection === 'dropdown' && (
            <section>
              <SectionHeader
                icon={ChevronDown}
                title="Dropdown"
                description="Total Variant: 2"
              />

              {/* Section 1: Basic */}
              <div style={{ marginBottom: 'var(--spacing-56)' }}>
                <h3 style={{ fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--spacing-8)' }}>Basic</h3>
                <TabsContainer
                  activeTab={dropdownBasicTab}
                  onTabChange={setDropdownBasicTab}
                    tabs={[
                      { value: 'preview', label: 'Preview' },
                      { value: 'usage', label: 'Usage' },
                      { value: 'github', label: 'GitHub URL' }
                    ]}
                  >
                  <TabPanel value="preview" activeTab={dropdownBasicTab}>
                    <div className="component-card">
                      <Dropdown
                        size="md"
                        options={dropdownOptions}
                        value={selectedDropdown}
                        onChange={setSelectedDropdown}
                        placeholder="Select an option"
                      />
                    </div>
                  </TabPanel>
                  <TabPanel value="usage" activeTab={dropdownBasicTab}>
                    <CodeExample
                      title="Basic Dropdown Usage"
                      code={`import { Dropdown, type DropdownOption } from './components';

const options: DropdownOption[] = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
];

<Dropdown
  size="md"
  options={options}
  placeholder="Select an option"
/>`}
                    />
                  </TabPanel>
                  <TabPanel value="github" activeTab={dropdownBasicTab}>
                    <CodeExample
                      title="GitHub URL"
                      code={`https://github.com/dedekysf/Tasktagdesignsystem/blob/main/src/components/Dropdown.tsx`}
                    />
                  </TabPanel>
                </TabsContainer>
              </div>

              {/* Section 2: With Label */}
              <div style={{ marginBottom: 'var(--spacing-56)' }}>
                <h3 style={{ fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--spacing-8)' }}>With Label</h3>
                <TabsContainer
                  activeTab={dropdownLabelTab}
                  onTabChange={setDropdownLabelTab}
                    tabs={[
                      { value: 'preview', label: 'Preview' },
                      { value: 'usage', label: 'Usage' },
                      { value: 'github', label: 'GitHub URL' }
                    ]}
                  >
                    <TabPanel value="preview" activeTab={dropdownLabelTab}>
                      <div className="component-card">
                        <Dropdown
                          size="md"
                          label="Label"
                          options={dropdownOptions}
                          placeholder="Select an option"
                        />
                      </div>
                    </TabPanel>
                    <TabPanel value="usage" activeTab={dropdownLabelTab}>
                      <CodeExample
                        title="Dropdown With Label Usage"
                        code={`import { Dropdown } from './components';

<Dropdown
  size="md"
  label="Label"
  options={options}
  placeholder="Select an option"
/>`}
                      />
                    </TabPanel>
                    <TabPanel value="github" activeTab={dropdownLabelTab}>
                      <CodeExample
                        title="GitHub URL"
                        code={`https://github.com/dedekysf/Tasktagdesignsystem/blob/main/src/components/Dropdown.tsx`}
                      />
                    </TabPanel>
                  </TabsContainer>
                </div>

                {/* Section 3: Borderless */}
                <div style={{ marginBottom: 'var(--spacing-56)' }}>
                  <h3 style={{ fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--spacing-8)' }}>Borderless</h3>
                  <TabsContainer
                    activeTab={dropdownVariantTab}
                    onTabChange={setDropdownVariantTab}
                    tabs={[
                      { value: 'preview', label: 'Preview' },
                      { value: 'usage', label: 'Usage' },
                      { value: 'github', label: 'GitHub URL' }
                    ]
                  }>
                    <TabPanel value="preview" activeTab={dropdownVariantTab}>
                      <div className="component-card">
                        <Dropdown
                          size="md"
                          variant="borderless"
                          label="Label"
                          options={dropdownOptions}
                          placeholder="Select an option"
                        />
                      </div>
                    </TabPanel>
                    <TabPanel value="usage" activeTab={dropdownVariantTab}>
                      <CodeExample
                        title="Borderless Dropdown"
                        code={`import { Dropdown } from './components';

// Borderless variant (no border)
<Dropdown
  size="md"
  variant="borderless"
  label="Label"
  options={options}
  placeholder="Select an option"
/>`}
                      />
                    </TabPanel>
                    <TabPanel value="github" activeTab={dropdownVariantTab}>
                      <CodeExample
                        title="GitHub URL"
                        code={`https://github.com/dedekysf/Tasktagdesignsystem/blob/main/src/components/Dropdown.tsx`}
                      />
                    </TabPanel>
                  </TabsContainer>
                </div>

                {/* Section 4: Sizes */}
                <div style={{ marginBottom: 'var(--spacing-56)' }}>
                  <h3 style={{ fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--spacing-8)' }}>Sizes</h3>
                  <TabsContainer
                    activeTab={dropdownSizeTab}
                    onTabChange={setDropdownSizeTab}
                    tabs={[
                      { value: 'preview', label: 'Preview' },
                      { value: 'usage', label: 'Usage' },
                      { value: 'github', label: 'GitHub URL' }
                    ]
                  }>
                    <TabPanel value="preview" activeTab={dropdownSizeTab}>
                      <div className="component-card">
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-24)' }}>
                          <div>
                            <p className="text-web-metadata-primary text-metadata" style={{ marginBottom: 'var(--spacing-12)' }}>SM</p>
                            <Dropdown
                              size="sm"
                              label="Label"
                              options={dropdownOptions}
                              placeholder="Select an option"
                            />
                          </div>
                          <div>
                            <p className="text-web-metadata-primary text-metadata" style={{ marginBottom: 'var(--spacing-12)' }}>MD</p>
                            <Dropdown
                              size="md"
                              label="Label"
                              options={dropdownOptions}
                              placeholder="Select an option"
                            />
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel value="usage" activeTab={dropdownSizeTab}>
                      <CodeExample
                        title="Dropdown Sizes"
                        code={`import { Dropdown } from './components';

// Small size (sm)
<Dropdown
  size="sm"
  label="Label"
  options={options}
  placeholder="Select an option"
/>

// Medium size (md)
<Dropdown
  size="md"
  label="Label"
  options={options}
  placeholder="Select an option"
/>`}
                      />
                    </TabPanel>
                    <TabPanel value="github" activeTab={dropdownSizeTab}>
                      <CodeExample
                        title="GitHub URL"
                        code={`https://github.com/dedekysf/Tasktagdesignsystem/blob/main/src/components/Dropdown.tsx`}
                      />
                    </TabPanel>
                  </TabsContainer>
                </div>

                {/* Section 5: States */}
                <div style={{ marginBottom: 'var(--spacing-56)' }}>
                  <h3 style={{ fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--spacing-8)' }}>States</h3>
                  <TabsContainer
                    activeTab={dropdownStatesTab}
                    onTabChange={setDropdownStatesTab}
                    tabs={[
                      { value: 'preview', label: 'Preview' },
                      { value: 'usage', label: 'Usage' },
                      { value: 'github', label: 'GitHub URL' }
                    ]
                  }>
                    <TabPanel value="preview" activeTab={dropdownStatesTab}>
                      <div className="component-card">
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-24)' }}>
                          <div>
                            <p className="text-web-metadata-primary text-metadata" style={{ marginBottom: 'var(--spacing-12)' }}>REQUIRED</p>
                            <Dropdown
                              size="md"
                              label="Label"
                              required={true}
                              options={dropdownOptions}
                              placeholder="Select an option"
                            />
                          </div>
                          <div>
                            <p className="text-web-metadata-primary text-metadata" style={{ marginBottom: 'var(--spacing-12)' }}>ERROR</p>
                            <Dropdown
                              size="md"
                              label="Label"
                              errorMessage="This field is required"
                              options={dropdownOptions}
                              placeholder="Select an option"
                            />
                          </div>
                          <div>
                            <p className="text-web-metadata-primary text-metadata" style={{ marginBottom: 'var(--spacing-12)' }}>DISABLED</p>
                            <Dropdown
                              size="md"
                              label="Label"
                              options={dropdownOptions}
                              value="option1"
                              disabled={true}
                              placeholder="Select an option"
                            />
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel value="usage" activeTab={dropdownStatesTab}>
                      <CodeExample
                        title="Dropdown States"
                        code={`import { Dropdown } from './components';

// Required state
<Dropdown
  size="md"
  label="Label"
  required={true}
  options={options}
  placeholder="Select an option"
/>

// Error state
<Dropdown
  size="md"
  label="Label"
  variant="error"
  options={options}
  placeholder="Select an option"
/>

// Disabled state
<Dropdown
  size="md"
  label="Label"
  disabled={true}
  options={options}
  placeholder="Select an option"
/>`}
                      />
                    </TabPanel>
                    <TabPanel value="github" activeTab={dropdownStatesTab}>
                      <CodeExample
                        title="GitHub URL"
                        code={`https://github.com/dedekysf/Tasktagdesignsystem/blob/main/src/components/Dropdown.tsx`}
                      />
                    </TabPanel>
                  </TabsContainer>
                </div>
            </section>
          )}

          {/* Modal Component */}
          {activeSection === 'modal' && (
            <section>
              <SectionHeader
                icon={Box}
                title="Modal"
                description="Total Variant: 2"
              />

              {/* Section 1: Two Action Modal */}
              <div style={{ marginBottom: 'var(--spacing-56)' }}>
                <h3 style={{ fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--spacing-8)' }}>Web Modal</h3>
                <TabsContainer
                  activeTab={modalTwoActionTab}
                  onTabChange={setModalTwoActionTab}
                  tabs={[
                    { value: 'preview', label: 'Preview' },
                    { value: 'usage', label: 'Usage' },
                    { value: 'github', label: 'GitHub URL' }
                  ]}
                >
                  <TabPanel value="preview" activeTab={modalTwoActionTab}>
                    <div className="component-card">
                      <Button 
                        variant="fill" 
                        size="md"
                        className="btn-secondary"
                        onClick={() => setIsTwoActionModalOpen(true)}
                        style={{ width: '200px' }}
                      >
                        click me!
                      </Button>
                      
                      {isTwoActionModalOpen && (
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
                          onClick={() => setIsTwoActionModalOpen(false)}
                        >
                          <div onClick={(e) => e.stopPropagation()}>
                            <Modal
                              variant="one-action"
                              title="Modal Title"
                              description="Modal Content"
                              primaryButtonText="Action"
                              onPrimaryClick={() => {
                                console.log('Action clicked');
                                setIsTwoActionModalOpen(false);
                              }}
                              onClose={() => setIsTwoActionModalOpen(false)}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </TabPanel>
                  <TabPanel value="usage" activeTab={modalTwoActionTab}>
                    <CodeExample
                      title="Web Modal Usage"
                      code={`import { Modal } from './components';

<Modal
  variant="one-action"
  title="Modal Title"
  description="Modal Content"
  primaryButtonText="Action"
  onPrimaryClick={() => console.log('Action clicked')}
  onClose={() => console.log('Close clicked')}
/>`}
                    />
                  </TabPanel>
                  <TabPanel value="github" activeTab={modalTwoActionTab}>
                    <CodeExample
                      title="GitHub URL"
                      code={`https://github.com/dedekysf/Tasktagdesignsystem/blob/main/src/components/Modal.tsx`}
                    />
                  </TabPanel>
                </TabsContainer>
              </div>

              {/* Section 2: Mobile Modal */}
              <div style={{ marginBottom: 'var(--spacing-56)' }}>
                <h3 style={{ fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--spacing-8)' }}>Mobile Modal</h3>
                <TabsContainer
                  activeTab={modalOneActionTab}
                  onTabChange={setModalOneActionTab}
                  tabs={[
                    { value: 'preview', label: 'Preview' },
                    { value: 'usage', label: 'Usage' },
                    { value: 'github', label: 'GitHub URL' }
                  ]}
                >
                  <TabPanel value="preview" activeTab={modalOneActionTab}>
                    <div className="component-card">
                      <Button 
                        variant="fill" 
                        size="md"
                        className="btn-secondary"
                        onClick={() => setIsOneActionModalOpen(true)}
                        style={{ width: '200px' }}
                      >
                        click me!
                      </Button>
                      
                      {isOneActionModalOpen && (
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
                          onClick={() => setIsOneActionModalOpen(false)}
                        >
                          <div onClick={(e) => e.stopPropagation()}>
                            <Modal
                              variant="one-action"
                              size="mobile"
                              title="Limit Reached"
                              description="You've reached the maximum of 64 selections."
                              primaryButtonText="Got It"
                              secondaryButtonText="Cancel"
                              onPrimaryClick={() => {
                                console.log('Got It clicked');
                                setIsOneActionModalOpen(false);
                              }}
                              onSecondaryClick={() => {
                                console.log('Cancel clicked');
                                setIsOneActionModalOpen(false);
                              }}
                              onClose={() => setIsOneActionModalOpen(false)}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </TabPanel>
                  <TabPanel value="usage" activeTab={modalOneActionTab}>
                    <CodeExample
                      title="Mobile Modal Usage"
                      code={`import { Modal } from './components';

<Modal
  variant="one-action"
  size="mobile"
  title="Limit Reached"
  description="You've reached the maximum of 64 selections."
  primaryButtonText="Got It"
  secondaryButtonText="Cancel"
  onPrimaryClick={() => console.log('Got It clicked')}
  onSecondaryClick={() => console.log('Cancel clicked')}
  onClose={() => console.log('Close clicked')}
/>`}
                    />
                  </TabPanel>
                  <TabPanel value="github" activeTab={modalOneActionTab}>
                    <CodeExample
                      title="GitHub URL"
                      code={`https://github.com/dedekysf/Tasktagdesignsystem/blob/main/src/components/Modal.tsx`}
                    />
                  </TabPanel>
                </TabsContainer>
              </div>
            </section>
          )}

          {/* Datepicker Component */}
          {activeSection === 'datepicker' && (
            <section>
              <SectionHeader
                icon={LayoutGrid}
                title="Basic Mobile"
                description="Total Variant: 2"
              />

              <TabsContainer
                activeTab={datepickerBasicTab}
                onTabChange={setDatepickerBasicTab}
                tabs={[
                  { value: 'preview', label: 'Preview' },
                  { value: 'usage', label: 'Usage' },
                  { value: 'github', label: 'GitHub URL' }
                ]}
              >
                <TabPanel value="preview" activeTab={datepickerBasicTab}>
                  <div className="component-card">
                    <div style={{ maxWidth: '375px' }}>
                      <Datepicker
                        variant="basic"
                        size="md"
                        placeholder="Select date"
                        value={selectedDate}
                        onChange={setSelectedDate}
                      />
                    </div>
                  </div>
                </TabPanel>
                <TabPanel value="usage" activeTab={datepickerBasicTab}>
                  <CodeExample
                    title="Basic Datepicker"
                    code={`import { Datepicker } from './components';

<Datepicker
  variant="basic"
  size="md"
  placeholder="Select date"
  value={selectedDate}
  onChange={setSelectedDate}
/>`}
                  />
                </TabPanel>
                <TabPanel value="github" activeTab={datepickerBasicTab}>
                  <CodeExample
                    title="GitHub URL"
                    code={`https://github.com/dedekysf/Tasktagdesignsystem/blob/main/src/components/Datepicker.tsx`}
                  />
                </TabPanel>
              </TabsContainer>
            </section>
          )}

          {/* Avatars Component */}
          {activeSection === 'avatars' && (
            <section>
              <SectionHeader
                icon={User}
                title="Avatars"
                description="Total Variant: 4"
              />

              <div>
                {/* 1. Icon Avatars */}
                <div style={{ marginBottom: 'var(--spacing-56)' }}>
                  <h3 style={{ fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--spacing-8)' }}>Icon Avatars</h3>
                  <TabsContainer
                    activeTab={avatarIconTab}
                    onTabChange={setAvatarIconTab}
                    tabs={[
                      { value: 'preview', label: 'Preview' },
                      { value: 'usage', label: 'Usage' },
                      { value: 'github', label: 'GitHub URL' }
                    ]}
                  >
                    <TabPanel value="preview" activeTab={avatarIconTab}>
                      <div className="component-card">
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3">
                          <div className="typography-card p-6 flex flex-col items-center gap-3">
                            <Avatar size="xs" variant="icon" />
                            <p className="text-web-metadata-primary text-metadata">Extra Small (24px)</p>
                          </div>

                          <div className="typography-card p-6 flex flex-col items-center gap-3">
                            <Avatar size="sm" variant="icon" />
                            <p className="text-web-metadata-primary text-metadata">Small (32px)</p>
                          </div>

                          <div className="typography-card p-6 flex flex-col items-center gap-3">
                            <Avatar size="md" variant="icon" />
                            <p className="text-web-metadata-primary text-metadata">Medium (40px)</p>
                          </div>

                          <div className="typography-card p-6 flex flex-col items-center gap-3">
                            <Avatar size="lg" variant="icon" />
                            <p className="text-web-metadata-primary text-metadata">Large (48px)</p>
                          </div>

                          <div className="typography-card p-6 flex flex-col items-center gap-3">
                            <Avatar size="xl" variant="icon" />
                            <p className="text-web-metadata-primary text-metadata">Extra Large (56px)</p>
                          </div>

                          <div className="typography-card p-6 flex flex-col items-center gap-3">
                            <Avatar size="md" variant="icon" disabled={true} />
                            <p className="text-web-metadata-primary text-metadata">Disabled (40px)</p>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel value="usage" activeTab={avatarIconTab}>
                      <CodeExample
                        title="Icon Avatar Usage"
                        code={`import { Avatar } from './components';

// Extra Small icon avatar
<Avatar size="xs" variant="icon" />

// Small icon avatar
<Avatar size="sm" variant="icon" />

// Medium icon avatar (default)
<Avatar size="md" variant="icon" />

// Large icon avatar
<Avatar size="lg" variant="icon" />

// Extra Large icon avatar
<Avatar size="xl" variant="icon" />

// Disabled icon avatar (background: grey-02, icon: grey-05)
<Avatar size="md" variant="icon" disabled={true} />`}
                      />
                    </TabPanel>
                    <TabPanel value="github" activeTab={avatarIconTab}>
                      <CodeExample
                        title="GitHub URL"
                        code={`https://github.com/dedekysf/Tasktagdesignsystem/blob/main/src/components/AvatarComponent.tsx`}
                      />
                    </TabPanel>
                  </TabsContainer>
                </div>

                {/* 2. Image Avatars */}
                <div style={{ marginBottom: 'var(--spacing-56)' }}>
                  <h3 style={{ fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--spacing-8)' }}>Image Avatars</h3>
                  <TabsContainer
                    activeTab={avatarImageTab}
                    onTabChange={setAvatarImageTab}
                    tabs={[
                      { value: 'preview', label: 'Preview' },
                      { value: 'usage', label: 'Usage' },
                      { value: 'github', label: 'GitHub URL' }
                    ]}
                  >
                    <TabPanel value="preview" activeTab={avatarImageTab}>
                      <div className="component-card">
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3">
                          <div className="typography-card p-6 flex flex-col items-center gap-3">
                            <Avatar size="xs" variant="image" />
                            <p className="text-web-metadata-primary text-metadata">Extra Small (24px)</p>
                          </div>

                          <div className="typography-card p-6 flex flex-col items-center gap-3">
                            <Avatar size="sm" variant="image" />
                            <p className="text-web-metadata-primary text-metadata">Small (32px)</p>
                          </div>

                          <div className="typography-card p-6 flex flex-col items-center gap-3">
                            <Avatar size="md" variant="image" />
                            <p className="text-web-metadata-primary text-metadata">Medium (40px)</p>
                          </div>

                          <div className="typography-card p-6 flex flex-col items-center gap-3">
                            <Avatar size="lg" variant="image" />
                            <p className="text-web-metadata-primary text-metadata">Large (48px)</p>
                          </div>

                          <div className="typography-card p-6 flex flex-col items-center gap-3">
                            <Avatar size="xl" variant="image" />
                            <p className="text-web-metadata-primary text-metadata">Extra Large (56px)</p>
                          </div>

                          <div className="typography-card p-6 flex flex-col items-center gap-3">
                            <Avatar size="md" variant="image" disabled={true} />
                            <p className="text-web-metadata-primary text-metadata">Disabled (40px)</p>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel value="usage" activeTab={avatarImageTab}>
                      <CodeExample
                        title="Image Avatar Usage"
                        code={`import { Avatar } from './components';

// Extra Small image avatar
<Avatar 
  size="xs" 
  variant="image" 
  imageUrl="https://example.com/avatar.jpg" 
/>

// Small image avatar
<Avatar 
  size="sm" 
  variant="image" 
  imageUrl="https://example.com/avatar.jpg" 
/>

// Medium image avatar
<Avatar 
  size="md" 
  variant="image" 
  imageUrl="https://example.com/avatar.jpg" 
/>

// Large image avatar
<Avatar 
  size="lg" 
  variant="image" 
  imageUrl="https://example.com/avatar.jpg" 
/>

// Extra Large image avatar
<Avatar 
  size="xl" 
  variant="image" 
  imageUrl="https://example.com/avatar.jpg" 
/>

// Disabled image avatar (grayscale filter applied)
<Avatar 
  size="md" 
  variant="image" 
  imageUrl="https://example.com/avatar.jpg"
  disabled={true} 
/>`}
                      />
                    </TabPanel>
                    <TabPanel value="github" activeTab={avatarImageTab}>
                      <CodeExample
                        title="GitHub URL"
                        code={`https://github.com/dedekysf/Tasktagdesignsystem/blob/main/src/components/AvatarComponent.tsx`}
                      />
                    </TabPanel>
                  </TabsContainer>
                </div>

                {/* 3. Initials Avatars */}
                <div style={{ marginBottom: 'var(--spacing-56)' }}>
                  <h3 style={{ fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--spacing-8)' }}>Initials Avatars</h3>
                  <TabsContainer
                    activeTab={avatarInitialsTab}
                    onTabChange={setAvatarInitialsTab}
                    tabs={[
                      { value: 'preview', label: 'Preview' },
                      { value: 'usage', label: 'Usage' },
                      { value: 'github', label: 'GitHub URL' }
                    ]}
                  >
                    <TabPanel value="preview" activeTab={avatarInitialsTab}>
                      <div className="component-card">
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3">
                          <div className="typography-card p-6 flex flex-col items-center gap-3">
                            <Avatar size="xs" variant="initials" initials="AZ" />
                            <p className="text-web-metadata-primary text-metadata">Extra Small (24px)</p>
                          </div>

                          <div className="typography-card p-6 flex flex-col items-center gap-3">
                            <Avatar size="sm" variant="initials" initials="JD" />
                            <p className="text-web-metadata-primary text-metadata">Small (32px)</p>
                          </div>

                          <div className="typography-card p-6 flex flex-col items-center gap-3">
                            <Avatar size="md" variant="initials" initials="SK" />
                            <p className="text-web-metadata-primary text-metadata">Medium (40px)</p>
                          </div>

                          <div className="typography-card p-6 flex flex-col items-center gap-3">
                            <Avatar size="lg" variant="initials" initials="MR" />
                            <p className="text-web-metadata-primary text-metadata">Large (48px)</p>
                          </div>

                          <div className="typography-card p-6 flex flex-col items-center gap-3">
                            <Avatar size="xl" variant="initials" initials="TW" />
                            <p className="text-web-metadata-primary text-metadata">Extra Large (56px)</p>
                          </div>

                          <div className="typography-card p-6 flex flex-col items-center gap-3">
                            <Avatar size="md" variant="initials" initials="SK" disabled={true} />
                            <p className="text-web-metadata-primary text-metadata">Disabled (40px)</p>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel value="usage" activeTab={avatarInitialsTab}>
                      <CodeExample
                        title="Initials Avatar Usage"
                        code={`import { Avatar } from './components';

// Extra Small initials avatar
<Avatar size="xs" variant="initials" initials="AZ" />

// Small initials avatar
<Avatar size="sm" variant="initials" initials="JD" />

// Medium initials avatar
<Avatar size="md" variant="initials" initials="SK" />

// Large initials avatar
<Avatar size="lg" variant="initials" initials="MR" />

// Extra Large initials avatar
<Avatar size="xl" variant="initials" initials="TW" />

// Disabled initials avatar (background: grey-02, text: grey-05)
<Avatar 
  size="md" 
  variant="initials" 
  initials="SK"
  disabled={true} 
/>`}
                      />
                    </TabPanel>
                    <TabPanel value="github" activeTab={avatarInitialsTab}>
                      <CodeExample
                        title="GitHub URL"
                        code={`https://github.com/dedekysf/Tasktagdesignsystem/blob/main/src/components/AvatarComponent.tsx`}
                      />
                    </TabPanel>
                  </TabsContainer>
                </div>

                {/* 4. Avatar Group */}
                <div style={{ marginBottom: 'var(--spacing-56)' }}>
                  <h3 style={{ fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--spacing-8)' }}>Avatar Group</h3>
                  <TabsContainer
                    activeTab={avatarGroupTab}
                    onTabChange={setAvatarGroupTab}
                    tabs={[
                      { value: 'preview', label: 'Preview' },
                      { value: 'usage', label: 'Usage' },
                      { value: 'github', label: 'GitHub URL' }
                    ]}
                  >
                    <TabPanel value="preview" activeTab={avatarGroupTab}>
                      <div className="component-card">
                        <p className="text-web-metadata-primary text-metadata mb-3">SIZE: SM</p>
                        <div style={{ marginBottom: 'var(--spacing-24)' }}>
                          <AvatarGroup
                            avatars={[
                              { variant: 'image' },
                              { variant: 'image' },
                              { variant: 'initials', initials: 'SK' }
                            ]}
                            size="sm"
                          />
                        </div>

                        <p className="text-web-metadata-primary text-metadata mb-3">SIZE: MD</p>
                        <div style={{ marginBottom: 'var(--spacing-24)' }}>
                          <AvatarGroup
                            avatars={[
                              { variant: 'image' },
                              { variant: 'image' },
                              { variant: 'initials', initials: 'SK' }
                            ]}
                            size="md"
                          />
                        </div>

                        <p className="text-web-metadata-primary text-metadata mb-3">WITH MAX LIMIT (+N)</p>
                        <div style={{ marginBottom: 'var(--spacing-24)' }}>
                          <AvatarGroup
                            avatars={[
                              { variant: 'image' },
                              { variant: 'image' },
                              { variant: 'initials', initials: 'SK' },
                              { variant: 'initials', initials: 'MR' },
                              { variant: 'icon' }
                            ]}
                            size="md"
                            max={3}
                          />
                        </div>

                        <p className="text-web-metadata-primary text-metadata mb-3">DISABLED STATE</p>
                        <div>
                          <AvatarGroup
                            avatars={[
                              { variant: 'image' },
                              { variant: 'image' },
                              { variant: 'initials', initials: 'SK' }
                            ]}
                            size="md"
                            disabled={true}
                          />
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel value="usage" activeTab={avatarGroupTab}>
                      <CodeExample
                        title="Avatar Group Usage"
                        code={`import { AvatarGroup } from './components';

// Basic avatar group
<AvatarGroup
  avatars={[
    { variant: 'image', imageUrl: 'https://...' },
    { variant: 'image', imageUrl: 'https://...' },
    { variant: 'initials', initials: 'SK' }
  ]}
  size="md"
/>

// Avatar group with max limit
<AvatarGroup
  avatars={[
    { variant: 'image', imageUrl: 'https://...' },
    { variant: 'image', imageUrl: 'https://...' },
    { variant: 'initials', initials: 'SK' },
    { variant: 'initials', initials: 'MR' },
    { variant: 'icon' }
  ]}
  size="md"
  max={3}
/>

// Disabled avatar group
<AvatarGroup
  avatars={[
    { variant: 'image', imageUrl: 'https://...' },
    { variant: 'image', imageUrl: 'https://...' },
    { variant: 'initials', initials: 'SK' }
  ]}
  size="md"
  disabled={true}
/>

// Available sizes: xs, sm, md, lg, xl`}
                      />
                    </TabPanel>
                    <TabPanel value="github" activeTab={avatarGroupTab}>
                      <CodeExample
                        title="GitHub URL"
                        code={`https://github.com/dedekysf/Tasktagdesignsystem/blob/main/src/components/AvatarGroup.tsx`}
                      />
                    </TabPanel>
                  </TabsContainer>
                </div>

              </div>
            </section>
          )}

          {/* Tabs Item Component */}
          {activeSection === 'tabs-item' && (
            <section>
              <SectionHeader
                icon={LayoutGrid}
                title="Tabs"
                description="Total Variant: 3"
              />

              <div>
                {/* Section 1: Basic */}
                <div style={{ marginBottom: 'var(--spacing-56)' }}>
                  <h3 style={{ fontSize: 'var(--text-h3)', fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--spacing-8)' }}>Basic</h3>
                  <TabsContainer
                    activeTab={tabBasicMdTab}
                    onTabChange={setTabBasicMdTab}
                    tabs={[
                      { value: 'preview', label: 'Preview' },
                      { value: 'usage', label: 'Usage' },
                      { value: 'github', label: 'GitHub URL' }
                    ]}
                  >
                    <TabPanel value="preview" activeTab={tabBasicMdTab}>
                      <div className="component-card space-y-8">
                        {/* MD Size */}
                        <div>
                          <h4 style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-8)' }}>MD</h4>
                          <div className="flex gap-1" style={{ borderBottom: '1px solid var(--grey-03)' }}>
                            <TabItem 
                              variant="default" 
                              label="Tab 1" 
                              size="md" 
                              isActive={activeTabBasicMd === 'tab1'}
                              onClick={() => setActiveTabBasicMd('tab1')}
                            />
                            <TabItem 
                              variant="default" 
                              label="Tab 2" 
                              size="md"
                              badge={20}
                              isActive={activeTabBasicMd === 'tab2'}
                              onClick={() => setActiveTabBasicMd('tab2')}
                            />
                            <TabItem 
                              variant="default" 
                              label="Tab 3" 
                              size="md"
                              isActive={activeTabBasicMd === 'tab3'}
                              onClick={() => setActiveTabBasicMd('tab3')}
                            />
                          </div>
                        </div>

                        {/* SM Size */}
                        <div>
                          <h4 style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-8)' }}>SM</h4>
                          <div className="flex gap-1" style={{ borderBottom: '1px solid var(--grey-03)' }}>
                            <TabItem 
                              variant="default" 
                              label="Tab 1" 
                              size="sm" 
                              isActive={activeTabBasicSm === 'tab1'}
                              onClick={() => setActiveTabBasicSm('tab1')}
                            />
                            <TabItem 
                              variant="default" 
                              label="Tab 2" 
                              size="sm"
                              badge={20}
                              isActive={activeTabBasicSm === 'tab2'}
                              onClick={() => setActiveTabBasicSm('tab2')}
                            />
                            <TabItem 
                              variant="default" 
                              label="Tab 3" 
                              size="sm"
                              isActive={activeTabBasicSm === 'tab3'}
                              onClick={() => setActiveTabBasicSm('tab3')}
                            />
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel value="usage" activeTab={tabBasicMdTab}>
                      <CodeExample 
                        code={`import { TabItem } from './components/TabItem';

export default function Example() {
  return (
    <div className="flex gap-1" style={{ borderBottom: '1px solid var(--grey-03)' }}>
      {/* MD Size */}
      <TabItem 
        variant="default" 
        label="Tab 1" 
        size="md" 
        isActive={true}
        onClick={() => {}}
      />
      <TabItem 
        variant="default" 
        label="Tab 2" 
        size="md"
        badge={20}
        isActive={false}
        onClick={() => {}}
      />
      
      {/* SM Size */}
      <TabItem 
        variant="default" 
        label="Tab 1" 
        size="sm" 
        isActive={true}
        onClick={() => {}}
      />
    </div>
  );
}`}
                      />
                    </TabPanel>
                    <TabPanel value="github" activeTab={tabBasicMdTab}>
                      <CodeExample
                        title="GitHub URL"
                        code={`https://github.com/dedekysf/Tasktagdesignsystem/blob/main/src/components/TabItem.tsx

TabsContainer:
https://github.com/dedekysf/Tasktagdesignsystem/blob/main/src/components/TabsContainer.tsx`}
                      />
                    </TabPanel>
                  </TabsContainer>
                </div>

                {/* Section 2: With Left Icon */}
                <div style={{ marginBottom: 'var(--spacing-56)' }}>
                  <h3 style={{ fontSize: 'var(--text-h3)', fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--spacing-8)' }}>With Left Icon</h3>
                  <TabsContainer
                    activeTab={tabIconMdTab}
                    onTabChange={setTabIconMdTab}
                    tabs={[
                      { value: 'preview', label: 'Preview' },
                      { value: 'usage', label: 'Usage' },
                      { value: 'github', label: 'GitHub URL' }
                    ]}
                  >
                    <TabPanel value="preview" activeTab={tabIconMdTab}>
                      <div className="component-card space-y-8">
                        {/* MD Size */}
                        <div>
                          <h4 style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-8)' }}>MD</h4>
                          <div className="flex gap-1" style={{ borderBottom: '1px solid var(--grey-03)' }}>
                            <TabItem 
                              variant="icon-left" 
                              label="Tab 1" 
                              icon={Home}
                              size="md" 
                              isActive={activeTabIconMd === 'tab1'}
                              onClick={() => setActiveTabIconMd('tab1')}
                            />
                            <TabItem 
                              variant="icon-left" 
                              label="Tab 2" 
                              icon={Settings}
                              size="md"
                              badge={20}
                              isActive={activeTabIconMd === 'tab2'}
                              onClick={() => setActiveTabIconMd('tab2')}
                            />
                            <TabItem 
                              variant="icon-left" 
                              label="Tab 3" 
                              icon={Info}
                              size="md"
                              isActive={activeTabIconMd === 'tab3'}
                              onClick={() => setActiveTabIconMd('tab3')}
                            />
                          </div>
                        </div>

                        {/* SM Size */}
                        <div>
                          <h4 style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-8)' }}>SM</h4>
                          <div className="flex gap-1" style={{ borderBottom: '1px solid var(--grey-03)' }}>
                            <TabItem 
                              variant="icon-left" 
                              label="Tab 1" 
                              icon={Home}
                              size="sm" 
                              isActive={activeTabIconSm === 'tab1'}
                              onClick={() => setActiveTabIconSm('tab1')}
                            />
                            <TabItem 
                              variant="icon-left" 
                              label="Tab 2" 
                              icon={Settings}
                              size="sm"
                              badge={20}
                              isActive={activeTabIconSm === 'tab2'}
                              onClick={() => setActiveTabIconSm('tab2')}
                            />
                            <TabItem 
                              variant="icon-left" 
                              label="Tab 3" 
                              icon={Info}
                              size="sm"
                              isActive={activeTabIconSm === 'tab3'}
                              onClick={() => setActiveTabIconSm('tab3')}
                            />
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel value="usage" activeTab={tabIconMdTab}>
                      <CodeExample 
                        code={`import { TabItem } from './components/TabItem';
import { Home, Settings, Info } from 'lucide-react';
import { useState } from 'react';

function MyTabs() {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <div className="flex gap-1" style={{ borderBottom: '1px solid var(--grey-03)' }}>
      <TabItem 
        variant="icon-left" 
        label="Tab 1" 
        icon={Home}
        size="md" 
        isActive={activeTab === 'tab1'}
        onClick={() => setActiveTab('tab1')}
      />
      <TabItem 
        variant="icon-left" 
        label="Tab 2" 
        icon={Settings}
        size="md"
        badge={20}
        isActive={activeTab === 'tab2'}
        onClick={() => setActiveTab('tab2')}
      />
      <TabItem 
        variant="icon-left" 
        label="Tab 3" 
        icon={Info}
        size="md"
        isActive={activeTab === 'tab3'}
        onClick={() => setActiveTab('tab3')}
      />
    </div>
  );
}`}
                      />
                    </TabPanel>
                    <TabPanel value="github" activeTab={tabIconMdTab}>
                      <CodeExample
                        title="GitHub URL"
                        code={`https://github.com/dedekysf/Tasktagdesignsystem/blob/main/src/components/TabItem.tsx

TabsContainer:
https://github.com/dedekysf/Tasktagdesignsystem/blob/main/src/components/TabsContainer.tsx`}
                      />
                    </TabPanel>
                  </TabsContainer>
                </div>

                {/* Section 3: Disabled State */}
                <div style={{ marginBottom: 'var(--spacing-56)' }}>
                  <h3 style={{ fontSize: 'var(--text-h3)', fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--spacing-8)' }}>Disabled State</h3>
                  <TabsContainer
                    activeTab={tabDisabledTab}
                    onTabChange={setTabDisabledTab}
                    tabs={[
                      { value: 'preview', label: 'Preview' },
                      { value: 'usage', label: 'Usage' },
                      { value: 'github', label: 'GitHub URL' }
                    ]}
                  >
                    <TabPanel value="preview" activeTab={tabDisabledTab}>
                      <div className="component-card">
                        <div className="flex gap-1" style={{ borderBottom: '1px solid var(--grey-03)' }}>
                          <TabItem 
                            variant="icon-left" 
                            label="Tab 1" 
                            icon={Home}
                            size="md" 
                            disabled
                          />
                          <TabItem 
                            variant="icon-left" 
                            label="Tab 2" 
                            icon={Settings}
                            size="md"
                            badge={20}
                            disabled
                          />
                          <TabItem 
                            variant="icon-left" 
                            label="Tab 3" 
                            icon={Info}
                            size="md"
                            disabled
                          />
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel value="usage" activeTab={tabDisabledTab}>
                      <CodeExample 
                        code={`import { TabItem } from './components/TabItem';
import { Home, Settings, Info } from 'lucide-react';

function MyTabs() {
  return (
    <div className="flex gap-1" style={{ borderBottom: '1px solid var(--grey-03)' }}>
      <TabItem 
        variant="icon-left" 
        label="Tab 1" 
        icon={Home}
        size="md" 
        disabled
      />
      <TabItem 
        variant="icon-left" 
        label="Tab 2" 
        icon={Settings}
        size="md"
        badge={20}
        disabled
      />
      <TabItem 
        variant="icon-left" 
        label="Tab 3" 
        icon={Info}
        size="md"
        disabled
      />
    </div>
  );
}`}
                      />
                    </TabPanel>
                  </TabsContainer>
                </div>
                <TabPanel value="github" activeTab={tabDisabledTab}>
                  <CodeExample
                    title="GitHub URL"
                    code={`https://github.com/dedekysf/Tasktagdesignsystem/blob/main/src/components/TabItem.tsx

TabsContainer:
https://github.com/dedekysf/Tasktagdesignsystem/blob/main/src/components/TabsContainer.tsx`}
                  />
                </TabPanel>
              </div>
            </section>
          )}

          {/* Tooltip Component */}
          {activeSection === 'tooltip' && (
            <section>
              <SectionHeader
                icon={Info}
                title="Tooltip"
                description="Total Variant: 8"
              />

              <div>
                {/* Section 1: Variant Tooltip */}
                <div style={{ marginBottom: 'var(--spacing-56)' }}>
                  <h3 style={{ fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--spacing-8)' }}>Variant Tooltip</h3>
                  <TabsContainer
                    activeTab={tooltipVariantTab}
                    onTabChange={setTooltipVariantTab}
                    tabs={[
                      { value: 'preview', label: 'Preview' },
                      { value: 'usage', label: 'Usage' },
                      { value: 'github', label: 'GitHub URL' }
                    ]}
                  >
                    <TabPanel value="preview" activeTab={tooltipVariantTab}>
                      <div className="component-card">
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--spacing-24)', padding: 'var(--spacing-48)', maxWidth: '600px', margin: '0 auto' }}>
                          {/* Row 1: Top variants */}
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)', alignItems: 'center' }}>
                            <Tooltip variant="top-left" content="Top Left">
                              <Button variant="fill" size="sm" className="btn-secondary">Top Left</Button>
                            </Tooltip>
                            <span style={{ fontSize: '10px', color: 'var(--text-secondary)' }}>Top Left</span>
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)', alignItems: 'center' }}>
                            <Tooltip variant="top-center" content="Top Center">
                              <Button variant="fill" size="sm" className="btn-secondary">Top Center</Button>
                            </Tooltip>
                            <span style={{ fontSize: '10px', color: 'var(--text-secondary)' }}>Top Center</span>
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)', alignItems: 'center' }}>
                            <Tooltip variant="top-right" content="Top Right">
                              <Button variant="fill" size="sm" className="btn-secondary">Top Right</Button>
                            </Tooltip>
                            <span style={{ fontSize: '10px', color: 'var(--text-secondary)' }}>Top Right</span>
                          </div>

                          {/* Row 2: Side variants */}
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)', alignItems: 'center' }}>
                            <Tooltip variant="left" content="Left">
                              <Button variant="fill" size="sm" className="btn-secondary">Left</Button>
                            </Tooltip>
                            <span style={{ fontSize: '10px', color: 'var(--text-secondary)' }}>Left</span>
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)', alignItems: 'center' }}>
                            {/* Empty center cell */}
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)', alignItems: 'center' }}>
                            <Tooltip variant="right" content="Right">
                              <Button variant="fill" size="sm" className="btn-secondary">Right</Button>
                            </Tooltip>
                            <span style={{ fontSize: '10px', color: 'var(--text-secondary)' }}>Right</span>
                          </div>

                          {/* Row 3: Bottom variants */}
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)', alignItems: 'center' }}>
                            <Tooltip variant="bottom-left" content="Bottom Left">
                              <Button variant="fill" size="sm" className="btn-secondary">Bottom Left</Button>
                            </Tooltip>
                            <span style={{ fontSize: '10px', color: 'var(--text-secondary)' }}>Bottom Left</span>
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)', alignItems: 'center' }}>
                            <Tooltip variant="bottom-center" content="Bottom Center">
                              <Button variant="fill" size="sm" className="btn-secondary">Bottom Center</Button>
                            </Tooltip>
                            <span style={{ fontSize: '10px', color: 'var(--text-secondary)' }}>Bottom Center</span>
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)', alignItems: 'center' }}>
                            <Tooltip variant="bottom-right" content="Bottom Right">
                              <Button variant="fill" size="sm" className="btn-secondary">Bottom Right</Button>
                            </Tooltip>
                            <span style={{ fontSize: '10px', color: 'var(--text-secondary)' }}>Bottom Right</span>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel value="usage" activeTab={tooltipVariantTab}>
                      <CodeExample 
                        code={`import { Tooltip } from './components/Tooltip';
import { Button } from './components/Button';

export default function Example() {
  return (
    <div>
      {/* Top variants */}
      <Tooltip variant="top-left" content="Top Left">
        <Button variant="fill" size="sm" className="btn-secondary">Top Left</Button>
      </Tooltip>
      
      <Tooltip variant="top-center" content="Top Center">
        <Button variant="fill" size="sm" className="btn-secondary">Top Center</Button>
      </Tooltip>
      
      <Tooltip variant="top-right" content="Top Right">
        <Button variant="fill" size="sm" className="btn-secondary">Top Right</Button>
      </Tooltip>

      {/* Side variants */}
      <Tooltip variant="left" content="Left">
        <Button variant="fill" size="sm" className="btn-secondary">Left</Button>
      </Tooltip>
      
      <Tooltip variant="right" content="Right">
        <Button variant="fill" size="sm" className="btn-secondary">Right</Button>
      </Tooltip>

      {/* Bottom variants */}
      <Tooltip variant="bottom-left" content="Bottom Left">
        <Button variant="fill" size="sm" className="btn-secondary">Bottom Left</Button>
      </Tooltip>
      
      <Tooltip variant="bottom-center" content="Bottom Center">
        <Button variant="fill" size="sm" className="btn-secondary">Bottom Center</Button>
      </Tooltip>
      
      <Tooltip variant="bottom-right" content="Bottom Right">
        <Button variant="fill" size="sm" className="btn-secondary">Bottom Right</Button>
      </Tooltip>
    </div>
  );
}`}
                      />
                    </TabPanel>
                    <TabPanel value="github" activeTab={tooltipVariantTab}>
                      <CodeExample
                        title="GitHub URL"
                        code={`https://github.com/dedekysf/Tasktagdesignsystem/blob/main/src/components/Tooltip.tsx`}
                      />
                    </TabPanel>
                  </TabsContainer>
                </div>

                {/* Section 2: Avatar Examples with Tooltip */}
                <div style={{ marginBottom: 'var(--spacing-56)' }}>
                  <h3 style={{ fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--spacing-8)' }}>Avatar Examples with Tooltip</h3>
                  <TabsContainer
                    activeTab={tooltipAvatarExamplesTab}
                    onTabChange={setTooltipAvatarExamplesTab}
                    tabs={[
                      { value: 'preview', label: 'Preview' },
                      { value: 'usage', label: 'Usage' },
                      { value: 'github', label: 'GitHub URL' }
                    ]}
                  >
                    <TabPanel value="preview" activeTab={tooltipAvatarExamplesTab}>
                      <div className="component-card">
                        <div style={{ display: 'flex', gap: 'var(--spacing-24)', alignItems: 'center', justifyContent: 'center', padding: 'var(--spacing-32)' }}>
                          {/* Avatar with Icon */}
                          <Tooltip 
                            variant="bottom-center" 
                            content={
                              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-8)' }}>
                                <Avatar 
                                  size="xs" 
                                  variant="icon"
                                  iconColor="var(--grey-05)"
                                  style={{ 
                                    backgroundColor: 'var(--grey-02)',
                                    cursor: 'default'
                                  }}
                                />
                                <span>user@example.com</span>
                              </div>
                            }
                          >
                            <Avatar 
                              size="md" 
                              variant="icon"
                              iconColor="var(--grey-05)"
                              style={{ 
                                backgroundColor: 'var(--grey-02)',
                                cursor: 'pointer'
                              }}
                            />
                          </Tooltip>

                          {/* Avatar with Initials */}
                          <Tooltip 
                            variant="bottom-center" 
                            content={
                              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-8)' }}>
                                <Avatar size="xs" variant="initials" initials="SJ" />
                                <span>Sarah Johnson</span>
                              </div>
                            }
                          >
                            <Avatar size="md" variant="initials" initials="SJ" />
                          </Tooltip>

                          {/* Avatar with Image */}
                          <Tooltip 
                            variant="bottom-center" 
                            content={
                              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-8)' }}>
                                <Avatar size="xs" variant="image" imageUrl="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjY0MDYyMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" />
                                <span>John Doe</span>
                              </div>
                            }
                          >
                            <Avatar size="md" variant="image" imageUrl="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjY0MDYyMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" />
                          </Tooltip>

                          {/* Avatar with detailed tooltip */}
                          <Tooltip 
                            variant="bottom-right" 
                            content={
                              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-8)' }}>
                                <Avatar size="xs" variant="initials" initials="EM" />
                                <span>Emily Martinez</span>
                              </div>
                            }
                          >
                            <Avatar size="md" variant="initials" initials="EM" />
                          </Tooltip>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel value="usage" activeTab={tooltipAvatarExamplesTab}>
                      <CodeExample 
                        code={`import { Tooltip } from './components/Tooltip';
import { Avatar } from './components/AvatarComponent';

export default function Example() {
  return (
    <div>
      {/* Avatar with icon in tooltip */}
      <Tooltip 
        variant="bottom-center" 
        content={
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-8)' }}>
            <Avatar 
              size="xs" 
              variant="icon"
              iconColor="var(--grey-05)"
              style={{ 
                backgroundColor: 'var(--grey-02)',
                cursor: 'default'
              }}
            />
            <span>user@example.com</span>
          </div>
        }
      >
        <Avatar 
          size="md" 
          variant="icon"
          iconColor="var(--grey-05)"
          style={{ 
            backgroundColor: 'var(--grey-02)',
            cursor: 'pointer'
          }}
        />
      </Tooltip>

      {/* Avatar with initials in tooltip */}
      <Tooltip 
        variant="bottom-center" 
        content={
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-8)' }}>
            <Avatar size="xs" variant="initials" initials="SJ" />
            <span>Sarah Johnson</span>
          </div>
        }
      >
        <Avatar size="md" variant="initials" initials="SJ" />
      </Tooltip>

      {/* Avatar with image in tooltip */}
      <Tooltip 
        variant="bottom-center" 
        content={
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-8)' }}>
            <Avatar size="xs" variant="image" imageUrl="https://example.com/avatar.jpg" />
            <span>John Doe</span>
          </div>
        }
      >
        <Avatar size="md" variant="image" imageUrl="https://example.com/avatar.jpg" />
      </Tooltip>

      {/* Avatar with detailed tooltip */}
      <Tooltip 
        variant="bottom-right" 
        content={
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-8)' }}>
            <Avatar size="xs" variant="initials" initials="EM" />
            <span>Emily Martinez</span>
          </div>
        }
      >
        <Avatar size="md" variant="initials" initials="EM" />
      </Tooltip>
    </div>
  );
}`}
                      />
                    </TabPanel>
                    <TabPanel value="github" activeTab={tooltipAvatarExamplesTab}>
                      <CodeExample
                        title="GitHub URL"
                        code={`https://github.com/dedekysf/Tasktagdesignsystem/blob/main/src/components/Tooltip.tsx`}
                      />
                    </TabPanel>
                  </TabsContainer>
                </div>

                {/* Section 3: Avatar Group with Tooltip */}
                <div style={{ marginBottom: 'var(--spacing-56)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-8)', marginBottom: 'var(--spacing-8)' }}>
                    <h3 style={{ fontWeight: 'var(--font-weight-semibold)' }}>Avatar Group with Tooltip</h3>
                  </div>
                  <TabsContainer
                    activeTab={tooltipAvatarGroupTab}
                    onTabChange={setTooltipAvatarGroupTab}
                    tabs={[
                      { value: 'preview', label: 'Preview' },
                      { value: 'usage', label: 'Usage' },
                      { value: 'github', label: 'GitHub URL' }
                    ]}
                  >
                    <TabPanel value="preview" activeTab={tooltipAvatarGroupTab}>
                      <div className="component-card">
                        <div style={{ display: 'flex', gap: 'var(--spacing-24)', alignItems: 'center', justifyContent: 'center', padding: 'var(--spacing-32)' }}>
                          {/* Avatar group with individual tooltips */}
                          <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Tooltip 
                              variant="bottom-center" 
                              content={
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                  <Avatar size="xs" variant="image" imageUrl="https://i.pravatar.cc/150?img=1" />
                                  <span style={{ color: 'var(--white)' }}>Alex Turner</span>
                                </div>
                              } 
                              size="sm"
                            >
                              <div style={{ marginRight: '-8px', position: 'relative', zIndex: 5 }}>
                                <Avatar size="md" variant="image" imageUrl="https://i.pravatar.cc/150?img=1" />
                              </div>
                            </Tooltip>

                            <Tooltip 
                              variant="bottom-center" 
                              content={
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                  <Avatar size="xs" variant="image" imageUrl="https://i.pravatar.cc/150?img=2" />
                                  <span style={{ color: 'var(--white)' }}>Jessica Lee</span>
                                </div>
                              } 
                              size="sm"
                            >
                              <div style={{ marginRight: '-8px', position: 'relative', zIndex: 4 }}>
                                <Avatar size="md" variant="image" imageUrl="https://i.pravatar.cc/150?img=2" />
                              </div>
                            </Tooltip>

                            <Tooltip 
                              variant="bottom-center" 
                              content={
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                  <Avatar size="xs" variant="initials" initials="DK" />
                                  <span style={{ color: 'var(--white)' }}>David Kim</span>
                                </div>
                              } 
                              size="sm"
                            >
                              <div style={{ marginRight: '-8px', position: 'relative', zIndex: 3 }}>
                                <Avatar size="md" variant="initials" initials="DK" />
                              </div>
                            </Tooltip>

                            <Tooltip 
                              variant="bottom-right" 
                              content={
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <Avatar size="xs" variant="image" imageUrl="https://i.pravatar.cc/150?img=3" />
                                    <span style={{ color: 'var(--white)' }}>Maria Garcia</span>
                                  </div>
                                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <Avatar size="xs" variant="image" imageUrl="https://i.pravatar.cc/150?img=4" />
                                    <span style={{ color: 'var(--white)' }}>James Wilson</span>
                                  </div>
                                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <Avatar size="xs" variant="image" imageUrl="https://i.pravatar.cc/150?img=5" />
                                    <span style={{ color: 'var(--white)' }}>Sarah Chen</span>
                                  </div>
                                </div>
                              } 
                              size="sm"
                            >
                              <div style={{ 
                                width: '40px', 
                                height: '40px', 
                                borderRadius: '50%', 
                                backgroundColor: 'var(--grey-02)', 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center',
                                color: 'var(--text-secondary)',
                                position: 'relative',
                                zIndex: 2,
                                border: '2px solid var(--grey-03)',
                                cursor: 'pointer',
                                fontWeight: 'var(--font-weight-semibold)',
                                fontSize: '14px'
                              }}>
                                +3
                              </div>
                            </Tooltip>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel value="usage" activeTab={tooltipAvatarGroupTab}>
                      <CodeExample 
                        code={`import { Tooltip } from './components/Tooltip';
import { Avatar } from './components/AvatarComponent';

export default function Example() {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {/* First avatar with tooltip */}
      <Tooltip 
        variant="bottom-center" 
        content={
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Avatar size="xs" variant="image" imageUrl="https://i.pravatar.cc/150?img=1" />
            <span>Alex Turner</span>
          </div>
        } 
        size="sm"
      >
        <div style={{ marginRight: '-8px', position: 'relative', zIndex: 5 }}>
          <Avatar size="md" variant="image" imageUrl="https://i.pravatar.cc/150?img=1" />
        </div>
      </Tooltip>

      {/* Second avatar with tooltip */}
      <Tooltip 
        variant="bottom-center" 
        content={
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Avatar size="xs" variant="image" imageUrl="https://i.pravatar.cc/150?img=2" />
            <span>Jessica Lee</span>
          </div>
        } 
        size="sm"
      >
        <div style={{ marginRight: '-8px', position: 'relative', zIndex: 4 }}>
          <Avatar size="md" variant="image" imageUrl="https://i.pravatar.cc/150?img=2" />
        </div>
      </Tooltip>

      {/* Third avatar with tooltip */}
      <Tooltip 
        variant="bottom-center" 
        content={
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Avatar size="xs" variant="initials" initials="DK" />
            <span>David Kim</span>
          </div>
        } 
        size="sm"
      >
        <div style={{ marginRight: '-8px', position: 'relative', zIndex: 3 }}>
          <Avatar size="md" variant="initials" initials="DK" />
        </div>
      </Tooltip>

      {/* Count avatar with tooltip showing remaining users */}
      <Tooltip 
        variant="bottom-right" 
        content={
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Avatar size="xs" variant="image" imageUrl="https://i.pravatar.cc/150?img=3" />
              <span>Maria Garcia</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Avatar size="xs" variant="image" imageUrl="https://i.pravatar.cc/150?img=4" />
              <span>James Wilson</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Avatar size="xs" variant="image" imageUrl="https://i.pravatar.cc/150?img=5" />
              <span>Sarah Chen</span>
            </div>
          </div>
        } 
        size="sm"
      >
        <div style={{ 
          width: '40px', 
          height: '40px', 
          borderRadius: '50%', 
          backgroundColor: 'var(--black)', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          color: 'var(--white)',
          position: 'relative',
          zIndex: 2,
          border: '2px solid var(--white)',
          cursor: 'pointer',
          fontWeight: 'var(--font-weight-semibold)',
          fontSize: '14px'
        }}>
          +3
        </div>
      </Tooltip>
    </div>
  );
}`}
                      />
                    </TabPanel>
                    <TabPanel value="github" activeTab={tooltipAvatarGroupTab}>
                      <CodeExample
                        title="GitHub URL"
                        code={`https://github.com/dedekysf/Tasktagdesignsystem/blob/main/src/components/Tooltip.tsx`}
                      />
                    </TabPanel>
                  </TabsContainer>
                </div>

                {/* Section 4: Success Tooltip Style */}
                <div style={{ marginBottom: 'var(--spacing-56)' }}>
                  <h3 style={{ fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--spacing-8)' }}>Success Tooltip (Link Copied)</h3>
                  <TabsContainer
                    activeTab={tooltipSuccessTab}
                    onTabChange={setTooltipSuccessTab}
                    tabs={[
                      { value: 'preview', label: 'Preview' },
                      { value: 'usage', label: 'Usage' },
                      { value: 'github', label: 'GitHub URL' }
                    ]}
                  >
                    <TabPanel value="preview" activeTab={tooltipSuccessTab}>
                      <div className="component-card">
                        <div style={{ display: 'flex', gap: 'var(--spacing-24)', alignItems: 'center', justifyContent: 'center', padding: 'var(--spacing-32)' }}>
                          {/* Success tooltip example with click interaction */}
                          <SuccessTooltipDemo />
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel value="usage" activeTab={tooltipSuccessTab}>
                      <CodeExample 
                        code={`import { useState } from 'react';
import { Tooltip } from './components/Tooltip';
import { Button } from './components/Button';
import { SuccessTooltip } from './components/SuccessTooltip';

export default function Example() {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleClick = () => {
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 2000);
  };

  return (
    <Tooltip 
      variant="bottom-center"
      forceShow={showSuccess}
      content={showSuccess ? <SuccessTooltip message="Link copied!" /> : "Copy link"}
      size="sm"
      style={showSuccess ? "custom" : "default"}
    >
      <Button variant="fill" size="sm" className="btn-primary" onClick={handleClick}>
        Click to copy
      </Button>
    </Tooltip>
  );
}`}
                      />
                    </TabPanel>
                  </TabsContainer>
                </div>
              </div>
            </section>
          )}

          {/* Logos Component */}
          {activeSection === 'logos' && (
            <section>
              <SectionHeader
                icon={Image}
                title="Logos"
                description="Variants: main-logo, app-logo, glyph-green, glyph-black, glyph-color, app-icon-android, app-icon-ios"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Main Logo */}
                <LogoItem title="Main Logo">
                  <svg className="w-full h-auto max-w-[300px]" fill="none" viewBox="0 0 500 150">
                    <g>
                      <path d={svgPaths.p3cd9d780} fill="var(--brand-green)" />
                      <path d={svgPaths.p330cda00} fill="var(--brand-green)" />
                      <path d={svgPaths.p1b085780} fill="var(--brand-green)" />
                      <path d={svgPaths.pb33ac00} fill="var(--brand-green)" />
                      <path d={svgPaths.p35094440} fill="var(--brand-green)" />
                      <path d={svgPaths.p36166a00} fill="var(--black)" />
                      <path d={svgPaths.p375c1b80} fill="var(--black)" />
                      <path d={svgPaths.p7b2cc00} fill="var(--black)" />
                      <path d={svgPaths.p37b8500} fill="var(--black)" />
                    </g>
                  </svg>
                </LogoItem>

                {/* App Logo */}
                <LogoItem title="App Logo">
                  <svg className="w-full h-auto max-w-[150px]" fill="none" viewBox="0 0 104 30.9966">
                    <g>
                      <path d={svgPaths.p2aaae680} fill="var(--brand-green)" />
                      <path d={svgPaths.p2956bb80} fill="var(--brand-green)" />
                      <path d={svgPaths.p2d05980} fill="var(--brand-green)" />
                      <path d={svgPaths.p214b2c00} fill="var(--brand-green)" />
                      <path d={svgPaths.p2fd75a70} fill="var(--brand-green)" />
                      <path d={svgPaths.p88c3900} fill="var(--black)" />
                      <path d={svgPaths.p7c6cd00} fill="var(--black)" />
                      <path d={svgPaths.p2eef8400} fill="var(--black)" />
                      <path d={svgPaths.p5e93e00} fill="var(--black)" />
                    </g>
                  </svg>
                </LogoItem>

                {/* Glyph Logo - Green */}
                <LogoItem title="Glyph Logo / Green">
                  <svg className="w-full h-auto max-w-[120px]" fill="none" viewBox="0 0 100.23 93.38">
                    <g>
                      <path d={svgPaths.p13e73e00} fill="var(--brand-green)" transform="translate(0, 0)" />
                      <path d={svgPaths.p1f5cde80} fill="var(--brand-green)" transform="translate(0, 0)" />
                      <path d={svgPaths.p13e73e00} fill="var(--brand-green)" transform="translate(54.61, 0)" />
                      <path d={svgPaths.p1f5cde80} fill="var(--brand-green)" transform="translate(54.61, 0)" />
                    </g>
                  </svg>
                </LogoItem>

                {/* Glyph Logo - Black */}
                <LogoItem title="Glyph Logo / Black">
                  <svg className="w-full h-auto max-w-[120px]" fill="none" viewBox="0 0 100.23 93.38">
                    <g>
                      <path d={svgPaths.p13e73e00} fill="var(--black)" transform="translate(0, 0)" />
                      <path d={svgPaths.p1f5cde80} fill="var(--black)" transform="translate(0, 0)" />
                      <path d={svgPaths.p13e73e00} fill="var(--black)" transform="translate(54.61, 0)" />
                      <path d={svgPaths.p1f5cde80} fill="var(--black)" transform="translate(54.61, 0)" />
                    </g>
                  </svg>
                </LogoItem>

                {/* Glyph Logo - Color */}
                <LogoItem title="Glyph Logo / Color">
                  <svg className="w-full h-auto max-w-[120px]" fill="none" viewBox="0 0 100.23 93.38">
                    <g>
                      <path d={svgPaths.p13e73e00} fill="var(--brand-green)" transform="translate(0, 0)" />
                      <path d={svgPaths.p1f5cde80} fill="var(--brand-green)" transform="translate(0, 0)" />
                      <path d={svgPaths.p13e73e00} fill="var(--black)" transform="translate(54.61, 0)" />
                      <path d={svgPaths.p1f5cde80} fill="var(--black)" transform="translate(54.61, 0)" />
                    </g>
                  </svg>
                </LogoItem>

                {/* App Icon - Android */}
                <LogoItem title="App Icon / Android">
                  <div className="w-full max-w-[164px] aspect-square">
                    <AppIconAndroid />
                  </div>
                </LogoItem>

                {/* App Icon - iOS */}
                <LogoItem title="App Icon / iOS">
                  <div className="w-full max-w-[164px] aspect-square">
                    <AppIconIOs />
                  </div>
                </LogoItem>
              </div>
            </section>
          )}

          {/* Logos Component */}
          {activeSection === 'logos' && (
            <section>
              <SectionHeader
                icon={Image}
                title="Logos"
                description="Variants: main-logo, app-logo, glyph-green, glyph-black, glyph-color, app-icon-android, app-icon-ios"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Main Logo */}
                <LogoItem title="Main Logo">
                  <svg className="w-full h-auto max-w-[300px]" fill="none" viewBox="0 0 500 150">
                    <g>
                      <path d={svgPaths.p3cd9d780} fill="var(--brand-green)" />
                      <path d={svgPaths.p330cda00} fill="var(--brand-green)" />
                      <path d={svgPaths.p1b085780} fill="var(--brand-green)" />
                      <path d={svgPaths.pb33ac00} fill="var(--brand-green)" />
                      <path d={svgPaths.p35094440} fill="var(--brand-green)" />
                      <path d={svgPaths.p36166a00} fill="var(--black)" />
                      <path d={svgPaths.p375c1b80} fill="var(--black)" />
                      <path d={svgPaths.p7b2cc00} fill="var(--black)" />
                      <path d={svgPaths.p37b8500} fill="var(--black)" />
                    </g>
                  </svg>
                </LogoItem>

                {/* App Logo */}
                <LogoItem title="App Logo">
                  <svg className="w-full h-auto max-w-[150px]" fill="none" viewBox="0 0 104 30.9966">
                    <g>
                      <path d={svgPaths.p2aaae680} fill="var(--brand-green)" />
                      <path d={svgPaths.p2956bb80} fill="var(--brand-green)" />
                      <path d={svgPaths.p2d05980} fill="var(--brand-green)" />
                      <path d={svgPaths.p214b2c00} fill="var(--brand-green)" />
                      <path d={svgPaths.p2fd75a70} fill="var(--brand-green)" />
                      <path d={svgPaths.p88c3900} fill="var(--black)" />
                      <path d={svgPaths.p7c6cd00} fill="var(--black)" />
                      <path d={svgPaths.p2eef8400} fill="var(--black)" />
                      <path d={svgPaths.p5e93e00} fill="var(--black)" />
                    </g>
                  </svg>
                </LogoItem>

                {/* Glyph Logo - Green */}
                <LogoItem title="Glyph Logo / Green">
                  <svg className="w-full h-auto max-w-[120px]" fill="none" viewBox="0 0 100.23 93.38">
                    <g>
                      <path d={svgPaths.p13e73e00} fill="var(--brand-green)" transform="translate(0, 0)" />
                      <path d={svgPaths.p1f5cde80} fill="var(--brand-green)" transform="translate(0, 0)" />
                      <path d={svgPaths.p13e73e00} fill="var(--brand-green)" transform="translate(54.61, 0)" />
                      <path d={svgPaths.p1f5cde80} fill="var(--brand-green)" transform="translate(54.61, 0)" />
                    </g>
                  </svg>
                </LogoItem>

                {/* Glyph Logo - Black */}
                <LogoItem title="Glyph Logo / Black">
                  <svg className="w-full h-auto max-w-[120px]" fill="none" viewBox="0 0 100.23 93.38">
                    <g>
                      <path d={svgPaths.p13e73e00} fill="var(--black)" transform="translate(0, 0)" />
                      <path d={svgPaths.p1f5cde80} fill="var(--black)" transform="translate(0, 0)" />
                      <path d={svgPaths.p13e73e00} fill="var(--black)" transform="translate(54.61, 0)" />
                      <path d={svgPaths.p1f5cde80} fill="var(--black)" transform="translate(54.61, 0)" />
                    </g>
                  </svg>
                </LogoItem>

                {/* Glyph Logo - Color */}
                <LogoItem title="Glyph Logo / Color">
                  <svg className="w-full h-auto max-w-[120px]" fill="none" viewBox="0 0 100.23 93.38">
                    <g>
                      <path d={svgPaths.p13e73e00} fill="var(--brand-green)" transform="translate(0, 0)" />
                      <path d={svgPaths.p1f5cde80} fill="var(--brand-green)" transform="translate(0, 0)" />
                      <path d={svgPaths.p13e73e00} fill="var(--black)" transform="translate(54.61, 0)" />
                      <path d={svgPaths.p1f5cde80} fill="var(--black)" transform="translate(54.61, 0)" />
                    </g>
                  </svg>
                </LogoItem>

                {/* App Icon - Android */}
                <LogoItem title="App Icon / Android">
                  <div className="w-full max-w-[164px] aspect-square">
                    <AppIconAndroid />
                  </div>
                </LogoItem>

                {/* App Icon - iOS */}
                <LogoItem title="App Icon / iOS">
                  <div className="w-full max-w-[164px] aspect-square">
                    <AppIconIOs />
                  </div>
                </LogoItem>
              </div>
              <TabPanel value="github" activeTab={tooltipSuccessTab}>
                <CodeExample
                  title="GitHub URL"
                  code={`https://github.com/dedekysf/Tasktagdesignsystem/blob/main/src/components/Tooltip.tsx`}
                />
              </TabPanel>
            </section>
          )}

          {/* Icons Section */}
          {activeSection === 'icons' && (
            <section>
              <SectionHeader
                icon={Sparkles}
                title="Icons"
                description="1,500+ icons from Lucide available for use in your project"
              />

              <TabsContainer
                activeTab={iconsTab}
                onTabChange={setIconsTab}
                tabs={[
                  { value: 'preview', label: 'Preview' },
                  { value: 'usage', label: 'Usage' },
                  { value: 'github', label: 'GitHub URL' }
                ]}
              >
                <TabPanel value="preview" activeTab={iconsTab}>
                  <div className="space-y-6">
                {/* Link Card */}
                <div 
                  className="component-card"
                  style={{
                    padding: 'var(--spacing-32)',
                    textAlign: 'center'
                  }}
                >
                  <div style={{ marginBottom: 'var(--spacing-8)' }}>
                   
                    <h3 style={{ marginBottom: 'var(--spacing-8)', fontWeight: 'var(--font-weight-semibold)' }}>Lucide Icons Library</h3>
                    <p className="text-web-secondary-body" style={{ 
                      color: 'var(--text-secondary)',
                      marginBottom: 'var(--spacing-24)'
                    }}>
                      Browse the complete collection of icons used in TaskTag Design System
                    </p>
                  </div>

                  <a
                    href="https://lucide.dev/icons/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: 'none',
                      display: 'inline-block'
                    }}
                  >
                    <Button variant="fill" size="lg" className="btn-secondary">
                      Visit Lucide Icons
                      <ExternalLink size={16} />
                    </Button>
                  </a>
                </div>

                {/* Icon Examples Grid */}
                <div>
                  <h3 style={{ marginBottom: 'var(--spacing-8)', fontWeight: 'var(--font-weight-semibold)' }}>Popular Icons Used in TaskTag</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {[
                      { icon: Palette, name: 'Palette' },
                      { icon: Type, name: 'Type' },
                      { icon: Square, name: 'Square' },
                      { icon: Box, name: 'Box' },
                      { icon: User, name: 'User' },
                      { icon: Image, name: 'Image' },
                      { icon: Menu, name: 'Menu' },
                      { icon: CheckSquare, name: 'CheckSquare' },
                      { icon: Circle, name: 'Circle' },
                      { icon: Sparkles, name: 'Sparkles' },
                      { icon: MousePointerClick, name: 'MousePointerClick' },
                      { icon: TextCursor, name: 'TextCursor' }
                    ].map((item) => {
                      const IconComponent = item.icon;
                      return (
                        <div
                          key={item.name}
                          className="component-card"
                          style={{
                            padding: 'var(--spacing-16)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: 'var(--spacing-8)',
                            textAlign: 'center'
                          }}
                        >
                          <IconComponent size={32} style={{ color: 'var(--grey-06)' }} />
                          <span className="text-web-metadata-primary" style={{ 
                      color: 'var(--text-secondary)',
                      marginBottom: 'var(--spacing-16)'
                    }}>
                            {item.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </TabPanel>

            <TabPanel value="usage" activeTab={iconsTab}>
              <CodeExample
                title="Usage Example"
                code={`import { Home, User, Settings, Sparkles, CheckSquare } from 'lucide-react';

// Basic usage
<Home size={24} />

// With custom color using CSS variables
<User size={24} style={{ color: 'var(--brand-green)' }} />

// Different sizes
<Settings size={16} />
<Settings size={24} />
<Settings size={32} />
<Settings size={48} />

// In buttons
<Button variant="fill" size="md">
  <Sparkles size={16} />
  Create New
</Button>

// Inline with text
<div className="flex items-center gap-2">
  <CheckSquare size={16} style={{ color: 'var(--brand-green)' }} />
  <span>Task completed</span>
</div>

// Available icons:
// Visit https://lucide.dev/icons/ for the complete collection
// of 1,500+ icons available in lucide-react`}
              />
            </TabPanel>
          </TabsContainer>
        </section>
      )}

          {/* Images Section */}
          {activeSection === 'images' && (
            <section>
              <SectionHeader
                icon={Image}
                title="Images"
                description="Figma asset imports for your design system"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Team Collaboration */}
                <LogoItem title="Team Collaboration">
                  <img 
                    src={teamCollaborationImage} 
                    alt="Team Collaboration"
                    style={{ 
                      width: '100%',
                      height: 'auto',
                      maxWidth: '300px',
                      objectFit: 'contain'
                    }}
                  />
                </LogoItem>

                {/* XLS Icon */}
                <LogoItem title="XLS Icon">
                  <div style={{ width: '56px', height: '56px' }}>
                    <Xls />
                  </div>
                </LogoItem>

                {/* PDF Icon */}
                <LogoItem title="PDF Icon">
                  <div style={{ width: '56px', height: '56px' }}>
                    <Pdf />
                  </div>
                </LogoItem>

                {/* PPT Icon */}
                <LogoItem title="PPT Icon">
                  <div style={{ width: '56px', height: '56px' }}>
                    <Ppt />
                  </div>
                </LogoItem>

                {/* ZIP Icon */}
                <LogoItem title="ZIP Icon">
                  <div style={{ width: '56px', height: '56px' }}>
                    <Zip />
                  </div>
                </LogoItem>

                {/* TXT Icon */}
                <LogoItem title="TXT Icon">
                  <div style={{ width: '56px', height: '56px' }}>
                    <Txt />
                  </div>
                </LogoItem>

                {/* XML Icon */}
                <LogoItem title="XML Icon">
                  <div style={{ width: '56px', height: '56px' }}>
                    <Xml />
                  </div>
                </LogoItem>

                {/* DOC Icon */}
                <LogoItem title="DOC Icon">
                  <div style={{ width: '56px', height: '56px' }}>
                    <Doc />
                  </div>
                </LogoItem>

                {/* HTML Icon */}
                <LogoItem title="HTML Icon">
                  <div style={{ width: '56px', height: '56px' }}>
                    <Html />
                  </div>
                </LogoItem>

                {/* EPS Icon */}
                <LogoItem title="EPS Icon">
                  <div style={{ width: '56px', height: '56px' }}>
                    <Eps />
                  </div>
                </LogoItem>
              </div>
              <TabPanel value="github" activeTab={iconsTab}>
                <CodeExample
                  title="GitHub URL"
                  code={`https://lucide.dev/icons/`}
                />
              </TabPanel>
            </section>
          )}

          {/* Toast Component */}
          {activeSection === 'toast' && (
            <section>
              <SectionHeader
                icon={Bell}
                title="Toast"
                description="Total Variant: 4"
              />

              <div>
                {/* Variant 1: Icon + Title */}
                <div style={{ marginBottom: 'var(--spacing-56)' }}>
                  <div style={{ 
                    marginBottom: 'var(--spacing-16)',
                    fontSize: 'var(--text-body)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--text-primary)'
                  }}>
                    Icon + Title
                  </div>
                  <TabsContainer
                    activeTab={toastTab1}
                    onTabChange={setToastTab1}
                    tabs={[
                      { value: 'preview', label: 'Preview' },
                      { value: 'usage', label: 'Usage' },
                      { value: 'github', label: 'GitHub URL' }
                    ]}
                  >
                    <TabPanel value="preview" activeTab={toastTab1}>
                      <div className="component-card">
                        <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'var(--grey-01)', borderRadius: 'var(--radius-md)', padding: 'var(--spacing-8)' }}>
                          <Toast 
                            variant="title-only" 
                            type="success"
                            title="Task Completed" 
                          />
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel value="usage" activeTab={toastTab1}>
                      <CodeExample 
                        code={`import { Toast } from './components/Toast';
import { toast } from 'sonner@2.0.3';

toast.custom(() => (
  <Toast 
    variant="title-only"
    type="success" 
    title="Task Completed"
    duration={3000}
  />
), {
  duration: 3000,
  position: 'bottom-center',
});`}
                      />
                    </TabPanel>
                    <TabPanel value="github" activeTab={toastTab1}>
                      <CodeExample
                        title="GitHub URL"
                        code={`https://github.com/dedekysf/Tasktagdesignsystem/blob/main/src/components/Toast.tsx`}
                      />
                    </TabPanel>
                  </TabsContainer>
                </div>

                {/* Variant 2: Icon + Title + Caption */}
                <div style={{ marginBottom: 'var(--spacing-56)' }}>
                  <div style={{ 
                    marginBottom: 'var(--spacing-16)',
                    fontSize: 'var(--text-body)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--text-primary)'
                  }}>
                    Icon + Title + Caption
                  </div>
                  <TabsContainer
                    activeTab={toastTab2}
                    onTabChange={setToastTab2}
                    tabs={[
                      { value: 'preview', label: 'Preview' },
                      { value: 'usage', label: 'Usage' },
                      { value: 'github', label: 'GitHub URL' }
                    ]}
                  >
                    <TabPanel value="preview" activeTab={toastTab2}>
                      <div className="component-card">
                        <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'var(--grey-01)', borderRadius: 'var(--radius-md)', padding: 'var(--spacing-8)' }}>
                          <Toast 
                            variant="title-caption" 
                            type="success"
                            title="Task Completed" 
                            caption="Your task has been marked as complete" 
                          />
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel value="usage" activeTab={toastTab2}>
                      <CodeExample 
                        code={`import { Toast } from './components/Toast';
import { toast } from 'sonner@2.0.3';

toast.custom(() => (
  <Toast 
    variant="title-caption"
    type="success" 
    title="Task Completed" 
    caption="Your task has been marked as complete"
    duration={3000}
  />
), {
  duration: 3000,
  position: 'bottom-center',
});`}
                      />
                    </TabPanel>
                    <TabPanel value="github" activeTab={toastTab2}>
                      <CodeExample
                        title="GitHub URL"
                        code={`https://github.com/dedekysf/Tasktagdesignsystem/blob/main/src/components/Toast.tsx`}
                      />
                    </TabPanel>
                  </TabsContainer>
                </div>

                {/* Variant 3: Icon + Title + Arrow */}
                <div style={{ marginBottom: 'var(--spacing-56)' }}>
                  <div style={{ 
                    marginBottom: 'var(--spacing-16)',
                    fontSize: 'var(--text-body)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--text-primary)'
                  }}>
                    Icon + Title + Arrow
                  </div>
                  <TabsContainer
                    activeTab={toastTab3}
                    onTabChange={setToastTab3}
                    tabs={[
                      { value: 'preview', label: 'Preview' },
                      { value: 'usage', label: 'Usage' },
                      { value: 'github', label: 'GitHub URL' }
                    ]}
                  >
                    <TabPanel value="preview" activeTab={toastTab3}>
                      <div className="component-card">
                        <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'var(--grey-01)', borderRadius: 'var(--radius-md)', padding: 'var(--spacing-8)' }}>
                          <Toast 
                            variant="title-arrow" 
                            type="success"
                            title="Task Completed" 
                          />
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel value="usage" activeTab={toastTab3}>
                      <CodeExample 
                        code={`import { Toast } from './components/Toast';
import { toast } from 'sonner@2.0.3';

toast.custom(() => (
  <Toast 
    variant="title-arrow"
    type="success" 
    title="Task Completed"
    duration={3000}
  />
), {
  duration: 3000,
  position: 'bottom-center',
});`}
                      />
                    </TabPanel>
                    <TabPanel value="github" activeTab={toastTab3}>
                      <CodeExample
                        title="GitHub URL"
                        code={`https://github.com/dedekysf/Tasktagdesignsystem/blob/main/src/components/Toast.tsx`}
                      />
                    </TabPanel>
                  </TabsContainer>
                </div>

                {/* Variant 4: Icon + Title + Caption + Arrow */}
                <div style={{ marginBottom: 'var(--spacing-56)' }}>
                  <div style={{ 
                    marginBottom: 'var(--spacing-16)',
                    fontSize: 'var(--text-body)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--text-primary)'
                  }}>
                    Icon + Title + Caption + Arrow
                  </div>
                  <TabsContainer
                    activeTab={toastTab4}
                    onTabChange={setToastTab4}
                    tabs={[
                      { value: 'preview', label: 'Preview' },
                      { value: 'usage', label: 'Usage' },
                      { value: 'github', label: 'GitHub URL' }
                    ]}
                  >
                    <TabPanel value="preview" activeTab={toastTab4}>
                      <div className="component-card">
                        <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'var(--grey-01)', borderRadius: 'var(--radius-md)', padding: 'var(--spacing-8)' }}>
                          <Toast 
                            variant="title-caption-arrow" 
                            type="success"
                            title="Task Completed" 
                            caption="Your task has been marked as complete" 
                          />
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel value="usage" activeTab={toastTab4}>
                      <CodeExample 
                        code={`import { Toast } from './components/Toast';
import { toast } from 'sonner@2.0.3';

toast.custom(() => (
  <Toast 
    variant="title-caption-arrow"
    type="success" 
    title="Task Completed" 
    caption="Your task has been marked as complete"
    duration={3000}
  />
), {
  duration: 3000,
  position: 'bottom-center',
});`}
                      />
                    </TabPanel>
                  </TabsContainer>
                </div>
              </div>
              <TabPanel value="github" activeTab={toastTab4}>
                <CodeExample
                  title="GitHub URL"
                  code={`https://github.com/dedekysf/Tasktagdesignsystem/blob/main/src/components/Toast.tsx`}
                />
              </TabPanel>
            </section>
          )}

          {/* Toggle Component */}
          {activeSection === 'toggle' && (
            <section>
              <SectionHeader
                icon={CircleCheckBig}
                title="Toggle"
                description="Total Variant: 1"
              />

              <div>
                <div style={{ marginBottom: 'var(--spacing-56)' }}>
                  <TabsContainer
                    activeTab={toggleTab}
                    onTabChange={setToggleTab}
                    tabs={[
                      { value: 'preview', label: 'Preview' },
                      { value: 'usage', label: 'Usage' },
                      { value: 'github', label: 'GitHub URL' }
                    ]}
                  >
                    <TabPanel value="preview" activeTab={toggleTab}>
                      <div className="component-card">
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-32)', padding: 'var(--spacing-24)' }}>
                          {/* Basic Toggle */}
                          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-16)' }}>
                            <Toggle 
                              checked={toggleBasic}
                              onCheckedChange={setToggleBasic}
                            />
                            <span style={{
                              fontSize: 'var(--text-label)',
                              fontWeight: 'var(--font-weight-regular)',
                              color: 'var(--text-primary)',
                              letterSpacing: '0.28px'
                            }}>
                              Basic Toggle
                            </span>
                          </div>

                          {/* Size Variants */}
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-16)' }}>
                            <div style={{
                              fontSize: 'var(--text-body)',
                              fontWeight: 'var(--font-weight-semibold)',
                              color: 'var(--text-primary)',
                              marginBottom: 'var(--spacing-8)'
                            }}>
                              Size Variants
                            </div>
                            
                            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-16)' }}>
                              <Toggle 
                                size="sm"
                                checked={toggleSm}
                                onCheckedChange={setToggleSm}
                              />
                              <span style={{
                                fontSize: 'var(--text-label)',
                                fontWeight: 'var(--font-weight-regular)',
                                color: 'var(--text-primary)',
                                letterSpacing: '0.28px'
                              }}>
                                Small (sm)
                              </span>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-16)' }}>
                              <Toggle 
                                size="md"
                                checked={toggleMd}
                                onCheckedChange={setToggleMd}
                              />
                              <span style={{
                                fontSize: 'var(--text-label)',
                                fontWeight: 'var(--font-weight-regular)',
                                color: 'var(--text-primary)',
                                letterSpacing: '0.28px'
                              }}>
                                Medium (md) - Default
                              </span>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-16)' }}>
                              <Toggle 
                                size="lg"
                                checked={toggleLg}
                                onCheckedChange={setToggleLg}
                              />
                              <span style={{
                                fontSize: 'var(--text-label)',
                                fontWeight: 'var(--font-weight-regular)',
                                color: 'var(--text-primary)',
                                letterSpacing: '0.28px'
                              }}>
                                Large (lg)
                              </span>
                            </div>
                          </div>

                          {/* States */}
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-16)' }}>
                            <div style={{
                              fontSize: 'var(--text-body)',
                              fontWeight: 'var(--font-weight-semibold)',
                              color: 'var(--text-primary)',
                              marginBottom: 'var(--spacing-8)'
                            }}>
                              States
                            </div>
                            
                            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-16)' }}>
                              <Toggle 
                                checked={toggleChecked}
                                onCheckedChange={setToggleChecked}
                              />
                              <span style={{
                                fontSize: 'var(--text-label)',
                                fontWeight: 'var(--font-weight-regular)',
                                color: 'var(--text-primary)',
                                letterSpacing: '0.28px'
                              }}>
                                Checked
                              </span>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-16)' }}>
                              <Toggle 
                                checked={toggleUnchecked}
                                onCheckedChange={setToggleUnchecked}
                              />
                              <span style={{
                                fontSize: 'var(--text-label)',
                                fontWeight: 'var(--font-weight-regular)',
                                color: 'var(--text-primary)',
                                letterSpacing: '0.28px'
                              }}>
                                Unchecked
                              </span>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-16)' }}>
                              <Toggle 
                                checked={true}
                                disabled
                              />
                              <span style={{
                                fontSize: 'var(--text-label)',
                                fontWeight: 'var(--font-weight-regular)',
                                color: 'var(--grey-04)',
                                letterSpacing: '0.28px'
                              }}>
                                Disabled (Checked)
                              </span>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-16)' }}>
                              <Toggle 
                                checked={false}
                                disabled
                              />
                              <span style={{
                                fontSize: 'var(--text-label)',
                                fontWeight: 'var(--font-weight-regular)',
                                color: 'var(--grey-04)',
                                letterSpacing: '0.28px'
                              }}>
                                Disabled (Unchecked)
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel value="usage" activeTab={toggleTab}>
                      <CodeExample 
                        code={`import { Toggle } from './components/Toggle';
import { useState } from 'react';

export default function Example() {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      {/* Basic Toggle */}
      <Toggle 
        checked={checked}
        onCheckedChange={setChecked}
      />

      {/* With Label */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Toggle 
          checked={checked}
          onCheckedChange={setChecked}
        />
        <span>Show completed items</span>
      </div>

      {/* Size Variants */}
      <Toggle size="sm" checked={checked} onCheckedChange={setChecked} />
      <Toggle size="md" checked={checked} onCheckedChange={setChecked} />
      <Toggle size="lg" checked={checked} onCheckedChange={setChecked} />

      {/* Disabled State */}
      <Toggle checked={true} disabled />
      <Toggle checked={false} disabled />
    </div>
  );
}`}
                      />
                    </TabPanel>
                  </TabsContainer>
                </div>
              </div>
              <TabPanel value="github" activeTab={toggleTab}>
                <CodeExample
                  title="GitHub URL"
                  code={`https://github.com/dedekysf/Tasktagdesignsystem/blob/main/src/components/Toggle.tsx`}
                />
              </TabPanel>
            </section>
          )}

          {/* Calendar Component */}
          {activeSection === 'calendar' && (
            <section>
              <SectionHeader
                icon={CalendarDays}
                title="Calendar"
                description="Total Variant: 1"
              />

              <div>
                <div style={{ marginBottom: 'var(--spacing-56)' }}>
                  <TabsContainer
                    activeTab={calendarTab}
                    onTabChange={setCalendarTab}
                    tabs={[
                      { value: 'preview', label: 'Preview' },
                      { value: 'usage', label: 'Usage' },
                      { value: 'github', label: 'GitHub URL' }
                    ]}
                  >
                    <TabPanel value="preview" activeTab={calendarTab}>
                      <div className="component-card">
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-16)', backgroundColor: 'var(--grey-01)', borderRadius: 'var(--radius-md)', padding: 'var(--spacing-8)' }}>
                          <Button 
                            variant="fill" 
                            size="md"
                            className="btn-secondary"
                            style={{ width: '96px', height: '40px' }}
                            onClick={() => setShowCalendar(!showCalendar)}
                          >
                            Calendar
                          </Button>
                        {showCalendar && (
                          <div style={{ position: 'relative', display: 'inline-block' }}>
                            <Calendar
                              selectedDate={calendarSelectedDate}
                              onSelect={(date) => {
                                setCalendarSelectedDate(date);
                                setShowCalendar(false);
                              }}
                              onClose={() => setShowCalendar(false)}
                            />
                          </div>
                        )}
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel value="usage" activeTab={calendarTab}>
                      <CodeExample 
                        code={`import { Calendar } from './components/Calendar';
import { useState } from 'react';

export default function Example() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <>
      <button onClick={() => setShowCalendar(true)}>
        {selectedDate ? selectedDate.toLocaleDateString() : 'Select Date'}
      </button>
      
      {showCalendar && (
        <Calendar
          selectedDate={selectedDate}
          onSelect={(date) => {
            setSelectedDate(date);
            setShowCalendar(false);
          }}
          onClose={() => setShowCalendar(false)}
        />
      )}
    </>
  );
}`}
                      />
                    </TabPanel>
                    <TabPanel value="github" activeTab={calendarTab}>
                      <CodeExample
                        title="GitHub URL"
                        code={`https://github.com/dedekysf/Tasktagdesignsystem/blob/main/src/components/Calendar.tsx`}
                      />
                    </TabPanel>
                  </TabsContainer>
                </div>
              </div>
            </section>
          )}

          {/* Date Range Calendar Component */}
          {activeSection === 'date-range-calendar' && (
            <section>
              <SectionHeader
                icon={CalendarRange}
                title="Date Range Calendar"
                description="Total Variant: 1"
              />

              <div>
                <div style={{ marginBottom: 'var(--spacing-56)' }}>
                  <TabsContainer
                    activeTab={dateRangeCalendarTab}
                    onTabChange={setDateRangeCalendarTab}
                    tabs={[
                      { value: 'preview', label: 'Preview' },
                      { value: 'usage', label: 'Usage' },
                      { value: 'github', label: 'GitHub URL' }
                    ]}
                  >
                    <TabPanel value="preview" activeTab={dateRangeCalendarTab}>
                      <div className="component-card">
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-16)', backgroundColor: 'var(--grey-01)', borderRadius: 'var(--radius-md)', padding: 'var(--spacing-8)' }}>
                          <Button 
                            variant="fill" 
                            size="md"
                            className="btn-secondary"
                            style={{ width: '96px' }}
                            onClick={() => setShowDateRangeCalendar(!showDateRangeCalendar)}
                          >
                            Date
                          </Button>
                        {showDateRangeCalendar && (
                          <div style={{ position: 'relative', display: 'inline-block', width: '380px' }}>
                            <DateRangeCalendar
                              startDate={dateRangeStart}
                              endDate={dateRangeEnd}
                              onDatesChange={(start, end) => {
                                setDateRangeStart(start);
                                setDateRangeEnd(end);
                              }}
                              onClose={() => setShowDateRangeCalendar(false)}
                            />
                          </div>
                        )}
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel value="usage" activeTab={dateRangeCalendarTab}>
                      <CodeExample 
                        code={`import { DateRangeCalendar } from './components/DateRangeCalendar';
import { useState } from 'react';

export default function Example() {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <>
      <button onClick={() => setShowCalendar(true)}>
        Select Date Range
      </button>
      
      {showCalendar && (
        <DateRangeCalendar
          startDate={startDate}
          endDate={endDate}
          onDatesChange={(start, end) => {
            setStartDate(start);
            setEndDate(end);
          }}
          onClose={() => setShowCalendar(false)}
        />
      )}
    </>
  );
}`}
                      />
                    </TabPanel>
                  </TabsContainer>
                </div>
              </div>
              <TabPanel value="github" activeTab={dateRangeCalendarTab}>
                <CodeExample
                  title="GitHub URL"
                  code={`https://github.com/dedekysf/Tasktagdesignsystem/blob/main/src/components/DateRangeCalendar.tsx`}
                />
              </TabPanel>
            </section>
          )}

          {/* Discard Changes Modal Component */}
          {activeSection === 'discard-changes-modal' && (
            <section>
              <SectionHeader
                icon={AlertTriangle}
                title="Discard Changes Modal"
                description="Total Variant: 1"
              />

              <div>
                <div style={{ marginBottom: 'var(--spacing-56)' }}>
                  <TabsContainer
                    activeTab={discardChangesModalTab}
                    onTabChange={setDiscardChangesModalTab}
                    tabs={[
                      { value: 'preview', label: 'Preview' },
                      { value: 'usage', label: 'Usage' },
                      { value: 'github', label: 'GitHub URL' }
                    ]}
                  >
                    <TabPanel value="preview" activeTab={discardChangesModalTab}>
                      <div className="component-card">
                        <Button 
                          variant="fill" 
                          size="md"
                          className="btn-secondary"
                          style={{ width: '96px' }}
                          onClick={() => setIsDiscardModalOpen(true)}
                        >
                          Discard
                        </Button>
                        <DiscardChangesModal
                          isOpen={isDiscardModalOpen}
                          onDiscard={() => {
                            setIsDiscardModalOpen(false);
                            alert('Changes discarded');
                          }}
                          onCancel={() => setIsDiscardModalOpen(false)}
                        />
                      </div>
                    </TabPanel>
                    <TabPanel value="usage" activeTab={discardChangesModalTab}>
                      <CodeExample 
                        code={`import { DiscardChangesModal } from './components/DiscardChangesModal';
import { useState } from 'react';

export default function Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Discard Changes
      </button>
      
      <DiscardChangesModal
        isOpen={isOpen}
        onDiscard={() => {
          setIsOpen(false);
          // Handle discard logic
        }}
        onCancel={() => setIsOpen(false)}
        title="Discard changes?"
        description="You have unsaved changes. Are you sure you want to discard them?"
        actionButtonText="Discard"
      />
    </>
  );
}`}
                      />
                    </TabPanel>
                    <TabPanel value="github" activeTab={discardChangesModalTab}>
                      <CodeExample
                        title="GitHub URL"
                        code={`https://github.com/dedekysf/Tasktagdesignsystem/blob/main/src/components/DiscardChangesModal.tsx`}
                      />
                    </TabPanel>
                  </TabsContainer>
                </div>
              </div>
            </section>
          )}

          {/* Priority Dropdown Component */}
          {activeSection === 'priority-dropdown' && (
            <section>
              <SectionHeader
                icon={ChevronUpIcon}
                title="Priority Dropdown"
                description="Total Variant: 1"
              />

              <div>
                <div style={{ marginBottom: 'var(--spacing-56)' }}>
                  <TabsContainer
                    activeTab={priorityDropdownTab}
                    onTabChange={setPriorityDropdownTab}
                    tabs={[
                      { value: 'preview', label: 'Preview' },
                      { value: 'usage', label: 'Usage' },
                      { value: 'github', label: 'GitHub URL' }
                    ]}
                  >
                    <TabPanel value="preview" activeTab={priorityDropdownTab}>
                      <div className="component-card">
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-16)', backgroundColor: 'var(--grey-01)', borderRadius: 'var(--radius-md)', padding: 'var(--spacing-8)' }}>
                          <div>
                            <Button 
                            variant="fill" 
                            size="md"
                            className="btn-secondary"
                            style={{ width: '96px' }}
                            onClick={() => setShowPriorityDropdown(!showPriorityDropdown)}
                          >
                            Priority
                          </Button>
                        </div>
                        {showPriorityDropdown && (
                          <div style={{ position: 'relative', display: 'inline-block', width: 'fit-content' }}>
                            <PriorityDropdown
                              onSelect={(priority) => {
                                setSelectedPriority(priority);
                                setShowPriorityDropdown(false);
                              }}
                              onClose={() => setShowPriorityDropdown(false)}
                            />
                          </div>
                        )}
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel value="usage" activeTab={priorityDropdownTab}>
                      <CodeExample 
                        code={`import { PriorityDropdown } from './components/PriorityDropdown';
import { useState } from 'react';

export default function Example() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [priority, setPriority] = useState<"high" | "medium" | "low">("medium");

  return (
    <>
      <button onClick={() => setShowDropdown(true)}>
        Priority: {priority}
      </button>
      
      {showDropdown && (
        <PriorityDropdown
          onSelect={(priority) => {
            setPriority(priority);
            setShowDropdown(false);
          }}
          onClose={() => setShowDropdown(false)}
        />
      )}
    </>
  );
}`}
                      />
                    </TabPanel>
                    <TabPanel value="github" activeTab={priorityDropdownTab}>
                      <CodeExample
                        title="GitHub URL"
                        code={`https://github.com/dedekysf/Tasktagdesignsystem/blob/main/src/components/PriorityDropdown.tsx`}
                      />
                    </TabPanel>
                  </TabsContainer>
                </div>
              </div>
            </section>
          )}

          {/* Task Section Header Component */}
          {activeSection === 'task-section-header' && (
            <section>
              <SectionHeader
                icon={ChevronDown}
                title="Task Section Header"
                description="Total Variant: 1"
              />

              <div>
                <div style={{ marginBottom: 'var(--spacing-56)' }}>
                  <TabsContainer
                    activeTab={taskSectionHeaderTab}
                    onTabChange={setTaskSectionHeaderTab}
                    tabs={[
                      { value: 'preview', label: 'Preview' },
                      { value: 'usage', label: 'Usage' },
                      { value: 'github', label: 'GitHub URL' }
                    ]}
                  >
                    <TabPanel value="preview" activeTab={taskSectionHeaderTab}>
                      <div className="component-card">
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-16)', backgroundColor: 'var(--grey-01)', borderRadius: 'var(--radius-md)', padding: 'var(--spacing-8)' }}>
                          <div style={{ backgroundColor: 'white', borderRadius: 'var(--radius-md)', border: '1px solid var(--grey-03)' }}>
                            <TaskSectionHeader
                            title="Current Tasks"
                            count={12}
                            isExpanded={isSectionExpanded}
                            onToggle={() => setIsSectionExpanded(!isSectionExpanded)}
                          />
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel value="usage" activeTab={taskSectionHeaderTab}>
                      <CodeExample 
                        code={`import { TaskSectionHeader } from './components/TaskSectionHeader';
import { useState } from 'react';

export default function Example() {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <TaskSectionHeader
      title="Current Tasks"
      count={12}
      isExpanded={isExpanded}
      onToggle={() => setIsExpanded(!isExpanded)}
      showCount={true}
    />
  );
}`}
                      />
                    </TabPanel>
                    <TabPanel value="github" activeTab={taskSectionHeaderTab}>
                      <CodeExample
                        title="GitHub URL"
                        code={`https://github.com/dedekysf/Tasktagdesignsystem/blob/main/src/components/TaskSectionHeader.tsx`}
                      />
                    </TabPanel>
                  </TabsContainer>
                </div>
              </div>
            </section>
          )}

          {/* Project Select Modal Component */}
          {activeSection === 'project-select-modal' && (
            <section>
              <SectionHeader
                icon={FolderOpen}
                title="Project Select Modal"
                description="Total Variant: 1"
              />

              <div>
                <div style={{ marginBottom: 'var(--spacing-56)' }}>
                  <TabsContainer
                    activeTab={projectSelectModalTab}
                    onTabChange={setProjectSelectModalTab}
                    tabs={[
                      { value: 'preview', label: 'Preview' },
                      { value: 'usage', label: 'Usage' },
                      { value: 'github', label: 'GitHub URL' }
                    ]}
                  >
                    <TabPanel value="preview" activeTab={projectSelectModalTab}>
                      <div className="component-card">
                        <Button 
                          variant="fill" 
                          size="md"
                          className="btn-secondary"
                          style={{ width: '96px' }}
                          onClick={() => setIsProjectSelectModalOpen(true)}
                        >
                          Project
                        </Button>
                        <ProjectSelectModal
                          isOpen={isProjectSelectModalOpen}
                          onClose={() => setIsProjectSelectModalOpen(false)}
                          onSelect={(project) => {
                            alert(`Selected: ${project.name}`);
                            setIsProjectSelectModalOpen(false);
                          }}
                        />
                      </div>
                    </TabPanel>
                    <TabPanel value="usage" activeTab={projectSelectModalTab}>
                      <CodeExample 
                        code={`import { ProjectSelectModal } from './components/ProjectSelectModal';
import { useState } from 'react';

export default function Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Select Project
      </button>
      
      <ProjectSelectModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSelect={(project) => {
          console.log('Selected project:', project);
          setIsOpen(false);
        }}
      />
    </>
  );
}`}
                      />
                    </TabPanel>
                    <TabPanel value="github" activeTab={projectSelectModalTab}>
                      <CodeExample
                        title="GitHub URL"
                        code={`https://github.com/dedekysf/Tasktagdesignsystem/blob/main/src/components/ProjectSelectModal.tsx`}
                      />
                    </TabPanel>
                  </TabsContainer>
                </div>
              </div>
            </section>
          )}

          {/* Assignee Modal Component */}
          {activeSection === 'assignee-modal' && (
            <section>
              <SectionHeader
                icon={UserPlus}
                title="Assignee Modal"
                description="Total Variant: 1"
              />

              <div>
                <div style={{ marginBottom: 'var(--spacing-56)' }}>
                  <TabsContainer
                    activeTab={assigneeModalTab}
                    onTabChange={setAssigneeModalTab}
                    tabs={[
                      { value: 'preview', label: 'Preview' },
                      { value: 'usage', label: 'Usage' },
                      { value: 'github', label: 'GitHub URL' }
                    ]}
                  >
                    <TabPanel value="preview" activeTab={assigneeModalTab}>
                      <div className="component-card">
                        <Button 
                          variant="fill" 
                          size="md"
                          className="btn-secondary"
                          style={{ width: '96px' }}
                          onClick={() => setIsAssigneeModalOpen(true)}
                        >
                          Assignee
                        </Button>
                        <AssigneeModal
                          isOpen={isAssigneeModalOpen}
                          onClose={() => setIsAssigneeModalOpen(false)}
                          selectedAssignees={[
                            { name: 'James Logan Smith', email: 'jameslogansmith@gmail.com', role: 'assignee' }
                          ]}
                          onAssign={(assignees) => {
                            console.log('Assigned:', assignees);
                            setIsAssigneeModalOpen(false);
                          }}
                        />
                      </div>
                    </TabPanel>
                    <TabPanel value="usage" activeTab={assigneeModalTab}>
                      <CodeExample 
                        code={`import { AssigneeModal } from './pages/my-task/AssigneeModal';
import { useState } from 'react';

export default function Example() {
  const [isOpen, setIsOpen] = useState(false);
  const [assignees, setAssignees] = useState([]);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Select Assignees
      </button>
      
      <AssigneeModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        selectedAssignees={assignees}
        onAssign={(newAssignees) => {
          setAssignees(newAssignees);
          setIsOpen(false);
        }}
      />
    </>
  );
}

// Features:
// - User search and filtering
// - Email invitation support
// - Contact groups (collapsible)
// - Role selection (Assignee/Viewer)
// - Multi-user selection
// - Copy link functionality`}
                      />
                    </TabPanel>
                    <TabPanel value="github" activeTab={assigneeModalTab}>
                      <CodeExample
                        title="GitHub URL"
                        code={`https://github.com/dedekysf/Tasktagdesignsystem/blob/main/src/pages/my-task/AssigneeModal.tsx`}
                      />
                    </TabPanel>
                  </TabsContainer>
                </div>
              </div>
            </section>
          )}

          {/* Assigned Members Button Component */}
          {activeSection === 'assigned-members-button' && (
            <section>
              <SectionHeader
                icon={Users}
                title="Assigned Members Button"
                description="Total Variant: 1"
              />

              <div>
                <div style={{ marginBottom: 'var(--spacing-56)' }}>
                  <TabsContainer
                    activeTab={assignedMembersButtonTab}
                    onTabChange={setAssignedMembersButtonTab}
                    tabs={[
                      { value: 'preview', label: 'Preview' },
                      { value: 'usage', label: 'Usage' },
                      { value: 'github', label: 'GitHub URL' }
                    ]}
                  >
                    <TabPanel value="preview" activeTab={assignedMembersButtonTab}>
                      <div className="component-card">
                        <AssignedMembersButton
                          members={[
                            {
                              id: '2',
                              name: 'Alexander Benjamin Richardson',
                              email: 'alexander@example.com',
                              initials: 'AR',
                              color: 'var(--green)',
                              role: 'assignee'
                            }
                          ]}
                          onClick={() => console.log('Clicked')}
                        />
                      </div>
                    </TabPanel>
                    <TabPanel value="usage" activeTab={assignedMembersButtonTab}>
                      <CodeExample 
                        code={`import { AssignedMembersButton } from './components/AssignedMembersButton';

export default function Example() {
  const members = [
    {
      id: '1',
      name: 'Sarah Johnson',
      email: 'sarah@example.com',
      initials: 'SJ',
      color: 'var(--blue)',
      role: 'assignee'
    }
  ];

  return (
    <AssignedMembersButton
      members={members}
      onClick={() => console.log('Open assignee modal')}
      className="custom-class"
    />
  );
}

// Props:
// - members: AssignedMember[] (required) - Only displays first member
// - onClick: () => void (required)
// - className?: string (optional)
// 
// Features:
// - Fixed width: 124px (text truncates if exceeds)
// - Fixed height: 32px
// - Avatar size: 24px (xs)
// - Avatar position: Vertically centered with 8px padding from left
// - Gap between avatar and text: 2px
// - Tooltip: Only shows on hover if text is truncated (Avatar xs + name in white)`}
                      />
                    </TabPanel>
                    <TabPanel value="github" activeTab={assignedMembersButtonTab}>
                      <CodeExample
                        title="GitHub URL"
                        code={`https://github.com/dedekysf/Tasktagdesignsystem/blob/main/src/components/AssignedMembersButton.tsx`}
                      />
                    </TabPanel>
                  </TabsContainer>
                </div>
              </div>
            </section>
          )}

          {/* Member Row Component */}
          {activeSection === 'member-row' && (
            <section>
              <SectionHeader
                icon={User}
                title="Member Row"
                description="Total Variant: 3"
              />

              <div>
                <div style={{ marginBottom: 'var(--spacing-56)' }}>
                  <TabsContainer
                    activeTab={memberRowTab}
                    onTabChange={setMemberRowTab}
                    tabs={[
                      { value: 'preview', label: 'Preview' },
                      { value: 'usage', label: 'Usage' },
                      { value: 'github', label: 'GitHub URL' }
                    ]}
                  >
                    <TabPanel value="preview" activeTab={memberRowTab}>
                      <div className="component-card">
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-12)' }}>
                          <div>
                            <p style={{ marginBottom: 'var(--spacing-8)', fontSize: 'var(--text-label)', color: 'var(--text-secondary)' }}>Variant 1: Owner (role not editable)</p>
                          <MemberRow
                            member={{
                              id: 'owner-1',
                              name: 'Sarah Johnson',
                              email: 'sarah@example.com',
                              initials: 'SJ',
                              color: 'var(--blue)',
                              role: 'Owner',
                              isPending: false
                            }}
                            isHovered={memberRowHoveredId === 'owner-1'}
                            isDropdownOpen={memberRowDropdownId === 'owner-1'}
                            onMouseEnter={() => setMemberRowHoveredId('owner-1')}
                            onMouseLeave={() => setMemberRowHoveredId(null)}
                            onToggleDropdown={() => {}}
                            onUpdateRole={() => {}}
                            onDelete={() => console.log('Delete owner-1')}
                          />
                        </div>
                        <div>
                          <p style={{ marginBottom: 'var(--spacing-8)', fontSize: 'var(--text-label)', color: 'var(--text-secondary)' }}>Variant 2: Invited Member (with resend & cancel)</p>
                          <MemberRow
                            member={{
                              id: 'invite-1',
                              name: 'emily@example.com',
                              email: 'emily@example.com',
                              initials: '',
                              color: '',
                              role: 'Assignee',
                              isPending: true
                            }}
                            isHovered={memberRowHoveredId === 'invite-1'}
                            isDropdownOpen={memberRowDropdownId === 'invite-1'}
                            onMouseEnter={() => setMemberRowHoveredId('invite-1')}
                            onMouseLeave={() => setMemberRowHoveredId(null)}
                            onToggleDropdown={() => {}}
                            onUpdateRole={() => {}}
                            onDelete={() => console.log('Cancel invite-1')}
                            onResendInvite={() => console.log('Resend invite-1')}
                          />
                        </div>
                        <div>
                          <p style={{ marginBottom: 'var(--spacing-8)', fontSize: 'var(--text-label)', color: 'var(--text-secondary)' }}>Variant 3: Active Member (role editable with dropdown)</p>
                          <MemberRow
                            member={{
                              id: 'member-1',
                              name: 'Mike Wilson',
                              email: 'mike@example.com',
                              initials: 'MW',
                              color: 'var(--purple)',
                              role: 'Assignee',
                              isPending: false
                            }}
                            isHovered={memberRowHoveredId === 'member-1'}
                            isDropdownOpen={memberRowDropdownId === 'member-1'}
                            onMouseEnter={() => setMemberRowHoveredId('member-1')}
                            onMouseLeave={() => setMemberRowHoveredId(null)}
                            onToggleDropdown={() => {
                              setMemberRowDropdownId(memberRowDropdownId === 'member-1' ? null : 'member-1');
                            }}
                            onUpdateRole={(role) => {
                              console.log('Update role to:', role);
                              setMemberRowDropdownId(null);
                            }}
                            onDelete={() => console.log('Delete member-1')}
                          />
                        </div>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel value="usage" activeTab={memberRowTab}>
                      <CodeExample 
                        code={`import { MemberRow } from './components/MemberRow';
import { useState } from 'react';

export default function Example() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [dropdownId, setDropdownId] = useState<string | null>(null);

  // Variant 1: Owner (role not editable)
  const ownerMember = {
    id: 'owner-1',
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    initials: 'SJ',
    color: 'var(--blue)',
    role: 'Owner',
    isPending: false
  };

  // Variant 2: Invited Member
  const invitedMember = {
    id: 'invite-1',
    name: 'emily@example.com',
    email: 'emily@example.com',
    role: 'Assignee',
    isPending: true
  };

  // Variant 3: Active Member (role editable)
  const activeMember = {
    id: 'member-1',
    name: 'Mike Wilson',
    email: 'mike@example.com',
    initials: 'MW',
    color: 'var(--purple)',
    role: 'Assignee',
    isPending: false
  };

  return (
    <div>
      {/* Owner */}
      <MemberRow
        member={ownerMember}
        isHovered={hoveredId === ownerMember.id}
        isDropdownOpen={false}
        onMouseEnter={() => setHoveredId(ownerMember.id)}
        onMouseLeave={() => setHoveredId(null)}
        onToggleDropdown={() => {}}
        onUpdateRole={() => {}}
        onDelete={() => console.log('Delete')}
      />

      {/* Invited */}
      <MemberRow
        member={invitedMember}
        isHovered={hoveredId === invitedMember.id}
        isDropdownOpen={false}
        onMouseEnter={() => setHoveredId(invitedMember.id)}
        onMouseLeave={() => setHoveredId(null)}
        onToggleDropdown={() => {}}
        onUpdateRole={() => {}}
        onDelete={() => console.log('Cancel invite')}
        onResendInvite={() => console.log('Resend')}
      />

      {/* Active Member */}
      <MemberRow
        member={activeMember}
        isHovered={hoveredId === activeMember.id}
        isDropdownOpen={dropdownId === activeMember.id}
        onMouseEnter={() => setHoveredId(activeMember.id)}
        onMouseLeave={() => setHoveredId(null)}
        onToggleDropdown={() => {
          setDropdownId(dropdownId === activeMember.id ? null : activeMember.id);
        }}
        onUpdateRole={(role) => {
          console.log('Update role:', role);
          setDropdownId(null);
        }}
        onDelete={() => console.log('Remove member')}
      />
    </div>
  );
}

// Three variants:
// 1. Owner: role === 'Owner' - Shows plain "Owner" text (not editable)
// 2. Invited: isPending === true - Shows role text, Resend & Cancel buttons
// 3. Active Member: isPending === false && role !== 'Owner' - Role dropdown (editable)`}
                      />
                    </TabPanel>
                  </TabsContainer>
                </div>
              </div>
              <TabPanel value="github" activeTab={memberRowTab}>
                <CodeExample
                  title="GitHub URL"
                  code={`https://github.com/dedekysf/Tasktagdesignsystem/blob/main/src/components/MemberRow.tsx`}
                />
              </TabPanel>
            </section>
          )}

          {/* Checklist Item Component */}
          {activeSection === 'checklist-item' && (
            <section>
              <SectionHeader
                icon={CheckSquare}
                title="Checklist Item"
                description="Total Variant: 1"
              />

              <div>
                <div style={{ marginBottom: 'var(--spacing-56)' }}>
                  <TabsContainer
                    activeTab={checklistItemTab}
                    onTabChange={setChecklistItemTab}
                    tabs={[
                      { value: 'preview', label: 'Preview' },
                      { value: 'usage', label: 'Usage' },
                      { value: 'github', label: 'GitHub URL' }
                    ]}
                  >
                    <TabPanel value="preview" activeTab={checklistItemTab}>
                      <div className="component-card">
                        <DndProvider backend={HTML5Backend}>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-16)' }}>
                            {checklistPreviewItems.map((item, idx) => (
                              <ChecklistItem
                                key={item.id}
                                id={item.id}
                                text={item.text}
                                checked={item.checked}
                                index={idx}
                                onToggle={toggleChecklistItem}
                                onDelete={deleteChecklistItem}
                                moveItem={moveChecklistItem}
                                onUpdate={updateChecklistItem}
                              />
                            ))}
                          </div>
                        </DndProvider>
                      </div>
                    </TabPanel>
                    <TabPanel value="usage" activeTab={checklistItemTab}>
                      <CodeExample 
                        code={`import { ChecklistItem } from './components/ChecklistItem';

export default function Example() {
  const item = {
    id: '1',
    text: 'Review design mockups',
    completed: false
  };

  return (
    <ChecklistItem
      item={item}
      onToggle={(id) => console.log('Toggle:', id)}
      onDelete={(id) => console.log('Delete:', id)}
      onTextChange={(id, text) => console.log('Text changed:', id, text)}
      className="custom-class"
    />
  );
}

// Props:
// - item: ChecklistItemData (required)
// - onToggle: (id: string) => void (required)
// - onDelete: (id: string) => void (required)
// - onTextChange: (id: string, text: string) => void (required)
// - className?: string (optional)`}
                      />
                    </TabPanel>
                    <TabPanel value="github" activeTab={checklistItemTab}>
                      <CodeExample
                        title="GitHub URL"
                        code={`https://github.com/dedekysf/Tasktagdesignsystem/blob/main/src/components/ChecklistItem.tsx`}
                      />
                    </TabPanel>
                  </TabsContainer>
                </div>
              </div>
            </section>
          )}

          {/* Task Item Component */}
          {activeSection === 'task-item' && (
            <section>
              <SectionHeader
                icon={CheckSquare}
                title="Task Item"
                description="Total Variant: 1"
              />

              <div>
                <div style={{ marginBottom: 'var(--spacing-56)' }}>
                  <TabsContainer
                    activeTab={taskItemTab}
                    onTabChange={setTaskItemTab}
                    tabs={[
                      { value: 'preview', label: 'Preview' },
                      { value: 'usage', label: 'Usage' },
                      { value: 'github', label: 'GitHub URL' }
                    ]}
                  >
                    <TabPanel value="preview" activeTab={taskItemTab}>
                      <div className="component-card">
                        <div style={{ backgroundColor: 'var(--grey-01)', borderRadius: 'var(--radius-md)', padding: 'var(--spacing-8)' }}>
                          <div style={{ backgroundColor: 'white', borderRadius: 'var(--radius-md)', border: '1px solid var(--grey-03)', padding: 'var(--spacing-12)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-12)' }}>
                              <Checkbox size="sm" />
                              <span style={{ flex: 1 }}>Example task with drag-and-drop support</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel value="usage" activeTab={taskItemTab}>
                      <CodeExample 
                        code={`import { TaskItem } from './pages/my-task/TaskItem';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

export default function Example() {
  const task = {
    id: '1',
    name: 'Task name',
    completed: false,
    priority: 'medium',
    dueDate: new Date(),
    assignees: [],
    project: { id: '1', name: 'Project', color: '#3B82F6', icon: 'helmet' }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <TaskItem
        task={task}
        index={0}
        onToggleComplete={(id) => console.log('Toggle:', id)}
        onUpdateTask={(id, updates) => console.log('Update:', updates)}
        onDeleteTask={(id) => console.log('Delete:', id)}
        sectionType="current"
      />
    </DndProvider>
  );
}

// Features:
// - Drag and drop with react-dnd
// - Multi-select support (Cmd/Ctrl + click)
// - Context menu (right-click)
// - Inline editing for priority and due date
// - Checkbox with animation
// - Hover states with action buttons
// - Project and checklist badges
// - Assignee avatars`}
                      />
                    </TabPanel>
                  </TabsContainer>
                </div>
              </div>
            </section>
          )}

          {/* Task Section Component */}
          {activeSection === 'task-section' && (
            <section>
              <SectionHeader
                icon={List}
                title="Task Section"
                description="Total Variant: 1"
              />

              <div>
                <div style={{ marginBottom: 'var(--spacing-56)' }}>
                  <TabsContainer
                    activeTab={taskSectionTab}
                    onTabChange={setTaskSectionTab}
                    tabs={[
                      { value: 'preview', label: 'Preview' },
                      { value: 'usage', label: 'Usage' },
                      { value: 'github', label: 'GitHub URL' }
                    ]}
                  >
                    <TabPanel value="preview" activeTab={taskSectionTab}>
                      <div style={{ padding: 'var(--spacing-24)', backgroundColor: 'var(--grey-01)', borderRadius: 'var(--radius-lg)' }}>
                        <div style={{ backgroundColor: 'white', borderRadius: 'var(--radius-md)', border: '1px solid var(--grey-03)' }}>
                          <TaskSectionHeader
                            title="Current Tasks"
                            count={5}
                            isExpanded={true}
                            onToggle={() => {}}
                          />
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel value="usage" activeTab={taskSectionTab}>
                      <CodeExample 
                        code={`import { TaskSection } from './components/TaskSection';
import { TaskItem } from './pages/my-task/TaskItem';
import { TaskSectionHeader } from './components/TaskSectionHeader';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

export default function Example() {
  const tasks = [
    { id: '1', name: 'Task 1', completed: false, priority: 'high' },
    { id: '2', name: 'Task 2', completed: false, priority: 'medium' }
  ];

  return (
    <DndProvider backend={HTML5Backend}>
      <TaskSection
        title="Current Tasks"
        count={tasks.length}
        tasks={tasks}
        isExpanded={true}
        onToggleExpand={() => {}}
        sectionType="current"
        onToggleComplete={(id) => console.log('Toggle:', id)}
        onUpdateTask={(id, updates) => console.log('Update:', updates)}
        onDeleteTask={(id) => console.log('Delete:', id)}
        TaskItemComponent={TaskItem}
        SectionHeaderComponent={TaskSectionHeader}
      />
    </DndProvider>
  );
}

// Features:
// - Collapsible section with header
// - Virtual scrolling for performance
// - Drag and drop task reordering
// - Cross-section task moves
// - Inline task creation
// - Bulk assignee management
// - Load more on scroll`}
                      />
                    </TabPanel>
                  </TabsContainer>
                </div>
              </div>
              <TabPanel value="github" activeTab={taskItemTab}>
                <CodeExample
                  title="GitHub URL"
                  code={`https://github.com/dedekysf/Tasktagdesignsystem/blob/main/src/components/TaskItem.tsx`}
                />
              </TabPanel>
            </section>
          )}

          {/* My Task Page */}
          {activeSection === 'my-task' && (
            <MyTaskPage />
          )}

          {/* Task Panel Page */}
          {activeSection === 'task-panel' && (
            <TaskPanelPage />
          )}

          {/* Project Details Page */}
          {activeSection === 'project-details' && (
            <ProjectDetailsPage />
          )}

          {/* Team Detail Page */}
          {activeSection === 'team-detail' && (
            <TeamDetailPage />
          )}
        </div>
      </main>
    </div>
  );
}