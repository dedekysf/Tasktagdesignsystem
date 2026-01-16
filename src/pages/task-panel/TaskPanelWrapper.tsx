import { useState, useRef, useEffect } from 'react';
import { X, Calendar, Check, ChevronsUp, ChevronDown, Folder, Link, EllipsisVertical, UserPlus, Image as ImageIcon, ChevronsDown } from 'lucide-react';
import { Button } from '../../components/Button';
import { Activity } from './Activity';
import { InteractiveChecklist } from './InteractiveChecklist';
import { Members } from './Members';
import { FilesAndMedia } from './FilesAndMedia';
import { CompleteTaskModal } from './CompleteTaskModal';
import { PriorityDropdown } from '../../components/PriorityDropdown';
import { AssigneeModal } from '../my-task/AssigneeModal';
import { createPortal } from 'react-dom';
import { Avatar } from '../../components/AvatarComponent';
import { Textarea } from '../../components/Textarea';
import { DateRangeCalendar } from '../../components/DateRangeCalendar';
import { DeleteFilesModal } from './DeleteFilesModal';
import { CopyLinkTooltip } from './CopyLinkTooltip';
import { SuccessTooltip } from '../../components/SuccessTooltip';
import { AvatarGroupWithTooltip } from '../../components/AvatarGroupWithTooltip';
import { MainTooltip } from './MainTooltip';
import { AssignedMembersButton } from '../../components/AssignedMembersButton';
import { ALL_USERS, TASK_PANEL_OWNER, getUserByEmail, getColorFromEmail, getInitials } from '../../data/userData';

function ProjectButton() {
  const projectName = "Electrical Board Service Project";
  const truncatedName = projectName.length > 25 ? projectName.substring(0, 25) + '...' : projectName;
  
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="button">
      <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip relative rounded-[8px] shrink-0 cursor-pointer transition-colors" data-name="_Button Base">
        <div className="relative shrink-0 size-[16px]" data-name="wrapper">
          <Folder className="w-4 h-4" style={{ color: '#7B61FF' }} />
        </div>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#303742] text-[12px] text-nowrap tracking-[0.24px] whitespace-pre hover:underline">{truncatedName}</p>
      </div>
    </div>
  );
}

function CopyLinkButton() {
  const [showCopied, setShowCopied] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  const handleCopyLink = () => {
    setShowCopied(true);
    // Auto hide after 2 seconds
    setTimeout(() => {
      setShowCopied(false);
    }, 2000);
  };

  return (
    <>
      <MainTooltip
        variant="bottom-right"
        content={showCopied ? <SuccessTooltip message="Link copied!" /> : "Copy link to invite"}
        size="sm"
        style={showCopied ? "custom" : "default"}
        forceShow={showCopied}
      >
        <div 
          ref={buttonRef}
          onClick={handleCopyLink}
          className="content-stretch flex items-start relative shrink-0 size-[32px] cursor-pointer hover:bg-[#f7f8fa] transition-colors" 
          data-name="_Button Base"
        >
          <div className="flex items-center justify-center size-full">
            <Link className="w-4 h-4" style={{ color: 'var(--text-primary)' }} />
          </div>
        </div>
      </MainTooltip>
    </>
  );
}

function MoreOptionsButton() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[32px] cursor-pointer hover:bg-[#f7f8fa] transition-colors">
      <div className="flex items-center justify-center size-full">
        <EllipsisVertical className="w-5 h-5" style={{ color: 'var(--text-primary)' }} />
      </div>
    </div>
  );
}

function CloseButton() {
  return (
    <div className="basis-0 grow h-[32px] min-h-px min-w-px relative shrink-0" data-name="_Button Base">
      <div className="flex flex-row items-center justify-center overflow-clip size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[16px] py-[8px] relative w-full hover:bg-[#f7f8fa] transition-colors cursor-pointer">
          <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="wrapper">
            <X className="w-6 h-6" style={{ color: 'var(--text-primary)' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function HeaderRightActions() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center justify-end min-h-px min-w-px relative shrink-0">
      <div className="content-stretch flex items-start relative shrink-0 size-[32px]" data-name="button">
        <CopyLinkButton />
      </div>
      <MoreOptionsButton />
      <div className="content-stretch flex items-start relative shrink-0 size-[32px]" data-name="button">
        <CloseButton />
      </div>
    </div>
  );
}

function LActions() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="l-actions">
      <ProjectButton />
      <HeaderRightActions />
    </div>
  );
}

function TaskPanelHeader() {
  return (
    <div className="box-border content-stretch flex items-center justify-between px-[24px] py-[16px] relative shrink-0 w-full" data-name="Task Panel/Header">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <LActions />
    </div>
  );
}

