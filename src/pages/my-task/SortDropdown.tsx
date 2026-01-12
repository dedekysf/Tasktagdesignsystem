import { useState, useEffect, useRef } from "react";
import { ArrowUpDown, X } from "lucide-react";
import { RadioButton } from "../../components/RadioButton";
import type { SortOption } from "../my-task-types";

interface SortDropdownProps {
  selectedSort: SortOption;
  onSortChange: (sort: SortOption) => void;
}

export function SortDropdown({ selectedSort, onSortChange }: SortDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Position dropdown below button
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + 4,
        left: rect.left
      });
    }
  }, [isOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleSortSelect = (sort: SortOption) => {
    onSortChange(sort);
  };

  const handleClearAll = () => {
    onSortChange(null);
  };

  const sortSections = [
    {
      title: "Due Date",
      options: [
        { value: "dueDate-soonest" as SortOption, label: "Soonest" },
        { value: "dueDate-latest" as SortOption, label: "Latest" }
      ]
    },
    {
      title: "Priority",
      options: [
        { value: "priority-lowToHigh" as SortOption, label: "Low to High" },
        { value: "priority-highToLow" as SortOption, label: "High to Low" }
      ]
    },
    {
      title: "Last Updated",
      options: [
        { value: "lastUpdated-newest" as SortOption, label: "Newest" },
        { value: "lastUpdated-oldest" as SortOption, label: "Oldest" }
      ]
    },
    {
      title: "Created Date",
      options: [
        { value: "createdDate-newest" as SortOption, label: "Newest" },
        { value: "createdDate-oldest" as SortOption, label: "Oldest" }
      ]
    }
  ];

  return (
    <>
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className={`h-10 flex items-center justify-center gap-2 px-4 rounded-lg transition-colors cursor-pointer ${
          isOpen || selectedSort ? 'bg-secondary' : 'hover:bg-secondary'
        }`}
        style={{ fontWeight: 'var(--font-weight-semibold)' }}
      >
        <ArrowUpDown className="size-4 shrink-0" strokeWidth={2} />
        <span className="text-[14px] leading-none">Sort</span>
        
        {/* Clear Sort Button */}
        {selectedSort && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleClearAll();
            }}
            className="size-5 flex items-center justify-center rounded-full transition-colors cursor-pointer"
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--grey-02)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <X className="size-4" style={{ color: 'var(--text-secondary)' }} />
          </button>
        )}
      </button>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="fixed z-50 bg-white rounded-lg"
          style={{
            top: `${dropdownPosition.top}px`,
            left: `${dropdownPosition.left}px`,
            boxShadow: 'var(--elevation-lg)',
            border: '1px solid var(--border)'
          }}
        >
          {/* Sort Options */}
          <div className="py-2">
            {sortSections.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                {/* Section Header */}
                <div className="px-4 py-2">
                  <p className="text-[16px]" style={{ fontWeight: 'var(--font-weight-semibold)', color: 'var(--text-primary)' }}>
                    {section.title}
                  </p>
                </div>

                {/* Section Options */}
                <div>
                  {section.options.map((option) => (
                    <div
                      key={option.value}
                      className="px-4 py-2 transition-colors cursor-pointer"
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--grey-02)'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                      <RadioButton
                        name="sortOption"
                        value={option.value || ""}
                        checked={selectedSort === option.value}
                        onChange={() => handleSortSelect(option.value)}
                        label={option.label}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Clear All Button */}
          <div style={{ borderTop: '1px solid var(--border)' }}>
            <button
              onClick={handleClearAll}
              disabled={!selectedSort}
              className={`w-full p-4 text-center transition-colors rounded-b-[8px] ${
                selectedSort
                  ? 'cursor-pointer' 
                  : 'cursor-not-allowed opacity-50'
              }`}
              onMouseEnter={(e) => {
                if (selectedSort) {
                  e.currentTarget.style.backgroundColor = 'var(--grey-01)';
                }
              }}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <span 
                className="text-[14px]" 
                style={{ 
                  fontWeight: 'var(--font-weight-regular)',
                  color: selectedSort ? 'var(--text-primary)' : 'var(--text-secondary)'
                }}
              >
                Clear All
              </span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}