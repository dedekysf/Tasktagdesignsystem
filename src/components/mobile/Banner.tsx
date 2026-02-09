import React from "react";
import { toast } from "sonner";
import { UserPlus, X } from "lucide-react";
import { Button } from "../Button";
import { Avatar } from "../AvatarComponent";

export type BannerVariant = "1 CTA" | "2 CTA";
export type BannerSize = "sm" | "md" | "lg";

interface BannerProps {
  variant?: BannerVariant;
  size?: BannerSize;
  className?: string;
  onPrimaryAction?: () => void;
  onSecondaryAction?: () => void;
  onDismiss?: () => void;
}

export function Banner({
  variant = "1 CTA",
  size = "md",
  className = "",
  onPrimaryAction,
  onSecondaryAction,
  onDismiss,
}: BannerProps) {
  // Common content for both variants
  const content = {
    title: "Don’t Build Alone",
    description: "Projects work better with others. Invite someone to collaborate on this project.",
    icon: UserPlus,
  };

  const handleDismiss = () => {
    if (onDismiss) {
      onDismiss();
    }
  };

  const handleInvite = () => {
    if (onPrimaryAction) {
      onPrimaryAction();
    } else {
      toast.success("Invite sent!");
    }
  };

  return (
    <div
      className={`w-[343px] bg-[var(--black)] rounded-[var(--radius-16)] p-[var(--spacing-16)] flex flex-col gap-[var(--spacing-16)] shadow-[0px_5px_25px_0px_rgba(0,0,0,0.05)] ${className}`}
      data-size={size}
    >
      <div className="flex items-start gap-2 w-full">
        {/* Avatar Icon - Same for both variants */}
        <Avatar
          size="md"
          variant="icon"
          backgroundColor="rgba(3, 91, 96, 0.5)"
          iconColor="var(--secondary-green)"
          style={{ border: "none" }}
          icon={content.icon}
        />

        {/* Content - Same for both variants */}
        <div className="flex flex-col gap-[4px] flex-1 text-white">
          <p className="text-mobile-label-emphasized text-white">
            {content.title}
          </p>
          <p className="text-mobile-metadata-primary text-white/70">
            {content.description}
          </p>
        </div>

        {/* Close Icon - Only for 1 CTA variant */}
        {variant === "1 CTA" && (
          <button
            onClick={handleDismiss}
            className="text-white/70 hover:text-white transition-colors"
            aria-label="Dismiss"
          >
            <X size={20} />
          </button>
        )}
      </div>

      {/* Buttons - Differ by variant */}
      {variant === "2 CTA" ? (
        <div className="flex gap-[var(--spacing-16)] w-full">
          <Button
            onClick={onSecondaryAction}
            size="lg"
            className="flex-1 border border-white bg-transparent text-white hover:bg-white/10 active:bg-white/20"
          >
            Later
          </Button>
          <Button
            onClick={onPrimaryAction}
            size="lg"
            className="flex-1 bg-[var(--primary)] text-white hover:opacity-90 active:opacity-80 border-none"
          >
            Invite Member
          </Button>
        </div>
      ) : (
        <Button
          onClick={handleInvite}
          size="lg"
          className="w-full bg-[var(--primary)] text-white hover:opacity-90 active:opacity-80 border-none"
        >
          Invite Member
        </Button>
      )}
    </div>
  );
}