function Frame9() {
  const [text, setText] = useState("Inspect and Reconfigure All Components within the Electrical Board for Optimal Functionality");
  const [isEditing, setIsEditing] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [savedText, setSavedText] = useState(text);

  useEffect(() => {
    if (isEditing && textareaRef.current) {
      const textarea = textareaRef.current;
      
      // Focus the textarea
      textarea.focus();
      
      // Use setTimeout to ensure the cursor moves to end after focus
      setTimeout(() => {
        const length = textarea.value.length;
        textarea.setSelectionRange(length, length);
      }, 10);
    }
  }, [isEditing]);

  const handleSave = () => {
    setSavedText(text);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setText(savedText);
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSave();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      handleCancel();
    }
  };

  const handleBlur = () => {
    handleCancel();
  };

  const handleClick = () => {
    setSavedText(text);
    setIsEditing(true);
  };

  if (!isEditing) {
    return (
      <div 
        className="relative shrink-0 w-full cursor-text px-[12px] py-[8px] rounded-[8px] hover:bg-[var(--grey-01)] transition-colors"
        onClick={handleClick}
      >
        <p style={{
          fontSize: '18px',
          fontWeight: 'var(--font-weight-medium)',
          lineHeight: '24px',
          color: 'var(--text-primary)',
          fontFamily: 'var(--font-family-base)',
        }}>
          {text}
        </p>
      </div>
    );
  }

  return (
    <div className="relative shrink-0 w-full">
      <Textarea
        ref={textareaRef}
        size="md"
        value={text}
        onChange={setText}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        placeholder="Enter task name"
        maxLength={255}
        className="w-full"
        style={{
          fontSize: '18px',
          fontWeight: 'var(--font-weight-medium)',
          lineHeight: '24px'
        }}
      />
    </div>
  );
}

function Title() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-center px-[24px] py-[16px] relative shrink-0 w-full" data-name="Title">
      <Frame9 />
    </div>
  );
}

function ProjectAndTask() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[580px]" data-name="Project and Task">
      <Title />
    </div>
  );
}

function IconStart4() {
  return (
    <Check className="w-4 h-4" style={{ color: '#18A87D' }} />
  );
}

// Due Date Button from MyTask - reused
function DateButton({ startDate, endDate, onDateChange }: { startDate: Date | null; endDate: Date | null; onDateChange: (start: Date | null, end: Date | null) => void }) {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [datePickerPosition, setDatePickerPosition] = useState<{ top: number; left: number } | null>(null);
  const dateButtonRef = useRef<HTMLButtonElement>(null);

  // Format date range for display
  const formatDateRange = (start: Date | null, end: Date | null) => {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const currentYear = new Date().getFullYear();
    
    if (start && !end) {
      const startMonth = monthNames[start.getMonth()];
      const startDay = start.getDate();
      const startYear = start.getFullYear();
      if (startYear === currentYear) {
        return `Start ${startMonth} ${startDay}`;
      }
      return `Start ${startMonth} ${startDay}, ${startYear}`;
    }
    
    if (!start && end) {
      const endMonth = monthNames[end.getMonth()];
      const endDay = end.getDate();
      const endYear = end.getFullYear();
      if (endYear === currentYear) {
        return `Due ${endMonth} ${endDay}`;
      }
      return `Due ${endMonth} ${endDay}, ${endYear}`;
    }
    
    if (start && end) {
      const startMonth = monthNames[start.getMonth()];
      const startDay = start.getDate();
      const startYear = start.getFullYear();
      const endMonth = monthNames[end.getMonth()];
      const endDay = end.getDate();
      const endYear = end.getFullYear();
      
      if (startYear === currentYear && endYear === currentYear) {
        if (start.getMonth() === end.getMonth()) {
          return `${startMonth} ${startDay} – ${endDay}`;
        }
        return `${startMonth} ${startDay} – ${endMonth} ${endDay}`;
      }
      
      if (startYear === currentYear && endYear !== currentYear) {
        return `${startMonth} ${startDay} – ${endMonth} ${endDay}, ${endYear}`;
      }
      
      if (startYear !== currentYear && endYear === currentYear) {
        return `${startMonth} ${startDay}, ${startYear} – ${endMonth} ${endDay}`;
      }
      
      if (startYear === endYear) {
        if (start.getMonth() === end.getMonth()) {
          return `${startMonth} ${startDay} – ${endDay}, ${startYear}`;
        }
        return `${startMonth} ${startDay} – ${endMonth} ${endDay}, ${startYear}`;
      }
      
      return `${startMonth} ${startDay}, ${startYear} – ${endMonth} ${endDay}, ${endYear}`;
    }
    
    return "Select date";
  };

  return (
    <>
      <div className="relative shrink-0">
        <button
          ref={dateButtonRef}
          className="bg-white hover:bg-[var(--grey-01)] transition-colors flex items-center gap-2"
          style={{
            height: "var(--size-sm)",
            minHeight: "var(--size-sm)",
            maxHeight: "var(--size-sm)",
            padding: "0 var(--spacing-12)",
            borderRadius: "var(--radius-full)",
            border: "1px solid var(--grey-03)",
            cursor: "pointer",
          }}
          onMouseDown={(e) => {
            e.stopPropagation();
            e.preventDefault();
          }}
          onClick={(e) => {
            e.stopPropagation();
            const rect = dateButtonRef.current?.getBoundingClientRect();
            if (rect) {
              // Use same dimensions as main component
              const calendarWidth = 360;
              const calendarHeight = 600;
              const padding = 8;

              let left = rect.right - calendarWidth;
              if (left < padding) {
                left = rect.left;
              }

              const spaceBelow = window.innerHeight - rect.bottom;
              const spaceAbove = rect.top;

              let top;
              if (spaceBelow >= calendarHeight + padding) {
                top = rect.bottom + 4;
              } else if (spaceAbove >= calendarHeight + padding) {
                top = rect.top - calendarHeight - 4;
              } else {
                if (spaceBelow > spaceAbove) {
                  top = rect.bottom + 4;
                } else {
                  top = rect.top - calendarHeight - 4;
                }
              }

              if (top < padding) {
                top = padding;
              }
              if (top + calendarHeight > window.innerHeight - padding) {
                top = window.innerHeight - calendarHeight - padding;
              }
              if (left + calendarWidth > window.innerWidth - padding) {
                left = window.innerWidth - calendarWidth - padding;
              }

              setDatePickerPosition({ top, left });
            }
            setShowDatePicker(!showDatePicker);
          }}
        >
          <Calendar
            className="size-3 text-[var(--text-secondary)]"
            strokeWidth={2}
          />
          <span
            className="text-[12px] text-[var(--text-primary)] whitespace-nowrap"
            style={{
              fontWeight: "var(--font-weight-regular)",
            }}
          >
            {formatDateRange(startDate, endDate)}
          </span>
        </button>
      </div>

      {/* Date Picker Portal */}
      {showDatePicker && datePickerPosition && createPortal(
        <>
          <div
            className="fixed inset-0 z-[9998]"
            onClick={(e) => {
              e.stopPropagation();
              setShowDatePicker(false);
            }}
          />
          <div
            className="fixed z-[9999]"
            style={{
              top: `${datePickerPosition.top}px`,
              left: `${datePickerPosition.left}px`,
            }}
          >
            <DateRangeCalendar
              startDate={startDate}
              endDate={endDate}
              onDatesChange={(start, end) => {
                onDateChange(start, end);
                setShowDatePicker(false);
              }}
              onClose={() => setShowDatePicker(false)}
            />
          </div>
        </>,
        document.body
      )}
    </>
  );
}

