# GitHub Tab Update Instructions

## Summary
Need to add a third "GitHub" tab to all 40+ component preview sections in App.tsx.

## Pattern to Apply

### Current Structure:
```tsx
tabs={[
  { value: 'preview', label: 'Preview' },
  { value: 'usage', label: 'Usage' }
]}
```

### Updated Structure:
```tsx
tabs={[
  { value: 'preview', label: 'Preview' },
  { value: 'usage', label: 'Usage' },
  { value: 'github', label: 'GitHub' }
]}
```

### Add after each Usage TabPanel:
```tsx
<TabPanel value="github" activeTab={componentTab}>
  <GitHubLink url="GITHUB_URL_HERE" />
</TabPanel>
```

## Component GitHub URL Mappings

1. **Button** (3 sections: Variant, Rectangular, Round)
   - URL: `https://github.com/yourusername/tasktag-design-system/blob/main/components/Button.tsx`

2. **TextInput** (5 sections)
   - URL: `https://github.com/yourusername/tasktag-design-system/blob/main/components/TextInput.tsx`

3. **Textarea** (5 sections)
   - URL: `https://github.com/yourusername/tasktag-design-system/blob/main/components/Textarea.tsx`

4. **Checkbox** (5 sections)
   - URL: `https://github.com/yourusername/tasktag-design-system/blob/main/components/Checkbox.tsx`

5. **Radio** (5 sections)
   - URL: `https://github.com/yourusername/tasktag-design-system/blob/main/components/RadioButton.tsx`

6. **Dropdown** (5 sections)
   - URL: `https://github.com/yourusername/tasktag-design-system/blob/main/components/Dropdown.tsx`

7. **Avatar** (4 sections)
   - URL: `https://github.com/yourusername/tasktag-design-system/blob/main/components/AvatarComponent.tsx`

8. **Tooltip** (4 sections)
   - URL: `https://github.com/yourusername/tasktag-design-system/blob/main/components/Tooltip.tsx`

9. **TabItem** (6 sections)
   - URL: `https://github.com/yourusername/tasktag-design-system/blob/main/components/TabItem.tsx`

10. **Modal** (2 sections)
    - URL: `https://github.com/yourusername/tasktag-design-system/blob/main/components/Modal.tsx`

11. **Datepicker** (4 sections)
    - URL: `https://github.com/yourusername/tasktag-design-system/blob/main/components/Datepicker.tsx`

12. **Toast** (5 sections)
    - URL: `https://github.com/yourusername/tasktag-design-system/blob/main/components/Toast.tsx`

13. **Calendar**
    - URL: `https://github.com/yourusername/tasktag-design-system/blob/main/components/Calendar.tsx`

14. **DateRangeCalendar**
    - URL: `https://github.com/yourusername/tasktag-design-system/blob/main/components/DateRangeCalendar.tsx`

15. **DiscardChangesModal**
    - URL: `https://github.com/yourusername/tasktag-design-system/blob/main/components/DiscardChangesModal.tsx`

16. **PriorityDropdown**
    - URL: `https://github.com/yourusername/tasktag-design-system/blob/main/components/PriorityDropdown.tsx`

17. **TaskSectionHeader**
    - URL: `https://github.com/yourusername/tasktag-design-system/blob/main/components/TaskSectionHeader.tsx`

18. **ProjectSelectModal**
    - URL: `https://github.com/yourusername/tasktag-design-system/blob/main/components/ProjectSelectModal.tsx`

19. **AssigneeModal**
    - URL: `https://github.com/yourusername/tasktag-design-system/blob/main/pages/my-task/AssigneeModal.tsx`

20. **TaskItem**
    - URL: `https://github.com/yourusername/tasktag-design-system/blob/main/pages/my-task/TaskItem.tsx`

21. **TaskSection**
    - URL: `https://github.com/yourusername/tasktag-design-system/blob/main/components/TaskSection.tsx`

22. **AssignedMembersButton**
    - URL: `https://github.com/yourusername/tasktag-design-system/blob/main/components/AssignedMembersButton.tsx`

23. **MemberRow**
    - URL: `https://github.com/yourusername/tasktag-design-system/blob/main/components/MemberRow.tsx`

24. **ChecklistItem**
    - URL: `https://github.com/yourusername/tasktag-design-system/blob/main/components/ChecklistItem.tsx`

25. **Toggle**
    - URL: `https://github.com/yourusername/tasktag-design-system/blob/main/components/Toggle.tsx`

## Total Updates Needed
- ~50 TabsContainer tabs arrays to update
- ~50 new TabPanel components to add
