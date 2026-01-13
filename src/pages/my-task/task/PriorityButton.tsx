import { useState, useRef, useEffect } from "react";
import { usePopper } from "react-popper";
import { PriorityDropdown } from "../PriorityDropdown";
import svgPaths from "../../../imports/svg-3x9ir0o7gu";
import { Button } from "../../../components/Button";

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
        <div className="size-4 flex items-center justify-center" style={{ height: '16px', width: '16px' }}>
          <svg className="size-4" fill="none" viewBox="0 0 16 16">
            <path clipRule="evenodd" d={svgPaths.p2d174700} fill="var(--alert-red)" fillRule="evenodd" />
          </svg>
        </div>
      );
    }
    if (p === "medium") {
      return (
        <div 
          className="size-4 flex items-center justify-center" 
          style={{ 
            height: '16px', 
            width: '16px',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2px'
          }}>
            <div style={{ 
              width: '12px', 
              height: '2px', 
              backgroundColor: 'var(--vivid-yellow)', 
              borderRadius: '9999px' 
            }} />
            <div style={{ 
              width: '12px', 
              height: '2px', 
              backgroundColor: 'var(--vivid-yellow)', 
              borderRadius: '9999px' 
            }} />
          </div>
        </div>
      );
    }
    return (
      <div className="size-4 flex items-center justify-center" style={{ height: '16px', width: '16px' }}>
        <svg className="size-4" fill="none" viewBox="0 0 16 16">
          <path clipRule="evenodd" d={svgPaths.pcab4b00} fill="var(--pastel-blue)" fillRule="evenodd" />
        </svg>
      </div>
    );
  };

  return (
    <>
      <Button
        ref={setReferenceElement}
        variant="outline"
        size="sm"
        className="btn-secondary shrink-0"
        style={{
          width: '76px',
          height: 'var(--size-sm)',
          minHeight: 'var(--size-sm)',
          maxHeight: 'var(--size-sm)',
          padding: '0 var(--spacing-12)',
          borderRadius: 'var(--radius-full)',
          borderColor: 'var(--grey-03)',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxSizing: 'border-box',
          overflow: 'hidden',
          lineHeight: '0',
          flex: 'none',
          gap: '0',
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {getPriorityIcon(priority)}
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