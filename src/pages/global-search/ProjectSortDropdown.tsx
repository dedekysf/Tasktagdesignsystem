import { useState, useEffect, useRef } from "react";
import { ArrowUpDown, X } from "lucide-react";
import { RadioButton } from "../../components/RadioButton";

export type ProjectSortOption = "active" | "archived" | null;

interface ProjectSortDropdownProps {
  selectedSort: ProjectSortOption;
  onSortChange: (sort: ProjectSortOption) => void;
}

export function ProjectSortDropdown({ selectedSort, onSortChange }: ProjectSortDropdownProps) {
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

  const handleSortSelect = (sort: ProjectSortOption) => {
    onSortChange(sort);
  };

  const handleClearAll = () => {
    onSortChange(null);
  };

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
            width: '380px',
            boxShadow: '0px 5px 25px 0px rgba(0, 0, 0, 0.05)',
            border: '1px solid var(--grey-03)',
          }}
        >
          {/* Status Section */}
          <div style={{ borderBottom: '1px solid var(--grey-03)' }}>
            <div
              style={{
                padding: 'var(--spacing-12) var(--spacing-16)',
                fontSize: '16px',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--text-primary)',
              }}
            >
              Status
            </div>
            
            {/* Active Option */}
            <div
              className="transition-colors cursor-pointer"
              style={{
                padding: 'var(--spacing-8) var(--spacing-16)',
                backgroundColor: 'white',
              }}
              onClick={() => handleSortSelect('active')}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--grey-01)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
            >
              <RadioButton
                checked={selectedSort === 'active'}
                onChange={() => handleSortSelect('active')}
                label={
                  <span
                    style={{
                      fontSize: '14px',
                      color: 'var(--text-primary)',
                      letterSpacing: '0.28px',
                    }}
                  >
                    Active
                  </span>
                }
              />
            </div>

            {/* Archived Option */}
            <div
              className="transition-colors cursor-pointer"
              style={{
                padding: 'var(--spacing-8) var(--spacing-16)',
                backgroundColor: 'white',
              }}
              onClick={() => handleSortSelect('archived')}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--grey-01)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
            >
              <RadioButton
                checked={selectedSort === 'archived'}
                onChange={() => handleSortSelect('archived')}
                label={
                  <span
                    style={{
                      fontSize: '14px',
                      color: 'var(--text-primary)',
                      letterSpacing: '0.28px',
                    }}
                  >
                    Archived
                  </span>
                }
              />
            </div>
          </div>

          {/* Clear All Button */}
          <button
            className="w-full transition-colors"
            style={{
              padding: 'var(--spacing-16)',
              backgroundColor: 'white',
              color: 'var(--grey-06)',
              fontSize: '14px',
              letterSpacing: '0.28px',
              textAlign: 'center',
              cursor: selectedSort ? 'pointer' : 'not-allowed',
              opacity: selectedSort ? 1 : 0.5,
            }}
            onClick={selectedSort ? handleClearAll : undefined}
            disabled={!selectedSort}
            onMouseEnter={(e) => {
              if (selectedSort) {
                e.currentTarget.style.backgroundColor = 'var(--grey-01)';
              }
            }}
            onMouseLeave={(e) => {
              if (selectedSort) {
                e.currentTarget.style.backgroundColor = 'white';
              }
            }}
          >
            Clear All
          </button>
        </div>
      )}
    </>
  );
}
