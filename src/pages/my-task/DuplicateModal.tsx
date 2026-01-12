import { useState } from "react";
import { Checkbox } from "../../components/Checkbox";
import { Button } from "../../components/Button";
import { X } from "lucide-react";

interface DuplicateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (options: DuplicateOptions) => void;
}

export interface DuplicateOptions {
  taskDetails: boolean;
  checkLists: boolean;
  allMembers: boolean;
  creator: boolean;
  assignee: boolean;
  viewers: boolean;
  allFiles: boolean;
  withTags: boolean;
}

export function DuplicateModal({
  isOpen,
  onClose,
  onConfirm,
}: DuplicateModalProps) {
  // State for each checkbox - all unchecked by default
  const [taskDetails, setTaskDetails] = useState(false);
  const [checkLists, setCheckLists] = useState(false);
  const [allMembers, setAllMembers] = useState(false);
  const [creator, setCreator] = useState(false);
  const [assignee, setAssignee] = useState(false);
  const [viewers, setViewers] = useState(false);
  const [allFiles, setAllFiles] = useState(false);
  const [withTags, setWithTags] = useState(false);

  // Handler for Task Details (parent)
  const handleTaskDetailsChange = (checked: boolean) => {
    setTaskDetails(checked);
    setCheckLists(checked);
  };

  // Handler for Check Lists (child)
  const handleCheckListsChange = (checked: boolean) => {
    setCheckLists(checked);
    if (checked) {
      // If child is checked, check parent too
      setTaskDetails(true);
    } else {
      // If child is unchecked, uncheck parent
      setTaskDetails(false);
    }
  };

  // Handler for All Members (parent)
  const handleAllMembersChange = (checked: boolean) => {
    setAllMembers(checked);
    setCreator(checked);
    setAssignee(checked);
    setViewers(checked);
  };

  // Handler for Creator (child)
  const handleCreatorChange = (checked: boolean) => {
    setCreator(checked);
    if (checked) {
      // Check if all children are now checked
      if (assignee && viewers) {
        setAllMembers(true);
      }
    } else {
      // If any child is unchecked, uncheck parent
      setAllMembers(false);
    }
  };

  // Handler for Assignee (child)
  const handleAssigneeChange = (checked: boolean) => {
    setAssignee(checked);
    if (checked) {
      // Check if all children are now checked
      if (creator && viewers) {
        setAllMembers(true);
      }
    } else {
      // If any child is unchecked, uncheck parent
      setAllMembers(false);
    }
  };

  // Handler for Viewers (child)
  const handleViewersChange = (checked: boolean) => {
    setViewers(checked);
    if (checked) {
      // Check if all children are now checked
      if (creator && assignee) {
        setAllMembers(true);
      }
    } else {
      // If any child is unchecked, uncheck parent
      setAllMembers(false);
    }
  };

  // Handler for All Files (parent)
  const handleAllFilesChange = (checked: boolean) => {
    setAllFiles(checked);
    setWithTags(checked);
  };

  // Handler for With Tags (child)
  const handleWithTagsChange = (checked: boolean) => {
    setWithTags(checked);
    if (checked) {
      // If child is checked, check parent too
      setAllFiles(true);
    } else {
      // If child is unchecked, uncheck parent
      setAllFiles(false);
    }
  };

  const handleConfirm = () => {
    onConfirm({
      taskDetails,
      checkLists,
      allMembers,
      creator,
      assignee,
      viewers,
      allFiles,
      withTags,
    });
  };

  // Check if any option is selected
  const hasSelectedOptions =
    taskDetails ||
    checkLists ||
    allMembers ||
    creator ||
    assignee ||
    viewers ||
    allFiles ||
    withTags;

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-[10000]"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-[10001] pointer-events-none">
        <div
          className="bg-white rounded-[var(--radius-16)] shadow-lg max-w-[520px] w-full mx-4 pointer-events-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border)]">
            <h4
              style={{
                fontSize: "var(--text-h4)",
                fontWeight: "var(--font-weight-semibold)",
                color: "var(--text-primary)",
                margin: 0,
              }}
            >
              Select
            </h4>
            <button
              onClick={onClose}
              className="p-1 rounded hover:bg-secondary transition-colors"
            >
              <X className="size-5 text-[var(--text-secondary)]" />
            </button>
          </div>

          {/* Content */}
          <div className="px-6 py-6 space-y-6">
            {/* Task Details Group */}
            <div className="space-y-3">
              <Checkbox
                variant="circular"
                label="Task Details"
                checked={taskDetails}
                onChange={handleTaskDetailsChange}
              />

              {/* Nested: Check Lists */}
              <div className="pl-8">
                <Checkbox
                  variant="circular"
                  label="Check Lists"
                  checked={checkLists}
                  onChange={handleCheckListsChange}
                />
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-[var(--border)]" />

            {/* All Members Group */}
            <div className="space-y-3">
              <Checkbox
                variant="circular"
                label="All Members"
                checked={allMembers}
                onChange={handleAllMembersChange}
              />

              {/* Nested: Creator */}
              <div className="pl-8">
                <Checkbox
                  variant="circular"
                  label="Creator"
                  checked={creator}
                  onChange={handleCreatorChange}
                />
              </div>

              {/* Nested: Assignee */}
              <div className="pl-8">
                <Checkbox
                  variant="circular"
                  label="Assignee"
                  checked={assignee}
                  onChange={handleAssigneeChange}
                />
              </div>

              {/* Nested: Viewers */}
              <div className="pl-8">
                <Checkbox
                  variant="circular"
                  label="Viewers"
                  checked={viewers}
                  onChange={handleViewersChange}
                />
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-[var(--border)]" />

            {/* All Files Group */}
            <div className="space-y-3">
              <Checkbox
                variant="circular"
                label="All Files"
                checked={allFiles}
                onChange={handleAllFilesChange}
              />

              {/* Nested: With Tags */}
              <div className="pl-8">
                <Checkbox
                  variant="circular"
                  label="With Tags"
                  checked={withTags}
                  onChange={handleWithTagsChange}
                />
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-end px-6 py-4 border-t border-[var(--border)]">
            <Button
              variant="fill"
              size="md"
              className="btn-secondary"
              onClick={handleConfirm}
              disabled={!hasSelectedOptions}
            >
              Confirm
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}