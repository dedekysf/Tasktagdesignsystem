import React, { useState } from "react";
import { X, Check, ChevronUp, HardHat } from "lucide-react";
import { Button } from "./Button";
import { Tag } from "./Tag";
import collaborationImage from "figma:asset/727e6b11c9799f58fcfa4a733691914bdec7af1f.png";

interface SubscriptionModalProps {
  variant?: "default";
  size?: "default";
  className?: string;
  isOpen: boolean;
  onClose?: () => void;
  onSuccess?: () => void;
}

export function SubscriptionModal({
  variant = "default",
  size = "default",
  className = "",
  isOpen,
  onClose,
  onSuccess,
}: SubscriptionModalProps) {
  const [billingCycle, setBillingCycle] = useState<
    "monthly" | "yearly"
  >("monthly");
  const [isExpanded, setIsExpanded] = useState(false);

  const benefits = [
    "2TB shared team storage",
    "Unlimited projects & tasks",
    "Add unlimited users to projects & tasks",
    "Team admin & member roles",
    "Centralized billing",
    "Global activity log for full visibility",
  ];

  const memberCount = 2;
  const pricePerMember = billingCycle === "monthly" ? 20 : 16;
  const totalCharge =
    billingCycle === "yearly"
      ? `$${pricePerMember * memberCount * 12} per year`
      : `$${pricePerMember * memberCount} per month`;

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        padding: "var(--spacing-16)",
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={className}
        style={{
          backgroundColor: "var(--white)",
          borderRadius: "var(--radius-16)",
          border: "1px solid var(--grey-03)",
          display: "flex",
          overflow: "hidden",
          width: "800px",
          maxWidth: "90vw",
          maxHeight: "90vh",
        }}
      >
        {/* Left Side - Form */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
          {/* Scrollable Content */}
          <div
            style={{
              flex: 1,
              padding: "var(--spacing-24)",
              display: "flex",
              flexDirection: "column",
              gap: "var(--spacing-24)",
              overflowY: "auto",
              paddingBottom: "180px", // Space for fixed bottom section
            }}
          >
            {/* Header */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--spacing-4)",
              }}
            >
              <h3
                style={{
                  fontSize: "var(--text-h4)",
                  fontWeight: "var(--font-weight-semibold)",
                  color: "var(--black)",
                  margin: 0,
                  lineHeight: "21px",
                }}
              >
                Upgrade to Team Plan
              </h3>
              <p
                style={{
                  fontSize: "var(--text-caption)",
                  color: "var(--grey-05)",
                  lineHeight: "16px",
                  margin: 0,
                  letterSpacing: "0.24px",
                }}
              >
                Power up your workspace with advanced team
                features.
              </p>
            </div>

            {/* Team Selection */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--spacing-8)",
              }}
            >
              <label
                style={{
                  fontSize: "var(--text-label)",
                  fontWeight: "var(--font-weight-medium)",
                  color: "var(--text-primary)",
                  lineHeight: "16px",
                }}
              >
                Team
              </label>
              <div
                style={{
                  padding: "var(--spacing-16) var(--spacing-24)",
                  border: "1px solid var(--grey-03)",
                  borderRadius: "var(--radius-8)",
                  backgroundColor: "var(--grey-02)",
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--spacing-8)",
                  cursor: "pointer",
                  height: "var(--size-lg)",
                }}
              >
                <HardHat
                  size={20}
                  style={{ color: "var(--secondary-green)" }}
                />
                <span
                  style={{
                    fontSize: "var(--text-label)",
                    fontWeight: "var(--font-weight-medium)",
                    color: "var(--text-secondary)",
                    lineHeight: "16px",
                  }}
                >
                  Scott 1
                </span>
              </div>
            </div>

            {/* Billing Cycle */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--spacing-8)",
              }}
            >
              <label
                style={{
                  fontSize: "var(--text-label)",
                  fontWeight: "var(--font-weight-medium)",
                  color: "var(--text-primary)",
                  lineHeight: "16px",
                }}
              >
                Billing Cycle
              </label>

              {/* Yearly Option */}
              {(isExpanded || billingCycle === "yearly") && (
                <div
                  onClick={() => setBillingCycle("yearly")}
                  style={{
                    padding: "10px 12px",
                    border:
                      billingCycle === "yearly"
                        ? "1px solid var(--secondary-green)"
                        : "1px solid var(--grey-03)",
                    borderRadius: "var(--radius-8)",
                    backgroundColor: "var(--white)",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "var(--spacing-4)",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "var(--text-label)",
                        fontWeight: "var(--font-weight-medium)",
                        color: "var(--text-secondary)",
                        lineHeight: "16px",
                      }}
                    >
                      Yearly
                    </span>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "var(--spacing-8)",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "var(--text-caption)",
                          color: "var(--text-secondary)",
                          lineHeight: "16px",
                          letterSpacing: "0.24px",
                        }}
                      >
                        $16 /member/month
                      </span>
                      <Tag
                        variant="basic"
                        color="primary"
                        appearance="fill"
                      >
                        Save 20%
                      </Tag>
                    </div>
                  </div>
                  {billingCycle === "yearly" && (
                    <Check
                      size={16}
                      style={{
                        color: "var(--secondary-green)",
                        flexShrink: 0,
                      }}
                    />
                  )}
                </div>
              )}

              {/* Monthly Option */}
              {(isExpanded || billingCycle === "monthly") && (
                <div
                  onClick={() => setBillingCycle("monthly")}
                  style={{
                    padding: "10px 12px",
                    border:
                      billingCycle === "monthly"
                        ? "1px solid var(--secondary-green)"
                        : "1px solid var(--grey-03)",
                    borderRadius: "var(--radius-8)",
                    backgroundColor: "var(--white)",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--spacing-4)",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "var(--spacing-4)",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "var(--text-label)",
                        fontWeight: "var(--font-weight-medium)",
                        color: "var(--text-secondary)",
                        lineHeight: "16px",
                      }}
                    >
                      Monthly
                    </span>
                    <span
                      style={{
                        fontSize: "var(--text-caption)",
                        color: "var(--text-secondary)",
                        lineHeight: "16px",
                        letterSpacing: "0.24px",
                      }}
                    >
                      $20 /member/month
                    </span>
                  </div>
                  {billingCycle === "monthly" && (
                    <Check
                      size={16}
                      style={{
                        color: "var(--secondary-green)",
                        flexShrink: 0,
                      }}
                    />
                  )}
                </div>
              )}

              {/* View Less/More */}
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--spacing-8)",
                  background: "none",
                  border: "none",
                  padding: 0,
                  fontSize: "var(--text-caption)",
                  color: "var(--grey-05)",
                  cursor: "pointer",
                  lineHeight: "16px",
                  letterSpacing: "0.24px",
                }}
              >
                view {isExpanded ? "less" : "more"}
                <ChevronUp
                  size={16}
                  style={{
                    color: "var(--grey-05)",
                    transform: isExpanded
                      ? "rotate(0deg)"
                      : "rotate(180deg)",
                    transition: "transform 0.2s",
                  }}
                />
              </button>
            </div>
          </div>

          {/* Fixed Bottom Section - Pricing Summary & Button */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              backgroundColor: "var(--white)",
              padding: "var(--spacing-24)",
              display: "flex",
              flexDirection: "column",
              gap: "var(--spacing-16)",
            }}
          >
            {/* Pricing Summary */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--spacing-8)",
              }}
            >
              <p
                style={{
                  fontSize: "var(--text-label)",
                  color: "var(--text-secondary)",
                  margin: 0,
                  lineHeight: "16px",
                  letterSpacing: "0.28px",
                }}
              >
                You'll be charged{" "}
                <span
                  style={{
                    fontWeight: "var(--font-weight-medium)",
                  }}
                >
                  {totalCharge}.
                </span>
              </p>
              <p
                style={{
                  fontSize: "var(--text-caption)",
                  color: "var(--text-secondary)",
                  margin: 0,
                  lineHeight: "16px",
                  letterSpacing: "0.24px",
                }}
              >
                Applicable taxes will be calculated at checkout
              </p>
            </div>

            {/* Continue Button - Using Button Component */}
            <Button
              variant="fill"
              size="lg"
              onClick={onSuccess}
              className="btn-primary"
              style={{ width: "100%" }}
            >
              Continue to Checkout
            </Button>
          </div>
        </div>

        {/* Right Side - Benefits */}
        <div
          style={{
            flex: 1,
            backgroundColor: "var(--light-mint)",
            padding: "var(--spacing-24)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "var(--spacing-16)",
            position: "relative",
            justifyContent: "center",
          }}
        >
          {/* Close Button */}
          {onClose && (
            <button
              onClick={onClose}
              style={{
                position: "absolute",
                top: "var(--spacing-20)",
                right: "var(--spacing-20)",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <X
                size={20}
                style={{ color: "var(--text-primary)" }}
              />
            </button>
          )}

          {/* Collaboration Image */}
          <div style={{ width: "200px", height: "200px" }}>
            <img
              src={collaborationImage}
              alt="Collaboration"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </div>

          {/* Benefits Title */}
          <h3
            style={{
              fontSize: "var(--text-h3)",
              fontWeight: "var(--font-weight-medium)",
              color: "var(--text-primary)",
              textAlign: "center",
              margin: 0,
              lineHeight: "24px",
            }}
          >
            Everything in the Team Plan:
          </h3>

          {/* Benefits List */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--spacing-16)",
              width: "100%",
            }}
          >
            {benefits.map((benefit, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--spacing-8)",
                }}
              >
                <Check
                  size={16}
                  style={{
                    color: "var(--secondary-green)",
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                />
                <span
                  style={{
                    fontSize: "var(--text-caption)",
                    color: "var(--text-primary)",
                    lineHeight: "16px",
                    letterSpacing: "0.24px",
                  }}
                >
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}