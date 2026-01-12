import { useState, useRef } from 'react';
import { GripVertical, Trash2, X } from 'lucide-react';
import { useDrag, useDrop } from 'react-dnd';
import type { ChecklistItemData } from './types';

interface ChecklistItemProps {
  id: string;
  text: string;
  checked: boolean;
  index: number;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  moveItem: (dragIndex: number, hoverIndex: number) => void;
  onUpdate: (id: string, newText: string) => void;
  onEditingChange: (isEditing: boolean) => void;
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
  onEditingChange,
}: ChecklistItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(text);
  const [isHovered, setIsHovered] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const ref = useRef<HTMLDivElement>(null);

  const [{ isDragging }, drag, preview] = useDrag({
    type: 'checklist-item',
    item: () => ({ id, index }),
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: 'checklist-item',
    hover(item: { id: string; index: number }) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      moveItem(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  preview(drop(ref));

  const handleSave = () => {
    if (editText.trim() && editText !== text) {
      onUpdate(id, editText);
    } else if (!editText.trim()) {
      setEditText(text);
    }
    setIsEditing(false);
    onEditingChange(false);
  };

  const handleCancel = () => {
    setEditText(text);
    setIsEditing(false);
    onEditingChange(false);
  };

  const handleStartEdit = () => {
    setIsEditing(true);
    onEditingChange(true);
    setTimeout(() => {
      if (textareaRef.current) {
        textareaRef.current.focus();
        textareaRef.current.select();
      }
    }, 0);
  };

  return (
    <div
      ref={ref}
      className="relative rounded-lg border transition-all"
      style={{
        backgroundColor: isHovered ? 'var(--grey-01)' : 'var(--white)',
        borderColor: 'var(--border)',
        opacity: isDragging ? 0.5 : 1,
        cursor: isDragging ? 'grabbing' : 'default',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start gap-3 px-4 py-4">
        {/* Drag Handle */}
        <div
          ref={drag}
          className="flex items-center justify-center cursor-grab active:cursor-grabbing"
          style={{ 
            color: 'var(--grey-04)',
            marginTop: '2px',
          }}
        >
          <GripVertical className="size-5" />
        </div>

        {/* Checkbox */}
        <button
          onClick={() => onToggle(id)}
          className="shrink-0 mt-0.5"
        >
          <div 
            className="w-5 h-5 rounded border-2 flex items-center justify-center transition-colors"
            style={{
              backgroundColor: checked ? 'var(--secondary-green)' : 'var(--white)',
              borderColor: checked ? 'var(--secondary-green)' : 'var(--grey-04)',
            }}
          >
            {checked && (
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                <path
                  d="M1 5L4.5 8.5L11 1.5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
        </button>

        {/* Text Content */}
        {isEditing ? (
          <div className="flex-1 relative">
            <textarea
              ref={textareaRef}
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSave();
                } else if (e.key === 'Escape') {
                  handleCancel();
                }
              }}
              maxLength={255}
              rows={1}
              className="w-full outline-none bg-white border rounded px-3 py-2 pr-16 resize-none"
              style={{
                fontSize: 'var(--text-label)',
                color: 'var(--text-primary)',
                borderColor: 'var(--text-secondary)',
                minHeight: '36px',
              }}
              onInput={(e) => {
                const target = e.target as HTMLTextAreaElement;
                target.style.height = 'auto';
                target.style.height = target.scrollHeight + 'px';
              }}
            />
            <span
              className="absolute right-3 bottom-2 px-1.5 py-0.5 rounded pointer-events-none"
              style={{
                fontSize: 'var(--text-caption)',
                color: 'var(--grey-04)',
                backgroundColor: 'var(--white)',
              }}
            >
              {255 - editText.length}
            </span>
          </div>
        ) : (
          <div
            className="flex-1 cursor-pointer"
            onClick={handleStartEdit}
          >
            <p
              style={{
                fontSize: 'var(--text-label)',
                color: 'var(--text-primary)',
                lineHeight: '1.5',
                textDecoration: checked ? 'line-through' : 'none',
                opacity: checked ? 0.6 : 1,
              }}
            >
              {text}
            </p>
          </div>
        )}

        {/* Delete Button */}
        {!isEditing && (
          <button
            onClick={() => onDelete(id)}
            className="shrink-0 p-1.5 rounded-full transition-colors"
            style={{
              color: 'var(--text-secondary)',
              opacity: isHovered ? 1 : 0,
              backgroundColor: isHovered ? 'var(--grey-02)' : 'transparent',
            }}
          >
            <Trash2 className="size-4" />
          </button>
        )}

        {/* Cancel Button (when editing) */}
        {isEditing && (
          <button
            onClick={handleCancel}
            className="shrink-0 p-1 rounded-full transition-colors hover:bg-[var(--grey-02)]"
            style={{ color: 'var(--text-secondary)' }}
          >
            <X className="size-5" />
          </button>
        )}
      </div>
    </div>
  );
}
