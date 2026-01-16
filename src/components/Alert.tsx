import {
  AlertTriangle,
  Info,
  CircleCheckBig,
} from "lucide-react";
import { Button } from "./Button";

interface AlertProps {
  variant?: "warning" | "info" | "success" | "error";
  size?: "default";
  className?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

export function Alert({
  variant = "warning",
  size = "default",
  className = "",
  title = "Access to Team Plan for TaskTag Project has ended",
  description = "Your access ended on September 17, 2025. Upgrade to a Team plan to use advanced project features.",
  buttonText = "Upgrade Now",
  onButtonClick,
}: AlertProps) {
  // Color mapping based on variant
  const variantStyles = {
    warning: {
      background: "var(--warning-bg)",
      border: "var(--warning-border)",
      iconColor: "var(--text-primary)",
    },
    info: {
      background: "var(--info-bg)",
      border: "var(--info-border)",
      iconColor: "var(--text-primary)",
    },
    success: {
      background: "var(--success-bg)",
      border: "var(--success-border)",
      iconColor: "var(--text-primary)",
    },
    error: {
      background: "var(--error-bg)",
      border: "var(--error-border)",
      iconColor: "var(--text-primary)",
    },
  };

  // Icon mapping based on variant
  const iconMap = {
    warning: AlertTriangle,
    info: Info,
    success: CircleCheckBig,
    error: AlertTriangle,
  };

  const currentStyle = variantStyles[variant];
  const IconComponent = iconMap[variant];

  return (
    <div
      className={className}
      style={{
        backgroundColor: currentStyle.background,
        border: `1px solid ${currentStyle.border}`,
        borderRadius: "var(--radius-10)",
        padding: "16px",
        width: "100%",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "var(--spacing-24)",
          width: "100%",
        }}
      >
        {/* Content Section */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--spacing-12)",
            flex: "1 0 0",
            minHeight: "51px",
          }}
        >
          {/* Icon */}
          <IconComponent
            size={24}
            style={{
              color: currentStyle.iconColor,
              flexShrink: 0,
            }}
          />

          {/* Text Container */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--spacing-4)",
              flex: "1 0 0",
            }}
          >
            <p
              className="text-web-heading-18"
              style={{
                color: "var(--text-primary)",
                margin: 0,
              }}
            >
              {title}
            </p>
            <p
              className="text-web-label"
              style={{
                color: "var(--text-secondary)",
                margin: 0,
              }}
            >
              {description}
            </p>
          </div>
        </div>

        {/* Button */}
        <div style={{ flexShrink: 0 }}>
          <Button
            variant="fill"
            size="md"
            onClick={onButtonClick}
            className="btn-secondary"
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
}