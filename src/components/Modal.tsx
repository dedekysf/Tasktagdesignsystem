import { X } from "lucide-react";
import { Button } from "./Button";
import { ReactNode } from "react";

interface ModalProps {
  variant: "one-action" | "two-action";
  size?: "web" | "mobile";
  title: string;
  description?: string | ReactNode;
  primaryButtonText: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  onClose?: () => void;
  className?: string;
}

export function Modal({
  variant,
  size = "web",
  title,
  description,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryClick,
  onSecondaryClick,
  onClose,
  className = "",
}: ModalProps) {
  const minWidth = size === "mobile" ? "328px" : "480px";
  const isMobile = size === "mobile";

  return (
    <div
      role="dialog"
      aria-modal="true"
      style={{
        backgroundColor: "var(--white)",
        borderRadius: "var(--radius-16)",
        padding: "var(--spacing-24)",
        paddingTop: "var(--spacing-16)",
        paddingBottom: "var(--spacing-24)",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.06)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--spacing-16)",
        minWidth: minWidth,
        width: "100%",
      }}
      className={className}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <h4
          style={{
            color: "var(--text-primary)",
            margin: 0,
            fontSize: "var(--text-h4)",
            fontWeight: "var(--font-weight-semibold)",
            lineHeight: 1.5,
          }}
        >
          {title}
        </h4>
        {!isMobile && (
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--text-primary)",
            }}
            aria-label="Close"
          >
            <X size={20} />
          </button>
        )}
      </div>

      {/* Description */}
      {description &&
        (typeof description === "string" ? (
          <p
            style={{
              color: "var(--text-primary)",
              margin: 0,
              fontSize: "var(--text-label)",
              fontWeight: "var(--font-weight-regular)",
              lineHeight: 1.5,
            }}
          >
            {description}
          </p>
        ) : (
          <div
            style={{
              color: "var(--text-primary)",
            }}
          >
            {description}
          </div>
        ))}

      {/* Buttons */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: isMobile ? "flex-end" : "flex-end",
          gap: "var(--spacing-8)",
          width: "100%",
        }}
      >
        {isMobile ? (
          <>
            {/* Mobile: Cancel button on left (ghost black) */}
            {secondaryButtonText && (
              <Button
                variant="ghost"
                size="md"
                className="btn-secondary"
                onClick={onSecondaryClick}
                style={{
                  transition: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "1";
                }}
                onMouseDown={(e) => {
                  e.currentTarget.style.opacity = "0.5";
                }}
                onMouseUp={(e) => {
                  e.currentTarget.style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "1";
                }}
              >
                {secondaryButtonText}
              </Button>
            )}
            {/* Mobile: Primary button on right (ghost primary) */}
            <Button
              variant="ghost"
              size="md"
              className="btn-primary"
              onClick={onPrimaryClick}
              style={{
                transition: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "1";
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.opacity = "0.5";
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
              }}
            >
              {primaryButtonText}
            </Button>
          </>
        ) : (
          <>
            {/* Web: Standard button layout */}
            {variant === "two-action" &&
              secondaryButtonText && (
                <Button
                  variant="outline"
                  size="md"
                  onClick={onSecondaryClick}
                >
                  {secondaryButtonText}
                </Button>
              )}
            <Button
              variant="fill"
              size="md"
              className={
                variant === "one-action"
                  ? "btn-secondary"
                  : "btn-primary"
              }
              onClick={onPrimaryClick}
            >
              {primaryButtonText}
            </Button>
          </>
        )}
      </div>
    </div>
  );
}