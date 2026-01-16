import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { SectionHeader } from './SectionHeader';
import { ColorItem } from './ColorItem';
import { TypographyItem } from './TypographyItem';
import { RadiusItem } from './RadiusItem';
import { ElevationItem } from './ElevationItem';
import { SpacingItem } from './SpacingItem';
import { SizeItem } from './SizeItem';
import { LogoItem } from './LogoItem';
import { Avatar } from './AvatarComponent';
import { AvatarGroup } from './AvatarGroup';
import { Button, type ButtonSize } from './Button';
import { TextInput } from './TextInput';
import { Textarea } from './Textarea';
import { Checkbox } from './Checkbox';
import { RadioButton } from './RadioButton';
import { Dropdown, type DropdownOption } from './Dropdown';
import { Datepicker } from './Datepicker';
import { CodeExample } from './CodeExample';
import { TabsContainer, TabPanel } from './TabsContainer';
import { Tooltip } from './Tooltip';
import { SuccessTooltipDemo } from './SuccessTooltipDemo';
import { TabItem } from './TabItem';
import { Modal } from './Modal';
import { Toast } from './Toast';
import { Calendar } from './Calendar';
import { DateRangeCalendar } from './DateRangeCalendar';
import { DiscardChangesModal } from './DiscardChangesModal';
import { PriorityDropdown } from './PriorityDropdown';
import { TaskSectionHeader } from './TaskSectionHeader';
import { ProjectSelectModal } from './ProjectSelectModal';
import { TaskSection } from './TaskSection';
import { AssigneeModal } from '../pages/my-task/AssigneeModal';
import { TaskItem } from '../pages/my-task/TaskItem';
import { AssignedMembersButton } from './AssignedMembersButton';
import { MemberRow } from './MemberRow';
import { ChecklistItem } from './ChecklistItem';
import { Toggle } from './Toggle';
import { UpgradePromptModal } from './UpgradePromptModal';
import { SubscriptionModal } from './SubscriptionModal';
import { Tag } from './Tag';
import { Alert } from './Alert';
import { SideNav } from './SideNav';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Palette, Type, Square, Box, MousePointerClick, TextCursor, LayoutGrid, User, Users, Image as ImageIcon, Check, CheckSquare, Circle, Sparkles, ExternalLink, ChevronDown, ChevronLeft, ChevronRight, Trash2, Info, Home, Settings, Search, CircleCheckBig, Bell, CalendarDays, CalendarRange, AlertTriangle, ChevronUp as ChevronUpIcon, FolderOpen, UserPlus, List, Plus } from 'lucide-react';
import svgPaths from '../imports/svg-92e1ovrkrf';
import AppIconAndroid from '../imports/AppIconAndroid-43-971';
import AppIconIOs from '../imports/AppIconIOs-43-942';
import TaskTagLogo from '../imports/TaskTagLogo';
import Xls from '../imports/Xls';
import Pdf from '../imports/Pdf';
import Ppt from '../imports/Ppt';
import Zip from '../imports/Zip';
import Txt from '../imports/Txt';
import Xml from '../imports/Xml';
import Doc from '../imports/Doc';
import Html from '../imports/Html';
import Eps from '../imports/Eps';
import teamCollaborationImage from 'figma:asset/231f46d29d335b70c14e6a1c3a239decf66583f3.png';
import collaborationImage from 'figma:asset/727e6b11c9799f58fcfa4a733691914bdec7af1f.png';
import MyTaskPage from '../pages/MyTaskPage';
import TaskPanelPage from '../pages/TaskPanelPage';
import ProjectDetailsPage from '../pages/project-details/ProjectDetailsPage';
import TeamDetailPage from '../pages/team-detail/TeamDetailPage';

export function MainContent() {
  // All state declarations from original App component
  const [inputValue, setInputValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');
  const [textareaValue2, setTextareaValue2] = useState('');
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
  const [modalUpgradePromptTab, setModalUpgradePromptTab] = useState('preview');
  const [modalSubscriptionTab, setModalSubscriptionTab] = useState('preview');
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
  const [projectSelectModalTab, setProjectSelectModalTab] = useState('preview');
  const [assigneeModalTab, setAssigneeModalTab] = useState('preview');
  const [taskItemTab, setTaskItemTab] = useState('preview');
  const [taskSectionTab, setTaskSectionTab] = useState('preview');
  const [assignedMembersButtonTab, setAssignedMembersButtonTab] = useState('preview');
  const [memberRowTab, setMemberRowTab] = useState('preview');
  const [checklistItemTab, setChecklistItemTab] = useState('preview');
  const [toggleTab, setToggleTab] = useState('preview');
  const [tagBasicTab, setTagBasicTab] = useState('preview');
  const [tagWithIconTab, setTagWithIconTab] = useState('preview');
  const [alertTab, setAlertTab] = useState('preview');
  const [sideNavExpandedTab, setSideNavExpandedTab] = useState('preview');
  
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
  const [isUpgradePromptModalOpen, setIsUpgradePromptModalOpen] = useState(false);
  const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false);
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
    <Routes>
      {/* Redirect root to colors */}
      <Route path="/" element={<Navigate to="/colors" replace />} />
      
      {/* Pages */}
      <Route path="/my-task" element={<MyTaskPage />} />
      <Route path="/task-panel" element={<TaskPanelPage />} />
      <Route path="/project-details" element={<ProjectDetailsPage />} />
      <Route path="/team-detail" element={<TeamDetailPage />} />
      
      {/* Foundation routes - will be rendered with custom content below */}
      <Route path="/colors" element={<div>Colors Content Placeholder</div>} />
      
      {/* Add more routes as needed */}
    </Routes>
  );
}
