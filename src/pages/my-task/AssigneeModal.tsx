import { forwardRef, useEffect, useRef, useState } from "react";
import {
  getInitials,
  getAvatarColor,
} from "../../utils/avatar";
import {
  Mail,
  X,
  Trash2,
  Link,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import teamCollaborationImage from "figma:asset/231f46d29d335b70c14e6a1c3a239decf66583f3.png";
import { Button } from "../../components/Button";
import { Dropdown } from "../../components/Dropdown";
import { Tooltip } from "../../components/Tooltip";
import { SuccessTooltip } from "../../components/SuccessTooltip";
import { toast } from "sonner@2.0.3";
import { Toast } from "../../components/Toast";

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

// Helper component to highlight search text - ONLY for names, NEVER for emails
function HighlightedText({
  text,
  highlight,
}: {
  text: string;
  highlight: string;
}) {
  // No highlighting if no search query
  if (!highlight.trim()) {
    return <>{text}</>;
  }

  const lowerText = text.toLowerCase();
  const lowerHighlight = highlight.toLowerCase();

  // Find the position of the search term in the text
  const index = lowerText.indexOf(lowerHighlight);

  // If search term is not found, return plain text
  if (index === -1) {
    return <>{text}</>;
  }

  // Split the text into parts: before, match, and after
  const beforeMatch = text.substring(0, index);
  const matchedPart = text.substring(
    index,
    index + highlight.length,
  );
  const afterMatch = text.substring(index + highlight.length);

  return (
    <>
      {beforeMatch}
      <span className="bg-[var(--bright-yellow)] px-[var(--spacing-4)] rounded-[var(--radius-2)]">
        {matchedPart}
      </span>
      {afterMatch}
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
          ? "bg-[var(--white)] cursor-not-allowed"
          : "bg-[var(--white)] hover:bg-[var(--grey-01)] cursor-pointer"
      }`}
    >
      <div
        aria-hidden="true"
        className="absolute border-[var(--grey-03)] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[var(--spacing-8)] items-center p-[var(--spacing-8)] relative w-full">
          <div className="basis-0 content-stretch flex gap-[var(--spacing-8)] grow items-center min-h-px min-w-px relative shrink-0">
            <div className="relative shrink-0 size-[var(--size-md)]">
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
                className="absolute leading-[24px] left-1/2 not-italic text-[var(--text-base)] text-center text-nowrap top-[calc(50%-12px)] translate-x-[-50%] whitespace-pre"
                style={{
                  fontWeight: "var(--font-weight-medium)",
                  color: "var(--text-primary)",
                }}
              >
                {getInitials(user.name)}
              </p>
            </div>

            <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0">
              <div className="content-stretch flex flex-col gap-[var(--spacing-4)] items-start justify-center leading-[0] not-italic relative shrink-0 text-nowrap w-full">
                {/* Member Name - with highlighting */}
                <div className="flex flex-col justify-center relative shrink-0 text-[var(--text-label)]">
                  <p
                    className="leading-[16px] text-nowrap whitespace-pre text-[var(--text-primary)]"
                    style={{
                      fontWeight: "var(--font-weight-regular)",
                    }}
                  >
                    <HighlightedText
                      text={user.name}
                      highlight={searchQuery}
                    />
                  </p>
                </div>
                {/* Member Email - NO highlighting, plain text */}
                <div className="flex flex-col justify-center relative shrink-0">
                  <p
                    className={`text-nowrap whitespace-pre ${
                      user.isEmailInvite
                        ? "text-[var(--text-label)] text-[var(--text-primary)]"
                        : "text-web-metadata-primary text-[var(--grey-05)]"
                    }`}
                    style={{
                      fontWeight: "var(--font-weight-regular)",
                    }}
                  >
                    {user.email}
                  </p>
                </div>
              </div>
            </div>

            {isAlreadyAdded && (
              <div className="flex items-center shrink-0 w-[96px]">
                <span
                  className="text-web-metadata-primary text-[var(--grey-05)]"
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
  const [localSelectedUsers, setLocalSelectedUsers] = useState<
    User[]
  >([]);
  const [isCopied, setIsCopied] = useState(false);
  const [expandedGroups, setExpandedGroups] = useState<
    Record<string, boolean>
  >({
    chelsea: true, // Default: expanded
  });

  // Toggle group expand/collapse
  const toggleGroup = (groupId: string) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [groupId]: !prev[groupId],
    }));
  };

  // Handle group selection - add all members or remove all members
  const handleGroupClick = (
    group: (typeof contactGroups)[0],
  ) => {
    const allMembersAdded = group.members.every((member) =>
      localSelectedUsers.some(
        (u) => u.id === member.id || u.email === member.email,
      ),
    );

    if (allMembersAdded) {
      // Remove all group members
      setLocalSelectedUsers(
        localSelectedUsers.filter(
          (u) =>
            !group.members.some(
              (m) => m.id === u.id || m.email === u.email,
            ),
        ),
      );
    } else {
      // Add all group members
      const membersToAdd = group.members.filter(
        (member) =>
          !localSelectedUsers.some(
            (u) =>
              u.id === member.id || u.email === member.email,
          ),
      );
      setLocalSelectedUsers([
        ...membersToAdd.map((m) => ({
          ...m,
          role: "assignee" as const,
        })),
        ...localSelectedUsers,
      ]);
    }
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
    // Show toast only if there are email invites
    const emailInvites = localSelectedUsers.filter(u => u.isEmailInvite);
    if (emailInvites.length > 0) {
      toast.custom(() => (
        <Toast 
          variant="title-only" 
          type="success" 
          title="Invite Sent"
          duration={3000}
        />
      ), {
        duration: 3000,
        position: 'bottom-center',
      });
    }
    
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
  const CopyLinkButton = forwardRef<HTMLButtonElement>(
    (props, ref) => (
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
    ),
  );
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
        className="absolute inset-0 bg-[var(--overlay)]"
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
        <div className="bg-[var(--white)] box-border content-stretch flex flex-col items-start px-0 py-[var(--spacing-8)] relative rounded-[var(--radius-16)] size-full">
          <div
            aria-hidden="true"
            className="absolute border border-[var(--grey-03)] border-solid inset-[-1px] pointer-events-none rounded-[17px]"
          />

          {/* Header */}
          <div className="relative shrink-0 w-full">
            <div className="size-full">
              <div className="box-border content-stretch flex flex-col items-start px-[var(--spacing-24)] pt-[var(--spacing-16)] pb-[var(--spacing-8)] relative w-full">
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                  <div className="basis-0 content-stretch flex gap-[var(--spacing-8)] grow items-start min-h-px min-w-px relative shrink-0">
                    <p
                      className="basis-0 grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[var(--text-primary)] text-[var(--text-h3)]"
                      style={{
                        fontWeight:
                          "var(--font-weight-semibold)",
                      }}
                    >
                      Invite or Add Assignee
                    </p>
                  </div>

                  <div className="content-stretch flex gap-[var(--spacing-8)] items-center relative shrink-0">
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
                      className="flex items-center justify-center size-[var(--size-sm)] hover:bg-secondary rounded-[var(--radius-8)] transition-colors cursor-pointer shrink-0"
                    >
                      <X
                        className="size-[var(--text-base)]"
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
              <div className="box-border content-stretch flex flex-col items-start px-[var(--spacing-24)] py-[var(--spacing-8)] relative w-full">
                {/* Input */}
                <div className="content-stretch flex flex-col gap-[var(--spacing-8)] items-start relative shrink-0 w-full">
                  <div
                    className={`bg-[var(--white)] h-[var(--size-lg)] relative rounded-[var(--radius-8)] shrink-0 w-full`}
                  >
                    <div
                      aria-hidden="true"
                      className={`absolute border ${searchQuery ? "border-[var(--black)]" : "border-[var(--grey-03)]"} border-solid inset-0 pointer-events-none rounded-[var(--radius-8)]`}
                    />
                    <div className="flex flex-row items-center size-full">
                      <div className="box-border content-stretch flex h-[var(--size-lg)] items-center px-[var(--spacing-16)] py-[var(--spacing-12)] relative w-full">
                        <input
                          ref={inputRef}
                          type="text"
                          placeholder="Add assignee by email or name"
                          value={searchQuery}
                          onChange={(e) =>
                            setSearchQuery(e.target.value)
                          }
                          className="flex-1 leading-[16px] not-italic text-[var(--text-primary)] text-[var(--text-label)] outline-none bg-transparent placeholder:text-[var(--grey-05)] pr-[var(--spacing-8)]"
                          style={{
                            fontWeight:
                              "var(--font-weight-regular)",
                          }}
                        />
                        {searchQuery && (
                          <button
                            onClick={clearSearch}
                            className="shrink-0 flex items-center justify-center size-[var(--text-base)]"
                          >
                            <X
                              className="size-[var(--text-base)]"
                              fill="var(--grey-05)"
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
                className="flex-1 overflow-y-auto px-[var(--spacing-24)] pb-[var(--spacing-8)]"
                style={{
                  scrollbarWidth: "thin",
                  scrollbarColor: "var(--grey-03) transparent",
                }}
              >
                {/* Selected Users */}
                {localSelectedUsers.length > 0 && (
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    {localSelectedUsers.map((user) => (
                      <div
                        key={user.id}
                        className="relative shrink-0 w-full bg-[var(--white)] hover:bg-[var(--grey-01)] transition-colors"
                      >
                        <div
                          aria-hidden="true"
                          className="absolute border-[var(--grey-03)] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
                        />
                        <div className="flex flex-row items-center size-full">
                          <div className="box-border content-stretch flex gap-[var(--spacing-8)] items-center p-[var(--spacing-8)] relative w-full">
                            <div className="basis-0 content-stretch flex gap-[var(--spacing-8)] grow items-center min-h-px min-w-px relative shrink-0">
                              {/* Avatar */}
                              <div className="relative shrink-0 size-[var(--size-md)]">
                                {user.isEmailInvite ? (
                                  <div className="flex items-center justify-center size-full rounded-full bg-[var(--grey-03)]">
                                    <Mail className="size-[var(--spacing-20)] text-[var(--grey-05)]" />
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
                                      className="absolute leading-[24px] left-1/2 not-italic text-[var(--text-base)] text-center text-nowrap top-[calc(50%-12px)] translate-x-[-50%] whitespace-pre"
                                      style={{
                                        fontWeight:
                                          "var(--font-weight-medium)",
                                        color:
                                          "var(--text-primary)",
                                      }}
                                    >
                                      {getInitials(user.name)}
                                    </p>
                                  </>
                                )}
                              </div>

                              {/* Name and Email */}
                              <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0">
                                <div className="content-stretch flex flex-col gap-[var(--spacing-4)] items-start justify-center leading-[0] not-italic relative shrink-0 text-nowrap w-full">
                                  {!user.isEmailInvite && (
                                    <div className="flex flex-col justify-center relative shrink-0 text-[var(--text-primary)] text-[var(--text-label)]">
                                      <p
                                        className="leading-[16px] text-nowrap whitespace-pre text-[var(--text-primary)]"
                                        style={{
                                          fontWeight:
                                            "var(--font-weight-regular)",
                                        }}
                                      >
                                        {user.name}
                                      </p>
                                    </div>
                                  )}
                                  <div className="flex flex-col justify-center relative shrink-0 text-[var(--text-primary)] text-[var(--text-label)]">
                                    <p
                                      className={`text-nowrap whitespace-pre ${
                                        user.isEmailInvite
                                          ? "text-[var(--text-label)] text-[var(--text-primary)]"
                                          : "text-web-metadata-primary text-[var(--grey-05)]"
                                      }`}
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
                              <div className="w-[104px]">
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
                                onClick={() =>
                                  handleRemoveUser(user.id)
                                }
                                className="content-stretch flex items-start relative shrink-0 w-[var(--size-sm)] cursor-pointer"
                              >
                                <div className="basis-0 grow h-[var(--size-sm)] min-h-px min-w-px relative rounded-[var(--radius-8)] shrink-0 hover:bg-secondary transition-colors">
                                  <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                                    <div className="box-border content-stretch flex gap-[var(--spacing-8)] h-[var(--size-sm)] items-center justify-center px-[var(--spacing-16)] py-[var(--spacing-8)] relative w-full">
                                      <div className="content-stretch flex gap-[var(--spacing-8)] items-start relative shrink-0">
                                        <div className="relative shrink-0 size-[var(--text-base)]">
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
                    <div className="content-stretch flex flex-col gap-[var(--spacing-8)] items-center justify-center relative shrink-0 w-full h-full">
                      <img
                        src={teamCollaborationImage}
                        alt="Team Collaboration"
                        className="w-[120px] h-[120px]"
                      />
                      <p
                        className="leading-[16px] min-w-full relative shrink-0 text-[var(--text-primary)] text-[var(--text-label)] text-center w-[min-content]"
                        style={{
                          fontWeight:
                            "var(--font-weight-medium)",
                        }}
                      >
                        Assign teammates to this task
                      </p>
                      <p className="text-[var(--grey-05)] min-w-full relative shrink-0 text-center w-[min-content]">
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
              <div className="box-border content-stretch flex flex-col gap-[var(--spacing-8)] items-start px-[var(--spacing-24)] py-[var(--spacing-16)] relative w-full">
                <Button
                  variant="fill"
                  size="lg"
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
            <div className="absolute bg-[var(--white)] left-[var(--spacing-24)] rounded-[var(--radius-8)] shadow-lg top-[112px] right-[var(--spacing-24)] bottom-[80px] overflow-hidden z-20 border border-[var(--grey-03)] flex flex-col">
              <div
                className="box-border content-stretch flex flex-col items-start overflow-y-auto px-0 py-[var(--spacing-8)] relative flex-1"
                style={{
                  scrollbarWidth: "thin",
                  scrollbarColor: "var(--grey-03) transparent",
                }}
              >
                {/* 1. Invite option (Email) */}
                {searchQuery &&
                  (() => {
                    const isInviteAlreadyAdded =
                      localSelectedUsers.find(
                        (u) => u.email === inviteEmail,
                      );

                    return (
                      <div
                        onClick={() =>
                          !isInviteAlreadyAdded &&
                          handleInviteByEmail(inviteEmail)
                        }
                        className={`relative shrink-0 w-full transition-colors ${
                          isInviteAlreadyAdded
                            ? "bg-[var(--white)] cursor-not-allowed"
                            : "bg-[var(--white)] hover:bg-[var(--grey-01)] cursor-pointer"
                        }`}
                      >
                        <div
                          aria-hidden="true"
                          className="absolute border-[var(--grey-03)] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
                        />
                        <div className="flex flex-row items-center size-full">
                          <div className="box-border content-stretch flex gap-[var(--spacing-8)] items-center p-[var(--spacing-8)] relative w-full">
                            <div className="basis-0 content-stretch flex gap-[var(--spacing-8)] grow items-center min-h-px min-w-px relative shrink-0">
                              <div className="relative shrink-0 size-[var(--size-md)]">
                                <div className="flex items-center justify-center size-full rounded-full bg-[var(--grey-03)]">
                                  <Mail className="size-[var(--spacing-20)] text-[var(--grey-05)]" />
                                </div>
                              </div>
                              <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0">
                                <div className="content-stretch flex flex-col gap-[var(--spacing-4)] items-start justify-center leading-[0] not-italic relative shrink-0 text-nowrap w-full">
                                  <div className="flex flex-col justify-center relative shrink-0 text-[var(--text-label)]">
                                    <p
                                      className="leading-[16px] text-nowrap whitespace-pre text-[var(--text-primary)]"
                                      style={{
                                        fontWeight:
                                          "var(--font-weight-regular)",
                                      }}
                                    >
                                      Invite: {inviteEmail}
                                    </p>
                                  </div>
                                </div>
                              </div>

                              {isInviteAlreadyAdded && (
                                <div className="flex items-center shrink-0 w-[96px]">
                                  <span
                                    className="text-web-metadata-primary text-[var(--grey-05)]"
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

                {/* 2. Collapsible Contact Groups */}
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
                    <div
                      key={group.id}
                      className="relative shrink-0 w-full"
                    >
                      {/* Group Header with Chevron on left and divider */}
                      <div className="relative flex items-center w-full">
                        <div
                          aria-hidden="true"
                          className="absolute border-[var(--grey-03)] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
                        />

                        {/* Chevron toggle button - 40x40 container with hover effect */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleGroup(group.id);
                          }}
                          className="shrink-0 flex items-center justify-center size-[var(--size-md)] ml-[var(--spacing-8)] my-[var(--spacing-8)] cursor-pointer rounded-[var(--radius-8)] hover:bg-[var(--secondary)] transition-colors"
                        >
                          {isExpanded ? (
                            <ChevronUp className="size-[var(--spacing-20)] text-[var(--text-secondary)]" />
                          ) : (
                            <ChevronDown className="size-[var(--spacing-20)] text-[var(--text-secondary)]" />
                          )}
                        </button>

                        {/* Group name and member count - clickable to select/deselect all */}
                        <div
                          onClick={() =>
                            handleGroupClick(group)
                          }
                          className="flex-1 py-[var(--spacing-8)] pr-[var(--spacing-16)] ml-[var(--spacing-8)] cursor-pointer hover:bg-[var(--grey-01)] transition-colors flex flex-col gap-[var(--spacing-4)]"
                        >
                          <p
                            className="text-[var(--text-label)]"
                            style={{
                              fontWeight:
                                "var(--font-weight-medium)",
                            }}
                          >
                            {group.name}
                          </p>
                          <span
                            className="text-web-metadata-primary text-[var(--grey-05)]"
                            style={{
                              fontWeight:
                                "var(--font-weight-regular)",
                            }}
                          >
                            {filteredMembers.length} member
                            {filteredMembers.length !== 1
                              ? "s"
                              : ""}
                          </span>
                        </div>
                      </div>

                      {/* Group Members - Full-width divider */}
                      {isExpanded && (
                        <div>
                          {filteredMembers.map((user) => {
                            const isAlreadyAdded =
                              localSelectedUsers.find(
                                (u) =>
                                  u.id === user.id ||
                                  u.email === user.email,
                              );

                            return (
                              <div
                                key={user.id}
                                onClick={() =>
                                  !isAlreadyAdded &&
                                  handleAddUser(user)
                                }
                                className={`relative shrink-0 w-full transition-colors ${
                                  isAlreadyAdded
                                    ? "bg-[var(--white)] cursor-not-allowed"
                                    : "bg-[var(--white)] hover:bg-[var(--grey-01)] cursor-pointer"
                                }`}
                              >
                                {/* Full-width divider */}
                                <div
                                  aria-hidden="true"
                                  className="absolute border-[var(--grey-03)] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
                                />

                                <div className="flex flex-row items-center size-full">
                                  <div className="box-border content-stretch flex gap-[var(--spacing-8)] items-center py-[var(--spacing-8)] pr-[var(--spacing-8)] pl-[var(--spacing-56)] relative w-full">
                                    <div className="basis-0 content-stretch flex gap-[var(--spacing-8)] grow items-center min-h-px min-w-px relative shrink-0">
                                      {/* Avatar */}
                                      <div className="relative shrink-0 size-[var(--size-md)]">
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
                                          className="absolute leading-[24px] left-1/2 not-italic text-[var(--text-base)] text-center text-nowrap top-[calc(50%-12px)] translate-x-[-50%] whitespace-pre"
                                          style={{
                                            fontWeight:
                                              "var(--font-weight-medium)",
                                            color:
                                              "var(--text-primary)",
                                          }}
                                        >
                                          {getInitials(
                                            user.name,
                                          )}
                                        </p>
                                      </div>

                                      {/* Name and Email */}
                                      <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0">
                                        <div className="content-stretch flex flex-col gap-[var(--spacing-4)] items-start justify-center leading-[0] not-italic relative shrink-0 text-nowrap w-full">
                                          <div className="flex flex-col justify-center relative shrink-0 text-[var(--text-label)]">
                                            <p
                                              className="leading-[16px] text-nowrap whitespace-pre text-[var(--text-primary)]"
                                              style={{
                                                fontWeight:
                                                  "var(--font-weight-regular)",
                                              }}
                                            >
                                              <HighlightedText
                                                text={user.name}
                                                highlight={
                                                  searchQuery
                                                }
                                              />
                                            </p>
                                          </div>
                                          <div className="flex flex-col justify-center relative shrink-0">
                                            <p className="text-nowrap whitespace-pre text-web-metadata-primary text-[var(--grey-05)]">
                                              {user.email}
                                            </p>
                                          </div>
                                        </div>
                                      </div>

                                      {isAlreadyAdded && (
                                        <div className="flex items-center shrink-0 w-[96px]">
                                          <span
                                            className="text-web-metadata-primary text-[var(--grey-05)]"
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
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* 3. Individual Contacts (Member List) */}
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
                    const isAlreadyAdded =
                      localSelectedUsers.find(
                        (u) =>
                          u.id === user.id ||
                          u.email === user.email,
                      );

                    return (
                      <UserItem
                        key={user.id}
                        user={user}
                        searchQuery={searchQuery}
                        isAlreadyAdded={!!isAlreadyAdded}
                        onClick={() =>
                          !isAlreadyAdded && handleAddUser(user)
                        }
                      />
                    );
                  });
                })()}

                {/* 4. More on TaskTag - Recommended Users (Last) */}
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
                      {/* Section Header - Aligned with avatar */}
                      <div className="px-[var(--spacing-8)] py-[var(--spacing-12)]">
                        <p
                          className="text-[var(--grey-05)]"
                          style={{
                            fontWeight:
                              "var(--font-weight-regular)",
                          }}
                        >
                          More on Task Tag
                        </p>
                      </div>

                      {/* Users */}
                      {filtered.map((user) => {
                        const isAlreadyAdded =
                          localSelectedUsers.find(
                            (u) =>
                              u.id === user.id ||
                              u.email === user.email,
                          );

                        return (
                          <UserItem
                            key={user.id}
                            user={user}
                            searchQuery={searchQuery}
                            isAlreadyAdded={!!isAlreadyAdded}
                            onClick={() =>
                              !isAlreadyAdded &&
                              handleAddUser(user)
                            }
                          />
                        );
                      })}
                    </div>
                  );
                })()}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}