import { useState, useRef, useEffect } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import type { Identifier } from 'dnd-core';
import { Check, GripVertical, X } from 'lucide-react';
import { createPortal } from 'react-dom';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '../../components/ui/alert-dialog';

interface ChecklistItemProps {
  id: string;
  text: string;
  checked: boolean;
  index: number;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  moveItem: (dragIndex: number, hoverIndex: number) => void;
  onUpdate?: (id: string, newText: string) => void;
  onEditingChange?: (isEditing: boolean) => void;
}

interface DragItem {
  index: number;
  id: string;
  type: string;
}

function CheckboxIcon({ checked, isHovered, isAnimating }: { checked: boolean; isHovered: boolean; isAnimating: boolean }) {
  const showCheck = checked || isHovered || isAnimating;
  const strokeColor = checked || isAnimating ? "var(--secondary-green)" : (isHovered ? "var(--grey-04)" : "var(--grey-04)");
  const checkColor = checked || isAnimating ? "white" : "var(--grey-04)";
  const bgColor = checked || isAnimating ? "var(--secondary-green)" : "transparent";
  
  return (
    <div 
      className={`relative shrink-0 size-[20px] transition-transform duration-300 ${
        isAnimating ? 'scale-125' : 'scale-100'
      }`}
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <mask fill="white" id={`path-checkbox-${Math.random()}`}>
          <rect height="20" rx="1" width="20" />
        </mask>
        <rect 
          height="20" 
          mask={`url(#path-checkbox-${Math.random()})`} 
          rx="1" 
          stroke={strokeColor} 
          strokeWidth="4" 
          width="20"
          fill={bgColor}
        />
      </svg>
      {showCheck && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Check className="size-[14px]" color={checkColor} strokeWidth={2.5} />
        </div>
      )}
    </div>
  );
}

