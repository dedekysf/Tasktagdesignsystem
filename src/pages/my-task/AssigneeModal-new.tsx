import { forwardRef, useEffect, useRef, useState } from "react";
import {
  getInitials,
  getAvatarColor,
} from "../../utils/avatar";
import { Mail, X, Trash2, Link, ChevronDown, ChevronRight } from "lucide-react";
import teamCollaborationImage from "figma:asset/231f46d29d335b70c14e6a1c3a239decf66583f3.png";
import { Button } from "../../components/Button";
import { Dropdown } from "../../components/Dropdown";
import { Tooltip } from "../../components/Tooltip";
import { SuccessTooltip } from "../../components/SuccessTooltip";

interface User {
  id: string;
  name: string;
  email: string;
  role?: "assignee" | "viewer";
  isEmailInvite?: boolean;
  avatarUrl?: string;
}

interface AssigneeModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedAssignees?: Array<{
    name: string;
    email: string;
    isEmailInvite?: boolean;
    role?: "assignee" | "viewer";
  }>;
  onAssign?: (assignees: User[]) => void;
  taskId?: string;
}

const mockUsers: User[] = [
  {
    id: "1",
    name: "James Logan Smith",
    email: "jameslogansmith@gmail.com",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    email: "sarahjohnson@gmail.com",
  },
  {
    id: "3",
    name: "Michael Chen",
    email: "michaelchen@gmail.com",
  },
  {
    id: "4",
    name: "Logan Jack",
    email: "loganjack@gmail.com",
  },
  {
    id: "5",
    name: "Mason Gabriel",
    email: "masongabriel@gmail.com",
  },
  {
    id: "6",
    name: "Caleb Gabriel",
    email: "calebgabriel@gmail.com",
  },
  {
    id: "7",
    name: "Carlos Roberto",
    email: "carlosroberto@gmail.com",
  },
  {
    id: "8",
    name: "Savannah Nguyen",
    email: "savannahnguyen@gmail.com",
  },
  {
    id: "9",
    name: "Savara Lane",
    email: "savaralane@gmail.com",
  },
];

// More on TaskTag - recommended users (shown at top)
const recommendedUsers = mockUsers.slice(7, 9); // Savannah Nguyen, Savara Lane

// Collapsible contact groups
const contactGroups = [
  {
    id: "chelsea",
    name: "Chelsea Group",
    members: mockUsers.slice(3, 7), // Logan Jack, Mason Gabriel, Caleb Gabriel, Carlos Roberto
  },
];

// Individual contacts (shown after groups)
const individualContacts = mockUsers.slice(0, 3); // James Logan Smith, Sarah Johnson, Michael Chen

// Helper component to highlight search text
function HighlightedText({
  text,
  highlight,
}: {
  text: string;
  highlight: string;
}) {
  if (!highlight.trim()) {
    return <>{text}</>;
  }

  const regex = new RegExp(`(${highlight})`, "gi");
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, index) =>
        regex.test(part) ? (
          <span
            key={index}
            className="bg-[#FFE792] px-[2px] rounded-[2px]"
          >
            {part}
          </span>
        ) : (
          <span key={index}>{part}</span>
        ),
      )}
    </>
  );
}

