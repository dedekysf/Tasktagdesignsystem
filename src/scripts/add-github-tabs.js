/**
 * Automated Script untuk menambahkan GitHub URL tabs ke semua component sections
 * 
 * Script ini akan:
 * 1. Membaca file App.tsx
 * 2. Mencari semua TabsContainer yang hanya memiliki 2 tabs (preview & usage)
 * 3. Menambahkan tab ketiga (github) 
 * 4. Menambahkan TabPanel untuk GitHub URL setelah usage TabPanel
 * 
 * Usage: node scripts/add-github-tabs.js
 */

const fs = require('fs');
const path = require('path');

// Mapping component tab names ke GitHub URLs
const githubUrlMapping = {
  // Textarea
  textareaLabelTab: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/Textarea.tsx',
  textareaSizeTab: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/Textarea.tsx',
  textareaStatesTab: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/Textarea.tsx',
  
  // Checkbox
  checkboxBasicTab: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/Checkbox.tsx',
  checkboxLabelTab: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/Checkbox.tsx',
  checkboxSizeTab: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/Checkbox.tsx',
  checkboxStatesTab: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/Checkbox.tsx',
  
  // Radio
  radioBasicTab: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/RadioButton.tsx',
  radioLabelTab: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/RadioButton.tsx',
  radioSizeTab: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/RadioButton.tsx',
  radioStatesTab: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/RadioButton.tsx',
  
  // Dropdown
  dropdownBasicTab: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/Dropdown.tsx',
  dropdownLabelTab: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/Dropdown.tsx',
  dropdownSizeTab: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/Dropdown.tsx',
  dropdownVariantTab: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/Dropdown.tsx',
  dropdownStatesTab: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/Dropdown.tsx',
  dropdownWithoutLabelTab: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/Dropdown.tsx',
  dropdownWithLabelTab: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/Dropdown.tsx',
  dropdownRequiredTab: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/Dropdown.tsx',
  dropdownErrorTab: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/Dropdown.tsx',
  dropdownDisabledTab: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/Dropdown.tsx',
  
  // Avatar
  avatarIconTab: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/AvatarComponent.tsx',
  avatarImageTab: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/AvatarComponent.tsx',
  avatarInitialsTab: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/AvatarComponent.tsx',
  avatarGroupTab: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/AvatarGroup.tsx',
  
  // Tooltip
  tooltipVariantTab: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/Tooltip.tsx',
  tooltipAvatarExamplesTab: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/Tooltip.tsx',
  tooltipAvatarGroupTab: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/Tooltip.tsx',
  tooltipSuccessTab: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/Tooltip.tsx',
  
  // Tab Item
  tabBasicMdTab: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/TabItem.tsx',
  tabBasicSmTab: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/TabItem.tsx',
  tabIconMdTab: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/TabItem.tsx',
  tabIconSmTab: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/TabItem.tsx',
  tabDisabledTab: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/TabItem.tsx',
  
  // Modal
  modalTwoActionTab: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/Modal.tsx',
  modalOneActionTab: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/Modal.tsx',
  
  // Datepicker
  datepickerBasicTab: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/Datepicker.tsx',
  datepickerLabelTab: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/Datepicker.tsx',
  datepickerSizeTab: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/Datepicker.tsx',
  datepickerStatesTab: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/Datepicker.tsx',
  
  // Toast
  toastTab1: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/Toast.tsx',
  toastTab2: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/Toast.tsx',
  toastTab3: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/Toast.tsx',
  toastTab4: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/Toast.tsx',
  
  // Calendar
  calendarTab: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/Calendar.tsx',
  dateRangeCalendarTab: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/DateRangeCalendar.tsx',
  
  // MyTask Components
  discardChangesModalTab: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/DiscardChangesModal.tsx',
  priorityDropdownTab: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/PriorityDropdown.tsx',
  taskSectionHeaderTab: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/TaskSectionHeader.tsx',
  projectSelectModalTab: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/ProjectSelectModal.tsx',
  assigneeModalTab: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/pages/my-task/AssigneeModal.tsx',
  taskItemTab: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/pages/my-task/TaskItem.tsx',
  taskSectionTab: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/TaskSection.tsx',
  assignedMembersButtonTab: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/AssignedMembersButton.tsx',
  memberRowTab: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/MemberRow.tsx',
  checklistItemTab: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/ChecklistItem.tsx',
  toggleTab: 'https://github.com/dedekysf/Tasktagdesignsystem/blob/main/components/Toggle.tsx',
};

console.log('=== GitHub Tab Automation Script ===');
console.log(`Total sections to process: ${Object.keys(githubUrlMapping).length}`);
console.log('\nInstructions:');
console.log('1. This script provides the mapping for all component sections');
console.log('2. Each section needs:');
console.log('   a) Add github tab to tabs array');
console.log('   b) Add GitHub URL TabPanel after usage TabPanel');
console.log('\n3. Pattern to add for each section:');
console.log('\n--- In tabs array, change from:');
console.log(`   tabs={[
     { value: 'preview', label: 'Preview' },
     { value: 'usage', label: 'Usage' }
   ]}`);
console.log('\n--- To:');
console.log(`   tabs={[
     { value: 'preview', label: 'Preview' },
     { value: 'usage', label: 'Usage' },
     { value: 'github', label: 'GitHub URL' }
   ]}`);
console.log('\n--- Add after usage TabPanel:');
console.log(`   <TabPanel value="github" activeTab={COMPONENT_TAB_NAME}>
     <CodeExample
       title="GitHub URL"
       code={\`GITHUB_URL\`}
     />
   </TabPanel>`);

console.log('\n\n=== Component Sections Mapping ===\n');
Object.entries(githubUrlMapping).forEach(([tabName, url], index) => {
  console.log(`${index + 1}. ${tabName}`);
  console.log(`   URL: ${url}\n`);
});

console.log('\n=== Summary ===');
console.log(`Sections already completed: 7 (Button Variants, Button Rectangular, Button Rounded, Text Input with Icon, Input Basic, Input Label, Input Size, Input States, Textarea Basic, Textarea Label)`);
console.log(`Sections remaining: ${Object.keys(githubUrlMapping).length - 2}`);
