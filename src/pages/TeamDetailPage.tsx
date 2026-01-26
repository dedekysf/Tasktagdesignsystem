import { useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  MoreVertical,
  MapPin,
  Search,
  Plus,
  CreditCard,
  Users,
  File,
  Link as LinkIcon,
  UserPlus,
  ListFilter,
  X,
  MessageSquare,
  ChevronDown,
  ArrowUpDown,
  Mail,
  Repeat,
  Trash2,
} from "lucide-react";
import { Button } from "../components/Button";
import { TabItem } from "../components/TabItem";
import { TaskSectionHeader } from "../components/TaskSectionHeader";
import TabContent from "../imports/TabContent";
import { getAvatarProps } from "../utils/avatarUtils";
import { SuccessTooltip } from "../components/SuccessTooltip";
import { TextInput } from "../components/TextInput";
import { Tooltip as MainTooltip } from "../components/Tooltip";
import { RoleDropdown } from "../components/team-detail/RoleDropdown";
import { SkillsCell } from "../components/team-detail/SkillsCell";
import { Modal } from "../components/Modal";
import { Toast } from "../components/Toast";
import { AssigneeModal } from "./my-task/AssigneeModal";
import { RadioButton } from "../components/RadioButton";
import { Tag } from "../components/Tag";
import { MessageMemberDropdown } from "../components/MessageMemberDropdown";
import { createPortal } from "react-dom";

type MemberRole = "Owner" | "Admin" | "Member";
type FilterRole = "all" | "Admin" | "Member";
type ActiveTab = "details" | "members" | "invoice";

interface Member {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: MemberRole;
  skills?: string[];
  avatarUrl?: string;
}

interface PendingInvite {
  id: string;
  email?: string;
  name?: string;
  invitedBy: string;
  dateSent: string;
  expirationDate: string;
  role: MemberRole;
  avatarUrl?: string;
  isTaskTagUser?: boolean;
}

