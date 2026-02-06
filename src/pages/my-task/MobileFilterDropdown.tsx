import { useState, useEffect, useRef } from "react";
import { ChevronDown, Search } from "lucide-react";
import { Checkbox } from "../../components/Checkbox";
import type { Task } from "../my-task-types";

interface MobileFilterDropdownProps {
  type: "project" | "assignee";
  selected: string[];
  onChange: (selected: string[]) => void;
  tasks: Task[];
}

export function MobileFilterDropdown({ type, selected, onChange, tasks }: MobileFilterDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  // Helper to get unique items
  const uniqueItems = type === "project" 
    ? Array.from(new Set(tasks.map(t => t.projectName))).sort()
    : Array.from(new Set(tasks.flatMap(t => t.assignees.map(a => a.name)))).sort();

  const filteredItems = uniqueItems.filter(item => 
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    if (isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + 8,
        left: rect.left
      });
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const toggleItem = (item: string) => {
    const newSelected = selected.includes(item)
      ? selected.filter(i => i !== item)
      : [...selected, item];
    onChange(newSelected);
  };

  const handleClear = () => {
    onChange([]);
  };

  return (
    <>
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-colors cursor-pointer ${
          isOpen || selected.length > 0
            ? "bg-[var(--secondary-green)] text-[var(--white)] border-transparent"
            : "bg-[var(--white)] text-[var(--text-secondary)] border-[var(--border)]"
        }`}
      >
        <span className="text-mobile-label-small capitalize">{type}</span>
        {selected.length > 0 && (
          <span className={`text-[10px] px-1.5 rounded-full font-semibold ${
             isOpen || selected.length > 0 ? "bg-[var(--white)] text-[var(--secondary-green)]" : "bg-[var(--secondary-green)] text-[var(--white)]"
          }`}>
            {selected.length}
          </span>
        )}
        <ChevronDown size={14} />
      </button>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="fixed z-50 w-64 bg-[var(--white)] rounded-lg shadow-lg border border-[var(--border)] flex flex-col max-h-[300px]"
          style={{ top: position.top, left: position.left }}
        >
          {/* Search */}
          <div className="p-2 border-b border-[var(--border)]">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" size={14} />
              <input
                type="text"
                placeholder={`Search ${type}s...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-2 py-1.5 text-mobile-label-small bg-[var(--grey-01)] rounded border-none outline-none focus:ring-1 focus:ring-[var(--secondary-green)] text-[var(--text-primary)]"
              />
            </div>
          </div>

          {/* List */}
          <div className="overflow-y-auto flex-1 p-2">
            {filteredItems.length > 0 ? (
              filteredItems.map(item => (
                <div
                  key={item}
                  className="flex items-center gap-2 p-2 hover:bg-[var(--grey-01)] rounded cursor-pointer"
                  onClick={() => toggleItem(item)}
                >
                  <Checkbox
                    variant="rectangular"
                    checked={selected.includes(item)}
                    onChange={() => toggleItem(item)}
                  />
                  <span className="text-mobile-body text-[var(--text-primary)] truncate">
                    {item}
                  </span>
                </div>
              ))
            ) : (
              <div className="p-4 text-center text-[var(--text-secondary)] text-mobile-label-small">
                No results found
              </div>
            )}
          </div>

          {/* Footer */}
          {selected.length > 0 && (
            <div className="p-2 border-t border-[var(--border)]">
              <button
                onClick={handleClear}
                className="w-full py-1.5 text-mobile-label-small text-[var(--text-secondary)] hover:bg-[var(--grey-01)] rounded transition-colors cursor-pointer"
              >
                Clear Selected
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}