// Assignee Button - 3 states: no assignee, 1 assignee, 2+ assignees (same as My Task)
function AssigneeButton({ 
  assignedMembers, 
  onClick 
}: { 
  assignedMembers: Array<{
    id: string;
    name: string;
    email: string;
    avatar?: string;
    initials: string;
    color: string;
    role: string;
    isEmailInvite?: boolean;
  }>; 
  onClick: () => void 
}) {
  // No assignees - show "Assignee" button
  if (assignedMembers.length === 0) {
    return (
      <button 
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
        onMouseDown={(e) => {
          e.stopPropagation();
        }}
        className="bg-white relative rounded-[40px] shrink-0 hover:bg-secondary transition-colors"
        style={{
          width: '120px',
          height: 'var(--size-sm)'
        }}
      >
        <div className="flex flex-row items-center justify-center max-w-inherit min-w-inherit size-full">
          <div className="box-border content-stretch flex gap-[4px] items-center justify-center max-w-inherit min-w-inherit overflow-clip px-[16px] py-[8px] relative size-full">
            <UserPlus className="size-3 shrink-0 text-[var(--text-secondary)]" strokeWidth={2} />
            <p className="text-[12px] text-[var(--text-secondary)] text-nowrap whitespace-pre truncate" style={{ fontWeight: 'var(--font-weight-regular)' }}>
              Assignee
            </p>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[40px]" />
      </button>
    );
  }

  // 1 assignee - show single avatar with name with tooltip
  if (assignedMembers.length === 1) {
    const member = assignedMembers[0];
    
    // Use AssignedMembersButton from main components
    return (
      <div
        onMouseDown={(e) => {
          e.stopPropagation();
        }}
      >
        <AssignedMembersButton
          members={[member]}
          onClick={() => onClick()}
        />
      </div>
    );
  }

  // 2+ assignees - show AvatarGroupWithTooltip (NOT in button, just clickable div)
  const avatarData = assignedMembers.map((member) => {
    return {
      variant: 'initials' as const,
      initials: member.initials,
      imageUrl: member.avatar,
      backgroundColor: member.color,
      iconColor: 'var(--text-secondary)',
      isEmailInvite: member.isEmailInvite,
      tooltipContent: (
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-8)' }}>
          <Avatar
            size="xs"
            variant={member.isEmailInvite ? 'icon' : 'initials'}
            initials={member.initials}
            imageUrl={member.avatar}
            backgroundColor={member.isEmailInvite ? 'var(--grey-02)' : member.color}
            iconColor={member.isEmailInvite ? 'var(--grey-05)' : 'var(--text-secondary)'}
          />
          <span style={{ fontWeight: 'var(--font-weight-regular)', color: 'var(--white)' }}>{member.name}</span>
        </div>
      )
    };
  });

  // Remaining assignees tooltip content for +N
  const remainingTooltipContent = assignedMembers.length > 2 ? (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)' }}>
      {assignedMembers.slice(2).map((member, idx) => {
        return (
          <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-8)' }}>
            <Avatar
              size="xs"
              variant={member.isEmailInvite ? 'icon' : 'initials'}
              initials={member.initials}
              imageUrl={member.avatar}
              backgroundColor={member.isEmailInvite ? 'var(--grey-02)' : member.color}
              iconColor={member.isEmailInvite ? 'var(--grey-05)' : 'var(--text-secondary)'}
            />
            <span style={{ fontWeight: 'var(--font-weight-regular)', color: 'var(--white)' }}>{member.name}</span>
          </div>
        );
      })}
    </div>
  ) : undefined;

  return (
    <div 
      className="shrink-0 cursor-pointer flex items-center justify-start"
      style={{
        width: '120px',
        height: 'var(--size-sm)'
      }}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      onMouseDown={(e) => {
        e.stopPropagation();
      }}
    >
      <AvatarGroupWithTooltip
        avatars={avatarData}
        size="sm"
        max={2}
        remainingTooltipContent={remainingTooltipContent}
      />
    </div>
  );
}

