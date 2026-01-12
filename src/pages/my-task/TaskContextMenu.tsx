import { useEffect, useRef } from "react";
import { CircleCheckBig, UserPlus, Copy, ArrowUp, ArrowDown, Trash2, CircleX } from "lucide-react";

interface TaskContextMenuProps {
  x: number;
  y: number;
  onClose: () => void;
  onMarkComplete?: () => void;
  onMarkUncomplete?: () => void;
  onAssignee: () => void;
  onDuplicate: () => void;
  onMoveUp: () => void;
  onMoveDown: () => void;
  onDelete: () => void;
  canMoveUp: boolean;
  canMoveDown: boolean;
  showMarkComplete: boolean;
  showMarkUncomplete: boolean;
  selectedCount: number;
}

export function TaskContextMenu({
  x,
  y,
  onClose,
  onMarkComplete,
  onMarkUncomplete,
  onAssignee,
  onDuplicate,
  onMoveUp,
  onMoveDown,
  onDelete,
  canMoveUp,
  canMoveDown,
  showMarkComplete,
  showMarkUncomplete,
  selectedCount,
}: TaskContextMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  // Adjust position if menu would go off screen
  useEffect(() => {
    if (menuRef.current) {
      const rect = menuRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      let adjustedX = x;
      let adjustedY = y;

      if (rect.right > viewportWidth) {
        adjustedX = viewportWidth - rect.width - 8;
      }

      if (rect.bottom > viewportHeight) {
        adjustedY = viewportHeight - rect.height - 8;
      }

      menuRef.current.style.left = `${adjustedX}px`;
      menuRef.current.style.top = `${adjustedY}px`;
    }
  }, [x, y]);

  const handleAction = (action: () => void, e: React.MouseEvent) => {
    e.stopPropagation();
    action();
    onClose();
  };

  const handleDuplicateAction = (e: React.MouseEvent) => {
    if (selectedCount > 1) return; // Don't do anything if multiple items selected
    e.stopPropagation();
    onDuplicate();
    // Don't close the menu here - let the modal handle it
  };

  return (
    <div
      ref={menuRef}
      role="menu"
      className="fixed z-[9999] bg-white rounded-[8px] overflow-hidden context-menu"
      style={{
        left: `${x}px`,
        top: `${y}px`,
        minWidth: '200px',
        boxShadow: 'var(--elevation-md)',
        border: '1px solid var(--border)'
      }}
    >
      <div className="py-[8px]">
        {showMarkComplete && (
          <button
            onClick={(e) => handleAction(onMarkComplete!, e)}
            className="w-full flex items-center gap-4 px-4 py-3 transition-colors cursor-pointer"
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--grey-01)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <CircleCheckBig className="size-4 shrink-0 text-[var(--secondary-green)]" strokeWidth={2} />
            <span className="text-[14px] text-[var(--secondary-green)]" style={{ fontWeight: 'var(--font-weight-regular)' }}>
              Mark as Complete
            </span>
          </button>
        )}

        {showMarkUncomplete && (
          <button
            onClick={(e) => handleAction(onMarkUncomplete!, e)}
            className="w-full flex items-center gap-4 px-4 py-3 transition-colors cursor-pointer"
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--grey-01)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <CircleX className="size-4 shrink-0 text-[var(--text-secondary)]" strokeWidth={2} />
            <span className="text-[14px] text-[var(--text-primary)]" style={{ fontWeight: 'var(--font-weight-regular)' }}>
              Mark as Incomplete
            </span>
          </button>
        )}

        <button
          onClick={(e) => handleAction(onAssignee, e)}
          className="w-full flex items-center gap-4 px-4 py-3 transition-colors cursor-pointer"
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--grey-01)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          <UserPlus className="size-4 shrink-0 text-[var(--text-secondary)]" strokeWidth={2} />
          <span className="text-[14px] text-[var(--text-primary)]" style={{ fontWeight: 'var(--font-weight-regular)' }}>
            Assignee
          </span>
        </button>

        <button
          onClick={handleDuplicateAction}
          disabled={selectedCount > 1}
          className={`w-full flex items-center gap-4 px-4 py-3 transition-colors ${
            selectedCount === 1 ? 'cursor-pointer' : 'cursor-not-allowed'
          }`}
          onMouseEnter={(e) => {
            if (selectedCount === 1) {
              e.currentTarget.style.backgroundColor = 'var(--grey-01)';
            }
          }}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          <Copy className={`size-4 shrink-0 ${selectedCount === 1 ? 'text-[var(--text-secondary)]' : 'text-[var(--grey-05)]'}`} strokeWidth={2} />
          <span
            className="text-[14px]"
            style={{ 
              fontWeight: 'var(--font-weight-regular)',
              color: selectedCount === 1 ? 'var(--text-primary)' : 'var(--grey-05)'
            }}
          >
            Duplicate Task{selectedCount > 1 ? 's' : ''}
          </span>
        </button>

        <div className="h-0 relative w-full my-1">
          <div className="absolute bottom-0 left-0 right-0">
            <div className="h-px bg-[var(--grey-03)]" />
          </div>
        </div>

        <button
          onClick={(e) => canMoveUp && handleAction(onMoveUp, e)}
          disabled={!canMoveUp}
          className={`w-full flex items-center gap-4 px-4 py-3 transition-colors ${
            canMoveUp ? 'cursor-pointer' : 'cursor-not-allowed'
          }`}
          onMouseEnter={(e) => {
            if (canMoveUp) {
              e.currentTarget.style.backgroundColor = 'var(--grey-01)';
            }
          }}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          <ArrowUp className={`size-4 shrink-0 ${canMoveUp ? 'text-[var(--text-secondary)]' : 'text-[var(--grey-05)]'}`} strokeWidth={2} />
          <span
            className="text-[14px]"
            style={{ 
              fontWeight: 'var(--font-weight-regular)',
              color: canMoveUp ? 'var(--text-primary)' : 'var(--grey-05)'
            }}
          >
            Move Up
          </span>
        </button>

        <button
          onClick={(e) => canMoveDown && handleAction(onMoveDown, e)}
          disabled={!canMoveDown}
          className={`w-full flex items-center gap-4 px-4 py-3 transition-colors ${
            canMoveDown ? 'cursor-pointer' : 'cursor-not-allowed'
          }`}
          onMouseEnter={(e) => {
            if (canMoveDown) {
              e.currentTarget.style.backgroundColor = 'var(--grey-01)';
            }
          }}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          <ArrowDown className={`size-4 shrink-0 ${canMoveDown ? 'text-[var(--text-secondary)]' : 'text-[var(--grey-05)]'}`} strokeWidth={2} />
          <span
            className="text-[14px]"
            style={{ 
              fontWeight: 'var(--font-weight-regular)',
              color: canMoveDown ? 'var(--text-primary)' : 'var(--grey-05)'
            }}
          >
            Move Down
          </span>
        </button>

        <div className="h-0 relative w-full my-1">
          <div className="absolute bottom-0 left-0 right-0">
            <div className="h-px bg-[var(--grey-03)]" />
          </div>
        </div>

        <button
          onClick={(e) => handleAction(onDelete, e)}
          className="w-full flex items-center gap-4 px-4 py-3 transition-colors cursor-pointer"
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--grey-01)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          <Trash2 className="size-4 shrink-0 text-[var(--alert-red)]" strokeWidth={2} />
          <span className="text-[14px] text-[var(--alert-red)]" style={{ fontWeight: 'var(--font-weight-regular)' }}>
            Delete Task{selectedCount > 1 ? 's' : ''}
          </span>
        </button>
      </div>
    </div>
  );
}