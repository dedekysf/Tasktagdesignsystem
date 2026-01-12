import { useEffect, useRef } from "react";
import { X } from "lucide-react";

interface DiscardChangesModalProps {
  isOpen: boolean;
  onDiscard: () => void;
  onCancel: () => void;
  title?: string;
  description?: string;
  actionButtonText?: string;
  className?: string;
}

export function DiscardChangesModal({ 
  isOpen, 
  onDiscard, 
  onCancel,
  title = "Discard Changes",
  description = "Are you sure you want to discard this task?",
  actionButtonText = "Discard",
  className = ""
}: DiscardChangesModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      
      // Check if click is inside modal
      if (modalRef.current && modalRef.current.contains(target)) {
        return;
      }
      
      // Click is outside modal, cancel
      onCancel();
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onCancel();
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
  }, [isOpen, onCancel]);

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center ${className}`} role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Modal */}
      <div ref={modalRef} className="relative z-10 w-[400px]">
        <div className="bg-white box-border content-stretch flex flex-col items-start p-[24px] relative rounded-[16px] w-full">
          <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-[-1px] pointer-events-none rounded-[17px]" />
          
          {/* Header with Title and Close Button */}
          <div className="w-full mb-4 flex items-center justify-between">
            <h2 className="text-[16px] text-[var(--text-primary)] leading-[24px]" style={{ fontWeight: 'var(--font-weight-semibold)' }}>
              {title}
            </h2>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onCancel();
              }}
              className="size-6 flex items-center justify-center rounded hover:bg-secondary transition-colors"
            >
              <X className="size-4 text-[var(--text-secondary)]" />
            </button>
          </div>

          {/* Content */}
          <div className="w-full mb-6">
            <p className="text-[14px] text-[var(--text-secondary)] leading-[20px] tracking-[0.28px] whitespace-pre-line" style={{ fontWeight: 'var(--font-weight-regular)' }}>
              {description}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex w-full justify-end">
            {/* Discard Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDiscard();
              }}
              className="px-4 py-2 rounded-[8px] bg-black hover:bg-black/90 transition-colors cursor-pointer"
            >
              <span className="text-[14px] text-white tracking-[0.28px]" style={{ fontWeight: 'var(--font-weight-semibold)' }}>
                {actionButtonText}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
