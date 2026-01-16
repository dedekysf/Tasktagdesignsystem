import { ReactNode } from "react";
import { Crown, Check } from "lucide-react";

interface UpgradePromptModalProps {
  variant: "confirmation";
  size?: "web";
  title?: string;
  description?: string;
  benefits?: string[];
  benefitsTitle?: string;
  buttonText?: string;
  onUpgradeClick?: () => void;
  className?: string;
}

export function UpgradePromptModal({
  variant,
  size = "web",
  title = "Reactivate Your Team",
  description = "Your team access has expired. Upgrade to the Team Plan to restore collaboration and unlock all features.",
  benefits = [
    "2TB shared team storage",
    "Unlimited projects & tasks",
    "Add unlimited users to projects & tasks",
    "Team admin & member roles",
    "Centralized billing",
    "Global activity log for full visibility"
  ],
  benefitsTitle = "Team Plan includes:",
  buttonText = "Upgrade to Team Plan",
  onUpgradeClick,
  className = ""
}: UpgradePromptModalProps) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      style={{
        backgroundColor: "var(--white)",
        borderRadius: "var(--radius-16)",
        padding: "var(--spacing-24)",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.06)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--spacing-24)",
        alignItems: "center",
        width: size === "web" ? "600px" : "328px",
        maxWidth: "90vw",
      }}
      className={className}
    >
      {/* Icon */}
      <div
        style={{
          backgroundColor: "#dcf2ec",
          borderRadius: "var(--radius-12)",
          padding: "12.8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Crown size={36} style={{ color: "var(--primary)" }} />
      </div>

      {/* Title and Description */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--spacing-8)",
          alignItems: "center",
          textAlign: "center",
          width: "100%",
        }}
      >
        <h3
          className="text-web-heading-22"
          style={{
            color: "var(--text-primary)",
            margin: 0,
          }}
        >
          {title}
        </h3>
        <p
          className="text-web-body"
          style={{
            color: "var(--text-secondary)",
            margin: 0,
          }}
        >
          {description}
        </p>
      </div>

      {/* Benefits List */}
      <div
        style={{
          backgroundColor: "var(--grey-01)",
          borderRadius: "var(--radius-16)",
          padding: "var(--spacing-16)",
          display: "flex",
          flexDirection: "column",
          gap: "var(--spacing-16)",
          width: "100%",
        }}
      >
        <p
          className="text-web-label-small"
          style={{
            color: "var(--text-primary)",
            margin: 0,
          }}
        >
          {benefitsTitle}
        </p>
        {benefits.map((benefit, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              gap: "var(--spacing-8)",
              alignItems: "center",
            }}
          >
            <Check size={16} style={{ color: "var(--primary)" }} />
            <p
              className="text-web-metadata-primary"
              style={{
                color: "var(--text-primary)",
                margin: 0,
              }}
            >
              {benefit}
            </p>
          </div>
        ))}
      </div>

      {/* Button */}
      <div
        style={{
          display: "flex",
          width: "100%",
        }}
      >
        <button
          onClick={onUpgradeClick}
          className="text-web-button"
          style={{
            backgroundColor: "var(--text-secondary)",
            color: "var(--white)",
            borderRadius: "var(--radius-8)",
            padding: "var(--spacing-16) var(--spacing-24)",
            border: "none",
            cursor: "pointer",
            width: "100%",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = "0.9";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = "1";
          }}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}