// Helper component for rendering user items
function UserItem({
  user,
  searchQuery,
  isAlreadyAdded,
  onClick,
}: {
  user: User;
  searchQuery: string;
  isAlreadyAdded: boolean;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={`relative shrink-0 w-full transition-colors ${
        isAlreadyAdded
          ? "bg-white cursor-not-allowed"
          : "bg-white hover:bg-[#FAFBFC] cursor-pointer"
      }`}
    >
      <div
        aria-hidden="true"
        className="absolute border-[#e8e8e8] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center p-[8px] relative w-full">
          <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
            <div className="relative shrink-0 size-[40px]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 40 40"
              >
                <circle
                  cx="20"
                  cy="20"
                  fill={getAvatarColor(user.name)}
                  r="20"
                />
              </svg>
              <p
                className="absolute leading-[24px] left-1/2 not-italic text-[16px] text-center text-nowrap top-[calc(50%-12px)] translate-x-[-50%] whitespace-pre"
                style={{
                  fontWeight: "var(--font-weight-medium)",
                  color: "var(--text-primary)",
                }}
              >
                {getInitials(user.name)}
              </p>
            </div>

            <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0">
              <div className="content-stretch flex flex-col gap-[4px] items-start justify-center leading-[0] not-italic relative shrink-0 text-nowrap w-full">
                <div className="flex flex-col justify-center relative shrink-0 text-[14px] tracking-[0.28px]">
                  <p
                    className="leading-[16px] text-nowrap whitespace-pre text-[var(--text-primary)]"
                    style={{
                      fontWeight: "var(--font-weight-regular)",
                    }}
                  >
                    <HighlightedText text={user.name} highlight={searchQuery} />
                  </p>
                </div>
                <div className="flex flex-col justify-center relative shrink-0 text-[12px] tracking-[0.24px]">
                  <p className="leading-[16px] text-nowrap whitespace-pre text-[#828282]">
                    <HighlightedText text={user.email} highlight={searchQuery} />
                  </p>
                </div>
              </div>
            </div>

            {isAlreadyAdded && (
              <div className="flex items-center shrink-0 w-[120px]">
                <span
                  className="text-[12px] text-[var(--text-secondary)] tracking-[0.24px] leading-[16px]"
                  style={{
                    fontWeight: "var(--font-weight-regular)",
                  }}
                >
                  already added
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function AssigneeModal({
  isOpen,
  onClose,
  selectedAssignees = [],
  onAssign,
  taskId,
}: AssigneeModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [localSelectedUsers, setLocalSelectedUsers] = useState<User[]>([]);
  const [isCopied, setIsCopied] = useState(false);
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({
    chelsea: false, // Start collapsed
  });

  const toggleGroup = (groupId: string) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [groupId]: !prev[groupId],
    }));
  };

  const handleCopyLink = () => {
    try {
      const textarea = document.createElement("textarea");
      textarea.value = window.location.href;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);

      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
      }, 1000);
    } catch (error) {
      console.error("Failed to copy link:", error);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        modalRef.current &&
        modalRef.current.contains(target)
      ) {
        return;
      }

      onClose();
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener(
        "mousedown",
        handleClickOutside,
      );
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside,
      );
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      setSearchQuery("");

      if (selectedAssignees && selectedAssignees.length > 0) {
        const existingUsers: User[] = selectedAssignees.map(
          (assignee) => {
            if (assignee.isEmailInvite) {
              return {
                id: `invite-${assignee.email}`,
                name: assignee.name,
                email: assignee.email,
                role: assignee.role || "assignee",
                isEmailInvite: true,
              };
            }

            const mockUser = mockUsers.find(
              (user) =>
                user.name === assignee.name ||
                user.email === assignee.email,
            );

            if (mockUser) {
              return {
                ...mockUser,
                role: assignee.role || "assignee",
              };
            }

            return {
              id: `unknown-${assignee.email}`,
              name: assignee.name,
              email: assignee.email,
              role: assignee.role || "assignee",
            };
          },
        );

        setLocalSelectedUsers(existingUsers);
      } else {
        setLocalSelectedUsers([]);
      }

      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, selectedAssignees]);

  const handleAddUser = (user: User) => {
    const existingUser = localSelectedUsers.find(
      (u) => u.id === user.id || u.email === user.email,
    );

    if (!existingUser) {
      setLocalSelectedUsers([
        { ...user, role: "assignee" },
        ...localSelectedUsers,
      ]);
      setSearchQuery("");
    } else if (
      existingUser.isEmailInvite &&
      !user.isEmailInvite
    ) {
      setLocalSelectedUsers(
        localSelectedUsers.map((u) =>
          u.email === user.email
            ? { ...user, role: u.role }
            : u,
        ),
      );
      setSearchQuery("");
    }
  };

  const handleInviteByEmail = (email: string) => {
    const existingUser = localSelectedUsers.find(
      (u) => u.email === email,
    );

    if (!existingUser) {
      const newUser: User = {
        id: `invite-${Date.now()}`,
        name: email,
        email: email,
        role: "assignee",
        isEmailInvite: true,
      };
      setLocalSelectedUsers([newUser, ...localSelectedUsers]);
    }
    setSearchQuery("");
  };

  const handleChangeRole = (
    userId: string,
    role: "assignee" | "viewer",
  ) => {
    setLocalSelectedUsers(
      localSelectedUsers.map((u) =>
        u.id === userId ? { ...u, role } : u,
      ),
    );
  };

  const handleRemoveUser = (userId: string) => {
    setLocalSelectedUsers(
      localSelectedUsers.filter((u) => u.id !== userId),
    );
  };

  const handleAssign = () => {
    onAssign?.(localSelectedUsers);
    onClose();
  };

  if (!isOpen) return null;

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const getInviteEmail = () => {
    if (searchQuery.includes("@")) {
      if (isValidEmail(searchQuery)) {
        return searchQuery;
      }
      return searchQuery;
    }
    return `${searchQuery}@gmail.com`;
  };

  const inviteEmail = getInviteEmail();
  const showAutocomplete = searchQuery.length > 0;

  const clearSearch = () => {
    setSearchQuery("");
    inputRef.current?.focus();
  };

  // Wrap the button in forward ref to fix the ref warning
  const CopyLinkButton = forwardRef<HTMLButtonElement>((props, ref) => (
    <Button
      variant="ghost"
      size="sm"
      className="btn-blue"
      onClick={handleCopyLink}
      ref={ref}
      {...props}
    >
      <Link className="w-4 h-4" />
      Copy link
    </Button>
  ));
  CopyLinkButton.displayName = "CopyLinkButton";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      onMouseDown={(e) => e.stopPropagation()}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
      />

      {/* Modal */}
      <div
        ref={modalRef}
        className="relative z-10 w-[800px] h-[480px]"
      >
        <div className="bg-white box-border content-stretch flex flex-col items-start px-0 py-[8px] relative rounded-[16px] size-full">
          <div
            aria-hidden="true"
            className="absolute border border-[#e8e8e8] border-solid inset-[-1px] pointer-events-none rounded-[17px]"
          />

          {/* Header */}
          <div className="relative shrink-0 w-full">
            <div className="size-full">
              <div className="box-border content-stretch flex flex-col items-start px-[24px] pt-[16px] pb-[8px] relative w-full">
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                  <div className="basis-0 content-stretch flex gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                    <p
                      className="basis-0 grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[var(--text-primary)] text-[18px]"
                      style={{
                        fontWeight:
                          "var(--font-weight-semibold)",
                      }}
                    >
                      Invite or Add Assignee
                    </p>
                  </div>

                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                    {/* Copy Link Button */}
                    <Tooltip
                      variant="bottom-right"
                      content={
                        isCopied ? (
                          <SuccessTooltip message="Link copied!" />
                        ) : (
                          "Copy link to invite"
                        )
                      }
                      size="sm"
                      style={isCopied ? "custom" : "default"}
                      forceShow={isCopied}
                    >
                      <CopyLinkButton />
                    </Tooltip>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onClose();
                      }}
                      className="flex items-center justify-center w-[32px] h-[32px] hover:bg-secondary rounded-[8px] transition-colors cursor-pointer shrink-0"
                    >
                      <X
                        className="w-[16px] h-[16px]"
                        fill="var(--text-secondary)"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="relative flex-1 w-full overflow-hidden">
            <div className="flex flex-col size-full">
              <div className="box-border content-stretch flex flex-col items-start px-[24px] py-[8px] relative w-full">
                {/* Input */}
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                  <div
                    className={`bg-white h-[48px] relative rounded-[8px] shrink-0 w-full`}
                  >
                    <div
                      aria-hidden="true"
                      className={`absolute border ${searchQuery ? "border-black" : "border-[#e8e8e8]"} border-solid inset-0 pointer-events-none rounded-[8px]`}
                    />
                    <div className="flex flex-row items-center size-full">
                      <div className="box-border content-stretch flex h-[48px] items-center px-[16px] py-[12px] relative w-full">
                        <input
                          ref={inputRef}
                          type="text"
                          placeholder="Add assignee by email or name"
                          value={searchQuery}
                          onChange={(e) =>
                            setSearchQuery(e.target.value)
                          }
                          className="flex-1 leading-[16px] not-italic text-[var(--text-primary)] text-[14px] tracking-[0.28px] outline-none bg-transparent placeholder:text-[#828282] pr-[8px]"
                          style={{
                            fontWeight:
                              "var(--font-weight-regular)",
                          }}
                        />
                        {searchQuery && (
                          <button
                            onClick={clearSearch}
                            className="shrink-0 flex items-center justify-center w-[16px]"
                          >
                            <X
                              className="w-[16px] h-[16px]"
                              fill="#828282"
                            />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Scrollable Content */}
              <div
                className="flex-1 overflow-y-auto px-[24px] pb-[8px]"
                style={{
                  scrollbarWidth: "thin",
                  scrollbarColor: "#e8e8e8 transparent",
                }}
              >
                {/* Selected Users */}
                {localSelectedUsers.length > 0 && (
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    {localSelectedUsers.map((user) => (
                      <div
                        key={user.id}
                        className="relative shrink-0 w-full bg-white hover:bg-[#FAFBFC] transition-colors"
                      >
                        <div
                          aria-hidden="true"
                          className="absolute border-[#e8e8e8] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
                        />
                        <div className="flex flex-row items-center size-full">
                          <div className="box-border content-stretch flex gap-[10px] items-center p-[8px] relative w-full">
                            <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
                              {/* Avatar */}
                              <div className="relative shrink-0 size-[40px]">
                                {user.isEmailInvite ? (
                                  <div className="flex items-center justify-center size-full rounded-full bg-[#E8E8E8]">
                                    <Mail className="size-[20px] text-[#828282]" />
                                  </div>
                                ) : (
                                  <>
                                    <svg
                                      className="block size-full"
                                      fill="none"
                                      preserveAspectRatio="none"
                                      viewBox="0 0 40 40"
                                    >
                                      <circle
                                        cx="20"
                                        cy="20"
                                        fill={getAvatarColor(
                                          user.name,
                                        )}
                                        r="20"
                                      />
                                    </svg>
                                    <p
                                      className="absolute leading-[24px] left-1/2 not-italic text-[16px] text-center text-nowrap top-[calc(50%-12px)] translate-x-[-50%] whitespace-pre"
                                      style={{
                                        fontWeight:
                                          "var(--font-weight-medium)",
                                        color: "var(--text-primary)",
                                      }}
                                    >
                                      {getInitials(user.name)}
                                    </p>
                                  </>
                                )}
                              </div>

                              {/* Name and Email */}
                              <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0">
                                <div className="content-stretch flex flex-col gap-[4px] items-start justify-center leading-[0] not-italic relative shrink-0 text-nowrap w-full">
                                  {!user.isEmailInvite && (
                                    <div className="flex flex-col justify-center relative shrink-0 text-[var(--text-primary)] text-[14px] tracking-[0.28px]">
                                      <p
                                        className="leading-[16px] text-nowrap whitespace-pre"
                                        style={{
                                          fontWeight:
                                            "var(--font-weight-regular)",
                                        }}
                                      >
                                        {user.name}
                                      </p>
                                    </div>
                                  )}
                                  <div className="flex flex-col justify-center relative shrink-0 text-[var(--text-primary)] text-[14px] tracking-[0.28px]">
                                    <p
                                      className="leading-[16px] text-nowrap whitespace-pre"
                                      style={{
                                        fontWeight:
                                          "var(--font-weight-regular)",
                                      }}
                                    >
                                      {user.email}
                                    </p>
                                  </div>
                                </div>
                              </div>

                              {/* Role Dropdown */}
                              <div className="w-[120px]">
                                <Dropdown
                                  variant="borderless"
                                  size="sm"
                                  options={[
                                    {
                                      value: "assignee",
                                      label: "Assignee",
                                    },
                                    {
                                      value: "viewer",
                                      label: "Viewer",
                                    },
                                  ]}
                                  value={
                                    user.role || "assignee"
                                  }
                                  onChange={(value) =>
                                    handleChangeRole(
                                      user.id,
                                      value as
                                        | "assignee"
                                        | "viewer",
                                    )
                                  }
                                />
                              </div>

                              {/* Delete Button */}
                              <button
                                onClick={() => handleRemoveUser(user.id)}
                                className="content-stretch flex items-start relative shrink-0 w-[32px] cursor-pointer"
                              >
                                <div className="basis-0 grow h-[32px] min-h-px min-w-px relative rounded-[8px] shrink-0 hover:bg-secondary transition-colors">
                                  <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                                    <div className="box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[16px] py-[8px] relative w-full">
                                      <div className="content-stretch flex gap-[10px] items-start relative shrink-0">
                                        <div className="relative shrink-0 size-[16px]">
                                          <Trash2
                                            className="block size-full"
                                            stroke="var(--text-secondary)"
                                            strokeWidth="2"
                                            fill="none"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Empty State */}
                {!showAutocomplete &&
                  localSelectedUsers.length === 0 && (
                    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 w-full h-full">
                      <img
                        src={teamCollaborationImage}
                        alt="Team Collaboration"
                        className="w-[120px] h-[120px]"
                      />
                      <p
                        className="leading-[16px] min-w-full not-italic relative shrink-0 text-[var(--text-primary)] text-[14px] text-center tracking-[0.28px] w-[min-content]"
                        style={{
                          fontWeight:
                            "var(--font-weight-medium)",
                        }}
                      >
                        Assign teammates to this task
                      </p>
                      <p className="leading-[16px] min-w-full not-italic relative shrink-0 text-[#828282] text-[12px] text-center tracking-[0.24px] w-[min-content]">
                        Add existing assignee or invite new ones
                        to collaborate on this task.
                      </p>
                    </div>
                  )}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="relative shrink-0 w-full">
            <div className="size-full">
              <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[24px] py-[16px] relative w-full">
                <Button
                  variant="fill"
                  size="md"
                  className="btn-secondary w-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAssign();
                  }}
                  disabled={localSelectedUsers.length === 0}
                >
                  Assign
                </Button>
              </div>
            </div>
          </div>

          {/* Autocomplete Dropdown */}
          {showAutocomplete && (
            <div className="absolute bg-white left-[24px] rounded-[8px] shadow-lg top-[112px] right-[24px] bottom-[80px] overflow-hidden z-20 border border-[#e8e8e8] flex flex-col">
              <div
                className="box-border content-stretch flex flex-col items-start overflow-y-auto px-0 py-[8px] relative flex-1"
                style={{
                  scrollbarWidth: "thin",
                  scrollbarColor: "#e8e8e8 transparent",
                }}
              >
                {/* Invite option */}
                {searchQuery && (() => {
                  const isInviteAlreadyAdded = localSelectedUsers.find(
                    (u) => u.email === inviteEmail,
                  );

                  return (
                    <div
                      onClick={() =>
                        !isInviteAlreadyAdded && handleInviteByEmail(inviteEmail)
                      }
                      className={`relative shrink-0 w-full transition-colors ${
                        isInviteAlreadyAdded
                          ? "bg-white cursor-not-allowed"
                          : "bg-white hover:bg-[#FAFBFC] cursor-pointer"
                      }`}
                    >
                      <div
                        aria-hidden="true"
                        className="absolute border-[#e8e8e8] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
                      />
                      <div className="flex flex-row items-center size-full">
                        <div className="box-border content-stretch flex gap-[10px] items-center p-[8px] relative w-full">
                          <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
                            <div className="relative shrink-0 size-[40px]">
                              <div className="flex items-center justify-center size-full rounded-full bg-[#E8E8E8]">
                                <Mail className="size-[20px] text-[#828282]" />
                              </div>
                            </div>
                            <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0">
                              <div className="content-stretch flex flex-col gap-[4px] items-start justify-center leading-[0] not-italic relative shrink-0 text-nowrap w-full">
                                <div className="flex flex-col justify-center relative shrink-0 text-[14px] tracking-[0.28px]">
                                  <p
                                    className="leading-[16px] text-nowrap whitespace-pre text-[var(--text-primary)]"
                                    style={{
                                      fontWeight:
                                        "var(--font-weight-regular)",
                                    }}
                                  >
                                    Invite: <HighlightedText text={inviteEmail} highlight={searchQuery} />
                                  </p>
                                </div>
                              </div>
                            </div>

                            {isInviteAlreadyAdded && (
                              <div className="flex items-center shrink-0 w-[120px]">
                                <span
                                  className="text-[12px] text-[var(--text-secondary)] tracking-[0.24px] leading-[16px]"
                                  style={{
                                    fontWeight:
                                      "var(--font-weight-regular)",
                                  }}
                                >
                                  already added
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })()}

                {/* More on TaskTag - Recommended Users */}
                {(() => {
                  const filtered = recommendedUsers.filter(
                    (user) =>
                      user.name
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase()) ||
                      user.email
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase()),
                  );

                  if (filtered.length === 0) return null;

                  return (
                    <div className="relative shrink-0 w-full">
                      {/* Section Header */}
                      <div className="px-[16px] py-[8px]">
                        <p
                          className="text-[12px] tracking-[0.24px] leading-[16px] text-[var(--text-secondary)]"
                          style={{
                            fontWeight: "var(--font-weight-medium)",
                          }}
                        >
                          MORE ON TASKTAG
                        </p>
                      </div>

                      {/* Users */}
                      {filtered.map((user) => {
                        const isAlreadyAdded = localSelectedUsers.find(
                          (u) => u.id === user.id || u.email === user.email,
                        );

                        return (
                          <UserItem
                            key={user.id}
                            user={user}
                            searchQuery={searchQuery}
                            isAlreadyAdded={!!isAlreadyAdded}
                            onClick={() => !isAlreadyAdded && handleAddUser(user)}
                          />
                        );
                      })}
                    </div>
                  );
                })()}

                {/* Collapsible Contact Groups */}
                {contactGroups.map((group) => {
                  const filteredMembers = group.members.filter(
                    (user) =>
                      user.name
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase()) ||
                      user.email
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase()),
                  );

                  if (filteredMembers.length === 0) return null;

                  const isExpanded = expandedGroups[group.id];

                  return (
                    <div key={group.id} className="relative shrink-0 w-full">
                      {/* Group Header - Collapsible */}
                      <div
                        onClick={() => toggleGroup(group.id)}
                        className="px-[16px] py-[8px] cursor-pointer hover:bg-[#FAFBFC] transition-colors flex items-center gap-[8px]"
                      >
                        {isExpanded ? (
                          <ChevronDown className="w-[16px] h-[16px] text-[var(--text-secondary)]" />
                        ) : (
                          <ChevronRight className="w-[16px] h-[16px] text-[var(--text-secondary)]" />
                        )}
                        <p
                          className="text-[14px] tracking-[0.28px] leading-[16px] text-[var(--text-primary)]"
                          style={{
                            fontWeight: "var(--font-weight-medium)",
                          }}
                        >
                          {group.name}
                        </p>
                        <span className="text-[12px] text-[var(--text-secondary)]">
                          {filteredMembers.length} member{filteredMembers.length !== 1 ? "s" : ""}
                        </span>
                      </div>

                      {/* Group Members - Show when expanded */}
                      {isExpanded && filteredMembers.map((user) => {
                        const isAlreadyAdded = localSelectedUsers.find(
                          (u) => u.id === user.id || u.email === user.email,
                        );

                        return (
                          <UserItem
                            key={user.id}
                            user={user}
                            searchQuery={searchQuery}
                            isAlreadyAdded={!!isAlreadyAdded}
                            onClick={() => !isAlreadyAdded && handleAddUser(user)}
                          />
                        );
                      })}
                    </div>
                  );
                })}

                {/* Individual Contacts */}
                {(() => {
                  const filtered = individualContacts.filter(
                    (user) =>
                      user.name
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase()) ||
                      user.email
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase()),
                  );

                  if (filtered.length === 0) return null;

                  return filtered.map((user) => {
                    const isAlreadyAdded = localSelectedUsers.find(
                      (u) => u.id === user.id || u.email === user.email,
                    );

                    return (
                      <UserItem
                        key={user.id}
                        user={user}
                        searchQuery={searchQuery}
                        isAlreadyAdded={!!isAlreadyAdded}
                        onClick={() => !isAlreadyAdded && handleAddUser(user)}
                      />
                    );
                  });
                })()}
              </div>

              {/* More on TaskTag Footer */}
              <div className="relative shrink-0 w-full border-t border-[#e8e8e8]">
                <div className="px-[16px] py-[12px] flex items-center justify-center gap-[8px]">
                  <p
                    className="text-[12px] tracking-[0.24px] leading-[16px] text-[var(--text-secondary)]"
                    style={{
                      fontWeight: "var(--font-weight-regular)",
                    }}
                  >
                    More on
                  </p>
                  <p
                    className="text-[12px] tracking-[0.24px] leading-[16px] text-[var(--text-primary)]"
                    style={{
                      fontWeight: "var(--font-weight-semibold)",
                    }}
                  >
                    TaskTag
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
