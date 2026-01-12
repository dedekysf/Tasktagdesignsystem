import { useState, useRef, useEffect } from "react";
import { usePopper } from "react-popper";
import { Calendar } from "../Calendar";
import { Button } from "../../../components/Button";
import svgPaths from "../../../imports/svg-suswvo893p";

interface DueDateButtonProps {
  dueDate: Date | null;
  onSelect: (date: Date | null) => void;
}

export function DueDateButton({ dueDate, onSelect }: DueDateButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [referenceElement, setReferenceElement] = useState<HTMLButtonElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "bottom-end",
    strategy: "fixed",
    modifiers: [
      {
        name: "flip",
        options: {
          fallbackPlacements: ["top-end", "bottom-start", "top-start", "left", "right"],
        },
      },
      {
        name: "preventOverflow",
        options: {
          padding: 8,
        },
      },
      {
        name: "offset",
        options: {
          offset: [0, 4],
        },
      },
    ],
  });

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const formatDate = (date: Date) => {
    const month = date.toLocaleDateString("en-US", { month: "short" });
    const day = date.getDate();
    const year = date.getFullYear();
    const currentYear = new Date().getFullYear();
    
    if (year === currentYear) {
      return `${month} ${day}`;
    } else {
      return `${month} ${day}, ${year}`;
    }
  };

  return (
    <>
      <Button
        ref={setReferenceElement}
        onClick={() => setIsOpen(!isOpen)}
        variant="outline"
        size="sm"
        className="btn-secondary shrink-0"
        style={{
          width: '76px',
          minHeight: 'var(--size-sm)',
          borderRadius: 'var(--radius-full)',
          borderColor: 'var(--grey-03)',
          justifyContent: 'center'
        }}
      >
        <svg className="size-3 shrink-0" fill="none" viewBox="0 0 12 12">
          <path
            clipRule="evenodd"
            d={svgPaths.peee4900}
            fill="var(--text-secondary)"
            fillRule="evenodd"
          />
        </svg>
        <span className="text-[12px] text-[var(--text-secondary)] truncate" style={{ fontWeight: 'var(--font-weight-regular)' }}>
          {dueDate ? formatDate(dueDate) : "Due Date"}
        </span>
      </Button>
      {isOpen && (
        <div 
          ref={(el) => {
            setPopperElement(el);
            dropdownRef.current = el;
          }}
          style={styles.popper}
          {...attributes.popper}
          className="z-[99999]"
        >
          <Calendar
            selectedDate={dueDate}
            onSelect={(date) => {
              onSelect(date);
              setIsOpen(false);
            }}
            onClose={() => setIsOpen(false)}
          />
        </div>
      )}
    </>
  );
}