// Mark Complete Button - Outline primary dengan icon left dan label "Mark Complete"
function MarkCompleteButton({ isCompleted, onClick }: { isCompleted: boolean; onClick: () => void }) {
  if (isCompleted) {
    // When completed, show filled primary button with "Completed" text
    return (
      <Button
        variant="fill"
        size="sm"
        className="btn-primary"
        onClick={onClick}
        style={{
          height: 'var(--size-sm)',
          minHeight: 'var(--size-sm)',
          maxHeight: 'var(--size-sm)',
          padding: '0 var(--spacing-12)',
          borderRadius: 'var(--radius-full)',
          minWidth: '120px'
        }}
      >
        <Check className="w-3 h-3" style={{ color: 'white' }} />
        <span style={{ 
          color: 'white',
          fontSize: '12px',
          fontWeight: 'var(--font-weight-regular)'
        }}>Completed</span>
      </Button>
    );
  }
  
  // When not completed, show outline primary button with "Mark Complete" text
  return (
    <Button
      variant="outline"
      size="sm"
      className="btn-primary"
      onClick={onClick}
      style={{
        height: 'var(--size-sm)',
        minHeight: 'var(--size-sm)',
        maxHeight: 'var(--size-sm)',
        padding: '0 var(--spacing-12)',
        borderRadius: 'var(--radius-full)',
        borderColor: 'var(--primary)',
        minWidth: '120px'
      }}
    >
      <Check className="w-3 h-3" />
      <span style={{
        fontSize: '12px',
        fontWeight: 'var(--font-weight-regular)'
      }}>Mark Complete</span>
    </Button>
  );
}

function Actions({ isCompleted, onMarkComplete, priority, onPriorityChange, startDate, endDate, onDateChange, onAssigneeClick, assignedMembers }: { 
  isCompleted: boolean; 
  onMarkComplete: () => void; 
  priority: 'high' | 'medium' | 'low'; 
  onPriorityChange: (priority: 'high' | 'medium' | 'low') => void;
  startDate: Date | null;
  endDate: Date | null;
  onDateChange: (start: Date | null, end: Date | null) => void;
  onAssigneeClick: () => void;
  assignedMembers: Array<{
    id: string;
    name: string;
    email: string;
    avatar?: string;
    initials: string;
    color: string;
    role: string;
    isEmailInvite?: boolean;
  }>;
}) {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-start px-[24px] py-0 relative shrink-0 w-full" data-name="Actions">
      <MarkCompleteButton isCompleted={isCompleted} onClick={onMarkComplete} />
      <PriorityButton priority={priority} onSelect={onPriorityChange} />
      <DateButton startDate={startDate} endDate={endDate} onDateChange={onDateChange} />
      <AssigneeButton 
        assignedMembers={assignedMembers} 
        onClick={onAssigneeClick} 
      />
    </div>
  );
}

