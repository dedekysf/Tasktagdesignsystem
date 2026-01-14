import { useState, useCallback, useRef, useEffect } from 'react';
import { ChecklistItem } from './ChecklistItem';
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
import { Plus, X, FileText } from 'lucide-react';

interface ChecklistItemData {
  id: string;
  text: string;
  checked: boolean;
}

function ChevronDownIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div className={`relative shrink-0 size-[20px] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.29289 9.29289C6.68342 8.90237 7.31658 8.90237 7.70711 9.29289L12 13.5858L16.2929 9.29289C16.6834 8.90237 17.3166 8.90237 17.7071 9.29289C18.0976 9.68342 18.0976 10.3166 17.7071 10.7071L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L6.29289 10.7071C5.90237 10.3166 5.90237 9.68342 6.29289 9.29289Z"
          fill="var(--text-primary)"
        />
      </svg>
    </div>
  );
}

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
  const [isMultiline, setIsMultiline] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const addItemContainerRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

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
    setItems((prevItems) => {
      const itemIndex = prevItems.findIndex(item => item.id === id);
      const item = prevItems[itemIndex];
      const updatedItem = { ...item, checked: !item.checked };
      const newItems = prevItems.filter(i => i.id !== id);
      
      if (item.checked && !updatedItem.checked) {
        const firstIncompleteIndex = newItems.findIndex(i => !i.checked);
        if (firstIncompleteIndex !== -1) {
          newItems.splice(firstIncompleteIndex, 0, updatedItem);
        } else {
          newItems.unshift(updatedItem);
        }
      } else {
        const firstCompletedIndex = newItems.findIndex(i => i.checked);
        if (firstCompletedIndex !== -1) {
          newItems.splice(firstCompletedIndex, 0, updatedItem);
        } else {
          newItems.push(updatedItem);
        }
      }
      
      return newItems;
    });
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
      setIsMultiline(false);
    }
  }, [newItemText]);

  const handleDiscardConfirm = useCallback(() => {
    setIsAddingItem(false);
    setNewItemText('');
    setShowDiscardDialog(false);
    setIsMultiline(false);
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

  useEffect(() => {
    if (isAddingItem && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [isAddingItem]);

  const displayItems = showCompleted ? items : items.filter(item => !item.checked);

  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-lg shrink-0 w-full" style={{ fontFamily: 'var(--font-family-base)' }}>
      {/* Accordion Header */}
      <div 
        className="flex items-center justify-between w-full px-[16px] py-[16px] cursor-pointer transition-colors"
        style={{ backgroundColor: isHovered ? 'var(--grey-01)' : 'transparent' }}
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-center gap-[12px]">
          <FileText className="w-5 h-5" style={{ color: 'var(--text-primary)' }} />
          <span style={{
            fontWeight: 'var(--font-weight-semibold)',
            fontSize: 'var(--text-body)',
            color: 'var(--text-primary)',
            lineHeight: '21px'
          }}>
            Checklist
          </span>
        </div>
        
        <div className="flex items-center gap-[16px]">
          <div className="w-[24px] h-[24px] flex items-center justify-center">
            <ChevronDownIcon isOpen={isOpen} />
          </div>
        </div>
      </div>

      {/* Container */}
      {isOpen && (
        <div className="relative shrink-0 w-full">
          <div className="size-full">
            <div className="box-border content-stretch flex flex-col gap-[24px] items-start px-[16px] py-0 pb-[16px] relative w-full">
              
              {/* Show Completed Items Toggle */}
              <div className="flex items-center justify-end w-full gap-[12px] pt-[8px]">
                <span style={{
                  fontSize: 'var(--text-label)',
                  fontWeight: 'var(--font-weight-regular)',
                  color: 'var(--text-primary)',
                  letterSpacing: '0.28px'
                }}>
                  Show completed items
                </span>
                <Switch 
                  checked={showCompleted} 
                  onCheckedChange={setShowCompleted}
                />
              </div>

              {/* Checklist Items */}
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
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
                      <div className="relative rounded-lg shrink-0 w-full" ref={addItemContainerRef} style={{ backgroundColor: 'var(--white)' }}>
                        <div aria-hidden="true" className="absolute border border-solid inset-0 pointer-events-none rounded-lg" style={{ borderColor: 'var(--border)' }} />
                        
                        <button
                          onClick={handleCancelAddItem}
                          className="absolute right-[16px] top-[16px] flex items-center justify-center z-10 rounded-full cursor-pointer"
                          style={{ backgroundColor: 'transparent' }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = 'var(--grey-02)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                          }}
                        >
                          <X className="size-6" style={{ color: 'var(--text-primary)' }} />
                        </button>

                        <div className="flex flex-col size-full">
                          <div className="box-border content-stretch flex flex-col gap-[8px] items-start pl-[24px] pr-[56px] py-[16px] relative w-full">
                            <div className="relative w-full">
                              <textarea
                                ref={textareaRef}
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
                                {255 - newItemText.length}
                              </span>
                            </div>
                            <p style={{
                              fontSize: 'var(--text-caption)',
                              color: 'var(--grey-04)',
                              lineHeight: '16px'
                            }}>
                              Press Shift + Enter for new line
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <button 
                        onClick={() => setIsAddingItem(true)}
                        className="relative rounded-lg shrink-0 w-full transition-colors cursor-pointer"
                        style={{ backgroundColor: 'var(--grey-01)' }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'var(--grey-02)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'var(--grey-01)';
                        }}
                      >
                        <div className="box-border content-stretch flex gap-[12px] items-center px-[16px] py-[16px] relative w-full">
                          <Plus className="size-4" style={{ color: 'var(--secondary-green)' }} strokeWidth={2} />
                          <p style={{
                            fontWeight: 'var(--font-weight-medium)',
                            fontSize: 'var(--text-label)',
                            lineHeight: '16px',
                            color: 'var(--secondary-green)',
                          }}>
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
        </div>
      )}

      {/* Discard Confirmation Dialog */}
      <AlertDialog
        open={showDiscardDialog}
        onOpenChange={setShowDiscardDialog}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Discard changes?</AlertDialogTitle>
            <AlertDialogDescription>
              You have unsaved changes. Are you sure you want to discard them?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDiscardConfirm}>Discard</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}