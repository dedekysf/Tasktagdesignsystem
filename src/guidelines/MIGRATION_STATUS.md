# Component Guidelines Migration

## Status: In Progress

### Completed
- ✅ `/guidelines/README.md` created with updated paths
- ✅ `/guidelines/Button.guideline.md` moved

### Remaining Files to Move

Copy these files from `/components/` to `/guidelines/`:

1. **TextInput.guideline.md**
2. **Checkbox.guideline.md**
3. **Modal.guideline.md**
4. **Tooltip.guideline.md**
5. **DateRangeCalendar.guideline.md**
6. **Dropdown.guideline.md**

### After Migration

Delete these files from `/components/`:
- Button.guideline.md
- TextInput.guideline.md
- Checkbox.guideline.md
- Modal.guideline.md
- Tooltip.guideline.md
- DateRangeCalendar.guideline.md
- Dropdown.guideline.md
- README.guidelines.md

## Instructions

To complete the migration:

```bash
# Copy remaining guideline files
cp /components/TextInput.guideline.md /guidelines/
cp /components/Checkbox.guideline.md /guidelines/
cp /components/Modal.guideline.md /guidelines/
cp /components/Tooltip.guideline.md /guidelines/
cp /components/DateRangeCalendar.guideline.md /guidelines/
cp /components/Dropdown.guideline.md /guidelines/

# Delete old files from components
rm /components/*.guideline.md
rm /components/README.guidelines.md
```

## New Structure

```
/guidelines/
├── README.md
├── Button.guideline.md
├── TextInput.guideline.md
├── Checkbox.guideline.md
├── Modal.guideline.md
├── Tooltip.guideline.md
├── DateRangeCalendar.guideline.md
└── Dropdown.guideline.md
```

All component implementations remain in `/components/` directory.
Only guideline documentation files are moved to `/guidelines/`.