// Priority Button - 32x32 square button with icon only, using PriorityDropdown from main component
function PriorityButton({ priority, onSelect }: { priority: 'high' | 'medium' | 'low'; onSelect: (priority: 'high' | 'medium' | 'low') => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const handleSelectPriority = (value: 'high' | 'medium' | 'low') => {
    console.log('Priority selected:', value);
    onSelect(value);
    setIsOpen(false);
  };

  console.log('PriorityButton rendering with priority:', priority);

  return (
    <div ref={wrapperRef} className="relative shrink-0">
      <button
        key={priority}
        ref={buttonRef}
        className="bg-white hover:bg-[var(--grey-01)] transition-colors"
        style={{
          width: 'var(--size-sm)',
          height: 'var(--size-sm)',
          minWidth: 'var(--size-sm)',
          minHeight: 'var(--size-sm)',
          maxWidth: 'var(--size-sm)',
          maxHeight: 'var(--size-sm)',
          padding: '0',
          borderRadius: 'var(--radius-full)',
          border: '1px solid var(--grey-03)',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxSizing: 'border-box',
          overflow: 'hidden',
          lineHeight: '0',
          cursor: 'pointer',
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Inline icon rendering to avoid closure issues */}
        {priority === 'high' && (
          <div className="size-4 flex items-center justify-center" style={{ height: '16px', width: '16px' }}>
            <ChevronsUp
              className="size-4 text-[var(--alert-red)]"
              strokeWidth={2}
            />
          </div>
        )}
        {priority === 'medium' && (
          <div 
            className="size-4 flex items-center justify-center" 
            style={{ 
              height: '16px', 
              width: '16px',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2px'
            }}>
              <div style={{ 
                width: '12px', 
                height: '2px', 
                backgroundColor: 'var(--vivid-yellow)', 
                borderRadius: '9999px' 
              }} />
              <div style={{ 
                width: '12px', 
                height: '2px', 
                backgroundColor: 'var(--vivid-yellow)', 
                borderRadius: '9999px' 
              }} />
            </div>
          </div>
        )}
        {priority === 'low' && (
          <div className="size-4 flex items-center justify-center" style={{ height: '16px', width: '16px' }}>
            <ChevronsDown
              className="size-4 text-[var(--pastel-blue)]"
              strokeWidth={2}
            />
          </div>
        )}
      </button>
      
      {isOpen && buttonRef.current && createPortal(
        <>
          {/* Backdrop overlay - same as My Task */}
          <div
            className="fixed inset-0 z-[9998]"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
          />
          {/* Dropdown */}
          <div
            className="fixed z-[9999]"
            style={{
              top: `${buttonRef.current.getBoundingClientRect().bottom + 4}px`,
              left: `${buttonRef.current.getBoundingClientRect().left}px`,
            }}
          >
            <PriorityDropdown 
              onSelect={handleSelectPriority}
              onClose={() => setIsOpen(false)}
            />
          </div>
        </>,
        document.body
      )}
    </div>
  );
}

function Description() {
  const [text, setText] = useState("Ensure all components within the electrical board are thoroughly inspected and reconfigured as needed to meet safety and operational standards. Each circuit connection must be clearly labeled to prevent confusion during maintenance or troubleshooting. Replace any damaged breakers or corroded terminals immediately to avoid potential hazards and ensure long-term reliability. Conduct a complete voltage stability test across all circuits to confirm consistent power delivery without irregular fluctuations. Verify grounding integrity and confirm that insulation resistance meets regulatory requirements. Document all adjustments, component replacements, and test results for record-keeping and compliance purposes. Once all verifications are complete, perform a final inspection to ensure every connection, breaker, and wire conforms to approved electrical codes and performance expectations before closing the board for operation.");
  const [isEditing, setIsEditing] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [savedText, setSavedText] = useState(text);

  useEffect(() => {
    if (isEditing && textareaRef.current) {
      const textarea = textareaRef.current;
      
      // Focus the textarea
      textarea.focus();
      
      // Use setTimeout to ensure the cursor moves to end after focus
      setTimeout(() => {
        const length = textarea.value.length;
        textarea.setSelectionRange(length, length);
        
        // Scroll to bottom
        textarea.scrollTop = textarea.scrollHeight;
      }, 10);
    }
  }, [isEditing]);

  const handleSave = () => {
    setSavedText(text);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setText(savedText);
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSave();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      handleCancel();
    }
  };

  const handleBlur = () => {
    handleCancel();
  };

  const handleClick = () => {
    setSavedText(text);
    setIsEditing(true);
  };

  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-start not-italic p-[16px] relative rounded-[8px] shrink-0 w-full" data-name="Description" style={{ backgroundColor: 'var(--grey-01)' }}>
      <p style={{
        fontWeight: 'var(--font-weight-semibold)',
        fontSize: '16px',
        lineHeight: '21px',
        color: 'var(--text-primary)',
        fontFamily: 'var(--font-family-base)',
      }}>Description</p>
      
      {!isEditing ? (
        <div 
          className="w-full cursor-text px-0 py-0 rounded-[8px] hover:bg-white/50 transition-colors"
          onClick={handleClick}
        >
          <p style={{
            fontSize: '12px',
            fontWeight: 'var(--font-weight-regular)',
            lineHeight: '16px',
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-family-base)',
            whiteSpace: 'pre-wrap'
          }}>
            {text}
          </p>
        </div>
      ) : (
        <div className="w-full">
          <Textarea
            ref={textareaRef}
            size="sm"
            value={text}
            onChange={setText}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
            placeholder="Enter description"
            maxLength={1000}
            rows={4}
            className="w-full"
            style={{
              fontSize: '12px',
              fontWeight: 'var(--font-weight-regular)',
              lineHeight: '16px'
            }}
          />
        </div>
      )}
    </div>
  );
}

