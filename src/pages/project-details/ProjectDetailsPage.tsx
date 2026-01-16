import {
  useState,
  useRef,
  useCallback,
  useEffect,
} from "react";
import {
  ChevronLeft,
  MoreVertical,
  MapPin,
  Search,
  Plus,
  Hash,
  FileText,
  ImageIcon,
  Activity,
  Users,
  Link,
  UserPlus,
  Save,
  X,
} from "lucide-react";
import { ChecklistItem } from "../../components/ChecklistItem";
import { Switch } from "../../components/ui/switch";
import { Button } from "../../components/Button";
import { Tooltip } from "../../components/Tooltip";
import { SuccessTooltip } from "../../components/SuccessTooltip";
import { TabItem } from "../../components/TabItem";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../../components/ui/alert-dialog";

interface ChecklistItemData {
  id: string;
  text: string;
  checked: boolean;
}

export default function ProjectDetailsPage() {
  const [items, setItems] = useState<ChecklistItemData[]>([
    {
      id: "1",
      text: "Client contract signed and uploaded",
      checked: true,
    },
    {
      id: "2",
      text: "Permits submitted and tracked",
      checked: true,
    },
    {
      id: "3",
      text: "Policy confirmed for General Contractor and Subcontractors",
      checked: true,
    },
    {
      id: "4",
      text: "Coverage checked (General Contractor + Subs)",
      checked: true,
    },
    {
      id: "5",
      text: "Insurance status validated (GC alongside Subs)",
      checked: false,
    },
    {
      id: "6",
      text: "Coverage confirmed for General Contractor and Subcontractors",
      checked: false,
    },
    {
      id: "7",
      text: "Insurance cleared (GC and Subs included)",
      checked: false,
    },
    {
      id: "8",
      text: "Verification complete for Insurance (General Contractor + Subs)",
      checked: false,
    },
    {
      id: "9",
      text: "Insurance approval achieved for GC and Subs",
      checked: false,
    },
    {
      id: "10",
      text: "Insurance approval achieved for GC and Subs",
      checked: false,
    },
  ]);
  const [newItemText, setNewItemText] = useState("");
  const [isAddingItem, setIsAddingItem] = useState(false);
  const [showCompleted, setShowCompleted] = useState(false);
  const [isAnyItemEditing, setIsAnyItemEditing] =
    useState(false);
  const [showDiscardDialog, setShowDiscardDialog] =
    useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [isMultiline, setIsMultiline] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("checklist");
  const addItemContainerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const moveItem = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      setItems((prevItems) => {
        const newItems = [...prevItems];
        const dragItem = newItems[dragIndex];
        newItems.splice(dragIndex, 1);
        newItems.splice(hoverIndex, 0, dragItem);
        return newItems;
      });
    },
    [],
  );

  const toggleItem = useCallback((id: string) => {
    setItems((prevItems) => {
      const itemIndex = prevItems.findIndex(
        (item) => item.id === id,
      );
      if (itemIndex === -1) return prevItems;

      const item = prevItems[itemIndex];
      const updatedItem = { ...item, checked: !item.checked };
      const newItems = prevItems.filter((i) => i.id !== id);

      if (item.checked && !updatedItem.checked) {
        const firstIncompleteIndex = newItems.findIndex(
          (i) => !i.checked,
        );
        if (firstIncompleteIndex !== -1) {
          newItems.splice(firstIncompleteIndex, 0, updatedItem);
        } else {
          newItems.unshift(updatedItem);
        }
      } else {
        const firstCompletedIndex = newItems.findIndex(
          (i) => i.checked,
        );
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
    setItems((prevItems) =>
      prevItems.filter((item) => item.id !== id),
    );
  }, []);

  const addItem = useCallback(() => {
    if (newItemText.trim()) {
      const newItem: ChecklistItemData = {
        id: Date.now().toString(),
        text: newItemText,
        checked: false,
      };
      setItems((prevItems) => [...prevItems, newItem]);
      setNewItemText("");
      setIsAddingItem(false);
    }
  }, [newItemText]);

  const handleCancelAddItem = useCallback(() => {
    if (newItemText.trim()) {
      setShowDiscardDialog(true);
    } else {
      setIsAddingItem(false);
      setNewItemText("");
      setIsMultiline(false);
    }
  }, [newItemText]);

  const handleDiscardConfirm = useCallback(() => {
    setIsAddingItem(false);
    setNewItemText("");
    setShowDiscardDialog(false);
    setIsMultiline(false);
  }, []);

  const updateItem = useCallback(
    (id: string, newText: string) => {
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === id ? { ...item, text: newText } : item,
        ),
      );
    },
    [],
  );

  const copyToClipboard = (text: string) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2000);
  };

  useEffect(() => {
    if (!isAddingItem) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (showDiscardDialog) return;

      if (
        addItemContainerRef.current &&
        !addItemContainerRef.current.contains(
          event.target as Node,
        )
      ) {
        handleCancelAddItem();
      }
    };

    const timeoutId = setTimeout(() => {
      document.addEventListener(
        "mousedown",
        handleClickOutside,
      );
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener(
        "mousedown",
        handleClickOutside,
      );
    };
  }, [isAddingItem, showDiscardDialog, handleCancelAddItem]);

  const displayItems = showCompleted
    ? items
    : items.filter((item) => !item.checked);

  useEffect(() => {
    const checkOverflow = () => {
      const currentRef = contentRef.current;
      if (currentRef) {
        const isOverflow =
          currentRef.scrollHeight > currentRef.clientHeight;
        setIsOverflowing(isOverflow);
      }
    };

    checkOverflow();

    const resizeObserver = new ResizeObserver(() => {
      checkOverflow();
    });

    if (contentRef.current) {
      resizeObserver.observe(contentRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [displayItems, isAddingItem]);

  return (
    <DndProvider backend={HTML5Backend}>
      <div
        className="flex flex-col h-full bg-white overflow-hidden"
        style={{ fontFamily: "var(--font-family-base)" }}
      >
        {/* Header */}
        <header
          className="bg-white px-4 py-3 flex-shrink-0"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <div className="flex items-center justify-between">
            {/* Left: Title Section */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2 h-8">
                <button className="w-8 h-8 flex items-center justify-center">
                  <ChevronLeft
                    className="w-4 h-4"
                    style={{ color: "var(--grey-04)" }}
                  />
                </button>
                <h1
                  style={{
                    fontWeight: "var(--font-weight-semibold)",
                    fontSize: "22px",
                    lineHeight: "32px",
                    color: "var(--text-primary)",
                    fontFamily: "var(--font-family-base)",
                  }}
                >
                  Raintree Hollow Court Renovation
                </h1>
                <button className="w-8 h-8 flex items-center justify-center">
                  <MoreVertical
                    className="w-6 h-6"
                    style={{ color: "var(--text-primary)" }}
                  />
                </button>
              </div>
              <div className="flex items-center gap-2 pl-10 opacity-80">
                <div className="flex items-center gap-1 p-0.5">
                  <div className="w-3 h-3 relative">
                    <svg
                      className="w-full h-full"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path
                        d="M10.875 10.2807V4.3418C10.875 3.89442 10.5113 3.53067 10.0639 3.53067H7.875V0.80667C7.875 0.77442 7.86788 0.369045 7.51538 0.132795C7.16288 -0.10308 6.78525 0.0446696 6.75525 0.0566696L1.25213 2.3228C0.94725 2.44842 0.75 2.74242 0.75 3.0728V10.2807H0.375C0.168 10.2807 0 10.4487 0 10.6557C0 10.8627 0.168 11.0307 0.375 11.0307H1.125H7.5H10.5H10.875C11.082 11.0307 11.25 10.8627 11.25 10.6557C11.25 10.4487 11.082 10.2807 10.875 10.2807ZM1.5 3.0728C1.5 3.04805 1.515 3.02592 1.53788 3.01655L7.041 0.750795C7.06163 0.742545 7.08038 0.74442 7.098 0.75642C7.116 0.768045 7.125 0.78492 7.125 0.80667V3.90567V10.2807H1.5V3.0728ZM7.875 10.2807V4.28067H10.0639C10.0976 4.28067 10.125 4.30805 10.125 4.3418V10.2807H7.875Z"
                        fill="var(--secondary-green)"
                      />
                    </svg>
                  </div>
                  <span
                    style={{
                      fontSize: "10px",
                      lineHeight: "16px",
                      color: "var(--text-primary)",
                      letterSpacing: "0.2px",
                      fontFamily: "var(--font-family-base)",
                    }}
                  >
                    TaskTag Project
                  </span>
                </div>
                <div className="flex items-center gap-1 p-0.5">
                  <MapPin
                    className="w-3 h-3"
                    style={{ color: "var(--text-primary)" }}
                  />
                  <span
                    style={{
                      fontWeight: "var(--font-weight-medium)",
                      fontSize: "10px",
                      lineHeight: "16px",
                      color: "var(--text-primary)",
                      letterSpacing: "0.2px",
                      fontFamily: "var(--font-family-base)",
                    }}
                  >
                    11 N Raintree Hollow Court
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                style={{
                  aspectRatio: "1",
                  padding: "var(--spacing-8)",
                  minWidth: "var(--size-sm)",
                }}
              >
                <Search
                  className="w-6 h-6"
                  style={{ color: "var(--text-primary)" }}
                />
              </Button>
              <Button
                variant="fill"
                size="sm"
                style={{
                  borderRadius: "var(--radius-full)",
                  width: "120px",
                  backgroundColor: "var(--text-primary)",
                  color: "var(--white)",
                  border: "none",
                }}
              >
                <Plus className="w-4 h-4" />
                <span>New Task</span>
              </Button>
            </div>
          </div>
        </header>

        {/* Description Section */}
        <div className="px-4 pt-4 pb-2 flex-shrink-0">
          <div
            className="rounded-lg p-4"
            style={{ backgroundColor: "var(--grey-01)" }}
          >
            <h2
              style={{
                fontWeight: "var(--font-weight-semibold)",
                fontSize: "16px",
                lineHeight: "21px",
                color: "var(--text-primary)",
                marginBottom: "8px",
                fontFamily: "var(--font-family-base)",
              }}
            >
              Description
            </h2>
            <p
              style={{
                fontSize: "12px",
                lineHeight: "16px",
                color: "var(--text-primary)",
                letterSpacing: "0.24px",
                fontFamily: "var(--font-family-base)",
              }}
            >
              This project focuses on conducting a comprehensive
              assessment and improvement of the electrical board
              to ensure long-term safety, system reliability,
              and compliance with current standards.
            </p>
          </div>
        </div>

        {/* Tabs Section */}
        <div
          className="relative flex-shrink-0"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <div className="flex items-center justify-between px-4 pt-2">
            <div className="flex items-center">
              <TabItem
                variant="icon-left"
                size="md"
                label="Tasks"
                icon={Hash}
                isActive={activeTab === "tasks"}
                onClick={() => setActiveTab("tasks")}
              />
              <TabItem
                variant="icon-left"
                size="md"
                label="Checklist"
                icon={FileText}
                isActive={activeTab === "checklist"}
                onClick={() => setActiveTab("checklist")}
              />
              <TabItem
                variant="icon-left"
                size="md"
                label="Files & Media"
                icon={ImageIcon}
                isActive={activeTab === "files"}
                onClick={() => setActiveTab("files")}
              />
              <TabItem
                variant="icon-left"
                size="md"
                label="Activity Log"
                icon={Activity}
                isActive={activeTab === "activity"}
                onClick={() => setActiveTab("activity")}
              />
              <TabItem
                variant="icon-left"
                size="md"
                label="Members"
                icon={Users}
                badge="10"
                isActive={activeTab === "members"}
                onClick={() => setActiveTab("members")}
              />
            </div>

            {/* Right: Copy Link and Invite buttons */}
            <div className="flex items-center gap-4 -mt-4">
              <Tooltip
                content={
                  linkCopied ? (
                    <SuccessTooltip message="Link Copied" />
                  ) : (
                    "Copy link to invite"
                  )
                }
                variant="bottom-right"
                size="sm"
                style={linkCopied ? "custom" : "default"}
                forceShow={linkCopied}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  style={{
                    aspectRatio: "1",
                    padding: "var(--spacing-8)",
                    minWidth: "var(--size-sm)",
                    minHeight: "var(--size-sm)",
                  }}
                  onClick={() => {
                    copyToClipboard(window.location.href);
                  }}
                >
                  <Link
                    className="w-6 h-6"
                    style={{ color: "var(--text-primary)" }}
                  />
                </Button>
              </Tooltip>
              <Button
                variant="outline"
                size="sm"
                className="btn-secondary"
                style={{
                  borderRadius: "var(--radius-full)",
                  width: "120px",
                  minHeight: "var(--size-sm)",
                }}
              >
                <UserPlus className="w-4 h-4" />
                <span>Invite</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Action Bar */}
        <div className="bg-white px-4 py-4 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="btn-secondary"
            >
              <Save className="w-4 h-4" />
              <span>Save as Template</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="btn-secondary"
            >
              <Hash className="w-4 h-4" />
              <span>Convert to Tasks</span>
            </Button>
          </div>
          <div className="flex items-center gap-3">
            <span
              style={{
                fontWeight: "var(--font-weight-regular)",
                fontSize: "14px",
                lineHeight: "16px",
                color: "var(--text-primary)",
                letterSpacing: "0.28px",
                fontFamily: "var(--font-family-base)",
              }}
            >
              Show completed items
            </span>
            <Switch
              checked={showCompleted}
              onCheckedChange={setShowCompleted}
            />
          </div>
        </div>

        {/* Checklist Items */}
        <div
          ref={containerRef}
          className="flex-1 flex flex-col min-h-0 overflow-hidden"
        >
          <div
            ref={contentRef}
            className="flex-1 overflow-y-auto px-4"
            style={{
              paddingBottom: "16px",
            }}
          >
            <div className="flex flex-col gap-4">
              {displayItems.map((item) => {
                const realIndex = items.findIndex(
                  (i) => i.id === item.id,
                );
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

              {/* Add Item Form */}
              {!isAnyItemEditing && !showCompleted && (
                <>
                  {isAddingItem ? (
                    <div
                      className="bg-white relative rounded-lg shrink-0 w-full"
                      ref={addItemContainerRef}
                      style={{
                        border: "1px solid var(--border)",
                      }}
                    >
                      <button
                        onClick={handleCancelAddItem}
                        className="absolute right-[16px] top-[16px] flex items-center justify-center z-10 rounded-full hover:bg-[var(--grey-02)] transition-colors"
                      >
                        <X
                          className="w-6 h-6"
                          style={{
                            color: "var(--text-primary)",
                          }}
                        />
                      </button>

                      <div className="flex flex-col size-full">
                        <div className="box-border content-stretch flex flex-col gap-[8px] items-start pl-[24px] pr-[56px] py-[16px] relative w-full">
                          <div className="relative w-full">
                            <textarea
                              value={newItemText}
                              onChange={(e) =>
                                setNewItemText(e.target.value)
                              }
                              onKeyDown={(e) => {
                                if (
                                  e.key === "Enter" &&
                                  !e.shiftKey
                                ) {
                                  e.preventDefault();
                                  addItem();
                                } else if (e.key === "Escape") {
                                  handleCancelAddItem();
                                }
                              }}
                              placeholder="Item name"
                              autoFocus
                              maxLength={255}
                              rows={1}
                              className="w-full outline-none bg-white rounded-[4px] px-[12px] py-[8px] resize-none overflow-hidden"
                              style={{
                                fontFamily:
                                  "var(--font-family-base)",
                                fontWeight:
                                  "var(--font-weight-regular)",
                                fontSize: "14px",
                                color: "var(--text-primary)",
                                letterSpacing: "0.28px",
                                border:
                                  "1px solid var(--text-primary)",
                                height: "auto",
                                minHeight: "40px",
                              }}
                              onInput={(e) => {
                                const target =
                                  e.target as HTMLTextAreaElement;
                                target.style.height = "auto";
                                target.style.height =
                                  target.scrollHeight + "px";
                                setIsMultiline(
                                  target.scrollHeight > 56,
                                );
                              }}
                            />
                            <span
                              className={`absolute pointer-events-none ${
                                isMultiline
                                  ? "right-[12px] bottom-[12px]"
                                  : "right-[12px] top-[50%] -translate-y-1/2"
                              }`}
                              style={{
                                fontSize: "12px",
                                color: "var(--grey-04)",
                                fontFamily:
                                  "var(--font-family-base)",
                              }}
                            >
                              {255 - newItemText.length}
                            </span>
                          </div>
                          <p
                            style={{
                              fontSize: "12px",
                              color: "var(--grey-04)",
                              lineHeight: "16px",
                              fontFamily:
                                "var(--font-family-base)",
                            }}
                          >
                            Press Shift + Enter for new line
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </>
              )}

              {/* Add Item Buttons - Non-sticky when not overflowing */}
              {!isOverflowing &&
                !isAnyItemEditing &&
                !showCompleted &&
                !isAddingItem && (
                  <div className="flex gap-6">
                    <Button
                      onClick={() => setIsAddingItem(true)}
                      size="lg"
                      style={{
                        backgroundColor: "var(--grey-01)",
                        color: "var(--secondary-green)",
                        flex: 1,
                        border: "none",
                        justifyContent: "flex-start",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor =
                          "var(--grey-02)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor =
                          "var(--grey-01)";
                      }}
                    >
                      <svg
                        className="block size-4"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M8 3.33333V12.6667M3.33333 8H12.6667"
                          stroke="var(--secondary-green)"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span
                        style={{
                          fontWeight:
                            "var(--font-weight-medium)",
                          color: "var(--secondary-green)",
                        }}
                      >
                        Add item
                      </span>
                    </Button>
                    <Button
                      size="lg"
                      style={{
                        backgroundColor: "var(--grey-01)",
                        color: "var(--secondary-green)",
                        flex: 1,
                        border: "none",
                        justifyContent: "flex-start",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor =
                          "var(--grey-02)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor =
                          "var(--grey-01)";
                      }}
                    >
                      <svg
                        className="block size-4"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M8 3.33333V12.6667M3.33333 8H12.6667"
                          stroke="var(--secondary-green)"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span
                        style={{
                          fontWeight:
                            "var(--font-weight-medium)",
                          color: "var(--secondary-green)",
                        }}
                      >
                        Add item from template
                      </span>
                    </Button>
                  </div>
                )}
            </div>
          </div>

          {/* Add Item Buttons - Sticky when overflowing */}
          {isOverflowing &&
            !showCompleted &&
            !isAnyItemEditing &&
            !isAddingItem && (
              <div
                className="bg-white px-4 py-4 flex-shrink-0"
                style={{
                  boxShadow: "0px -2px 8px rgba(0, 0, 0, 0.08)",
                  zIndex: 10,
                }}
              >
                <div className="flex gap-6">
                  <Button
                    onClick={() => setIsAddingItem(true)}
                    size="lg"
                    style={{
                      backgroundColor: "var(--grey-01)",
                      color: "var(--secondary-green)",
                      flex: 1,
                      border: "none",
                      justifyContent: "flex-start",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "var(--grey-02)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "var(--grey-01)";
                    }}
                  >
                    <svg
                      className="block size-4"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M8 3.33333V12.6667M3.33333 8H12.6667"
                        stroke="var(--secondary-green)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span
                      style={{
                        fontWeight: "var(--font-weight-medium)",
                        color: "var(--secondary-green)",
                      }}
                    >
                      Add item
                    </span>
                  </Button>
                  <Button
                    size="lg"
                    style={{
                      backgroundColor: "var(--grey-01)",
                      color: "var(--secondary-green)",
                      flex: 1,
                      border: "none",
                      justifyContent: "flex-start",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "var(--grey-02)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "var(--grey-01)";
                    }}
                  >
                    <svg
                      className="block size-4"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M8 3.33333V12.6667M3.33333 8H12.6667"
                        stroke="var(--secondary-green)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span
                      style={{
                        fontWeight: "var(--font-weight-medium)",
                        color: "var(--secondary-green)",
                      }}
                    >
                      Add item from template
                    </span>
                  </Button>
                </div>
              </div>
            )}
        </div>

        {/* Discard Confirmation Dialog */}
        <AlertDialog
          open={showDiscardDialog}
          onOpenChange={setShowDiscardDialog}
        >
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Discard changes?
              </AlertDialogTitle>
              <AlertDialogDescription>
                You have unsaved changes. Are you sure you want
                to discard them?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction onClick={handleDiscardConfirm}>
                Discard
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </DndProvider>
  );
}