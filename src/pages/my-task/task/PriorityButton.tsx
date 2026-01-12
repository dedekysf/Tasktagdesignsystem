import { useState, useRef, useEffect } from "react";
import { usePopper } from "react-popper";
import { PriorityDropdown } from "../PriorityDropdown";
import svgPaths from "../../../imports/svg-3x9ir0o7gu";

interface PriorityButtonProps {
  priority: "high" | "medium" | "low";
  onSelect: (priority: "high" | "medium" | "low") => void;
}

export function PriorityButton({ priority, onSelect }: PriorityButtonProps) {
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

  const getPriorityIcon = (p: "high" | "medium" | "low") => {
    if (p === "high") {
      return (
        <svg className="size-4" fill="none" viewBox="0 0 16 16">
          <path clipRule="evenodd" d={svgPaths.p2d174700} fill="var(--alert-red)" fillRule="evenodd" />
        </svg>
      );
    }
    if (p === "medium") {
      return (
        <svg className="size-4" fill="none" viewBox="0 0 16 16">
          <path d={svgPaths.p3a90b5c0} fill="var(--vivid-yellow)" />
          <path d={svgPaths.p140f5900} fill="var(--vivid-yellow)" />
        </svg>
      );
    }
    return (
      <svg className="size-4" fill="none" viewBox="0 0 16 16">
        <path clipRule="evenodd" d={svgPaths.pcab4b00} fill="var(--pastel-blue)" fillRule="evenodd" />
      </svg>
    );
  };

  return (
    <>
      <button
        ref={setReferenceElement}
        className="rounded-full border border-[#e8e8e8] bg-white hover:bg-secondary flex items-center justify-center transition-colors cursor-pointer shrink-0"
        style={{
          width: '76px',
          height: 'var(--size-sm)'
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {getPriorityIcon(priority)}
      </button>
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
          <PriorityDropdown
            onSelect={(p) => {
              onSelect(p);
              setIsOpen(false);
            }}
            onClose={() => setIsOpen(false)}
          />
        </div>
      )}
    </>
  );
}