export function ChecklistItem({ 
  id, 
  text, 
  checked, 
  index, 
  onToggle, 
  onDelete, 
  moveItem,
  onUpdate,
  onEditingChange
}: ChecklistItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isCheckboxHovered, setIsCheckboxHovered] = useState(false);
  const [dropPosition, setDropPosition] = useState<'top' | 'bottom' | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(text);
  const [showDiscardDialog, setShowDiscardDialog] = useState(false);
  const [originalText, setOriginalText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMultiline, setIsMultiline] = useState(false);
  const [isTextHovered, setIsTextHovered] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const ref = useRef<HTMLDivElement>(null);
  const editContainerRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  
  const isTruncated = text.length > 50;

  const handleCheckboxClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsAnimating(true);
    setTimeout(() => {
      onToggle(id);
      setIsAnimating(false);
    }, 300);
  };

  const handleTextClick = () => {
    if (!checked) {
      setIsEditing(true);
      setEditText(text);
      setOriginalText(text);
      setIsTextHovered(false);
      onEditingChange?.(true);
    }
  };

  const handleSave = () => {
    if (editText.trim() && onUpdate) {
      onUpdate(id, editText.trim());
    }
    setIsEditing(false);
    onEditingChange?.(false);
    setShowDiscardDialog(false);
  };

  const handleCancelEdit = () => {
    if (editText.trim() !== originalText.trim()) {
      setShowDiscardDialog(true);
    } else {
      setEditText(originalText);
      setIsEditing(false);
      onEditingChange?.(false);
      setIsMultiline(false);
    }
  };

  const handleDiscardConfirm = () => {
    setEditText(originalText);
    setIsEditing(false);
    onEditingChange?.(false);
    setShowDiscardDialog(false);
    setIsMultiline(false);
  };

  const handleDiscardCancel = () => {
    setShowDiscardDialog(false);
    setTimeout(() => {
      if (textareaRef.current) {
        const length = textareaRef.current.value.length;
        textareaRef.current.setSelectionRange(length, length);
        textareaRef.current.focus();
      }
    }, 0);
  };

  useEffect(() => {
    if (!isEditing) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (showDiscardDialog) return;
      const target = event.target as Node;
      if (editContainerRef.current && editContainerRef.current.contains(target)) {
        return;
      }
      handleCancelEdit();
    };

    const timeoutId = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isEditing, showDiscardDialog, editText, originalText]);

  useEffect(() => {
    if (isEditing && textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
      setIsMultiline(textareaRef.current.scrollHeight > 56);
      const length = textareaRef.current.value.length;
      textareaRef.current.setSelectionRange(length, length);
      textareaRef.current.focus();
    } else if (!isEditing) {
      setIsMultiline(false);
    }
  }, [isEditing, editText]);

  const [{ handlerId, isOver, canDrop }, drop] = useDrop<
    DragItem,
    void,
    { handlerId: Identifier | null; isOver: boolean; canDrop: boolean }
  >({
    accept: 'checklist-item',
    canDrop: () => !checked,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      };
    },
    hover(item: DragItem, monitor) {
      if (!ref.current) return;
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        setDropPosition(null);
        return;
      }
      setDropPosition('bottom');
    },
    drop(item: DragItem) {
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex !== hoverIndex) {
        moveItem(dragIndex, hoverIndex);
      }
      setDropPosition(null);
    },
  });

  const [{ isDragging }, drag, preview] = useDrag({
    type: 'checklist-item',
    canDrag: !checked,
    item: () => ({ id, index }),
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    end: () => {
      setDropPosition(null);
    },
  });

  preview(drop(ref));

  const showDropIndicator = dropPosition !== null && canDrop && isOver && !isDragging;

  return (
    <div
      ref={ref}
      data-handler-id={handlerId}
      className={`relative rounded-lg shrink-0 w-full transition-all ${
        isDragging ? 'opacity-50' : 'opacity-100'
      }`}
      style={{ backgroundColor: isHovered ? 'var(--grey-01)' : 'var(--white)' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {showDropIndicator && dropPosition === 'bottom' && (
        <div className="absolute left-0 right-0 -bottom-[2px] flex items-center z-20">
          <div className="w-[8px] h-[8px] rounded-full shrink-0" style={{ backgroundColor: 'var(--brand-green)' }} />
          <div className="flex-1 h-[2px]" style={{ backgroundColor: 'var(--brand-green)' }} />
        </div>
      )}

      <div aria-hidden="true" className="absolute border border-solid inset-0 pointer-events-none rounded-lg" style={{ borderColor: 'var(--border)' }} />
      
      <div 
        ref={drag}
        className={`absolute left-[8px] top-1/2 -translate-y-1/2 flex items-center justify-center cursor-grab active:cursor-grabbing transition-opacity z-10 ${
          isHovered && !isEditing && !checked ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <GripVertical className="size-4" style={{ color: 'var(--grey-04)' }} />
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          if (isEditing) {
            handleCancelEdit();
          } else {
            onDelete(id);
          }
        }}
        className={`absolute right-[16px] ${isEditing ? 'top-[16px]' : 'top-1/2 -translate-y-1/2'} flex items-center justify-center transition-opacity z-10 rounded-full cursor-pointer ${
          isHovered || isEditing ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        style={{ backgroundColor: isHovered && !isEditing ? 'var(--grey-02)' : 'transparent' }}
        onMouseEnter={(e) => {
          if (!isEditing) {
            e.currentTarget.style.backgroundColor = 'var(--grey-02)';
          }
        }}
        onMouseLeave={(e) => {
          if (!isEditing) {
            e.currentTarget.style.backgroundColor = 'transparent';
          }
        }}
      >
        <X className="size-6" style={{ color: 'var(--text-primary)' }} />
      </button>

      <div className="flex flex-row items-center size-full" onClick={!isEditing ? handleTextClick : undefined}>
        <div className={`box-border content-stretch flex flex-col pl-[24px] pr-[56px] py-[16px] relative w-full ${isEditing ? 'gap-[8px]' : 'gap-0'}`}>
          {isEditing ? (
            <>
              <div className="w-full relative" ref={editContainerRef}>
                <textarea
                  ref={textareaRef}
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSave();
                    } else if (e.key === 'Escape') {
                      handleCancelEdit();
                    }
                  }}
                  autoFocus
                  maxLength={255}
                  rows={1}
                  className="w-full outline-none bg-white border rounded px-3 py-2 resize-none overflow-hidden"
                  style={{
                    fontSize: 'var(--text-label)',
                    fontWeight: 'var(--font-weight-regular)',
                    color: 'var(--text-primary)',
                    borderColor: 'var(--text-primary)',
                    borderRadius: 'var(--radius-sm)',
                    height: 'auto',
                    minHeight: '40px',
                    letterSpacing: '0.28px'
                  }}
                  onInput={(e) => {
                    const target = e.target as HTMLTextAreaElement;
                    target.style.height = 'auto';
                    target.style.height = target.scrollHeight + 'px';
                    setIsMultiline(target.scrollHeight > 56);
                  }}
                />
                <span className={`absolute pointer-events-none ${
                  isMultiline 
                    ? 'right-[12px] bottom-[12px]' 
                    : 'right-[12px] top-[50%] -translate-y-1/2'
                }`} style={{
                  fontSize: 'var(--text-caption)',
                  color: 'var(--grey-04)'
                }}>
                  {255 - editText.length}
                </span>
              </div>
              
              <p style={{
                fontSize: 'var(--text-caption)',
                color: 'var(--grey-04)',
                lineHeight: '16px'
              }}>
                Press Shift + Enter for new line
              </p>
            </>
          ) : (
            <div className="flex gap-[12px] items-center w-full">
              <div className="content-stretch flex items-center relative shrink-0">
                <button 
                  onClick={handleCheckboxClick}
                  className="content-stretch flex items-start relative shrink-0 cursor-pointer"
                  onMouseEnter={() => setIsCheckboxHovered(true)}
                  onMouseLeave={() => setIsCheckboxHovered(false)}
                >
                  <CheckboxIcon checked={checked} isHovered={isCheckboxHovered} isAnimating={isAnimating} />
                </button>
              </div>
              
              <div 
                ref={textRef}
                className={`basis-0 flex flex-col grow justify-center min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-nowrap ${
                  checked ? 'line-through' : ''
                }`}
                style={{
                  fontSize: 'var(--text-label)',
                  fontWeight: 'var(--font-weight-regular)',
                  color: checked ? 'var(--grey-04)' : 'var(--text-primary)',
                  letterSpacing: '0.28px'
                }}
                onMouseEnter={(e) => {
                  if (isTruncated) {
                    setIsTextHovered(true);
                    const rect = e.currentTarget.getBoundingClientRect();
                    setTooltipPosition({
                      top: rect.bottom + 8,
                      left: rect.left,
                    });
                  }
                }}
                onMouseLeave={() => setIsTextHovered(false)}
              >
                <p className="leading-[16px] overflow-ellipsis overflow-hidden">
                  {text.length > 50 ? `${text.slice(0, 50)}...` : text}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Discard Dialog */}
      <AlertDialog
        open={showDiscardDialog}
        onOpenChange={setShowDiscardDialog}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Discard changes?</AlertDialogTitle>
            <AlertDialogDescription>
              If you leave, your changes will be lost.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDiscardConfirm}>Discard</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Tooltip for truncated text */}
      {isTextHovered && isTruncated && !isEditing && createPortal(
        <div
          className="fixed z-[9999] px-[12px] py-[8px] rounded shadow-lg max-w-[400px] whitespace-pre-wrap break-words"
          style={{
            top: `${tooltipPosition.top}px`,
            left: `${tooltipPosition.left}px`,
            backgroundColor: 'var(--text-primary)',
            color: 'var(--white)',
            fontSize: 'var(--text-caption)',
            lineHeight: '16px',
            borderRadius: 'var(--radius-sm)'
          }}
        >
          {text}
        </div>,
        document.body
      )}
    </div>
  );
}