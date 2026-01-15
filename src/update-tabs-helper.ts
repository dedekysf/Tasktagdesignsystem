// Helper mapping for GitHub URLs per component
// Use this as reference when adding GitHub URL tabs

export const componentGitHubUrls = {
  // Buttons
  button: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/Button.tsx',
  
  // Inputs
  textInput: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/TextInput.tsx',
  textarea: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/Textarea.tsx',
  
  // Form Controls
  checkbox: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/Checkbox.tsx',
  radio: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/RadioButton.tsx',
  dropdown: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/Dropdown.tsx',
  datepicker: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/Datepicker.tsx',
  toggle: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/Toggle.tsx',
  
  // Display Components
  avatar: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/AvatarComponent.tsx',
  avatarGroup: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/AvatarGroup.tsx',
  tooltip: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/Tooltip.tsx',
  tabItem: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/TabItem.tsx',
  
  // Modals & Overlays
  modal: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/Modal.tsx',
  toast: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/Toast.tsx',
  discardChangesModal: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/DiscardChangesModal.tsx',
  
  // Calendar Components
  calendar: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/Calendar.tsx',
  dateRangeCalendar: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/DateRangeCalendar.tsx',
  
  // Task Components
  priorityDropdown: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/PriorityDropdown.tsx',
  taskSectionHeader: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/TaskSectionHeader.tsx',
  projectSelectModal: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/ProjectSelectModal.tsx',
  taskSection: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/TaskSection.tsx',
  taskItem: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/pages/my-task/TaskItem.tsx',
  assigneeModal: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/pages/my-task/AssigneeModal.tsx',
  
  // Member Components
  assignedMembersButton: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/AssignedMembersButton.tsx',
  memberRow: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/MemberRow.tsx',
  
  // Checklist
  checklistItem: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/ChecklistItem.tsx',
};

// Tab configuration template - what needs to be updated in each component section:
/*
1. Update tabs array from:
   tabs={[
     { value: 'preview', label: 'Preview' },
     { value: 'usage', label: 'Usage' }
   ]}

   To:
   tabs={[
     { value: 'preview', label: 'Preview' },
     { value: 'usage', label: 'Usage' },
     { value: 'github', label: 'GitHub URL' }
   ]}

2. Add after usage TabPanel:
   <TabPanel value="github" activeTab={componentTab}>
     <CodeExample
       title="GitHub URL"
       code={`GITHUB_URL_HERE`}
     />
   </TabPanel>
*/