const formatDate = (date: Date): string => {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const formatDateForDisplay = (isoString: string): string => {
  try {
    const date = new Date(isoString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return isoString;
  }
};

const isExpired = (dateStr: string): boolean => {
  const expDate = new Date(dateStr);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  expDate.setHours(0, 0, 0, 0);
  return expDate < today;
};

const getTodayDate = (): string => {
  return new Date().toISOString();
};

const getSevenDaysLaterDate = (): string => {
  const sevenDaysLater = new Date();
  sevenDaysLater.setDate(sevenDaysLater.getDate() + 7);
  return formatDate(sevenDaysLater);
};

export default function TeamDetailPage() {
  const [members, setMembers] = useState<Member[]>([
    {
      id: "1",
      name: "Melissa Monroe",
      email: "melissamonroe@gmail.com",
      phone: "232-946-1254",
      skills: [],
      role: "Owner",
    },
    {
      id: "2",
      name: "Carlos Roberto",
      email: "carlosroberto@gmail.com",
      phone: "736-967-5990",
      skills: ["Plumber", "Electrician", "HVAC", "Carpenter"],
      role: "Member",
    },
    {
      id: "3",
      name: "Chelsea Janson",
      email: "chelseajanson@gmail.com",
      phone: "311-972-1741",
      skills: ["Designer", "Developer", "Manager"],
      role: "Member",
    },
    {
      id: "4",
      name: "Logan Jack",
      email: "loganjack@gmail.com",
      phone: "230-656-5436",
      skills: ["Plumber", "Electrician"],
      role: "Member",
    },
    {
      id: "5",
      name: "Chelsea Smith",
      email: "chelseasmith@gmail.com",
      phone: "201-582-9845",
      skills: [
        "Carpenter",
        "Electrician",
        "Painter",
        "Roofer",
        "Mason",
      ],
      role: "Admin",
    },
    {
      id: "6",
      name: "John Davis",
      email: "johndavis@gmail.com",
      phone: "555-123-4567",
      skills: ["HVAC", "Plumber"],
      role: "Member",
    },
    {
      id: "7",
      name: "Sarah Wilson",
      email: "sarahwilson@gmail.com",
      phone: "555-234-5678",
      skills: ["Designer", "Developer", "Manager", "Analyst"],
      role: "Member",
    },
    {
      id: "8",
      name: "Mike Johnson",
      email: "mikejohnson@gmail.com",
      phone: "555-345-6789",
      skills: ["Electrician", "Carpenter", "Plumber"],
      role: "Admin",
    },
  ]);

  const [pendingInvites, setPendingInvites] = useState<
    PendingInvite[]
  >([
    {
      id: "1",
      email: "asdasdf@gmail.com",
      invitedBy: "Melissa Monroe",
      dateSent: "Jan 6, 2026",
      expirationDate: "Jan 13, 2026",
      role: "Member",
      isTaskTagUser: false,
    },
    {
      id: "2",
      email: "aa@gmail.com",
      invitedBy: "Melissa Monroe",
      dateSent: "Jan 3, 2026",
      expirationDate: "Jan 10, 2026",
      role: "Member",
      isTaskTagUser: false,
    },
    {
      id: "3",
      email: "abcd@gmail.com",
      invitedBy: "Melissa Monroe",
      dateSent: "Dec 30, 2025",
      expirationDate: "Jan 6, 2026",
      role: "Admin",
      isTaskTagUser: false,
    },
  ]);

  const [activeExpanded, setActiveExpanded] = useState(true);
  const [pendingExpanded, setPendingExpanded] = useState(true);
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] =
    useState<FilterRole>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [removeInviteModal, setRemoveInviteModal] = useState<{
    open: boolean;
    inviteId: string;
    email: string;
    name?: string;
  }>({ open: false, inviteId: "", email: "", name: "" });
  const [removeMemberModal, setRemoveMemberModal] = useState<{
    open: boolean;
    memberId: string;
    memberName: string;
  }>({ open: false, memberId: "", memberName: "" });
  const [updateRoleModal, setUpdateRoleModal] = useState<{
    open: boolean;
    memberId: string;
    newRole: MemberRole;
  }>({ open: false, memberId: "", newRole: "Member" });
  const [linkCopiedVisible, setLinkCopiedVisible] =
    useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastVisible, setToastVisible] = useState(false);
  const [inviteModalOpen, setInviteModalOpen] = useState(false);
  const [
    messageMemberDropdownOpen,
    setMessageMemberDropdownOpen,
  ] = useState(false);
  const messageMemberButtonRef =
    useRef<HTMLButtonElement>(null);
  const messageMemberDropdownRef = useRef<HTMLDivElement>(null);
  const filterRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] =
    useState<ActiveTab>("members");
  const [nameSortDirection, setNameSortDirection] = useState<
    "asc" | "desc" | null
  >(null);
  const [dateSentSortDirection, setDateSentSortDirection] =
    useState<"asc" | "desc" | null>(null);
  const [openDropdownMemberId, setOpenDropdownMemberId] =
    useState<string | null>(null);
  const [hoveredMemberId, setHoveredMemberId] = useState<
    string | null
  >(null);

  const activeFilterCount =
    (selectedFilter !== "all" ? 1 : 0) + (searchQuery ? 1 : 0);
  const hasActiveFilters = activeFilterCount > 0;

  const filteredMembers =
    selectedFilter === "all"
      ? members
      : members.filter((m) => m.role === selectedFilter);

  const filteredInvites =
    selectedFilter === "all"
      ? pendingInvites
      : pendingInvites.filter(
          (inv) => inv.role === selectedFilter,
        );

  const searchFilteredMembers = filteredMembers.filter(
    (m) =>
      m.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      m.email
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      (m.phone &&
        m.phone
          .toLowerCase()
          .includes(searchQuery.toLowerCase())),
  );

  const searchFilteredInvites = filteredInvites.filter(
    (invite) => {
      const displayName = invite.name || invite.email || "";
      return (
        displayName
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        (invite.email &&
          invite.email
            .toLowerCase()
            .includes(searchQuery.toLowerCase())) ||
        invite.invitedBy
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      );
    },
  );

  const sortedMembers = nameSortDirection
    ? (() => {
        const owners = searchFilteredMembers.filter(
          (m) => m.role === "Owner",
        );
        const nonOwners = searchFilteredMembers.filter(
          (m) => m.role !== "Owner",
        );

        const sortedNonOwners = [...nonOwners].sort((a, b) => {
          const comparison = a.name.localeCompare(b.name);
          return nameSortDirection === "asc"
            ? comparison
            : -comparison;
        });

        return [...owners, ...sortedNonOwners];
      })()
    : searchFilteredMembers;

  const sortedInvites = dateSentSortDirection
    ? [...searchFilteredInvites].sort((a, b) => {
        const dateA = new Date(a.dateSent).getTime();
        const dateB = new Date(b.dateSent).getTime();
        const comparison = dateA - dateB;
        return dateSentSortDirection === "asc"
          ? comparison
          : -comparison;
      })
    : searchFilteredInvites;

  const handleNameSort = () => {
    if (nameSortDirection === null) {
      setNameSortDirection("asc");
    } else if (nameSortDirection === "asc") {
      setNameSortDirection("desc");
    } else {
      setNameSortDirection(null);
    }
  };

  const handleDateSentSort = () => {
    if (dateSentSortDirection === null) {
      setDateSentSortDirection("asc");
    } else if (dateSentSortDirection === "asc") {
      setDateSentSortDirection("desc");
    } else {
      setDateSentSortDirection(null);
    }
  };

  const handleRemoveInvite = (
    inviteId: string,
    email: string,
    name?: string,
  ) => {
    setRemoveInviteModal({ open: true, inviteId, email, name });
  };

  const handleConfirmRemoveInvite = () => {
    setPendingInvites(
      pendingInvites.filter(
        (i) => i.id !== removeInviteModal.inviteId,
      ),
    );
    setToastMessage("Invite deleted");
    setToastVisible(true);
    setRemoveInviteModal({
      open: false,
      inviteId: "",
      email: "",
      name: "",
    });
  };

  const handleRemoveMember = (
    memberId: string,
    memberName: string,
  ) => {
    setRemoveMemberModal({ open: true, memberId, memberName });
  };

  const handleConfirmRemoveMember = () => {
    setMembers(
      members.filter(
        (m) => m.id !== removeMemberModal.memberId,
      ),
    );
    setToastMessage("Member deleted");
    setToastVisible(true);
    setRemoveMemberModal({
      open: false,
      memberId: "",
      memberName: "",
    });
  };

  const handleResendInvite = (inviteId: string) => {
    setPendingInvites(
      pendingInvites.map((inv) =>
        inv.id === inviteId
          ? {
              ...inv,
              dateSent: getTodayDate(),
              expirationDate: getSevenDaysLaterDate(),
            }
          : inv,
      ),
    );
    setToastMessage("Invitation resent");
    setToastVisible(true);
  };

  const handleCopyLink = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setLinkCopiedVisible(true);

    setTimeout(() => {
      setLinkCopiedVisible(false);
    }, 2000);
  };

  const handleRoleChange = (
    memberId: string,
    newRole: MemberRole,
  ) => {
    const currentMember = members.find(
      (m) => m.id === memberId,
    );

    if (!currentMember || currentMember.role === newRole) {
      return;
    }

    if (
      currentMember.role === "Member" &&
      newRole === "Admin"
    ) {
      setUpdateRoleModal({ open: true, memberId, newRole });
      return;
    }

    setMembers((prevMembers) =>
      prevMembers.map((m) =>
        m.id === memberId ? { ...m, role: newRole } : m,
      ),
    );
    setToastMessage("Role updated");
    setToastVisible(true);
  };

  const handleConfirmUpdateRole = () => {
    setMembers((prevMembers) =>
      prevMembers.map((m) =>
        m.id === updateRoleModal.memberId
          ? { ...m, role: updateRoleModal.newRole }
          : m,
      ),
    );
    setToastMessage("Role updated");
    setToastVisible(true);
    setUpdateRoleModal({
      open: false,
      memberId: "",
      newRole: "Member",
    });
  };

  const handleInviteSend = (
    email: string,
    role: "Admin" | "Member",
  ) => {
    const newInvite: PendingInvite = {
      id: Date.now().toString(),
      email,
      invitedBy: "Melissa Monroe",
      dateSent: getTodayDate(),
      expirationDate: getSevenDaysLaterDate(),
      role,
      isTaskTagUser: false,
    };
    setPendingInvites([newInvite, ...pendingInvites]);
    setToastMessage("Invite sent");
    setToastVisible(true);
  };

  // Auto-hide toast after duration
  useEffect(() => {
    if (toastVisible) {
      const timeout = setTimeout(() => {
        setToastVisible(false);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [toastVisible]);

  // Close message dropdown on scroll (outside dropdown) or resize
  useEffect(() => {
    const handleScroll = (e: Event) => {
      // Don't close if scrolling inside the dropdown itself
      if (
        messageMemberDropdownRef.current?.contains(
          e.target as Node,
        )
      ) {
        return;
      }
      setMessageMemberDropdownOpen(false);
    };

    const handleResize = () => {
      setMessageMemberDropdownOpen(false);
    };

    if (messageMemberDropdownOpen) {
      window.addEventListener("scroll", handleScroll, true);
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener(
          "scroll",
          handleScroll,
          true,
        );
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [messageMemberDropdownOpen]);

  return (
    <div className="h-screen bg-background flex overflow-hidden">
      <div className="flex flex-col min-w-0 w-full">
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
                  Scott 1
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
              <Button variant="ghost" size="sm">
                <Search className="w-5 h-5" />
              </Button>
              <Button
                variant="fill"
                size="sm"
                className="btn-black"
                style={{
                  width: "120px",
                  borderRadius: "var(--radius-full)",
                }}
              >
                <Plus className="w-4 h-4" />
                <span>New Task</span>
              </Button>
            </div>
          </div>
        </header>

        {/* Tabs */}
        <div
          className="relative flex-shrink-0 bg-white"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <div className="flex items-center justify-between pt-[16px] pr-[16px] pb-[0px] pl-[16px]">
            <div className="flex items-center">
              <TabItem
                variant="icon-left"
                size="md"
                label="Details"
                icon={CreditCard}
                isActive={activeTab === "details"}
                onClick={() => setActiveTab("details")}
              />
              <TabItem
                variant="icon-left"
                size="md"
                label="Members"
                icon={Users}
                badge={members.length.toString()}
                isActive={activeTab === "members"}
                onClick={() => setActiveTab("members")}
              />
              <TabItem
                variant="icon-left"
                size="md"
                label="Invoice"
                icon={File}
                badge="1"
                isActive={activeTab === "invoice"}
                disabled
                onClick={() => {}}
              />
            </div>

            {/* Right: Copy Link and Invite buttons */}
            <div className="flex items-center gap-4 mt-[-16px] mr-[0px] mb-[0px] ml-[0px]">
              <MainTooltip
                content={
                  linkCopiedVisible ? (
                    <SuccessTooltip message="Link Copied" />
                  ) : (
                    "Copy link to invite"
                  )
                }
                variant="bottom-right"
                size="sm"
                style={linkCopiedVisible ? "custom" : "default"}
                forceShow={linkCopiedVisible}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={(e) => {
                    handleCopyLink(e as any);
                  }}
                >
                  <LinkIcon className="w-5 h-5" />
                </Button>
              </MainTooltip>
              <Button
                variant="outline"
                size="sm"
                className="btn-black"
                onClick={() => setInviteModalOpen(true)}
                style={{
                  width: "120px",
                  borderRadius: "var(--radius-full)",
                }}
              >
                <UserPlus className="w-4 h-4" />
                <span>Invite</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Filter */}
        {activeTab !== "details" && (
          <div className="bg-white px-4 py-3 flex gap-2">
            <div className="relative" ref={filterRef}>
              <button
                onClick={() => setFilterOpen(!filterOpen)}
                className={`h-10 flex items-center justify-center gap-2 px-4 rounded-lg transition-colors cursor-pointer ${filterOpen || hasActiveFilters ? "bg-secondary" : "hover:bg-secondary"}`}
                style={{
                  fontWeight: "var(--font-weight-semibold)",
                  fontSize: "var(--text-label)",
                }}
              >
                <ListFilter className="size-4 shrink-0" />
                <span className="leading-none">Filter</span>

                {hasActiveFilters && (
                  <>
                    <div className="bg-[var(--secondary-green)] min-w-5 h-5 px-1.5 rounded-full flex items-center justify-center">
                      <span
                        className="text-white text-[12px]"
                        style={{
                          fontWeight:
                            "var(--font-weight-regular)",
                        }}
                      >
                        {activeFilterCount}
                      </span>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedFilter("all");
                        setSearchQuery("");
                      }}
                      className="size-5 flex items-center justify-center hover:bg-[var(--grey-02)] rounded-full transition-colors cursor-pointer"
                    >
                      <X
                        className="size-4"
                        style={{ color: "var(--text-primary)" }}
                      />
                    </button>
                  </>
                )}
              </button>
              {filterOpen && (
                <div className="absolute top-full left-0 mt-1 bg-popover border border-border rounded-lg shadow-lg z-50 w-[300px]">
                  <div className="px-3 py-3 border-b border-border">
                    <TextInput
                      size="sm"
                      placeholder="Search members..."
                      value={searchQuery}
                      onChange={(value) =>
                        setSearchQuery(value)
                      }
                      icon={Search}
                      showClearButton={true}
                    />
                  </div>

                  <div className="py-1">
                    {["Admin", "Member"].map((role) => (
                      <div
                        key={role}
                        onClick={() =>
                          setSelectedFilter(role as FilterRole)
                        }
                        className="w-full px-4 py-2 caption text-left hover:bg-secondary transition-colors cursor-pointer"
                      >
                        <RadioButton
                          name="filter-role"
                          value={role}
                          label={role}
                          checked={selectedFilter === role}
                          onChange={() =>
                            setSelectedFilter(
                              role as FilterRole,
                            )
                          }
                        />
                      </div>
                    ))}
                  </div>

                  <div className="px-4 py-2 border-t border-border">
                    <button
                      onClick={() => {
                        if (
                          selectedFilter !== "all" ||
                          searchQuery
                        ) {
                          setSelectedFilter("all");
                          setSearchQuery("");
                          setFilterOpen(false);
                        }
                      }}
                      disabled={
                        selectedFilter === "all" && !searchQuery
                      }
                      className={`w-full text-center py-2 caption transition-opacity ${
                        selectedFilter === "all" && !searchQuery
                          ? "opacity-50 cursor-not-allowed text-foreground"
                          : "cursor-pointer text-foreground hover:opacity-70"
                      }`}
                    >
                      Clear Filter
                    </button>
                  </div>
                </div>
              )}
            </div>
            <Button
              variant="ghost"
              size="md"
              className={messageMemberDropdownOpen ? "bg-secondary" : ""}
              style={{
                fontSize: "var(--text-label)",
                position: "relative",
              }}
              ref={messageMemberButtonRef}
              onClick={() =>
                setMessageMemberDropdownOpen(
                  !messageMemberDropdownOpen,
                )
              }
            >
              <MessageSquare className="size-4" />
              <span>Message Member</span>
            </Button>
          </div>
        )}

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden pt-0">
          {activeTab === "details" ? (
            <div className="flex-1 overflow-auto">
              <TabContent memberCount={members.length} />
            </div>
          ) : (
            <>
              {/* Active Section */}
              <div
                className={`flex flex-col border border-border rounded-lg mx-4 mt-0 mb-4 overflow-hidden bg-white ${activeExpanded ? "flex-1" : "flex-none"}`}
              >
                <TaskSectionHeader
                  title="Active"
                  count={searchFilteredMembers.length}
                  isExpanded={activeExpanded}
                  onToggle={() =>
                    setActiveExpanded(!activeExpanded)
                  }
                  showCount={searchFilteredMembers.length > 0}
                  className="border-b border-border"
                />

                {activeExpanded && (
                  <div
                    className="flex-1 overflow-x-auto overflow-y-auto"
                    style={{
                      scrollbarWidth: "thin",
                      scrollbarColor:
                        "var(--grey-03) transparent",
                    }}
                  >
                    {searchFilteredMembers.length === 0 ? (
                      <div className="flex flex-col items-center justify-center py-16 px-4">
                        <p
                          className="text-foreground"
                          style={{ fontWeight: 600 }}
                        >
                          No Active Members
                        </p>
                        <p
                          className="text-muted-foreground mt-1"
                          style={{ fontSize: "12px" }}
                        >
                          Invite people to start working
                          together
                        </p>
                      </div>
                    ) : (
                      <table className="w-full relative table-fixed">
                        <colgroup>
                          <col
                            style={{
                              width:
                                "calc((100% - 24px) * 20 / 90)",
                            }}
                          />
                          <col
                            style={{
                              width:
                                "calc((100% - 24px) * 20 / 90)",
                            }}
                          />
                          <col
                            style={{
                              width:
                                "calc((100% - 24px) * 20 / 90)",
                            }}
                          />
                          <col
                            style={{
                              width:
                                "calc((100% - 24px) * 15 / 90)",
                            }}
                          />
                          <col
                            style={{
                              width:
                                "calc((100% - 24px) * 15 / 90)",
                            }}
                          />
                          <col style={{ width: "40px" }} />
                        </colgroup>
                        <thead className="bg-secondary sticky top-0 z-10">
                          <tr className="border-b border-border">
                            <th
                              className="px-4 py-2 text-left text-muted-foreground"
                              style={{
                                fontWeight: 600,
                                fontSize: "14px",
                                minWidth: 0,
                                maxWidth: 0,
                              }}
                            >
                              <MainTooltip
                                content="Name"
                                variant="bottom-left"
                                size="sm"
                                fullWidth
                                showOnTruncateOnly
                              >
                                <div className="flex items-center gap-1 truncate">
                                  <span className="truncate">
                                    Name
                                  </span>
                                  <ArrowUpDown
                                    className="w-3 h-3 cursor-pointer flex-shrink-0"
                                    onClick={handleNameSort}
                                  />
                                </div>
                              </MainTooltip>
                            </th>
                            <th
                              className="px-4 py-2 text-left text-muted-foreground"
                              style={{
                                fontWeight: 600,
                                fontSize: "14px",
                                minWidth: 0,
                                maxWidth: 0,
                              }}
                            >
                              <MainTooltip
                                content="Skills"
                                variant="bottom-left"
                                size="sm"
                                fullWidth
                                showOnTruncateOnly
                              >
                                <div className="truncate">
                                  Skills
                                </div>
                              </MainTooltip>
                            </th>
                            <th
                              className="px-4 py-2 text-left text-muted-foreground"
                              style={{
                                fontWeight: 600,
                                fontSize: "14px",
                                minWidth: 0,
                                maxWidth: 0,
                              }}
                            >
                              <MainTooltip
                                content="Email"
                                variant="bottom-left"
                                size="sm"
                                fullWidth
                                showOnTruncateOnly
                              >
                                <div className="truncate">
                                  Email
                                </div>
                              </MainTooltip>
                            </th>
                            <th
                              className="px-4 py-2 text-left text-muted-foreground"
                              style={{
                                fontWeight: 600,
                                fontSize: "14px",
                                minWidth: 0,
                                maxWidth: 0,
                              }}
                            >
                              <MainTooltip
                                content="Phone"
                                variant="bottom-left"
                                size="sm"
                                fullWidth
                                showOnTruncateOnly
                              >
                                <div className="truncate">
                                  Phone
                                </div>
                              </MainTooltip>
                            </th>
                            <th
                              className="pl-6 pr-4 py-2 text-left text-muted-foreground"
                              style={{
                                fontWeight: 600,
                                fontSize: "14px",
                                minWidth: 0,
                                maxWidth: 0,
                              }}
                            >
                              <MainTooltip
                                content="Role"
                                variant="bottom-left"
                                size="sm"
                                fullWidth
                                showOnTruncateOnly
                              >
                                <div className="truncate">
                                  Role
                                </div>
                              </MainTooltip>
                            </th>
                            <th
                              style={{
                                fontWeight: 600,
                                fontSize: "14px",
                                width: "40px",
                                maxWidth: "40px",
                                minWidth: "40px",
                                padding: "0",
                                textAlign: "center",
                                color: "var(--text-secondary)",
                              }}
                            ></th>
                          </tr>
                        </thead>
                        <tbody>
                          {sortedMembers.map((member) => {
                            const avatarProps = getAvatarProps(
                              member.name,
                            );
                            const isDropdownOpen =
                              openDropdownMemberId ===
                              member.id;
                            const isHovered =
                              hoveredMemberId === member.id;
                            const shouldHighlight =
                              isDropdownOpen || isHovered;

                            return (
                              <tr
                                key={member.id}
                                className={`border-b border-border transition-colors ${shouldHighlight ? "bg-secondary/50" : ""}`}
                                onMouseEnter={() =>
                                  setHoveredMemberId(member.id)
                                }
                                onMouseLeave={() =>
                                  setHoveredMemberId(null)
                                }
                              >
                                <td
                                  className="px-4 py-3"
                                  style={{
                                    minWidth: 0,
                                    maxWidth: 0,
                                  }}
                                >
                                  <div
                                    className="flex items-center gap-2 overflow-hidden"
                                    style={{ minWidth: 0 }}
                                  >
                                    {member.avatarUrl ? (
                                      <img
                                        src={member.avatarUrl}
                                        alt={member.name}
                                        className="rounded-full object-cover flex-shrink-0"
                                        style={{
                                          width:
                                            "clamp(24px, 2vw, 32px)",
                                          height:
                                            "clamp(24px, 2vw, 32px)",
                                        }}
                                      />
                                    ) : (
                                      <div
                                        className="rounded-full flex items-center justify-center text-white flex-shrink-0"
                                        style={{
                                          backgroundColor:
                                            avatarProps.backgroundColor,
                                          width:
                                            "clamp(24px, 2vw, 32px)",
                                          height:
                                            "clamp(24px, 2vw, 32px)",
                                          fontSize:
                                            "clamp(10px, 1vw, 14px)",
                                        }}
                                      >
                                        {avatarProps.initials}
                                      </div>
                                    )}
                                    <div
                                      className="overflow-hidden"
                                      style={{
                                        minWidth: 0,
                                        flex: 1,
                                      }}
                                    >
                                      <MainTooltip
                                        content={member.name}
                                        variant="bottom-left"
                                        size="sm"
                                        forceHide={
                                          linkCopiedVisible
                                        }
                                        fullWidth
                                        showOnTruncateOnly
                                      >
                                        <span
                                          className="truncate block"
                                          style={{
                                            fontSize: "14px",
                                          }}
                                        >
                                          {member.name}
                                        </span>
                                      </MainTooltip>
                                    </div>
                                  </div>
                                </td>
                                <td
                                  className="px-4 py-3"
                                  style={{
                                    minWidth: 0,
                                    maxWidth: 0,
                                  }}
                                >
                                  <SkillsCell
                                    skills={member.skills || []}
                                    linkCopiedVisible={
                                      linkCopiedVisible
                                    }
                                  />
                                </td>
                                <td
                                  className="px-4 py-3"
                                  style={{
                                    minWidth: 0,
                                    maxWidth: 0,
                                  }}
                                >
                                  <MainTooltip
                                    content={member.email}
                                    variant="bottom-left"
                                    size="sm"
                                    forceHide={
                                      linkCopiedVisible
                                    }
                                    fullWidth
                                    showOnTruncateOnly
                                  >
                                    <div
                                      className="text-foreground truncate"
                                      style={{
                                        fontSize: "14px",
                                      }}
                                    >
                                      {member.email}
                                    </div>
                                  </MainTooltip>
                                </td>
                                <td
                                  className="px-4 py-3"
                                  style={{
                                    minWidth: 0,
                                    maxWidth: 0,
                                  }}
                                >
                                  <MainTooltip
                                    content={member.phone}
                                    variant="bottom-left"
                                    size="sm"
                                    forceHide={
                                      linkCopiedVisible
                                    }
                                    fullWidth
                                    showOnTruncateOnly
                                  >
                                    <div
                                      className="text-foreground text-left truncate"
                                      style={{
                                        fontSize: "14px",
                                      }}
                                    >
                                      {member.phone}
                                    </div>
                                  </MainTooltip>
                                </td>
                                <td className="px-4 py-3 relative">
                                  {member.role === "Owner" ? (
                                    <span
                                      className="px-2 py-1.5"
                                      style={{
                                        fontSize: "14px",
                                        fontWeight:
                                          "var(--font-weight-regular)",
                                        color:
                                          "var(--text-primary)",
                                      }}
                                    >
                                      {member.role}
                                    </span>
                                  ) : (
                                    <RoleDropdown
                                      role={member.role}
                                      onChange={(newRole) =>
                                        handleRoleChange(
                                          member.id,
                                          newRole,
                                        )
                                      }
                                      onRemove={() =>
                                        handleRemoveMember(
                                          member.id,
                                          member.name,
                                        )
                                      }
                                      disabled={false}
                                      onOpenChange={(isOpen) =>
                                        setOpenDropdownMemberId(
                                          isOpen
                                            ? member.id
                                            : null,
                                        )
                                      }
                                    />
                                  )}
                                </td>
                                <td
                                  style={{
                                    width: "40px",
                                    maxWidth: "40px",
                                    minWidth: "40px",
                                    padding: "0",
                                  }}
                                >
                                  <div
                                    style={{
                                      display: "flex",
                                      justifyContent: "center",
                                      alignItems: "center",
                                      width: "100%",
                                      height: "100%",
                                    }}
                                  >
                                    <MainTooltip
                                      content="Send message"
                                      variant="bottom-right"
                                      size="sm"
                                      forceHide={
                                        linkCopiedVisible
                                      }
                                    >
                                      <button
                                        onClick={() => {
                                          setToastMessage(
                                            `Opening chat with ${member.name}`,
                                          );
                                          setToastVisible(true);
                                          setTimeout(
                                            () =>
                                              setToastVisible(
                                                false,
                                              ),
                                            3000,
                                          );
                                        }}
                                        className="rounded transition-all duration-200 cursor-pointer hover:bg-secondary group"
                                        style={{
                                          padding:
                                            "var(--spacing-8)",
                                          display: "flex",
                                          alignItems: "center",
                                          justifyContent:
                                            "center",
                                        }}
                                      >
                                        <MessageSquare
                                          className="w-4 h-4 transition-colors duration-200 group-hover:text-primary"
                                          style={{
                                            color:
                                              "var(--text-secondary)",
                                          }}
                                        />
                                      </button>
                                    </MainTooltip>
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    )}
                  </div>
                )}
              </div>

              {/* Pending Section */}
              <div
                className={`flex flex-col border border-border rounded-lg mx-4 mb-4 overflow-hidden bg-white ${pendingExpanded ? "flex-1" : "flex-none"}`}
              >
                <TaskSectionHeader
                  title="Pending"
                  count={searchFilteredInvites.length}
                  isExpanded={pendingExpanded}
                  onToggle={() =>
                    setPendingExpanded(!pendingExpanded)
                  }
                  showCount={searchFilteredInvites.length > 0}
                  className="border-b border-border"
                />

                {pendingExpanded && (
                  <div
                    className="flex-1 overflow-auto"
                    style={{
                      scrollbarWidth: "thin",
                      scrollbarColor:
                        "var(--grey-03) transparent",
                    }}
                  >
                    {searchFilteredInvites.length === 0 ? (
                      <div className="flex flex-col items-center justify-center py-16 px-4">
                        <p
                          className="text-foreground"
                          style={{ fontWeight: 600 }}
                        >
                          No Pending Members
                        </p>
                        <p
                          className="text-muted-foreground mt-1"
                          style={{ fontSize: "12px" }}
                        >
                          You haven't sent any invitations yet
                        </p>
                      </div>
                    ) : (
                      <table className="w-full table-fixed">
                        <colgroup>
                          <col
                            style={{
                              width:
                                "calc((100% - 48px) * 20 / 80)",
                            }}
                          />
                          <col
                            style={{
                              width:
                                "calc((100% - 48px) * 15 / 80)",
                            }}
                          />
                          <col
                            style={{
                              width:
                                "calc((100% - 48px) * 15 / 80)",
                            }}
                          />
                          <col
                            style={{
                              width:
                                "calc((100% - 48px) * 15 / 80)",
                            }}
                          />
                          <col
                            style={{
                              width:
                                "calc((100% - 48px) * 15 / 80)",
                            }}
                          />
                          <col style={{ width: "40px" }} />
                          <col style={{ width: "40px" }} />
                        </colgroup>
                        <thead className="bg-secondary sticky top-0 z-10">
                          <tr className="border-b border-border">
                            <th
                              className="px-4 py-2 text-left text-muted-foreground"
                              style={{
                                fontWeight: 600,
                                fontSize: "14px",
                                minWidth: 0,
                                maxWidth: 0,
                              }}
                            >
                              <MainTooltip
                                content="Email or Name"
                                variant="bottom-left"
                                size="sm"
                                fullWidth
                                showOnTruncateOnly
                              >
                                <div className="truncate">
                                  Email or Name
                                </div>
                              </MainTooltip>
                            </th>
                            <th
                              className="px-4 py-2 text-left text-muted-foreground"
                              style={{
                                fontWeight: 600,
                                fontSize: "14px",
                                minWidth: 0,
                                maxWidth: 0,
                              }}
                            >
                              <MainTooltip
                                content="Invited By"
                                variant="bottom-left"
                                size="sm"
                                fullWidth
                                showOnTruncateOnly
                              >
                                <div className="truncate">
                                  Invited By
                                </div>
                              </MainTooltip>
                            </th>
                            <th
                              className="px-4 py-2 text-left text-muted-foreground"
                              style={{
                                fontWeight: 600,
                                fontSize: "14px",
                                minWidth: 0,
                                maxWidth: 0,
                              }}
                            >
                              <MainTooltip
                                content="Date Sent"
                                variant="bottom-left"
                                size="sm"
                                fullWidth
                                showOnTruncateOnly
                              >
                                <div className="flex items-center gap-1 truncate">
                                  <span className="truncate">
                                    Date Sent
                                  </span>
                                  <ArrowUpDown
                                    className="w-3 h-3 cursor-pointer flex-shrink-0"
                                    onClick={handleDateSentSort}
                                  />
                                </div>
                              </MainTooltip>
                            </th>
                            <th
                              className="px-4 py-2 text-left text-muted-foreground"
                              style={{
                                fontWeight: 600,
                                fontSize: "14px",
                                minWidth: 0,
                                maxWidth: 0,
                              }}
                            >
                              <MainTooltip
                                content="Expiration Date"
                                variant="bottom-left"
                                size="sm"
                                fullWidth
                                showOnTruncateOnly
                              >
                                <div className="truncate">
                                  Expiration Date
                                </div>
                              </MainTooltip>
                            </th>
                            <th
                              className="px-4 py-2 text-left text-muted-foreground"
                              style={{
                                fontWeight: 600,
                                fontSize: "14px",
                                minWidth: 0,
                                maxWidth: 0,
                              }}
                            >
                              <MainTooltip
                                content="Role"
                                variant="bottom-left"
                                size="sm"
                                fullWidth
                                showOnTruncateOnly
                              >
                                <div className="truncate">
                                  Role
                                </div>
                              </MainTooltip>
                            </th>
                            <th
                              style={{
                                fontWeight: 600,
                                fontSize: "14px",
                                width: "40px",
                                maxWidth: "40px",
                                minWidth: "40px",
                                padding: "0",
                                textAlign: "center",
                                color: "var(--text-secondary)",
                              }}
                            ></th>
                            <th
                              style={{
                                fontWeight: 600,
                                fontSize: "14px",
                                width: "40px",
                                maxWidth: "40px",
                                minWidth: "40px",
                                padding: "0",
                                textAlign: "center",
                                color: "var(--text-secondary)",
                              }}
                            ></th>
                          </tr>
                        </thead>
                        <tbody>
                          {sortedInvites.map((invite) => {
                            const displayName =
                              invite.name || invite.email;
                            const hasProperName =
                              invite.name &&
                              invite.name.trim().length > 0;
                            const avatarProps = hasProperName
                              ? getAvatarProps(invite.name)
                              : null;
                            const expired = isExpired(
                              invite.expirationDate,
                            );

                            return (
                              <tr
                                key={invite.id}
                                className="border-b border-border hover:bg-secondary/50 transition-colors"
                              >
                                <td
                                  className="px-4 py-3"
                                  style={{
                                    minWidth: 0,
                                    maxWidth: 0,
                                  }}
                                >
                                  <div
                                    className="flex items-center gap-2 overflow-hidden"
                                    style={{ minWidth: 0 }}
                                  >
                                    {invite.avatarUrl ? (
                                      <img
                                        src={invite.avatarUrl}
                                        alt={displayName}
                                        className="rounded-full object-cover flex-shrink-0"
                                        style={{
                                          width:
                                            "clamp(24px, 2vw, 32px)",
                                          height:
                                            "clamp(24px, 2vw, 32px)",
                                        }}
                                      />
                                    ) : avatarProps ? (
                                      <div
                                        className="rounded-full flex items-center justify-center text-white flex-shrink-0"
                                        style={{
                                          backgroundColor:
                                            avatarProps.backgroundColor,
                                          width:
                                            "clamp(24px, 2vw, 32px)",
                                          height:
                                            "clamp(24px, 2vw, 32px)",
                                          fontSize:
                                            "clamp(10px, 1vw, 14px)",
                                        }}
                                      >
                                        {avatarProps.initials}
                                      </div>
                                    ) : (
                                      <div
                                        className="rounded-full bg-secondary flex items-center justify-center flex-shrink-0"
                                        style={{
                                          width:
                                            "clamp(24px, 2vw, 32px)",
                                          height:
                                            "clamp(24px, 2vw, 32px)",
                                        }}
                                      >
                                        <Mail
                                          className="text-muted-foreground"
                                          style={{
                                            width:
                                              "clamp(12px, 1vw, 16px)",
                                            height:
                                              "clamp(12px, 1vw, 16px)",
                                          }}
                                        />
                                      </div>
                                    )}
                                    <div
                                      className="overflow-hidden"
                                      style={{
                                        minWidth: 0,
                                        flex: 1,
                                      }}
                                    >
                                      <MainTooltip
                                        content={displayName}
                                        variant="bottom-left"
                                        size="sm"
                                        forceHide={
                                          linkCopiedVisible
                                        }
                                        fullWidth
                                        showOnTruncateOnly
                                      >
                                        <span
                                          className="truncate block"
                                          style={{
                                            fontSize: "14px",
                                          }}
                                        >
                                          {displayName}
                                        </span>
                                      </MainTooltip>
                                    </div>
                                  </div>
                                </td>
                                <td
                                  className="px-4 py-3"
                                  style={{
                                    minWidth: 0,
                                    maxWidth: 0,
                                  }}
                                >
                                  <MainTooltip
                                    content={invite.invitedBy}
                                    variant="bottom-left"
                                    size="sm"
                                    forceHide={
                                      linkCopiedVisible
                                    }
                                    fullWidth
                                    showOnTruncateOnly
                                  >
                                    <div
                                      className="text-foreground truncate"
                                      style={{
                                        fontSize: "14px",
                                      }}
                                    >
                                      {invite.invitedBy}
                                    </div>
                                  </MainTooltip>
                                </td>
                                <td
                                  className="px-4 py-3"
                                  style={{
                                    minWidth: 0,
                                    maxWidth: 0,
                                  }}
                                >
                                  <MainTooltip
                                    content={formatDateForDisplay(
                                      invite.dateSent,
                                    )}
                                    variant="bottom-left"
                                    size="sm"
                                    forceHide={
                                      linkCopiedVisible
                                    }
                                    fullWidth
                                    showOnTruncateOnly
                                  >
                                    <div
                                      className="text-foreground truncate"
                                      style={{
                                        fontSize: "14px",
                                      }}
                                    >
                                      {formatDateForDisplay(
                                        invite.dateSent,
                                      )}
                                    </div>
                                  </MainTooltip>
                                </td>
                                <td
                                  className="px-4 py-3"
                                  style={{
                                    minWidth: 0,
                                    maxWidth: 0,
                                  }}
                                >
                                  <MainTooltip
                                    content={
                                      invite.isTaskTagUser
                                        ? "-"
                                        : invite.expirationDate
                                    }
                                    variant="bottom-left"
                                    size="sm"
                                    forceHide={
                                      linkCopiedVisible
                                    }
                                    fullWidth
                                    showOnTruncateOnly
                                  >
                                    <div
                                      className={`truncate ${expired && !invite.isTaskTagUser ? "text-destructive-foreground" : "text-foreground"}`}
                                      style={{
                                        fontSize: "14px",
                                      }}
                                    >
                                      {invite.isTaskTagUser
                                        ? "-"
                                        : invite.expirationDate}
                                    </div>
                                  </MainTooltip>
                                </td>
                                <td
                                  className="px-4 py-3"
                                  style={{
                                    minWidth: 0,
                                    maxWidth: 0,
                                  }}
                                >
                                  <MainTooltip
                                    content={invite.role}
                                    variant="bottom-left"
                                    size="sm"
                                    forceHide={
                                      linkCopiedVisible
                                    }
                                    fullWidth
                                    showOnTruncateOnly
                                  >
                                    <div
                                      className="text-foreground truncate"
                                      style={{
                                        fontSize: "14px",
                                      }}
                                    >
                                      {invite.role}
                                    </div>
                                  </MainTooltip>
                                </td>
                                <td
                                  style={{
                                    width: "40px",
                                    maxWidth: "40px",
                                    minWidth: "40px",
                                    padding: "0",
                                  }}
                                >
                                  <div
                                    style={{
                                      display: "flex",
                                      justifyContent: "center",
                                      alignItems: "center",
                                      width: "100%",
                                      height: "100%",
                                    }}
                                  >
                                    {!invite.isTaskTagUser && (
                                      <MainTooltip
                                        content="Resend Invitation"
                                        variant="bottom-right"
                                        size="sm"
                                        forceHide={
                                          linkCopiedVisible
                                        }
                                      >
                                        <button
                                          onClick={() =>
                                            handleResendInvite(
                                              invite.id,
                                            )
                                          }
                                          className="rounded transition-all duration-200 cursor-pointer hover:bg-secondary group"
                                          style={{
                                            padding:
                                              "var(--spacing-8)",
                                            display: "flex",
                                            alignItems:
                                              "center",
                                            justifyContent:
                                              "center",
                                          }}
                                        >
                                          <Repeat
                                            className="w-4 h-4 transition-colors duration-200 group-hover:text-primary"
                                            style={{
                                              color:
                                                "var(--text-secondary)",
                                            }}
                                          />
                                        </button>
                                      </MainTooltip>
                                    )}
                                  </div>
                                </td>
                                <td
                                  style={{
                                    width: "48px",
                                    maxWidth: "48px",
                                    minWidth: "48px",
                                    padding: "0",
                                  }}
                                >
                                  <div
                                    style={{
                                      display: "flex",
                                      justifyContent: "center",
                                      alignItems: "center",
                                      width: "100%",
                                      height: "100%",
                                    }}
                                  >
                                    <MainTooltip
                                      content="Remove invitation"
                                      variant="bottom-right"
                                      size="sm"
                                      forceHide={
                                        linkCopiedVisible
                                      }
                                    >
                                      <button
                                        onClick={() =>
                                          handleRemoveInvite(
                                            invite.id,
                                            invite.email ||
                                              invite.name,
                                            invite.name,
                                          )
                                        }
                                        className="rounded transition-all duration-200 cursor-pointer hover:bg-secondary group"
                                        style={{
                                          padding:
                                            "var(--spacing-8)",
                                          display: "flex",
                                          alignItems: "center",
                                          justifyContent:
                                            "center",
                                        }}
                                      >
                                        <Trash2
                                          className="w-4 h-4 transition-colors duration-200 group-hover:text-destructive-foreground"
                                          style={{
                                            color:
                                              "var(--text-secondary)",
                                          }}
                                        />
                                      </button>
                                    </MainTooltip>
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    )}
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        {/* Modals */}
        {removeInviteModal.open &&
          createPortal(
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
              onClick={() =>
                setRemoveInviteModal({
                  open: false,
                  inviteId: "",
                  email: "",
                  name: "",
                })
              }
            >
              <div onClick={(e) => e.stopPropagation()}>
                <Modal
                  variant="one-action"
                  title="Cancel Invite"
                  description={
                    <p
                      style={{
                        fontSize: "var(--text-label)",
                        fontWeight:
                          "var(--font-weight-regular)",
                      }}
                    >
                      This will cancel the pending invitation
                      for{" "}
                      <b>
                        {removeInviteModal.name ||
                          removeInviteModal.email}
                      </b>
                      .
                    </p>
                  }
                  primaryButtonText="Cancel Invite"
                  onPrimaryClick={handleConfirmRemoveInvite}
                  onClose={() =>
                    setRemoveInviteModal({
                      open: false,
                      inviteId: "",
                      email: "",
                      name: "",
                    })
                  }
                />
              </div>
            </div>,
            document.body,
          )}

        {removeMemberModal.open &&
          createPortal(
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
              onClick={() =>
                setRemoveMemberModal({
                  open: false,
                  memberId: "",
                  memberName: "",
                })
              }
            >
              <div onClick={(e) => e.stopPropagation()}>
                <Modal
                  variant="one-action"
                  title="Remove Member"
                  description={
                    <p
                      style={{
                        fontSize: "var(--text-label)",
                        fontWeight:
                          "var(--font-weight-regular)",
                      }}
                    >
                      <b>{removeMemberModal.memberName}</b> will
                      no longer have access to the project.
                    </p>
                  }
                  primaryButtonText="Remove"
                  onPrimaryClick={handleConfirmRemoveMember}
                  onClose={() =>
                    setRemoveMemberModal({
                      open: false,
                      memberId: "",
                      memberName: "",
                    })
                  }
                />
              </div>
            </div>,
            document.body,
          )}

        {updateRoleModal.open &&
          createPortal(
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
              onClick={() =>
                setUpdateRoleModal({
                  open: false,
                  memberId: "",
                  newRole: "Member",
                })
              }
            >
              <div onClick={(e) => e.stopPropagation()}>
                <Modal
                  variant="one-action"
                  title="Update Role"
                  description={
                    updateRoleModal.newRole === "Admin" ? (
                      <div
                        style={{
                          fontSize: "var(--text-label)",
                          fontWeight:
                            "var(--font-weight-regular)",
                        }}
                      >
                        <p style={{ marginBottom: "8px" }}>
                          Changing this role to Admin will grant
                          the following abilities:
                        </p>
                        <ul
                          style={{
                            listStyleType: "disc",
                            paddingLeft: "20px",
                            lineHeight: "1.5",
                          }}
                        >
                          <li>Manage projects and tasks</li>
                          <li>Invite team members</li>
                          <li>Upload files and media</li>
                          <li>
                            Track overall project and task
                            progress
                          </li>
                        </ul>
                      </div>
                    ) : (
                      <p
                        style={{
                          fontSize: "var(--text-label)",
                          fontWeight:
                            "var(--font-weight-regular)",
                        }}
                      >
                        Are you sure you want to update the role
                        to {updateRoleModal.newRole}?
                      </p>
                    )
                  }
                  primaryButtonText="Confirm"
                  onPrimaryClick={handleConfirmUpdateRole}
                  onClose={() =>
                    setUpdateRoleModal({
                      open: false,
                      memberId: "",
                      newRole: "Member",
                    })
                  }
                />
              </div>
            </div>,
            document.body,
          )}

        {/* Toast */}
        {toastVisible &&
          createPortal(
            <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
              <Toast
                variant="title-only"
                type="success"
                title={toastMessage}
                duration={3000}
              />
            </div>,
            document.body,
          )}

        <AssigneeModal
          isOpen={inviteModalOpen}
          onClose={() => setInviteModalOpen(false)}
          modalTitle="Invite or add member"
          modalDescription="Add existing member or invite new ones to collaborate on this team."
          searchPlaceholder="Add member by email, name or group"
          submitButtonText="Send invite"
          roles={[
            { value: 'Admin', label: 'Admin' },
            { value: 'Member', label: 'Member' },
          ]}
          defaultRole="Member"
          onAssign={(members) => {
            console.log('Invited members:', members);
            setToastMessage(`${members.length} member${members.length > 1 ? 's' : ''} invited`);
            setToastVisible(true);
            setInviteModalOpen(false);
          }}
        />

        {/* Message Member Dropdown */}
        {messageMemberDropdownOpen &&
          messageMemberButtonRef.current &&
          createPortal(
            <>
              {/* Backdrop/Overlay */}
              <div
                style={{
                  position: "fixed",
                  inset: 0,
                  zIndex: 40,
                }}
                onClick={() =>
                  setMessageMemberDropdownOpen(false)
                }
              />

              {/* Dropdown */}
              <div
                ref={messageMemberDropdownRef}
                style={{
                  position: "fixed",
                  top: `${messageMemberButtonRef.current.getBoundingClientRect().bottom + 8}px`,
                  left: `${messageMemberButtonRef.current.getBoundingClientRect().left}px`,
                  zIndex: 50,
                }}
              >
                <MessageMemberDropdown
                  members={members
                    .filter((m) => m.role !== "Owner")
                    .map((m) => ({ id: m.id, name: m.name }))}
                  onCreateChat={(selectedIds) => {
                    console.log(
                      "Creating chat with members:",
                      selectedIds,
                    );
                    const selectedNames = members
                      .filter((m) => selectedIds.includes(m.id))
                      .map((m) => m.name)
                      .join(", ");
                    setToastMessage(
                      `Chat created with: ${selectedNames}`,
                    );
                    setToastVisible(true);
                    setMessageMemberDropdownOpen(false);
                    setTimeout(
                      () => setToastVisible(false),
                      3000,
                    );
                  }}
                />
              </div>
            </>,
            document.body,
          )}
      </div>
    </div>
  );
}