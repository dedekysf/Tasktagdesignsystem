import { useState, useEffect, useRef } from "react";
import { ListFilter, X } from "lucide-react";
import { Checkbox } from "../../components/Checkbox";

interface FileFilterState {
  myUpload: boolean;
  media: boolean;
  document: boolean;
}

interface FileFilterDropdownProps {
  filters: FileFilterState;
  onFiltersChange: (filters: FileFilterState) => void;
}

export function FileFilterDropdown({
  filters,
  onFiltersChange,
}: FileFilterDropdownProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  // Position dropdown below button
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (isOpen && buttonRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      setPosition({
        top: buttonRect.bottom + 8,
        left: buttonRect.left,
      });
    }
  }, [isOpen, buttonRef]);

  // Close on click outside
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

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, buttonRef]);

  // Close on ESC
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const toggleMyUpload = () => {
    onFiltersChange({ ...filters, myUpload: !filters.myUpload });
  };

  const toggleMedia = () => {
    onFiltersChange({ ...filters, media: !filters.media });
  };

  const toggleDocument = () => {
    onFiltersChange({ ...filters, document: !filters.document });
  };

  const handleClearAll = () => {
    onFiltersChange({
      myUpload: false,
      media: false,
      document: false,
    });
  };

  const totalFilterCount =
    (filters.myUpload ? 1 : 0) +
    (filters.media ? 1 : 0) +
    (filters.document ? 1 : 0);

  return (
    <>
      {/* Filter Button */}
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className={`h-10 flex items-center justify-center gap-2 px-4 rounded-lg transition-colors cursor-pointer ${
          isOpen || totalFilterCount > 0 ? "bg-secondary" : "hover:bg-secondary"
        }`}
        style={{ fontWeight: "var(--font-weight-semibold)" }}
      >
        <ListFilter className="size-4 shrink-0" />
        <span className="text-[14px] leading-none">Filter</span>

        {/* Filter Count Badge */}
        {totalFilterCount > 0 && (
          <>
            <div className="bg-[var(--secondary-green)] min-w-5 h-5 px-1.5 rounded-full flex items-center justify-center">
              <span
                className="text-white text-[12px]"
                style={{ fontWeight: "var(--font-weight-regular)" }}
              >
                {totalFilterCount}
              </span>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleClearAll();
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

      {/* Dropdown */}
      {isOpen && (
        <div
          ref={dropdownRef}
          className="fixed z-50 w-[380px] bg-white rounded-[8px]"
          style={{
            top: `${position.top}px`,
            left: `${position.left}px`,
            boxShadow: "var(--elevation-lg)",
            border: "1px solid var(--border)",
          }}
        >
          {/* Filter Options - No Accordion */}
          <div className="py-2">
            <div
              className="px-4 py-2 transition-colors cursor-pointer"
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--grey-02)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "transparent")
              }
            >
              <Checkbox
                variant="rectangular"
                checked={filters.myUpload}
                onChange={toggleMyUpload}
                label={<span>My Upload</span>}
              />
            </div>
            <div
              className="px-4 py-2 transition-colors cursor-pointer"
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--grey-02)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "transparent")
              }
            >
              <Checkbox
                variant="rectangular"
                checked={filters.media}
                onChange={toggleMedia}
                label={<span>Media</span>}
              />
            </div>
            <div
              className="px-4 py-2 transition-colors cursor-pointer"
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--grey-02)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "transparent")
              }
            >
              <Checkbox
                variant="rectangular"
                checked={filters.document}
                onChange={toggleDocument}
                label={<span>Document</span>}
              />
            </div>
          </div>

          {/* Clear All */}
          <button
            onClick={handleClearAll}
            disabled={totalFilterCount === 0}
            className={`w-full p-4 text-center transition-colors rounded-b-[8px] ${
              totalFilterCount > 0
                ? "cursor-pointer"
                : "cursor-not-allowed opacity-50"
            }`}
            onMouseEnter={(e) => {
              if (totalFilterCount > 0) {
                e.currentTarget.style.backgroundColor = "var(--grey-01)";
              }
            }}
            onMouseLeave={(e) => {
              if (totalFilterCount > 0) {
                e.currentTarget.style.backgroundColor = "transparent";
              }
            }}
            style={{
              color: "var(--grey-06)",
              fontSize: "14px",
              letterSpacing: "0.28px",
              borderTop: "1px solid var(--border)",
            }}
          >
            Clear All
          </button>
        </div>
      )}
    </>
  );
}
