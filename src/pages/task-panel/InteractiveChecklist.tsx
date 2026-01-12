import { useState, useCallback, useRef, useEffect } from 'react';
import { ChevronDown, FileText, Plus, X } from 'lucide-react';
import { ChecklistItem } from './ChecklistItem';
import type { ChecklistItemData } from './types';
import { Switch } from '../../components/ui/switch';
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

export function InteractiveChecklist() {
  const [items, setItems] = useState<ChecklistItemData[]>([
    { id: '1', text: 'Electrical Board Service Task Check Completed...', checked: true },
    { id: '2', text: 'Label all circuits clearly and accurately', checked: true },
    { id: '3', text: 'Replace damaged breakers immediately', checked: false },
    { id: '4', text: 'Test each circuit for stability', checked: false },
    { id: '5', text: 'Verify voltage performance', checked: false },
  ]);
  const [newItemText, setNewItemText] = useState('');
  const [isAddingItem, setIsAddingItem] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [showCompleted, setShowCompleted] = useState(false);
  const [isAnyItemEditing, setIsAnyItemEditing] = useState(false);
  const [showDiscardDialog, setShowDiscardDialog] = useState(false);
  const addItemContainerRef = useRef<HTMLDivElement>(null);

  const moveItem = useCallback((dragIndex: number, hoverIndex: number) => {
    setItems((prevItems) => {
      const newItems = [...prevItems];
      const dragItem = newItems[dragIndex];
      newItems.splice(dragIndex, 1);
      newItems.splice(hoverIndex, 0, dragItem);
      return newItems;
    });
  }, []);

  const toggleItem = useCallback((id: string) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  }, []);

  const deleteItem = useCallback((id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }, []);

  const addItem = useCallback(() => {
    if (newItemText.trim()) {
      const newItem: ChecklistItemData = {
        id: Date.now().toString(),
        text: newItemText,
        checked: false,
      };
      setItems((prevItems) => [...prevItems, newItem]);
      setNewItemText('');
      setIsAddingItem(false);
    }
  }, [newItemText]);

  const handleCancelAddItem = useCallback(() => {
    if (newItemText.trim()) {
      setShowDiscardDialog(true);
    } else {
      setIsAddingItem(false);
      setNewItemText('');
    }
  }, [newItemText]);

  const handleDiscardConfirm = useCallback(() => {
    setIsAddingItem(false);
    setNewItemText('');
    setShowDiscardDialog(false);
  }, []);

  const updateItem = useCallback((id: string, newText: string) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, text: newText } : item
      )
    );
  }, []);

  useEffect(() => {
    if (!isAddingItem) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (showDiscardDialog) return;
      
      if (addItemContainerRef.current && !addItemContainerRef.current.contains(event.target as Node)) {
        handleCancelAddItem();
      }
    };

    const timeoutId = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isAddingItem, showDiscardDialog, handleCancelAddItem]);

  const displayItems = showCompleted ? items : items.filter(item => !item.checked);

  return (
    <div className="flex flex-col items-start overflow-clip rounded-lg shrink-0 w-full">
      {/* Accordion Header */}
      <div 
        className="flex items-center justify-between w-full px-4 py-4 cursor-pointer transition-colors"
        style={{ backgroundColor: isOpen ? 'var(--grey-01)' : 'transparent' }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-3">
          <FileText className="size-5" style={{ color: 'var(--text-secondary)' }} />
          <span 
            style={{ 
              fontSize: 'var(--text-h4)',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--text-primary)',
            }}
          >
            Checklist
          </span>
        </div>
        
        <div 
          className="w-6 h-6 flex items-center justify-center transition-transform duration-200"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          <ChevronDown className="size-5" style={{ color: 'var(--text-secondary)' }} />
        </div>
      </div>

      {/* Content */}
      {isOpen && (
        <div className="w-full px-4 pb-4">
          <div className="space-y-6">
            {/* Show Completed Items Toggle */}
            <div className="flex items-center justify-end gap-3 pt-2">
              <span 
                style={{ 
                  fontSize: 'var(--text-label)',
                  color: 'var(--text-secondary)',
                }}
              >
                Show completed items
              </span>
              <Switch 
                checked={showCompleted} 
                onCheckedChange={setShowCompleted}
              />
            </div>

            {/* Checklist Items */}
            <div className="space-y-4">
              {displayItems.map((item) => {
                const realIndex = items.findIndex(i => i.id === item.id);
                return (
                  <ChecklistItem
                    key={item.id}
                    id={item.id}
                    text={item.text}
                    checked={item.checked}
                    index={realIndex}
                    onToggle={toggleItem}
                    onDelete={deleteItem}
                    moveItem={moveItem}
                    onUpdate={updateItem}
                    onEditingChange={setIsAnyItemEditing}
                  />
                );
              })}

              {/* Add Item Button or Input */}
              {!isAnyItemEditing && !showCompleted && (
                <>
                  {isAddingItem ? (
                    <div 
                      className="relative rounded-lg border"
                      style={{ 
                        backgroundColor: 'var(--white)',
                        borderColor: 'var(--border)',
                      }}
                      ref={addItemContainerRef}
                    >
                      <button
                        onClick={handleCancelAddItem}
                        className="absolute right-4 top-4 flex items-center justify-center z-10 rounded-full hover:bg-[var(--grey-02)] p-1"
                      >
                        <X className="size-5" style={{ color: 'var(--text-secondary)' }} />
                      </button>

                      <div className="flex flex-col px-6 pr-14 py-4 gap-2">
                        <div className="relative">
                          <textarea
                            value={newItemText}
                            onChange={(e) => setNewItemText(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' && !e.shiftKey) {
                                e.preventDefault();
                                addItem();
                              } else if (e.key === 'Escape') {
                                handleCancelAddItem();
                              }
                            }}
                            placeholder="Item name"
                            autoFocus
                            maxLength={255}
                            rows={1}
                            className="w-full outline-none bg-white border rounded px-3 py-2 pb-8 resize-none"
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
                            className="absolute right-4 bottom-3 px-1.5 py-0.5 rounded pointer-events-none"
                            style={{
                              fontSize: 'var(--text-caption)',
                              color: 'var(--grey-04)',
                              backgroundColor: 'var(--white)',
                            }}
                          >
                            {255 - newItemText.length}
                          </span>
                        </div>
                        <p 
                          style={{ 
                            fontSize: 'var(--text-caption)',
                            color: 'var(--grey-05)',
                          }}
                        >
                          Press Shift + Enter for new line
                        </p>
                      </div>
                    </div>
                  ) : (
                    <button 
                      onClick={() => setIsAddingItem(true)}
                      className="w-full rounded-lg transition-colors"
                      style={{ backgroundColor: 'var(--grey-02)' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--grey-03)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--grey-02)';
                      }}
                    >
                      <div className="flex items-center gap-3 px-4 py-4">
                        <Plus className="size-4" style={{ color: 'var(--secondary-green)' }} />
                        <p 
                          style={{ 
                            fontSize: 'var(--text-label)',
                            fontWeight: 'var(--font-weight-medium)',
                            color: 'var(--secondary-green)',
                          }}
                        >
                          Add item
                        </p>
                      </div>
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Discard Confirmation Dialog */}
      <AlertDialog open={showDiscardDialog} onOpenChange={setShowDiscardDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Discard changes?</AlertDialogTitle>
            <AlertDialogDescription>
              You have unsaved changes. Are you sure you want to discard them?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setShowDiscardDialog(false)}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction onClick={handleDiscardConfirm}>
              Discard
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
