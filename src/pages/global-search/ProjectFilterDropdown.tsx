import { useState } from "react";
import { ChevronDown, ChevronUp, ListFilter, X } from "lucide-react";
import { Checkbox } from "../../components/Checkbox";

interface ProjectFilterState {
  owners: string[];
  teams: string[];
  members: string[];
}

interface ProjectFilterDropdownProps {
  onFiltersChange: (filters: ProjectFilterState) => void;
}

export function ProjectFilterDropdown({
  onFiltersChange,
}: ProjectFilterDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<
    "owner" | "team" | "member" | null
  >("owner"); // Owner expanded by default

  const [selectedOwners, setSelectedOwners] = useState<string[]>([]);
  const [selectedTeams, setSelectedTeams] = useState<string[]>([]);
  const [selectedMembers, setSelectedMembers] = useState<string[]>([]);

  const owners = ["Logan", "Ralph Smith", "Roberto", "Theodore"];
  const teams = ["TaskTag Team", "Nightly Team", "My team"];
  const members = [
    "William Smith",
    "Gerald Drill",
    "Robert Helmet",
    "Saint Saturn",
  ];

  const toggleSection = (section: "owner" | "team" | "member") => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const toggleOwner = (owner: string) => {
    const newOwners = selectedOwners.includes(owner)
      ? selectedOwners.filter((o) => o !== owner)
      : [...selectedOwners, owner];
    setSelectedOwners(newOwners);
    onFiltersChange({
      owners: newOwners,
      teams: selectedTeams,
      members: selectedMembers,
    });
  };

  const toggleTeam = (team: string) => {
    const newTeams = selectedTeams.includes(team)
      ? selectedTeams.filter((t) => t !== team)
      : [...selectedTeams, team];
    setSelectedTeams(newTeams);
    onFiltersChange({
      owners: selectedOwners,
      teams: newTeams,
      members: selectedMembers,
    });
  };

  const toggleMember = (member: string) => {
    const newMembers = selectedMembers.includes(member)
      ? selectedMembers.filter((m) => m !== member)
      : [...selectedMembers, member];
    setSelectedMembers(newMembers);
    onFiltersChange({
      owners: selectedOwners,
      teams: selectedTeams,
      members: newMembers,
    });
  };

  const clearAll = () => {
    setSelectedOwners([]);
    setSelectedTeams([]);
    setSelectedMembers([]);
    onFiltersChange({ owners: [], teams: [], members: [] });
  };

  const totalFilters =
    selectedOwners.length + selectedTeams.length + selectedMembers.length;

  const hasActiveFilters = totalFilters > 0;

  return (
    <div className="relative">
      {/* Filter Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`h-10 flex items-center justify-center gap-2 px-4 rounded-lg transition-colors cursor-pointer ${
          isOpen || totalFilters > 0 ? 'bg-secondary' : 'hover:bg-secondary'
        }`}
        style={{ fontWeight: 'var(--font-weight-semibold)' }}
      >
        <ListFilter className="size-4 shrink-0" />
        <span className="text-[14px] leading-none">Filter</span>
        
        {/* Filter Count Badge */}
        {totalFilters > 0 && (
          <>
            <div className="bg-[var(--secondary-green)] min-w-5 h-5 px-1.5 rounded-full flex items-center justify-center">
              <span className="text-white text-[12px]" style={{ fontWeight: 'var(--font-weight-regular)' }}>
                {totalFilters}
              </span>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                clearAll();
              }}
              className="size-5 flex items-center justify-center hover:bg-[var(--grey-02)] rounded-full transition-colors cursor-pointer"
            >
              <X className="size-4" style={{ color: 'var(--text-primary)' }} />
            </button>
          </>
        )}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown Content */}
          <div
            className="absolute dropdown-menu"
            style={{
              top: "calc(100% + 8px)",
              left: 0,
              backgroundColor: "var(--white)",
              borderRadius: "var(--radius-8)",
              boxShadow: "var(--elevation-lg)",
              width: "380px",
              maxHeight: "500px",
              overflow: "hidden",
              zIndex: 50,
            }}
          >
            {/* Owner Section */}
            <div
              style={{
                borderBottom: "1px solid var(--grey-03)",
                borderLeft: "1px solid var(--grey-03)",
                borderRight: "1px solid var(--grey-03)",
                borderTop: "1px solid var(--grey-03)",
                borderTopLeftRadius: "var(--radius-8)",
                borderTopRightRadius: "var(--radius-8)",
              }}
            >
              <button
                className="w-full flex items-center justify-between transition-colors"
                style={{
                  padding: "var(--spacing-12) var(--spacing-16)",
                  backgroundColor: "var(--white)",
                  height: "52px",
                  gap: "var(--spacing-8)",
                }}
                onClick={() => toggleSection("owner")}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    "var(--grey-01)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "var(--white)")
                }
              >
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: "var(--font-weight-semibold)",
                    color: "var(--text-primary)",
                  }}
                >
                  Owner
                </span>
                <div
                  className="flex items-center"
                  style={{ gap: "var(--spacing-8)" }}
                >
                  {selectedOwners.length > 0 && (
                    <div
                      style={{
                        backgroundColor: "var(--secondary-green)",
                        color: "var(--white)",
                        borderRadius: "var(--radius-full)",
                        width: "20px",
                        height: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "12px",
                        fontWeight: "var(--font-weight-medium)",
                      }}
                    >
                      {selectedOwners.length}
                    </div>
                  )}
                  {expandedSection === "owner" ? (
                    <ChevronUp size={24} />
                  ) : (
                    <ChevronDown size={24} />
                  )}
                </div>
              </button>

              {/* Owner List */}
              {expandedSection === "owner" && (
                <div
                  className="pb-2"
                  style={{
                    maxHeight: "232px",
                    overflowY: "auto",
                    scrollbarWidth: "thin",
                  }}
                >
                  {owners.map((owner) => (
                    <div
                      key={owner}
                      className="px-4 py-2 transition-colors cursor-pointer"
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor =
                          "var(--grey-02)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = "transparent")
                      }
                    >
                      <Checkbox
                        variant="rectangular"
                        checked={selectedOwners.includes(owner)}
                        onChange={() => toggleOwner(owner)}
                        label={<span>{owner}</span>}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Team Section */}
            <div
              style={{
                borderBottom: "1px solid var(--grey-03)",
                borderLeft: "1px solid var(--grey-03)",
                borderRight: "1px solid var(--grey-03)",
              }}
            >
              <button
                className="w-full flex items-center justify-between transition-colors"
                style={{
                  padding: "var(--spacing-12) var(--spacing-16)",
                  backgroundColor: "var(--white)",
                  height: "52px",
                  gap: "var(--spacing-8)",
                }}
                onClick={() => toggleSection("team")}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    "var(--grey-01)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "var(--white)")
                }
              >
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: "var(--font-weight-semibold)",
                    color: "var(--text-primary)",
                  }}
                >
                  Team
                </span>
                <div
                  className="flex items-center"
                  style={{ gap: "var(--spacing-8)" }}
                >
                  {selectedTeams.length > 0 && (
                    <div
                      style={{
                        backgroundColor: "var(--secondary-green)",
                        color: "var(--white)",
                        borderRadius: "var(--radius-full)",
                        width: "20px",
                        height: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "12px",
                        fontWeight: "var(--font-weight-medium)",
                      }}
                    >
                      {selectedTeams.length}
                    </div>
                  )}
                  {expandedSection === "team" ? (
                    <ChevronUp size={24} />
                  ) : (
                    <ChevronDown size={24} />
                  )}
                </div>
              </button>

              {/* Team List */}
              {expandedSection === "team" && (
                <div
                  className="pb-2"
                  style={{
                    maxHeight: "232px",
                    overflowY: "auto",
                    scrollbarWidth: "thin",
                  }}
                >
                  {teams.map((team) => (
                    <div
                      key={team}
                      className="px-4 py-2 transition-colors cursor-pointer"
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor =
                          "var(--grey-02)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = "transparent")
                      }
                    >
                      <Checkbox
                        variant="rectangular"
                        checked={selectedTeams.includes(team)}
                        onChange={() => toggleTeam(team)}
                        label={<span>{team}</span>}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Member Section */}
            <div
              style={{
                borderBottom: "1px solid var(--grey-03)",
                borderLeft: "1px solid var(--grey-03)",
                borderRight: "1px solid var(--grey-03)",
              }}
            >
              <button
                className="w-full flex items-center justify-between transition-colors"
                style={{
                  padding: "var(--spacing-12) var(--spacing-16)",
                  backgroundColor: "var(--white)",
                  height: "52px",
                  gap: "var(--spacing-8)",
                }}
                onClick={() => toggleSection("member")}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    "var(--grey-01)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "var(--white)")
                }
              >
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: "var(--font-weight-semibold)",
                    color: "var(--text-primary)",
                  }}
                >
                  Member
                </span>
                <div
                  className="flex items-center"
                  style={{ gap: "var(--spacing-8)" }}
                >
                  {selectedMembers.length > 0 && (
                    <div
                      style={{
                        backgroundColor: "var(--secondary-green)",
                        color: "var(--white)",
                        borderRadius: "var(--radius-full)",
                        width: "20px",
                        height: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "12px",
                        fontWeight: "var(--font-weight-medium)",
                      }}
                    >
                      {selectedMembers.length}
                    </div>
                  )}
                  {expandedSection === "member" ? (
                    <ChevronUp size={24} />
                  ) : (
                    <ChevronDown size={24} />
                  )}
                </div>
              </button>

              {/* Member List */}
              {expandedSection === "member" && (
                <div
                  className="pb-2"
                  style={{
                    maxHeight: "232px",
                    overflowY: "auto",
                    scrollbarWidth: "thin",
                  }}
                >
                  {members.map((member) => (
                    <div
                      key={member}
                      className="px-4 py-2 transition-colors cursor-pointer"
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor =
                          "var(--grey-02)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = "transparent")
                      }
                    >
                      <Checkbox
                        variant="rectangular"
                        checked={selectedMembers.includes(member)}
                        onChange={() => toggleMember(member)}
                        label={<span>{member}</span>}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Clear All */}
            <div
              style={{
                borderBottom: "1px solid var(--grey-03)",
                borderLeft: "1px solid var(--grey-03)",
                borderRight: "1px solid var(--grey-03)",
                borderBottomLeftRadius: "var(--radius-8)",
                borderBottomRightRadius: "var(--radius-8)",
              }}
            >
              <button
                className="w-full"
                style={{
                  padding: "var(--spacing-16)",
                  backgroundColor: "var(--white)",
                  color: "var(--grey-06)",
                  fontSize: "14px",
                  letterSpacing: "0.28px",
                  textAlign: "center",
                  cursor: hasActiveFilters ? "pointer" : "not-allowed",
                  opacity: hasActiveFilters ? 1 : 0.5,
                }}
                onClick={hasActiveFilters ? clearAll : undefined}
                disabled={!hasActiveFilters}
                onMouseEnter={(e) => {
                  if (hasActiveFilters) {
                    e.currentTarget.style.backgroundColor = "var(--grey-01)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (hasActiveFilters) {
                    e.currentTarget.style.backgroundColor = "var(--white)";
                  }
                }}
              >
                Clear All
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}