export default function TaskPanelWrapper() {
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium');
  const [showCompleteModal, setShowCompleteModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFilesCount, setSelectedFilesCount] = useState(0);
  const [showLinkCopied, setShowLinkCopied] = useState(false);
  
  // Use current month for default dates
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  
  // Set start date to 7 days ago
  const defaultStartDate = new Date(currentYear, currentMonth, today.getDate() - 7);
  // Set end date to 7 days from now
  const defaultEndDate = new Date(currentYear, currentMonth, today.getDate() + 7);
  
  const [startDate, setStartDate] = useState<Date | null>(defaultStartDate);
  const [endDate, setEndDate] = useState<Date | null>(defaultEndDate);
  
  // State for copy link button in action bar
  const copyLinkButtonRef = useRef<HTMLButtonElement>(null);
  const [showCopyLinkTooltip, setShowCopyLinkTooltip] = useState(false);
  
  const [assignedMembers, setAssignedMembers] = useState<Array<{
    id: string;
    name: string;
    email: string;
    avatar?: string;
    initials: string;
    color: string;
    role: string;
    isEmailInvite?: boolean;
  }>>([]);
  
  // Initialize members with TASK_PANEL_OWNER (Melissa Monroe)
  const [members, setMembers] = useState<Array<{
    id: string;
    name: string;
    email: string;
    role: 'Owner' | 'Assignee' | 'Viewer';
    avatarUrl?: string;
    initials?: string;
    color?: string;
    isPending?: boolean;
    isFromActiveMembers?: boolean;
  }>>([
    {
      id: TASK_PANEL_OWNER.id,
      name: TASK_PANEL_OWNER.name,
      email: TASK_PANEL_OWNER.email,
      role: 'Owner',
      avatarUrl: TASK_PANEL_OWNER.avatarUrl,
      initials: TASK_PANEL_OWNER.initials,
      color: TASK_PANEL_OWNER.color,
      isFromActiveMembers: false // Owner - no dropdown
    }
  ]);
  const filesAndMediaRef = useRef<{ addFiles: (files: FileList) => void; getSelectedCount: () => number; clearSelection: () => void; deleteSelected: () => void }>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const handleDateChange = (start: Date | null, end: Date | null) => {
    setStartDate(start);
    setEndDate(end);
  };

  const handlePriorityChange = (newPriority: 'high' | 'medium' | 'low') => {
    console.log('handlePriorityChange called with:', newPriority);
    console.log('Current priority before update:', priority);
    setPriority(newPriority);
    console.log('Priority state updated to:', newPriority);
  };

  // Poll for selected files count
  useEffect(() => {
    const interval = setInterval(() => {
      if (filesAndMediaRef.current) {
        setSelectedFilesCount(filesAndMediaRef.current.getSelectedCount());
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const handleClearSelection = () => {
    filesAndMediaRef.current?.clearSelection();
    setSelectedFilesCount(0);
  };

  const handleDeleteSelected = () => {
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    filesAndMediaRef.current?.deleteSelected();
    setSelectedFilesCount(0);
  };

  const handleDownloadSelected = () => {
    // Mock download functionality
    console.log('Download selected files');
  };

  const handleCopyLinkSelected = () => {
    // Show custom tooltip feedback
    setShowCopyLinkTooltip(true);
  };

  useEffect(() => {
    let dragCounter = 0;

    const handleDragEnter = (e: DragEvent) => {
      e.preventDefault();
      
      // Only handle if dragging files from outside
      if (e.dataTransfer?.types.includes('Files')) {
        dragCounter++;
        if (dragCounter === 1) {
          setIsDragging(true);
        }
      }
    };

    const handleDragOver = (e: DragEvent) => {
      e.preventDefault();
    };

    const handleDragLeave = (e: DragEvent) => {
      e.preventDefault();
      dragCounter--;
      if (dragCounter === 0) {
        setIsDragging(false);
      }
    };

    const handleDrop = (e: DragEvent) => {
      e.preventDefault();
      dragCounter = 0;
      setIsDragging(false);

      const droppedFiles = e.dataTransfer?.files;
      if (droppedFiles && droppedFiles.length > 0 && filesAndMediaRef.current) {
        filesAndMediaRef.current.addFiles(droppedFiles);
      }
    };

    // Handle when user cancels drag (releases mouse button without dropping)
    const handleDragEnd = () => {
      dragCounter = 0;
      setIsDragging(false);
    };

    const panel = panelRef.current;
    if (panel) {
      panel.addEventListener('dragenter', handleDragEnter);
      panel.addEventListener('dragover', handleDragOver);
      panel.addEventListener('dragleave', handleDragLeave);
      panel.addEventListener('drop', handleDrop);
    }

    // Listen for drag cancellation at document level
    document.addEventListener('dragend', handleDragEnd);

    return () => {
      if (panel) {
        panel.removeEventListener('dragenter', handleDragEnter);
        panel.removeEventListener('dragover', handleDragOver);
        panel.removeEventListener('dragleave', handleDragLeave);
        panel.removeEventListener('drop', handleDrop);
      }
      document.removeEventListener('dragend', handleDragEnd);
    };
  }, []);

  const handleAttachFiles = () => {
    setIsDragging(false);
    // Trigger file input from FilesAndMedia component
    const fileInput = document.querySelector('input[type=\"file\"]') as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  };

  const handleMarkComplete = () => {
    if (isCompleted) {
      // If already completed, toggle back to incomplete
      setIsCompleted(false);
    } else {
      // Show modal to confirm complete
      setShowCompleteModal(true);
    }
  };

  const handleConfirmComplete = () => {
    setIsCompleted(true);
  };

  const addMembers = (newMembers: Array<{
    id: string;
    name: string;
    email: string;
    role: 'Owner' | 'Assignee' | 'Viewer';
    avatarUrl?: string;
    isPending?: boolean;
    isFromActiveMembers?: boolean;
  }>) => {
    // Avoid duplicates in members list
    const filtered = newMembers.filter(nm => !members.some(m => m.id === nm.id));
    setMembers(prev => [...prev, ...filtered]);
    
    // Also add to assigned members with proper format
    const assignedFormat = filtered.map(m => ({
      id: m.id,
      name: m.name,
      email: m.email,
      avatar: m.avatarUrl,
      // Email invites (isPending) should NOT have initials or color
      initials: m.isPending ? '' : m.name.split(' ').map(n => n[0]).join('').toUpperCase(),
      color: m.isPending ? '' : (m.avatarUrl ? '' : ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8'][Math.floor(Math.random() * 5)]),
      role: m.role,
      isEmailInvite: m.isPending
    }));
    
    // Avoid duplicates in assigned members
    setAssignedMembers(prev => {
      const newAssigned = assignedFormat.filter(am => !prev.some(m => m.id === am.id));
      return [...prev, ...newAssigned];
    });
  };

  const updateMemberRole = (id: string, newRole: 'Owner' | 'Assignee' | 'Viewer') => {
    // Update in members list
    setMembers(prev => prev.map(m => m.id === id ? { ...m, role: newRole } : m));
    
    // Also update in assigned members
    setAssignedMembers(prev => prev.map(m => m.id === id ? { ...m, role: newRole } : m));
  };

  const deleteMember = (id: string) => {
    setMembers(prev => prev.filter(m => m.id !== id));
    // Also remove from assigned members if present
    setAssignedMembers(prev => prev.filter(m => m.id !== id));
  };

  const handleAssignFromModal = (assignees: Array<{ id: string; name: string; email: string; role?: "assignee" | "viewer"; isEmailInvite?: boolean; avatarUrl?: string; }>) => {
    // Convert from AssigneeModal format to Task Panel format
    const newAssignedMembers = assignees.map(assignee => {
      // Try to get user from master data first
      const userData = getUserByEmail(assignee.email);
      
      // Use consistent color from master data or generate from email
      const color = assignee.isEmailInvite ? '' : (userData?.color || getColorFromEmail(assignee.email));
      const initials = assignee.isEmailInvite ? '' : (userData?.initials || getInitials(assignee.name));
      
      return {
        id: assignee.id,
        name: assignee.name,
        email: assignee.email,
        avatar: userData?.avatarUrl || assignee.avatarUrl,
        initials: initials,
        color: color,
        role: assignee.role === 'viewer' ? 'Viewer' : 'Assignee',
        isEmailInvite: assignee.isEmailInvite
      };
    });

    // Replace assigned members with new data from modal (modal already handles existing + new)
    setAssignedMembers(newAssignedMembers);

    // Sync members list with assigned members
    // Keep OWNER + assignees from modal
    setMembers(prev => {
      // Keep owner
      const owner = prev.find(m => m.role === 'Owner');
      
      // Convert assignees to members format
      const newMembers = assignees.map(assignee => {
        const userData = getUserByEmail(assignee.email);
        const color = assignee.isEmailInvite ? '' : (userData?.color || getColorFromEmail(assignee.email));
        const initials = assignee.isEmailInvite ? '' : (userData?.initials || getInitials(assignee.name));
        
        return {
          id: assignee.id,
          name: assignee.name,
          email: assignee.email,
          role: (assignee.role === 'viewer' ? 'Viewer' : 'Assignee') as 'Owner' | 'Assignee' | 'Viewer',
          avatarUrl: userData?.avatarUrl || assignee.avatarUrl,
          isPending: assignee.isEmailInvite === true,
          isFromActiveMembers: !assignee.isEmailInvite,
          initials: initials,
          color: color
        };
      });
      
      // Return owner + new members (this removes deleted members)
      return owner ? [owner, ...newMembers] : newMembers;
    });
  };

  return (
    <div 
      ref={panelRef}
      className="bg-white box-border flex flex-col relative rounded-[8px] shadow-lg overflow-hidden max-h-[90vh] w-[580px]"
    >
      {/* Fixed Header Section */}
      <div className="flex-shrink-0">
        <TaskPanelHeader />
        <ProjectAndTask />
        <div className="pb-[24px]">
          <Actions 
            isCompleted={isCompleted} 
            onMarkComplete={handleMarkComplete} 
            priority={priority} 
            onPriorityChange={handlePriorityChange} 
            startDate={startDate} 
            endDate={endDate} 
            onDateChange={handleDateChange} 
            onAssigneeClick={() => setShowInviteModal(true)} 
            assignedMembers={assignedMembers} 
          />
        </div>
      </div>
      
      {/* Scrollable Content Section */}
      <div 
        className="flex-1 overflow-y-auto px-[24px] pb-[80px] overflow-x-hidden"
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: 'var(--grey-03) transparent'
        }}
      >
        <div className="flex flex-col gap-[24px]">
          <Description />
          
          {/* Interactive Checklist */}
          <InteractiveChecklist />
          
          {/* Files and Media */}
          <FilesAndMedia ref={filesAndMediaRef} />
          
          {/* Members */}
          <Members 
            members={members}
            onUpdateRole={updateMemberRole}
            onDeleteMember={deleteMember}
            onAddMembers={addMembers}
          />
          
          {/* Activity */}
          <Activity />
        </div>
      </div>

      {/* Drag and Drop Overlay - Covers entire panel */}
      {isDragging && (
        <>
          {/* Main Overlay */}
          <div className="absolute inset-0 z-50 flex flex-col items-center justify-center" style={{ backgroundColor: 'rgba(212, 244, 231, 0.25)' }}>
            {/* Attach Files Button */}
            <button
              onClick={handleAttachFiles}
              className="bg-white px-[24px] py-[12px] rounded-[8px] hover:bg-[#f7f8fa] transition-colors shadow-md"
            >
              <div className="flex items-center gap-[8px]">
                <ImageIcon className="w-[20px] h-[20px] text-[#303742]" />
                <span className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[#303742]">
                  Attach Files
                </span>
              </div>
            </button>
          </div>
        </>
      )}

      {/* Action Bar - Fixed at bottom when files are selected */}
      {selectedFilesCount > 0 && (
        <>
          <div className="absolute bottom-0 left-0 right-0 px-[24px] py-[16px] flex items-center justify-between z-40" style={{ backgroundColor: 'var(--grey-07)' }}>
            {/* Left side - Clear selection and count */}
            <div className="flex items-center gap-[16px]">
              <MainTooltip variant="top-right" content="Clear selection" size="sm">
                <button
                  onClick={handleClearSelection}
                  className="w-[32px] h-[32px] flex items-center justify-center hover:bg-white/10 rounded-full transition-colors"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </MainTooltip>
              <span className="font-['Inter:Medium',sans-serif] font-medium text-[16px] text-white">
                {selectedFilesCount} item{selectedFilesCount > 1 ? 's' : ''} selected
              </span>
            </div>

            {/* Right side - Action buttons */}
            <div className="flex items-center gap-[16px]">
              <MainTooltip variant="top-right" content="Delete" size="sm">
                <button
                  onClick={handleDeleteSelected}
                  className="w-[40px] h-[40px] flex items-center justify-center hover:bg-white/10 rounded transition-colors"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M3 6H5H21M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </MainTooltip>
              <MainTooltip variant="top-right" content="Download" size="sm">
                <button
                  onClick={handleDownloadSelected}
                  className="w-[40px] h-[40px] flex items-center justify-center hover:bg-white/10 rounded transition-colors"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21 15V19C21 19.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V16M7 10L12 15M12 15L17 10M12 15V3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </MainTooltip>
              <MainTooltip variant="top-right" content="Copy link" size="sm" forceHide={showCopyLinkTooltip}>
                <button
                  ref={copyLinkButtonRef}
                  onClick={handleCopyLinkSelected}
                  className="w-[40px] h-[40px] flex items-center justify-center hover:bg-white/10 rounded transition-colors"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M10 13C10.4295 13.5741 10.9774 14.0491 11.6066 14.3929C12.2357 14.7367 12.9315 14.9411 13.6467 14.9923C14.3618 15.0435 15.0796 14.9403 15.7513 14.6897C16.4231 14.4392 17.0331 14.047 17.54 13.54L20.54 10.54C21.4508 9.59695 21.9548 8.33394 21.9434 7.02296C21.932 5.71198 21.4061 4.45791 20.4791 3.53087C19.5521 2.60383 18.298 2.07799 16.987 2.0666C15.676 2.0552 14.413 2.55918 13.47 3.46997L11.75 5.17997M14 11C13.5705 10.4258 13.0226 9.95078 12.3934 9.60703C11.7642 9.26327 11.0685 9.05885 10.3533 9.00763C9.63816 8.95641 8.92037 9.0596 8.24861 9.31018C7.57685 9.56077 6.96684 9.9529 6.45996 10.46L3.45996 13.46C2.54917 14.403 2.04519 15.666 2.05659 16.977C2.06798 18.288 2.59382 19.5421 3.52086 20.4691C4.4479 21.3961 5.70197 21.922 7.01295 21.9334C8.32393 21.9448 9.58694 21.4408 10.53 20.53L12.24 18.82" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </MainTooltip>
            </div>
          </div>
          
          {/* Custom copy link tooltip */}
          <CopyLinkTooltip 
            isVisible={showCopyLinkTooltip} 
            buttonRef={copyLinkButtonRef} 
            onHide={() => setShowCopyLinkTooltip(false)} 
            side="top"
            align="end"
          />
        </>
      )}
      
      {/* Complete Task Modal */}
      <CompleteTaskModal 
        isOpen={showCompleteModal}
        onClose={() => setShowCompleteModal(false)}
        onConfirm={handleConfirmComplete}
      />
      
      {/* Delete Files Modal */}
      <DeleteFilesModal 
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={handleConfirmDelete}
        count={selectedFilesCount}
      />
      
      {/* Assignee Modal from Main Component */}
      <AssigneeModal 
        isOpen={showInviteModal}
        onClose={() => setShowInviteModal(false)}
        selectedAssignees={assignedMembers.map(m => ({
          id: m.id, // Add id for duplicate detection
          name: m.name,
          email: m.email,
          isEmailInvite: m.isEmailInvite || false,
          role: m.role === 'Viewer' ? 'viewer' : 'assignee',
          avatarUrl: m.avatar // Include avatarUrl for consistency
        }))}
        onAssign={handleAssignFromModal}
        taskId="task-panel-1"
      />
    </div>
  );
}