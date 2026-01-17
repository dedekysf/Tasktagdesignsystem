import { X } from "lucide-react";
import { Button } from "./Button";
import congratsImage from "figma:asset/7cd9aa2d594bd4c7e8917b669e4dc624351b0afe.png";

interface SuccessModalProps {
  variant?: "default";
  size?: "default";
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
  title?: string;
  message?: string;
  buttonText?: string;
  showCloseButton?: boolean;
}

export function SuccessModal({
  variant = "default",
  size = "default",
  className = "",
  isOpen = false,
  onClose,
  title = "Congratulations!",
  message = "Your subscription to TaskTag Project is valid for 1 year and will automatically renew on September, 17 2026.",
  buttonText = "Got It",
  showCloseButton = true,
}: SuccessModalProps) {
  console.log('SuccessModal render - isOpen:', isOpen);
  
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "var(--overlay)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 10003,
        padding: "var(--spacing-16)",
      }}
      onClick={onClose}
    >
      <div
        className={className}
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: "var(--white)",
          borderRadius: "var(--radius-16)",
          boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.06)",
          width: "400px",
          maxWidth: "90vw",
          padding:
            "var(--spacing-16) var(--spacing-24) var(--spacing-24) var(--spacing-24)",
          display: "flex",
          flexDirection: "column",
          gap: "var(--spacing-24)",
        }}
      >
        {/* Header with Title and Close Button */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <h2
            style={{
              fontSize: "18px",
              fontWeight: "var(--font-weight-medium)",
              color: "var(--text-primary)",
              margin: 0,
              lineHeight: "24px",
            }}
          >
            {title}
          </h2>
          {onClose && showCloseButton && (
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
              }}
            >
              <X size={20} style={{ color: "var(--black)" }} />
            </button>
          )}
        </div>

        {/* Congrats Image */}
        <div
          style={{
            width: "150px",
            height: "150px",
            margin: "0 auto",
          }}
        >
          <img
            src={congratsImage}
            alt="Congratulations"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </div>

        {/* Message */}
        <p
          style={{
            fontSize: "var(--text-caption)",
            color: "var(--text-primary)",
            lineHeight: "16px",
            letterSpacing: "0.24px",
            textAlign: "center",
            margin: 0,
          }}
        >
          {message}
        </p>

        {/* Button */}
        <Button
          variant="fill"
          size="lg"
          onClick={onClose}
          className="btn-secondary"
          style={{ width: "100%" }}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
}