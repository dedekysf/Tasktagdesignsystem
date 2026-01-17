import { useState } from "react";
import {
  ArrowLeft,
  ChevronDown,
  Info,
  CreditCard,
  Building2,
} from "lucide-react";
import { Button } from "../components/Button";
import { Toggle } from "../components/Toggle";
import { Tag } from "../components/Tag";
import TaskTagLogo from "../imports/TaskTagLogo";

interface PaymentPageProps {
  onBack?: () => void;
  onSubscribe?: () => void;
}

export default function PaymentPage({ onBack, onSubscribe }: PaymentPageProps = {}) {
  const [isAnnual, setIsAnnual] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState<
    "card" | "bank"
  >("card");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [zipCode, setZipCode] = useState("");

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove non-digits
    if (value.length <= 16) {
      // Format as XXXX XXXX XXXX XXXX
      const formatted = value.match(/.{1,4}/g)?.join(" ") || value;
      setCardNumber(formatted);
    }
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove non-digits
    if (value.length <= 4) {
      // Format as MM/YY
      if (value.length >= 2) {
        setExpiryDate(value.slice(0, 2) + " / " + value.slice(2));
      } else {
        setExpiryDate(value);
      }
    }
  };

  const handleCvcChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove non-digits
    if (value.length <= 3) {
      setCvc(value);
    }
  };

  const handleZipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove non-digits
    setZipCode(value);
  };

  const handleSubscribe = () => {
    // Simulate a successful subscription
    if (onSubscribe) {
      onSubscribe();
    }
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "var(--white)",
      }}
    >
      {/* Left Panel - Order Summary */}
      <div
        style={{
          flex: 1,
          backgroundColor: "var(--grey-02)",
          padding: "var(--spacing-40)",
          paddingLeft: "24px",
          paddingRight: "24px",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "var(--spacing-40)",
        }}
      >
        {/* Logo and Back Button */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--spacing-16)",
          }}
        >
          <button
            style={{
              width: "28px",
              height: "28px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              color: "var(--text-primary)",
              padding: 0,
            }}
            onClick={() => (onBack ? onBack() : window.history.back())}
          >
            <ArrowLeft size={28} />
          </button>
          <div style={{ width: "135px", height: "40px" }}>
            <TaskTagLogo />
          </div>
        </div>

        {/* Subscription Details */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--spacing-8)",
          }}
        >
          <p
            className="text-web-secondary-body"
            style={{
              color: "var(--text-secondary)",
              margin: 0,
            }}
          >
            Subscribe to Team Plan
          </p>
          <div style={{ margin: 0 }}>
            <span
              style={{
                fontSize: "28px",
                fontWeight: "var(--font-weight-semibold)",
                color: "var(--text-secondary)",
                lineHeight: "32px",
              }}
            >
              $384.00
            </span>
            <span
              className="text-web-metadata-primary"
              style={{
                color: "var(--text-secondary)",
              }}
            >
              {" "}
              per year
            </span>
          </div>
          <p
            className="text-web-secondary-body"
            style={{
              color: "var(--text-secondary)",
              margin: 0,
            }}
          >
            $16 /month/member billed annually
          </p>
        </div>

        {/* Plan Details Card */}
        <div
          style={{
            backgroundColor: "var(--white)",
            borderRadius: "var(--radius-8)",
            border: "1px solid var(--border)",
            overflow: "hidden",
          }}
        >
          {/* Team Plan Row */}
          <div
            style={{
              padding: "var(--spacing-24)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p
              className="text-web-body"
              style={{
                margin: 0,
                color: "var(--text-primary)",
              }}
            >
              Team Plan
            </p>
            <p
              className="text-web-body"
              style={{
                margin: 0,
                color: "var(--text-secondary)",
              }}
            >
              $384.00 / year
            </p>
          </div>

          {/* Annual Billing Toggle Row */}
          <div
            style={{
              backgroundColor: "var(--grey-02)",
              padding: "var(--spacing-16) var(--spacing-24)",
              display: "flex",
              alignItems: "center",
              gap: "var(--spacing-8)",
            }}
          >
            <Toggle
              checked={isAnnual}
              onCheckedChange={(checked) => setIsAnnual(checked)}
              size="md"
            />
            <Tag variant="basic" color="primary" appearance="fill">
              Save 20%
            </Tag>
            <p
              className="text-web-metadata-primary"
              style={{
                flex: 1,
                margin: 0,
                color: "var(--grey-05)",
              }}
            >
              with annual billing
            </p>
            <p
              className="text-web-metadata-primary"
              style={{
                margin: 0,
                color: "var(--grey-05)",
              }}
            >
              $16 /month/member
            </p>
          </div>
        </div>

        {/* Pricing Breakdown */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--spacing-16)",
            padding: "0 var(--spacing-24)",
          }}
        >
          {/* Subtotal */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span
              className="text-web-secondary-body"
              style={{ color: "var(--text-primary)" }}
            >
              Subtotal
            </span>
            <span
              className="text-web-secondary-body"
              style={{ color: "var(--text-primary)" }}
            >
              $384.00
            </span>
          </div>

          {/* Tax */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <span
                className="text-web-secondary-body"
                style={{ color: "var(--text-primary)" }}
              >
                Tax
              </span>
              <Info size={16} color="var(--text-primary)" />
            </div>
            <span
              className="text-web-secondary-body"
              style={{ color: "var(--grey-05)" }}
            >
              $0.00
            </span>
          </div>

          {/* Divider */}
          <div
            style={{
              height: "1px",
              backgroundColor: "var(--border)",
            }}
          />

          {/* Total */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span
              className="text-web-body"
              style={{
                color: "var(--text-primary)",
                fontWeight: "var(--font-weight-semibold)",
              }}
            >
              Total due today
            </span>
            <span
              className="text-web-body"
              style={{
                color: "var(--text-primary)",
                fontWeight: "var(--font-weight-semibold)",
              }}
            >
              $384.00
            </span>
          </div>
        </div>
      </div>

      {/* Right Panel - Payment Form */}
      <div
        style={{
          flex: 1,
          backgroundColor: "var(--white)",
          padding: "var(--spacing-40)",
          paddingLeft: "40px",
          paddingRight: "40px",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "var(--spacing-40)",
          justifyContent: "center",
        }}
      >
        {/* Payment Method Section */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--spacing-16)",
          }}
        >
          <h3
            className="text-web-large-label"
            style={{
              margin: 0,
              color: "var(--text-primary)",
            }}
          >
            Payment method
          </h3>

          {/* Payment Method Toggle */}
          <div
            style={{
              display: "flex",
              gap: "var(--spacing-16)",
            }}
          >
            <button
              onClick={() => setPaymentMethod("card")}
              style={{
                flex: 1,
                padding: "var(--spacing-12)",
                backgroundColor: "var(--white)",
                border:
                  paymentMethod === "card"
                    ? "1px solid var(--text-secondary)"
                    : "1px solid var(--border)",
                borderRadius: "var(--radius-8)",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                gap: "var(--spacing-4)",
                alignItems: "flex-start",
              }}
            >
              <CreditCard
                size={24}
                color="var(--text-secondary)"
              />
              <span
                className="text-web-label-small"
                style={{
                  color: "var(--text-secondary)",
                }}
              >
                Card
              </span>
            </button>

            <button
              onClick={() => setPaymentMethod("bank")}
              style={{
                flex: 1,
                padding: "var(--spacing-12)",
                backgroundColor: "var(--white)",
                border:
                  paymentMethod === "bank"
                    ? "1px solid var(--text-secondary)"
                    : "1px solid var(--border)",
                borderRadius: "var(--radius-8)",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                gap: "var(--spacing-4)",
                alignItems: "flex-start",
              }}
            >
              <Building2
                size={24}
                color="var(--text-secondary)"
              />
              <span
                className="text-web-label-small"
                style={{
                  color: "var(--text-secondary)",
                }}
              >
                US Bank Account
              </span>
            </button>
          </div>

          {/* Card Information */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--spacing-4)",
            }}
          >
            <label
              className="text-web-metadata-primary"
              style={{
                color: "var(--text-primary)",
              }}
            >
              Card information
            </label>
            <div
              style={{
                backgroundColor: "var(--white)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-8)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--spacing-16)",
                  padding:
                    "var(--spacing-12) var(--spacing-16)",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <input
                  type="text"
                  placeholder="1234 1234 1234 1234"
                  className="text-web-secondary-body"
                  style={{
                    flex: 1,
                    border: "none",
                    outline: "none",
                    fontFamily: "Inter, sans-serif",
                    color: "var(--grey-05)",
                    backgroundColor: "transparent",
                  }}
                  value={cardNumber}
                  onChange={handleCardNumberChange}
                />
                <div
                  style={{
                    display: "flex",
                    gap: "var(--spacing-8)",
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <rect
                      x="0.5"
                      y="3.5"
                      width="23"
                      height="16"
                      rx="2"
                      fill="white"
                      stroke="#D9D9D9"
                    />
                    <path
                      d="M7.3306 14.5163H5.87667L4.78639 10.2196C4.73464 10.022 4.62476 9.84722 4.46314 9.76487C4.05978 9.55791 3.6153 9.39321 3.13042 9.31014V9.14472H5.4726C5.79585 9.14472 6.03829 9.39321 6.0787 9.6818L6.64439 12.7811L8.09762 9.14472H9.51115L7.3306 14.5163ZM10.3193 14.5163H8.94616L10.0768 9.14472H11.45L10.3193 14.5163ZM13.2264 10.6328C13.2669 10.3435 13.5093 10.1781 13.7921 10.1781C14.2366 10.1365 14.7208 10.2196 15.1249 10.4258L15.3673 9.26932C14.9632 9.1039 14.5188 9.02083 14.1154 9.02083C12.7827 9.02083 11.8129 9.76487 11.8129 10.7975C11.8129 11.5831 12.4998 11.9956 12.9847 12.244C13.5093 12.4918 13.7113 12.6572 13.6709 12.905C13.6709 13.2767 13.2669 13.4421 12.8635 13.4421C12.3786 13.4421 11.8937 13.3182 11.45 13.1113L11.2075 14.2685C11.6924 14.4747 12.217 14.5578 12.7019 14.5578C14.1962 14.5986 15.1249 13.8553 15.1249 12.7396C15.1249 11.3346 13.2264 11.2522 13.2264 10.6328V10.6328ZM19.9304 14.5163L18.8402 9.14472H17.6691C17.4266 9.14472 17.1842 9.31014 17.1034 9.55791L15.0845 14.5163H16.498L16.7801 13.7314H18.5169L18.6785 14.5163H19.9304ZM17.8711 10.5913L18.2744 12.6157H17.1438L17.8711 10.5913Z"
                      fill="#172B85"
                    />
                  </svg>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <rect
                      x="0.5"
                      y="3.5"
                      width="23"
                      height="17"
                      rx="2"
                      fill="white"
                      stroke="#D9D9D9"
                    />
                    <circle
                      cx="8.65"
                      cy="12"
                      r="5.25"
                      fill="#ED0006"
                    />
                    <circle
                      cx="15.65"
                      cy="12"
                      r="5.25"
                      fill="#F9A000"
                    />
                    <path
                      d="M12 8C13 9 13.5 10.5 13.5 12C13.5 13.5 13 15 12 16C11 15 10.5 13.5 10.5 12C10.5 10.5 11 9 12 8Z"
                      fill="#FF5E00"
                    />
                  </svg>
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <input
                  type="text"
                  placeholder="MM / YY"
                  className="text-web-secondary-body"
                  style={{
                    flex: 1,
                    padding:
                      "var(--spacing-12) var(--spacing-16)",
                    border: "none",
                    borderRight: "1px solid var(--border)",
                    borderBottom: "1px solid var(--border)",
                    outline: "none",
                    fontFamily: "Inter, sans-serif",
                    color: "var(--grey-05)",
                    backgroundColor: "transparent",
                  }}
                  value={expiryDate}
                  onChange={handleExpiryChange}
                />
                <input
                  type="text"
                  placeholder="CVC"
                  className="text-web-secondary-body"
                  style={{
                    flex: 1,
                    padding:
                      "var(--spacing-12) var(--spacing-16)",
                    border: "none",
                    borderBottom: "1px solid var(--border)",
                    outline: "none",
                    fontFamily: "Inter, sans-serif",
                    color: "var(--grey-05)",
                    backgroundColor: "transparent",
                  }}
                  value={cvc}
                  onChange={handleCvcChange}
                />
              </div>
            </div>
          </div>

          {/* Cardholder Name */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--spacing-4)",
            }}
          >
            <label
              className="text-web-metadata-primary"
              style={{
                color: "var(--text-primary)",
              }}
            >
              Cardholder name
            </label>
            <div
              style={{
                backgroundColor: "var(--white)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-8)",
                padding: "var(--spacing-12) var(--spacing-16)",
              }}
            >
              <input
                type="text"
                placeholder="Full name on card"
                className="text-web-secondary-body"
                style={{
                  width: "100%",
                  border: "none",
                  outline: "none",
                  fontFamily: "Inter, sans-serif",
                  color: "var(--grey-05)",
                  backgroundColor: "transparent",
                }}
              />
            </div>
          </div>

          {/* Billing Address */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--spacing-4)",
            }}
          >
            <label
              className="text-web-metadata-primary"
              style={{
                color: "var(--text-primary)",
              }}
            >
              Billing address
            </label>
            <div
              style={{
                backgroundColor: "var(--white)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-8)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding:
                    "var(--spacing-12) var(--spacing-16)",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <span
                  className="text-web-secondary-body"
                  style={{
                    color: "var(--text-secondary)",
                  }}
                >
                  United States
                </span>
                <ChevronDown
                  size={24}
                  color="var(--text-primary)"
                />
              </div>
              <input
                type="text"
                placeholder="Address line 1"
                className="text-web-secondary-body"
                style={{
                  width: "100%",
                  padding:
                    "var(--spacing-12) var(--spacing-16)",
                  border: "none",
                  borderBottom: "1px solid var(--border)",
                  outline: "none",
                  fontFamily: "Inter, sans-serif",
                  color: "var(--grey-05)",
                  backgroundColor: "transparent",
                }}
              />
              <input
                type="text"
                placeholder="Address line 2"
                className="text-web-secondary-body"
                style={{
                  width: "100%",
                  padding:
                    "var(--spacing-12) var(--spacing-16)",
                  border: "none",
                  borderBottom: "1px solid var(--border)",
                  outline: "none",
                  fontFamily: "Inter, sans-serif",
                  color: "var(--grey-05)",
                  backgroundColor: "transparent",
                }}
              />
              <div style={{ display: "flex" }}>
                <input
                  type="text"
                  placeholder="City"
                  className="text-web-secondary-body"
                  style={{
                    flex: 1,
                    padding:
                      "var(--spacing-12) var(--spacing-16)",
                    border: "none",
                    borderRight: "1px solid var(--border)",
                    borderBottom: "1px solid var(--border)",
                    outline: "none",
                    fontFamily: "Inter, sans-serif",
                    color: "var(--grey-05)",
                    backgroundColor: "transparent",
                  }}
                />
                <input
                  type="text"
                  placeholder="ZIP"
                  className="text-web-secondary-body"
                  style={{
                    flex: 1,
                    padding:
                      "var(--spacing-12) var(--spacing-16)",
                    border: "none",
                    borderBottom: "1px solid var(--border)",
                    outline: "none",
                    fontFamily: "Inter, sans-serif",
                    color: "var(--grey-05)",
                    backgroundColor: "transparent",
                  }}
                  value={zipCode}
                  onChange={handleZipChange}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding:
                    "var(--spacing-12) var(--spacing-16)",
                }}
              >
                <span
                  className="text-web-secondary-body"
                  style={{
                    color: "var(--grey-05)",
                  }}
                >
                  State
                </span>
                <ChevronDown
                  size={24}
                  color="var(--text-primary)"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Subscribe Button */}
        <Button
          variant="fill"
          size="lg"
          className="btn-primary"
          style={{ width: "100%" }}
          onClick={handleSubscribe}
        >
          Subscribe
        </Button>

        {/* Footer Text */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--spacing-16)",
            textAlign: "center",
          }}
        >
          <p
            className="text-web-metadata-primary"
            style={{
              margin: 0,
              color: "var(--grey-05)",
            }}
          >
            By subscribing, you authorize Todoist to charge you
            according to the terms until you cancel.
          </p>
          <p
            className="text-web-metadata-primary"
            style={{
              margin: 0,
              color: "var(--grey-05)",
            }}
          >
            Powered by{" "}
            <strong
              style={{
                fontWeight: "var(--font-weight-semibold)",
              }}
            >
              stripe
            </strong>{" "}
            | Terms Privacy
          </p>
        </div>
      </div>
    </div>
  );
}