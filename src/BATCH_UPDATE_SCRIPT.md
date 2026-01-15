# Batch Update Script for Adding GitHub URL Tabs

## Current Progress
✅ Button Variant Tab - DONE
✅ Button Rectangular Tab - DONE  
✅ Button Round Tab - DONE

## Remaining Components to Update (46 sections)

### Step-by-Step Updates Needed

For each component section below:
1. Update `tabs` array to include `{ value: 'github', label: 'GitHub URL' }`
2. Add `<TabPanel value="github" activeTab={componentNameTab}>` after the usage TabPanel
3. Inside the new TabPanel, add: `<CodeExample title="GitHub URL" code={\`GITHUB_URL\`} />`

---

### Input Components (5 sections)
1. **inputTab** - Text Input with Icon
   - URL: `https://github.com/yourusername/tasktag-design-system/blob/main/components/TextInput.tsx`
   - Line ~1211-1275

2. **inputBasicTab** - Basic Text Input  
   - URL: `https://github.com/yourusername/tasktag-design-system/blob/main/components/TextInput.tsx`
   - Line ~1430

3. **inputLabelTab** - Text Input with Label
   - URL: `https://github.com/yourusername/tasktag-design-system/blob/main/components/TextInput.tsx`

4. **inputSizeTab** - Text Input Sizes
   - URL: `https://github.com/yourusername/tasktag-design-system/blob/main/components/TextInput.tsx`

5. **inputStatesTab** - Text Input States
   - URL: `https://github.com/yourusername/tasktag-design-system/blob/main/components/TextInput.tsx`

### Textarea Components (5 sections)
6-10. **textareaTab, textareaBasicTab, textareaLabelTab, textareaSizeTab, textareaStatesTab**
   - URL: `https://github.com/yourusername/tasktag-design-system/blob/main/components/Textarea.tsx`

### Checkbox Components (5 sections)
11-15. **checkboxTab, checkboxBasicTab, checkboxLabelTab, checkboxSizeTab, checkboxStatesTab**
   - URL: `https://github.com/yourusername/tasktag-design-system/blob/main/components/Checkbox.tsx`

### Radio Components (5 sections)
16-20. **radioTab, radioBasicTab, radioLabelTab, radioSizeTab, radioStatesTab**
   - URL: `https://github.com/yourusername/tasktag-design-system/blob/main/components/RadioButton.tsx`

### Dropdown Components (10 sections)
21-30. **dropdownTab, dropdownBasicTab, dropdownLabelTab, dropdownSizeTab, dropdownVariantTab, dropdownStatesTab, dropdownWithoutLabelTab, dropdownWithLabelTab, dropdownRequiredTab, dropdownErrorTab, dropdownDisabledTab**
   - URL: `https://github.com/yourusername/tasktag-design-system/blob/main/components/Dropdown.tsx`

### Avatar Components (4 sections)
31-34. **avatarIconTab, avatarImageTab, avatarInitialsTab, avatarGroupTab**
   - URL Icon/Image/Initials: `https://github.com/yourusername/tasktag-design-system/blob/main/components/AvatarComponent.tsx`
   - URL Group: `https://github.com/yourusername/tasktag-design-system/blob/main/components/AvatarGroup.tsx`

### Tooltip Components (4 sections)
35-38. **tooltipVariantTab, tooltipAvatarExamplesTab, tooltipAvatarGroupTab, tooltipSuccessTab**
   - URL: `https://github.com/yourusername/tasktag-design-system/blob/main/components/Tooltip.tsx`

### Tab Item Components (6 sections)
39-44. **tabsItemTab, tabBasicMdTab, tabBasicSmTab, tabIconMdTab, tabIconSmTab, tabDisabledTab**
   - URL: `https://github.com/yourusername/tasktag-design-system/blob/main/components/TabItem.tsx`

### Modal Components (2 sections)
45-46. **modalTwoActionTab, modalOneActionTab**
   - URL: `https://github.com/yourusername/tasktag-design-system/blob/main/components/Modal.tsx`

### Datepicker Components (4 sections)
47-50. **datepickerBasicTab, datepickerLabelTab, datepickerSizeTab, datepickerStatesTab**
   - URL: `https://github.com/yourusername/tasktag-design-system/blob/main/components/Datepicker.tsx`

### Toast Components (5 sections)
51-55. **toastTab, toastTab1, toastTab2, toastTab3, toastTab4**
   - URL: `https://github.com/yourusername/tasktag-design-system/blob/main/components/Toast.tsx`

### Calendar Components (2 sections)
56-57. **calendarTab, dateRangeCalendarTab**
   - Calendar URL: `https://github.com/yourusername/tasktag-design-system/blob/main/components/Calendar.tsx`
   - DateRange URL: `https://github.com/yourusername/tasktag-design-system/blob/main/components/DateRangeCalendar.tsx`

### Other MyTask Components (10 sections)
58. **discardChangesModalTab**
   - URL: `https://github.com/yourusername/tasktag-design-system/blob/main/components/DiscardChangesModal.tsx`

59. **priorityDropdownTab**
   - URL: `https://github.com/yourusername/tasktag-design-system/blob/main/components/PriorityDropdown.tsx`

60. **taskSectionHeaderTab**
   - URL: `https://github.com/yourusername/tasktag-design-system/blob/main/components/TaskSectionHeader.tsx`

61. **projectSelectModalTab**
   - URL: `https://github.com/yourusername/tasktag-design-system/blob/main/components/ProjectSelectModal.tsx`

62. **assigneeModalTab**
   - URL: `https://github.com/yourusername/tasktag-design-system/blob/main/pages/my-task/AssigneeModal.tsx`

63. **taskItemTab**
   - URL: `https://github.com/yourusername/tasktag-design-system/blob/main/pages/my-task/TaskItem.tsx`

64. **taskSectionTab**
   - URL: `https://github.com/yourusername/tasktag-design-system/blob/main/components/TaskSection.tsx`

65. **assignedMembersButtonTab**
   - URL: `https://github.com/yourusername/tasktag-design-system/blob/main/components/AssignedMembersButton.tsx`

66. **memberRowTab**
   - URL: `https://github.com/yourusername/tasktag-design-system/blob/main/components/MemberRow.tsx`

67. **checklistItemTab**
   - URL: `https://github.com/yourusername/tasktag-design-system/blob/main/components/ChecklistItem.tsx`

68. **toggleTab**
   - URL: `https://github.com/yourusername/tasktag-design-system/blob/main/components/Toggle.tsx`

---

## Example Code Pattern

### Before:
```tsx
<TabsContainer
  activeTab={inputTab}
  onTabChange={setInputTab}
  tabs={[
    { value: 'preview', label: 'Preview' },
    { value: 'usage', label: 'Usage' }
  ]}
>
  <TabPanel value="preview" activeTab={inputTab}>
    {/* preview content */}
  </TabPanel>
  <TabPanel value="usage" activeTab={inputTab}>
    <CodeExample title="Usage Example" code={`...`} />
  </TabPanel>
</TabsContainer>
```

### After:
```tsx
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
    {/* preview content */}
  </TabPanel>
  <TabPanel value="usage" activeTab={inputTab}>
    <CodeExample title="Usage Example" code={`...`} />
  </TabPanel>
  <TabPanel value="github" activeTab={inputTab}>
    <CodeExample
      title="GitHub URL"
      code={`https://github.com/yourusername/tasktag-design-system/blob/main/components/TextInput.tsx`}
    />
  </TabPanel>
</TabsContainer>
```
