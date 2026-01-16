import { ReactNode } from "react";
import svgPaths from "../imports/svg-iwr5cqdfb5";

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

function CrownIcon() {
  return (
    <div className="relative shrink-0 size-[36px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g>
          <path 
            d={svgPaths.p28c65d00} 
            stroke="var(--primary)" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="3" 
          />
          <path 
            d="M7.50005 31.5004H28.5" 
            stroke="var(--primary)" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="3" 
          />
        </g>
      </svg>
    </div>
  );
}

function CheckIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g>
          <path 
            clipRule="evenodd" 
            d={svgPaths.p1547ca00} 
            fill="var(--primary)" 
            fillRule="evenodd" 
          />
        </g>
      </svg>
    </div>
  );
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
        minWidth: size === "web" ? "480px" : "328px",
        width: "100%",
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
        <CrownIcon />
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
            <CheckIcon />
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